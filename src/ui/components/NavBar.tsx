'use client';
import { useState } from 'react';

import { useAppContext } from '@/context/AppContext';
import { smoothScrollTo } from '@/helpers/smoothScroll';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { toggleLanguage, portfolioRef, bottomRef } = useAppContext();

  const path = usePathname();

  const handleClick = (div: 'portfolio' | 'bottom' | 'top') => {
    let target: number = 0;
    switch (div) {
      case 'bottom':
        if (!!bottomRef.current) {
          target = bottomRef.current.offsetTop;
        }
        break;
      case 'portfolio':
        if (!!portfolioRef.current) {
          target = portfolioRef.current.offsetTop - 80;
        }
        break;
      case 'top':
        target = 0;
        break;
    }

    smoothScrollTo(target, path.includes('portfolio') ? 0 : 2500);
  };

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:w-full md:px-24 lg:px-8 fixed h-20 bg-[#0E0E0E]/[0.5] z-30 ">
      <div className="relative flex items-center justify-between">
        <Link
          href="/"
          aria-label="Company"
          title="Company"
          className="inline-flex items-end"
          onClick={() => handleClick('top')}
        >
          <Image src={'/fr-logo.svg'} alt="Logo" width={35} height={35} />
          <span
            className="ml-[2px] text-xl font-bold tracking-wide text-gray-100"
            translate="no"
          >
            IVERA
          </span>
        </Link>
        <ul className="items-center hidden space-x-8 md:flex">
          {!path.includes('portfolio') && (
            <>
              <li>
                <Link
                  href="/#portfolio"
                  aria-label="portfolio"
                  title="portfolio"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                  onClick={() => handleClick('portfolio')}
                >
                  {t('header.portfolio')}
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  aria-label="contact"
                  title="contact"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                  onClick={() => handleClick('bottom')}
                >
                  {t('header.getInTouch')}
                </Link>
              </li>
            </>
          )}

          <button
            onClick={toggleLanguage}
            type="button"
            className="inline-flex z-30 items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            translate="no"
          >
            {i18n.language === 'es' ? '🇪🇸 ES' : '🇬🇧 EN'}
          </button>
        </ul>
        <div className="md:hidden z-10">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-white" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-[#0E0E0E] rounded">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      href="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <Image
                        src={'/fr-logo.svg'}
                        alt="Logo"
                        width={35}
                        height={35}
                      />
                      <span
                        className="ml-2 text-xl font-bold tracking-wide text-white uppercase"
                        translate="no"
                      >
                        IVERA
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-white" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        href="/#portfolio"
                        aria-label="portfolio"
                        title="portfolio"
                        className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        {t('header.portfolio')}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#contact"
                        aria-label="contact"
                        title="contact"
                        className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        {t('header.getInTouch')}
                      </Link>
                    </li>

                    <button
                      onClick={toggleLanguage}
                      type="button"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                      {i18n.language === 'es' ? '🇪🇸 ES' : '🇬🇧 EN'}
                    </button>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
