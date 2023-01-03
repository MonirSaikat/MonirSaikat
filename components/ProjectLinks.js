import { AiOutlineLink } from 'react-icons/ai';
import { ButtonLink } from './ButtonLink';
import { ProjectHeading } from './ProjectHeading';

export const ProjectLinks = ({ project }) => {
  return(
    <div className='my-4'>
      <ProjectHeading icon={<AiOutlineLink />}>Links</ProjectHeading>

      <div>
        <ButtonLink external url={project.liveUrl} className='mr-2'>Demo</ButtonLink>
        <ButtonLink external url={project.githubUrl} className='mr-2'>
          Code
        </ButtonLink>
        {
          project.githubBackendUrl && <ButtonLink external url={project.githubBackendUrl}>
            Backend Code
          </ButtonLink>
        }
      </div>
    </div>
  );
};
