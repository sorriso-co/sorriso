"use client";
import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import { useTranslation } from 'react-i18next';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import '../i18n';
import '../styles/global.css';

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const { t } = useTranslation();

  return (
    <html lang="en" className={`${inter.className} h-full w-full`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={t('meta.description')} />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/images/icons/icon.png" />
        <title>{t('meta.title')}</title>
      </head>
      <body className="max-w-screen w-full overflow-x-hidden h-full flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;