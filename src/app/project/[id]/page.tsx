'use client';

import ProjectInfo from '@/components/project/ProjectInfo';
import WorkDetails from '@/components/project/WorkDetails';
import PROJECTS, { PROJECT_TOTAL_COUNT } from '@/constants/projects';
import { notFound } from 'next/navigation';

const page = ({ params }: { params: { id: number } }) => {
  const id = Number(params.id);
  const data = PROJECTS[id - 1];

  if (id > PROJECT_TOTAL_COUNT || id === 0) {
    notFound();
  }

  return (
    <div className="max-container grid gap-20 pb-[100px]">
      <ProjectInfo data={data} />
      <WorkDetails data={data.role} />
    </div>
  );
};

export default page;
