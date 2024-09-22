import { IProjectItem } from '@/types/project.types';
import Image from 'next/image';
import Link from 'next/link';

const ProjectItem = ({ data }: { data: IProjectItem }) => {
  return (
    <li className="scale-group grid grid-cols-1 grid-rows-[repeat(4,auto),1fr] place-content-start gap-3">
      <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl bg-white">
        <Image
          src={data.thumbnail}
          alt={`${data.title} 이미지`}
          fill
          sizes="max-width:100%"
          priority
          className="scale-item w-full object-contain"
        />
      </div>
      <span className="w-fit text-lg font-medium text-white">{data.title}</span>
      <ul className="grid gap-2 break-keep text-sm text-gray-100">
        {data.summary.map((data, idx) => (
          <li
            key={idx}
            className="relative top-0 pl-4 before:absolute before:left-0 before:content-['-']"
          >
            {data}
          </li>
        ))}
      </ul>
      <span className="w-fit bg-gray-200 px-1 text-xs text-gray-100">
        #{data.tag}
      </span>
      <div className="mt-4 flex items-end">
        <Link
          href={`/project/${data.id}`}
          className="ml-auto flex grid-flow-row items-center gap-1 text-xs text-white"
        >
          VIEW MORE
          <Image
            src="/icons/arrowRight.svg"
            alt="자세히 보기"
            width={12}
            height={12}
          />
        </Link>
      </div>
    </li>
  );
};

export default ProjectItem;
