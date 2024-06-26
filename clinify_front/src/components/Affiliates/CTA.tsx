"use client";

import React, { useEffect } from 'react';
import { FaThumbsUp, FaCode, FaDollarSign } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'next-i18next';

// Define the Card interface
interface Card {
  icon: string;
  title: string;
  description: string;
}

const iconMapping = {
  FaThumbsUp: <FaThumbsUp className="text-teal-500 text-3xl" />,
  FaCode: <FaCode className="text-teal-500 text-3xl" />,
  FaDollarSign: <FaDollarSign className="text-teal-500 text-3xl" />
};

const CTA: React.FC = () => {
  const { t } = useTranslation('business');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const cards: Card[] = t('joinProgram.cards', { returnObjects: true });

  return (
    <div className="relative bg-off-white py-16 px-8">
      <div className="absolute top-0 left-0 w-full h-40 bg-wave-top bg-no-repeat bg-top"></div>
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-5xl lg:text-6xl font-serif font-bold mb-6 text-teal-800 drop-shadow-lg">
          {t('joinProgram.title')}
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl border-t-4 border-teal-500"
            data-aos="fade-up"
            data-aos-delay={`${200 * (index + 1)}`}
          >
            <div className="flex items-center mb-4">
              {iconMapping[card.icon as keyof typeof iconMapping]}
              <h3 className="ml-4 text-xl font-bold text-teal-800">{card.title}</h3>
            </div>
            <p className="text-gray-700">{card.description}</p>
          </div>
        ))}
      </div>
      <div className="container mx-auto text-center mt-12">
        <a href="/signup" className="inline-block bg-teal-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-teal-600 transition-colors duration-300 transform hover:scale-105">
          {t('joinProgram.ctaButton')}
        </a>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-wave-bottom bg-no-repeat bg-bottom"></div>
    </div>
  );
};

export default CTA;