"use client";

import Button from "@/components/Button";
import KEYWORD from "@/constants/keyword";
import { useState } from "react";

/**
 * KeywordSection
 *
 * 자신을 나타내는 키워드를 텍스트 슬라이드로 보여주고,
 * 텍스트 버튼에 마우스를 올렸을 때 해당 키워드를 괄호 안에 표시합니다.
 * 마우스를 떼면 괄호 안의 키워드는 사라집니다.
 */
const KeywordSection = () => {
  const [keyword, setKeyword] = useState<string>("");

  const handleMouseOver = (word: string) => {
    setKeyword(word);
  };

  const handleMouseOut = () => {
    setKeyword("");
  };

  return (
    <section className="flex min-h-dvh items-center justify-center overflow-hidden py-8">
      <div className="grid gap-20 md:gap-[200px]">
        <h2 className="mx-auto flex max-w-[1248px] flex-wrap items-center justify-center gap-3 px-6 text-lg text-white sm:gap-6 sm:text-2xl md:gap-14 md:text-4xl">
          <span>저는</span>
          <span className="flex min-w-[100px] items-center justify-between md:min-w-[220px]">
            (&nbsp;<span className="break-keep text-center">{keyword}</span>
            &nbsp;)
          </span>
          <span>
            <strong className="font-semibold">이은빈</strong>입니다.
          </span>
        </h2>
        <div className="flex w-screen items-center justify-center">
          <div className="group flex w-fit overflow-hidden">
            <div className="flex animate-infinite-slide-original gap-4 pr-4 md:gap-8 md:pr-8">
              {KEYWORD.map((word, idx) => (
                <Button
                  key={idx}
                  onCustomMouseEnter={handleMouseOver}
                  onMouseLeave={handleMouseOut}
                  className="whitespace-nowrap hover:bg-[rgba(221,221,221,0.1)]"
                >
                  {word}
                </Button>
              ))}
            </div>
            <div className="flex animate-infinite-slide-copy gap-4 pr-4 md:gap-8 md:pr-8">
              {KEYWORD.map((word, idx) => (
                <Button
                  key={idx}
                  onCustomMouseEnter={handleMouseOver}
                  onMouseLeave={handleMouseOut}
                  className="whitespace-nowrap hover:bg-[rgba(221,221,221,0.1)]"
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
