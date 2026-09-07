import CAREER_HISTORY from '@/constants/careerHistory';
import cn from '@/utils/cn';

const CareerHistory = () => {
  return (
    <ul className="grid gap-5 sm:grid-cols-[max-content_minmax(0,max-content)_max-content] sm:gap-x-5 sm:gap-y-2">
      {CAREER_HISTORY.map((data, idx) => (
        <li
          key={idx}
          className="flex flex-col gap-2 text-sm sm:col-span-3 sm:grid sm:grid-cols-subgrid sm:items-center"
        >
          <span className="tabular-nums text-silver">{data.period}</span>
          <span className="font-medium text-white">{data.title}</span>
          <span
            className={cn(
              'w-fit rounded-md px-2 py-0.5 text-xs font-light',
              data.type === '재직'
                ? 'bg-silver text-black'
                : 'bg-gray-200 text-gray-100',
            )}
          >
            {data.type}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default CareerHistory;
