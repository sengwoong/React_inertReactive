import React, { useState } from "react";
import ResponsiveCard from "./ResponsiveCard";

function MusicCard() {
  const [playSelect, setPlaySelect] = useState(0); // 0부터 시작하도록 변경

  //데이터
  const music = [
    {
      title: "노래이름1",
      content: ["설명1", "설명2", "설명3"],
      price: "가격1",
    },
    {
      title: "노래이름2",
      content: ["설명1", "설명2", "설명3"],
      price: "가격2",
    },
    {
      title: "노래이름3",
      content: ["설명1", "설명2", "설명3"],
      price: "가격3",
    },
    {
      title: "노래이름4",
      content: ["설명1", "설명2", "설명3"],
      price: "가격4",
    },
  ];

  const handleNext = () => {
    setPlaySelect((prevSelect) => (prevSelect + 1) % music.length);
  };
  const handlePrev = () => {
    setPlaySelect((prevSelect) =>
      prevSelect - 1 === -1 ? music.length - 1 : (prevSelect - 1) % music.length
    );
  };

  return (
    <div className="w-screen h-screen relative z-10">
      {/* 이전 음악 카드 */}
      <div className="absolute w-1/2 min-w-min-350px flex-1 left-1/3 top-16 transform -translate-x-1/2 z-20 -rotate-12">
        <div className="top-0 left-0">
          <ResponsiveCard
            title={music[(playSelect - 1 + music.length) % music.length].title}
            content={
              music[(playSelect - 1 + music.length) % music.length].content
            }
            price={music[(playSelect - 1 + music.length) % music.length].price}
            ButtonName={"구매하기"}
          />
        </div>
      </div>

      {/* 현재 음악 카드 */}
      <div className="absolute w-1/2 min-w-min-350px flex-1 left-1/2 top-16 transform -translate-x-1/2 z-20">
        <div className="top-0 left-0">
          <ResponsiveCard
            title={music[playSelect].title}
            content={music[playSelect].content}
            price={music[playSelect].price}
            ButtonName={"구매하기"}
          />
        </div>
      </div>

      {/* 다음 음악 카드 */}
      <div className="absolute w-1/2 min-w-min-350px flex-1 left-2/3 top-16 transform -translate-x-1/2 z-10 rotate-12">
        <div className="top-0 left-0">
          <ResponsiveCard
            title={music[(playSelect + 1) % music.length].title}
            content={music[(playSelect + 1) % music.length].content}
            price={music[(playSelect + 1) % music.length].price}
            ButtonName={"구매하기"}
          />
        </div>
      </div>

      {/* 다음 버튼 */}
      <button
        onClick={handlePrev}
        className="absolute w-24 h-24 z-30 
        bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full
left-10 bottom-14 md:top-1/2 "
      ></button>
      <button
        onClick={handleNext}
        className="absolute w-24 h-24 z-30   bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full
        right-10 bottom-14 md:top-1/2 "
      ></button>
    </div>
  );
}

export default MusicCard;
