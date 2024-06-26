"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

interface ClinicCardProps {
  name: string;
  city: string;
  yearsOfExperience: number;
  expertise: string;
  reviewScore: number;
  image: string;
}

const ClinicCard: React.FC<ClinicCardProps> = ({ name, city, yearsOfExperience, expertise, reviewScore, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the click event from bubbling up to the Link component
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-pink-400 shadow-xl rounded-3xl overflow-hidden transform transition-transform hover:scale-105 border border-pink-200 relative">
      <Link href="/contact" className="block w-full h-full absolute top-0 left-0 z-10"></Link>
      <img src={image} alt={name} className="w-full h-48 object-cover relative z-20" />
      <div className="p-6 relative z-20">
        <h2 className="text-2xl font-bold text-white mb-2">{name}</h2>
        <p className="text-white mb-2"><strong>City:</strong> {city}</p>
        <p className="text-white mb-2"><strong>Review Score:</strong> {reviewScore} / 5</p>
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-5 h-5 ${index < reviewScore ? "text-yellow-500" : "text-gray-300"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927C9.29 2.065 10.71 2.065 10.951 2.927l.737 2.355h2.468c.969 0 1.373 1.24.588 1.81l-1.998 1.403.737 2.356c.241.862-.63 1.571-1.342 1.11L10 10.926l-1.848 1.313c-.713.461-1.584-.248-1.342-1.11l.737-2.356-1.998-1.403c-.785-.57-.381-1.81.588-1.81h2.468l.737-2.355z" />
            </svg>
          ))}
        </div>
        {isExpanded && (
          <div className="text-white">
            <p className="mb-2"><strong>Years of Experience:</strong> {yearsOfExperience}</p>
            <p className="mb-2"><strong>Expertise:</strong> {expertise}</p>
          </div>
        )}
        <button
          onClick={toggleExpand}
          className="mt-4 bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 transition-colors relative z-30"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>
      <Link href="/contact" className="absolute top-2 right-2 bg-pink-500 p-2 rounded-full hover:bg-pink-600 transition-colors z-30">
        <FaEnvelope className="text-white w-5 h-5" />
      </Link>
    </div>
  );
};

export default ClinicCard;
