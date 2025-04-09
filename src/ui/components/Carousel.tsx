import Image from 'next/image';
import { useState } from 'react';

interface Props {
  images: string[];
}

export const Carousel = ({ images }: Props) => {
  const [visible, setVisible] = useState(0);

  const handleChange = (type: 'less' | 'add') => {
    if (type === 'add') {
      if (visible === images.length - 1) {
        setVisible(0);
      } else {
        setVisible(visible + 1);
      }
    } else {
      if (visible === 0) {
        setVisible(images.length - 1);
      } else {
        setVisible(visible - 1);
      }
    }
  };

  return (
    <div
      id="default-carousel"
      className="flex relative flex-col items-center w-full mb-10"
      data-carousel="slide"
    >
      {/* Carousel wrapper */}
      <div className="flex relative justify-center items-center gap-5 h-56  rounded-lg md:h-96">
        {/* Item 1 */}

        <button type="button" onClick={() => handleChange('less')}>
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full bg-white/30 group-hover:bg-black/50`}
          >
            <svg
              className={`w-4 h-4 text-white`}
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
                d="M5 1 1 5l4 4"
              />
            </svg>
          </div>
        </button>
        <Image
          src={images[visible]}
          alt={images[visible]}
          width="0"
          height="0"
          sizes="100vw"
          className="h-96 w-auto object-cover object-top hover:scale-110 transition duration-500"
        />

        <button type="button" onClick={() => handleChange('add')}>
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full bg-white/30 group-hover:bg-black/50`}
          >
            <svg
              className={`w-4 h-4 text-white`}
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
                d="m1 9 4-4-4-4"
              />
            </svg>
          </div>
        </button>
      </div>
      {/* Slider indicators */}
      <div className="flex mt-5 z-30 gap-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              visible === index ? 'bg-[#FD6F00]' : 'bg-[#BABABA]'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
