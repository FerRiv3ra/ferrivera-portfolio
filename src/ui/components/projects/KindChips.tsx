import { projectIdType } from '@/types/appTypes';
import { useTranslation } from 'react-i18next';

type Props = {
  kinds: projectIdType[];
};

export const KindChips = ({ kinds }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap gap-2">
      {kinds.map((kind) => (
        <span
          key={kind}
          className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-[#FD6F00] bg-[#FD6F00]/10 border border-[#FD6F00]/20"
        >
          {t(`portfolio.${kind}`)}
        </span>
      ))}
    </div>
  );
};
