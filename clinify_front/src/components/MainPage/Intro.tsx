// import React, { useState } from "react";
// import "aos/dist/aos.css";
// import { useTranslation } from "react-i18next";

// const Introduction: React.FC = () => {
//   const { t } = useTranslation("homepage");
//   const [email, setEmail] = useState("");
//   const [confirmEmail, setConfirmEmail] = useState(""); // New state for confirm email
//   const [phone, setPhone] = useState("");
//   const [emailError, setEmailError] = useState(""); // New state for email error
//   const [showIframe, setShowIframe] = useState(false); // State for iframe modal

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Check if emails match
//     if (email !== confirmEmail) {
//       setEmailError("Emails do not match. Please check again.");
//       return;
//     }
//     setEmailError("");

//     try {
//       const response = await fetch("/api/contact-info", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, confirmEmail, phone }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(
//           errorData.error || "Failed to submit contact information"
//         );
//       }

//       // Reset the form on success
//       setEmail("");
//       setConfirmEmail("");
//       setPhone("");
//       alert("Thank you for your interest! We will contact you soon.");
//     } catch (error) {
//       console.error("Submission error:", error);
//       alert(
//         "An error occurred while submitting your contact information. Please try again."
//       );
//     }
//   };

//   const handleBookCallClick = () => {
//     if (typeof window !== "undefined" && window.gtag) {
//       window.gtag("event", "book_call_click", {
//         event_category: "engagement",
//         event_label: t("contactMain.buttonText"),
//         value: 1,
//       });
//     }
//     setShowIframe(true); // Show the iframe modal
//   };

//   return (
//     <section className="container mx-auto flex flex-col lg:flex-row items-center py-16 px-6 lg:px-12 space-y-10 lg:space-y-0 lg:space-x-12 bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg shadow-lg">
//       {/* Text Section */}
//       <div className="lg:w-1/2 text-center lg:text-left">
//         <h1 className="font-serif text-teal-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
//           {t("introduction.title", { defaultValue: "Your Next Dental Trip" })}
//         </h1>
//         <h4 className="font-serif text-2xl sm:text-3xl text-teal-700 mb-6">
//           {t("introduction.subtitle", {
//             defaultValue: "Veni Vidi Vici with Sorriso",
//           })}
//         </h4>
//         <p className="font-sans text-lg sm:text-xl text-teal-800 mb-8">
//           {t("introduction.description", {
//             defaultValue:
//               "Discover exceptional dental care combined with an unforgettable travel experience. Let Sorriso guide you through a journey to a brighter, healthier smile while exploring the beauty and culture of Montenegro.",
//           })}
//         </p>
//         <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
//           <a
//             href="/pricing"
//             className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 sm:py-4 px-8 rounded-full font-semibold shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-teal-300"
//           >
//             View Our Pricing
//           </a>
//           {/* Replaced Get a Quote Button with Book a Free Consultation Button */}
//           <button
//             onClick={handleBookCallClick}
//             className="bg-gradient-to-r from-teal-800 to-teal-900 text-white py-3 sm:py-4 px-8 rounded-full font-semibold shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-teal-500"
//           >
//             Book a Free Consultation
//           </button>
//         </div>
//       </div>

//       {/* Contact Form Section */}
//       <div className="lg:w-1/2 flex justify-center lg:justify-end">
//         <div className="bg-gradient-to-r from-teal-700 to-teal-800 p-8 sm:p-10 rounded-lg shadow-md text-white w-full max-w-md">
//           <h3 className="text-3xl sm:text-4xl font-bold mb-6">
//             {t("introduction.joinUsTitle", { defaultValue: "Join Us" })}
//           </h3>
//           <p className="text-lg sm:text-xl mb-6">
//             {t("introduction.joinUsDescription", {
//               defaultValue:
//                 "Enter your contact details, and we'll get in touch with you to start your journey to a perfect smile.",
//             })}
//           </p>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="email" className="block text-white text-lg mb-2">
//                 {t("introduction.emailLabel", {
//                   defaultValue: "Email Address",
//                 })}
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full p-3 rounded-lg text-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>

