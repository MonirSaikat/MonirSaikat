import { ButtonLink } from 'components/buttons/ButtonLink';
import { Project } from "interfaces/Project";
import { ProjectHeading } from "./ProjectHeading";

interface ProjectTechnologiesProps {
  project: Project;
}

export const ProjectTechnologies = ({
  project: { technologies },
}: ProjectTechnologiesProps) => {
  return (
    <div className="my-5">
      <ProjectHeading>Technologies</ProjectHeading>
      <div>
        {technologies.map((tech) => {
          return (
            <ButtonLink
              url={`https://www.google.com/search?q=${tech}`}
              key={tech}
              className="mr-2 mb-3"
            >
              {tech}
            </ButtonLink>
          );
        })}
      </div>
    </div>
  );
};
