"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const AboutPageCTA: React.FC = () => {
  const { t } = useTranslation('about');

  return (
    <section className="bg-gradient-to-r from-teal-100 to-teal-200 py-12 lg:py-16 text-white">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* CTA Content */}
        <h2 className="text-3xl text-teal-700 sm:text-4xl lg:text-5xl font-bold font-serif mb-6">
          {t('cta.title', { defaultValue: 'Ready to Experience World-Class Dental Care?' })}
        </h2>
        <p className="text-lg text-teal-700 sm:text-xl lg:text-2xl font-light mb-8">
          {t('cta.description', { defaultValue: 'Join thousands of satisfied clients and get the dental care you deserve at Sorriso. Start your journey towards a healthier, more radiant smile today.' })}
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <Link href="/contact"
            className="bg-white text-teal-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 hover:text-teal-700 transition-transform transform hover:scale-105 text-lg">
              {t('cta.bookButton', { defaultValue: 'Book a Consultation' })}
          </Link>
          <Link href="/services"
            className="bg-teal-500 text-teal-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-teal-700 transition-transform transform hover:scale-105 text-lg">
              {t('cta.servicesButton', { defaultValue: 'Explore Our Services' })}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPageCTA;
