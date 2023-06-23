import React from "react";
import HomeButton from "@/../../components/HomeButton.jsx";

function page() {
  return (
    <div>
      <main className="bg-black  min-h-screen grid gap-7 grid-cols-1 p-10">
        <HomeButton
          ContentText={"첫번째 페이지"}
          LinkHref={"/ch01"}
        ></HomeButton>
        <HomeButton
          ContentText={"두번째 페이지"}
          LinkHref={"/ch02"}
        ></HomeButton>
        <HomeButton
          ContentText={"세번째 페이지"}
          LinkHref={"/ch03"}
        ></HomeButton>
        <HomeButton
          ContentText={"넷번째 페이지"}
          LinkHref={"/ch04"}
        ></HomeButton>
        <HomeButton
          ContentText={"다섯번째 페이지"}
          LinkHref={"/ch05"}
        ></HomeButton>
        <HomeButton
          ContentText={"여섯번째 페이지"}
          LinkHref={"/ch06"}
        ></HomeButton>
        <HomeButton
          ContentText={"일곱번째 페이지"}
          LinkHref={"/ch07"}
        ></HomeButton>
        <HomeButton
          ContentText={"여덟번째 페이지"}
          LinkHref={"/ch08"}
        ></HomeButton>
        <HomeButton
          ContentText={"아홉번째 페이지"}
          LinkHref={"/ch09"}
        ></HomeButton>
        <HomeButton
          ContentText={"열번째 페이지"}
          LinkHref={"/ch10"}
        ></HomeButton>
        <HomeButton
          ContentText={"열한번째 페이지"}
          LinkHref={"/ch11"}
        ></HomeButton>
        <HomeButton
          ContentText={"열둘번째 페이지"}
          LinkHref={"/ch12"}
        ></HomeButton>
      </main>
    </div>
  );
}

export default page;
