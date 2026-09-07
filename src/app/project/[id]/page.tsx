import PROJECTS from '@/constants/projects';
import { notFound } from 'next/navigation';

import ProjectDetail from './ProjectDetail';

export const dynamicParams = false;

export const generateStaticParams = () =>
  PROJECTS.map((project) => ({ id: String(project.id) }));

const ProjectPage = ({ params }: { params: { id: string } }) => {
  const data = PROJECTS.find((project) => project.id === Number(params.id));

  if (!data) {
    notFound();
  }

  return <ProjectDetail data={data} />;
};

export default ProjectPage;
