import classNames from 'classnames';
import Link from 'next/link';
import { AiOutlineLink } from 'react-icons/ai';
import { ButtonLink } from './ButtonLink';

export const ProjectItem = ({ project }) => {
  const containerClasses = classNames(
    `border p-4 rounded-md shadow-sm bg-white mb-5 dark:bg-slate-900 dark:border-gray-800 dark:shadow-none`
  );

  return (
    <div className={containerClasses}>
      <p className='text-gray-600 text-sm mb-2 dark:text-gray-400'>{project.year}</p>
      <Link
        href={`/projects/${project.slug}`}
        className='text-xl text-gray-800 font-semibold hover:underline inline-flex items-center dark:text-gray-200'
        >
        {project.title}
        <AiOutlineLink />
      </Link>
      <p
        className="my-3 text-sm text-gray-600 dark:text-gray-300">
          {project.subtitle}
        </p>
      <ButtonLink external url={project.liveUrl} className='mr-2'>Demo</ButtonLink>
      <ButtonLink external url={project.githubUrl} className='mr-2'>
        Code
      </ButtonLink>
      {
        project.githubBackendUrl && <ButtonLink external url={project.githubBackendUrl}>
          Backend
        </ButtonLink>
      }
    </div>
  );
};
