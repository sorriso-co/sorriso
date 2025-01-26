import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface MediaItem {
  type: "image" | "video" | "instagram";
  src: string;
  alt?: string;
  thumbnail?: string;
}
const MediaGallery: React.FC = () => {
  const { t } = useTranslation("homepage");
  const mediaItems: MediaItem[] = [
    {
      type: "image",
      src: "/images/about_us_slide/zastolicom-2.webp",
      alt: "Patient Smiling 2",
    },
    {
      type: "video",
      src: "https://www.youtube.com/embed/Qgi6h-8Vpvk?si=t5q4vFjG5ze7vhQp",
      thumbnail: "/images/services/dr_i_pacijent.png",
    },
    {
      type: "video",
      src: "https://www.youtube.com/watch?v=ToRKxww1hCQ",
      thumbnail: "/images/about_us_slide/trisa2.webp",
    },
    {
      type: "video",
      src: "https://www.youtube.com/embed/Ln9jn_djVww?si=sSX7sudrEFwtjOBv&amp;start=2",
      thumbnail: "/images/about_us_slide/holand.webp",
    },
  ];

  const [modalItem, setModalItem] = useState<MediaItem | null>(null);

  return (
    <>
      {/* Your 2x2 grid */}
      <div className="grid grid-cols-2 gap-4 lg:gap-6">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md group"
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={item.alt || "Gallery Image"}
                width={300}
                height={300}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <>
                <Image
                  src={item.thumbnail || "/images/default-thumbnail.jpg"}
                  alt={item.type === "video" ? "Video Thumbnail" : "Instagram"}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                  onClick={() => setModalItem(item)}
                />
                {/* Hover “play” icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50">
                  <button
                    className="bg-white p-3 rounded-full shadow-lg"
                    onClick={() => setModalItem(item)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-teal-700"
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
              </>
            )}
          </div>
        ))}

        <div className="col-span-2 flex flex-col items-center mt-3 space-y-2">
          {/* Use Next.js Image component to load the SVG */}
          <div className="h-16 w-16 animate-bounce">
            {" "}
            {/* Add bounce animation here */}
            <Image
              src="/images/icons/up-arrow.svg" // Path to your SVG file
              alt="Up Arrow"
              width={64} // Adjust width to match your design
              height={64} // Adjust height to match your design
              className="text-white" // Add any additional styling here
            />
          </div>

          <p className="text-white text-base text-xl font-serif font-semibold px-4 text-center">
            {t("transformationsPrompt", {
              defaultValue: "See Our Transformations",
            })}
          </p>
        </div>
      </div>

      {/* Video/Instagram Modal */}
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
                    ? // Quick embed transform:
                      modalItem.src.replace("watch?v=", "embed/")
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
