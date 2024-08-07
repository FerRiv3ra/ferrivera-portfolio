import { Project } from '@/types/appTypes';

export const sortProyects = (projects: Project[]) => {
  const app = projects.filter((project) => project.category === 'APPMOVIL')[0];
  const web = projects.filter((project) => project.category === 'WEB')[0];
  const server = projects.filter(
    (project) => project.category === 'BACKEND'
  )[0];

  let sorted: Project[] = [];

  if (!!app) sorted.push(app);
  if (!!web) sorted.push(web);
  if (!!server) sorted.push(server);

  return sorted;
};
