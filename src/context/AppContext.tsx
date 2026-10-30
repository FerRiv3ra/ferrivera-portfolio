import { axiosClient } from '@/config/axiosClient';
import i18n from '@/i18n/i18nConfig';
import {
  createContext,
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

type AppContextProps = {
  aboutRef: MutableRefObject<HTMLDivElement | null>;
  contactRef: MutableRefObject<HTMLDivElement | null>;
  resumeUrl: string;
  portfolioRef: MutableRefObject<HTMLDivElement | null>;
  theme: 'light' | 'dark';
  toggleLanguage: () => void;
  toggleTheme: () => void;
};

export const AppContext = createContext({} as AppContextProps);

export const AppProvider = ({ children }: any) => {
  const [resumeUrl, setResumeUrl] = useState('');

  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const portfolioRef = useRef<HTMLDivElement | null>(null);

  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const userLangStg = localStorage.getItem('userLang');

    const navLang = window.navigator.language.slice(0, 2);

    if (!!userLangStg) {
      i18n.changeLanguage(userLangStg);
    } else {
      localStorage.setItem('navLang', navLang);
      i18n.changeLanguage(navLang);
    }
  }, []);

  useEffect(() => {
    const userThemeStg = localStorage.getItem('theme');

    if (!!userThemeStg) {
      setTheme(userThemeStg as 'dark' | 'light');
    } else {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        localStorage.setItem('theme', 'dark');
        setTheme('dark');
      } else {
        localStorage.setItem('theme', 'light');
        setTheme('light');
      }
    }
  }, []);

  useEffect(() => {
    getResume();
  }, []);

  const toggleLanguage = () => {
    const currentLang = i18n.language;

    if (currentLang === 'it') {
      i18n.changeLanguage('en');
      localStorage.setItem('userLang', 'en');
    } else if (currentLang === 'en') {
      i18n.changeLanguage('es');
      localStorage.setItem('userLang', 'es');
    } else {
      i18n.changeLanguage('it');
      localStorage.setItem('userLang', 'it');
    }
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  const getResume = async () => {
    try {
      const { data } = await axiosClient.get<{
        record: { latestResume: string };
      }>(`/${process.env.NEXT_PUBLIC_RESUME_URL}`, {
        headers: {
          'X-Access-Key': `${new String(
            '$2a$10$wWucG5TdzdNFcRkyMJbqd.zBZ2RoveYmZQM3hxOLI9WMucY4r/CJ2'
          )}`,
        },
      });

      setResumeUrl(data.record.latestResume);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        aboutRef,
        contactRef,
        portfolioRef,
        resumeUrl,
        theme,
        toggleLanguage,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a AppProvider');
  }

  return context;
};
