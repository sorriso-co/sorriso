"use client";
import React from "react";
import ServiceHero from "../../components/Services/ServiceHero";
import PackagesSection from "../../components/Pricing/PackagesSection";
import CallToAction from "../../components/Services/CallToAction";
import ExperienceSection from "../../components/Services/OurExperience";
import RootLayout from "../layout";
const Services: React.FC = () => {
  return (
    <RootLayout title="Sorriso - Dental Services">
      <div className="overflow-x-hidden">
        <ServiceHero />
        <ExperienceSection />
        <PackagesSection />
        <CallToAction />
      </div>
    </RootLayout>
  );
};

export default Services;
