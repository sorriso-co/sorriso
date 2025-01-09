import React from "react";
import { useTranslation } from "react-i18next";
import MediaGallery from "./MediaGallery";
import Link from "next/link";

const FrontHero: React.FC = () => {
  const { t } = useTranslation("homepage");

  return (
    <section className="relative w-full bg-gradient-to-tr from-teal-700 to-teal-900 overflow-hidden">
      <div className="container mx-auto py-20 px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-12 lg:space-y-0">
          {/* Left Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-8 lg:mr-10">
            <h1 className="font-serif text-white font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-tight animate-fade-in">
              {t("frontHero.title", { defaultValue: "Your Next Dental Trip" })}
            </h1>
            <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl text-teal-200 animate-slide-up">
              {t("frontHero.subtitle", {
                defaultValue:
                  "Free Consultations, World-Class Treatment, Stunning Results",
              })}
            </h2>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/gallery">
                <button className="inline-flex items-center justify-center bg-gradient-to-r from-teal-500 to-teal-400 text-white font-serif font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:from-teal-400 hover:to-teal-500">
                  {t("frontHero.visitButton", {
                    defaultValue: "Our Transformations",
                  })}
                </button>
              </Link>

              <Link href="#how-it-works-section">
                <button className="inline-flex items-center justify-center bg-white text-teal-700 font-serif font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-teal-100 hover:text-teal-800">
                  {t("frontHero.scheduleButton", {
                    defaultValue: "How it works",
                  })}
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative flex justify-center lg:justify-end w-full sm:w-3/4 lg:w-1/2">
            <MediaGallery />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontHero;
