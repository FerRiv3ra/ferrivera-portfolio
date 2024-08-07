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
          className={big ? 'h-16 w-16 mx-auto' : 'h-10 w-10'}
          src={img}
          alt={title}
        />
        {big && <p className="text-center">{title}</p>}
      </div>
    </Tooltip>
  );
};
