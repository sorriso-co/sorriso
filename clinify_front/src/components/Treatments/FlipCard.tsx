"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

interface Procedure {
  image: string;
  title: string;
  shortDescription?: string;
  necessity?: string;
  candidate?: string;
  duration?: string;
}

interface FlipCardProps {
  procedure: Procedure;
}

const FlipCard: React.FC<FlipCardProps> = ({ procedure }) => {
  const { t } = useTranslation('services');
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`flip-card w-72 sm:w-80 md:w-96 h-96 sm:h-[26rem] md:h-[28rem] rounded-lg shadow-lg overflow-hidden ${
        isFlipped ? "flipped" : ""
      } transition-transform transform hover:scale-105 cursor-pointer`}
      onClick={handleFlip}
    >
      <div className="flip-card-inner relative w-full h-full">
        {/* Front Side */}
        <div
          className={`flip-card-front absolute w-full h-full ${
            isFlipped ? "hidden" : "block"
          } bg-gradient-to-b from-white via-teal-100 to-teal-500`}
        >
          <div className="relative w-full h-2/3">
            <Image
              src={procedure.image}
              alt={procedure.title}
              width={400}
              height={350}
              priority
              className="w-full h-full object-cover"
            />
          </div>
          <br />
          <div className="p-4 h-1/3 flex flex-col justify-between">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-teal-900 mb-2">
              {procedure.title}
            </h3>
            <p className="text-sm sm:text-lg font-serif text-teal-900 mb-4">
              {procedure.shortDescription}
            </p>
          </div>
        </div>

        {/* Back Side */}
        <div
          className={`flip-card-back absolute w-full h-full ${
            isFlipped ? "block" : "hidden"
          } bg-teal-400 p-4 sm:p-6 overflow-hidden`}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white font-serif mb-4">
            {t('flipCard.moreInfo')}
          </h3>
          <p className="text-base sm:text-xl font-serif text-white mb-2">
            <strong>{t('flipCard.necessity')}:</strong> {procedure.necessity}
          </p>
          <p className="text-base sm:text-xl font-serif text-white mb-2">
            <strong>{t('flipCard.candidate')}:</strong> {procedure.candidate}
          </p>
          <p className="text-base sm:text-xl font-serif text-white mb-4">
            <strong>{t('flipCard.duration')}:</strong> {procedure.duration}
          </p>
          <button
            className="bg-teal-600 text-white font-serif font-bold py-1 px-3 sm:py-2 sm:px-4 rounded-full hover:bg-teal-700"
            onClick={(e) => {
              e.stopPropagation();
              handleFlip();
            }}
          >
            {t('flipCard.back')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;