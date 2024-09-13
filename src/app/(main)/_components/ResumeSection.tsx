import Overview from '@/components/resume/Overview';
import SideProfile from '@/components/resume/SideProfile';

/**
 * ResumeSection 컴포넌트는 저와 관련된 다양한 정보를 렌더링하는 섹션입니다.
 *
 * 이 섹션은 두 가지 주요 컴포넌트로 구성됩니다:
 * - SideProfile: 개인정보, GitHub, Notion 링크를 렌더링합니다.
 * - Overview: 학력, 경력, 기술 스택 등의 이력 정보를 렌더링합니다.
 */
const ResumeSection = () => {
  return (
    <section className="mx-auto my-[60px] flex max-w-[1248px] flex-col gap-6 px-6 lg:flex-row">
      <SideProfile />
      <Overview />
    </section>
  );
};

export default ResumeSection;
