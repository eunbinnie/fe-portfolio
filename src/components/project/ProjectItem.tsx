import { IProjectItem } from '@/types/project.types';
import Image from 'next/image';
import Link from 'next/link';

const ProjectItem = ({ data }: { data: IProjectItem }) => {
  return (
    <li className="scale-group grid place-content-start gap-3">
      <Link
        href="#"
        className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl bg-white"
      >
        <Image
          src={data.thumbnail}
          alt={`${data.title} 이미지`}
          fill
          sizes="max-width:100%"
          priority
          className="scale-item w-full object-contain"
        />
      </Link>
      <Link href="#" className="w-fit text-lg font-medium text-white">
        {data.title}
      </Link>
      <p className="break-keep text-sm text-gray-100">{data.summary}</p>
      <span className="w-fit bg-gray-200 px-1 text-xs text-gray-100">
        #{data.tag}
      </span>
      <Link
        href="#"
        className="ml-auto mt-4 flex items-center gap-1 text-xs text-white"
      >
        VIEW MORE
        <Image
          src="/icons/arrowRight.svg"
          alt="자세히 보기"
          width={12}
          height={12}
        />
      </Link>
    </li>
  );
};

export default ProjectItem;
