"use client";
import { useTranslation } from "react-i18next";

export default function BookACall() {
  const { t } = useTranslation("common");

  return (
    <div className="w-full rounded-xl p-4 sm:p-6 lg:p-8 mt-12 max-w-screen mx-auto">
      {/* Header for Context */}
      <div className="text-center mb-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-teal-800">
          {t("bookACall.header.title")}
        </h2>
        <p className="text-teal-600 text-xl sm:text-2xl mt-2">
          {t("bookACall.header.description")}
        </p>
      </div>

      {/* Iframe Wrapper */}
      <div className="relative overflow-hidden rounded-lg shadow-md">
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Z-M-9vG8Fy6-4ZN5H_Ck3v_NOXdIMFFZt9eXxffaFzhL3PeswZYOyjiCd4kdqp276PXFXooxj?gv=true"
          className="w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] rounded-lg"
          title={t("bookACall.iframe.title")}
          aria-label={t("bookACall.iframe.ariaLabel")}
        ></iframe>
      </div>
    </div>
  );
}
