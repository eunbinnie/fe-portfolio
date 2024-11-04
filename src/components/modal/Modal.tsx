'use client';

import cn from '@/utils/cn';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface IModalProps {
  active: boolean;
  children: React.ReactNode;
}

const Modal = ({ active, children }: IModalProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : 'unset';

    if (active) {
      setVisible(true);
    }
  }, [active]);

  return (
    <>
      {visible &&
        createPortal(
          <div>
            <div
              className={cn(
                'fixed inset-0 bg-black bg-opacity-[0.7]',
                `${active}` ? 'animate-fade-in' : 'animate-fade-out',
              )}
            />
            {children}
          </div>,
          document.body,
        )}
    </>
  );
};

export default Modal;
