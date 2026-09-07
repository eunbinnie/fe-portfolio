import ProjectItem from '@/components/project/ProjectItem';
import PROJECTS from '@/constants/projects';

import SectionHeader from './SectionHeader';

const ProjectSection = () => {
  return (
    <div className="grid gap-8">
      <SectionHeader title="Projects" subtitle="프로젝트 경험" />
      <ul className="grid grid-cols-1 gap-x-5 gap-y-16 sm:grid-cols-2 md:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectItem key={project.id} data={project} />
        ))}
      </ul>
    </div>
  );
};

export default ProjectSection;
