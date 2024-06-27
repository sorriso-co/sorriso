"use client";
import React, { useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const Comparison = () => {
  const { t } = useTranslation('pricing');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="container overflow-x-hidden mx-auto py-10 px-4">
      <h1 className="text-6xl font-serif font-semibold text-center mb-6 text-teal-800" data-aos="fade-up">
        {t('comparison.title')}
      </h1>
      <p className="text-center text-lg font-serif font-light mb-8" data-aos="fade-up" data-aos-delay="100">
        {t('comparison.description')}
      </p>
      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8" data-aos="fade-up" data-aos-delay="200">
        <div className="bg-gray-200 rounded-lg shadow-md p-6" data-aos="fade-right">
          <Image 
            src="/images/bills/other_bill.png"
            alt="Dentist Bill 1"
            width={400}
            height={700}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="bg-teal-100 rounded-lg shadow-md p-6" data-aos="fade-left">
          <Image 
            src="/images/bills/sorriso_bill.png"
            alt="Dentist Bill 2"
            width={400}
            height={700}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="text-center mt-16">
        <Link href="/contact"
          className="inline-block bg-teal-400 text-white py-3 px-8 rounded-lg hover:bg-teal-600 transition-colors" data-aos="zoom-in">
          {t('comparison.cta')}
        </Link>
      </div>
    </div>
  );
};

export default Comparison;
