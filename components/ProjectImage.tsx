import { ProjectHeading } from "./ProjectHeading";
import { FiImage } from "react-icons/fi";
import { Project } from "interfaces/Project";

interface ProjectImageProps {
  project: Project;
}

export const ProjectImage = ({ project: { image } }: ProjectImageProps) => {
  return (
    <div className="my-3">
      <ProjectHeading icon={<FiImage />}>Imgae Preview</ProjectHeading>
      <img src={image.src} alt="Course Buzz" />
    </div>
  );
};
