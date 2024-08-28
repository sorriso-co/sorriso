import React, { ReactElement } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

interface PackageCardProps {
  price: string;
  title: string;
  description: string;
  features: string[];
}

const PackageCard: React.FC<PackageCardProps> = ({
  price,
  title,
  description,
  features,
}): ReactElement => {
  const { t } = useTranslation("pricing");

  return (
    <div
      className="bg-gradient-to-r from-white to-teal-100 p-8 rounded-3xl shadow-xl transition-transform transform hover:scale-105 hover:bg-teal-200 hover:shadow-2xl font-serif relative overflow-hidden flex flex-col justify-between"
      data-aos="fade-up"
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-2xl font-bold text-teal-700">{title}</h4>
          <span className="text-2xl font-bold text-teal-700">{price}</span>
        </div>
        <p className="text-lg mb-6 text-gray-800">{description}</p>
        <ul className="mb-6 text-gray-700 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                className="w-6 h-6 text-teal-700 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.172 7.707 7.879a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-lg">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Link href="/contact" passHref>
        <button className="bg-teal-600 text-white py-3 px-6 rounded-lg hover:bg-teal-800 transition-colors w-full mt-auto">
          {t("moreInformationButton")}
        </button>
      </Link>
    </div>
  );
};

export default PackageCard;
