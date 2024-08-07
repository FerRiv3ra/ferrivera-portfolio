import { useEffect, useState } from 'react';

import { Project } from '@/types/appTypes';
import { useParams } from 'next/navigation';
import { useAppContext } from '../context/AppContext';
import {
  ImagesCollection,
  carouselSelector,
} from '../helpers/carouselSelector';
import { sortProyects } from '../helpers/sortProyects';

export const useProjectScreen = () => {
  const [project, setProject] = useState<Project>();
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);
  const params = useParams();
  const { getProject, getRelatedProjects, filteredprojects } = useAppContext();

  const keyword =
    project?.name.toLowerCase().startsWith('the') ||
    project?.name.toLowerCase().startsWith('rn')
      ? project.name.toLowerCase().split(' ')[1]
      : project?.name.toLowerCase().split(' ')[0] ?? '';

  const images = carouselSelector(keyword as ImagesCollection);

  useEffect(() => {
    setProject(getProject(params.project as string));
  }, [filteredprojects]);

  useEffect(() => {
    if (!!filteredprojects.length) {
      const related = getRelatedProjects(params.project as string);
      const sorted = sortProyects(related);

      if (related[0].category === 'LIBRARY') {
        setRelatedProjects(related);
      } else {
        setRelatedProjects(sorted);
      }
    }
  }, [filteredprojects]);

  return {
    relatedProjects,
    images,
  };
};
