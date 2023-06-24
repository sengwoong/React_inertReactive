import React from "react";
import { motion } from "framer-motion";
const variants = {
  hidden: { x: "100%", transition: { duration: 1.5 } },
  visible: { x: "50%" },
  whileHover: { scale: 1.1 },
};

function MotionScreen({ Visible, Write }) {
  return (
    <div>
      {Visible === Write && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          className=" mt-10 md:mt-0  md:pb-0  h-5/6 md:h-full  w-11/12 md:w-3/5 right-1/2  md:left-1 absolute text-9xl block md:ml-11 bg-green-500"
          whileHover={"whileHover"}
        >
          {Write}
        </motion.div>
      )}
    </div>
  );
}

export default MotionScreen;
