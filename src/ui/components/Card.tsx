import { imgSelector } from '@/helpers/imgSelector';
import { Project } from '@/types/appTypes';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { lato } from '../fonts';

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
      className={`${lato.className} flex flex-col items-center  mx-auto mb-5 hover:scale-95 transition-all ease-in-out duration-500`}
    >
      <div className="flex w-96 h-14 px-4 bg-white/[0.08]  rounded-b-xl items-center justify-between">
        <div>
          <p className="text-xs font-bold text-[#C6C6C6]">{name}</p>
        </div>
        <div>
          <p className="text-xs font-bold text-[#959595]">{category}</p>
        </div>
      </div>
    </Link>
  );
};
