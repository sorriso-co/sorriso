"use client";
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const CallToAction: React.FC = () => {
  const { t } = useTranslation('services');

  return (
    <section className="relative bg-transparent py-16 px-8 text-center overflow-x-hidden">
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-serif font-bold text-teal-800 mb-6">
          {t('cta.title')}
        </h2>
        <p className="text-lg font-serif text-teal-800 mb-8">
          {t('cta.description')}
        </p>
        <Link href="/contact" passHref>
          <div className="bg-white text-teal-800 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-transform transform hover:scale-110 inline-block text-lg cursor-pointer">
            {t('cta.buttonText')}
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
