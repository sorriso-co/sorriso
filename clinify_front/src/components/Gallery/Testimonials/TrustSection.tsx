"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const TrustSection: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <section className="flex flex-col items-center bg-transparent py-12 px-4 sm:py-16 lg:px-20">
      {/* Section Title */}
      <div className="w-full text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-teal-900 mb-4 sm:mb-6">
          {t("trustSection.title")}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-serif">
          {t("trustSection.description")}
        </p>
      </div>

      {/* Trust Symbols Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 md:gap-16 justify-items-center items-center">
        {/* ISO Certification */}
        <div className="flex flex-col items-center text-center max-w-xs w-full">
          <div className="flex-grow flex items-center justify-center mb-4 sm:mb-6 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px]">
            <Image
              src="/images/certifications/trust_iso.webp"
              alt={t("trustSection.iso.alt")}
              width={220}
              height={220}
              loading="lazy" // Lazy-load the image to improve performance
              className="object-contain"
            />
          </div>
          <p className="text-sm sm:text-lg md:text-xl text-teal-800 font-medium font-serif">
            {t("trustSection.iso.text")}
          </p>
        </div>

        {/* Global Clinic Rating (GCR) Accreditation */}
        <div className="flex flex-col items-center text-center max-w-xs w-full">
          <div className="flex-grow flex items-center justify-center mb-4 sm:mb-6 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px]">
            <Image
              src="/images/certifications/trust_gcr.webp"
              alt={t("trustSection.gcr.alt")}
              width={220}
              height={220}
              loading="lazy"
              className="object-contain"
            />
          </div>
          <p className="text-sm sm:text-lg md:text-xl text-teal-800 font-medium font-serif">
            {t("trustSection.gcr.text")}
          </p>
        </div>

        {/* European Dental Association (EDA) Membership */}
        <div className="flex flex-col items-center text-center max-w-xs w-full">
          <div className="flex-grow flex items-center justify-center mb-4 sm:mb-6 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px]">
            <Image
              src="/images/certifications/trust_eda.webp"
              alt={t("trustSection.eda.alt")}
              width={220}
              height={220}
              loading="lazy"
              className="object-contain"
            />
          </div>
          <p className="text-sm sm:text-lg md:text-xl text-teal-800 font-medium font-serif">
            {t("trustSection.eda.text")}
          </p>
        </div>

        {/* International Dental Association */}
        <div className="flex flex-col items-center text-center max-w-xs w-full">
          <div className="flex-grow flex items-center justify-center mb-4 sm:mb-6 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px]">
            <Image
              src="/images/certifications/trust_ida.webp"
              alt={t("trustSection.ida.alt")}
              width={220}
              height={220}
              loading="lazy"
              className="object-contain"
            />
          </div>
          <p className="text-sm sm:text-lg md:text-xl text-teal-800 font-medium font-serif">
            {t("trustSection.ida.text")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
