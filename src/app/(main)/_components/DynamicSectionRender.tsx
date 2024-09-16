'use client';

import ProjectSection from './ProjectSection';
import ResumeSection from './ResumeSection';
import SideProfile from './SideProfile';

/**
 * DynamicSectionRender 컴포넌트는 저와 관련된 다양한 정보를 렌더링하는 섹션입니다.
 *
 * 이 섹션은 두 가지 주요 컴포넌트로 구성됩니다:
 * - SideProfile: 개인정보, GitHub, Notion 링크를 렌더링합니다.
 */
const DynamicSectionRender = () => {
  return (
    <section className="mx-auto my-[60px] max-w-[1448px] px-6">
      <div className="flex flex-col gap-6 lg:flex-row">
        <SideProfile />
        <div className="grid h-fit flex-1 gap-20 rounded-3xl border border-solid border-gray-100 p-4 pt-10 lg:p-8 lg:pt-[60px]">
          <ResumeSection />
          <ProjectSection />
        </div>
      </div>
    </section>
  );
};

export default DynamicSectionRender;
