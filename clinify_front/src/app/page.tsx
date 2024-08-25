"use client";
import Intro from "../components/MainPage/Intro";
import Pricing from "../components/MainPage/Pricing";
import Slideshow from "../components/MainPage/Slideshow";
import ServiceGrid from "@/components/MainPage/ServiceGrid";
import HowItWorks from "@/components/MainPage/HowItWorks";
import HaveItAll from "@/components/MainPage/HaveItAll";
import "../styles/global.css";
import RootLayout from "./layout";

const Home: React.FC = () => {
  return (
    <RootLayout title="Sorriso - Affordable Dental Tourism">
      <div>
        <Slideshow />
        <Intro />
        <HowItWorks />
        <ServiceGrid />
        <Pricing />
        <HaveItAll />
      </div>
    </RootLayout>
  );
};

export default Home;
