"use client";
import React from "react";
import ContactSection from "../../components/Contact/ContactSection";
import RootLayout from "../layout";

const Contact: React.FC = () => {
  return (
    <RootLayout title="Sorriso - Contact Us">
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <ContactSection />
        </div>
      </div>
    </RootLayout>
  );
};

export default Contact;
