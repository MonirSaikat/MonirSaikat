import classNames from 'classnames';
import { SectionTitle } from 'components/SectionTitle';
import Link from 'next/link';
import { projectsArray } from 'utils/projects';
import { BiLinkExternal } from 'react-icons/bi';

const ButtonLink = ({ children, url, className, external = false }) => {
  const classes = classNames('border px-4 py-1 text-sm rounded-full inline-flex items-center', className);

  return(
    <Link
      className={classes}
      href={ url }
      target={external ? '_blank' : '_self'}
    >
      { children }
      <BiLinkExternal className='ml-1' />
    </Link>
  );
}


const ProjectItem = ({ project }) => {
  return(
    <div className='border p-4 rounded-md shadow-sm bg-white'>
      <p className='text-gray-700 mb-2'>{ project.year }</p>
      <Link href={project.liveUrl} className='text-xl text-gray-800 font-semibold hover:underline'>{ project.title }</Link>
      <p className="my-3 text-gray-600">Course management website</p>
      <ButtonLink external url={project.liveUrl} className='mr-2'>
        GitHub
      </ButtonLink>
      <ButtonLink external url={project.liveUrl}>Demo</ButtonLink>
    </div>
  );
};

const ProjectPage = () => {
  const renderProjects = projectsArray.map(project => {
    return <ProjectItem key={project.title} project={project} />
  });

  return(
    <div>
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-2 gap-2">
        {renderProjects}
      </div>
    </div>
  );
};

export default ProjectPage;
