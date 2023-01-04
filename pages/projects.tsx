import { SectionTitle } from "components/shared/SectionTitle";
import { projectsArray } from "utils/projectsArray";
import { Meta } from "components/shared/Meta";
import { Projects } from 'components/projects/Projects';

const ProjectPage = () => {
  return (
    <div>
      <Meta title="Projects" />
      <SectionTitle>Projects</SectionTitle>
      <Projects projects={projectsArray} />
    </div>
  );
};

export default ProjectPage;
