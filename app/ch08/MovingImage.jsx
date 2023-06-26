import React, { useEffect, useState } from "react";

function MovingImage() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Start the animation after the component has mounted
    setAnimate(true);
  }, []);

  return (
    <div className="w-screen h-screen relative">
      <div className="pt-24 pb-12 text-center">
        <div className="text-center">IMAGE MASK</div>
        <div className="text-center">숨어있다 나오는 효과</div>
        <div className="text-center">
          개발환경 화면이작아서 사이즈를줄이니 멋이없다
        </div>
      </div>

      <div className="flex justify-around">
        <div>
          <div className="relative w-64  h-40">
            <div
              className={`${
                animate ? "animate-moveX" : ""
              }  absolute top-20 right-10 bg-red-500 w-full h-full`}
            ></div>
            <div
              className={`${
                animate ? "animate-moveAfter" : ""
              }  absolute top-20 right-10 bg-white   h-full`}
            ></div>
          </div>

          <div className="relative w-64  h-40">
            <div
              className={`${
                animate ? "animate-moveX" : ""
              }  absolute top-52 right-10 bg-red-500 w-full h-full`}
            ></div>
            <div
              className={`${
                animate ? "animate-moveAfter" : ""
              }  absolute top-52 right-10 bg-white   h-full`}
            ></div>
          </div>
        </div>

        <div>
          <div className="relative w-64  h-40">
            <div
              className={`${
                animate ? "animate-moveX" : ""
              }  absolute top-20 left-10 bg-red-500 w-full h-full`}
            ></div>
            <div
              className={`${
                animate ? "animate-moveAfter" : ""
              }  absolute top-20 left-10 bg-white   h-full`}
            ></div>
          </div>

          <div className="relative w-64  h-40">
            <div
              className={`
          
                absolute top-52 left-10 bg-red-500 w-full h-full `}
            ></div>

            <div
              className={`${
                animate ? "animate-moveAfterTop" : ""
              }  absolute top-52 left-10 bg-white   w-full`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovingImage;
