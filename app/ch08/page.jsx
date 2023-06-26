"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import CountDate from "./CountDate.jsx";
import CountChar from "./CountChar.jsx";
import ImageBox from "./ImageBox.jsx";
import MovingImage from "./MovingImage.jsx";
import BackGoundAnimation from "./BackGoundAnimation.jsx";
function Page() {
  const [isHovered, setIsHovered] = useState(false);

  const leftCss = 10;

  const boxVariants = {
    hidden: { width: 0 }, // 숨겨진 상태일 때의 스타일
    visible: { width: "80px", transition: { duration: 1, delay: 0.5 } }, // 보여지는 상태일 때의 스타일 및 전환 효과 설정
  };

  return (
    <div>
      <div className="relative group h-screen w-screen">
        <div
          className={`absolute bg-red-400 left-${leftCss}  w-20 h-12 overflow-hidden`}
        ></div>

        <motion.div
          className={`absolute bg-white  left-${leftCss}   w-20 h-12`}
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        <div className={`absolute left-${leftCss}   z-20`}>
          <motion.div
            className=" inline-block"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            onHoverStart={() => setIsHovered(true)} // hover 시작 시 상태 변경
            onHoverEnd={() => setIsHovered(false)}
          >
            Hover me
          </motion.div>
        </div>
        <motion.div
          className={`box absolute top-3 left-${leftCss}   bottom-0  h-2 bg-red-500 z-10`}
          variants={boxVariants}
          initial="hidden" // 초기 상태를 hidden으로 설정
          animate={isHovered ? "visible" : "hidden"}
        ></motion.div>
        {isHovered && (
          <motion.div
            className={`absolute top-10 left-${leftCss}   z-20`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Text below
          </motion.div>
        )}
      </div>

      <CountDate></CountDate>

      <CountChar></CountChar>
      <ImageBox></ImageBox>
      <MovingImage></MovingImage>
      <BackGoundAnimation></BackGoundAnimation>
    </div>
  );
}

export default Page;
