import { projectsArray } from "utils/projectsArray";
import { ButtonLink } from "./ButtonLink";
import { Projects } from "./Projects";
import { SectionTitle } from "./SectionTitle";

const projects = projectsArray.slice(0, 3);
export const HomeProjects = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <SectionTitle className="my-0">Projects</SectionTitle>
        <ButtonLink url="/projects" className="py-2 mb-4">
          View All
        </ButtonLink>
      </div>
      <Projects projects={projects} />
    </div>
  );
};
