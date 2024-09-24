"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppLink: React.FC = () => {
  return (
    <a
      href="https://wa.me/38269664668"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50 transition-transform transform hover:scale-110"
      aria-label="WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppLink;
