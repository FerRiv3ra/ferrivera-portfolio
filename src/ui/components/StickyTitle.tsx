'use client';
import Image from 'next/image';
import { roboto } from '../fonts';

export default function StickyTitle() {
  return (
    <div className="flex items-center flex-col">
      <div
        className={`bg-gradient-to-tl from-[#cf9b42] to-[#fcc733] text-6xl sm:text-8xl lg:text-[165px] 2xl:text-[190px] font-black text-transparent bg-clip-text break-normal
              ${roboto.className}
              py-1
              lg:py-2
              sticky top-[43%]
              `}
      >
        Portfolio
      </div>
      <div className="mt-4 lg:mt-10 z-10 pb-28 md:pb-48 2xl:pb-60">
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
