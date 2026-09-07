/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { useEffect, useRef, useState } from 'react';
import Drawer from '../modal/Drawer';
import Conversation from './Conversation';
import InputForm from './InputForm';
import { IModalProps } from '../modal/Portal';
import axios from 'axios';
import Image from 'next/image';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import getLocationInfo from '@/utils/getLocationInfo';

interface ChatData {
  system: string;
  user: string;
}

const ChatContainer = ({ active, onClose }: IModalProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState('');
  const [chatList, setChatList] = useState<ChatData[]>([
    {
      system:
        '안녕하세요! 저는 이은빈의 포트폴리오 AI입니다. 😊 제가 알고 있는 내용을 바탕으로 최선을 다해 답변드릴게요. 궁금한 점이 있다면 편하게 물어보세요!',
      user: '',
    },
  ]);

  const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const setSystemChat = (value: string) => {
    setChatList((prev) =>
      prev.map((chat, idx) =>
        idx === prev.length - 1 ? { ...chat, system: value } : chat,
      ),
    );
  };

  /**
   * Chat Completions API는 상태를 저장하지 않으므로,
   * 이전 대화를 role별 메시지로 변환해 매 요청마다 함께 전달합니다.
   */
  const toMessages = (chats: ChatData[]) =>
    chats.flatMap((chat) => [
      ...(chat.user ? [{ role: 'user' as const, content: chat.user }] : []),
      ...(chat.system
        ? [{ role: 'assistant' as const, content: chat.system }]
        : []),
    ]);

  const handleSubmitForm: React.FormEventHandler<HTMLFormElement> = async (
    e,
  ) => {
    e.preventDefault();

    const question = value.trim();

    if (!question) {
      return;
    }

    setChatList((prev) => [...prev, { user: question, system: '' }]);
    setValue('');
    try {
      const messages = [
        ...toMessages(chatList),
        { role: 'user' as const, content: question },
      ];
      const res = (await axios.post('/api/chat', { messages })).data.choices[0]
        .message.content;
      const location = await getLocationInfo();
      setSystemChat(res);
      await addDoc(collection(db, 'portfolio'), {
        location: location,
        date: new Date(),
        user: question,
        system: res,
      });
    } catch (error) {
      setSystemChat(
        '죄송합니다, 현재 문제가 발생하여 채팅을 지속할 수 없습니다.',
      );
      console.error('Failed to fetch chat response: ', error);
    }
  };

  useEffect(() => {
    if (!active) {
      sessionStorage.setItem('chatList', JSON.stringify(chatList));
    } else {
      const chatStorage = sessionStorage.getItem('chatList');
      if (chatStorage) {
        setChatList(JSON.parse(chatStorage));
      }
    }
  }, [active]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current?.scrollHeight;
    }
  }, [chatList]);

  return (
    <Drawer active={active} onClose={onClose}>
      <div className="size-full">
        <div className="flex h-full flex-col gap-8 overflow-hidden">
          <div className="flex items-center gap-4">
            <div className="relative size-12 overflow-hidden rounded-full md:size-14">
              <Image
                src="/icons/chatProfile.jpg"
                alt="이은빈 프로필 이미지"
                fill
                priority
                sizes="max-width:100%"
              />
            </div>
            <div className="grid">
              <h2 className="text-lg font-bold">이은빈</h2>
              <span className="text-sm text-[#656565]">
                AI와 대화를 시작해보세요
              </span>
            </div>
          </div>
          <div ref={scrollRef} className="flex-1 overflow-auto">
            {chatList.map((chat, idx) => (
              <Conversation
                key={idx}
                message={chat.user}
                response={chat.system}
              />
            ))}
          </div>

          <InputForm
            onSubmit={handleSubmitForm}
            value={value}
            onChange={handleChangeInput}
          />
        </div>
      </div>
    </Drawer>
  );
};

export default ChatContainer;
