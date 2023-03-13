import React, { useState } from "react";

export type PrimaryHeadingProps = {
  headingText: string;
  textColor?: string;
};

const PrimaryHeading = ({
  headingText,
  textColor,
}: PrimaryHeadingProps) => {
  const letters = "abcdefghijklmnopqrstuvwxyz";

  const [text, setText] = useState(headingText);

  const handleMouseOver = () => {
    let iteration = 0;

    const interval = setInterval(() => {
      setText((prevText) =>
        prevText
          .split("")
          .map((_, index) => {
            if (index < iteration) {
              return text[index];
            }

            return letters[
              Math.floor(Math.random() * 26)
            ];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 50);
  };

  return (
    <p
      className={`font-playfair text-6xl ${textColor} capitalize z-10 text-center md:text-start`}
      data-value={headingText}
      onMouseOver={handleMouseOver}
    >
      {text}
    </p>
  );
};

export default PrimaryHeading;
