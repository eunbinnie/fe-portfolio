'use client';

import cn from '@/utils/cn';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface IModalProps {
  active: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ active, children, onClose }: IModalProps) => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null;
    document.body.style.overflow = active ? 'hidden' : 'unset';

    if (active) {
      setVisible(true);
    } else {
      timer = setTimeout(() => {
        setVisible(false);
      }, 1000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [active]);

  return (
    <>
      {visible &&
        createPortal(
          <div className="inset-0 z-[9999]">
            <div
              onClick={onClose}
              className={cn(
                'fixed inset-0 bg-black bg-opacity-[0.7]',
                active ? 'animate-fade-in' : 'animate-fade-out',
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
