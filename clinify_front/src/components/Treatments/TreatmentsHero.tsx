"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'next-i18next';

const TreatmentsHero: React.FC = () => {
  const { t } = useTranslation('services');

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className="bg-teal-50 py-16 px-8 relative overflow-x-hidden">
      <div className="container mx-auto text-center" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-teal-900 mb-6">
          {t('treatmentsHero.title')}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-teal-700 mb-8">
          {t('treatmentsHero.description')}
        </p>
        <div className='flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4'>
          <Link href="/contact" passHref
            className="bg-teal-600 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full hover:bg-teal-700 transition-transform transform hover:scale-110 inline-block text-lg md:text-xl lg:text-2xl shadow-lg">
              {t('treatmentsHero.contactUs')}
            
          </Link>
          <Link href="/pricing" passHref
            className="bg-white text-teal-600 font-bold py-3 px-8 md:py-4 md:px-10 rounded-full hover:bg-gray-100 transition-transform transform hover:scale-110 inline-block text-lg md:text-xl lg:text-2xl shadow-lg">
              {t('treatmentsHero.viewAllTreatments')}
            
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%">
              <stop offset="0%" style={{ stopColor: 'rgba(255,255,255,0)', stopOpacity: 0 }} />
              <stop offset="100%" style={{ stopColor: 'rgba(0,128,128,0.2)', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <circle cx="40%" cy="20%" r="300" fill="url(#gradient1)" />
        </svg>
      </div>
    </div>
  );
};

export default TreatmentsHero;
