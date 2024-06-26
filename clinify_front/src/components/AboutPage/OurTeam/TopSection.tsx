"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const TopSection: React.FC = () => {
  const { t } = useTranslation('about');

  return (
    <div className="relative overflow-x-hidden bg-teal-500 py-16 px-4 sm:py-24 lg:py-32 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl drop-shadow-lg font-serif">
          {t('topSection.title')}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-white font-light sm:text-2xl lg:text-3xl leading-relaxed drop-shadow-lg font-sans">
          {t('topSection.description')}
        </p>
        <div className="mt-10">
          <a
            href="/contact"
            className="inline-block bg-white text-teal-600 font-bold py-3 px-6 rounded-md shadow-lg hover:bg-teal-100 transition-transform transform hover:scale-105 text-lg"
          >
            {t('topSection.button')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
