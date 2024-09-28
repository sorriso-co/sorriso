import React from "react";
import { SiCnn, SiDeutschebahn, SiMedium, SiReddit } from "react-icons/si"; // Icons for various brands
import { FaHackerNewsSquare } from "react-icons/fa"; // Icon for Hacker News
import { FcBbc } from "react-icons/fc"; // BBC icon
import "tailwindcss/tailwind.css";

const BrandIcons: React.FC = () => {
  return (
    <section className="w-full bg-transparent py-6 sm:py-10">
      <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-12">
        {/* Deutsche Welle (Using Deutsche Bahn as placeholder) */}
        <div
          className="flex justify-center items-center p-2 sm:p-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          title="Deutsche Welle"
        >
          <SiDeutschebahn className="text-white text-2xl sm:text-3xl lg:text-4xl" />
        </div>

        {/* CNN */}
        <div
          className="flex justify-center items-center p-2 sm:p-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          title="CNN"
        >
          <SiCnn className="text-white text-2xl sm:text-3xl lg:text-4xl" />
        </div>

        {/* Medium */}
        <div
          className="flex justify-center items-center p-2 sm:p-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          title="Medium"
        >
          <SiMedium className="text-white text-2xl sm:text-3xl lg:text-4xl" />
        </div>

        {/* Reddit */}
        <div
          className="flex justify-center items-center p-2 sm:p-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          title="Reddit"
        >
          <SiReddit className="text-white text-2xl sm:text-3xl lg:text-4xl" />
        </div>

        {/* Hacker News */}
        <div
          className="flex justify-center items-center p-2 sm:p-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          title="Hacker News"
        >
          <FaHackerNewsSquare className="text-white text-2xl sm:text-3xl lg:text-4xl" />
        </div>

        {/* BBC */}
        <div
          className="flex justify-center items-center p-2 sm:p-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          title="BBC"
        >
          <FcBbc className="text-white text-2xl sm:text-3xl lg:text-4xl" />
        </div>
      </div>
    </section>
  );
};

export default BrandIcons;

