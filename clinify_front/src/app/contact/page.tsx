"use client";
import React from "react";
import { useTranslation } from "next-i18next";
import ContactSection from "../../components/Contact/ContactSection";
import Head from "next/head"; 

const Contact: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("meta_contact.title", { defaultValue: "Contact Us - Sorriso Care | Get in Touch with Our Team" })}</title>
        <meta
          name="description"
          content={t("meta_contact.description", {
            defaultValue: "Reach out to Sorriso Care for any inquiries or assistance regarding our dental services in Montenegro. We're here to help!",
          })}
        />
        <meta
          name="keywords"
          content={t("meta_contact.keywords", {
            defaultValue:
              "Contact Sorriso Care, dental services, Montenegro dental care, dental tourism contact, Contatta Sorriso Care, servizi dentali, assistenza dentale in Montenegro, contatti turismo dentale, Kontakt Sorriso Care, Zahnbehandlungen, Zahntourismus Montenegro, Zahnpflege Kontakt",
          })}
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sorriso.care/contact" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:title" content={t("meta_contact.og_title", { defaultValue: "Contact Us - Sorriso Care" })} />
        <meta
          property="og:description"
          content={t("meta_contact.og_description", {
            defaultValue: "Reach out to Sorriso Care for any inquiries or assistance regarding our dental services in Montenegro.",
          })}
        />
        <meta property="og:url" content="https://sorriso.care/contact" />
        <meta property="og:image" content={t("meta_contact.og_image", { defaultValue: "https://sorriso.care/images/contact-thumbnail.jpg" })} />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("meta_contact.twitter_title", { defaultValue: "Contact Us - Sorriso Care" })} />
        <meta
          name="twitter:description"
          content={t("meta_contact.twitter_description", {
            defaultValue: "Reach out to Sorriso Care for any inquiries or assistance regarding our dental services in Montenegro.",
          })}
        />
        <meta name="twitter:image" content={t("meta_contact.twitter_image", { defaultValue: "https://sorriso.care/images/contact-thumbnail.jpg" })} />
      </Head>

      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <section aria-labelledby="contact-section-heading">
            <h1 id="contact-section-heading" className="sr-only">
              {t("meta_contact.title", { defaultValue: "Contact Us" })}
            </h1>
            <ContactSection />
          </section>
        </main>
      </div>
    </>
  );
};

export default Contact;
