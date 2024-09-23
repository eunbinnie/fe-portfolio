/* eslint-disable @next/next/no-img-element */
import { IWorkDetail } from '@/types/project.types';

const WorkDetails = ({ data }: { data: IWorkDetail[] }) => {
  return (
    <div className="grid gap-8">
      <h2 className="text-2xl font-bold text-white">Trouble Shooting</h2>
      <ul className="grid grid-cols-1 gap-x-5 gap-y-16 sm:grid-cols-2 md:grid-cols-3">
        {data.map((data, idx) => (
          <li
            key={idx}
            className="grid grid-rows-[auto,1fr] gap-4 break-keep text-white"
          >
            <h3 className="size-fit md:text-lg"># {data.title}</h3>
            <div className="grid grid-rows-[auto,1fr] gap-2">
              <p className="grid gap-1 text-sm md:text-base">
                <span className="font-bold">[문제]</span>
                <span className="text-gray-100">{data.trouble}</span>
              </p>
              <p className="grid grid-rows-[auto,1fr] gap-1 text-sm md:text-base">
                <span className="font-bold">[해결]</span>
                <span className="text-gray-100">{data.solve}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkDetails;
