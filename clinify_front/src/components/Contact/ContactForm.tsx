"use client";
import React, { useState, useRef, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTranslation } from "react-i18next";

const ContactForm: React.FC = () => {
  const { t } = useTranslation('common');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState("");
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);
    if (file) {
      formData.append("file", file);
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: formData,
      });

      if (response.status === 202) {
        setStatus(t('contactForm.success'));
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setFile(null);
        if (messageRef.current) {
          messageRef.current.style.height = "auto";
        }
      } else {
        const errorData = await response.json();
        setStatus(`${t('contactForm.failure')}: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus(t('contactForm.failure'));
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
    <form
      onSubmit={handleSubmit}
      className="space-y-10 bg-white p-8 rounded-lg shadow-lg"
    >
      <div>
        <label className="block text-teal-700 font-semibold">{t('contactForm.name')}</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-transform transform hover:scale-105"
          required
        />
      </div>
      <div>
        <label className="block text-teal-700 font-semibold">{t('contactForm.email')}</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-transform transform hover:scale-105"
          required
        />
      </div>
      <div>
        <label className="block text-teal-700 font-semibold">{t('contactForm.phone')}</label>
        <PhoneInput
          country={"us"}
          value={phone}
          onChange={(phone) => setPhone(phone)}
          inputClass="w-full px-3 py-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-transform transform hover:scale-105"
          containerClass="w-full"
        />
      </div>
      <div>
        <label className="block text-teal-700 font-semibold">{t('contactForm.message')}</label>
        <textarea
          ref={messageRef}
          value={message}
          onChange={handleMessageChange}
          placeholder={t('contactForm.messagePlaceholder')}
          className="w-full min-h-[120px] px-3 py-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-transform transform hover:scale-105 resize-none"
          required
        />
      </div>
      <div>
        <label className="block text-teal-700 font-semibold">
          {t('contactForm.upload')}
        </label>
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full px-3 py-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-transform transform hover:scale-105"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-transform transform hover:scale-105 shadow-md"
      >
        {t('contactForm.send')}
      </button>
      {status && <p className="text-center text-teal-700 mt-4">{status}</p>}
    </form>
  );
};

export default ContactForm;