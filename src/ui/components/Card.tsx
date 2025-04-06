import { getProjectDetails } from '@/helpers/getProjectImage';
import { Project } from '@/types/appTypes';
import Image from 'next/image';
import Link from 'next/link';
import { lato } from '../fonts';

type Props = {
  project: Project;
};

export const Card = ({ project }: Props) => {
  const { name, category, image } = getProjectDetails(project);

  return (
    <Link
      href={`/portfolio/${project.uid}`}
      className={`${lato.className} flex min-w-96 md:min-w-11/12 flex-col md:items-center  md:mx-auto mb-5 hover:scale-95 transition-all ease-in-out duration-500 rounded-t-3xl overflow-hidden`}
    >
      <div className="relative w-11/12 md:w-96 h-96 rounded-t-3xl bg-white/[0.1] overflow-hidden">
        <div className="absolute top-0 z-10 left-0 w-full h-full bg-[#121212]/[0.5] rounded-t-3xl overflow-hidden" />
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover w-full h-full z-0"
        />
      </div>
      <div className="flex w-11/12 md:w-96 h-14 px-4 bg-white/[0.08]  rounded-b-xl items-center justify-between">
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
