import { Project } from "interfaces/Project";
import { ProjectHeading } from "./ProjectHeading";

interface ProjectDescriptionProps {
  project: Project;
}

export const ProjectDescription = ({ project }: ProjectDescriptionProps) => {
  return (
    <div className="my-5">
      <ProjectHeading>Description</ProjectHeading>
      <p className="text-gray-800 dark:text-gray-300">{project.details}</p>
    </div>
  );
};
