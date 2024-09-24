"use client";
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import Image from "next/image";
import "aos/dist/aos.css";
import {
  FaMicroscope,
  FaUserMd,
  FaHeartbeat,
  FaStethoscope,
} from "react-icons/fa";
import { useTranslation } from "next-i18next";

// Icon mapping for the feature list
const iconMapping = {
  FaMicroscope: (
    <FaMicroscope className="text-teal-900 mr-4 text-3xl lg:text-4xl" />
  ),
  FaUserMd: (
    <FaUserMd className="text-teal-900 mr-4 text-3xl lg:text-4xl" />
  ),
  FaHeartbeat: (
    <FaHeartbeat className="text-teal-900 mr-4 text-3xl lg:text-4xl" />
  ),
  FaStethoscope: (
    <FaStethoscope className="text-teal-900 mr-4 text-3xl lg:text-4xl" />
  ),
};

interface Feature {
  icon: keyof typeof iconMapping;
  text: string;
}

const ExpertiseOverview: React.FC = () => {
  const { t } = useTranslation("services");

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  const features: Feature[] = t("expertise.features", { returnObjects: true });

  return (
    <section className="relative bg-white py-24 px-8 lg:px-16 xl:px-24 2xl:px-32 overflow-hidden shadow-xl rounded-lg">
      {/* Decorative Circles for Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg width="100%" height="100%" className="absolute">
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="100%" stopColor="rgba(0,128,128,0.2)" />
            </linearGradient>
          </defs>
          <circle cx="30%" cy="20%" r="300" fill="url(#gradient2)" />
          <circle cx="70%" cy="80%" r="200" fill="url(#gradient2)" />
        </svg>
      </div>

      {/* Section Content */}
      <div className="container mx-auto text-center mb-16" data-aos="fade-up">
        <h2 className="text-5xl sm:text-6xl font-serif font-bold text-teal-900 mb-8 leading-tight">
          {t("expertise.title", { defaultValue: "Our Expertise" })}
        </h2>
        <p className="text-lg sm:text-2xl font-serif text-teal-700 max-w-4xl mx-auto">
          {t("expertise.description", {
            defaultValue: "World-class medical and dental services with an expert team.",
          })}
        </p>
      </div>

      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Feature List Section */}
        <div className="lg:w-1/2 w-full mb-12 lg:mb-0" data-aos="fade-right">
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-teal-900 mb-6">
            {t("expertise.sectionTitle", { defaultValue: "Why Choose Us" })}
          </h3>
          <p className="text-base sm:text-lg font-serif text-teal-700 mb-6 max-w-lg leading-relaxed">
            {t("expertise.sectionDescription", {
              defaultValue:
                "Discover the benefits of choosing Sorriso for your dental care.",
            })}
          </p>
          <ul className="space-y-6 text-left">
            {features.map((feature, index) => (
              <li className="flex items-center mb-4" key={index}>
                {iconMapping[feature.icon]}{" "}
                <span className="text-lg sm:text-xl text-teal-700">
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Slider Section */}
        <div className="lg:w-1/2 w-full" data-aos="fade-left">
          <Slider {...sliderSettings}>
            {[
              "ars_zgrada.webp",
              "waiting.webp",
              "clinic.webp",
              "ars_technology.webp",
              "chair.webp",
            ].map((image, idx) => (
              <div key={idx} className="w-full h-64 sm:h-80 lg:h-96">
                <Image
                  src={`/images/about_us_slide/${image}`}
                  alt={`Facility ${idx}`}
                  layout="responsive"
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
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
