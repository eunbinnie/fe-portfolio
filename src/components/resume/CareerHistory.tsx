import CAREER_HISTORY from '@/constants/careerHistory';

const CareerHistory = () => {
  return (
    <ul className="grid gap-5 sm:gap-1">
      {CAREER_HISTORY.map((data, idx) => (
        <li
          key={idx}
          className="flex flex-col gap-1 text-sm sm:flex-row sm:gap-5"
        >
          <span className="text-silver">{data.period}</span>
          <span className="flex-1 font-medium text-white">{data.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default CareerHistory;
