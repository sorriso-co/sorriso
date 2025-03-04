import React, { useState } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import "./loader.css";

const VideoSlider: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full h-full overflow-hidden rounded-lg shadow-md relative">
      {/* Loader: Shows until video is loaded */}
      {isLoading && (
        <div className="loader absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="loader-outter"></div>
          <div className="loader-inner"></div>
        </div>
      )}

      <div className="w-full flex justify-center">
        <div className="w-full max-w-[600px]">
          <TwitterTweetEmbed
            tweetId="1887278581857865921"
            options={{ width: "100%", align: "center" }}
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoSlider;
