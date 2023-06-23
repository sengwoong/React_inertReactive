"use client";

import React, { useRef, useEffect } from "react";

function Page() {
  const progressTextRef = useRef(null);
  const progressBar = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = Math.round(
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
          100
      );
      progressTextRef.current.innerText = `${scrollPercentage}%`;
      progressBar.current.style = `width: ${scrollPercentage}%`;
    };

    //     window.scrollY: scrollY는 window 객체의 속성으로,
    //현재 스크롤된 수직 픽셀 값입니다. 페이지의 맨 위부터 현재 스크롤된 위치까지의 수직 픽셀 값을 나타냅니다.
    // document.documentElement.scrollHeight: document.documentElement는 문서의 최상위 요소인
    // <html> 요소를 참조합니다. scrollHeight는 요소의 총 스크롤 가능한 높이를 나타냅니다. 즉, 문서의 전체 높이입니다.
    // window.innerHeight: innerHeight는 현재 창의 내부 높이를 나타냅니다.
    //브라우저 창에서 보이는 영역의 높이를 말합니다.

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <section className="bg-gray-200">
        <h2>스크롤 백분율 구하는 방법</h2>
        <p>
          뒤에 나오는 예제에서 반복 학습을 계속합니다. 부담없이 학습하세요 :)
        </p>
        <article className="text-7xl md:text-9xl">
          <div className="fixed left-1/2 top-1/3 w-4/5 h-56 text-center -translate-x-1/2">
            <span
              ref={progressBar}
              className="block h-56 bg-black"
              style={{ width: "100%" }}
            ></span>
            <p ref={progressTextRef} className="text-xl">
              0%
            </p>
          </div>
          <p>
            가<br />
            나<br />
            다<br />
            라<br />
            마<br />
            바<br />
            사<br />
            아<br />
            자<br />
            차<br />
            카<br />
            타<br />
            파<br />
            하<br />
          </p>
        </article>
      </section>
    </div>
  );
}

export default Page;
