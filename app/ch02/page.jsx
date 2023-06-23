"use client";

import React from "react";
import { motion } from "framer-motion";

class GgangCoding extends React.Component {
  state = {
    isMounted: false,
  };

  componentDidMount() {
    // 컴포넌트가 마운트되면 isMounted 상태를 true로 설정합니다.
    this.setState({ isMounted: true });
  }

  render() {
    const { isMounted } = this.state;

    // 컨테이너 요소의 애니메이션 변형 설정
    const containerVariants = {
      hidden: { opacity: 0 }, // 숨겨진 상태일 때의 스타일
      visible: { opacity: 1, transition: { duration: 1 } }, // 보여지는 상태일 때의 스타일 및 전환 효과 설정
    };

    // 이미지 요소의 애니메이션 변형 설정
    const imgVariants = {
      hidden: { opacity: 0, y: 50 }, // 숨겨진 상태일 때의 스타일
      visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }, // 보여지는 상태일 때의 스타일 및 전환 효과 설정
    };

    // 박스 요소의 애니메이션 변형 설정
    const boxVariants = {
      hidden: { width: "full" }, // 숨겨진 상태일 때의 스타일
      visible: { width: 0, transition: { duration: 1, delay: 0.5 } }, // 보여지는 상태일 때의 스타일 및 전환 효과 설정
    };

    return (
      <div className="wrap">
        <section className="tit_area">
          <article className="f_content">
            <motion.h2
              className="tit font-bold text-5xl"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              GGANG CODING
            </motion.h2>
            <motion.p
              className="txt font-bold text-3xl"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              애니메이션 가속도 처리방법
            </motion.p>

            <motion.figure
              className="img relative"
              variants={imgVariants}
              initial="hidden"
              animate={isMounted ? "visible" : "hidden"}
            >
              <motion.div
                className="box absolute top-0 bottom-0 left-0 w-full bg-white"
                variants={boxVariants}
              />
              <div className="bg-blue-600 w-96 h-96"></div>
            </motion.figure>
          </article>
        </section>
      </div>
    );
  }
}

export default GgangCoding;
