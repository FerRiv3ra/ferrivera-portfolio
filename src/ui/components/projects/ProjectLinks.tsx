import { linkOrder } from '@/helpers/projects';
import { LinkType } from '@/types/appTypes';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Github } from '../icons/Github';
import { NpmIcon } from '../icons/NpmIcon';
import { Postman } from '../icons/Postman';
import { WebIcon } from '../icons/WebIcon';

type Props = {
  links: Partial<Record<LinkType, string>>;
};

const icons: Partial<Record<LinkType, typeof Github>> = {
  github: Github,
  npm: NpmIcon,
  docsUrl: Postman,
  url: WebIcon,
};

export const ProjectLinks = ({ links }: Props) => {
  const { t } = useTranslation();
  const available = linkOrder.filter((type) => links[type]);

  if (!available.length) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {available.map((type, index) => {
        const Icon = icons[type];
        const primary = index === 0;

        return (
          <Link
            key={type}
            href={links[type]!}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 h-11 px-4 rounded-lg text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${
              primary
                ? 'bg-[#FD6F00] text-white hover:bg-[#ff8124]'
                : 'border border-white/15 text-[#C6C6C6] hover:border-[#FD6F00] hover:text-white'
            }`}
          >
            {Icon && (
              <span className={primary ? 'p-0.5 rounded bg-white' : ''}>
                <Icon className="w-5 h-5 fill-current" />
              </span>
            )}
            {t(`portfolio.${type}`)}
            <span aria-hidden>↗</span>
          </Link>
        );
      })}
    </div>
  );
};
