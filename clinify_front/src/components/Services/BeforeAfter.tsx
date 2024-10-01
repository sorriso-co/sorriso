import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsAltH } from "@fortawesome/free-solid-svg-icons";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterProps> = ({
  beforeImage,
  afterImage,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Handle the start of dragging
  const startDragging = () => {
    setIsDragging(true);
  };

  // Handle the end of dragging
  const stopDragging = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent | TouchEvent) => {
      if (!isDragging || !sliderRef.current) return;

      const sliderRect = sliderRef.current.getBoundingClientRect();
      const clientX =
        (event as MouseEvent).clientX ?? (event as TouchEvent).touches[0].clientX;
      const newPosition = ((clientX - sliderRect.left) / sliderRect.width) * 100;
      setSliderPosition(Math.max(0, Math.min(newPosition, 100)));
    };

    const handleMouseUp = () => stopDragging();

    // Add event listeners for mouse and touch movements
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleMouseMove, { passive: false });
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      // Remove event listeners on cleanup
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={sliderRef}
      className="relative w-full max-w-lg h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-xl mx-auto select-none"
      onMouseDown={startDragging}
      onTouchStart={startDragging}
      onTouchEnd={stopDragging}
      style={{ touchAction: "none" }} // Disable browser touch actions like scrolling
    >
      {/* Before Image */}
      <div className="absolute inset-0">
        <Image
          src={beforeImage}
          alt="Before"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="absolute inset-0 w-full h-full rounded-xl object-cover"
          priority={true}
        />
      </div>

      {/* After Image with clip path controlled by slider */}
      <div
        className="absolute inset-0 overflow-hidden rounded-xl"
        style={{
          clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
        }}
      >
        <Image
          src={afterImage}
          alt="After"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="absolute inset-0 w-full h-full rounded-xl object-cover"
          priority={true}
        />
      </div>

      {/* Draggable Slider Line */}
      <div
        className="absolute top-0 bottom-0 cursor-ew-resize"
        style={{
          left: `${sliderPosition}%`,
          transform: "translateX(-50%)",
        }}
      >
        <div className="relative h-full bg-teal-400 w-1 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-500 text-white p-1.5 rounded-full shadow-md">
          <FontAwesomeIcon icon={faArrowsAltH} size="sm" />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
