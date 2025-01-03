"use client";
import { useState } from "react";
import Image from "next/image";

export default function BookACall() {
  const [showIframe, setShowIframe] = useState(false);

  const handleButtonClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "book_call_click", {
        event_category: "engagement",
        event_label: "Book a Call Button",
        value: 1,
      });
    }
    setShowIframe(true);
  };

  return (
    <div className="w-full bg-transparent flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-6 sm:p-10 max-w-full lg:max-w-4xl w-full flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-8">
        {/* Left Section */}
        <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-700 mb-4">
            Why Choose Us for Your Dental Journey?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Experience personalized care with{" "}
            <span className="font-semibold text-teal-700">Dr. Filip</span> at our trusted partner clinics in Montenegro.
            We offer a <strong className="text-teal-700">free one-on-one consultation</strong> and provide a{" "}
            <strong className="text-teal-700">detailed quote within 24 hours</strong>. Our seamless process ensures
            clarity, quality, and care every step of the way.
          </p>
          <button
            className="bg-teal-700 hover:bg-teal-400 text-white py-3 px-6 rounded-full text-sm sm:text-lg font-semibold shadow-md transition duration-300 w-full sm:w-auto"
            onClick={handleButtonClick}
          >
            Book Your Free Consultation
          </button>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 w-full flex justify-center items-center">
          <Image
            src="/images/Team/staff/filip.png" // Replace with your image path
            alt="Dr. Filip - Your Trusted Dental Specialist"
            width={200}
            height={200}
            className="rounded-full shadow-lg"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Fullscreen Google Calendar Iframe Modal */}
      {showIframe && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-11/12 md:w-3/4 lg:w-2/3 h-4/5 relative shadow-2xl overflow-hidden">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-100"
              onClick={() => setShowIframe(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
              title="Book a Dental Consultation"
              aria-label="Google Calendar Appointment Booking"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
