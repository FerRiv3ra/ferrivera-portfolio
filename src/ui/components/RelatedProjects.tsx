import { Project } from '@/types/appTypes';
import { Technology } from './Technology';

type Props = {
  project: Project;
};

export const RelatedProjects = ({ project }: Props) => {
  return (
    <div className="flex justify-center gap-4 flex-wrap mb-5 mx-2 lg:mx-12">
      {project.technologies.map((tech, index) => (
        <Technology tech={tech} big key={index} />
      ))}
    </div>
  );
};
