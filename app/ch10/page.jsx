"use client";

import React, { useLayoutEffect, useRef } from "react";
import TextComponent from "./TextComponent";
function Page() {
  const BoxView = useRef([]);
  const TextView = useRef([]);
  let TextTop;
  let TextBottom;
  let TextYSetting = 140;
  useLayoutEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = Math.round(
        (window.scrollY /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight)) *
          100
      );

      const elements = BoxView.current;
      const elementspercentage = 100 / elements.length;

      elements.forEach((_, idx) => {
        const translateX = -224 * (idx - 1);
        const lowerBound = elementspercentage * idx;
        const upperBound = elementspercentage * (idx + 1);

        if (scrollPercentage > lowerBound && scrollPercentage <= upperBound) {
          elements.forEach((element) => {
            element.style.transform = `translateX(${translateX}px)`;
          });
        }
      });

      const textElements = TextView.current; // Assuming TextView.current is an array of text elements
      const thresholds = [0, 10, 20, 33, 40, 50, 60, 70, 80, 90]; // Thresholds for scroll percentages

      TextTop =
        TextView.current[9].getBoundingClientRect().top + window.scrollY;
      TextBottom = TextTop + TextView.current[9].offsetHeight;
      // console.log(TextTop[0]);
      console.log(TextBottom / 9);

      // console.log(TextBottom);
      textElements.forEach((element, idx) => {
        if (scrollPercentage >= thresholds[idx]) {
          element.style.color = "white";
        } else {
          element.style.color = "black";
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "3000px" }}>
      <divtext className="float-left w-1/2">
        <divli className="flex flex-col justify-center items-center bg-red-500 w-full ">
          <TextComponent TextView={TextView}></TextComponent>
        </divli>
      </divtext>

      <divbox className="sticky top-0 pt-12 float-right w-1/2">
        <div>
          <div className="relative w-full left-1/2 -translate-x-1/4 ">
            <div className=" w-56 h-56 bg-white z-20 overflow-hidden ">
              <div className=" flex w-screen z-10">
                <div
                  className=" w-56 h-56  bg-red-400 transition-all duration-200"
                  ref={(el) => (BoxView.current[1] = el)}
                ></div>
                <div
                  className=" w-56 h-56 bg-blue-500 transition-all duration-200"
                  ref={(el) => (BoxView.current[2] = el)}
                ></div>
                <div
                  className=" w-56 h-56 bg-green-600 transition-all duration-200"
                  ref={(el) => (BoxView.current[3] = el)}
                ></div>
                <div
                  className=" w-56 h-56 bg-sky-500 transition-all duration-200"
                  ref={(el) => (BoxView.current[4] = el)}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </divbox>
    </div>
  );
}

export default Page;
