'use client';
import { useAppContext } from '@/context/AppContext';
import { useForm } from '@/hooks/useForm';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

export const ContactMe = () => {
  const { t } = useTranslation();
  const { contactRef } = useAppContext();
  const { name, email, message, onChange, reset } = useForm({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async () => {
    const { data } = await axios.post('/api/send-email', {
      name,
      email,
      message,
    });

    if (data.success) {
      toast.success('Message sent successfully.');

      reset();
    } else {
      console.error(data.error);
    }
  };

  return (
    <div
      ref={contactRef}
      className="flex flex-col items-center justify-center my-20"
    >
      <p className="text-4xl text-center font-bold">{t('contact.contactMe')}</p>
      <p className="text-base text-center text-[#707070]">
        {t('contact.description')}
      </p>
      <form className="flex w-full md:w-2/3 justify-center lg:justify-end mt-12 gap-7 flex-wrap">
        <input
          type="text"
          value={name}
          onChange={({ target }) => onChange(target.value, 'name')}
          className="p-4 bg-white/[0.04] rounded-lg w-full lg:flex-1 text-white placeholder-[#959595]"
          placeholder={t('contact.form.name')}
        />
        <input
          type="email"
          value={email}
          onChange={({ target }) => onChange(target.value, 'email')}
          className="p-4 bg-white/[0.04] rounded-lg w-full lg:flex-1 text-white placeholder-[#959595]"
          placeholder={t('contact.form.email')}
        />
        <textarea
          rows={5}
          value={message}
          onChange={({ target }) => onChange(target.value, 'message')}
          className="p-4 bg-white/[0.04] rounded-lg w-full text-white placeholder-[#959595]"
          placeholder={t('contact.form.message')}
        />
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!name || !email || !message}
          className="h-12 w-40 bg-[#FD6F00] rounded-lg flex justify-center items-center text-white font-bold  hover:scale-110 transition-all ease-in-out duration-500"
        >
          {t('contact.form.send')}
        </button>
      </form>
    </div>
  );
};
