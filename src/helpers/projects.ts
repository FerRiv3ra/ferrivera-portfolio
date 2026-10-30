import { products } from '@/data/projects';
import {
  imgNameType,
  LinkType,
  Localized,
  Product,
  projectIdType,
} from '@/types/appTypes';

export const linkOrder: LinkType[] = [
  'appstore',
  'playstore',
  'url',
  'npm',
  'github',
  'docsUrl',
];

// Accepts the current slug or the id used before projects were grouped.
export const findProduct = (id: string) =>
  products.find(
    (product) =>
      product.slug === id || product.parts.some((part) => part.legacyId === id)
  );

export const localized = (text: Localized, language: string) =>
  text[language as keyof Localized] ?? text.en;

export const productKinds = (product: Product): projectIdType[] =>
  Array.from(new Set(product.parts.map((part) => part.kind)));

export const productTechnologies = (product: Product): imgNameType[] =>
  Array.from(new Set(product.parts.flatMap((part) => part.technologies)));

export const otherProducts = (product: Product, count: number) => {
  const index = products.indexOf(product);

  return Array.from(
    { length: Math.min(count, products.length - 1) },
    (_, i) => products[(index + i + 1) % products.length]
  );
};
