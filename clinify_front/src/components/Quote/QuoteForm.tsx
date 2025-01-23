// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

// const ContactForm: React.FC = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");
//   const [file, setFile] = useState<File | null>(null);
//   const [status, setStatus] = useState("");
//   const messageRef = useRef<HTMLTextAreaElement>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("email", email);
//     formData.append("phone", phone);
//     formData.append("message", message);
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
//         setName("");
//         setEmail("");
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
//     <form
//       onSubmit={handleSubmit}
//       className="space-y-6 bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto sm:p-8"
//     >
//       <div>
//         <label className="block text-gray-700 font-semibold">Name</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="Your Name"
//           required
//         />
//       </div>
//       <div>
//         <label className="block text-gray-700 font-semibold">Email</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="Your Email"
//           required
//         />
//       </div>
//       <div>
//         <label className="block text-gray-700 font-semibold">Phone</label>
//         <PhoneInput
//           country={"us"}
//           value={phone}
//           onChange={(phone) => setPhone(phone)}
//           inputClass="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           containerClass="w-full"
//         />
//       </div>
//       <div>
//         <label className="block text-gray-700 font-semibold">Message</label>
//         <textarea
//           ref={messageRef}
//           value={message}
//           onChange={handleMessageChange}
//           placeholder="Describe your needs for dental treatment. For example, 'I need dental implants and X-rays to assess my condition.'"
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
//           required
//         />
//       </div>
//       <div>
//         <label className="block text-gray-700 font-semibold">Upload File</label>
//         <input
//           type="file"
//           onChange={handleFileChange}
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>
//       <button
//         type="submit"
//         className="w-full py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       >
//         Submit
//       </button>
//       {status && <p className="text-center text-gray-700 mt-4">{status}</p>}
//     </form>
//   );
// };

// export default ContactForm;
"use client";
import React, { useState, useRef, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState("");
  const [emailError, setEmailError] = useState("");
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (email !== confirmEmail) {
      setEmailError("Emails do not match. Please check again.");
      return;
    }
    setEmailError("");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);
    if (file) {
      formData.append("file", file);
    }

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        body: formData,
      });

      if (response.status === 202) {
        setStatus("Thank you for your message! We'll get back to you shortly.");
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
        setStatus(`Failed to send message: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Failed to send message. Please try again later.");
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
        Get Your Free Consultation
      </h1>
      <p className="text-center text-gray-700 mb-8">
        Fill out the form below and our team will reach out to you shortly.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto sm:p-8"
      >
        <div>
          <label className="block text-gray-700 font-semibold">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">
            Confirm Email
          </label>
          <input
            type="email"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            onPaste={(e) => {
              e.preventDefault();
              alert(
                "Copy-pasting is not allowed. Please type your email manually."
              );
            }}
            onCopy={(e) => e.preventDefault()}
            className={`w-full px-3 py-2 border ${
              emailError ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Confirm Your Email"
            required
          />
          {emailError && (
            <p className="text-red-500 text-sm mt-1">{emailError}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Phone</label>
          <PhoneInput
            country={"us"}
            value={phone}
            onChange={(phone) => setPhone(phone)}
            inputClass="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            containerClass="w-full"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Message</label>
          <textarea
            ref={messageRef}
            value={message}
            onChange={handleMessageChange}
            placeholder="Describe your needs for dental treatment. For example, 'I need dental implants and X-rays to assess my condition.'"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">
            Upload File
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
          Submit
        </button>
        {status && <p className="text-center text-gray-700 mt-4">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
