import { Product } from '@/types/appTypes';
import Image from 'next/image';

type Props = {
  product: Product;
  sizes: string;
};

export const ProjectCover = ({ product, sizes }: Props) => {
  if (product.cover) {
    return (
      <Image
        src={product.cover}
        alt={product.name}
        fill
        sizes={sizes}
        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
      />
    );
  }

  // Libraries without artwork get a terminal-style cover built from their install command.
  const install = product.parts[0].install ?? `npm i ${product.slug}`;

  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-5 p-6 md:p-8 bg-[radial-gradient(circle_at_top_right,rgba(253,111,0,0.25),transparent_60%)]">
      <div className="rounded-xl border border-white/10 bg-black/60 shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.03]">
        <div className="flex gap-1.5 px-4 py-3 border-b border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <pre className="px-4 py-4 text-xs md:text-sm font-mono text-[#C6C6C6] whitespace-pre-wrap break-words">
          <span className="text-[#FD6F00]">$ </span>
          {install}
        </pre>
      </div>
    </div>
  );
};
