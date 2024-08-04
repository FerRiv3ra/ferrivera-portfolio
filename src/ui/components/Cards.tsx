'use client';
import { useAppContext } from '@/context/AppContext';
import { Card } from './Card';

export const Cards = () => {
  const { filteredprojects } = useAppContext();

  return (
    <div className="flex flex-wrap mt-8">
      {filteredprojects.map((project) => (
        <Card project={project} key={project.uid} />
      ))}
    </div>
  );
};
