"use client";

import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";

interface DiscountPopupProps {
  show: boolean;
  handleClose: () => void;
}

const DiscountPopup: React.FC<DiscountPopupProps> = ({ show, handleClose }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [shouldShow, setShouldShow] = useState(false); // 🔹 New state for timing

  // 🔹 Timer to show the popup after 20 seconds
  useEffect(() => {
    const isPopupDismissed = document.cookie
      .split("; ")
      .find((row) => row.startsWith("popupDismissed="));

    if (!isPopupDismissed) {
      const timer = setTimeout(() => {
        setShouldShow(true); // 🔹 Show the popup after 20 seconds
      }, 25000); // 25 seconds

      return () => clearTimeout(timer); // 🔹 Cleanup the timer
    }

    return undefined; // 🔹 Explicitly return undefined if no cleanup is needed
  }, []);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      await axios.post("/api/send", { email });
      setSubmitted(true);
      setError(null);
    } catch (error) {
      console.error("Failed to send email:", error);
      setError("Failed to send email. Please try again.");
    }
  };

  const handleDismiss = async () => {
    try {
      console.log("Dismiss clicked! Calling API...");

      await axios.post("/api/dismiss-popup");
      document.cookie = "popupDismissed=true; path=/; max-age=604800"; // 7 days

      console.log("Cookie set, now calling handleClose...");
      handleClose(); // 🔹 This should trigger `handlePopupClose` in `page.tsx`

      console.log("Popup should now close.");
    } catch (error) {
      console.error("Failed to dismiss popup:", error);
    }
  };

  // 🔹 Only show the popup if `show` and `shouldShow` are true
  if (!show || !shouldShow) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white text-teal-900 rounded-lg p-4 w-80 shadow-lg border border-gray-800">
        <div className="text-right">
          <button
            onClick={(e) => {
              e.stopPropagation(); // 🔹 Prevent event bubbling
              e.preventDefault(); // 🔹 Prevent default behavior
              console.log("X button clicked"); // 🔹 Debugging
              handleDismiss();
            }}
            className="text-gray-800 hover:text-gray-600"
          >
            &times;
          </button>
        </div>
        {!submitted ? (
          <>
            <h2 className="text-xl font-bold text-center mb-4">
              A Smile Worth Flying For ✈️✨
            </h2>
            <p className="text-teal-700 text-center mb-6">
              Be one of our next 5 customers, and we’ll cover your
              <strong>
                {" "}
                round-trip flight and a stay at the 5-star hotel — completely on
                us!
              </strong>
            </p>
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                className={`w-full px-3 py-2 border rounded-md bg-white text-teal-900 placeholder-gray-500 ${
                  error ? "border-red-500" : "border-gray-600"
                }`}
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
            <button
              onClick={handleSubmit}
              className="mt-6 w-full bg-teal-700 text-white py-2 rounded-lg border border-gray-600 hover:bg-teal-600 transition duration-300"
            >
              Submit
            </button>
          </>
        ) : (
          <div className="text-center">
            <FaCheckCircle size={50} className="text-green-400 mb-3" />
            <h4 className="text-lg font-semibold">Thank you!</h4>
            <p className="text-teal-700">
              Your discount and free accommodation details are on their way to
              your inbox. Check your email to claim this exclusive New Year
              offer!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscountPopup;
