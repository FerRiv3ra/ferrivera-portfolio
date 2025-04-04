'use client';
import { AppProvider } from '@/context/AppContext';
import i18n from '@/i18n/i18nConfig';
import Footer from '@/ui/components/Footer';
import { NavBar } from '@/ui/components/NavBar';
import { I18nextProvider } from 'react-i18next';
import { inter } from '../ui/fonts';
import '../ui/globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>FerRiv3ra</title>
        <meta
          name="description"
          content="Full Stack mobile developer portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="https://github.com/FerRiv3ra" />
      </head>
      <body className={`${inter.className} bg-[#121212]`}>
        <I18nextProvider i18n={i18n}>
          <AppProvider>
            <NavBar />
            {children}
            <Footer />
          </AppProvider>
        </I18nextProvider>
      </body>
    </html>
  );
}
