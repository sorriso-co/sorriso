"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaTooth, FaChair, FaShieldAlt } from "react-icons/fa";
import { useTranslation } from "next-i18next";

const iconMapping = {
  FaTooth: <FaTooth className="text-teal-600 text-7xl mb-4" />,
  FaChair: <FaChair className="text-teal-600 text-7xl mb-4" />,
  FaShieldAlt: <FaShieldAlt className="text-teal-600 text-7xl mb-4" />
};

const FacilitiesInformation: React.FC = () => {
  const { t } = useTranslation('services');
  
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const features = t('facilities.features', { returnObjects: true }) as Array<{
    icon: keyof typeof iconMapping;
    title: string;
    description: string;
  }>;

  return (
    <section className="bg-teal-50 py-24 px-8 relative overflow-x-hidden">
      <div className="container mx-auto text-center mb-12" data-aos="fade-up">
        <h2 className="text-5xl font-serif font-bold text-teal-900 mb-6">
          {t('facilities.title')}
        </h2>
        <p className="text-2xl font-serif text-teal-700 mb-8">
          {t('facilities.description')}
        </p>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:w-1/2"
          data-aos="fade-up"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-full shadow-lg transform transition-transform hover:scale-105 flex flex-col items-center justify-center text-center"
            >
              {iconMapping[feature.icon]}
              <h3 className="text-2xl font-bold text-teal-600 mb-2">
                {feature.title}
              </h3>
              <p className="text-lg text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg width="100%" height="100%" className="absolute">
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%">
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
          <circle cx="30%" cy="20%" r="300" fill="url(#gradient2)" />
          <circle cx="70%" cy="80%" r="200" fill="url(#gradient2)" />
        </svg>
      </div>
    </section>
  );
};

export default FacilitiesInformation;
