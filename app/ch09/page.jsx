"use client";

import React, { useLayoutEffect, useRef } from "react";

function StickyHeader() {
  const Curtain = useRef([]);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = Math.round(
        (100 -
          (window.scrollY /
            (document.documentElement.scrollHeight -
              document.documentElement.clientHeight)) *
            100) /
          2
      );

      const element = Curtain.current;

      element.forEach((element) => {
        element.style.width = `${scrollPercentage}%`;
      });
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-6000">
      <div className="sticky flex -top-32 pt-32">
        <div
          ref={(el) => (Curtain.current[0] = el)}
          className="absolute bg-black h-screen left-0"
          style={{ width: "50%" }}
        ></div>
        <div
          ref={(el) => (Curtain.current[1] = el)}
          className="absolute bg-black h-screen right-0"
          style={{ width: "50%" }}
        ></div>
      </div>
    </div>
  );
}

export default StickyHeader;
