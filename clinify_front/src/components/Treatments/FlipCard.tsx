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
  const { t } = useTranslation("services");
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`w-64 sm:w-72 md:w-80 h-80 sm:h-88 md:h-96 rounded-lg shadow-lg overflow-hidden transition-transform ${
        isFlipped ? "flipped" : ""
      } cursor-pointer`}
      onClick={handleFlip}
      style={{ perspective: "1000px" }} // Set perspective for 3D effect
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 ${
          isFlipped ? "transform rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }} // Preserve 3D transform style
      >
        {/* Front Side */}
        <div
          className={`absolute w-full h-full backface-hidden bg-gradient-to-b from-white via-teal-100 to-teal-500 flex flex-col`}
          style={{
            backfaceVisibility: "hidden",
            display: isFlipped ? "none" : "flex",
          }}
        >
          <div className="relative w-full h-2/3">
            <Image
              src={procedure.image}
              alt={procedure.title}
              fill
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 flex-grow flex flex-col justify-between">
            <h3 className="text-lg sm:text-xl font-serif font-bold text-teal-900 mb-2">
              {procedure.title}
            </h3>
            <p className="text-sm sm:text-md font-serif text-teal-900 mb-4">
              {procedure.shortDescription}
            </p>
          </div>
        </div>

        {/* Back Side */}
        <div
          className={`absolute w-full h-full bg-teal-400 p-4 sm:p-6 flex-col justify-between`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            display: isFlipped ? "flex" : "none",
          }}
        >
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white font-serif mb-4">
              {t("flipCard.moreInfo")}
            </h3>
            <p className="text-sm sm:text-md font-serif text-white mb-2">
              <strong>{t("flipCard.necessity")}:</strong> {procedure.necessity}
            </p>
            <p className="text-sm sm:text-md font-serif text-white mb-2">
              <strong>{t("flipCard.candidate")}:</strong> {procedure.candidate}
            </p>
            <p className="text-sm sm:text-md font-serif text-white mb-4">
              <strong>{t("flipCard.duration")}:</strong> {procedure.duration}
            </p>
          </div>
          <button
            className="bg-teal-600 text-white font-serif font-bold py-1 px-3 sm:py-2 sm:px-4 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              handleFlip();
            }}
          >
            {t("flipCard.back")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
