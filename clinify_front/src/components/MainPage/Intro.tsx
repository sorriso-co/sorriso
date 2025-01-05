import React, { useState } from "react";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Introduction: React.FC = () => {
  const { t } = useTranslation("homepage");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch("/api/contact-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, phone }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit contact information");
      }
  
      // Reset the form on success
      setEmail("");
      setPhone("");
      alert("Thank you for your interest! We will contact you soon.");
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred while submitting your contact information. Please try again.");
    }
  };
  

  return (
    <section className="container mx-auto flex flex-col lg:flex-row items-center py-16 px-6 lg:px-12 space-y-10 lg:space-y-0 lg:space-x-12 bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg shadow-lg">
      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="font-serif text-teal-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
          {t("introduction.title", { defaultValue: "Your Next Dental Trip" })}
        </h1>
        <h4 className="font-serif text-2xl sm:text-3xl text-teal-700 mb-6">
          {t("introduction.subtitle", {
            defaultValue: "Veni Vidi Vici with Sorriso",
          })}
        </h4>
        <p className="font-sans text-lg sm:text-xl text-teal-800 mb-8">
          {t("introduction.description", {
            defaultValue:
              "Discover exceptional dental care combined with an unforgettable travel experience. Let Sorriso guide you through a journey to a brighter, healthier smile while exploring the beauty and culture of Montenegro.",
          })}
        </p>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="/pricing"
            className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 sm:py-4 px-8 rounded-full font-semibold shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-teal-300"
          >
            View Our Pricing
          </a>
          {/* New Get a Quote Button */}
          <a
            href="/quote"
            className="bg-gradient-to-r from-teal-800 to-teal-900 text-white py-3 sm:py-4 px-8 rounded-full font-semibold shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-teal-500"
          >
            Get a Quote
          </a>
        </div>
        
      </div>
      

      {/* Contact Form Section */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end">
        <div className="bg-gradient-to-r from-teal-700 to-teal-800 p-8 sm:p-10 rounded-lg shadow-md text-white w-full max-w-md">
          <h3 className="text-3xl sm:text-4xl font-bold mb-6">
            {t("introduction.joinUsTitle", { defaultValue: "Join Us" })}
          </h3>
          <p className="text-lg sm:text-xl mb-6">
            {t("introduction.joinUsDescription", {
              defaultValue:
                "Enter your contact details, and we'll get in touch with you to start your journey to a perfect smile.",
            })}
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-white text-lg mb-2">
                {t("introduction.emailLabel", { defaultValue: "Email Address" })}
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-lg text-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-white text-lg mb-2">
                {t("introduction.phoneLabel", { defaultValue: "Phone Number" })}
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full p-3 rounded-lg text-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-teal-800 py-3 px-6 rounded-full font-semibold shadow-md transition-transform duration-300 hover:bg-teal-100 hover:text-teal-900 focus:outline-none focus:ring-4 focus:ring-teal-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
