"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function BookACall() {
  const [showIframe, setShowIframe] = useState(false);
  const { t } = useTranslation("homepage");

  const handleButtonClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "book_call_click", {
        event_category: "engagement",
        event_label: t("contactMain.buttonText"),
        value: 1,
      });
    }
    setShowIframe(true);
  };

  return (
    <div className="w-full bg-transparent flex items-center justify-center px-4 py-8 sm:px-6 lg:p-16">
      <div className="bg-white bg-opacity-95 rounded-3xl shadow-2xl p-6 sm:p-10 max-w-full lg:max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Left Section */}
        <div className="lg:w-2/3 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-teal-700 mb-4 sm:mb-6">
            {t("contactMain.heading")}
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8"
            dangerouslySetInnerHTML={{ __html: t("contactMain.description") }}
          />
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full lg:w-auto">
            {/* Book a Call Button */}
            <button
              className="bg-teal-700 hover:bg-teal-500 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg md:text-xl font-bold shadow-lg transition duration-300 w-full sm:w-auto"
              onClick={handleButtonClick}
            >
              {t("contactMain.buttonText")}
            </button>
            {/* Get a Quote Button */}
            <a
              href="/quote"
              className="bg-teal-800 hover:bg-teal-600 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg md:text-xl font-bold shadow-lg transition duration-300 w-full sm:w-auto text-center"
            >
              {t("contactMain.getQuoteButtonText", { defaultValue: "Get a Quote" })}
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/3 w-full flex justify-center items-center">
          <Image
            src="/images/Team/staff/filip.png"
            alt={t("contactMain.imageAlt")}
            width={280}
            height={280}
            className="rounded-full shadow-xl"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Fullscreen Google Calendar Iframe Modal */}
      {showIframe && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl w-11/12 sm:w-10/12 md:w-3/4 lg:w-2/3 xl:w-1/2 h-4/5 relative shadow-2xl overflow-hidden">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
              aria-label={t("contactMain.modal.closeButtonAriaLabel")}
              onClick={() => setShowIframe(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Z-M-9vG8Fy6-4ZN5H_Ck3v_NOXdIMFFZt9eXxffaFzhL3PeswZYOyjiCd4kdqp276PXFXooxj?gv=true"
              className="w-full h-full"
              title={t("contactMain.modal.iframeTitle")}
              aria-label={t("contactMain.modal.iframeTitle")}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
