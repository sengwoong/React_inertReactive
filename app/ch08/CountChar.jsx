import React, { useRef, useEffect, useState } from "react";
import "./Time.css"; // Import the CSS file if needed

const CountChar = () => {
  const dateCountRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    countDate();
    setIsActive(true);
  }, []);

  const countDate = () => {
    const el = dateCountRef.current;
    //HElLO 를 넣기

    const rolling = 24;
    const resultArray = "HELLO";

    resultArray.split("").forEach((val, idx) => {
      const countBox = document.createElement("div");
      countBox.className = "count_box";

      const numberArray = [];

      //HElLO 를 유니코드로변경
      const number = val.charCodeAt();
      console.log("number");
      console.log(number);
      let num = 0;
      for (let i = 0; i <= rolling; i++) {
        let sum = number + i;
        if (sum >= 65 && sum <= 95) {
          num = sum;
        } else {
          num = 65;
        }

        numberArray[i] = num;
        console.log("num");
        console.log(num);
      }

      numberArray.reverse();

      numberArray.forEach((val) => {
        const countValue = document.createElement("span");
        //val을 글자로변경
        countValue.innerText = String.fromCharCode(val);

        countBox.appendChild(countValue);
      });

      el.appendChild(countBox);

      setTimeout(() => {
        countBox.classList.add("active");
      }, idx * 300);
    });
  };

  return (
    <div className="wrap">
      <section className={`section_today ${isActive ? "active" : ""}`}>
        <article className="date_box">
          <div className="tb_row">
            <div className="tb_cell">
              <strong className="t_date">TODAY</strong>
              <div className="date_count" ref={dateCountRef}></div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default CountChar;
