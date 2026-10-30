'use client';
import { useAppContext } from '@/context/AppContext';
import { products } from '@/data/projects';
import { useTranslation } from 'react-i18next';
import { lato } from '../../fonts';
import { ProductCard } from './ProductCard';

const featured = products.filter((product) => product.featured);
const more = products.filter(
  (product) => !product.featured && product.section === 'product'
);
const libraries = products.filter(
  (product) => !product.featured && product.section === 'library'
);

const SectionHeader = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => (
  <div className="flex flex-col gap-1 mb-6">
    <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
    {description && <p className="text-[#707070]">{description}</p>}
  </div>
);

export const ProjectsSection = () => {
  const { portfolioRef } = useAppContext();
  const { t } = useTranslation();

  return (
    <div
      ref={portfolioRef}
      className={`${lato.className} flex flex-col gap-20 w-full mt-8`}
    >
      <section>
        <SectionHeader
          title={t('portfolio.featured')}
          description={t('portfolio.featuredDescription')}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} size="large" />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader title={t('portfolio.more')} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {more.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader
          title={t('portfolio.openSource')}
          description={t('portfolio.openSourceDescription')}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {libraries.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};
