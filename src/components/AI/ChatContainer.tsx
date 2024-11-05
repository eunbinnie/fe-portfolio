'use client';

import React, { useState } from 'react';
import Drawer from '../modal/Drawer';
import Conversation from './Conversation';
import InputForm from './InputForm';
import { IModalProps } from '../modal/Portal';

const ChatContainer = ({ active, onClose }: IModalProps) => {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState<string | undefined>(undefined);

  const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleSubmitForm: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setMessage(value);
    setValue('');
  };

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
          <Conversation message={message} />
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
