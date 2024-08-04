import { roboto } from '../fonts';

export const Header = () => {
  return (
    <div className={`${roboto.className} relative bg-[#1e1e1e]`}>
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-[#0E0E0E]"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl">
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none">
            Fullstack mobile developer
          </h2>
          <p className="mb-6 text-xl font-thin tracking-wide text-gray-300 md:text-lg">
            Hello, I am Fernando Rivera, a highly skilled React, React Native
            and Node developer with more than 3 years of experience developing
            cross-platform mobile apps, backend servers, react native libraries
            and web apps.
          </p>
        </div>
      </div>
    </div>
  );
};
