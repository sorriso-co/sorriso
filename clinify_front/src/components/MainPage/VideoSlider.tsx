import React, { useState, useEffect, useRef } from "react";
import "./loader.css";

const VideoSlider = () => {
  const [height, setHeight] = useState("200px");
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth >= 768) {
        setHeight("400px");
      } else {
        setHeight("200px");
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.onload = () => {
        // Force loader to stay for at least 1 second
        setTimeout(() => setIsLoading(false), 1000);
      };
    }
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "600px",
        height,
        margin: "auto",
      }}
    >
      {/* Always keep the iframe rendered and sized correctly. */}
      <iframe
        ref={iframeRef}
        title="Gumlet video player"
        src="https://play.gumlet.io/embed/67d059c9cd9a5420ba31c175?preload=false&autoplay=true&loop=true&background=false&disable_player_controls=false"
        style={{
          border: "none",
          width: "100%",
          height: height,
          position: "relative",
        }}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
      />

      {/* Loader overlay that stays for at least 1 second */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-teal-700 z-10">
          <div className="loader absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <div className="loader-outter"></div>
            <div className="loader-inner"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoSlider;
