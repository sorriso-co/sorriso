"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Comparison: React.FC = () => {
  const { t } = useTranslation("pricing");

  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-16 rounded-xl shadow-lg">
      <div className="container mx-auto text-center">
        {/* Title Section */}
        <h1 className="text-5xl sm:text-6xl font-serif font-extrabold text-teal-900 mb-8 leading-tight">
          {t("comparison.title")}
        </h1>
        <p className="text-lg sm:text-xl text-teal-700 mb-12 max-w-4xl mx-auto leading-relaxed">
          {t("comparison.description")}
        </p>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
          {/* Other Bill */}
          <div className="bg-white rounded-lg shadow-2xl p-8 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-teal-800 mb-6">
              {t("comparison.otherBill")}
            </h3>
            <Image
              src="/images/bills/other_bill.webp"
              alt={t("comparison.otherBill")}
              width={400}
              height={700}
              loading="lazy" 
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Sorriso Bill */}
          <div className="bg-white rounded-lg shadow-2xl p-8 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-teal-800 mb-6">
              {t("comparison.sorrisoBill")}
            </h3>
            <Image
              src="/images/bills/sorriso_bill.webp"
              alt={t("comparison.sorrisoBill")}
              width={400}
              height={700}
              loading="lazy" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <Link href="/contact"
            className="inline-block bg-teal-600 text-white text-lg font-bold py-4 px-10 rounded-full shadow-lg transition-colors duration-200 hover:bg-teal-700">
              {t("comparison.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