//             {/* Confirm Email Field */}
//             <div>
//               <label
//                 htmlFor="confirmEmail"
//                 className="block text-white text-lg mb-2"
//               >
//                 Confirm Email
//               </label>
//               <input
//                 type="email"
//                 id="confirmEmail"
//                 className={`w-full p-3 rounded-lg text-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-500 ${
//                   emailError ? "border-red-500" : ""
//                 }`}
//                 value={confirmEmail}
//                 onChange={(e) => setConfirmEmail(e.target.value)}
//                 onPaste={(e) => {
//                   e.preventDefault();
//                   alert(
//                     "Copy-pasting is not allowed. Please type your email manually."
//                   );
//                 }}
//                 onCopy={(e) => e.preventDefault()}
//                 placeholder="Confirm your email"
//                 required
//               />
//               {emailError && (
//                 <p className="text-red-500 text-sm mt-1">{emailError}</p>
//               )}
//             </div>

//             <div>
//               <label htmlFor="phone" className="block text-white text-lg mb-2">
//                 {t("introduction.phoneLabel", { defaultValue: "Phone Number" })}
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 className="w-full p-3 rounded-lg text-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 placeholder="Enter your phone number"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-white text-teal-800 py-3 px-6 rounded-full font-semibold shadow-md transition-transform duration-300 hover:bg-teal-100 hover:text-teal-900 focus:outline-none focus:ring-4 focus:ring-teal-300"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Fullscreen Google Calendar Iframe Modal */}
//       {showIframe && (
//         <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
//           <div className="bg-white rounded-3xl w-11/12 sm:w-10/12 md:w-3/4 lg:w-2/3 xl:w-1/2 h-4/5 relative shadow-2xl overflow-hidden">
//             <button
//               className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
//               aria-label="Close modal"
//               onClick={() => setShowIframe(false)}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-8 w-8"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//             <iframe
//               src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Z-M-9vG8Fy6-4ZN5H_Ck3v_NOXdIMFFZt9eXxffaFzhL3PeswZYOyjiCd4kdqp276PXFXooxj?gv=true"
//               className="w-full h-full"
//               title="Book a Free Consultation"
//               aria-label="Book a Free Consultation"
//             ></iframe>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Introduction;
import React, { useState } from "react";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Introduction: React.FC = () => {
  const { t } = useTranslation("homepage");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState(""); // New state for confirm email
  const [emailError, setEmailError] = useState(""); // New state for email error
  const [showIframe, setShowIframe] = useState(false); // State for iframe modal

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if emails match
    if (email !== confirmEmail) {
      setEmailError("Emails do not match. Please check again.");
      return;
    }
    setEmailError("");

    try {
      const response = await fetch("/api/contact-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, confirmEmail }), // Removed phone from the body
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || "Failed to submit contact information"
        );
      }

      // Reset the form on success
      setEmail("");
      setConfirmEmail("");
      alert("Thank you for your interest! We will contact you soon.");
    } catch (error) {
      console.error("Submission error:", error);
      alert(
        "An error occurred while submitting your contact information. Please try again."
      );
    }
  };

  const handleBookCallClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "book_call_click", {
        event_category: "engagement",
        event_label: t("contactMain.buttonText"),
        value: 1,
      });
    }
    setShowIframe(true); // Show the iframe modal
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
          {/* Replaced Get a Quote Button with Book a Free Consultation Button */}
          <button
            onClick={handleBookCallClick}
            className="bg-gradient-to-r from-teal-800 to-teal-900 text-white py-3 sm:py-4 px-8 rounded-full font-semibold shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-teal-500"
          >
            Book a Free Consultation
          </button>
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
                {t("introduction.emailLabel", {
                  defaultValue: "Email Address",
                })}
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

            {/* Confirm Email Field */}
            <div>
              <label
                htmlFor="confirmEmail"
                className="block text-white text-lg mb-2"
              >
                Confirm Email
              </label>
              <input
                type="email"
                id="confirmEmail"
                className={`w-full p-3 rounded-lg text-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                  emailError ? "border-red-500" : ""
                }`}
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
                onPaste={(e) => {
                  e.preventDefault();
                  alert(
                    "Copy-pasting is not allowed. Please type your email manually."
                  );
                }}
                onCopy={(e) => e.preventDefault()}
                placeholder="Confirm your email"
                required
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-1">{emailError}</p>
              )}
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

      {/* Fullscreen Google Calendar Iframe Modal */}
      {showIframe && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl w-11/12 sm:w-10/12 md:w-3/4 lg:w-2/3 xl:w-1/2 h-4/5 relative shadow-2xl overflow-hidden">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
              aria-label="Close modal"
              onClick={() => setShowIframe(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Z-M-9vG8Fy6-4ZN5H_Ck3v_NOXdIMFFZt9eXxffaFzhL3PeswZYOyjiCd4kdqp276PXFXooxj?gv=true"
              className="w-full h-full"
              title="Book a Free Consultation"
              aria-label="Book a Free Consultation"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Introduction;
