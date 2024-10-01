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
    <div className="relative min-h-screen overflow-hidden bg-teal-900">
      {/* Background Image */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/images/about_us_slide/tech.webp"
          alt="Background"
          width={1920}
          height={1080}
          priority
          className="object-cover w-full h-full opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-16 md:px-8 lg:px-12 xl:px-16 2xl:px-20 md:py-20">
        <div className="md:w-1/2 md:pr-8 lg:pr-12 xl:pr-16">
          <ul className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 xl:space-y-14 2xl:space-y-16">
            <li className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold font-serif text-white">
              {t("aboutUs.cuttingEdgeTech", { defaultValue: "Cutting-Edge Dental Technology" })}
            </li>
            <li className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold font-serif text-white">
              {t("aboutUs.expertTeam", { defaultValue: "Expert Team of Dentists" })}
            </li>
            <li className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold font-serif text-white">
              {t("aboutUs.personalizedCare", { defaultValue: "Personalized Care for Every Patient" })}
            </li>
          </ul>
          <p className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-16 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-serif text-gray-100">
            {t("aboutUs.description", {
              defaultValue:
                "At Sorriso, we combine world-class dental care with cutting-edge technology to ensure that you receive the highest level of service possible. Experience the future of dentistry today.",
            })}
          </p>
        </div>
      </div>

      {/* Swiper Section */}
      <div className="relative z-20 p-4 md:mt-10">
        <TestSwiper />
      </div>
    </div>
  );
};

export default AboutUs;
