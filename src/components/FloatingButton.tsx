'use client';

import Image from 'next/image';
import Modal from './modal/Modal';
import { useState } from 'react';

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
      <Modal active={isActive} onClose={handleModalActive}>
        <h1 className="fixed left-0 top-0 text-white" />
      </Modal>
    </>
  );
};

export default FloatingButton;
