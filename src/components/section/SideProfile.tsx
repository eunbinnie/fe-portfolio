'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import InfoItem from '../resume/InfoItem';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import cn from '@/utils/cn';

/**
 * SideProfile 컴포넌트는 개인정보, GitHub 및 Notion 링크를 프로필 카드 형태로 렌더링합니다.
 *
 * 주요 기능:
 * - 프로필 이미지에 마우스를 올리면 다른 이미지로 변경됩니다.
 * - GitHub, Notion 아이콘을 클릭하면 각긱의 페이지가 새 창에서 열립니다.
 */
const SideProfile = () => {
  const [src, setSrc] = useState('/icons/profile.png');
  const ref = useRef<HTMLElement>(null);
  const { animated } = useIntersectionObserver(ref, { threshold: 0 });

  const handleMouseEnter = () => {
    setSrc('/icons/profile2.png');
  };

  const handleMouseLeave = () => {
    setSrc('/icons/profile.png');
  };

  return (
    <section
      ref={ref}
      className={cn(
        'grid h-fit gap-8 rounded-3xl border border-solid border-gray-150 p-4 transition-[opacity,transform] duration-[3000ms] lg:sticky lg:top-6 lg:p-8 lg:pt-[60px]',
        animated
          ? 'translate-y-0 opacity-100'
          : 'translate-y-4 opacity-0 md:translate-y-5',
      )}
    >
      <div className="flex flex-wrap items-center gap-6 lg:flex-col">
        <figure
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative size-20 rounded-3xl bg-gray-300 sm:size-[120px] lg:size-[150px]"
        >
          <Image
            src={src}
            alt="이은빈 프로필 이미지"
            fill
            priority
            sizes="max-width:100%"
            className="pc:p-4 object-contain p-2"
          />
        </figure>
        <div className="grid place-items-start gap-2 sm:gap-4 lg:place-items-center">
          <h1 className="text-base font-medium text-white md:text-2xl">
            이은빈 / LEE EUNBIN
          </h1>
          <p className="rounded-lg bg-gray-200 px-3 py-1 text-xs font-light text-white sm:px-4">
            Front-End Developer
          </p>
          <div className="flex items-center gap-4 pl-2 lg:justify-center lg:pl-0">
            <Link
              href="https://github.com/eunbinnie"
              target="_blank"
              className="relative size-[18px]"
            >
              <Image
                src="/icons/github.svg"
                alt="github"
                fill
                priority
                sizes="max-width:100%"
                className="object-contain"
              />
            </Link>
            <a
              href="/files/resume.pdf"
              target="_blank"
              type="application/pdf"
              download="이은빈_프론트엔드 개발자 이력서"
              className="relative size-[18px]"
            >
              <Image
                src="/icons/pdf.svg"
                alt="이력서 다운로드"
                fill
                priority
                sizes="max-width:100%"
                className="object-contain"
              />
            </a>
          </div>
        </div>
      </div>
      <hr className="border-gray-150" />
      <InfoItem />
    </section>
  );
};

export default SideProfile;
