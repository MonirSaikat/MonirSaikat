import { SectionTitle } from "components/SectionTitle";
import { projectsArray } from "utils/projectsArray";
import { Meta } from "components/Meta";
import { Projects } from "components/Projects";

const ProjectPage = () => {
  return (
    <div>
      <Meta title="Projects" />
      <SectionTitle>Projects</SectionTitle>
      {/* <h2 className='text-2xl mb-2'>Side Projects</h2> */}
      <Projects projects={projectsArray} />
    </div>
  );
};

export default ProjectPage;
