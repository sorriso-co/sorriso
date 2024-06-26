"use client";
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import Image from "next/legacy/image";
import "aos/dist/aos.css";
import { FaMicroscope, FaUserMd, FaHeartbeat, FaStethoscope } from "react-icons/fa";
import { useTranslation } from "next-i18next";

const iconMapping = {
  FaMicroscope: <FaMicroscope className="text-teal-700 mr-2 sm:mr-4 text-2xl sm:text-4xl" />,
  FaUserMd: <FaUserMd className="text-teal-700 mr-2 sm:mr-4 text-2xl sm:text-4xl" />,
  FaHeartbeat: <FaHeartbeat className="text-teal-700 mr-2 sm:mr-4 text-2xl sm:text-4xl" />,
  FaStethoscope: <FaStethoscope className="text-teal-700 mr-2 sm:mr-4 text-2xl sm:text-4xl" />
};

interface Feature {
  icon: keyof typeof iconMapping;
  text: string;
}

const ExpertiseOverview: React.FC = () => {
  const { t } = useTranslation('services');

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const features: Feature[] = t('expertise.features', { returnObjects: true });

  return (
    <section className="bg-white py-16 px-4 sm:px-8 relative overflow-x-hidden">
      <div className="container mx-auto text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl sm:text-5xl font-serif font-bold text-teal-900 mb-6">
          {t('expertise.title')}
        </h2>
        <p className="text-lg sm:text-2xl font-serif text-teal-700 mb-8">
          {t('expertise.description')}
        </p>
      </div>
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0" data-aos="fade-right">
          <h3 className="text-2xl sm:text-4xl font-serif font-bold text-teal-700 mb-4">
            {t('expertise.sectionTitle')}
          </h3>
          <p className="text-base sm:text-lg font-serif text-teal-700 mb-4">
            {t('expertise.sectionDescription')}
          </p>
          <ul className="text-base sm:text-lg font-serif text-teal-700 list-disc list-inside space-y-4 sm:space-y-6">
            {features.map((feature, index) => (
              <li className="flex items-center" key={index}>
                {iconMapping[feature.icon]} {feature.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0" data-aos="fade-left">
          <Slider {...sliderSettings}>
            <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96">
              <Image
                src="/images/Team/staff/team.jpg"
                alt="Facility 0"
                layout="responsive"
                width={1200}
                height={800}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96">
              <Image
                src="/images/about_us_slide/waiting.jpeg"
                alt="Facility 1"
                layout="responsive"
                width={1200}
                height={800}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96">
              <Image
                src="/images/about_us_slide/clinic.png"
                alt="Facility 2"
                layout="responsive"
                width={1200}
                height={800}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96">
              <Image
                src="/images/services/dr_i_pacijent.png"
                alt="Facility 3"
                layout="responsive"
                width={1200}
                height={800}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96">
              <Image
                src="/images/about_us_slide/chair.png"
                alt="Facility 4"
                layout="responsive"
                width={1200}
                height={800}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </Slider>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg width="100%" height="100%" className="absolute">
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
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
          <circle cx="30%" cy="20%" r="300" fill="url(#gradient2)" />
          <circle cx="70%" cy="80%" r="200" fill="url(#gradient2)" />
        </svg>
      </div>
    </section>
  );
};

export default ExpertiseOverview;