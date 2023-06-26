"use client";
import React, { useEffect, useRef, useState } from "react";
import "./ImageBox.css";

function ImageBox() {
  const sectionRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add("active");
      setIsActive(true);
    }
  }, []);

  return (
    <div className="wrap">
      <section
        className={`section_textmask ${isActive ? "active" : ""}`}
        ref={sectionRef}
      >
        <article className="txt_area">
          <div className="tit_wrap">
            <h2 className="com_tit01">TEXT OVERLAP</h2>
            <p className="com_txt01">텍스트로 구현하는 엣지 있는 모션 :)</p>
          </div>
          <div className="motion_area">
            <div className="text_box">
              <div className="left">
                <p className="txt_com txt01">
                  <span>모션 만들기!</span>
                </p>
              </div>
              <div className="right">
                <p className="txt_com txt01">
                  <span>모션 만들기!</span>
                </p>
              </div>
            </div>
            <div className="text_box type02">
              <div className="left">
                <p className="txt_com txt01">
                  <span>수강생 화이팅!</span>
                </p>
              </div>
              <div className="right">
                <p className="txt_com txt01">
                  <span>수강생 화이팅!</span>
                </p>
              </div>
            </div>
            <div className="text_box type03">
              <div className="left">
                <p className="txt_com txt01">
                  <span>신난다 재미난다!</span>
                </p>
              </div>
              <div className="right">
                <p className="txt_com txt01">
                  <span>신난다 재미난다!</span>
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default ImageBox;
