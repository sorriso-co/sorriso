import React, { useState } from "react";
import Image from "next/image";
import VideoSlider from "./VideoSlider"; // Import the VideoSlider component

interface MediaItem {
  type: "image";
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
      type: "image",
      src: "/images/services/dr_i_pacijent.png",
      alt: "Patient and Doctor",
    },
  ];

  const [modalItem, setModalItem] = useState<MediaItem | null>(null);

  return (
    <>
      {/* Photo Grid */}
      {/* <div className="grid grid-cols-2 gap-4 lg:gap-6"> */}
      <div className="grid grid-cols-2 gap-4 lg:gap-6 justify-center mx-auto">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md group"
          >
            <Image
              src={item.src}
              alt={item.alt || "Gallery Image"}
              width={300}
              height={300}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}

        {/* Twitter (X) Video - Positioned Below Images */}
        {/* <div className="col-span-2 flex justify-center mt-4"> */}
        <div className="col-span-2 flex flex-col items-center justify-center mt-4">
          <div className="w-full max-w-[600px] min-h-[400px] flex items-center justify-center">
            <VideoSlider />
          </div>
        </div>
      </div>

      {/* Modal for Image Expansion */}
      {modalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative bg-white rounded-lg overflow-hidden max-w-lg w-full shadow-lg">
            <button
              className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full shadow-md"
              onClick={() => setModalItem(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {modalItem.type === "image" ? (
              <Image
                src={modalItem.src}
                alt={modalItem.alt || "Expanded Image"}
                width={600}
                height={400}
                className="object-contain w-full h-full"
              />
            ) : (
              <iframe
                title={
                  modalItem.type === "video" ? "Video Player" : "Instagram Post"
                }
                src={
                  modalItem.type === "video"
                    ? modalItem.src.replace("watch?v=", "embed/")
                    : modalItem.src
                }
                className="w-full h-80"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MediaGallery;
