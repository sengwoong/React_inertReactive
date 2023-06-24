"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import MotionWriting from "./components/MotionWriting";
import MotionScreen from "./components/MotionScreen";
import MusicCard from "./components/MusicCard";
import Header from "./components/Header";
import MotionIntero from "./components/MotionIntero";

const page = () => {
  const screen1 = useRef(null);
  const screen3 = useRef(null);
  const [Animation, getAnimation] = useState(false);
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
        console.log("이동범위");
        moveStartRender(delta);
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
      console.log("window.scrollY");
      console.log(window.scrollY);
      console.log("sectionMainOneBottom");
      console.log(sectionMainOneBottom);

      if (delta > 0) {
        getAnimation(true);
        console.log(Animation);
        scrollMove(sectionMainThreeTop);
      } else {
        getAnimation(false);
        scrollMove(sectionMainOneTop);
      }
    }

    function scrollMove(moveY) {
      let speed = 1;
      let vy = 0;
      let scrollY = 0;

      let loop = setInterval(function () {
        let dir = moveY > window.pageYOffset ? 1 : -1;
        vy += speed * dir;

        if (dir > 0) {
          scrollY = Math.min(moveY, window.pageYOffset + vy);
        } else {
          scrollY = Math.max(moveY, window.pageYOffset + vy);
        }
        console.log(moveY, window.pageYOffset + vy);
        console.log("scrollY");
        console.log(scrollY);
        window.scrollTo(0, scrollY, "auto");

        if (scrollY >= moveY && dir > 0) {
          clearInterval(loop);
        } else if (scrollY <= moveY && dir < 0) {
          clearInterval(loop);
        }
      }, 80);
    }

    if (isMac) {
      window.addEventListener(
        "wheel",
        function (e) {
          if (
            winScrollTop >= sectionMainOneTop &&
            winScrollTop < sectionMainThreeTop
          ) {
            e.preventDefault();
          }

          var delta = e.deltaY;
          moveSection(delta);
        },
        { passive: false }
      );
    } else {
      var beforeScroll = -1;
      window.addEventListener(
        "scroll",
        function () {
          var delta = 0;
          if (beforeScroll > window.pageYOffset) {
            delta = -1;
          } else {
            delta = 1;
          }

          moveSection(delta);
          beforeScroll = window.pageYOffset;
        },
        false
      );
    }

    return () => {
      if (isMac) {
        window.addEventListener("wheel");
      }
      window.removeEventListener("scroll", moveSection);
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
          <p>
            <motion.div
              className="text-9xl block ml-11 w-80 h-80 bg-blue-700"
              whileHover={{ scale: 1.1 }}
            ></motion.div>
            <motion.div
              className="text-9xl block ml-11 w-80 h-80 bg-red-500"
              whileHover={{ scale: 1.1 }}
            ></motion.div>
            <motion.div
              className="text-9xl block ml-11 w-80 h-80 bg-green-600"
              whileHover={{ scale: 1.1 }}
            ></motion.div>
            <div
              class="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 pb-52 text-center"
              style={{
                backgroundImage: "url('/images/monster.png')",
                height: "500px",
              }}
            ></div>
            <div
              class="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 pb-52 text-center"
              style={{
                backgroundImage: "url('/images/monster.png')",
                height: "500px",
              }}
            ></div>
            출처 Freepik .pngtree.com/
          </p>
        </div>
      </footer>
    </div>
  );
};

export default page;
