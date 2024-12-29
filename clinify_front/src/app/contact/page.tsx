"use client";

import React from "react";
import ContactSection from "../../components/Contact/ContactSection";

const Contact: React.FC = () => {
  return (
    <>
      <head>
        {/* Essential Meta Tags */}
        <title>Contact Us - Sorriso Care | Get in Touch with Our Team</title>
        <meta
          name="description"
          content="Reach out to Sorriso Care for any inquiries or assistance regarding our dental services in Montenegro. We're here to help!"
        />
        <meta
          name="keywords"
          content="contact Sorriso Care, dental services Montenegro, dental tourism assistance, Sorriso Care support, Montenegro dentist contact, dental travel inquiries, dental care support, travel deals, luxury holidays, cheap flights to Europe, health and wellness retreats, affordable health care abroad, top tourist destinations, Mediterranean vacation packages, cultural tours Europe, holiday planning tips"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sorriso.care/contact" />
        <link rel="icon" href="/images/icons/icon.svg" type="image/x-icon" />
        <link rel="shortcut icon" href="/images/icons/icon.svg" type="image/x-icon" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"
        />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Contact Us - Sorriso Care | Get in Touch with Our Team"
        />
        <meta
          property="og:description"
          content="Reach out to Sorriso Care for any inquiries or assistance regarding our dental services in Montenegro. We're here to help!"
        />
        <meta property="og:url" content="https://sorriso.care/contact" />
        <meta
          property="og:image"
          content="https://sorriso.care/images/contact-og-image.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sorriso Care" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sorriso_care" />
        <meta
          name="twitter:title"
          content="Contact Us - Sorriso Care | Get in Touch with Our Team"
        />
        <meta
          name="twitter:description"
          content="Reach out to Sorriso Care for any inquiries or assistance regarding our dental services in Montenegro. We're here to help!"
        />
        <meta
          name="twitter:image"
          content="https://sorriso.care/images/contact-og-image.jpg"
        />
      </head>
      <section aria-labelledby="contact-section-heading">
        <h1 id="contact-section-heading" className="sr-only">
          Contact Us
        </h1>
        <ContactSection />
      </section>
    </>
  );
};

export default Contact;
