import React from "react";
import { motion } from "framer-motion";

const KlickRotate = () => {
  const handleClick = () => {
    // 클릭 모션 그래픽을 정의
    const clickAnimation = {
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 20,
      },
    };

    // 클릭 시 모션 그래픽 적용
    return (
      <motion.div onClick={handleClick} whileTap={clickAnimation}>
        클릭하세요
      </motion.div>
    );
  };

  return <div>{handleClick()}</div>;
};

export default KlickRotate;
