"use client";
import React from "react";
import PriceCard from "../../components/Pricing/PriceCard";
// import { useTranslation } from "react-i18next";

// Define the price card data
const priceCardData = [
  {
    title: "Ceramic Crowns",
    description: "High-quality ceramic crowns for a perfect smile.",
    prices: [
      { country: "Montenegro", price: "€250", flag: "/images/flags/mne.webp" },

      { country: "Turkey", price: "€400", flag: "/images/flags/turk.png" },
      {
        country: "Croatia",
        price: "€450",
        flag: "/images/flags/cro.png",
      },
      { country: "Italy", price: "€600", flag: "/images/flags/ita.webp" },
      { country: "Germany", price: "€800", flag: "/images/flags/ger.webp" },
      {
        country: "United Kingdom",
        price: "€900",
        flag: "/images/flags/uk.webp",
      },
      {
        country: "United States",
        price: "$1200",
        flag: "/images/flags/us.webp",
      },
    ],
    buttonText: "Contact Us",
  },
  {
    title: "Zirconium Crowns",
    description: "Top-quality zirconium crowns at an affordable price.",
    prices: [
      { country: "Montenegro", price: "€350", flag: "/images/flags/mne.webp" },

      { country: "Turkey", price: "€450", flag: "/images/flags/turk.png" },
      {
        country: "Croatia",
        price: "€500",
        flag: "/images/flags/cro.png",
      },
      { country: "Italy", price: "€700", flag: "/images/flags/ita.webp" },
      { country: "Germany", price: "€900", flag: "/images/flags/ger.webp" },
      {
        country: "United Kingdom",
        price: "€1000",
        flag: "/images/flags/uk.webp",
      },
      {
        country: "United States",
        price: "$1500",
        flag: "/images/flags/us.webp",
      },
    ],
    buttonText: "Schedule Appointment",
  },
  {
    title: "Dental Implants",
    description: "Get affordable and high-quality dental implants.",
    prices: [
      { country: "Montenegro", price: "€600", flag: "/images/flags/mne.webp" },

      { country: "Turkey", price: "€800", flag: "/images/flags/turk.png" },
      {
        country: "Croatia",
        price: "€900",
        flag: "/images/flags/cro.png",
      },
      { country: "Italy", price: "€1200", flag: "/images/flags/ita.webp" },
      { country: "Germany", price: "€2000", flag: "/images/flags/ger.webp" },
      {
        country: "United Kingdom",
        price: "€2500",
        flag: "/images/flags/uk.webp",
      },
      {
        country: "United States",
        price: "$4000",
        flag: "/images/flags/us.webp",
      },
    ],
    buttonText: "Book Now",
  },

  {
    title: "Hollywood Smile",
    description: "Achieve the perfect, celebrity-like smile with veneers.",
    prices: [
      { country: "Montenegro", price: "€3500", flag: "/images/flags/mne.webp" },

      { country: "Turkey", price: "€4500", flag: "/images/flags/turk.png" },
      {
        country: "Croatia",
        price: "€5000",
        flag: "/images/flags/cro.png",
      },
      { country: "Italy", price: "€6000", flag: "/images/flags/ita.webp" },
      { country: "Germany", price: "€8000", flag: "/images/flags/ger.webp" },
      {
        country: "United Kingdom",
        price: "€7000",
        flag: "/images/flags/uk.webp",
      },
      {
        country: "United States",
        price: "$15000",
        flag: "/images/flags/us.webp",
      },
    ],
    buttonText: "Contact Us",
  },
  {
    title: "All-on-4",
    description: "Full-arch restoration with just 4 implants.",
    prices: [
      { country: "Montenegro", price: "€6000", flag: "/images/flags/mne.webp" },

      { country: "Turkey", price: "€7500", flag: "/images/flags/turk.png" },
      {
        country: "Croatia",
        price: "€9000",
        flag: "/images/flags/cro.png",
      },
      { country: "Italy", price: "€10000", flag: "/images/flags/ita.webp" },
      { country: "Germany", price: "€12000", flag: "/images/flags/ger.webp" },
      {
        country: "United Kingdom",
        price: "€14000",
        flag: "/images/flags/uk.webp",
      },
      {
        country: "United States",
        price: "$20000",
        flag: "/images/flags/us.webp",
      },
    ],
    buttonText: "Book Now",
  },
  {
    title: "All-on-6",
    description: "Full-arch restoration with 6 implants for maximum stability.",
    prices: [
      { country: "Montenegro", price: "€8000", flag: "/images/flags/mne.webp" },

      { country: "Turkey", price: "€10000", flag: "/images/flags/turk.png" },
      {
        country: "Croatia",
        price: "€11000",
        flag: "/images/flags/cro.png",
      },
      { country: "Italy", price: "€11000", flag: "/images/flags/ita.webp" },
      { country: "Germany", price: "€13000", flag: "/images/flags/ger.webp" },
      {
        country: "United Kingdom",
        price: "€18000",
        flag: "/images/flags/uk.webp",
      },
      {
        country: "United States",
        price: "$22000",
        flag: "/images/flags/us.webp",
      },
    ],
    buttonText: "Schedule Appointment",
  },
];

const PricingSection: React.FC = () => {
  // const { t } = useTranslation("pricing");

  return (
    <section className="bg-gray-50 p-6 sm:p-8 lg:p-16 overflow-hidden rounded-lg">
      <div className="container mx-auto py-5 text-center">
        {/* <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold mb-4 text-teal-900 leading-tight">
          {t("pricingSection.title", { defaultValue: "Our Pricing Plans" })}
        </h1> */}
        {/* <p className="text-md sm:text-lg lg:text-xl text-teal-700 mb-5 max-w-3xl mx-auto">
          {t("pricingSection.description", {
            defaultValue:
              "Transparent pricing for world-class dental services.",
          })}
        </p> */}
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {priceCardData.map((card, index) => (
            <React.Fragment key={index}>
              <div className="flex justify-center">
                <PriceCard
                  title={card.title}
                  description={card.description}
                  prices={card.prices}
                  buttonText={card.buttonText}
                  className="rounded-lg shadow-lg bg-white p-4 sm:p-6 lg:p-8"
                />
              </div>
              {/*header for pricing per jaw*/}
              {index === 2 && (
                <div className="w-full text-center my-2 col-span-full">
                  <p className="text-teal-600 font-medium font-serif">
                    Below prices are calculated per jaw.
                  </p>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
