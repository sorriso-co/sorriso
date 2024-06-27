"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Vision: React.FC = () => {
  const { t } = useTranslation('about');

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section className="relative bg-teal-50 text-left py-12 sm:py-16 overflow-x-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "rgba(255,255,255,0)", stopOpacity: 0 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgba(0,128,128,0.2)", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <circle cx="20%" cy="30%" r="300" fill="url(#gradient2)" />
          <circle cx="70%" cy="70%" r="200" fill="url(#gradient2)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full lg:w-1/2 lg:pr-12" data-aos="fade-right">
          <h1 className="text-4xl sm:text-5xl font-serif font-extrabold mb-4 sm:mb-6 text-teal-900 text-center lg:text-left">
            {t('vision.title')}
          </h1>
          <h2 className="text-2xl sm:text-3xl font-serif text-teal-800 mb-6 sm:mb-12 font-semibold text-center lg:text-left">
            {t('vision.subtitle')}
          </h2>
          <div className="text-base sm:text-lg text-teal-800 font-serif text-center lg:text-left">
            <p className="mb-4 sm:mb-6">
              {t('vision.paragraph1')}
            </p>
            <p>
              {t('vision.paragraph2')}
            </p>
          </div>
        </div>
        <div
          className="w-full lg:w-1/2 mt-8 lg:mt-0 flex flex-wrap justify-center lg:justify-end"
          data-aos="fade-left"
        >
          <div className="w-1/2 sm:w-1/3 p-1 sm:p-2 transform transition-transform hover:scale-105">
            <div className="relative w-full h-32 sm:h-48">
              <Image
                src="/images/mne/cable.jpeg"
                alt="Montenegro Landscape 1"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="w-1/2 sm:w-1/3 p-1 sm:p-2 transform transition-transform hover:scale-105">
            <div className="relative w-full h-32 sm:h-48">
              <Image
                src="/images/mne/perast.jpeg"
                alt="Montenegro Landscape 2"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="w-1/2 sm:w-1/3 p-1 sm:p-2 transform transition-transform hover:scale-105">
            <div className="relative w-full h-32 sm:h-48">
              <Image
                src="/images/mne/durmitor.jpeg"
                alt="Montenegro Landscape 3"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="w-1/2 sm:w-1/3 p-1 sm:p-2 transform transition-transform hover:scale-105">
            <div className="relative w-full h-32 sm:h-48">
              <Image
                src="/images/mne/rafting.jpeg"
                alt="Montenegro Landscape 4"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="w-1/2 sm:w-1/3 p-1 sm:p-2 transform transition-transform hover:scale-105">
            <div className="relative w-full h-32 sm:h-48">
              <Image
                src="/images/mne/lovcen.jpeg"
                alt="Montenegro Landscape 5"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="w-1/2 sm:w-1/3 p-1 sm:p-2 transform transition-transform hover:scale-105">
            <div className="relative w-full h-32 sm:h-48">
              <Image
                src="/images/mne/ljepota.png"
                alt="Montenegro Landscape 6"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;