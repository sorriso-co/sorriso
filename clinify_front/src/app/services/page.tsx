"use client";
import React from "react";
import ServiceHero from "../../components/Services/ServiceHero";
import PackagesSection from "../../components/Pricing/PackagesSection";
import CallToAction from "../../components/Services/CallToAction";
import ExperienceSection from "../../components/Services/OurExperience";
const Services: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <ServiceHero />
      <ExperienceSection />
      <PackagesSection />
      <CallToAction />
    </div>
  );
};

export default Services;
