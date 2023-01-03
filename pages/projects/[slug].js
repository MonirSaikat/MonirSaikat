import { SectionTitle } from 'components/SectionTitle';
import { useRouter } from 'next/router';
import { ButtonLink } from 'pages/projects';
import { useEffect, useState } from 'react';
import { getProjectBySlug } from 'utils/projectsArray';
import { AiOutlineLink } from 'react-icons/ai';
import { FiImage } from 'react-icons/fi';
import classNames from 'classnames';

const Heading = ({ children, icon }) => {
  const classes = classNames("text-2xl mb-2 text-gray-800 font-semibold inline-flex items-center")

  return(
    <h2 className={classes}>
      <span className='mr-1'>{children }</span>
      { icon }
    </h2>
  );
};

const ProjectDetails = () => {
  const [project, setProject] = useState(null);
  const { query: { slug } } = useRouter();

  useEffect(() => {
    setProject(getProjectBySlug(slug));
  }, [ slug ]);

  if(!project) return null;
  const { image, title, subtitle, details, technologies } = project;

  const renderLinks = (
    <div className='my-4'>
      <Heading icon={<AiOutlineLink />}>Links</Heading>

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

  const renderDetails = (
    <div className="my-5">
      <Heading>Description</Heading>
      <p className='text-gray-800'>{project.details}</p>
    </div>
  );

  const renderTechnologies = (
    <div className="my-5">
      <Heading>Technologies</Heading>
      <div>
        {technologies.map(tech => {
          return (
            <ButtonLink url={`https://www.google.com/search?q=${tech}`} key={tech} className='mr-2'>
              { tech }
            </ButtonLink>
          );
        })}
      </div>
    </div>
  );

  return(
    <div>
      <SectionTitle className='mb-1'>{title}</SectionTitle>
      <p className='text-gray-600'>{subtitle}</p>
      { renderDetails }
      { renderTechnologies }
      { renderLinks }
      <div className='my-3'>
        <Heading icon={<FiImage />}>Imgae Preview</Heading>
        <img src={image.src} alt="Course Buzz" />
      </div>
    </div>
  );
};

export default ProjectDetails;
