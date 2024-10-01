import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

const SEOHead = () => {
  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Sorriso Care offers affordable dental tourism in the Balkans with high-quality dental care at low costs. Book your next dental trip today!" />
        <meta name="keywords" content="dental tourism, affordable dental care, dental treatment Balkans, Sorriso Care, Montenegro dental services" />
        <meta name="robots" content="index, follow" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="author" content="Sorriso Care" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="application-name" content="Sorriso Care" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://sorriso.care/" />

        {/* Favicons */}
        <link rel="icon" href="/images/icons/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/icons/icon.svg" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preconnect and DNS Prefetch for Performance Optimization */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="Sorriso Care - Affordable Dental Tourism in the Balkans" />
        <meta property="og:description" content="Affordable Dental Tourism in the Balkans. Offering high-quality dental care at affordable costs." />
        <meta property="og:image" content="https://sorriso.care/images/icons/icon.svg" />
        <meta property="og:image:alt" content="Sorriso Care Logo" />
        <meta property="og:url" content="https://sorriso.care" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Sorriso Care" />

        {/* Twitter Card for Social Sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sorriso_care" />
        <meta name="twitter:title" content="Sorriso Care - Affordable Dental Tourism in the Balkans" />
        <meta name="twitter:description" content="Affordable Dental Tourism in the Balkans. Offering high-quality dental care at affordable costs." />
        <meta name="twitter:image" content="https://sorriso.care/images/icons/icon.svg" />
        <meta name="twitter:image:alt" content="Sorriso Care Logo" />

        {/* Additional SEO Meta Tags */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />

        {/* Security Headers */}
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' https://sorriso.care data:; script-src 'self' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; font-src 'self' data:;" />
        <meta httpEquiv="Permissions-Policy" content="geolocation=(self), microphone=()" />
        <meta httpEquiv="Strict-Transport-Security" content="max-age=63072000; includeSubDomains; preload" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

        {/* Performance Optimization */}
        <meta httpEquiv="Cache-Control" content="max-age=3600, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />

        {/* Structured Data (Schema.org JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Sorriso Care",
              "url": "https://sorriso.care",
              "logo": "https://sorriso.care/images/icons/icon.svg",
              "sameAs": [
                "https://www.facebook.com/sorrisocare",
                "https://www.linkedin.com/company/sorriso-care",
                "https://www.instagram.com/sorriso_care/"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+382 60 664 668",
                "contactType": "Customer Service",
                "areaServed": "Balkans",
                "availableLanguage": ["English", "Montenegrin", "Italian"]
              },
              "description": "Affordable Dental Tourism in the Balkans. Offering high-quality dental care at affordable costs.",
              "founder": {
                "@type": "Person",
                "name": "Dr. Filip Šuković"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Podgorica",
                "addressCountry": "Montenegro",
                "postalCode": "81000",
                "streetAddress": "bb Gavra Vukovića"
              }
            })
          }}
        />
      </Head>

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
    </>
  );
};

export default SEOHead;
