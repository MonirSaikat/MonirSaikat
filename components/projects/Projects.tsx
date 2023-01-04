import { Project } from "interfaces/Project";
import { ProjectItem } from "./ProjectItem";

interface ProjectProps {
  projects: Project[];
}

export const Projects = ({ projects }: ProjectProps) => {
  return (
    <>
      {projects.map((project) => {
        return <ProjectItem key={project.title} project={project} />;
      })}
    </>
  );
};
