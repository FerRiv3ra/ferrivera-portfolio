'use client';
import { AppProvider } from '@/context/AppContext';
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
      <body className={inter.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
