"use client";
import React, { useEffect } from "react";
import PackageCard from "./PackageCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "next-i18next";

interface Package {
  price: string;
  title: string;
  description: string;
  features: string[];
}

interface TranslationProps {
  title: string;
  description: string;
  packages: Package[];
  note: string;
}

const PackagesSection: React.FC = () => {
  const { t } = useTranslation("pricing");

  const data: TranslationProps = t("packagesSection", { returnObjects: true });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-white py-10 sm:py-16 overflow-x-hidden">
      <div className="container mx-auto text-center font-serif px-4">
        <h2
          className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 sm:mb-8 text-teal-700"
          data-aos="fade-up"
        >
          {data.title}
        </h2>
        <p
          className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 text-gray-800"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {data.description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {data.packages.map((pkg, index) => (
            <PackageCard
              key={index}
              price={pkg.price}
              title={pkg.title}
              description={pkg.description}
              features={pkg.features}
              data-aos="fade-up"
              data-aos-delay={`${200 + index * 100}`}
            />
          ))}
        </div>
      </div>
      <p
        className="text-center text-teal-800 text-sm sm:text-md mt-6 sm:mt-8 px-4"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {data.note}
      </p>
    </div>
  );
};

export default PackagesSection;
