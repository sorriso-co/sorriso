"use client";
import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../i18n";
import "../styles/global.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import CookieConsentBanner from "@/components/CookieConsent"; 

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
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

        {/* Cookie Consent Banner */}
        <CookieConsentBanner />

        {/* Performance and Analytics */}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
