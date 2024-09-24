"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import FrontHero from "@/components/MainPage/FrontpageHero";
import Intro from "../components/MainPage/Intro";
import ServiceGrid from "@/components/MainPage/ServiceGrid";
import HowItWorks from "@/components/MainPage/HowItWorks";
import HaveItAll from "@/components/MainPage/HaveItAll";
import LanguageSwitcher from "@/components/MainPage/Language/LanguageSwitcher";
import WhatsAppLink from "@/components/Contact/WhatsApp";
import "../styles/global.css";

const Home: React.FC = () => {
  const { t } = useTranslation("common");
  const [isVisible, setIsVisible] = useState(true);

  // Scroll handler to track when user scrolls past the first component
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
      {/* SEO Meta Tags */}
      <Head>
        <title>{t("meta_home.title")}</title>
        <meta
          name="description"
          content={t("meta_home.description")}
        />
        <meta
          name="keywords"
          content={t("meta_home.keywords")}
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sorriso.care/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content={t("meta_home.og_title")}
        />
        <meta
          property="og:description"
          content={t("meta_home.og_description")}
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
          content={t("meta_home.twitter_title")}
        />
        <meta
          name="twitter:description"
          content={t("meta_home.twitter_description")}
        />
        <meta
          name="twitter:image"
          content="https://sorriso.care/images/front-hero.jpg"
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
        <div className="mt-20 lg:mt-32 mb-20 lg:mb-32 bg-transparent">
          <HowItWorks />
        </div>

        {/* Service Grid Section */}
        <div className="mt-20 lg:mt-32 mb-20 lg:mb-32 bg-transparent">
          <ServiceGrid />
        </div>

        {/* Have It All Section */}
        <div className="mt-20 lg:mt-32 mb-20 lg:mb-32 bg-transparent">
          <HaveItAll />
        </div>

        {/* WhatsApp Floating Button */}
        <WhatsAppLink />

        {/* Language Switcher */}
        {isVisible && <LanguageSwitcher />}
      </div>
    </>
  );
};

export default Home;
