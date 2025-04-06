'use client';
import { useTranslation } from 'react-i18next';

export const ContactMe = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center my-20">
      <p className="text-4xl text-center font-bold">{t('contact.contactMe')}</p>
      <p className="text-base text-center text-[#707070]">
        {t('contact.description')}
      </p>
      <form className="flex w-2/3 justify-end mt-12 gap-7 flex-wrap">
        <input
          type="text"
          className="p-4 bg-white/[0.04] rounded-lg w-1/2 flex-1 text-white placeholder-[#959595]"
          placeholder={t('contact.form.name')}
        />
        <input
          type="text"
          className="p-4 bg-white/[0.04] rounded-lg w-1/2 flex-1 text-white placeholder-[#959595]"
          placeholder={t('contact.form.email')}
        />
        <textarea
          rows={5}
          className="p-4 bg-white/[0.04] rounded-lg w-full text-white placeholder-[#959595]"
          placeholder={t('contact.form.message')}
        />
        <button
          type="button"
          className="h-12 w-40 bg-[#FD6F00] rounded-lg flex justify-center items-center text-white font-bold  hover:scale-110 transition-all ease-in-out duration-500"
        >
          {t('contact.form.send')}
        </button>
      </form>
    </div>
  );
};
