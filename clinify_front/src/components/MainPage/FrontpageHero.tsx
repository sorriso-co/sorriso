import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";


const FrontHero: React.FC = () => {
  const { t } = useTranslation("homepage");

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-r from-teal-100 to-teal-200 overflow-hidden py-16 sm:py-24">
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between px-4 sm:px-8 lg:px-16">
        
        {/* Left Text Section - Adjusted for Mobile */}
        <div
          className="lg:w-1/2 text-center lg:text-left space-y-6 lg:space-y-8"
          data-aos="fade-right"
        >
          <h1 className="font-serif text-teal-700 font-extrabold text-10xl lg:text-8xl tracking-tight leading-tight mb-4 lg:mb-8">
            {t("frontHero.title", { defaultValue: "Your Next Dental Trip" })}
          </h1>
          
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-6xl text-teal-800 mt-2 sm:mt-4 mb-4 lg:mb-8">
            {t("frontHero.subtitle", {
              defaultValue: "Free Consultations, World-Class Treatment, Stunning Results",
            })}
          </h2>

          {/* CTA Buttons */}
          <div className="mt-6 sm:mt-10 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex justify-center lg:justify-start">
            <Link
              href="/contact"
              className="inline-block bg-teal-900 text-white font-serif font-bold py-4 px-8 rounded-full hover:bg-teal-700 transition-all duration-300 transform hover:scale-105"
            >
              {t("frontHero.visitButton", {
                defaultValue: "Contact us",
              })}
            </Link>
            <Link
              href="/services"
              className="inline-block bg-white text-teal-900 font-bold py-4 px-8 rounded-full hover:bg-teal-100 transition-all duration-300 transform hover:scale-105"
            >
              {t("frontHero.scheduleButton", {
                defaultValue: "See our services",
              })}
            </Link>
          </div>
        </div>

        {/* Right Image Section - Only Visible on Larger Screens */}
        <div className="hidden lg:block lg:w-1/2 flex justify-center lg:justify-end" data-aos="fade-left">
          <div className="relative w-full h-auto sm:w-3/4 lg:w-auto">
            <Image
              src="/images/Team/staff/milija.webp"
              alt="Lead Doctor at Sorriso smiling"
              layout="intrinsic"
              width={900}
              height={1100}
              quality={100}
              priority
              className="w-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Decorative Background for better contrast */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-r from-teal-400 via-teal-600 to-teal-700 opacity-30"></div>
      </div>
    </section>
  );
};

export default FrontHero;
