import React from "react";
import RootLayout from "../layout";
import AboutUs from "@/components/AboutPage/AboutUs/AboutUs";
import Box from "@/components/AboutPage/AboutUs/BoxUs";
import YouTubeEmbed from "@/components/AboutPage/Youtube/YoutubeEmbed";
import Mission from "@/components/AboutPage/AboutUs/Mission";

const About = () => {
  return (
    <RootLayout title="Sorriso - About Us">
      <div>
        <AboutUs />
        <Mission />
        <YouTubeEmbed />
        <Box />
      </div>
    </RootLayout>
  );
};

export default About;
