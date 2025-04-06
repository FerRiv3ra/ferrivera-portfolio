import { Project } from '@/types/appTypes';

export const getProjectDetails = (project: Project) => {
  const name = project.name;
  const category = project.category;
  let image: string = '';

  if (project.category === 'BACKEND') {
    if (project.technologies.includes('nest')) {
      image = '/projects/nest_project.webp';
    } else {
      image = '/projects/node_project.webp';
    }
  } else {
    switch (name) {
      case 'CheckStudents':
        image = '/projects/checkstudents.webp';
        break;
      case 'iFootSchedule':
        image = '/projects/iFootSchedule.webp';
        break;
      case 'The Vine Centre':
        image = '/projects/vine_centre_app.webp';
        break;
      case 'BetterLists':
        image = '/projects/better_lists.webp';
        break;
      case 'The Vine Centre Manager':
        image = '/projects/vine_web.webp';
        break;
      case 'Cuidados Meraki':
        image = '/projects/meraki.webp';
        break;
      case 'Azahares Web':
        image = '/projects/azahares.webp';
        break;
      case 'Myelino':
        image = '/projects/myelino_app.webp';
        break;
      case 'Myelino web':
        image = '/projects/myelino_web.webp';
        break;
      case 'RN Segmented and Tab control':
        image = '/projects/st_controls.webp';
        break;
      case 'RN Custom Alert and Prompt':
        image = '/projects/alert_prompt.webp';
        break;
      case 'RN Inkpad':
        image = '/projects/inkpad.webp';
        break;
    }
  }

  return {
    category,
    name,
    image,
  };
};
