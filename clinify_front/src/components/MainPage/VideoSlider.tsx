// import React, { useState } from "react";
// import { TwitterTweetEmbed } from "react-twitter-embed";
// import "./loader.css";

// const VideoSlider: React.FC = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   return (
//     <div className="w-full h-full overflow-hidden rounded-lg shadow-md relative">
//       {/* Loader: Shows until video is loaded */}
//       {isLoading && (
//         <div className="loader absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//           <div className="loader-outter"></div>
//           <div className="loader-inner"></div>
//         </div>
//       )}

//       <div className="w-full flex justify-center">
//         <div className="w-full max-w-[600px]">
//           <TwitterTweetEmbed
//             tweetId="1887278581857865921"
//             options={{ width: "100%", align: "center" }}
//             onLoad={() => setIsLoading(false)}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoSlider;

// import React, { useState, useEffect } from "react";

// const VideoSlider = () => {
//   const [height, setHeight] = useState("200px");

//   useEffect(() => {
//     const updateHeight = () => {
//       if (window.innerWidth >= 768) {
//         // Medium and larger screens
//         setHeight("400px");
//       } else {
//         // Small screens
//         setHeight("200px");
//       }
//     };

//     updateHeight(); // initial render height
//     window.addEventListener("resize", updateHeight); // Update on window resize

//     return () => window.removeEventListener("resize", updateHeight);
//   }, []);

//   return (
//     <div
//       style={{
//         position: "relative",
//         width: "100%",
//         maxWidth: "600px",
//         height: height, // Dynamically updated
//         margin: "auto",
//         zIndex: 10,
//       }}
//     >
//       <iframe
//         title="Gumlet video player"
//         src="https://play.gumlet.io/embed/67d059c9cd9a5420ba31c175?t1=1741709800&t2=1741709359444?preload=false&autoplay=false&loop=false&background=false&disable_player_controls=false"
//         style={{
//           border: "none",
//           width: "100%",
//           height: "100%",
//           position: "relative",
//         }}
//         allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
//       ></iframe>
//     </div>
//   );
// };

// export default VideoSlider;

// import React, { useState, useEffect, useRef } from "react";
// import "./loader.css"; // Ensure you have your loader styles

// const VideoSlider = () => {
//   const [height, setHeight] = useState("200px");
//   // const [isLoading, setIsLoading] = useState(true);
//   const iframeRef = useRef<HTMLIFrameElement>(null);

//   useEffect(() => {
//     const updateHeight = () => {
//       if (window.innerWidth >= 768) {
//         setHeight("400px");
//       } else {
//         setHeight("200px");
//       }
//     };

//     updateHeight();
//     window.addEventListener("resize", updateHeight);

//     return () => window.removeEventListener("resize", updateHeight);
//   }, []);

//   // Check when the iframe loads
//   // useEffect(() => {
//   //   if (iframeRef.current) {
//   //     iframeRef.current.onload = () => {
//   //       setIsLoading(false);
//   //     };
//   //   }
//   // }, []);

//   return (
//     <div
//       style={{
//         position: "relative",
//         width: "100%",
//         maxWidth: "600px",
//         height: height,
//         margin: "auto",
//         zIndex: 10,
//       }}
//     >
//       {/* Loader */}
//       {/* {isLoading && (
//         <div className="loader absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//           <div className="loader-outter"></div>
//           <div className="loader-inner"></div>
//         </div>
//       )} */}

//       <iframe
//         ref={iframeRef}
//         title="Gumlet video player"
//         src="https://play.gumlet.io/embed/67d059c9cd9a5420ba31c175?preload=false&autoplay=true&loop=true&background=false&disable_player_controls=false"
//         style={{
//           border: "none",
//           width: "100%",
//           height: "100%",
//           position: "relative",
//           // display: isLoading ? "none" : "block",
//         }}
//         allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
//       ></iframe>
//     </div>
//   );
// };

// export default VideoSlider;

// import React, { useState, useEffect, useRef } from "react";
// import "./loader.css";

// const VideoSlider = () => {
//   const [height, setHeight] = useState("200px");
//   const [isLoading, setIsLoading] = useState(true);
//   const iframeRef = useRef<HTMLIFrameElement>(null);

//   useEffect(() => {
//     const updateHeight = () => {
//       if (window.innerWidth >= 768) {
//         setHeight("400px");
//       } else {
//         setHeight("200px");
//       }
//     };
//     updateHeight();
//     window.addEventListener("resize", updateHeight);
//     return () => window.removeEventListener("resize", updateHeight);
//   }, []);

//   // Once the iframe loads, remove the loader.
//   useEffect(() => {
//     if (iframeRef.current) {
//       iframeRef.current.onload = () => {
//         setIsLoading(false);
//       };
//     }
//   }, []);

//   return (
//     <div
//       style={{
//         position: "relative",
//         width: "100%",
//         maxWidth: "600px",
//         height,
//         margin: "auto",
//         zIndex: 2,
//       }}
//     >
//       {/* Always keep the iframe rendered and sized correctly. */}
//       <iframe
//         ref={iframeRef}
//         title="Gumlet video player"
//         src="https://play.gumlet.io/embed/67d059c9cd9a5420ba31c175?preload=false&autoplay=false&loop=false&background=false&disable_player_controls=false"
//         style={{
//           border: "none",
//           width: "100%",
//           height: "100%",
//           position: "relative",
//         }}
//         allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
//       />

//       {/* Loader overlay that covers the iframe */}
//       {isLoading && (
//         <div className="loader absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent z-1">
//           <div className="loader-outter"></div>
//           <div className="loader-inner"></div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VideoSlider;
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
        src="https://play.gumlet.io/embed/67d059c9cd9a5420ba31c175?preload=false&autoplay=true&loop=false&background=false&disable_player_controls=false"
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
