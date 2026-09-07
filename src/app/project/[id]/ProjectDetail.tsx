'use client';

import ProjectInfo from '@/components/project/ProjectInfo';
import WorkDetails from '@/components/project/WorkDetails';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { IProjectItem } from '@/types/project.types';
import cn from '@/utils/cn';
import { useRef } from 'react';

const ProjectDetail = ({ data }: { data: IProjectItem }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { animated } = useIntersectionObserver(ref, { threshold: 0 });

  return (
    <div
      ref={ref}
      className={cn(
        'max-container grid gap-20 pb-[100px] transition-[opacity,transform] duration-[3000ms]',
        animated
          ? 'translate-y-0 opacity-100'
          : 'translate-y-4 opacity-0 md:translate-y-5',
      )}
    >
      <ProjectInfo data={data} />
      {data.role && <WorkDetails data={data.role} />}
    </div>
  );
};

export default ProjectDetail;
