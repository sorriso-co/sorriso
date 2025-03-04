"use client";
import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppLink: React.FC = () => {
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    // Trigger shake animation every 5 seconds
    const interval = setInterval(() => {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 1500); // Shake duration: 500ms
    }, 5000); // Repeat every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href="https://wa.me/38269664668"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50 transition-transform transform hover:scale-110"
      style={{
        animation: isShaking ? "shake 0.5s ease-in-out" : "none",
      }}
      aria-label="WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
      <style jsx>{`
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          20% {
            transform: translateX(-3px);
          }
          40% {
            transform: translateX(3px);
          }
          60% {
            transform: translateX(-3px);
          }
          80% {
            transform: translateX(3px);
          }
        }
      `}</style>
    </a>
  );
};

export default WhatsAppLink;
