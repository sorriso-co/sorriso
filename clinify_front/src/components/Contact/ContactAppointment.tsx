"use client";
import { useTranslation } from "react-i18next";

export default function BookACall() {
  const { t } = useTranslation("common");

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl mt-2 font-semibold text-teal-800">
          {t("bookACall.header.title")}
        </h2>
        <p className="text-teal-600 text-xl sm:text-2xl mt-2">
          {t("bookACall.header.description")}
        </p>
      </div>

      {/* Fullscreen Iframe */}
      <iframe
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Z-M-9vG8Fy6-4ZN5H_Ck3v_NOXdIMFFZt9eXxffaFzhL3PeswZYOyjiCd4kdqp276PXFXooxj?gv=true"
        className="w-full h-full border-none"
        title={t("bookACall.iframe.title")}
        aria-label={t("bookACall.iframe.ariaLabel")}
      ></iframe>
    </div>
  );
}
