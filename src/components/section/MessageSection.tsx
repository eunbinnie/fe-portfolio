'use client';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import cn from '@/utils/cn';
import { useRef } from 'react';

const TEXT = {
  start: ['WELCOME', 'TO MY', 'PORTFOLIO'],
  end: ['THANKS FOR', 'VISITING', 'MY PORTFOLIO'],
};

/**
 * 포트폴리오 시작 문구와 마무리 문구를 표시하는 컴포넌트입니다.
 * TEXT 객체에서 'start'와 'end'에 해당하는 메시지를 관리하고,
 * 이를 기반으로 문구를 렌더링합니다.
 *
 * @param {'start'|'end'} message 'start'는 포트폴리오 시작 문구를, 'end'는 마무리 문구를 나타냅니다.
 */
const MessageSection = ({ message }: { message: 'start' | 'end' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { animated } = useIntersectionObserver(ref, {
    threshold: 0,
  });

  const countNumber = (index: number) => {
    let sum: number = 0;

    for (let i = 0; i < index; i++) {
      sum += TEXT[message][i].length;
    }

    return sum;
  };

  return (
    <section
      ref={ref}
      className="max-container flex min-h-dvh items-center justify-center"
    >
      <div className="py-8 text-center">
        {TEXT[message].map((word, index) => (
          <p key={index}>
            {word.split('').map((char, idx) => (
              <span
                key={char + idx}
                className={cn(
                  'metalic-text break-all font-aespa text-[11vw] leading-[1.2] transition-opacity sm:text-[54px] md:text-8xl lg:text-9xl',
                  animated ? 'opacity-100 blur-0' : 'opacity-0 blur-[2px]',
                )}
                style={{
                  transitionDelay: `${0.5 + (index > 0 ? countNumber(index) + idx : idx) * 0.05}s`,
                  transitionDuration: '3s',
                }}
              >
                {char}
              </span>
            ))}
          </p>
        ))}
      </div>
    </section>
  );
};

export default MessageSection;
