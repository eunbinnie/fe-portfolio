import CAREER_HISTORY from '@/constants/careerHistory';

const CareerHistory = () => {
  return (
    <ul className="grid gap-5 sm:grid-cols-[max-content_1fr] sm:gap-x-5 sm:gap-y-1">
      {CAREER_HISTORY.map((data, idx) => (
        <li
          key={idx}
          className="flex flex-col gap-2 text-sm sm:col-span-2 sm:grid sm:grid-cols-subgrid"
        >
          <span className="tabular-nums text-silver">{data.period}</span>
          <span className="font-medium text-white">{data.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default CareerHistory;
