'use client';

import Image from 'next/image';
import Portal from './modal/Portal';
import { useState } from 'react';
import ChatContainer from './AI/ChatContainer';

const FloatingButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleModalActive = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleModalActive}
        className="fixed bottom-4 right-4 size-14 cursor-pointer rounded-full bg-silver shadow-small transition-colors duration-300 ease-in-out hover:bg-white md:size-16"
      >
        <Image
          src="/icons/chatgpt.svg"
          alt="AI와 채팅하기"
          fill
          sizes="max-width:100%"
          priority
          className="object-cover p-4"
        />
      </button>
      <Portal active={isActive} onClose={handleModalActive}>
        <ChatContainer active={isActive} onClose={handleModalActive} />
      </Portal>
    </>
  );
};

export default FloatingButton;
