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
    <section className="relative w-full bg-gradient-to-b from-teal-700 to-teal-900 overflow-hidden">
      {/* Main Hero Section */}
      <div className="container h-screen mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-8 lg:space-y-0">
          {/* Left Text Section */}
          <div
            className="lg:w-1/2 text-center lg:text-left space-y-4 sm:space-y-6 lg:space-y-8 lg:pr-8"
            data-aos="fade-right"
          >
            <h1 className="font-serif text-white font-extrabold text-4xl sm:text-4xl lg:text-7xl tracking-tight leading-tight mb-4 lg:mb-8">
              {t("frontHero.title", { defaultValue: "Your Next Dental Trip" })}
            </h1>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white mt-2 sm:mt-4 mb-4 lg:mb-8">
              {t("frontHero.subtitle", {
                defaultValue: "Free Consultations, World-Class Treatment, Stunning Results",
              })}
            </h2>

            {/* Call to Action Buttons */}
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
              <Link href="/gallery">
                <button className="inline-block bg-gradient-to-r from-teal-700 to-teal-500 text-white font-serif font-bold py-3 px-6 lg:py-3 lg:px-6 rounded-full shadow-2xl hover:bg-teal-600 hover:shadow-3xl transition-all duration-300 transform hover:scale-110 text-xl lg:text-base border-2 border-teal-400">
                  {t("frontHero.visitButton", {
                    defaultValue: "Our Transformations",
                  })}
                </button>
              </Link>
              <Link href="#how-it-works-section">
                <button className="inline-block bg-white text-teal-900 font-bold py-3 px-6 lg:py-3 lg:px-6 rounded-full shadow-2xl hover:bg-teal-50 hover:shadow-3xl transition-all duration-300 transform hover:scale-110 text-xl lg:text-base border-2 border-teal-700">
                  {t("frontHero.scheduleButton", {
                    defaultValue: "How it works",
                  })}
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div
            className="relative flex justify-center lg:justify-end mt-10 lg:mt-0"
            data-aos="fade-left"
          >
            <div className="relative w-full h-auto sm:w-3/4 lg:w-full px-4 sm:px-0">
              <Image
                src="/images/icons/front.webp"
                alt="Lead Doctor at Sorriso smiling"
                layout="intrinsic"
                width={900}
                height={1000}
                quality={100}
                priority
                className="object-cover rounded-xl transform transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontHero;
