"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [hoveredLang, setHoveredLang] = useState<string | null>(null);

  const languages = [
    { code: "en", name: "English" },
    { code: "it", name: "Italian" },
    { code: "de", name: "German" },
    { code: "fr", name: "French" },
  ];

  return (
    <div className="fixed bottom-4 right-4 flex space-x-2 z-50 p-2 bg-transparent bg-opacity-90 rounded-lg">
      {languages.map((lang) => (
        <div key={lang.code} className="relative">
          {/* Language Button */}
          <button
            onClick={() => i18n.changeLanguage(lang.code)}
            onMouseEnter={() => setHoveredLang(lang.name)}
            onMouseLeave={() => setHoveredLang(null)}
            className={`w-10 h-10 rounded-full focus:outline-none transition-transform transform hover:scale-110 ${
              i18n.language === lang.code
                ? "ring-2 ring-teal-400"
                : "ring-1 ring-gray-600"
            } shadow-lg hover:ring-teal-300`}
          >
            <Image
              src={`/images/lang/${lang.code}.png`}
              alt={`${lang.name} flag`}
              width={40}
              height={40}
              className="rounded-full object-cover"
              style={{ width: "40px", height: "40px" }}
            />
          </button>

          {/* Tooltip */}
          {hoveredLang === lang.name && (
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg z-10">
              {lang.name}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
