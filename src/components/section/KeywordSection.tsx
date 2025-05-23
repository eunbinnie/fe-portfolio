'use client';

import Button from '@/components/button/Button';
import KEYWORD from '@/constants/keyword';
import cn from '@/utils/cn';
import { useState } from 'react';

/**
 * KeywordSection
 *
 * 자신을 나타내는 키워드를 텍스트 슬라이드로 보여주고,
 * 텍스트 버튼에 마우스를 올렸을 때 해당 키워드를 괄호 안에 표시합니다.
 * 마우스를 떼면 괄호 안의 키워드는 사라집니다.
 */
const KeywordSection = () => {
  const [keyword, setKeyword] = useState<string>('');

  const handleMouseOver = (word: string) => {
    setKeyword(word);
  };

  const handleMouseOut = () => {
    setKeyword('');
  };

  return (
    <section className="flex min-h-dvh items-center justify-center overflow-hidden py-8">
      <div className="grid gap-20 md:gap-36">
        <p className="max-container flex flex-wrap items-center justify-center gap-3 text-lg text-white sm:gap-6 sm:text-2xl md:gap-7 md:text-4xl">
          <span>저는</span>
          <span
            className={cn([
              'flex items-center justify-between',
              keyword === '' ? 'min-w-[100px] md:min-w-[220px]' : 'w-fit',
            ])}
          >
            (&nbsp;
            <span className="break-keep text-center font-wiro">{keyword}</span>
            &nbsp;)
          </span>
          <span>
            <strong className="font-semibold">이은빈</strong>입니다.
          </span>
        </p>
        <div className="flex w-screen items-center justify-center">
          <div className="group flex w-fit overflow-hidden">
            <div className="flex animate-infinite-slide-original gap-4 pr-4 md:gap-8 md:pr-8">
              {KEYWORD.map((word, idx) => (
                <Button
                  key={idx}
                  size="big"
                  variant="outlined"
                  onCustomMouseEnter={handleMouseOver}
                  onMouseLeave={handleMouseOut}
                  className="whitespace-nowrap"
                >
                  {word}
                </Button>
              ))}
            </div>
            <div className="flex animate-infinite-slide-copy gap-4 pr-4 md:gap-8 md:pr-8">
              {KEYWORD.map((word, idx) => (
                <Button
                  key={idx}
                  size="big"
                  variant="outlined"
                  onCustomMouseEnter={handleMouseOver}
                  onMouseLeave={handleMouseOut}
                  className="whitespace-nowrap hover:bg-gray-300"
                >
                  {word}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeywordSection;
