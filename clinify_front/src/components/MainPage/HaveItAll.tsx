import React, { memo } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const HaveItAll: React.FC = () => {
  const { t } = useTranslation("homepage");

  return (
    <section className="bg-transparent text-teal-800 px-8 lg:px-24">
      <div className="container mx-auto text-center max-w-4xl">
        {/* Title */}
        <h2 className="text-5xl sm:text-7xl md:text-7xl lg:text-8xl font-serif font-extrabold mb-8 leading-tight text-teal-700">
          {t("haveItAll.title", { defaultValue: "Have It All with Sorriso" })}
        </h2>

        {/* Description */}
        <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-12 leading-relaxed text-teal-800">
          {t("haveItAll.description", {
            defaultValue:
              "Discover the perfect blend of world-class dental care and a dream vacation in Montenegro. With Sorriso, you can experience world-class dental procedures while enjoying the stunning beauty of Montenegro’s landscapes, rich history, and warm hospitality. Save up to 80% on dental treatments.",
          })}
        </p>

        {/* Button */}
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="bg-teal-500 text-white font-bold py-4 px-10 rounded-full shadow-lg text-xl lg:text-2xl border-2 border-teal-400"
          >
            {t("haveItAll.buttonText", {
              defaultValue: "Schedule an Appointment",
            })}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(HaveItAll);
