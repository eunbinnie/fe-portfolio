'use client';

import ProjectInfo from '@/components/project/ProjectInfo';
import PROJECTS, { PROJECT_TOTAL_COUNT } from '@/constants/projects';
import { notFound } from 'next/navigation';

const page = ({ params }: { params: { id: number } }) => {
  const id = Number(params.id);
  const data = PROJECTS[id - 1];

  if (id > PROJECT_TOTAL_COUNT || id === 0) {
    notFound();
  }

  return (
    <div className="max-container">
      <ProjectInfo data={data} />
    </div>
  );
};

export default page;
