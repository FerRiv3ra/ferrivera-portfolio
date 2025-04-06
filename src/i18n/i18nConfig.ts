import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './languages/en.json';
import es from './languages/es.json';
import it from './languages/it.json';

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
  it: {
    translation: it,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
  resources,
  postProcess: ['newLineProcessor'],
  returnNull: false,
  lng: 'en',
  fallbackLng: 'en',
});

export default i18n;
