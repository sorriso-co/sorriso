import React, { useState, useRef } from "react";
import "./loader.css"; // Ensure this file exists and contains styles

const VideoSlider: React.FC = () => {
  const videoSources = [
    // "https://www.youtube.com/embed/6CPQbBnwcZ8?modestbranding=1&rel=0&autohide=1&mute=1&autoplay=1&playsinline=1&controls=0",
    "https://www.youtube.com/embed/OO-xO4cvqg0?si=AN2WmUuy6AENpVu8&modestbranding=1&rel=0&autohide=1&autoplay=1&mute=1&playsinline=1&controls=0",
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Function to unmute video using postMessage API
  const unmuteVideo = () => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage(
        '{"event":"command","func":"unMute","args":""}',
        "*"
      );
      setIsMuted(false);
    }
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-md mt-6 relative">
      {/* Loader: Shows until video is loaded */}
      {isLoading && (
        <div className="loader absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="loader-outter"></div>
          <div className="loader-inner"></div>
        </div>
      )}

      <div className="video-container">
        <iframe
          ref={iframeRef}
          src={videoSources[0] + "&enablejsapi=1"} // Enable JavaScript API
          title="Video"
          allow="autoplay; encrypted-media"
          allowFullScreen
          loading="lazy"
          onLoad={handleVideoLoad} // Hide loader when video is loaded
        ></iframe>

        {/* Unmute Button - Positioned in the bottom-left corner */}
        {isMuted && (
          <button
            className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded-full"
            onClick={unmuteVideo}
          >
            🔊 Unmute
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoSlider;
