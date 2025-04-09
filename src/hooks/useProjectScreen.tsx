import { useEffect, useState } from 'react';

import { Project } from '@/types/appTypes';
import { useParams } from 'next/navigation';
import { useAppContext } from '../context/AppContext';
import { carouselSelector } from '../helpers/carouselSelector';
import { sortProyects } from '../helpers/sortProyects';

export const useProjectScreen = () => {
  const [project, setProject] = useState<Project>();
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);
  const params = useParams();
  const { getProject, getRelatedProjects, filteredprojects } = useAppContext();

  const images = carouselSelector(
    project?.name?.replaceAll(' ', '_').toLowerCase() ?? ''
  );

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
    project,
    relatedProjects,
    images,
  };
};
