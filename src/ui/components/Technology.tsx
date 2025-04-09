import { imgNameType } from '@/types/appTypes';
import { imgSelector } from '../../helpers/imgSelector';
import { lato } from '../fonts';
import { Tooltip } from './Tooltip';

interface Props {
  tech: imgNameType;
  big?: boolean;
}

export const Technology = ({ tech, big = false }: Props) => {
  const { img, title } = imgSelector(tech);

  return (
    <div className={`${lato.className}`}>
      <Tooltip message={title}>
        <img
          className={big ? 'h-10 w-10 md:h-10 md:w-10 mx-auto' : 'h-10 w-10'}
          src={img}
          alt={title}
        />
      </Tooltip>
      {big && (
        <p className="text-center text-[10px] md:text-xs mt-3">{title}</p>
      )}
    </div>
  );
};
