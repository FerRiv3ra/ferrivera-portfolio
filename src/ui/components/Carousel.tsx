import Image from 'next/image';
import { useState } from 'react';

interface Props {
  images: string[];
  alt: string;
  landscape?: boolean;
}

const Arrow = ({ direction }: { direction: 'left' | 'right' }) => (
  <svg
    className="w-4 h-4"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 6 10"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d={direction === 'left' ? 'M5 1 1 5l4 4' : 'm1 9 4-4-4-4'}
    />
  </svg>
);

export const Carousel = ({ images, alt, landscape = false }: Props) => {
  const [visible, setVisible] = useState(0);

  const move = (step: number) =>
    setVisible((current) => (current + step + images.length) % images.length);

  const arrowClass =
    'absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black/60 text-white border border-white/10 backdrop-blur transition hover:bg-[#FD6F00]';

  return (
    <div className="flex flex-col gap-4 w-full min-w-0">
      <div
        className={`relative w-full rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] ${
          landscape ? 'aspect-[16/10]' : 'h-[420px] md:h-[520px]'
        }`}
      >
        <Image
          key={images[visible]}
          src={images[visible]}
          alt={`${alt} ${visible + 1}`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain p-4"
        />
        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous"
              onClick={() => move(-1)}
              className={`${arrowClass} left-3`}
            >
              <Arrow direction="left" />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => move(1)}
              className={`${arrowClass} right-3`}
            >
              <Arrow direction="right" />
            </button>
            <span className="absolute bottom-3 right-3 px-2 py-1 rounded-md bg-black/60 text-xs text-[#C6C6C6]">
              {visible + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              aria-label={`${alt} ${index + 1}`}
              onClick={() => setVisible(index)}
              className={`relative shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition ${
                visible === index
                  ? 'border-[#FD6F00]'
                  : 'border-transparent opacity-50 hover:opacity-100'
              }`}
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="64px"
                className="object-cover object-top"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
