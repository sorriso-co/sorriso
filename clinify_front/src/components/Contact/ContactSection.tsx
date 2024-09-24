"use client";
import React from "react";
import ContactDetails from "./ContactDetails";
import { useTranslation } from "react-i18next";
import BookACall from "./ContactAppointment";

const ContactSection: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <div className="w-screen min-h-screen bg-teal-800 flex flex-col justify-center py-12">
      <div className="container mx-auto px-4 sm:px-8">
        {/* Section Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white">
            {t("contactSection.title")}
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl font-serif text-white mt-4">
            {t("contactSection.subtitle")}
          </p>
        </div>

        {/* Content Section with Side-by-Side Layout */}
        <div className="flex flex-col lg:flex-row bg-white rounded-lg p-6 lg:p-10 gap-8 lg:gap-12 items-start">
          {/* Left: Book a Call */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4 text-teal-800 text-center lg:text-left">
              {t("contactSection.consultationTitle")}
            </h3>
            <p className="text-base sm:text-lg md:text-xl font-serif text-teal-700 mb-6 text-center lg:text-left">
              {t("contactSection.consultationDescription")}
            </p>
            <BookACall />
          </div>

          {/* Right: Contact Details */}
          <div className="w-full lg:w-1/2">
            <ContactDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
