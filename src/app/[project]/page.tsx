'use client';

import { useAppContext } from '@/context/AppContext';
import { Project } from '@/types/appTypes';
import { indieFlower, roboto } from '@/ui/fonts';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProjectScren() {
  const [projects, setProjects] = useState<Project[]>([]);
  const { getRelatedProjects } = useAppContext();
  const params = useParams();

  useEffect(() => {
    setProjects(getRelatedProjects(params.project as string));
  }, []);

  if (projects.length === 0) return;

  return (
    <div className="text-white">
      <img src={projects[0].bannerUrl} className="h-full w-8/12 mx-auto mb-6" />
      <h2
        className={`${indieFlower.className} text-white text-5xl text-center font-normal`}
      >
        {projects[0].name}
      </h2>
      <p
        className={`${roboto.className} text-white text-center font-extralight mb-5`}
      >
        {projects[0].description.en}
      </p>
    </div>
  );
}
