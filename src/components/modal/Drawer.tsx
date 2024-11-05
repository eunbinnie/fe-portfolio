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
        'fill-mode-forwards fixed inset-y-0 right-0 size-full max-w-[500px] bg-white p-4 shadow-leftSmall',
        active ? 'animate-slide-in-right' : 'animate-slide-out-right',
      )}
    >
      {isMobile && (
        <div onClick={onClose} className="relative ml-auto size-4">
          <Image src="/icons/close.svg" alt="닫기" fill />
        </div>
      )}
      <div className={cn(isMobile ? 'h-[calc(100%-16px)]' : 'h-full')}>
        {children}
      </div>
    </div>
  );
};

export default Drawer;
