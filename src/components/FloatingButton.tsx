'use client';

import Image from 'next/image';
import Modal from './modal/Modal';
import { useState } from 'react';

const FloatingButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClickButton = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClickButton}
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
      {isActive && (
        <Modal active={isActive}>
          <h1 className="fixed inset-0 text-white">modal</h1>
        </Modal>
      )}
    </>
  );
};

export default FloatingButton;
