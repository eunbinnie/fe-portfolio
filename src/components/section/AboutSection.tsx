import ABOUT from '@/constants/about';

import SectionHeader from './SectionHeader';

/**
 * AboutSection 컴포넌트는 우측 카드 최상단에서 소개 문구를 렌더링합니다.
 *
 * 리드 문장으로 정체성을 밝히고, 이어지는 문장으로 그 근거를 설명합니다.
 */
const AboutSection = () => {
  return (
    <div className="grid gap-8">
      <SectionHeader title="ABOUT" subtitle="소개" />
      <div className="grid max-w-2xl gap-4">
        <p className="break-keep text-base font-medium leading-relaxed text-white md:text-lg">
          {ABOUT.lead}
        </p>
        <div className="grid gap-2">
          {ABOUT.details.map((detail, idx) => (
            <p
              key={idx}
              className="break-keep text-sm leading-relaxed text-gray-100"
            >
              {detail}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
