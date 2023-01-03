import { SectionTitle } from 'components/SectionTitle';
import Link from 'next/link';
import { projectsArray } from 'utils/projectsArray';
import { AiOutlineLink } from 'react-icons/ai';
import { Meta } from 'components/Meta';
import { ButtonLink } from 'components/ButtonLink';

const ProjectItem = ({ project }) => {
  return(
    <div className='border p-4 rounded-md shadow-sm bg-white mb-5'>
      <p className='text-gray-600 text-sm mb-2'>{ project.year }</p>
      <Link href={`/projects/${project.slug}`} className='text-xl text-gray-800 font-semibold hover:underline inline-flex items-center'>
        { project.title }
        <AiOutlineLink />
      </Link>
      <p className="my-2 text-gray-600">{ project.subtitle }</p>
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

const ProjectPage = () => {
  const renderProjects = projectsArray.map(project => {
    return <ProjectItem key={project.title} project={project} />
  });

  return(
    <div>
      <Meta title='Projects' />
      <SectionTitle>Projects</SectionTitle>
      {/* <h2 className='text-2xl mb-2'>Side Projects</h2> */}
      <div className="">
        {renderProjects}
      </div>
    </div>
  );
};

export default ProjectPage;
