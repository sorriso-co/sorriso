"use client";
import React from "react";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";
import { useTranslation } from "react-i18next";

const ContactSection: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className="container mx-auto flex flex-col flex-grow pt-24 bg-teal-200">
      <div className="text-center mb-12">
        <h2 className="text-7xl font-bold font-serif text-white">
          {t('contactSection.title')}
        </h2>
        <p className="text-3xl font-serif text-white mt-4">
          {t('contactSection.subtitle')}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start bg-white rounded-lg shadow-lg p-8 space-y-8 lg:space-y-0">
        <div className="w-full lg:w-1/2 lg:pr-8">
          <h3 className="text-2xl font-serif font-bold mb-4 text-teal-800 text-center lg:text-left">
            {t('contactSection.consultationTitle')}
          </h3>
          <p className="text-lg font-serif text-teal-700 mb-8 text-center lg:text-left">
            {t('contactSection.consultationDescription')}
          </p>
          <ContactForm />
        </div>
        <div className="w-full lg:w-1/2">
          <ContactDetails />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
