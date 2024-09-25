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
    <section className="relative w-full bg-gradient-to-b from-teal-100 via-teal-200 to-teal-400 overflow-hidden py-16 sm:py-24">
      {/* Floating decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-teal-300 rounded-full opacity-40 blur-xl transform -translate-x-1/2 -translate-y-1/2 animate-bounce-slow"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-teal-400 rounded-full opacity-40 blur-xl transform translate-x-1/2 translate-y-1/2 animate-bounce-slow delay-1000"></div>

      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between px-4 sm:px-8 lg:px-16">
        {/* Left Text Section */}
        <div
          className="lg:w-1/2 text-center lg:text-left space-y-6 lg:space-y-8"
          data-aos="fade-right"
        >
          <h1 className="font-serif text-teal-900 font-extrabold text-5xl sm:text-6xl lg:text-8xl tracking-tight leading-tight mb-4 lg:mb-8">
            {t("frontHero.title", { defaultValue: "Your Next Dental Trip" })}
          </h1>

          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-teal-800 mt-2 sm:mt-4 mb-4 lg:mb-8">
            {t("frontHero.subtitle", {
              defaultValue: "Free Consultations, World-Class Treatment, Stunning Results",
            })}
          </h2>

         {/* Call to Action Buttons */}
          <div className="mt-6 sm:mt-10 sm:flex justify-center lg:justify-start space-y-6 sm:space-y-0 sm:space-x-6 space-x-0 lg:space-x-6">
            <Link
              href="/contact"
              className="inline-block bg-teal-700 text-white font-serif font-bold py-3 px-6 rounded-full shadow-lg hover:bg-teal-600 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-base"
            >
              {t("frontHero.visitButton", {
                defaultValue: "Contact us",
              })}
            </Link>
            <Link
              href="/services"
              className="inline-block bg-white text-teal-900 font-bold py-3 px-6 rounded-full shadow-md hover:bg-teal-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-base"
            >
              {t("frontHero.scheduleButton", {
                defaultValue: "Our services",
              })}
            </Link>
          </div>
        </div>


        {/* Right Image Section */}
        <div className="relative lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0" data-aos="fade-left">
          <div className="relative w-full h-auto sm:w-3/4 lg:w-auto">
            <Image
              src="/images/Team/staff/milija.webp"
              alt="Lead Doctor at Sorriso smiling"
              layout="intrinsic"
              width={900}
              height={1100}
              quality={100}
              priority
              className="w-full object-cover rounded-xl transform hover:scale-105 transition-transform duration-300"
            />
            {/* Subtle gradient overlay for visual effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-400 opacity-30 rounded-xl"></div>
          </div>
        </div>
      </div>

      {/* Enhanced background and floating elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 opacity-30"></div>
      </div>
    </section>
  );
};

export default FrontHero;
