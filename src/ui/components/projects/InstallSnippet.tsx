import { useState } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  command: string;
};

export const InstallSnippet = ({ command }: Props) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs font-bold uppercase tracking-wider text-[#707070]">
        {t('portfolio.install')}
      </p>
      <div className="flex items-center gap-3 pl-4 pr-2 py-2 rounded-xl border border-white/10 bg-black/50 font-mono text-sm">
        <span className="text-[#FD6F00]">$</span>
        <code className="flex-1 min-w-0 text-[#C6C6C6] break-all">
          {command}
        </code>
        <button
          type="button"
          onClick={copy}
          className="shrink-0 px-3 py-1.5 rounded-md text-xs font-sans font-bold text-[#C6C6C6] bg-white/[0.06] hover:bg-white/[0.12] transition"
        >
          {copied ? t('portfolio.copied') : t('portfolio.copy')}
        </button>
      </div>
    </div>
  );
};
