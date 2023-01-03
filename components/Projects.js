import { ProjectItem } from './ProjectItem';

export const Projects = ({ projects }) => {
  return projects.map(project => {
    return <ProjectItem key={project.title} project={project} />;
  });
};
