import Link from "next/link";
import classNames from "classnames";
import { Project } from "interfaces/Project";
import { AiOutlineLink } from "react-icons/ai";
import { ButtonLink } from "components/buttons/ButtonLink";

interface ProjectItemProps {
  project: Project;
}

export const ProjectItem = ({ project }: ProjectItemProps) => {
  const containerClasses = classNames(
    `border p-4 rounded-md shadow-sm bg-white mb-5 dark:bg-slate-900 dark:border-gray-800 dark:shadow-none`
  );

  return (
    <div className={containerClasses}>
      <p className="text-gray-600 text-sm mb-2 dark:text-gray-400">
        {project.year}
      </p>

      <div className="flex justify-between items-center">
        <Link
          href={`/projects/${project.slug}`}
          className="text-xl text-gray-800 font-semibold hover:underline inline-flex items-center dark:text-gray-200"
        >
          {project.title}
          <AiOutlineLink />
        </Link>
        <ButtonLink url={project.liveUrl} external>
          <>
            <span className="mr-1">view</span>
          </>
        </ButtonLink>
      </div>

      <p className="my-3 text-sm text-gray-600 dark:text-gray-300">
        {project.subtitle}
      </p>
      <ButtonLink external url={project.githubUrl} className="mr-2">
        Code
      </ButtonLink>
      {project.githubBackendUrl && (
        <ButtonLink external url={project.githubBackendUrl}>
          Backend
        </ButtonLink>
      )}
    </div>
  );
};
