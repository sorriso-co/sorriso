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
      type: "instagram",
      src: "https://www.youtube.com/embed/Ln9jn_djVww?si=sSX7sudrEFwtjOBv&amp;start=1",
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

        {/* 
          This extra div spans both columns (col-span-2).
          Put an arrow + text here to make it clear these are videos (or reels).
        */}
        <div className="col-span-2 flex flex-col items-center mt-3 space-y-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 511.999 511.999"
            // If you want, convert inline style to a Tailwind class or remove it:
            xmlSpace="preserve"
            // Adjust height/width to your liking:
            className="h-16 w-16 text-white"
          >
            <path
              style={{ fill: "#298983" }}
              d="M311.127 261.135c0-.19.009-.38.011-.57l-55.139-55.139-54.308 54.308c-.003.467-.013.932-.013 1.399 0 124.069 98.297 225.606 221.107 230.816V382.31c-62.416-5.061-111.658-57.475-111.658-121.175z"
            />
            <path
              transform="rotate(-134.999 151.837 204.74)"
              style={{ fill: "#a5f2e5" }}
              d="M97.526 131.569h108.62v146.339H97.526z"
            />
            <path
              style={{ fill: "#62d9c7" }}
              d="M356.266 124.032 256.182 23.947l-76.803 76.805L373.507 294.88l76.803-76.805-43.783-43.783a9.918 9.918 0 0 1 0-14.027l-36.233-36.233c-3.875 3.872-10.155 3.873-14.028 0z"
            />
            <path d="M373.506 318.825a9.916 9.916 0 0 0 7.014-2.906l90.832-90.832c3.874-3.874 3.874-10.155 0-14.027l-50.797-50.797c-3.874-3.874-10.155-3.874-14.027 0-3.874 3.874-3.874 10.155 0 14.027l43.783 43.783-76.803 76.805-194.129-194.127 76.803-76.805L356.266 124.03c3.874 3.875 10.155 3.874 14.027 0a9.918 9.918 0 0 0 0-14.027L263.195 2.906A9.914 9.914 0 0 0 256.182 0c-.061 0-.122.008-.183.009a9.879 9.879 0 0 0-7.196 2.896L40.648 211.061c-3.874 3.874-3.874 10.155 0 14.027l90.832 90.832c1.936 1.936 4.476 2.906 7.013 2.906s5.077-.968 7.014-2.906l36.973-36.973c9.168 130.045 117.886 233.052 250.224 233.052 5.478 0 9.919-4.441 9.919-9.919V372.792c0-5.478-4.441-9.919-9.919-9.919-48.691 0-89.483-34.392-99.411-80.153l33.2 33.2a9.915 9.915 0 0 0 7.013 2.905zm49.279 173.126c-122.81-5.208-221.107-106.747-221.107-230.816 0-.467.011-.932.013-1.399l54.308-54.308 55.139 55.139c-.001.19-.011.38-.011.57 0 63.699 49.24 116.112 111.657 121.176v109.638h.001zM138.493 294.879l-76.805-76.805 103.479-103.479 76.805 76.805-103.479 103.479z" />
          </svg>

          <p className="text-white text-base sm:text-lg font-serif font-semibold px-4 text-center">
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
