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
      <p className='text-gray-600 text-sm mb-2'>{ project.year }</p>
      <Link href={project.slug} className='text-xl text-gray-800 font-semibold hover:underline'>{ project.title }</Link>
      <p className="my-2 text-gray-600">Course management website</p>
      <ButtonLink external url={project.liveUrl} className='mr-2'>Demo</ButtonLink>
      <ButtonLink external url={project.githubUrl} className='mr-2'>
        Front Code
      </ButtonLink>
      <ButtonLink external url={project.githubBackendUrl}>
        Backend Code
      </ButtonLink>
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
      <h2 className='text-2xl mb-2'>Side Projects</h2>
      <div className="">
        {renderProjects}
      </div>
    </div>
  );
};

export default ProjectPage;
