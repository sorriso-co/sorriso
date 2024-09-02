"use client";
import React from "react";
import ContactDetails from "./ContactDetails";
import { useTranslation } from "react-i18next";
import BookACall from "./ContactAppointment";

const ContactSection: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <div className="container mx-auto flex flex-col flex-grow pt-12 sm:pt-20 bg-teal-200">
      <div className="text-center mb-8 sm:mb-12 px-4 sm:px-0">
        <h2 className="text-5xl mt-10 lg:mt-3 sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-white">
          {t("contactSection.title")}
        </h2>
        <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-serif text-white mt-4">
          {t("contactSection.subtitle")}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start bg-white rounded-lg shadow-lg p-4 sm:p-8 space-y-8 lg:space-y-0">
        <div className="w-full lg:w-1/2 lg:pr-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-4 text-teal-800 text-center lg:text-left">
            {t("contactSection.consultationTitle")}
          </h3>
          <p className="text-base sm:text-lg md:text-xl font-serif text-teal-700 mb-8 text-center lg:text-left">
            {t("contactSection.consultationDescription")}
          </p>
          <BookACall />
        </div>
        <div className="w-full lg:w-1/2">
          <ContactDetails />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
