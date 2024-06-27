"use client";
import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from "next/image";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <div className="fixed bottom-4 right-4 flex space-x-2 z-50 p-2 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg">
      {['sr', 'en', 'it', 'de', 'ru', 'sp'].map((lang) => (
        <button
          key={lang}
          onClick={() => i18n.changeLanguage(lang)}
          className={`w-10 h-10 rounded-full focus:outline-none transition-transform transform hover:scale-110 ${
            i18n.language === lang ? 'ring-2 ring-teal-400' : 'ring-1 ring-gray-500'
          }`}
        >
          <Image
            src={`/images/lang/${lang}.png`}
            alt={`${lang} flag`}
            width={40}
            height={40}
            className="rounded-full"
          />
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
