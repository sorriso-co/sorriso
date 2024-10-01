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

  const handleChangeLanguage = (code: string) => {
    if (i18n.language !== code) {
      i18n.changeLanguage(code);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 flex space-x-2 md:space-x-4 z-50 p-2 bg-transparent rounded-lg backdrop-blur-md">
      {languages.map((lang) => (
        <div key={lang.code} className="relative">
          {/* Language Button */}
          <button
            onClick={() => handleChangeLanguage(lang.code)}
            onMouseEnter={() => setHoveredLang(lang.name)}
            onMouseLeave={() => setHoveredLang(null)}
            className={`w-12 h-8 md:w-16 md:h-10 overflow-hidden rounded-lg focus:outline-none ${
              i18n.language === lang.code
                ? "ring-2 ring-teal-400"
                : "ring-1 ring-gray-600"
            } shadow-lg`}
            aria-label={`Change language to ${lang.name}`}
          >
            <Image
              src={`/images/lang/${lang.code}.webp`}
              alt={`${lang.name} flag`}
              width={160}
              height={100}
              loading="eager"
              className="object-cover"
            />
          </button>

          {/* Tooltip */}
          {hoveredLang === lang.name && (
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg z-50">
              {lang.name}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
