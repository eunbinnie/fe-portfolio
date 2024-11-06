'use client';

import React, { useEffect, useRef, useState } from 'react';
import Drawer from '../modal/Drawer';
import Conversation from './Conversation';
import InputForm from './InputForm';
import { IModalProps } from '../modal/Portal';
import axios from 'axios';

interface ChatData {
  system: string;
  user: string;
}

const ChatContainer = ({ active, onClose }: IModalProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState('');
  const [chatList, setChatList] = useState<ChatData[]>([]);

  const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleSubmitForm: React.FormEventHandler<HTMLFormElement> = async (
    e,
  ) => {
    e.preventDefault();
    setChatList((prev) => [...prev, { user: value, system: '... 로딩중' }]);
    setValue('');

    try {
      const res = (await axios.post('/api/chat', { question: value })).data
        .choices[0].message.content;

      setChatList((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].system = res;
        return updated;
      });
    } catch (error) {
      console.error('Failed to fetch chat response: ', error);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current?.scrollHeight;
    }
  }, [chatList]);

  return (
    <Drawer active={active} onClose={onClose}>
      <div className="size-full">
        <div className="flex h-full flex-col gap-8 overflow-hidden">
          <div className="flex flex-col gap-1">
            <h5 className="text-xl font-medium">Chat with AI</h5>
            <h6 className="break-keep text-sm">
              저에 대해 궁금한 점이 있으신가요? 무엇이든 물어보세요!
            </h6>
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
