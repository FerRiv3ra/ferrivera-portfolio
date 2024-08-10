import { imgNameType } from '@/types/appTypes';
import { imgSelector } from '../../helpers/imgSelector';
import { Tooltip } from './Tooltip';

interface Props {
  tech: imgNameType;
  big?: boolean;
}

export const Technology = ({ tech, big = false }: Props) => {
  const { img, title } = imgSelector(tech);

  return (
    <Tooltip message={title}>
      <div>
        <img
          className={big ? 'h-10 w-10 md:h-16 md:w-16 mx-auto' : 'h-10 w-10'}
          src={img}
          alt={title}
        />
        {big && <p className="text-center text-[10px] md:text-base">{title}</p>}
      </div>
    </Tooltip>
  );
};
