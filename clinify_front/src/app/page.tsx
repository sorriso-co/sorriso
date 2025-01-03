"use client";

import React, { useEffect, useState } from "react";
import FrontHero from "@/components/MainPage/FrontpageHero";
import Intro from "../components/MainPage/Intro";
import ServiceGrid from "@/components/MainPage/ServiceGrid";
import HowItWorks from "@/components/MainPage/HowItWorks";
import HaveItAll from "@/components/MainPage/HaveItAll";
import LanguageSwitcher from "@/components/MainPage/Language/LanguageSwitcher";
import WhatsAppLink from "@/components/Contact/WhatsApp";
import FAQ from "@/components/MainPage/FAQ/FAQ";
import FlightMap from "@/components/MainPage/Maps/FlightMap";
import SavingsChart from "@/components/MainPage/Chart/SavingsChart";
import Different from "@/components/MainPage/ContactUs/Different";
import PopUp from "@/components/MainPage/PopUp/PopUp"; // Import the Popup component
import "../styles/global.css";

const Home: React.FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Handle popup visibility logic
  useEffect(() => {
    const popupDismissed = localStorage.getItem("popupDismissed");

    if (!popupDismissed) {
      setIsPopupVisible(true);
    }
  }, []);

  const handlePopupClose = () => {
    localStorage.setItem("popupDismissed", "true");
    setIsPopupVisible(false);
  };

  // Scroll handler for LanguageSwitcher visibility
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <head>
        <title>Sorriso Care | Your Destination for Dental Tourism</title>
        <meta
          name="description"
          content="Discover affordable dental treatments in Montenegro with Sorriso Care. From veneers to implants, we provide world-class care tailored to your needs."
        />
        <meta
          name="keywords"
          content="impianti dentali costo, quanto costa un impianto dentale, faccette per denti, ponte dentale, rifarsi i denti, dentisti in croazia, cliniche dentali turchia, veneers turkey, cost for tooth implant, dental implants, full mouth dental implants, teeth implants cost, hair transplant turkey, smile makeover, Montenegro, fly to Montenegro, dental bridge, Turkey teeth, New Year, Cavity, bad teeth, cosmetic dentistry, teeth whitening, dental crowns"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sorriso.care/" />
        <link rel="icon" href="/images/icons/icon.svg" type="image/x-icon" />
        <link rel="shortcut icon" href="/images/icons/icon.svg" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          property="og:title"
          content="Sorriso Care | Your Destination for Dental Tourism"
        />
        <meta
          property="og:description"
          content="Discover affordable dental treatments in Montenegro with Sorriso Care. From veneers to implants, we provide world-class care tailored to your needs."
        />
        <meta property="og:url" content="https://sorriso.care/" />
        <meta
          property="og:image"
          content="https://sorriso.care/images/front-hero.jpg"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sorriso Care | Your Destination for Dental Tourism"
        />
        <meta
          name="twitter:description"
          content="Discover affordable dental treatments in Montenegro with Sorriso Care. From veneers to implants, we provide world-class care tailored to your needs."
        />
        <meta
          name="twitter:image"
          content="https://sorriso.care/images/front-hero.jpg"
        />
      </head>

      <main>
        {/* Hero Section */}
        <div id="hero-section" className="mb-20 lg:mb-32 bg-transparent">
          <FrontHero />
        </div>

        {/* Intro Section */}
        <div className="mt-20 lg:mt-32 mb-20 lg:mb-32 bg-transparent">
          <Intro />
        </div>

        {/* How It Works Section */}
        <div
          id="how-it-works-section"
          className="mt-20 lg:mt-32 mb-20 lg:mb-32 bg-transparent"
        >
          <HowItWorks />
        </div>

        {/* Service Grid Section */}
        <div className="mt-20 lg:mt-32 mb-20 lg:mb-32 bg-transparent">
          <ServiceGrid />
        </div>

        {/* Why Are We Different Section */}
        <div className="mt-20 lg:mt-32 mb-20 lg:mb-32 bg-transparent">
          <Different />
        </div>

        {/* Flight Map Section */}
        <div className="mt-20 lg:mt-32 mb-20 lg:mb-32 bg-transparent">
          <FlightMap />
        </div>

        {/* Savings Chart Section */}
        <div className="mt-20 lg:mt-32 mb-20 lg:mb-32 bg-transparent">
          <SavingsChart />
        </div>

        {/* FAQ Section */}
        <div className="mt-20 lg:mt-32 mb-20 lg:mb-32 bg-transparent">
          <FAQ />
        </div>

        {/* Have It All Section */}
        <div className="mt-20 lg:mt-32 mb-20 lg:mb-32 bg-transparent">
          <HaveItAll />
        </div>

        {/* WhatsApp Floating Button */}
        <WhatsAppLink />

        {/* Language Switcher */}
        {isVisible && <LanguageSwitcher />}

        {/* Popup */}
        {isPopupVisible && <PopUp show={isPopupVisible} handleClose={handlePopupClose} />}
      </main>
    </>
  );
};

export default Home;
