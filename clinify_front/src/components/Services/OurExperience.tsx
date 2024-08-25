"use client";
import React, { useEffect } from "react";
import BeforeAfter from "./BeforeAfter";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const ExperienceSection: React.FC = () => {
  const { t } = useTranslation("services");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-teal-50 py-16 px-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 overflow-x-hidden items-center">
        <div
          className="text-center lg:text-left lg:pr-8 font-serif"
          data-aos="fade-up"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 text-teal-800">
            {t("experienceSection.title")}
          </h2>
          <p className="text-4xl lg:text-5xl font-extrabold mb-4 text-teal-800">
            {t("experienceSection.experience")}
          </p>
          <p className="text-lg lg:text-xl text-teal-700 mb-6">
            {t("experienceSection.description")}
          </p>
          <p className="text-4xl lg:text-5xl font-extrabold text-teal-800 mb-2">
            {t("experienceSection.satisfiedPatients")}
          </p>
          <p className="text-lg lg:text-xl text-teal-700 mb-6">
            {t("experienceSection.satisfiedPatientsText")}
          </p>
          <Link href="../gallery">
            <span className="bg-teal-600 text-white py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors inline-block">
              {t("experienceSection.cta")}
            </span>
          </Link>
        </div>
        <div
          className="flex justify-center lg:justify-end"
          data-aos="fade-left"
        >
          <BeforeAfter
            beforeImage="/images/services/before.png"
            afterImage="/images/services/after.png"
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
