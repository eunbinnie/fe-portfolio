import CareerHistory from '@/components/resume/CareerHistory';
import Skills from '@/components/resume/Skills';

import SectionHeader from './SectionHeader';

const ResumeSection = () => {
  return (
    <>
      <div className="grid gap-8">
        <SectionHeader title="Education & Experience" subtitle="학력 및 경력" />
        <CareerHistory />
      </div>
      <div className="grid gap-8">
        <SectionHeader title="Skills" subtitle="기술 스택" />
        <Skills />
      </div>
    </>
  );
};

export default ResumeSection;
