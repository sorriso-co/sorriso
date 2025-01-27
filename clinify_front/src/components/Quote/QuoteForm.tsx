// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

// const ContactForm: React.FC = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [confirmEmail, setConfirmEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");
//   const [file, setFile] = useState<File | null>(null);
//   const [status, setStatus] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [token, setToken] = useState("");
//   const messageRef = useRef<HTMLTextAreaElement>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (email !== confirmEmail) {
//       setEmailError("Emails do not match. Please check again.");
//       return;
//     }
//     setEmailError("");

//     // Prepend gift card code to the message
//     const fullMessage = `Message from customer with gift code: ${token}\n\n${message}`;

//     const formData = new FormData();
//     formData.append("token", token);
//     formData.append("name", name);
//     formData.append("email", email);
//     formData.append("phone", phone);
//     formData.append("message", fullMessage);
//     if (file) {
//       formData.append("file", file);
//     }

//     try {
//       const response = await fetch("/api/quote", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.status === 202) {
//         setStatus("Thank you for your message! We'll get back to you shortly.");
//         setToken("");
//         setName("");
//         setEmail("");
//         setConfirmEmail("");
//         setPhone("");
//         setMessage("");
//         setFile(null);
//         if (messageRef.current) {
//           messageRef.current.style.height = "auto";
//         }
//       } else {
//         const errorData = await response.json();
//         setStatus(`Failed to send message: ${errorData.error}`);
//       }
//     } catch (error) {
//       console.error("Error sending email:", error);
//       setStatus("Failed to send message. Please try again later.");
//     }
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setFile(e.target.files[0]);
//     }
//   };

//   const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setMessage(e.target.value);
//     if (messageRef.current) {
//       messageRef.current.style.height = "auto";
//       messageRef.current.style.height = messageRef.current.scrollHeight + "px";
//     }
//   };

//   useEffect(() => {
//     if (messageRef.current) {
//       messageRef.current.style.height = messageRef.current.scrollHeight + "px";
//     }
//   }, []);

//   return (
//     <div className="max-w-lg mx-auto">
//       <h1 className="text-center text-3xl font-serif text-teal-600 mb-6">
//         Get Your Free Consultation
//       </h1>
//       <p className="text-center text-gray-700 mb-8">
//         Fill out the form below and our team will reach out to you shortly.
//         <br />
//         <span className="font-semibold text-teal-600">
//           Your gift card code is on the back of the card in a teal-colored box.
//         </span>
//       </p>

//       <form
//         onSubmit={handleSubmit}
//         className="space-y-6 bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto sm:p-8"
//       >
//         <div>
//           <label className="block text-gray-700 font-semibold">
//             Gift Card Code (Optional)
//           </label>
//           <input
//             type="text"
//             value={token}
//             onChange={(e) => setToken(e.target.value)}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter your gift card code"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 font-semibold">Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Your Name"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 font-semibold">Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Your Email"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 font-semibold">
//             Confirm Email
//           </label>
//           <input
//             type="email"
//             value={confirmEmail}
//             onChange={(e) => setConfirmEmail(e.target.value)}
//             onPaste={(e) => {
//               e.preventDefault();
//               alert(
//                 "Copy-pasting is not allowed. Please type your email manually."
//               );
//             }}
//             onCopy={(e) => e.preventDefault()}
//             className={`w-full px-3 py-2 border ${
//               emailError ? "border-red-500" : "border-gray-300"
//             } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
//             placeholder="Confirm Your Email"
//             required
//           />
//           {emailError && (
//             <p className="text-red-500 text-sm mt-1">{emailError}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-gray-700 font-semibold">Phone</label>
//           <PhoneInput
//             country={"us"}
//             value={phone}
//             onChange={(phone) => setPhone(phone)}
//             inputClass="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             containerClass="w-full"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 font-semibold">Message</label>
//           <textarea
//             ref={messageRef}
//             value={message}
//             onChange={handleMessageChange}
//             placeholder="Describe your needs for dental treatment. For example, 'I need dental implants and X-rays to assess my condition.'"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 font-semibold">
//             Upload File
//           </label>
//           <input
//             type="file"
//             onChange={handleFileChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           Submit
//         </button>
//         {status && <p className="text-center text-gray-700 mt-4">{status}</p>}
//       </form>
//     </div>
//   );
// };

// export default ContactForm;
"use client";
import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactForm: React.FC = () => {
  const { t } = useTranslation("common");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState("");
  const [emailError, setEmailError] = useState("");
  const [token, setToken] = useState("");
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (email !== confirmEmail) {
      setEmailError(t("contactForm.emailMismatchError"));
      return;
    }
    setEmailError("");

    // Prepend gift card code to the message
    const fullMessage = `${t(
      "contactForm.messagePrefix"
    )} ${token}\n\n${message}`;

    const formData = new FormData();
    formData.append("token", token);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", fullMessage);
    if (file) {
      formData.append("file", file);
    }

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        body: formData,
      });

      if (response.status === 202) {
        setStatus(t("contactForm.successMessage"));
        setToken("");
        setName("");
        setEmail("");
        setConfirmEmail("");
        setPhone("");
        setMessage("");
        setFile(null);
        if (messageRef.current) {
          messageRef.current.style.height = "auto";
        }
      } else {
        const errorData = await response.json();
        setStatus(`${t("contactForm.failureMessage")}: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus(t("contactForm.errorMessage"));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    if (messageRef.current) {
      messageRef.current.style.height = "auto";
      messageRef.current.style.height = messageRef.current.scrollHeight + "px";
    }
  };

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.style.height = messageRef.current.scrollHeight + "px";
    }
  }, []);

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-center text-3xl font-serif text-teal-600 mb-6">
        {t("contactForm.title")}
      </h1>
      <p className="text-center text-gray-700 mb-8">
        {t("contactForm.description")}
        <br />
        <span className="font-semibold text-teal-600">
          {t("contactForm.giftCardHint")}
        </span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto sm:p-8"
      >
        <div>
          <label className="block text-gray-700 font-semibold">
            {t("contactForm.giftCardLabel")}
          </label>
          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={t("contactForm.giftCardPlaceholder")}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">
            {t("contactForm.nameLabel")}
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={t("contactForm.namePlaceholder")}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">
            {t("contactForm.emailLabel")}
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={t("contactForm.emailPlaceholder")}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">
            {t("contactForm.confirmEmailLabel")}
          </label>
          <input
            type="email"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            onPaste={(e) => {
              e.preventDefault();
              alert(t("contactForm.copyPasteAlert"));
            }}
            onCopy={(e) => e.preventDefault()}
            className={`w-full px-3 py-2 border ${
              emailError ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder={t("contactForm.confirmEmailPlaceholder")}
            required
          />
          {emailError && (
            <p className="text-red-500 text-sm mt-1">{emailError}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">
            {t("contactForm.phoneLabel")}
          </label>
          <PhoneInput
            country={"us"}
            value={phone}
            onChange={(phone) => setPhone(phone)}
            inputClass="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            containerClass="w-full"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">
            {t("contactForm.messageLabel")}
          </label>
          <textarea
            ref={messageRef}
            value={message}
            onChange={handleMessageChange}
            placeholder={t("contactForm.messagePlaceholder")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">
            {t("contactForm.uploadFileLabel")}
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {t("contactForm.submitButton")}
        </button>
        {status && <p className="text-center text-gray-700 mt-4">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
