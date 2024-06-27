"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const WhyMontenegro: React.FC = () => {
  const { t } = useTranslation('about');

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/mne/prokletije.jpeg"
          alt="Background"
          width={1920}
          height={1080}
          priority
          className="object-cover z-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-1"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-start h-full text-center pt-20 md:pt-32">
        <h2
          className="text-5xl md:text-8xl font-bold text-white font-serif mb-4"
          data-aos="fade-up"
        >
          {t('whyMontenegro.title')}
        </h2>
        <h3
          className="text-3xl md:text-5xl font-bold text-teal-300 font-serif"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {t('whyMontenegro.subtitle')}
        </h3>
      </div>
    </div>
  );
};

export default WhyMontenegro;