"use client";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";

// Dynamically import Swiper to enable lazy loading
const TestSwiper = dynamic(() => import("../AboutUs/Swiper"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const AboutUs: React.FC = () => {
  const { t } = useTranslation("about");

  return (
    <div className="relative min-h-screen bg-gradient-to-r bg-white">
      {/* Content and Image Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16 md:px-8 lg:px-12 xl:px-16 md:py-20">
        {/* Text Content */}
        <div className="md:w-1/2 md:pr-8 lg:pr-12">
          <ul className="space-y-6">
            <li className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#008080]">
              {t("aboutUs.expertTeam", {
                defaultValue: "Experienced Dentists",
              })}
            </li>
            <li className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#008080]">
              {t("aboutUs.personalizedCare", {
                defaultValue: "Personalized Care",
              })}
            </li>
          </ul>
          <p className="mt-8 text-lg md:text-xl lg:text-2xl font-medium text-[#008080]">
            {t("aboutUs.description", {
              defaultValue:
                "Combining the best in dental technology and care for your perfect smile.",
            })}
          </p>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <Image
            src="/images/about_us_slide/front.webp"
            alt="Smiling Woman"
            width={600}
            height={600}
            priority
            quality={70}
            className="object-cover rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Swiper Section */}
      <div className="mt-12">
        <TestSwiper />
      </div>
    </div>
  );
};

export default AboutUs;
