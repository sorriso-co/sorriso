"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import FrontHero from "@/components/MainPage/FrontpageHero";
import Intro from "../components/MainPage/Intro";
import ServiceGrid from "@/components/MainPage/ServiceGrid";
import HowItWorks from "@/components/MainPage/HowItWorks";
import HaveItAll from "@/components/MainPage/HaveItAll";
import LanguageSwitcher from "@/components/MainPage/Language/LanguageSwitcher";
import WhatsAppLink from "@/components/Contact/WhatsApp";
import FAQ from "@/components/MainPage/FAQ/FAQ";
import PopUp from "@/components/MainPage/PopUp/PopUp";
import FlightMap from "@/components/MainPage/Maps/FlightMap";
import SavingsChart from "@/components/MainPage/Chart/SavingsChart";
import "../styles/global.css";

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Check if the popup was previously dismissed
  useEffect(() => {
    const popupDismissed = localStorage.getItem("popupDismissed");

    // If not dismissed, show the popup
    if (!popupDismissed) {
      setIsPopupVisible(true);
    }

    // Scroll handler to track when user scrolls past the first component
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

  const handlePopupClose = () => {
    // Mark the popup as dismissed in local storage
    localStorage.setItem("popupDismissed", "true");
    setIsPopupVisible(false);
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Sorriso Care | Your Destination for Dental Tourism</title>
        <meta
          name="description"
          content="Discover affordable dental treatments in Montenegro with Sorriso Care. From veneers to implants, we provide world-class care tailored to your needs."
        />
        <meta
          name="keywords"
          content="impianti dentali costo, quanto costa un impianto dentale, faccette per denti, ponte dentale, rifarsi i denti, dentisti in croazia, cliniche dentali turchia, veneers turkey, cost for tooth implant, dental implants, full mouth dental implants, teeth implants cost, hair transplant turkey, smile makeover, Montenegro, fly to Montenegro, dental bridge"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sorriso.care/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Open Graph Meta Tags */}
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

        {/* Twitter Card Meta Tags */}
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

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Sorriso Care",
              url: "https://sorriso.care/",
              logo: "https://sorriso.care/images/logo.png",
              description: "Discover affordable dental treatments in Montenegro with Sorriso Care. From veneers to implants, we provide world-class care tailored to your needs.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "bb Gavra Vukovića",
                addressLocality: "Podgorica",
                addressCountry: "Montenegro",
                postalCode: "81000",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+382 60 664 668",
                contactType: "Customer Service",
              },
              image: "https://sorriso.care/images/front-hero.jpg",
              sameAs: [
                "https://www.facebook.com/sorrisocare",
                "https://www.instagram.com/sorriso_care/",
                "https://www.linkedin.com/company/sorriso-care",
              ],
            }),
          }}
        />
      </Head>

      {/* Page Content */}
      <div>
        {/* Hero Section with additional spacing */}
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

        {/* PopUp */}
        {isPopupVisible && <PopUp show={isPopupVisible} handleClose={handlePopupClose} />}
      </div>
    </>
  );
};

export default Home;
