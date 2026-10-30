import { imgNameType } from '@/types/appTypes';
import Image from 'next/image';
import { imgSelector } from '../../helpers/imgSelector';

interface Props {
  tech: imgNameType;
}

export const Technology = ({ tech }: Props) => {
  const { img, title } = imgSelector(tech);

  return (
    <span className="inline-flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-[#C6C6C6]">
      {img ? (
        <Image
          src={img}
          alt=""
          width={20}
          height={20}
          unoptimized={img.endsWith('.svg')}
          className="w-5 h-5 object-contain"
        />
      ) : (
        <span className="w-5 h-5 flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FD6F00]" />
        </span>
      )}
      {title}
    </span>
  );
};
