"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const WhyMontenegro: React.FC = () => {
  const { t } = useTranslation("about");

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/mne/prokletije.webp"
          alt={t("whyMontenegro.imageAlt", { defaultValue: "Montenegro Nature" })}
          width={1920}
          height={1080}
          priority
          className="object-cover w-full h-full"
        />
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Content Section */}
      <div className="relative flex flex-col items-center justify-center h-full text-center">
        <h2 className="text-5xl md:text-8xl font-bold text-white font-serif mb-4">
          {t("whyMontenegro.title", { defaultValue: "Why Choose Montenegro?" })}
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold text-teal-300 font-serif">
          {t("whyMontenegro.subtitle", { defaultValue: "Stunning Nature and High-Quality Dental Care" })}
        </h3>
      </div>
    </div>
  );
};

export default WhyMontenegro;
