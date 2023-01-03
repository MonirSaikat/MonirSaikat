import { ButtonLink } from './ButtonLink';
import { ProjectHeading } from './ProjectHeading';

export const ProjectTechnologies = ({ project: { technologies } }) => {
  return(
    <div className="my-5">
      <ProjectHeading>Technologies</ProjectHeading>
      <div>
        {technologies.map(tech => {
          return (
            <ButtonLink url={`https://www.google.com/search?q=${tech}`} key={tech} className='mr-2'>
              {tech}
            </ButtonLink>
          );
        })}
      </div>
    </div>
  );
};
