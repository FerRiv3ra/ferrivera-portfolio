import { useTranslation } from 'react-i18next';
import { useAppContext } from '../../context/AppContext';

import { Project } from '@/types/appTypes';
import { Technology } from './Technology';

interface Props {
  project: Project;
}

export const RelatedProjects = ({ project }: Props) => {
  const { theme } = useAppContext();
  const { t } = useTranslation();

  return (
    <>
      <h2
        className={`${
          theme === 'light' ? 'text-white' : 'text-white'
        } title-font text-2xl text-center font-semibold my-5`}
      >
        {t(`portfolio.${project.category}`)}
      </h2>
      <div className="flex justify-center gap-4 flex-wrap mb-5 mx-2 lg:mx-12">
        {project.technologies.map((tech, index) => (
          <Technology tech={tech} big key={index} />
        ))}
      </div>
    </>
  );
};
