"use client";
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const CallToAction: React.FC = () => {
  const { t } = useTranslation('services');

  return (
    <section className="relative bg-teal-600 py-16 px-8 text-center overflow-x-hidden">
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-serif font-bold text-white mb-6">
          {t('cta.title')}
        </h2>
        <p className="text-lg font-serif text-teal-100 mb-8">
          {t('cta.description')}
        </p>
        <Link href="/contact" passHref>
          <div className="bg-white text-teal-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-transform transform hover:scale-110 inline-block text-lg cursor-pointer">
            {t('cta.buttonText')}
          </div>
        </Link>
      </div>
      <div className="absolute inset-x-0 bottom-0 overflow-hidden pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1440 320">
          <path fill="#28a99e" fillOpacity="1" d="M0,160L60,160C120,160,240,160,360,170.7C480,181,600,203,720,224C840,245,960,267,1080,250.7C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default CallToAction;
