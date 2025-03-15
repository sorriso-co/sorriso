"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import {
  FaMicroscope,
  FaUserMd,
  FaHeartbeat,
  FaStethoscope,
} from "react-icons/fa";
import { useTranslation } from "next-i18next";

// Icon mapping for the feature list
const iconMapping = {
  FaMicroscope: <FaMicroscope className="text-teal-900 mr-4 text-3xl" />,
  FaUserMd: <FaUserMd className="text-teal-900 mr-4 text-3xl" />,
  FaHeartbeat: <FaHeartbeat className="text-teal-900 mr-4 text-3xl" />,
  FaStethoscope: <FaStethoscope className="text-teal-900 mr-4 text-3xl" />,
};

interface Feature {
  icon: keyof typeof iconMapping;
  text: string;
}

const ExpertiseOverview: React.FC = () => {
  const { t } = useTranslation("services");

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  const features: Feature[] = t("expertise.features", {
    returnObjects: true,
  }) as Feature[];

  return (
    <section className="relative bg-transparent py-4 px-8 lg:px-16 overflow-hidden">
      {/* Section Content */}
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-serif font-bold text-teal-900 mb-6">
          {t("expertise.title", { defaultValue: "Our Expertise" })}
        </h2>
        <p className="text-lg sm:text-xl text-teal-700 max-w-4xl mx-auto">
          {t("expertise.description", {
            defaultValue:
              "World-class medical and dental services with an expert team.",
          })}
        </p>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Feature List Section */}
        <div className="lg:w-1/2 w-full mb-12 lg:mb-0">
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-teal-900 mb-4">
            {t("expertise.sectionTitle", { defaultValue: "Why Choose Us" })}
          </h3>
          <p className="text-base sm:text-lg text-teal-700 mb-4">
            {t("expertise.sectionDescription", {
              defaultValue:
                "Discover the benefits of choosing Sorriso for your dental care.",
            })}
          </p>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li className="flex items-center" key={index}>
                {iconMapping[feature.icon]}
                <span className="text-base sm:text-lg text-teal-700">
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Slider Section */}
        <div className="lg:w-1/2 w-full">
          <Slider {...sliderSettings}>
            {[
              "waiting.webp",
              "clinic.webp",
              "ars_technology.webp",

              "chair.webp",
              "ars_zgrada.webp",
            ].map((image, idx) => (
              <div key={idx} className="w-full h-64 sm:h-80 lg:h-96">
                <Image
                  src={`/images/about_us_slide/${image}`}
                  alt={`Facility ${idx}`}
                  width={1200}
                  height={800}
                  priority={idx === 0} // Load the first image eagerly for LCP
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseOverview;
