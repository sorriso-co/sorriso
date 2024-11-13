import React, { useState } from "react";
import Image from "next/image";

interface MediaItem {
  type: "image" | "video" | "instagram";
  src: string;
  alt?: string;
  thumbnail?: string; // Optional thumbnail for Instagram or YouTube
}

const MediaGallery: React.FC = () => {
  const mediaItems: MediaItem[] = [
    {
      type: "image",
      src: "/images/about_us_slide/zastolicom-2.webp",
      alt: "Patient Smiling 2",
    },

    {
      type: "video",
      src: "https://www.youtube.com/watch?v=ToRKxww1hCQ",
      thumbnail: "/images/about_us_slide/trisa2.webp", // Custom thumbnail
    },
    {
      type: "instagram",
      src: "https://www.instagram.com/reel/C_SafR-PwjH/?utm_source=ig_embed&amp;utm_campaign=loading",
      thumbnail: "/images/about_us_slide/holand.webp",
    },
  ];

  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const handlePlayVideo = (index: number) => {
    setPlayingVideo(index);
  };

  return (
    <div className="grid grid-cols-2 gap-4 lg:gap-6">
      {mediaItems.map((item, index) => (
        <div key={index} className="relative">
          {item.type === "image" ? (
            <Image
              src={item.src}
              alt={item.alt || "Gallery Image"}
              width={300}
              height={300}
              className="rounded-lg object-cover w-full h-full"
            />
          ) : item.type === "video" && item.src.includes("youtube.com") ? (
            // YouTube Thumbnail with Play Button Overlay
            <a
              href={item.src.replace("watch?v=", "embed/")}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-full h-full"
            >
              <Image
                src={item.thumbnail || "/images/default-youtube-thumbnail.jpg"}
                alt="YouTube Video"
                width={300}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white p-2 rounded-full shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-teal-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-5.197-3.099A1 1 0 008 9v6a1 1 0 001.555.832l5.197-3.099a1 1 0 000-1.664z"
                    />
                  </svg>
                </button>
              </div>
            </a>
          ) : item.type === "video" ? (
            <div className="relative w-full h-full">
              {playingVideo === index ? (
                <video
                  src={item.src}
                  controls
                  autoPlay
                  className="rounded-lg w-full h-full object-cover"
                />
              ) : (
                <>
                  <Image
                    src={item.thumbnail || "/images/icons/video-thumbnail.jpg"}
                    alt="Video Thumbnail"
                    width={300}
                    height={300}
                    className="rounded-lg object-cover w-full h-full"
                  />
                  <button
                    onClick={() => handlePlayVideo(index)}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-teal-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.752 11.168l-5.197-3.099A1 1 0 008 9v6a1 1 0 001.555.832l5.197-3.099a1 1 0 000-1.664z"
                      />
                    </svg>
                  </button>
                </>
              )}
            </div>
          ) : (
            // Instagram Thumbnail with Play Button Overlay
            <a
              href={item.src}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-full h-full"
            >
              <Image
                src={
                  item.thumbnail || "/images/default-instagram-thumbnail.jpg"
                }
                alt="Instagram Video"
                width={300}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white p-2 rounded-full shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-teal-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-5.197-3.099A1 1 0 008 9v6a1 1 0 001.555.832l5.197-3.099a1 1 0 000-1.664z"
                    />
                  </svg>
                </button>
              </div>
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default MediaGallery;
