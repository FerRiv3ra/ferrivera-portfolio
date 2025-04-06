'use client';
import { useAppContext } from '@/context/AppContext';
import { Card } from './Card';

export const Cards = () => {
  const { filteredprojects } = useAppContext();

  return (
    <div className="flex w-full overflow-x-auto xl:flex-wrap mt-8 container md:mx-auto md:gap-4 justify-start">
      {filteredprojects.map((project) => (
        <Card project={project} key={project.uid} />
      ))}
    </div>
  );
};
