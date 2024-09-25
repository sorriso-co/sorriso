"use client";
import React, { useEffect } from "react";
import PriceCard from "../../components/Pricing/PriceCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

// Define the price card data
const priceCardData = [
  {
    title: "Dental Implants",
    description: "Get affordable and high-quality dental implants.",
    prices: [
      { country: "Montenegro", price: "€800", flag: "/images/flags/mne.png" },
      { country: "Italy", price: "€1200", flag: "/images/flags/ita.png" },
      { country: "Austria", price: "€1400", flag: "/images/flags/aus.png" },
      { country: "Australia", price: "$3000", flag: "/images/flags/australia.webp" },
      { country: "Germany", price: "€2000", flag: "/images/flags/ger.png" },
      { country: "Switzerland", price: "€2500", flag: "/images/flags/sw.png" },
      { country: "United States", price: "$4000", flag: "/images/flags/us.png" },
    ],
    buttonText: "Book Now"
  },
  {
    title: "Zirconium Crowns",
    description: "Top-quality zirconium crowns at an affordable price.",
    prices: [
      { country: "Montenegro", price: "€350", flag: "/images/flags/mne.png" },
      { country: "Italy", price: "€600", flag: "/images/flags/ita.png" },
      { country: "Austria", price: "€700", flag: "/images/flags/aus.png" },
      { country: "Australia", price: "$1000", flag: "/images/flags/australia.webp" },
      { country: "Germany", price: "€900", flag: "/images/flags/ger.png" },
      { country: "Switzerland", price: "€1100", flag: "/images/flags/sw.png" },
      { country: "United States", price: "$1500", flag: "/images/flags/us.png" },
    ],
    buttonText: "Schedule Appointment"
  },
  {
    title: "Ceramic Crowns",
    description: "High-quality ceramic crowns for a perfect smile.",
    prices: [
      { country: "Montenegro", price: "€300", flag: "/images/flags/mne.png" },
      { country: "Italy", price: "€500", flag: "/images/flags/ita.png" },
      { country: "Austria", price: "€600", flag: "/images/flags/aus.png" },
      { country: "Australia", price: "$900", flag: "/images/flags/australia.webp" },
      { country: "Germany", price: "€800", flag: "/images/flags/ger.png" },
      { country: "Switzerland", price: "€1000", flag: "/images/flags/sw.png" },
      { country: "United States", price: "$1200", flag: "/images/flags/us.png" },
    ],
    buttonText: "Contact Us"
  },
  {
    title: "All-on-4",
    description: "Full-arch restoration with just 4 implants.",
    prices: [
      { country: "Montenegro", price: "€5000", flag: "/images/flags/mne.png" },
      { country: "Italy", price: "€9000", flag: "/images/flags/ita.png" },
      { country: "Austria", price: "€9500", flag: "/images/flags/aus.png" },
      { country: "Australia", price: "$15000", flag: "/images/flags/australia.webp" },
      { country: "Germany", price: "€12000", flag: "/images/flags/ger.png" },
      { country: "Switzerland", price: "€13000", flag: "/images/flags/sw.png" },
      { country: "United States", price: "$20000", flag: "/images/flags/us.png" },
    ],
    buttonText: "Book Now"
  },
  {
    title: "All-on-6",
    description: "Full-arch restoration with 6 implants for maximum stability.",
    prices: [
      { country: "Montenegro", price: "€6000", flag: "/images/flags/mne.png" },
      { country: "Italy", price: "€10000", flag: "/images/flags/ita.png" },
      { country: "Austria", price: "€10500", flag: "/images/flags/aus.png" },
      { country: "Australia", price: "$16000", flag: "/images/flags/australia.webp" },
      { country: "Germany", price: "€13000", flag: "/images/flags/ger.png" },
      { country: "Switzerland", price: "€14000", flag: "/images/flags/sw.png" },
      { country: "United States", price: "$22000", flag: "/images/flags/us.png" },
    ],
    buttonText: "Schedule Appointment"
  },
  {
    title: "Hollywood Smile",
    description: "Achieve the perfect, celebrity-like smile with veneers.",
    prices: [
      { country: "Montenegro", price: "€3000", flag: "/images/flags/mne.png" },
      { country: "Italy", price: "€6000", flag: "/images/flags/ita.png" },
      { country: "Austria", price: "€7000", flag: "/images/flags/aus.png" },
      { country: "Australia", price: "$12000", flag: "/images/flags/australia.webp" },
      { country: "Germany", price: "€8000", flag: "/images/flags/ger.png" },
      { country: "Switzerland", price: "€10000", flag: "/images/flags/sw.png" },
      { country: "United States", price: "$15000", flag: "/images/flags/us.png" },
    ],
    buttonText: "Contact Us"
  },
];

const PricingSection: React.FC = () => {
  const { t } = useTranslation("pricing");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-gray-50 p-6 sm:p-8 lg:p-16 overflow-hidden rounded-lg shadow-xl">
      <div className="container mx-auto py-12 text-center">
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold mb-8 text-teal-900 leading-tight"
          data-aos="fade-up"
        >
          {t("pricingSection.title", { defaultValue: "Our Pricing Plans" })}
        </h1>
        <p
          className="text-md sm:text-lg lg:text-xl text-teal-700 mb-10 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {t("pricingSection.description", {
            defaultValue: "Transparent pricing for world-class dental services.",
          })}
        </p>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {priceCardData.map((card, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
              className="flex justify-center"
            >
              <PriceCard
                title={card.title}
                description={card.description}
                prices={card.prices}
                buttonText={card.buttonText}
                className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 bg-white p-4 sm:p-6 lg:p-8"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;