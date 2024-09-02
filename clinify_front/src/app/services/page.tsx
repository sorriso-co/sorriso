"use client";
import React from "react";
import ServiceHero from "../../components/Services/ServiceHero";
import PackagesSection from "../../components/Pricing/PackagesSection";
import ExperienceSection from "../../components/Services/OurExperience";
const Services: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <ServiceHero />
      <ExperienceSection />
      <PackagesSection />
    </div>
  );
};

export default Services;
