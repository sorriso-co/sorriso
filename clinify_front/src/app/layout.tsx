'use client';
import React, { ReactNode, useEffect } from 'react';
import { Inter } from 'next/font/google';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../i18n';
import '../styles/global.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import CookieConsentBanner from '@/components/CookieConsent';
import SEOHead from '@/app/SEOHead';
import { initializeDataLayer } from '@/utils/loadAnalytics';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  useEffect(() => {
    initializeDataLayer();

    // Load the Google Analytics script
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-W0ZJMYKBBD';
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag.js
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('js', new Date());
      window.gtag('config', 'G-W0ZJMYKBBD', {
        anonymize_ip: false,
      });
    }
  }, []);

  return (
    <html lang="en" className={`${inter.className} h-full w-full`}>
      <SEOHead />
      <body className="max-w-screen w-full overflow-x-hidden h-full flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CookieConsentBanner />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
