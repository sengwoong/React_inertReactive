"use client";

import React from "react";
import { motion } from "framer-motion";

const GgangCharacter = () => {
  return (
    <div>
      <div>
        <motion.figure className="ch_body">
          <motion.div className="bg-red-400 w-96 h-96 " />
        </motion.figure>
        <motion.figure
          className="fixed top-8 right-44"
          animate={{
            rotate: [-30, 4],
            transition: {
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            },
          }}
        >
          <motion.div className="bg-red-600 w-96 h-96 " />
        </motion.figure>
      </div>
    </div>
  );
};

export default GgangCharacter;
