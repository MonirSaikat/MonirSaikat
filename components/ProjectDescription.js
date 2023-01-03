import { ProjectHeading } from './ProjectHeading';

export const ProjectDescription = ({ project }) => {
  return(
    <div className="my-5">
      <ProjectHeading>Description</ProjectHeading>
      <p className='text-gray-800'>{project.details}</p>
    </div>
  );
};
