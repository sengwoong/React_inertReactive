import React, { useState } from "react";
import { motion } from "framer-motion";
//밖에   const [Visible, setVisible] = useState(""); 을 보고 판단해야함
// 적은글 무엇을실행시킬지로직 멀보여줄지 Visible 를 결정함
function MotionWriting({ Write, setVisible, Visible }) {
  const handleClick = () => {
    setVisible(Write);
    console.log("Write");
    console.log(Write);
    console.log("Visible");
    console.log(Visible);
  };

  const variants = {
    hidden: { x: "10%", transition: { duration: 0.5 }, opacity: 0 },
    visible: { x: "0%", opacity: 1 },
  };

  return (
    <li>
      <motion.div
        onClick={handleClick}
        className="md:text-9xl text-4xl inline-block md:ml-11 h-full text-white bg-black"
        initial="hidden"
        animate="visible"
        variants={variants}
        whileHover={{ scale: 1.1 }}
      >
        {Write}
      </motion.div>
    </li>
  );
}

export default MotionWriting;
