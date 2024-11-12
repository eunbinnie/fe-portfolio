'use client';

import ProjectInfo from '@/components/project/ProjectInfo';
import WorkDetails from '@/components/project/WorkDetails';
import PROJECTS, { PROJECT_TOTAL_COUNT } from '@/constants/projects';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import cn from '@/utils/cn';
import { notFound } from 'next/navigation';
import { useRef } from 'react';

const ProjectPage = ({ params }: { params: { id: number } }) => {
  const id = Number(params.id);
  const data = PROJECTS.filter((project) => project.id === id)[0];
  const ref = useRef<HTMLDivElement>(null);
  const { animated } = useIntersectionObserver(ref, { threshold: 0 });

  if (id > PROJECT_TOTAL_COUNT || id === 0) {
    notFound();
  }

  return (
    <div
      ref={ref}
      className={cn(
        'max-container grid gap-20 pb-[100px] transition-[opacity,transform] duration-1000',
        animated ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
      )}
    >
      <ProjectInfo data={data} />
      {data.role && <WorkDetails data={data.role} />}
    </div>
  );
};

export default ProjectPage;
