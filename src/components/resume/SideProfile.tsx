'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import InfoItem from './InfoItem';

const LINK = [
  {
    href: 'https://github.com/eunbinnie',
    src: '/icons/github.svg',
    alt: 'github',
  },
  {
    href: 'https://iron-ton-192.notion.site/Resume-7f3bc17318574c589a25009123c1a522',
    src: '/icons/notion.svg',
    alt: 'notion',
  },
];

/**
 * SideProfile 컴포넌트는 개인정보, GitHub 및 Notion 링크를 프로필 카드 형태로 렌더링합니다.
 *
 * 주요 기능:
 * - 프로필 이미지에 마우스를 올리면 다른 이미지로 변경됩니다.
 * - GitHub, Notion 아이콘을 클릭하면 각긱의 페이지가 새 창에서 열립니다.
 */
const SideProfile = () => {
  const [src, setSrc] = useState('/icons/profile.png');

  const handleMouseEnter = () => {
    setSrc('/icons/profile2.png');
  };

  const handleMouseLeave = () => {
    setSrc('/icons/profile.png');
  };

  return (
    <div className="grid gap-8 rounded-3xl border border-solid border-gray-100 p-8 pt-[60px]">
      <div className="grid place-items-center gap-6">
        <figure
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative size-[150px] rounded-3xl bg-gray-300"
        >
          <Image
            src={src}
            alt="이은빈 프로필 이미지"
            fill
            className="object-contain p-4"
          />
        </figure>
        <div className="grid place-items-center gap-4">
          <h2 className="text-2xl font-medium text-white">
            이은빈 / LEE EUNBIN
          </h2>
          <p className="rounded-lg bg-gray-200 px-4 py-1 text-xs font-light text-white">
            Front-End Developer
          </p>
        </div>
      </div>
      <hr className="border-gray-100" />
      <div className="grid gap-[30px]">
        <InfoItem />
        <div className="flex justify-center gap-4">
          {LINK.map((data, idx) => (
            <Link
              key={idx}
              href={data.href}
              target="_blank"
              className="relative size-[18px]"
            >
              <Image
                src={data.src}
                alt={data.alt}
                fill
                className="object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideProfile;
