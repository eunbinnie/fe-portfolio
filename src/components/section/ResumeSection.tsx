import CareerHistory from '@/components/resume/CareerHistory';
import Skills from '@/components/resume/Skills';

const ResumeSection = () => {
  return (
    <>
      <div className="grid gap-8">
        <div className="grid gap-1">
          <h5 className="text-xl font-medium text-white">
            Education & Experience
          </h5>
          <h6 className="text-sm font-extralight text-white">학력 및 경력</h6>
        </div>
        <CareerHistory />
      </div>
      <div className="grid gap-8">
        <div className="grid gap-1">
          <h5 className="text-xl font-medium text-white">Skills</h5>
          <h6 className="text-sm font-extralight text-white">기술 스택</h6>
        </div>
        <Skills />
      </div>
    </>
  );
};

export default ResumeSection;
