"use client";
import React, { useRef, useEffect, useState } from "react";

function Page() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const scrollBody = useRef(null);
  console.log(scrollPercent);
  useEffect(() => {
    const handleScroll = () => {
      const scrollRealHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const percentScroll = Math.round((scrollTop / scrollRealHeight) * 100);
      setScrollPercent(percentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={scrollBody} className="relative  left-0 top-0 h-6000 w-full ">
      <div>내용</div>

      <div
        className={`${
          scrollPercent < 25 ? "opacity-100 " : "opacity-0 "
        }  top-0 left-0 absolute h-full w-full bg-black transition-opacity duration-500 `}
      ></div>
      <div
        className={`${
          scrollPercent >= 25 && scrollPercent < 50
            ? "opacity-100 "
            : "opacity-0 "
        }  absolute top-0 left-0 h-full w-full bg-blue-400 transition-opacity duration-500`}
      ></div>
      <div
        className={`${
          scrollPercent >= 50 && scrollPercent < 75
            ? "opacity-100 "
            : "opacity-0  "
        }  absolute h-full top-0 left-0 w-full bg-red-400 transition-opacity duration-500`}
      ></div>
      <div
        className={`${
          scrollPercent >= 75 && scrollPercent < 102
            ? "opacity-100 "
            : "opacity-0  "
        }  absolute h-full top-0 left-0 w-full bg-yellow-500 transition-opacity duration-500`}
      ></div>

      <div className="motion_ggang">
        <figure className="ch_body">
          {/* 몸 */}
          <div className="bg-blue-600 fixed h-40 w-32 top-12 left-7"></div>
        </figure>
        {/* 손 */}
        <figure className="ch_hand_right">
          <div className="bg-red-600  fixed h-40 w-32 top-12 left-14"></div>
        </figure>
      </div>
      {/* 달 */}
      <figure className="motion_moon">
        <div className="bg-yellow-600 fixed h-40 w-32 top-12 right-3"></div>
      </figure>
    </div>
  );
}

export default Page;
