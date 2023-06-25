import React from "react";
import { motion } from "framer-motion";

import "./styles.css";

function Page() {
  const boxVariants = {
    hidden: { width: "full" }, // 숨겨진 상태일 때의 스타일
    visible: { width: 0, transition: { duration: 1, delay: 0.5 } }, // 보여지는 상태일 때의 스타일 및 전환 효과 설정
  };

  return (
    <div>
      <a
        href="#"
        className="relative py-6 px-12 border-2 border-indigo-600 group text-indigo-600 left-32 top-32 block"
        style={{ width: "300px", height: "100px" }}
      >
        <span className="absolute text-4xl uppercase font-light tracking-wider top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Hover me
        </span>{" "}
        <div
          className="absolute inset-0 py-6 px-12 bg-indigo-600 text-white
        motion-safe:transition-[clip-path] motion-safe:duration-500 
        ease-out [clip-path:circle(30%_at_100%_100%)]
        group-hover:[clip-path:circle(170%_at_100%_100%)]"
        >
          <span className="absolute text-4xl uppercase font-light tracking-wider top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Hover me
          </span>
        </div>
      </a>
      <a
        href="#"
        className="relative py-6 px-12 border-2 border-indigo-600 group text-indigo-600 left-32 top-32 block"
        style={{ width: "300px", height: "100px" }}
      >
        <span className="absolute text-4xl uppercase font-light tracking-wider top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Hover me
        </span>{" "}
        <div
          className="absolute inset-0 py-6 px-12 bg-indigo-600 text-white
          
    motion-safe:transition-[clip-path] motion-safe:duration-500 
    ease-out [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]
    group-hover:[clip-path:polygon(0_0,100%_0%,100%_100%,0_100%)]"
        >
          <span className="absolute text-4xl uppercase font-light tracking-wider top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Hover me
          </span>
        </div>
      </a>

      <div className="relative  group">
        <div className="absolute">
          <span> Hover me</span>
        </div>
        <div className="absolute">
          <motion.div
            className="box absolute top-0 bottom-0 left-0 w-full bg-white"
            variants={boxVariants}
          ></motion.div>
        </div>
      </div>
    </div>
  );
}

export default Page;

// relative py-6 px-12 border-2 border-indigo-600 group text-indigo-600:

// relative: 상대적인 위치를 설정합니다.
// py-6: 위아래로 6단위의 패딩을 설정합니다.
// px-12: 좌우로 12단위의 패딩을 설정합니다.
// border-2: 2단위의 테두리를 설정합니다.
// border-indigo-600: 인디고 색상(형식: 색상-명도)의 테두리를 설정합니다.
// group: 해당 요소의 자식 요소에 대해 그룹 효과를 적용합니다.
// text-indigo-600: 인디고 색상(형식: 색상-명도)의 텍스트 색상을 설정합니다.
// text-4xl uppercase font-light tracking-wider:

// text-4xl: 글자 크기를 4배로 설정합니다.
// uppercase: 대문자로 변환합니다.
// font-light: 가벼운 글꼴을 사용합니다.
// tracking-wider: 글자 간격을 넓게 설정합니다.
// absolute inset-0 py-6 px-12 bg-indigo-600 text-white motion-safe:transition-[clip-path] motion-safe:duration-500 ease-out [clip-path:circle(20%_at_120%_120%)] group-hover:[clip-path:circle(170%_at_120%_120%)]:

// absolute: 절대적인 위치를 설정합니다.
// inset-0: 모든 방향의 여백을 0으로 설정합니다.
// py-6: 위아래로 6단위의 패딩을 설정합니다.
// px-12: 좌우로 12단위의 패딩을 설정합니다.
// bg-indigo-600: 인디고 색상(형식: 색상-명도)의 배경색을 설정합니다.
// text-white: 흰색의 텍스트 색상을 설정합니다.

// motion-safe:transition-[clip-path]: 클립 패스 속성에 대한 모션 전환 효과를 적용합니다.
// motion-safe:duration-500: 모션 전환 효과의 지속 시간을 500ms로 설정합니다.
// ease-out: 완만하게 전환되는 이징 함수를 사용합니다.
// clip-path:circle(20%_at_120%_120%): 원형 클립 패스를 생성하여 20% 크기의 원을 표시합니다.
// group-hover:[clip-path:circle(170%_at_120%_120%)]: 그룹이 호버되었을 때 170% 크기의 원형 클립 패스를 생성하여 효과를 적용합니다.
// 위 주석을 통해 각 속성이 어떤 역할을 하는지 이해할 수 있습니다.
