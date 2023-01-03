import { SectionTitle } from 'components/SectionTitle';
import { projectsArray } from 'utils/projects';

const ProjectItem = ({ project }) => {
  return(
    <div>
      <h2>{ project.title }</h2>
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
      {renderProjects}
    </div>
  );
};

export default ProjectPage;
