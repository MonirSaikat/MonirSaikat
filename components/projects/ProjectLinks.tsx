import { ButtonLink } from 'components/buttons/ButtonLink';
import { Project } from "interfaces/Project";
import { AiOutlineLink } from "react-icons/ai";
import { ProjectHeading } from "./ProjectHeading";

interface ProjectLinksProps {
  project: Project;
}

export const ProjectLinks = ({ project }: ProjectLinksProps) => {
  return (
    <div className="my-4">
      <ProjectHeading icon={<AiOutlineLink />}>Links</ProjectHeading>

      <div>
        <ButtonLink external url={project.liveUrl} className="mr-2">
          Demo
        </ButtonLink>
        <ButtonLink external url={project.githubUrl} className="mr-2">
          Code
        </ButtonLink>
        {project.githubBackendUrl && (
          <ButtonLink external url={project.githubBackendUrl}>
            Backend Code
          </ButtonLink>
        )}
      </div>
    </div>
  );
};
