'use client';

import useWindowSize from '@/hooks/useWindowSize';
import cn from '@/utils/cn';
import Image from 'next/image';
import { IModalProps } from './Portal';

const Drawer = ({ active, children, onClose }: IModalProps) => {
  const isMobile = useWindowSize() < 600;

  return (
    <div
      className={cn(
        'fill-mode-forwards fixed inset-y-0 right-0 w-full max-w-[460px] bg-white px-5 py-4 shadow-leftSmall',
        active ? 'animate-slide-in-right' : 'animate-slide-out-right',
      )}
    >
      {isMobile && (
        <div onClick={onClose} className="absolute right-4 top-4 size-4">
          <Image src="/icons/close.svg" alt="닫기" fill />
        </div>
      )}
      <div className="h-full">{children}</div>
    </div>
  );
};

export default Drawer;
