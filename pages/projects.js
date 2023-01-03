import { SectionTitle } from 'components/SectionTitle';
import { projectsArray } from 'utils/projectsArray';
import { Meta } from 'components/Meta';
import { ProjectItem } from 'components/ProjectItem';

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
