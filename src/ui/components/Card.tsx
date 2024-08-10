import { imgSelector } from '@/helpers/imgSelector';
import { Project } from '@/types/appTypes';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { inter, roboto } from '../fonts';
import { Tooltip } from './Tooltip';

type Props = {
  project: Project;
};

export const Card = ({ project }: Props) => {
  const { name, category } = project;
  const { img, title } = imgSelector(project.technologies[0]);
  const { i18n, t } = useTranslation();

  return (
    <Link
      href={`/portfolio/${project.uid}`}
      className="flex flex-col items-center justify-center w-full max-w-sm mx-auto mb-5 hover:scale-95 transition-all ease-in-out duration-500"
    >
      <div className="w-full h-64 bg-gradient-to-br hover:bg-gradient-to-tl from-[#fcc733]/[0.6] via-[#fcc733]/[0.3] to-[#fcc733]/[0.1]  bg-center bg-cover rounded-lg shadow-md transition-all ease-in-out duration-500">
        <div className="flex gap-3 px-3 pt-4 h-2/5">
          <img src={img} alt={title} className="w-14 h-14" />
          <p className={`${inter.className} text-white font-light text-xs`}>
            {i18n.language === 'es'
              ? project.description.es
              : project.description.en}
          </p>
        </div>
        <p className="text-center font-semibold text-white text-lg">
          {t('portfolio.technologies')}
        </p>
        <div className="flex p-3 items-center justify-around">
          {project.technologies.map((tech, idx) => {
            const { img, title } = imgSelector(tech);

            return (
              <Tooltip message={title} key={idx}>
                <img src={img} alt={title} className="w-8 h-8" />
              </Tooltip>
            );
          })}
        </div>
      </div>

      <div className="w-56 -mt-9 overflow-hidden bg-white rounded-lg shadow-lg md:w-64">
        <h3
          className={`${roboto.className} py-2 font-semibold text-sm text-center text-gray-800 uppercase`}
        >
          {name}
        </h3>

        <div className="flex items-center justify-center px-3 py-2 bg-gray-200">
          <p
            className={`px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform ${
              category === 'LIBRARY'
                ? 'bg-[#d20f30]'
                : category === 'BACKEND'
                ? 'bg-[#26a13c]'
                : category === 'APPMOVIL'
                ? 'bg-[#36d5f5]'
                : 'bg-[#00bdb4]'
            } rounded`}
          >
            {t(`portfolio.${category}`)}
          </p>
        </div>
      </div>
    </Link>
  );
};
