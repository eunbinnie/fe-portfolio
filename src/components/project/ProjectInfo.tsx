import { IProjectItem } from '@/types/project.types';
import Link from 'next/link';

const ProjectInfo = ({ data }: { data: IProjectItem }) => {
  return (
    <div className="grid gap-10">
      <div className="flex flex-wrap items-center justify-between gap-1 py-6 text-silver">
        <span className="font-bold">{String(data.id).padStart(2, '0')}</span>
        <span className="font-extralight">{data.tag}</span>
      </div>
      <div className="grid gap-10 text-white">
        <div className="grid gap-5">
          <h1 className="break-all text-5xl font-bold">{data.title}</h1>
          <ul className="flex flex-wrap items-center gap-2">
            {data.skills.map((skill, idx) => (
              <li
                key={idx}
                className="border border-solid border-gray-150 px-2 py-1 text-xs"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <ul className="grid gap-1 text-sm text-gray-100 sm:text-base">
          <li className="flex flex-wrap items-center">
            <span className="basis-[90px] font-semibold">Team Size:</span>
            <span className="break-all">{data.headCount}인</span>
          </li>
          <li className="flex flex-wrap items-center">
            <span className="basis-[90px] font-semibold">Duration:</span>
            <span className="break-all">{data.duration}</span>
          </li>
          <li className="flex flex-wrap items-center">
            <span className="basis-[90px] font-semibold">Website:</span>
            <Link
              href={data.demoLink}
              target="_blank"
              className="break-all underline transition-all duration-1000 hover:text-white"
            >
              {data.demoLink}
            </Link>
          </li>
          {data.githubLink && (
            <li className="flex flex-wrap items-center">
              <span className="basis-[90px] font-semibold">GitHub:</span>
              <Link
                href={data.githubLink}
                target="_blank"
                className="break-all underline duration-300 hover:text-white"
              >
                {data.githubLink}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProjectInfo;
