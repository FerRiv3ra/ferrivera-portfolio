import { useState } from 'react';
import { useAppContext } from '../../context/AppContext';

interface Props {
  images: string[];
}

export const Carousel = ({ images }: Props) => {
  const [visible, setVisible] = useState(0);
  const { theme } = useAppContext();

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

  const colors = {
    bgIndicator: {
      selected: theme === 'light' ? 'bg-gray-400' : 'bg-gray-800',
      unSelected: theme === 'light' ? 'bg-gray-800' : 'bg-white',
    },
    controls: {
      text: theme === 'light' ? 'text-gray-800' : 'text-white',
      group:
        theme === 'light'
          ? 'bg-black/30 group-hover:bg-black/50 group-focus:ring-black'
          : 'bg-white/30 group-hover:bg-white/50 group-focus:ring-white',
    },
  };

  return (
    <div
      id="default-carousel"
      className="relative w-10/12 mb-10"
      data-carousel="slide"
    >
      {/* Carousel wrapper */}
      <div className="relative h-56  rounded-lg md:h-96">
        {/* Item 1 */}
        <div className="duration-700 ease-in-out" data-carousel-item="">
          <img
            src={images[visible]}
            className="block border border-gray-800 rounded-lg absolute h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 hover:scale-125 transition duration-500"
            alt={images[visible]}
          />
        </div>
      </div>
      {/* Slider indicators */}
      <div className="flex absolute mt-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
        {images.map((_, index) => (
          <button
            type="button"
            key={index}
            className={`w-3 h-3 rounded-full ${
              visible === index
                ? colors.bgIndicator.selected
                : colors.bgIndicator.unSelected
            }`}
          ></button>
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        onClick={() => handleChange('less')}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev=""
      >
        <span
          className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${colors.controls.group} group-focus:ring-4 group-focus:outline-none`}
        >
          <svg
            className={`w-4 h-4 ${colors.controls.text}`}
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
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        onClick={() => handleChange('add')}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next=""
      >
        <span
          className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${colors.controls.group} group-focus:ring-4 group-focus:outline-none`}
        >
          <svg
            className={`w-4 h-4 ${colors.controls.text}`}
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
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};
