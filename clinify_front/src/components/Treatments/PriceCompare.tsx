"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "next-i18next";
import {
  FaMoneyBillWave,
  FaArrowDown,
  FaGlobe,
  FaTree,
  FaHiking,
  FaBalanceScale,
} from "react-icons/fa";

interface Card {
  icon: string;
  title: string;
  description: string;
}

interface IconMapping {
  [key: string]: React.JSX.Element;
}

const iconMapping: IconMapping = {
  FaMoneyBillWave: <FaMoneyBillWave className="text-teal-600 text-7xl mb-4" />,
  FaArrowDown: <FaArrowDown className="text-teal-600 text-7xl mb-4" />,
  FaGlobe: <FaGlobe className="text-teal-600 text-7xl mb-4" />,
  FaTree: <FaTree className="text-teal-600 text-7xl mb-4" />,
  FaHiking: <FaHiking className="text-teal-600 text-7xl mb-4" />,
  FaBalanceScale: <FaBalanceScale className="text-teal-600 text-7xl mb-4" />,
};

const PriceComparison: React.FC = () => {
  const { t } = useTranslation('services');
  const cards: Card[] = t('priceComparison.cards', { returnObjects: true });

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="bg-white py-24 px-8 relative overflow-x-hidden">
      <div className="container mx-auto text-center mb-12" data-aos="fade-up">
        <h2 className="text-5xl font-serif font-bold text-teal-900 mb-6">
          {t('priceComparison.title')}
        </h2>
        <p className="text-2xl font-serif text-teal-700 mb-8">
          {t('priceComparison.description')}
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-teal-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 text-center"
            data-aos="fade-up"
            data-aos-delay={`${100 * (index + 1)}`}
          >
            {iconMapping[card.icon]}
            <h3 className="text-2xl font-bold text-teal-600 mb-2">
              {card.title}
            </h3>
            <p className="text-lg text-gray-700">
              {card.description}
            </p>
          </div>
        ))}
      </div>
      <div className="container mx-auto text-center mt-16" data-aos="fade-up">
        <h3 className="text-3xl font-serif font-bold text-teal-900 mb-6">
          {t('priceComparison.subTitle')}
        </h3>
        <p className="text-xl font-serif text-teal-700 mb-8">
          {t('priceComparison.subDescription')}
        </p>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg width="100%" height="100%" className="absolute">
          <defs>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%">
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
          <circle cx="30%" cy="20%" r="300" fill="url(#gradient3)" />
          <circle cx="70%" cy="80%" r="200" fill="url(#gradient3)" />
        </svg>
      </div>
    </section>
  );
};

export default PriceComparison;