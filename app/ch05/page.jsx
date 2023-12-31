"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import debounce from "lodash/debounce";

import MotionWriting from "./components/MotionWriting";
import MotionScreen from "./components/MotionScreen";
import MusicCard from "./components/MusicCard";
import Header from "./components/Header";
import MotionIntero from "./components/MotionIntero";
import Image from "next/image";

const page = () => {
  const screen1 = useRef(null);
  const screen3 = useRef(null);
  let Animation = false;
  let winScrollTop;
  let sectionMainOneTop;
  let sectionMainOneBottom;

  let sectionMainThreeTop;
  let sectionMainThreeBottom;
  let isMac = navigator.platform.indexOf("Mac") >= 0;
  useEffect(() => {
    function setProperty() {
      winScrollTop = window.scrollY;
      sectionMainOneTop =
        screen1.current.getBoundingClientRect().top + winScrollTop;
      sectionMainOneBottom = sectionMainOneTop + screen1.current.offsetHeight;
      sectionMainThreeTop =
        screen3.current.getBoundingClientRect().top + winScrollTop;
      sectionMainThreeBottom =
        sectionMainThreeTop + screen3.current.offsetHeight;
    }

    function moveSection(delta) {
      setProperty();

      if (
        winScrollTop >= sectionMainOneTop &&
        winScrollTop < sectionMainThreeTop
      ) {
        if (!Animation) {
          //애니메이션이 진행중인지 체크합니다.

          moveStartRender(delta); //섹션 이동을 처리해주는 함수
        }
      }

      if (winScrollTop >= sectionMainOneBottom) {
        activeCehck();
      }

      function activeCehck() {
        // 3번째 화면 처리
        // 꺼진 로직 켜기
      }
    }

    function moveStartRender(delta) {
      // 위는 현재스크롤값이 내위치값보다 작으면
      //아래는 현재스크롤값이 내위치보다 크면

      if (delta > 0) {
        scrollMove(sectionMainThreeTop);
      } else {
        scrollMove(sectionMainOneTop);
      }
    }

    async function scrollMove(moveY) {
      await window.scrollTo({
        top: moveY,
        behavior: "smooth", // 스무스 스크롤 옵션
      });
    }
    if (isMac) {
      window.addEventListener(
        "wheel",
        debounce(function (e) {
          if (
            winScrollTop >= sectionMainOneTop &&
            winScrollTop < sectionMainThreeTop
          ) {
            e.preventDefault();
          }

          var delta = e.deltaY;
          console.log(Animation);
          if (!Animation) {
            moveSection(delta);
          }
        }, 100),
        { passive: false }
      );
    } else {
      var beforeScroll = -1;
      window.addEventListener(
        "scroll",
        debounce(function () {
          var delta = 0;
          if (beforeScroll > window.pageYOffset) {
            delta = -1;
          } else {
            delta = 1;
          }

          if (!Animation) {
            requestAnimationFrame(moveSection(delta));
          }
          beforeScroll = window.pageYOffset;
        }, 100),
        false
      );
    }

    return () => {
      if (isMac) {
        window.removeEventListener("wheel", moveSection);
      } else {
        window.removeEventListener("scroll", moveSection);
      }
    };
  }, []);

  return (
    <div>
      <div ref={screen1} className="h-screen flex flex-col">
        <Header></Header>
        <MotionIntero></MotionIntero>
      </div>
      괴물 png에서 .pngtree.com/
      <div
        class="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 pb-52 text-center"
        style={{
          backgroundImage: "url('/images/monster.png')",
          height: "500px",
        }}
      ></div>
      <section className="sec_mainvis">
        <ul className="list" ref={screen3}>
          <li>
            <MusicCard></MusicCard>
          </li>
        </ul>
      </section>
      <footer className="footer">
        <div className="text_area">
          <p className="flex justify-around">
            <div>
              <Image
                className="scroll-mb-5  "
                src={"/images/mon1.png"}
                height={300}
                width={300}
              ></Image>
              <Image
                className="scroll-mb-5   right-0"
                src={"/images/mon2.png"}
                height={300}
                width={300}
              ></Image>
            </div>
            <div>
              <Image
                className="scroll-mb-5   "
                src={"/images/mon3.png"}
                height={300}
                width={300}
              ></Image>
              <Image
                className=" scroll-mb-5 "
                src={"/images/mon4.png"}
                height={300}
                width={300}
              ></Image>
            </div>
          </p>
          <p className="flex">출처 Freepik .pngtree.com/</p>
        </div>
      </footer>
    </div>
  );
};

export default page;
