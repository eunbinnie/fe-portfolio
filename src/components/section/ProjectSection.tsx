import ProjectItem from '@/components/project/ProjectItem';
import PROJECTS from '@/constants/projects';

const ProjectSection = () => {
  return (
    <div className="grid gap-8">
      <div className="grid gap-1">
        <h5 className="text-xl font-medium text-white">Projects</h5>
        <h6 className="text-sm font-extralight text-white">프로젝트 경험</h6>
      </div>
      <div className="grid gap-5">
        <ul className="grid grid-cols-1 gap-x-5 gap-y-16 sm:grid-cols-2 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectItem key={project.id} data={project} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectSection;
