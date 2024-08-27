// "use client";
// import React, { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import LanguageSwitcher from "../MainPage/Language/LanguageSwitcher";

// const Slideshow: React.FC = () => {
//   const { t } = useTranslation("homepage");

//   const slides = [
//     {
//       image: "/images/slide_main/zastolicom.webp",
//       text: t("slideshow.slide1", {
//         defaultValue: "FREE Online Consultations",
//       }),
//     },
//     {
//       image: "/images/slide_main/zastolicom2.webp",
//       text: t("slideshow.slide2", { defaultValue: "Save up to 70%" }),
//     },
//     {
//       image: "/images/slide_main/operacija.webp",
//       text: t("slideshow.slide3", { defaultValue: "Enjoy more" }),
//     },
//     {
//       image: "/images/slide_main/smile2.webp",
//       text: t("slideshow.slide4", {
//         defaultValue: "Spend Your Vacation Smiling",
//       }),
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [showLanguageSwitcher, setShowLanguageSwitcher] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setShowLanguageSwitcher(false);
//       } else {
//         setShowLanguageSwitcher(true);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [slides.length]);

//   return (
//     <section className="relative h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[85vh] xl:h-[95vh] overflow-hidden">
//       <div className="absolute inset-0 w-full h-full">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//               index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
//             }`}
//             style={{
//               backgroundImage: `url(${slide.image})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//             }}
//           >
//             <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
//             <div className="absolute inset-0 flex items-end justify-center pb-10 sm:pb-16 md:pb-20 lg:pb-32 xl:pb-36">
//               <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-bold p-4 text-center">
//                 {slide.text}
//               </h1>
//             </div>
//           </div>
//         ))}
//       </div>
//       {showLanguageSwitcher && (
//         <div className="fixed bottom-4 right-4 z-50">
//           <LanguageSwitcher />
//         </div>
//       )}
//     </section>
//   );
// };

// export default Slideshow;
// "use client";
// import React, { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import LanguageSwitcher from "../MainPage/Language/LanguageSwitcher";

// const Slideshow: React.FC = () => {
//   const { t } = useTranslation("homepage");

//   const slides = [
//     {
//       image: "/images/slide_main/zastolicom.webp",
//       text: t("slideshow.slide1", {
//         defaultValue: "FREE Online Consultations",
//       }),
//     },
//     {
//       image: "/images/slide_main/zastolicom2.webp",
//       text: t("slideshow.slide2", { defaultValue: "Save up to 70%" }),
//     },
//     {
//       image: "/images/slide_main/operacija.webp",
//       text: t("slideshow.slide3", { defaultValue: "Enjoy more" }),
//     },
//     {
//       image: "/images/slide_main/smile2.webp",
//       text: t("slideshow.slide4", {
//         defaultValue: "Spend Your Vacation Smiling",
//       }),
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [showLanguageSwitcher, setShowLanguageSwitcher] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setShowLanguageSwitcher(false);
//       } else {
//         setShowLanguageSwitcher(true);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [slides.length]);

//   return (
//     <section className="relative h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[85vh] xl:h-[95vh] overflow-hidden">
//       <div className="absolute inset-0 w-full h-full">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-0 ease-in-out ${
//               index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
//             }`}
//             style={{
//               backgroundImage:
//                 index === currentSlide ? `url(${slide.image})` : "none", // Only load the image when the slide is active
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//             }}
//           >
//             <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
//             <div className="absolute inset-0 flex items-end justify-center pb-10 sm:pb-16 md:pb-20 lg:pb-32 xl:pb-36">
//               <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-bold p-4 text-center">
//                 {slide.text}
//               </h1>
//             </div>
//           </div>
//         ))}
//       </div>
//       {showLanguageSwitcher && (
//         <div className="fixed bottom-4 right-4 z-50">
//           <LanguageSwitcher />
//         </div>
//       )}
//     </section>
//   );
// };

// export default Slideshow;
"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../MainPage/Language/LanguageSwitcher";

const Slideshow: React.FC = () => {
  const { t } = useTranslation("homepage");

  const slides = [
    {
      image: "/images/slide_main/zastolicom.webp",
      imageSmall: "/images/slide_main/zastolicom-small.webp",
      imageMedium: "/images/slide_main/zastolicom-medium.webp",
      text: t("slideshow.slide1", {
        defaultValue: "FREE Online Consultations",
      }),
    },
    {
      image: "/images/slide_main/zastolicom2.webp",
      imageSmall: "/images/slide_main/zastolicom2-small.webp",
      imageMedium: "/images/slide_main/zastolicom2-medium.webp",
      text: t("slideshow.slide2", { defaultValue: "Save up to 70%" }),
    },
    {
      image: "/images/slide_main/operacija.webp",
      imageSmall: "/images/slide_main/operacija-small.webp",
      imageMedium: "/images/slide_main/operacija-medium.webp",
      text: t("slideshow.slide3", { defaultValue: "Enjoy more" }),
    },
    {
      image: "/images/slide_main/smile2.webp",
      imageSmall: "/images/slide_main/smile2-small.webp",
      imageMedium: "/images/slide_main/smile2-medium.webp",
      text: t("slideshow.slide4", {
        defaultValue: "Spend Your Vacation Smiling",
      }),
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showLanguageSwitcher, setShowLanguageSwitcher] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowLanguageSwitcher(false);
      } else {
        setShowLanguageSwitcher(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Preload current, next, and previous images
  useEffect(() => {
    const preloadImage = (src: string) => {
      const img = new Image();
      img.src = src;
    };

    const nextSlide = (currentSlide + 1) % slides.length;
    const prevSlide = (currentSlide - 1 + slides.length) % slides.length;

    preloadImage(slides[currentSlide].image);
    preloadImage(slides[nextSlide].image);
    preloadImage(slides[prevSlide].image);
  }, [currentSlide, slides]);

  return (
    <section className="relative h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[85vh] xl:h-[95vh] overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <picture>
              <source
                srcSet={`${slide.imageSmall} 480w, ${slide.imageMedium} 800w, ${slide.image} 1200w`}
              />
              <img
                src={slide.image}
                alt={slide.text}
                className="w-full h-full object-cover"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
            <div className="absolute inset-0 flex items-end justify-center pb-10 sm:pb-16 md:pb-20 lg:pb-32 xl:pb-36">
              <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-bold p-4 text-center">
                {slide.text}
              </h1>
            </div>
          </div>
        ))}
      </div>
      {showLanguageSwitcher && (
        <div className="fixed bottom-4 right-4 z-50">
          <LanguageSwitcher />
        </div>
      )}
    </section>
  );
};

export default Slideshow;
