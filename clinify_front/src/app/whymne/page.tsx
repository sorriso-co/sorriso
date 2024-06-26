"use client";
import WhyMontenegro from "@/components/AboutPage/WhyMNE/intro";
import DentalTravelIntro from "@/components/AboutPage/WhyMNE/dentaltravel";
import MontenegroHighlights from "@/components/AboutPage/WhyMNE/Highlights";
import Montenegro from "../../components/AboutPage/WhyMNE/Montenegro";
import Vision from "../../components/AboutPage/WhyMNE/Vision";

const WhyMNE = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="bg-gradient-to-r from-teal-200 via-teal-500 to-teal-700 mb-0">
        <WhyMontenegro />
        <DentalTravelIntro />
        <Montenegro />
      </div>
      <div className="bg-teal-800 mb-0">
        <MontenegroHighlights />
      </div>
      <div className="bg-gradient-to-r from-teal-200 via-teal-500 to-teal-700 mb-0">
        <Vision />
      </div>
    </div>
  );
};

export default WhyMNE;
