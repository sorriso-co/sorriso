"use client";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const SuccessPage: React.FC = () => {
  const { t } = useTranslation("common");

  useEffect(() => {
    // Check if gtag is available on the window
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-16639056870/g7l6CKvT2JkaEOa3j_49",
        value: 1.0,
        currency: "EUR",
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 text-center">
      <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h1 className="text-2xl font-bold text-teal-600 mb-2">
        {t("success.title")}
      </h1>
      <p className="text-gray-700 mb-4">{t("success.message")}</p>
      <a
        href="/"
        className="inline-block bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700"
      >
        {t("success.returnHome")}
      </a>
    </div>
  );
};

export default SuccessPage;
