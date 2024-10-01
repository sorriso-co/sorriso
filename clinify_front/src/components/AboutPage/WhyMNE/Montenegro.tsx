"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

// Define the interface for card data
interface CardData {
  src: string;
  alt: string;
  caption: string;
  title: string;
  text: {
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
}

// Array of card data
const cardData: CardData[] = [
  {
    src: "/images/mne/seaside.webp",
    alt: "Sveti Stefan (Saint Stephen)",
    caption: "Where to Stay",
    title: "Sveti Stefan",
    text: {
      paragraph1: "is a luxury resort and a symbol of Montenegro's coast.",
      paragraph2: "Enjoy breathtaking views and world-class amenities.",
      paragraph3: "An ideal place to relax and unwind during your visit.",
    },
  },
  {
    src: "/images/mne/ljepota.webp",
    alt: "Our Lady of the Rocks",
    caption: "What to See",
    title: "Our Lady of the Rocks",
    text: {
      paragraph1: "is a man-made islet off the coast of Perast.",
      paragraph2: "Visit the historic church and museum filled with art.",
      paragraph3: "A must-see destination for history enthusiasts.",
    },
  },
  {
    src: "/images/mne/zima.webp",
    alt: "Durmitor National Park",
    caption: "Outdoor Adventures",
    title: "Durmitor",
    text: {
      paragraph1: "offers stunning mountains, lakes, and canyons.",
      paragraph2: "Perfect for hiking, skiing, and exploring nature.",
      paragraph3: "Experience the wild beauty of Montenegro.",
    },
  },
  {
    src: "/images/mne/hrana.webp",
    alt: "Traditional Montenegrin Cuisine",
    caption: "Dine & Wine",
    title: "Montenegrin Cuisine",
    text: {
      paragraph1: "Savor local dishes like Njeguški pršut and cheeses.",
      paragraph2: "Pair with regional wines for a delightful experience.",
      paragraph3: "Experience the rich flavors of Montenegro.",
    },
  },
];

interface ImageCardProps {
  src: string;
  alt: string;
  caption: string;
  title: string;
  text: {
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
}

const ImageCard: React.FC<ImageCardProps> = ({
  src,
  alt,
  caption,
  title,
  text,
}) => {
  const [flipped, setFlipped] = useState(false);
  const flipTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    if (flipped) {
      // Flip back immediately and clear timer
      setFlipped(false);
      if (flipTimerRef.current) {
        clearTimeout(flipTimerRef.current);
        flipTimerRef.current = null;
      }
    } else {
      // Flip to back side and start timer
      setFlipped(true);
      flipTimerRef.current = setTimeout(() => {
        setFlipped(false);
        flipTimerRef.current = null;
      }, 10000); // 10 seconds
    }
  };

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (flipTimerRef.current) {
        clearTimeout(flipTimerRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative w-full sm:w-72 md:w-80 lg:w-96 h-80 sm:h-96 cursor-pointer perspective group"
      onClick={handleClick}
    >
      <div
        className={`relative w-full h-full duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden">
          <Image
            src={src}
            alt={alt}
            width={600}
            height={400}
            loading="eager"
            className="w-full h-full object-cover rounded-xl shadow-lg group-hover:brightness-90 transition duration-500"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 rounded-b-xl">
            <h3 className="text-base sm:text-lg font-bold text-white font-serif">
              {caption}
            </h3>
          </div>
        </div>
        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white text-teal-900 p-6 rounded-xl overflow-y-auto flex flex-col">
          <h3 className="text-lg sm:text-xl font-bold mb-2 font-serif">
            {title}
          </h3>
          <div className="flex-grow space-y-2 text-sm sm:text-base font-sans leading-relaxed">
            <p>{text.paragraph1}</p>
            <p>{text.paragraph2}</p>
            <p>{text.paragraph3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceMontenegro: React.FC = () => {
  const { t } = useTranslation("about");

  return (
    <section className="bg-gradient-to-r from-teal-700 to-teal-900 text-center py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 font-serif">
          {t("experienceMontenegro.heading", {
            defaultValue: "Experience Montenegro",
          })}
        </h2>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-white mb-8 sm:mb-12 font-serif">
          {t("experienceMontenegro.subheading", {
            defaultValue: "Discover the Beauty and Culture",
          })}
        </h3>

        {/* Image Cards */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {cardData.map((card, index) => (
            <ImageCard
              key={index}
              src={card.src}
              alt={card.alt}
              caption={t(
                `experienceMontenegro.cards.card${index + 1}.caption`,
                { defaultValue: card.caption }
              )}
              title={t(
                `experienceMontenegro.cards.card${index + 1}.title`,
                { defaultValue: card.title }
              )}
              text={{
                paragraph1: t(
                  `experienceMontenegro.cards.card${index + 1}.text.paragraph1`,
                  { defaultValue: card.text.paragraph1 }
                ),
                paragraph2: t(
                  `experienceMontenegro.cards.card${index + 1}.text.paragraph2`,
                  { defaultValue: card.text.paragraph2 }
                ),
                paragraph3: t(
                  `experienceMontenegro.cards.card${index + 1}.text.paragraph3`,
                  { defaultValue: card.text.paragraph3 }
                ),
              }}
            />
          ))}
        </div>

        {/* Call to Action */}
        <Link href="/contact"
          className="inline-block mt-8 sm:mt-12 bg-teal-400 text-white py-3 px-6 sm:px-8 rounded-md hover:bg-teal-600 transition font-semibold text-base sm:text-lg">
            {t("experienceMontenegro.ctaButton", {
              defaultValue: "Plan Your Visit",
            })}
 
        </Link>
      </div>
    </section>
  );
};

export default ExperienceMontenegro;
