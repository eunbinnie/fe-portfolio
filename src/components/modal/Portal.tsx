'use client';

import cn from '@/utils/cn';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const MODAL_TIMEOUT = 250;

export interface IModalProps {
  active: boolean;
  children?: React.ReactNode;
  onClose: () => void;
}

const Portal = ({ active, children, onClose }: IModalProps) => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null;

    if (active) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '10px';
      setVisible(true);
    } else {
      timer = setTimeout(() => {
        document.body.style.overflow = 'unset';
        document.body.style.paddingRight = '0';
        setVisible(false);
      }, MODAL_TIMEOUT);
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
          <div className="inset-0">
            <div
              onClick={onClose}
              className={cn(
                'fill-mode-forwards fixed inset-0 z-[1] bg-black bg-opacity-[0.7]',
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

export default Portal;
