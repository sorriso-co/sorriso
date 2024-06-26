import React, {
  useState,
  useRef,
  useEffect,
  MouseEvent,
  TouchEvent,
} from "react";
import Image from "next/legacy/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsAltH } from "@fortawesome/free-solid-svg-icons";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
}

const BeforeAfter: React.FC<BeforeAfterProps> = ({
  beforeImage,
  afterImage,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleSliderMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const newSliderPosition = (offsetX / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, newSliderPosition)));
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (e.buttons !== 1) return; // Only proceed if the left mouse button is pressed
    handleSliderMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (e.touches.length !== 1) return; // Only proceed if a single touch is present
    handleSliderMove(e.touches[0].clientX);
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    handleSliderMove(e.clientX);
    window.addEventListener(
      "mousemove",
      handleMouseMove as unknown as EventListener
    );
    window.addEventListener(
      "mouseup",
      handleMouseUp as unknown as EventListener
    );
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    if (e.touches.length !== 1) return;
    handleSliderMove(e.touches[0].clientX);
    window.addEventListener(
      "touchmove",
      handleTouchMove as unknown as EventListener
    );
    window.addEventListener(
      "touchend",
      handleTouchEnd as unknown as EventListener
    );
  };

  const handleMouseUp = () => {
    window.removeEventListener(
      "mousemove",
      handleMouseMove as unknown as EventListener
    );
    window.removeEventListener(
      "mouseup",
      handleMouseUp as unknown as EventListener
    );
  };

  const handleTouchEnd = () => {
    window.removeEventListener(
      "touchmove",
      handleTouchMove as unknown as EventListener
    );
    window.removeEventListener(
      "touchend",
      handleTouchEnd as unknown as EventListener
    );
  };

  useEffect(() => {
    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove as unknown as EventListener
      );
      window.removeEventListener(
        "mouseup",
        handleMouseUp as unknown as EventListener
      );
      window.removeEventListener(
        "touchmove",
        handleTouchMove as unknown as EventListener
      );
      window.removeEventListener(
        "touchend",
        handleTouchEnd as unknown as EventListener
      );
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="relative w-full max-w-lg md:max-w-xl lg:max-w-2xl h-48 sm:h-64 md:h-72 lg:h-80 overflow-x-hidden rounded-3xl mx-auto"
      ref={sliderRef}
    >
      <Image
        src={beforeImage}
        layout="fill"
        objectFit="cover"
        alt="Before"
        className="absolute top-0 left-0 w-full h-full"
      />
      <Image
        src={afterImage}
        layout="fill"
        objectFit="cover"
        alt="After"
        className="absolute top-0 left-0 w-full h-full"
        style={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
        }}
      />
      <div
        className="absolute top-0 left-0 w-0.5 h-full bg-white pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      />
      <div
        className="absolute top-0 left-0 w-4 h-4 bg-white rounded-full shadow pointer-events-none flex items-center justify-center"
        style={{ left: `calc(${sliderPosition}% - 0.5rem)` }}
      >
        <FontAwesomeIcon icon={faArrowsAltH} className="text-teal-500" />
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full cursor-col-resize"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      />
    </div>
  );
};

export default BeforeAfter;
