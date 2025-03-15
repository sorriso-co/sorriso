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
      <head>
        <title>Sorriso Care | Smile Worth Flying For</title>
        <meta
          name="description"
          content="Discover affordable dental treatments in Montenegro with Sorriso Care. From veneers to implants, we provide world-class care tailored to your needs."
        />
        <meta
          name="keywords"
          content="
Cosmetic dentistry, Dental crown, Cavity, Montenegro, Tooth decay, Rotten teeth, Cavities in teeth, Veneers Turkey, Perfect smile, Veneers Colombia, Veneers Mexico, Veneers cost Mexico, Veneer cost, Veneers cost, Fly to Montenegro, Smile makeover, All-on-6, Cheap Dental Tourism, Affordable dental care, Dental Tourism Montenegro, Best dentist, All-on-4, Dental treatments, Fix my smile, Dental care, Perfect teeth, No insurance dental care near me, Dental care near me no insurance, Crooked teeth, How to fix my teeth, How much to fix my teeth, Wisdom teeth removal, No dental insurance, Teeth pain from wisdom teeth, Dentist near me, Affordable bridges for teeth, Impianti dentali costo, Quanto costa un impianto dentale, Faccette per denti, Ponte dentale, Rifarsi i denti, Dentisti in Croazia, Cliniche dentali Turchia, Cost for tooth implant, Dental implants, Full mouth dental implants, Teeth implants cost, Hair transplant Turkey, Dental bridge, Turkey teeth, Bad teeth, Teeth whitening, Dental crowns"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sorriso.care/" />
        <link rel="icon" href="/images/icons/icon.svg" type="image/x-icon" />
        <link
          rel="shortcut icon"
          href="/images/icons/icon.svg"
          type="image/x-icon"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          property="og:title"
          content="Sorriso Care | Smile Worth Flying For"
        />
        <meta
          property="og:description"
          content="Discover affordable dental treatments in Montenegro with Sorriso Care. From veneers to implants, we provide world-class care tailored to your needs."
        />
        <meta property="og:url" content="https://sorriso.care/" />

        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sorriso Care | Smile Worth Flying For"
        />
        <meta
          name="twitter:description"
          content="Discover affordable dental treatments in Montenegro with Sorriso Care. From veneers to implants, we provide world-class care tailored to your needs."
        />
      </head>
      <main>
        <div className="mb-20 lg:mb-32 bg-transparent">
          <FrontHero />
        </div>
        <div className="mt-20 lg:mt-32 mb-20 lg:mb-32 bg-transparent">
          <Intro />
        </div>
        <div className="mt-20 lg:mt-32 mb-20 lg:mb-32 bg-transparent">
          <HowItWorks />
        </div>
        <div className="mt-20 lg:mt-32 mb-20 lg:mb-32 bg-transparent">
          <ServiceGrid />
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
