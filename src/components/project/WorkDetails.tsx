/* eslint-disable @next/next/no-img-element */
import { IWorkDetail } from '@/types/project.types';

const WorkDetails = ({ data }: { data: IWorkDetail[] }) => {
  return (
    <div className="grid gap-8">
      <h2 className="text-2xl font-medium text-white">Trouble Shooting</h2>
      <ul className="grid grid-cols-1 gap-x-5 gap-y-16 sm:grid-cols-2 md:grid-cols-3">
        {data.map((data, idx) => (
          <li key={idx} className="grid gap-2 text-white">
            <h3 className="text-lg"># {data.title}</h3>
            <p className="grid gap-1">
              <span className="font-bold">[문제]</span>
              <span className="text-gray-100">{data.trouble}</span>
            </p>
            <p className="grid gap-1">
              <span className="font-bold">[해결]</span>
              <span className="text-gray-100">{data.solve}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkDetails;
