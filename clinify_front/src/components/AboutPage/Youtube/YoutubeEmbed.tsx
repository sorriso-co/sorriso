"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "./YouTubeEmbed.css";

const YouTubeEmbed: React.FC = () => {
  const { t } = useTranslation('about');

  return (
    <div className="youtube-embed bg-gradient-to-r from-teal-700 to-teal-900">
      <h4 className="font-serif font-bold text-6xl text-teal-700  mb-20">
        {t('youtubeEmbed.title', { defaultValue: "Watch Our Transformation" })}
      </h4>
      <p className="font-serif text-lg text-white mb-8">
        {t('youtubeEmbed.description', { defaultValue: "Discover how Sorriso is transforming smiles and delivering world-class dental care." })}
      </p>
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/CoucS-fy2FI?si=qt3GdS64rwl0elN2&start=8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeEmbed;

