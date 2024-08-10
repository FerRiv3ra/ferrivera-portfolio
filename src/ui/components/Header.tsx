'use client';
import { useTranslation } from 'react-i18next';
import { roboto } from '../fonts';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <div
      className={`${roboto.className} relative bg-gradient-to-b from-transparent to-[#fcc733]/[.25] pt-20`}
    >
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl">
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none">
            {t('home.title')}
          </h2>
          <p className="mb-6 text-xl font-thin tracking-wide text-gray-300 md:text-lg">
            {t('home.desc')}
          </p>
        </div>
      </div>
    </div>
  );
};
