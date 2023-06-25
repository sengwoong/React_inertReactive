"use client";
import React, { useEffect, useRef, useState } from "react";

const ScrollAnimation = () => {
  const screen3Ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { top } = screen3Ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top <= windowHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="h-screen bg-gray-100" ref={screen3Ref}>
        <h1 className="text-4xl font-bold text-center py-20">Screen 3</h1>
      </div>
      <div
        className={`h-screen transition-transform duration-500 ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h1 className="text-4xl font-bold text-center py-20">Moving Screen</h1>
      </div>
    </div>
  );
};

export default ScrollAnimation;
