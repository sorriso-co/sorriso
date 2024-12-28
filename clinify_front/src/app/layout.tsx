"use client";

import React, { ReactNode } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../i18n";
import "../styles/global.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import CookieConsentBanner from "@/components/CookieConsent/CookieConsent";
import Script from "next/script";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        {/* Essential Meta Tags */}
        <title>Sorriso Care - Affordable Dental Tourism</title>
        <meta
          name="description"
          content="Sorriso Care offers affordable dental tourism in the Balkans with high-quality dental care at low costs. Book your next dental trip today!"
        />
        <meta
          name="keywords"
          content="veneers turkey, cost for tooth implant, dental implants, teeth implants, tooth implants, full mouth dental implants, all on 4 dental implants, teeth implants cost, smile dentist, dental bridge, Turkey teeth, Montenegro, fly to Montenegro, New Year, cavity, bad teeth"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sorriso.care/" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"
        />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="application-name" content="Sorriso Care" />

        {/* Favicons */}
        <link rel="icon" href="/images/icons/icon.svg" type="image/svg+xml" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Sorriso Care - Affordable Dental Tourism" />
        <meta
          property="og:description"
          content="Discover high-quality dental care at affordable prices with Sorriso Care. Your dental tourism partner in the Balkans."
        />
        <meta property="og:url" content="https://sorriso.care/" />
        <meta
          property="og:image"
          content="https://sorriso.care/images/icons/icon.svg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sorriso Care" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sorriso_care" />
        <meta name="twitter:title" content="Sorriso Care - Affordable Dental Tourism" />
        <meta
          name="twitter:description"
          content="High-quality dental care at low costs. Explore dental tourism options in the Balkans with Sorriso Care."
        />
        <meta
          name="twitter:image"
          content="https://sorriso.care/images/icons/icon.svg"
        />

        {/* Structured Data (Schema.org JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sorriso Care",
              url: "https://sorriso.care/",
              logo: "https://sorriso.care/images/icons/icon.svg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+382 60 664 668",
                contactType: "Customer Service",
                areaServed: "Balkans",
                availableLanguage: ["English", "Montenegrin", "Italian", "German"],
              },
              description:
                "Sorriso Care offers affordable dental tourism in the Balkans with high-quality dental care at low costs.",
              founder: {
                "@type": "Person",
                name: "Dr. Filip Šuković",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Podgorica",
                addressCountry: "Montenegro",
                postalCode: "81000",
                streetAddress: "bb Gavra Vukovića",
              },
            }),
          }}
        />
      </head>
      <body>
        {/* Google Analytics using next/script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M6K5YPE590"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M6K5YPE590', {
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure'
            });
          `}
        </Script>

        {/* Header Component */}
        <Header />

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer Component */}
        <Footer />

        {/* Additional Components */}
        <CookieConsentBanner />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
