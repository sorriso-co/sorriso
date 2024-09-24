"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Comparison = () => {
  const { t } = useTranslation("pricing");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-16 rounded-xl shadow-lg">
      <div className="container mx-auto text-center">
        <h1
          className="text-5xl sm:text-6xl font-serif font-extrabold text-teal-900 mb-8 leading-tight"
          data-aos="fade-up"
        >
          {t("comparison.title")}
        </h1>
        <p
          className="text-lg sm:text-xl text-teal-700 mb-12 max-w-4xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {t("comparison.description")}
        </p>

        {/* Comparison Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Other Bill */}
          <div
            className="bg-white rounded-lg shadow-2xl p-8 flex flex-col items-center"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-bold text-teal-800 mb-6">
              {t("comparison.otherBill")}
            </h3>
            <Image
              src="/images/bills/other_bill.webp"
              alt={t("comparison.otherBill")}
              width={400}
              height={700}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Sorriso Bill */}
          <div
            className="bg-white rounded-lg shadow-2xl p-8 flex flex-col items-center"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-bold text-teal-800 mb-6">
              {t("comparison.sorrisoBill")}
            </h3>
            <Image
              src="/images/bills/sorriso_bill.webp"
              alt={t("comparison.sorrisoBill")}
              width={400}
              height={700}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16" data-aos="zoom-in">
          <Link
            href="/contact"
            className="inline-block bg-teal-600 text-white text-lg font-bold py-4 px-10 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-teal-700"
          >
            {t("comparison.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
