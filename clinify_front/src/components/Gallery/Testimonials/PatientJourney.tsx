"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const PatientJourney: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <section className="flex justify-center items-center bg-transparent py-15 px-4 lg:px-20">
      {/* Content Wrapper */}
      <div className="w-full max-w-7xl flex flex-col items-center">
        {/* Text Section */}
        <div className="w-full max-w-4xl text-center mb-8 sm:mb-12 px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold text-teal-900 mb-6 sm:mb-8 leading-tight">
            {t("patientJourney.title")}
          </h1>
          <p className="text-base sm:text-lg md:text-2xl font-serif text-gray-800 mb-4 sm:mb-6 leading-relaxed">
            {t("patientJourney.description1")}
          </p>
          <p className="text-base sm:text-lg md:text-2xl font-serif text-gray-800 leading-relaxed">
            {t("patientJourney.description2")}
          </p>
        </div>

        {/* Map Image Section */}
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-0 flex justify-center mb-8 lg:mb-12">
          <Image
            src="/images/icons/patient_origin.webp"
            alt={t("patientJourney.mapAlt")}
            width={1500}
            height={850}
            loading="lazy"
            className="rounded-xl object-contain"
          />
        </div>

        {/* Final Call-to-Action Text */}
        <div className="text-center w-full max-w-4xl px-4">
          <p className="text-base sm:text-lg md:text-2xl font-serif text-gray-800 leading-relaxed">
            {t("patientJourney.callToAction")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PatientJourney;
