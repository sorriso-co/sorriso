/* eslint-disable react/jsx-key */
"use client";
import React, { useEffect } from "react";
import { FaClock, FaTasks, FaHotel, FaCarSide } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useTranslation } from "next-i18next";

// Define interfaces for statistics
interface Statistic {
  title: string;
  stat: string;
  description: string;
}

interface StatisticCardProps {
  icon: React.ReactNode;
  title: string;
  stat: string;
  description: string;
}

const StatisticCard: React.FC<StatisticCardProps> = ({
  icon,
  title,
  stat,
  description,
}) => (
  <div className="bg-gradient-to-br overflow-x-hidden from-white via-gray-100 to-gray-200 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
    {icon}
    <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-4 font-serif">
      {title}
    </h2>
    <p className="text-3xl md:text-4xl font-bold text-teal-900 mb-4">{stat}</p>
    <p className="text-base md:text-lg text-teal-900 font-serif">
      {description}
    </p>
  </div>
);

const DataSpeaks: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const { t } = useTranslation('business');

  const statistics: Statistic[] = [
    {
      title: t('dataSpeaks.statistics.statistic1.title'),
      stat: t('dataSpeaks.statistics.statistic1.stat'),
      description: t('dataSpeaks.statistics.statistic1.description'),
    },
    {
      title: t('dataSpeaks.statistics.statistic2.title'),
      stat: t('dataSpeaks.statistics.statistic2.stat'),
      description: t('dataSpeaks.statistics.statistic2.description'),
    },
    {
      title: t('dataSpeaks.statistics.statistic3.title'),
      stat: t('dataSpeaks.statistics.statistic3.stat'),
      description: t('dataSpeaks.statistics.statistic3.description'),
    },
    {
      title: t('dataSpeaks.statistics.statistic4.title'),
      stat: t('dataSpeaks.statistics.statistic4.stat'),
      description: t('dataSpeaks.statistics.statistic4.description'),
    },
  ];

  const icons = [
    <FaClock className="text-teal-600 text-6xl mb-4" />,
    <FaTasks className="text-teal-600 text-6xl mb-4" />,
    <FaHotel className="text-teal-600 text-6xl mb-4" />,
    <FaCarSide className="text-teal-600 text-6xl mb-4" />,
  ];

  return (
    <div className="bg-white py-16 px-4 overflow-x-hidden md:px-8 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-6 text-teal-900 leading-tight drop-shadow-lg">
            {t('dataSpeaks.title')}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-serif text-teal-900 leading-relaxed drop-shadow-lg">
            {t('dataSpeaks.description')}
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          data-aos="fade-up"
        >
          {statistics.map((stat, index) => (
            <StatisticCard
              key={index}
              icon={icons[index]}
              title={stat.title}
              stat={stat.stat}
              description={stat.description}
            />
          ))}
        </div>

        <div className="text-center mt-12" data-aos="fade-up">
          <Link href="/contact" passHref>
            <div className="bg-teal-500 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full hover:bg-teal-600 transition-transform transform hover:scale-110 inline-block text-lg md:text-xl lg:text-2xl shadow-lg cursor-pointer">
              {t('dataSpeaks.cta')}
            </div>
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "rgba(255,255,255,0)", stopOpacity: 0 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgba(0,128,128,0.2)", stopOpacity: 1 }}
              />
            </linearGradient>
            <pattern
              id="smallGrid"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 8 0 L 0 0 0 8"
                fill="none"
                stroke="rgba(0,128,128,0.2)"
                strokeWidth="0.5"
              />
            </pattern>
            <pattern
              id="grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <rect width="80" height="80" fill="url(#smallGrid)" />
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="rgba(0,128,128,0.2)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

export default DataSpeaks;