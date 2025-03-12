"use client";
import { useTranslation } from "react-i18next";

export default function BookACall() {
  const { t } = useTranslation("common");

  return (
    <div className="w-full min-h-[600px] sm:min-h-[800px] flex flex-col items-center justify-start overflow-hidden bg-white rounded">
      {/* Header */}
      <div className="mb-4" />

      {/* Fullscreen Iframe */}
      <iframe
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Z-M-9vG8Fy6-4ZN5H_Ck3v_NOXdIMFFZt9eXxffaFzhL3PeswZYOyjiCd4kdqp276PXFXooxj?gv=true"
        className="w-full h-[1400px] sm:h-[850px] border-none overflow-x-hidden"
        title={t("bookACall.iframe.title")}
        aria-label={t("bookACall.iframe.ariaLabel")}
        scrolling="no"
        style={{ overflow: "hidden" }}
      ></iframe>
    </div>
  );
}
