"use client";
import Intro from "../components/MainPage/Intro";
import Slideshow from "../components/MainPage/Slideshow";
import ServiceGrid from "@/components/MainPage/ServiceGrid";
import HowItWorks from "@/components/MainPage/HowItWorks";
import HaveItAll from "@/components/MainPage/HaveItAll";
import "../styles/global.css";

const Home: React.FC = () => {
  return (
    <div>
      <Slideshow />
      <Intro />
      <HowItWorks />
      <ServiceGrid />
      <HaveItAll />
    </div>
  );
};

export default Home;
