import React, { useRef, useEffect, useState } from "react";
import "./Time.css"; // Import the CSS file if needed

const GgangCoding = () => {
  const dateCountRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    countDate();
    setIsActive(true);
  }, []);

  const countDate = () => {
    const el = dateCountRef.current;
    const date = new Date();
    const todayDate =
      String(date.getFullYear()) +
      String(date.getMonth() + 1) +
      String(date.getDate());
    const rolling = 24;
    const resultArray = [...todayDate];

    resultArray.forEach((val, idx) => {
      const countBox = document.createElement("div");
      countBox.className = "count_box";

      const numberArray = [];
      const number = Number(val);

      for (let i = 0; i <= rolling; i++) {
        const sum = number + i;
        const num = sum >= 10 ? Number(String(sum).split("")[1]) : sum;
        numberArray[i] = num;
      }

      numberArray.reverse();

      numberArray.forEach((val) => {
        const countValue = document.createElement("span");
        countValue.innerText = val;

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

export default GgangCoding;
