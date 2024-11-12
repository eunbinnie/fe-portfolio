'use client';

import { useRef } from 'react';
import ProjectSection from './ProjectSection';
import ResumeSection from './ResumeSection';
import SideProfile from './SideProfile';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import cn from '@/utils/cn';

/**
 * DynamicSectionRender 컴포넌트는 저와 관련된 다양한 정보를 렌더링하는 섹션입니다.
 *
 * 이 섹션은 두 가지 주요 컴포넌트로 구성됩니다:
 * - SideProfile: 개인정보, GitHub, Notion 링크를 렌더링합니다.
 */
const DynamicSectionRender = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { animated } = useIntersectionObserver(ref, { threshold: 0 });

  return (
    <section className="max-container my-[60px]">
      <div className="flex flex-col gap-6 lg:flex-row">
        <SideProfile />
        <div
          ref={ref}
          className={cn(
            'grid h-fit flex-1 gap-20 rounded-3xl border border-solid border-gray-150 p-4 pt-10 transition-[opacity,transform] duration-1000 lg:p-8 lg:pt-[60px]',
            animated ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
          )}
        >
          <ResumeSection />
          <ProjectSection />
        </div>
      </div>
    </section>
  );
};

export default DynamicSectionRender;
