import Link from 'next/link';
import { AiOutlineLink } from 'react-icons/ai';
import { ButtonLink } from './ButtonLink';

export const ProjectItem = ({ project }) => {
  return (
    <div className='border p-4 rounded-md shadow-sm bg-white mb-5'>
      <p className='text-gray-600 text-sm mb-2'>{project.year}</p>
      <Link href={`/projects/${project.slug}`} className='text-xl text-gray-800 font-semibold hover:underline inline-flex items-center'>
        {project.title}
        <AiOutlineLink />
      </Link>
      <p className="my-2 text-gray-600">{project.subtitle}</p>
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
  );
};
