import React from "react";
import AboutUs from "@/components/AboutPage/AboutUs/AboutUs";
import Box from "@/components/AboutPage/AboutUs/BoxUs";
import YouTubeEmbed from "@/components/AboutPage/Youtube/YoutubeEmbed";
import Mission from "@/components/AboutPage/AboutUs/Mission";

const About = () => {
  return (
    <div>
      <link rel="canonical" href="https://sorriso.care/about" />
      <AboutUs />
      <Mission />
      <YouTubeEmbed />
      <Box />
    </div>
  );
};

export default About;
