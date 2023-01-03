import { ProjectHeading } from './ProjectHeading';
import { FiImage } from 'react-icons/fi';

export const ProjectImage = ({ project: { image } }) => {
  return(
    <div className='my-3'>
      <ProjectHeading icon={<FiImage />}>Imgae Preview</ProjectHeading>
      <img src={image.src} alt="Course Buzz" />
    </div>
  );
};
