import { useTranslation } from 'react-i18next';

import { svgSelector, svgType } from '@/helpers/svgSelector';
import Link from 'next/link';

interface Props {
  type: svgType;
  url: string;
}

export const Button = ({ type, url }: Props) => {
  const { t } = useTranslation();

  const img = svgSelector(type);

  return (
    <Link
      href={url}
      target="_blank"
      className="bg-white flex items-center w-52 text-gray-700 justify-center gap-x-3  text-sm sm:text-base  rounded-lg hover:bg-gray-200 duration-300 transition-colors border py-2.5"
    >
      <img src={img} className="w-5 h-5 sm:h-6 sm:w-6" />
      <span>{t(`portfolio.${type}`)}</span>
    </Link>
  );
};
