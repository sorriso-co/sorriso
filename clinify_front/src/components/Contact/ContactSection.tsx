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
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white">
            {t("contactSection.title")}
          </h2>
          <p className="text-xl sm:text-3xl md:text-5xl font-serif text-white mt-4">
            {t("contactSection.subtitle")}
          </p>
        </div>

        
        {/* Content Section with Side-by-Side Layout */}
        <div className="flex flex-col lg:flex-row bg-white rounded-lg items-start">
          {/* Left: Book a Call */}
          <BookACall />

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
