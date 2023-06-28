import React from "react";

function TextComponent({ TextView }) {
  return (
    <div>
      <div
        ref={(el) => (TextView.current[0] = el)}
        className="inset-3  text-8xl my-32 left-0 transform  duration-200"
      >
        aaaa
      </div>
      <div
        ref={(el) => (TextView.current[1] = el)}
        className="inset-1 text-8xl my-32 left-0 transform  duration-200"
      >
        bbbbb
      </div>
      <div
        ref={(el) => (TextView.current[2] = el)}
        className="inset-0 text-8xl my-32 left-0 transform  duration-200"
      >
        cccc
      </div>
      <div
        ref={(el) => (TextView.current[3] = el)}
        className="inset-0 text-8xl my-32 left-0 transform  duration-200"
      >
        dddd
      </div>
      <div
        ref={(el) => (TextView.current[4] = el)}
        className="inset-0 text-8xl my-32 left-0 transform  duration-200"
      >
        eeee
      </div>
      <div
        ref={(el) => (TextView.current[5] = el)}
        className="inset-0 text-8xl my-32 left-0 transform  duration-200"
      >
        aaaa
      </div>
      <div
        ref={(el) => (TextView.current[6] = el)}
        className="inset-0 text-8xl my-32 left-0 transform  duration-200"
      >
        bbbbb
      </div>
      <div
        ref={(el) => (TextView.current[7] = el)}
        className="inset-0 text-8xl my-32 left-0 transform  duration-200"
      >
        cccc
      </div>
      <div
        ref={(el) => (TextView.current[8] = el)}
        className="inset-0 text-8xl my-32 left-0 transform  duration-200"
      >
        dddd
      </div>
      <div
        ref={(el) => (TextView.current[9] = el)}
        className="inset-0 text-8xl my-32 left-0 transform  duration-200"
      >
        eeee
      </div>
    </div>
  );
}

export default TextComponent;
