"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ClinicServicesHero from "@/components/Services/ClinicServicesHero";
import InternationalPatientWorkflow from "@/components/Services/OfferForClinics";
import DataSpeaks from "@/components/Services/DataSpeaks";
import WatchPromo from "@/components/Services/WatchPromo";

export default function ClinicsPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <ClinicServicesHero />
      <InternationalPatientWorkflow />
      <DataSpeaks />
      <WatchPromo />
    </div>
  );
}
