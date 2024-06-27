"use client";

import React, { useEffect } from "react";
import {
  FaBullhorn,
  FaUsers,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaShoppingCart,
  FaCamera,
} from "react-icons/fa";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/global.css";

interface AffiliateType {
  label: string;
  icon: React.ReactNode;
}

const affiliateTypes: AffiliateType[] = [
  {
    label: "Digital marketing agencies",
    icon: <FaBullhorn size={64} color="#00796b" />,
  },
  { label: "Influencers", icon: <FaUsers size={64} color="#00796b" /> },
  {
    label: "Tech consultants",
    icon: <FaLaptopCode size={64} color="#00796b" />,
  },
  {
    label: "Business coaches",
    icon: <FaChalkboardTeacher size={64} color="#00796b" />,
  },
  {
    label: "E-commerce web developers",
    icon: <FaShoppingCart size={64} color="#00796b" />,
  },
  { label: "Content creators", icon: <FaCamera size={64} color="#00796b" /> },
];

const AffiliateProgram: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gradient-to-r from-teal-100 to-teal-200 py-20 px-12">
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap items-center">
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0" data-aos="fade-right">
          <h2 className="text-5xl lg:text-6xl font-bold text-teal-900 mb-12">
            Who is our Affiliate Program for?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {affiliateTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 flex items-center transform transition-transform duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 mr-6">{type.icon}</div>
                <p className="text-teal-900 font-semibold text-lg">
                  {type.label.replace("'", "&apos;")}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div
          className="w-full lg:w-1/2 flex justify-center"
          data-aos="fade-left"
        >
          <Image
            src="/images/affiliates/who.png"
            alt="Affiliate"
            width={800}
            height={800}
          />
        </div>
      </div>
    </div>
  );
};

export default AffiliateProgram;
