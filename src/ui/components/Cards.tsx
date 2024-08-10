'use client';
import { useAppContext } from '@/context/AppContext';
import { Card } from './Card';

export const Cards = () => {
  const { filteredprojects } = useAppContext();

  return (
    <div className="flex flex-wrap mt-8 container mx-auto gap-0 justify-around">
      {filteredprojects.map((project) => (
        <Card project={project} key={project.uid} />
      ))}
    </div>
  );
};
