"use client";
import React, { useState } from "react";
import MotionWriting from "./MotionWriting";
import MotionScreen from "./MotionScreen";
import { motion } from "framer-motion";
// 바로부모에 flex 가있어애하고 다른 컴포넌트 들어오면 그크기를 제외하고 가장크게 가져옵니다.
// 클릭 마다 모션이 다르게하기위하여 이렇게 설계하였습니다. 디비에서 들고와서해도좋을것같습니다.
// 사이즈가 일정이상

// <motion.div
// initial="hidden"
// animate="visible"
// variants={variants}
// className=" mt-10 md:mt-0  md:pb-0  h-5/6 md:h-full  w-11/12 md:w-3/5 right-1/2  md:left-1 absolute text-9xl block md:ml-11 bg-green-500"
// whileHover={{ scale: 1.1 }}
// >
const variants = {
  hidden: { x: "100%", transition: { duration: 2 } },
  visible: { x: "0%" },
};

function MotionIntero() {
  const [Visible, setVisible] = useState("PO");
  return (
    <nav className="flex-grow ">
      <ul className="relative flex flex-col h-full  justify-around ">
        <div className="z-10 md:h-full   flex  md:flex-col justify-around ">
          <MotionWriting
            Write={"PO"}
            setVisible={setVisible}
            Visible={Visible}
          ></MotionWriting>
          <MotionWriting
            Write={"MO"}
            setVisible={setVisible}
            Visibl={Visible}
          ></MotionWriting>
          <MotionWriting
            Write={"TO"}
            setVisible={setVisible}
            Visible={Visible}
          ></MotionWriting>
        </div>
        <div className="md:absolute md:top-0  min:top-10 md:right-0 h-full w-screen z-0flex justify-center items-center">
          <MotionScreen Visible={Visible} Write={"PO"}></MotionScreen>
          <MotionScreen Visible={Visible} Write={"MO"}></MotionScreen>
          <MotionScreen Visible={Visible} Write={"TO"}></MotionScreen>
        </div>
      </ul>
    </nav>
  );
}

export default MotionIntero;
