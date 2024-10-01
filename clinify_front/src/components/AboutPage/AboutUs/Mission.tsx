"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Mission: React.FC = () => {
  const { t } = useTranslation("about");

  return (
    <section className="relative bg-gradient-to-r from-teal-700 to-teal-900 text-left py-12 px-6 sm:py-16 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 overflow-hidden">
      {/* Content Section */}
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8 xl:space-x-12 2xl:space-x-16 m-3">
        
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 lg:pl-8 xl:pl-12 2xl:pl-16">
          {/* Main Heading for SEO */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold mb-4 sm:mb-6 text-white">
            {t("mission.title", { defaultValue: "Patient-Centric Dental Care" })}
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white mb-6 sm:mb-12 font-semibold">
            {t("mission.subtitle", { defaultValue: "Excellence, Tailored for You" })}
          </h2>

          {/* Descriptive Text with SEO Keywords */}
          <div className="text-base sm:text-lg lg:text-xl text-white font-sans space-y-4 sm:space-y-6">
            <p className="leading-relaxed text-white">
              {t("mission.description1", { defaultValue: "At Sorriso, we combine advanced dental care with personalized treatment plans, ensuring your comfort and well-being at every step. Our mission is to deliver expert care in Montenegro, offering high-quality services to achieve your best smile." })}
            </p>
            <p className="leading-relaxed text-white">
              {t("mission.description2", { defaultValue: "With cutting-edge technology and a dedicated team, we provide a seamless dental experience, making Sorriso a leader in dental tourism. Trust us to deliver the best care, from implants to cosmetic treatments." })}
            </p>
            {/* Call-to-Action */}
            <p className="leading-relaxed">
              <Link href="/services" className="text-white underline">
                {t("mission.cta", { defaultValue: "Learn more about our services and how we can enhance your smile." })}
              </Link>
            </p>
          </div>
        </div>

        {/* Right-side Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src="/images/Team/staff/team.webp"
            alt="Sorriso Dental Team"
            width={700}
            height={500}
            className="rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;
