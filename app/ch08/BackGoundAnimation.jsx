import React, { useLayoutEffect, useRef } from "react";
import "./BackGoundAnimation.css";

function BackGoundAnimation() {
  const elementRefs = useRef([]);

  useLayoutEffect(() => {
    const elements = elementRefs.current;

    elements.forEach((element, index) => {
      element.style.animationDelay = `${index * 4 + 2}s`;
      element.classList.add("fade-out");
    });
  }, []);

  return (
    <div className="relative w-screen h-screen">
      <div
        ref={(el) => (elementRefs.current[2] = el)}
        className="absolute  h-screen bg-red-400 main_view_one "
      ></div>
      <div
        ref={(el) => (elementRefs.current[1] = el)}
        className="absolute w-screen h-screen bg-amber-400 main_view_two"
      ></div>
      <div
        ref={(el) => (elementRefs.current[0] = el)}
        className="absolute w-screen h-screen bg-green-400 main_view_three "
      ></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 bg-slate-50 w-96 h-96"></div>
    </div>
  );
}

export default BackGoundAnimation;
