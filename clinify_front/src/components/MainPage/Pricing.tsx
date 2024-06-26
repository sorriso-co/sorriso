"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Pricing: React.FC = () => {
  const { t } = useTranslation('homepage');

  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
      offset: 0, // Offset from the original trigger point
    });
  }, []);

  const pricingData = t("pricing.procedures", { returnObjects: true }) as {
    procedure: string;
    ukPrice: string;
    euPrice: string;
    usPrice: string;
    balkanPrice: string;
    savings: string;
  }[];

  return (
    <section className="py-16 overflow-x-hidden px-8 lg:px-16 bg-teal-50" data-aos="fade-up">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-teal-700 mb-12" data-aos="fade-down">
          {t("pricing.title", { defaultValue: "Average Cost Comparison" })}
        </h2>
        <div className="overflow-x-auto" data-aos="fade-up">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-teal-500 text-white border border-gray-200">
                  {t("pricing.procedure", { defaultValue: "Procedure" })}
                </th>
                <th className="px-4 py-2 bg-teal-500 text-white border border-gray-200">
                  {t("pricing.ukPrice", { defaultValue: "UK Price" })}
                </th>
                <th className="px-4 py-2 bg-teal-500 text-white border border-gray-200">
                  {t("pricing.euPrice", { defaultValue: "EU Average" })}
                </th>
                <th className="px-4 py-2 bg-teal-500 text-white border border-gray-200">
                  {t("pricing.usPrice", { defaultValue: "US Price" })}
                </th>
                <th className="px-4 py-2 bg-teal-500 text-white border border-gray-200">
                  {t("pricing.balkanPrice", { defaultValue: "Our Price" })}
                </th>
                <th className="px-4 py-2 bg-teal-500 text-white border border-gray-200">
                  {t("pricing.savings", { defaultValue: "Savings" })}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {pricingData.map((item, index) => (
                <tr key={index} className="border-t" data-aos="fade-up">
                  <td className="px-4 py-4 text-left text-gray-700 border border-gray-200">
                    {item.procedure}
                  </td>
                  <td className="px-4 py-4 text-left text-gray-700 border border-gray-200">
                    {item.ukPrice}
                  </td>
                  <td className="px-4 py-4 text-left text-gray-700 border border-gray-200">
                    {item.euPrice}
                  </td>
                  <td className="px-4 py-4 text-left text-gray-700 border border-gray-200">
                    {item.usPrice}
                  </td>
                  <td className="px-4 py-4 text-left text-gray-700 border border-gray-200">
                    {item.balkanPrice}
                  </td>
                  <td className="px-4 py-4 text-left text-teal-700 font-bold border border-gray-200">
                    {item.savings}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-8 text-lg text-gray-600" data-aos="fade-up">
          {t("pricing.note", { defaultValue: "*Prices are case-dependent. Fill out our online request form to know the latest deals on prices and exclusive discounts!" })}{" "}
          <Link href="/contact"
            className="text-darkPink underline">
              {t("pricing.onlineRequestForm", { defaultValue: "online request form" })}
          </Link>
        </p>
        <Link href="/pricing"
          className="bg-teal-500 hover:bg-teal-200 text-white text-lg font-light py-4 px-8 rounded-full mt-8 inline-block" data-aos="fade-up">
            {t("pricing.buttonText", { defaultValue: "See Our Pricing" })}
        </Link>
      </div>
    </section>
  );
};

export default Pricing;
