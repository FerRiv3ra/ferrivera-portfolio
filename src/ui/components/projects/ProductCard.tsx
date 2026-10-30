'use client';
import { imgSelector } from '@/helpers/imgSelector';
import {
  localized,
  productKinds,
  productTechnologies,
} from '@/helpers/projects';
import { Product } from '@/types/appTypes';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { lato } from '../../fonts';
import { KindChips } from './KindChips';
import { ProjectCover } from './ProjectCover';

type Props = {
  product: Product;
  size?: 'large' | 'small';
};

const MAX_TECHNOLOGIES = 4;

export const ProductCard = ({ product, size = 'small' }: Props) => {
  const { t, i18n } = useTranslation();
  const technologies = productTechnologies(product);
  const hiddenTechnologies = technologies.length - MAX_TECHNOLOGIES;
  const large = size === 'large';

  return (
    <Link
      href={`/portfolio/${product.slug}`}
      className={`${lato.className} group flex flex-col h-full rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-[#FD6F00]/50 hover:shadow-[0_20px_60px_-20px_rgba(253,111,0,0.35)]`}
    >
      <div
        className={`relative w-full overflow-hidden bg-white/[0.04] ${
          large
            ? 'aspect-[16/10]'
            : product.cover
              ? 'aspect-[4/3]'
              : 'aspect-[2/1]'
        }`}
      >
        <ProjectCover
          product={product}
          sizes={
            large
              ? '(min-width: 768px) 50vw, 100vw'
              : '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'
          }
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#121212]/80 to-transparent" />
      </div>

      <div className={`flex flex-col flex-1 gap-3 ${large ? 'p-6' : 'p-5'}`}>
        <KindChips kinds={productKinds(product)} />
        <h3
          className={`font-bold text-white break-words ${
            large ? 'text-2xl' : 'text-lg'
          }`}
        >
          {product.name}
        </h3>
        <p
          className={`text-[#959595] ${
            large ? 'text-base' : 'text-sm line-clamp-3'
          }`}
        >
          {localized(product.tagline, i18n.language)}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {technologies.slice(0, MAX_TECHNOLOGIES).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md text-[11px] font-medium text-[#BABABA] bg-white/[0.06]"
            >
              {imgSelector(tech).title}
            </span>
          ))}
          {hiddenTechnologies > 0 && (
            <span className="px-2 py-0.5 rounded-md text-[11px] font-medium text-[#707070] bg-white/[0.04]">
              +{hiddenTechnologies}
            </span>
          )}
        </div>

        {large && (
          <span className="inline-flex items-center gap-1 pt-2 text-sm font-bold text-[#FD6F00]">
            {t('portfolio.viewProject')}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        )}
      </div>
    </Link>
  );
};
