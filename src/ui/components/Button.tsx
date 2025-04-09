import { svgSelector, svgType } from '@/helpers/svgSelector';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Tooltip } from './Tooltip';

interface Props {
  type: svgType;
  url: string;
}

export const Button = ({ type, url }: Props) => {
  const Icon = svgSelector(type);
  const { t } = useTranslation();

  return (
    <Link
      href={url}
      target="_blank"
      className="hover:scale-125 transition-all ease-in-out duration-500"
    >
      <Tooltip message={t(`portfolio.${type}`)}>
        <Icon />
      </Tooltip>
    </Link>
  );
};
