"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Founders: React.FC = () => {
  const { t } = useTranslation('about');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative overflow-x-hidden bg-gradient-to-b from-teal-50 to-teal-100 py-16 rounded-lg shadow-lg mt-12">
      <h2
        className="text-5xl font-serif font-bold text-teal-700 text-center mb-12"
        data-aos="fade-up"
      >
        {t('founders.title')}
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-20">
        <div
          className="flex flex-col items-center mb-5 group"
          data-aos="fade-right"
        >
          <div className="relative w-72 h-72">
            <Image
              src="/images/Team/founders/ivan.jpeg"
              alt="Ivan Cabrilo"
              width={300}
              height={300}
              className="rounded-full shadow-lg transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-700 opacity-0 group-hover:opacity-80 rounded-full transition-opacity duration-300"></div>
          </div>
          <h3 className="mt-6 text-2xl font-semibold font-serif text-teal-900">
            {t('founders.member1.name')}
          </h3>
          <p className="mt-4 text-center text-gray-700 max-w-xs font-serif">
            {t('founders.member1.description')}
          </p>
        </div>
        <div
          className="flex flex-col items-center mb-5 group"
          data-aos="fade-left"
        >
          <div className="relative w-72 h-72">
            <Image
              src="/images/Team/founders/filip.jpg"
              alt="Dr. Filip Sukovic med. dent."
              width={300}
              height={300}
              priority
              className="rounded-full shadow-lg transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-700 opacity-0 group-hover:opacity-80 rounded-full transition-opacity duration-300"></div>
          </div>
          <h3 className="mt-6 text-2xl font-semibold font-serif text-teal-900">
            {t('founders.member2.name')}
          </h3>
          <p className="mt-4 text-center font-serif text-teal-900 max-w-xs">
            {t('founders.member2.description')}
          </p>
        </div>
        <div
          className="flex flex-col items-center mb-5 group"
          data-aos="fade-left"
        >
          <div className="relative w-72 h-72">
            <Image
              src="/images/Team/founders/djole.jpeg"
              alt="Djordje Ivanovic"
              width={300}
              height={300}
              className="rounded-full shadow-lg transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-700 opacity-0 group-hover:opacity-80 rounded-full transition-opacity duration-300"></div>
          </div>
          <h3 className="mt-6 text-2xl font-semibold font-serif text-teal-900">
            {t('founders.member3.name')}
          </h3>
          <p className="mt-4 text-center font-serif text-teal-900 max-w-xs">
            {t('founders.member3.description')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Founders;
