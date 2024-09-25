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
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'; // Replace with your Measurement ID
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag.js
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('js', new Date());
      window.gtag('config', 'G-XXXXXXXXXX', {
        anonymize_ip: true, // Optional: anonymize IP addresses
      });
    }
  }, []);

  return (
    <html lang="en" className={`${inter.className} h-full w-full`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/images/icons/icon.png" />
        <link rel="preload" href="/images/slide_main/zastolicom.webp" as="image" />
      </head>
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
