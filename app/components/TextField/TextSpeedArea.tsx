"use client";
import React, { useState, useEffect } from "react";

function TextSpeedArea() {
  const [text, setText] = useState<string>(
    "be aware that listening for global keyboard events across the entire website may have implications for accessibility and user experience It's generally a good practice to limit such global interactions to."
  );
  useEffect(() => {
    let PressCount = 0;
    let Text = text.split("");
    const HandleeKeyPress = (event: KeyboardEvent) => {
      const element = document.querySelector(`[data-index="${PressCount}"]`);
      if (Text[PressCount] == event.key) {
        element?.classList.add("text-green-400");
        PressCount++;
      } else if (" " == event.key) {
        element?.classList.add("bg-green-400");
		PressCount++;
      } else {
        element?.classList.add("text-red-400");
        PressCount++;
      }
      console.log(Text[PressCount - 1], event.keyCode);
    };
    window.addEventListener("keydown", HandleeKeyPress);

    return () => window.removeEventListener("keydown", HandleeKeyPress);
  }, []);
  return (
    <div
      //   onKeyDown={(e) => CheckIfThePressedCharIsCorrect(e)}
      className="text-skin-base flex flex-wrap gap-3 text-xl leading-7"
    >
      {text.split(" ").map((word, _index) => (
        <div className=" text-[1.6rem] text-skin-muted " key={_index}>
          {word.split("").map((char, _char_index) => (
            <span
              className="pr-[0.5px]"
              key={_char_index}
              data-index={_char_index}
            >
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default TextSpeedArea;
