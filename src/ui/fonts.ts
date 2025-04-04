import { Indie_Flower, Inter, Lato, Roboto } from 'next/font/google';

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
});
export const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '700', '900'],
});
export const indieFlower = Indie_Flower({
  subsets: ['latin'],
  weight: ['400'],
});
export const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});
