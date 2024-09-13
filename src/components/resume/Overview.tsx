import CareerHistory from './CareerHistory';
import Skills from './Skills';

/**
 * Overview 컴포넌트는 학력 및 경력, 사용 가능한 기술 스택을 렌더링합니다.
 */
const Overview = () => {
  return (
    <div className="grid h-fit flex-1 gap-20 rounded-3xl border border-solid border-gray-100 p-8 pt-[60px]">
      <div className="grid gap-8">
        <div className="grid gap-2">
          <h5 className="text-lg font-medium text-white">
            Education & Experience
          </h5>
          <h6 className="text-sm font-extralight text-white">학력 및 경력</h6>
        </div>
        <CareerHistory />
      </div>
      <div className="grid gap-8">
        <div className="grid gap-2">
          <h5 className="text-lg font-medium text-white">SKILLS</h5>
          <h6 className="text-sm font-extralight text-white">기술 스택</h6>
        </div>
        <Skills />
      </div>
    </div>
  );
};

export default Overview;
