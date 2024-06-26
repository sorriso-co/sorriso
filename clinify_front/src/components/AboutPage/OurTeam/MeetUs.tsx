"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const ScheduleAppointment: React.FC = () => {
  const { t } = useTranslation('about');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="overflow-x-hidden relative bg-teal-700 text-white py-16 px-8 lg:px-16">
      <div className="relative z-10 container mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl font-bold font-serif mb-6"
          data-aos="fade-up"
        >
          {t('scheduleAppointment.title')}
        </h2>
        <p
          className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {t('scheduleAppointment.description')}
        </p>
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Link href="/contact">
            <button className="bg-white text-teal-700 font-bold py-3 px-8 rounded-md shadow-md hover:bg-gray-100 transition-transform transform hover:scale-105 text-lg">
              {t('scheduleAppointment.bookNow')}
            </button>
          </Link>
          <Link href="/about">
            <button className="bg-teal-500 text-white font-bold py-3 px-8 rounded-md shadow-md hover:bg-teal-600 transition-transform transform hover:scale-105 text-lg">
              {t('scheduleAppointment.whatWeStandFor')}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ScheduleAppointment;
