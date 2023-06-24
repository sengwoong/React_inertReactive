import React, { useState, useEffect } from "react";
import PotoContent from "../components/potoContent";
// 버튼은 if 문 써서 토큰으로들고오기
const ResponsiveCard = ({ title, price, content, ButtonName }) => {
  return (
    //top-10 left-1/3

    <div className=" bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <h3 className="mb-3 text-xl font-bold text-indigo-600">{title}</h3>
      <div className="relative">
        <img
          className="w-full rounded-xl"
          src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt="Colors"
        />
        <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
          {price}
        </p>
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
        {title}
      </h1>
      <div className="my-4">
        {/* 내용 */}
        <div className="flex justify-start">
          <PotoContent content={content}></PotoContent>
        </div>
        <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
          {ButtonName}
        </button>
      </div>
    </div>
  );
};

export default ResponsiveCard;
