import { Project } from '@/types/appTypes';

export const getProjectDetails = (project: Project) => {
  const name = project.name;
  const category = project.category;
  let image: string = project.bannerUrl;

  return {
    category,
    name,
    image,
  };
};
