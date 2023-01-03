import { SectionTitle } from 'components/SectionTitle';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getProjectBySlug } from 'utils/projectsArray';
import { ProjectLinks } from 'components/ProjectLinks';
import { ProjectTechnologies } from 'components/ProjectTechnologies';
import { ProjectImage } from 'components/ProjectImage';
import { ProjectDescription } from 'components/ProjectDescription';

const ProjectDetails = () => {
  const [project, setProject] = useState(null);
  const { query: { slug } } = useRouter();

  useEffect(() => {
    setProject(getProjectBySlug(slug));
  }, [ slug ]);

  if(!project) return null;

  return(
    <div>
      <SectionTitle className='mb-1'>{project.title}</SectionTitle>
      <p className='text-gray-600'>{project.subtitle}</p>
      <ProjectDescription project={project} />
      <ProjectTechnologies project={project} />
      <ProjectLinks project={project} />
      <ProjectImage project={project} />
    </div>
  );
};

export default ProjectDetails;
