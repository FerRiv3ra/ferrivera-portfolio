'use client';

import { findProduct, localized, otherProducts } from '@/helpers/projects';
import { Carousel } from '@/ui/components/Carousel';
import { InstallSnippet } from '@/ui/components/projects/InstallSnippet';
import { KindChips } from '@/ui/components/projects/KindChips';
import { ProductCard } from '@/ui/components/projects/ProductCard';
import { ProjectLinks } from '@/ui/components/projects/ProjectLinks';
import { Technology } from '@/ui/components/Technology';
import { lato } from '@/ui/fonts';
import Link from 'next/link';
import {
  notFound,
  useParams,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function ProjectScreen() {
  const params = useParams<{ project: string }>();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { i18n, t } = useTranslation();

  const product = findProduct(params.project);

  useEffect(() => {
    // Old links pointed at a single part id; move them to the product slug.
    if (product && product.slug !== params.project) {
      const legacy = product.parts.find(
        (part) => part.legacyId === params.project
      );
      router.replace(
        `/portfolio/${product.slug}${legacy ? `?part=${legacy.kind}` : ''}`
      );
    }
  }, [product, params.project, router]);

  if (!product) notFound();

  const part =
    product.parts.find(({ kind }) => kind === searchParams.get('part')) ??
    product.parts[0];

  // Native history update keeps the scroll position; Next syncs useSearchParams.
  const selectPart = (kind: string) =>
    window.history.replaceState(null, '', `?part=${kind}`);
  const paragraphs = localized(part.description, i18n.language)
    .split('\n')
    .filter(Boolean);

  return (
    <main
      className={`${lato.className} container mx-auto px-4 pt-28 pb-20 text-white`}
    >
      <Link
        href="/#portfolio"
        className="inline-flex items-center gap-2 text-sm font-bold text-[#959595] hover:text-[#FD6F00] transition"
      >
        ← {t('portfolio.back')}
      </Link>

      <header className="flex flex-col gap-4 mt-8 max-w-3xl">
        <KindChips kinds={product.parts.map(({ kind }) => kind)} />
        <h1 className="text-4xl md:text-5xl font-bold break-words">
          {product.name}
        </h1>
        <p className="text-lg text-[#959595]">
          {localized(product.tagline, i18n.language)}
        </p>
      </header>

      {product.parts.length > 1 && (
        <div className="flex flex-col gap-3 mt-12">
          <p className="text-xs font-bold uppercase tracking-wider text-[#707070]">
            {t('portfolio.included')}
          </p>
          <div className="inline-flex flex-wrap gap-2 p-1 rounded-xl bg-white/[0.04] border border-white/10 self-start">
            {product.parts.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => selectPart(item.kind)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition ${
                  item === part
                    ? 'bg-[#FD6F00] text-white'
                    : 'text-[#959595] hover:text-white'
                }`}
              >
                {t(`portfolio.${item.kind}`)}
              </button>
            ))}
          </div>
        </div>
      )}

      <section
        key={part.name}
        className={`grid gap-10 mt-8 ${
          part.images.length ? 'lg:grid-cols-2' : 'max-w-3xl'
        }`}
      >
        {part.images.length > 0 && (
          <Carousel
            images={part.images}
            alt={part.name}
            landscape={part.kind === 'WEB' || part.kind === 'BACKEND'}
          />
        )}

        <div className="flex flex-col gap-8 min-w-0">
          <div className="flex flex-col gap-4">
            {product.parts.length > 1 && (
              <h2 className="text-2xl font-bold">{part.name}</h2>
            )}
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-[#959595] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {part.install && <InstallSnippet command={part.install} />}

          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#707070]">
              {t('portfolio.technologies')}
            </p>
            <div className="flex flex-wrap gap-2">
              {part.technologies.map((tech) => (
                <Technology key={tech} tech={tech} />
              ))}
            </div>
          </div>

          <ProjectLinks links={part.links} />
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          {t('portfolio.otherProjects')}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherProducts(product, 3).map((other) => (
            <ProductCard key={other.slug} product={other} />
          ))}
        </div>
      </section>
    </main>
  );
}
