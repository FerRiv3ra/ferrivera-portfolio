'use client';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { lato } from '../fonts';

export default function StickyTitle() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center flex-col pt-20">
      <p
        className={`text-4xl text-center font-bold pb-5
              ${lato.className}
              sticky top-[43%]
              `}
      >
        {t('header.portfolio')}
      </p>
      <div className="mt-4 lg:mt-10 z-10">
        <Image
          src={'/Screen.png'}
          alt="Phone"
          width="0"
          height="0"
          sizes="100vw"
          className="w-[275px] sm:w-96 md:w-[500px] lg:w-[700px] h-auto"
        />
      </div>
    </div>
  );
}
