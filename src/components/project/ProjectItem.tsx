/* eslint-disable @next/next/no-img-element */
import { IProjectItem } from '@/types/project.types';
import Image from 'next/image';
import Link from 'next/link';

const ProjectItem = ({ data }: { data: IProjectItem }) => {
  return (
    <li className="grid place-content-start gap-3 p-4">
      <div className="mb-4 w-fit rounded-lg border border-solid border-white px-3 py-[2px] text-xs text-white">
        {data.tag}
      </div>
      <Link
        href="#"
        className="relative flex size-20 items-center justify-center rounded-xl bg-white"
      >
        <Image
          src={data.thumbnail}
          alt={`${data.title} 이미지`}
          fill
          sizes="max-width:100%"
          priority
          className="w-full object-contain p-2"
        />
      </Link>
      <Link href="#" className="w-fit text-lg font-medium text-white">
        {data.title}
      </Link>
      <p className="break-keep text-sm text-gray-100">{data.summary}</p>
      <Link
        href="#"
        className="ml-auto mt-4 w-fit rounded-lg border border-solid border-white px-3 py-[2px] text-xs text-white"
      >
        view more
      </Link>
    </li>
  );
};

export default ProjectItem;
