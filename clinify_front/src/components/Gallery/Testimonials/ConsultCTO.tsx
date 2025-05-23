"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faHome,
  faCar,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "next-i18next";

const ConsultationBanner: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <section className="flex justify-center py-12 sm:py-16 px-4 lg:px-0 bg-transparent">
      <div className="w-full max-w-7xl mx-auto bg-teal-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row md:items-center">
        {/* Profile Section */}
        <div className="flex justify-center md:justify-start md:items-center mb-8 md:mb-0">
          <div className="relative w-48 h-48 md:w-56 md:h-56 overflow-hidden">
            <Image
              src="/images/Team/staff/milija.webp"
              alt={t("consultationBanner.profileAlt")}
              fill
              loading="lazy"
              className="rounded-full object-cover object-top"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-grow text-center md:text-left mb-8 md:mb-0 md:ml-8 lg:ml-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            {t("consultationBanner.title")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6">
            {t("consultationBanner.description1")}
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6">
            {t("consultationBanner.description2")}
          </p>

          {/* Additional Information Section */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center md:justify-start gap-4 sm:gap-6 mt-7 sm:mt-8">
            {/* Accommodation Included */}
            <div className="flex items-center justify-center sm:justify-start">
              <FontAwesomeIcon
                icon={faHome}
                className="text-xl sm:text-2xl md:text-3xl mr-3 flex-shrink-0"
              />
              <p className="text-sm sm:text-base md:text-xl font-medium">
                {t("consultationBanner.accommodation")}
              </p>
            </div>

            {/* Free Consultation */}
            <div className="flex items-center justify-center sm:justify-start">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-xl sm:text-2xl md:text-3xl mr-3 flex-shrink-0"
              />
              <p className="text-sm sm:text-base md:text-xl font-medium">
                {t("consultationBanner.consultation")}
              </p>
            </div>

            {/* Transport Included */}
            <div className="flex items-center justify-center sm:justify-start">
              <FontAwesomeIcon
                icon={faCar}
                className="text-xl sm:text-2xl md:text-3xl mr-3 flex-shrink-0"
              />
              <p className="text-sm sm:text-base md:text-xl font-medium">
                {t("consultationBanner.transport")}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center w-full md:w-auto md:mt-0 mt-8 md:ml-16">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-teal-900 text-base sm:text-lg md:text-xl font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-colors duration-150 w-full md:w-auto"
          >
            {t("consultationBanner.cta")}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="ml-2 sm:ml-3 text-lg"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBanner;
