"use client";
import React, { useEffect, useState } from "react";
import FrontHero from "@/components/MainPage/FrontpageHero";
import Intro from "../components/MainPage/Intro";
import ServiceGrid from "@/components/MainPage/ServiceGrid";
import HowItWorks from "@/components/MainPage/HowItWorks";
import LanguageSwitcher from "@/components/MainPage/Language/LanguageSwitcher";
import WhatsAppLink from "@/components/Contact/WhatsApp";
import FAQ from "@/components/MainPage/FAQ/FAQ";
import SavingsChart from "@/components/MainPage/Chart/SavingsChart";
import Different from "@/components/MainPage/ContactUs/Different";
import "../styles/global.css";

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector("#hero-section")?.clientHeight;
      if (window.scrollY > (heroHeight || 0)) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <head>{/* ... metadata unchanged ... */}</head>
      <main>
        <div id="hero-section" className="mb-20 lg:mb-32 bg-transparent">
          <FrontHero />
        </div>
        <div className="mt-20 lg:mt-32 mb-20 lg:mb-32 bg-transparent">
          <Intro />
        </div>
        <div
          id="how-it-works-section"
          className="mt-20 lg:mt-32 mb-20 lg:mb-32 bg-transparent"
        >
          <HowItWorks />
        </div>
        <div className="mt-20 lg:mt-32 mb-20 lg:mb-32 bg-transparent">
          <ServiceGrid />
        </div>
        <div className="mt-20 lg:mt-32 mb-20 lg:mb-32 bg-transparent">
          <Different />
        </div>
        <div className="mt-20 lg:mt-32 mb-20 lg:mb-32 bg-transparent">
          <SavingsChart />
        </div>
        <div className="mt-20 lg:mt-32 mb-20 lg:mb-32 bg-transparent">
          <FAQ />
        </div>
        <WhatsAppLink />
        {isVisible && <LanguageSwitcher />}
      </main>
    </>
  );
};

export default Home;
