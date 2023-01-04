import { SectionTitle } from "components/shared/SectionTitle";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getProjectBySlug } from "utils/projectsArray";
import { ProjectDescription } from "components/projects/ProjectDescription";
import { Meta } from "components/shared/Meta";
import { Project } from "interfaces/Project";
import { ProjectTechnologies } from 'components/projects/ProjectTechnologies';
import { ProjectLinks } from 'components/projects/ProjectLinks';
import { ProjectImage } from 'components/projects/ProjectImage';

const ProjectDetails = () => {
  const [project, setProject] = useState<Project | undefined>(undefined);
  const {
    query: { slug },
  } = useRouter();

  useEffect(() => {
    setProject(getProjectBySlug(slug as string));
  }, [slug]);

  if (!project) return null;

  return (
    <div>
      <Meta title={`Projects | ${project.title}`} />
      <SectionTitle className="mb-1">{project.title}</SectionTitle>
      <p className="text-gray-600 dark:text-gray-300">{project.subtitle}</p>
      <ProjectDescription project={project} />
      <ProjectTechnologies project={project} />
      <ProjectLinks project={project} />
      <ProjectImage project={project} />
    </div>
  );
};

export default ProjectDetails;
