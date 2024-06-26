import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const HaveItAll: React.FC = () => {
  const { t } = useTranslation('homepage');

  return (
    <section className="bg-gradient-to-t overflow-x-hidden from-teal-100 via-teal-300 to-teal-100 text-teal-800 py-20 px-8 lg:px-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8">
          {t("haveItAll.title", { defaultValue: "Have It All with Sorriso" })}
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl font-light mb-12">
          {t("haveItAll.description", { defaultValue: "Discover the perfect blend of world-class dental care and a dream vacation in Montenegro. With Sorriso, you can experience world-class dental procedures while enjoying the stunning beauty of Montenegro’s landscapes, rich history, and warm hospitality. Save up to 80% on dental treatments." })}
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <Link href="/contact"
            className="bg-white text-teal-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105 text-lg md:text-xl">
              {t("haveItAll.buttonText", { defaultValue: "Schedule an Appointment" })}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HaveItAll;
