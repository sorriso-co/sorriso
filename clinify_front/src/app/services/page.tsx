"use client";
import React from "react";
import ServiceHero from "../../components/Services/ServiceHero";
import ServiceGrid from "@/components/MainPage/ServiceGrid";
import PackagesSection from "../../components/Pricing/PackagesSection";
import CallToAction from "../../components/Services/CallToAction";
import ExperienceSection from "../../components/Services/OurExperience";
const Services: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <ServiceHero />
      <ServiceGrid />
      <ExperienceSection />
      <PackagesSection />
      <CallToAction />
    </div>
  );
};


export default Services;
