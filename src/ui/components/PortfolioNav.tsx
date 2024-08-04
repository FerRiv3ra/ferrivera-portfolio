'use client';
import { useAppContext } from '@/context/AppContext';
import { projectIdType } from '@/types/appTypes';
import { inter } from '../fonts';

export const PortfolioNav = () => {
  const { category, filterProjects } = useAppContext();

  const handleClick = (cat: 'ALL' | projectIdType) => {
    filterProjects(cat);
  };

  return (
    <div
      className={`${inter.className} text-[#a5a5a5] flex justify-center text-lg w-6/12 mx-auto font-thin`}
    >
      <button
        className={`flex-1 text-center ${
          category === 'ALL'
            ? 'border-b-[3px] border-[#a5a5a5]'
            : 'border-b-[1px] border-[#4d4d4d]'
        } pb-3`}
        type="button"
        onClick={() => handleClick('ALL')}
      >
        All
      </button>
      <button
        className={`flex-1 text-center ${
          category === 'APPMOVIL'
            ? 'border-b-[3px] border-[#a5a5a5]'
            : 'border-b-[1px] border-[#4d4d4d]'
        } pb-3`}
        type="button"
        onClick={() => handleClick('APPMOVIL')}
      >
        Mobile
      </button>
      <button
        className={`flex-1 text-center ${
          category === 'BACKEND'
            ? 'border-b-[3px] border-[#a5a5a5]'
            : 'border-b-[1px] border-[#4d4d4d]'
        } pb-3`}
        type="button"
        onClick={() => handleClick('BACKEND')}
      >
        Backend
      </button>
      <button
        className={`flex-1 text-center ${
          category === 'WEB'
            ? 'border-b-[3px] border-[#a5a5a5]'
            : 'border-b-[1px] border-[#4d4d4d]'
        } pb-3`}
        type="button"
        onClick={() => handleClick('WEB')}
      >
        Web
      </button>
      <button
        className={`flex-1 text-center ${
          category === 'LIBRARY'
            ? 'border-b-[3px] border-[#a5a5a5]'
            : 'border-b-[1px] border-[#4d4d4d]'
        } pb-3`}
        type="button"
        onClick={() => handleClick('LIBRARY')}
      >
        Library
      </button>
    </div>
  );
};
