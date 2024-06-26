"use client";
import React, { ReactNode } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import { withTranslation, WithTranslation } from 'react-i18next';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import '../i18n';

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps extends WithTranslation {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children, t }) => {
  return (
    <html lang="en" className={`${inter.className} h-full w-full`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={t('meta.description')} />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/images/icons/icon.png" />
        <title>{t('meta.title')}</title>
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t('meta.ogTitle')} />
        <meta property="og:description" content={t('meta.ogDescription')} />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://sorriso.care" />
        <meta property="og:site_name" content="Sorriso" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('meta.twitterTitle')} />
        <meta name="twitter:description" content={t('meta.twitterDescription')} />
        <meta name="twitter:site" content="@sorrisocare" />
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Sorriso Care" />
        <meta name="keywords" content={t('meta.keywords')} />
      </Head>
      <body className={`max-w-screen w-full overflow-x-hidden h-full flex flex-col ${inter.className}`}>
        <Header />
        <main className="flex-grow px-0 sm:px-0 lg:px-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default withTranslation()(RootLayout);
