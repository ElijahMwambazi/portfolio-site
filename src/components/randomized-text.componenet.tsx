import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export type RandomizedTextProps = {
  className?: string;
  singleWord: boolean;
  textToRandomize: string;
  style?: {};
};

const RandomizedText = ({
  className,
  style,
  singleWord,
  textToRandomize,
}: RandomizedTextProps) => {
  const letters = "abcdefghijklmnopqrstuvwxyz";

  const [text, setText] = useState(
    textToRandomize
  );

  useEffect(() => {
    const randomize = () => {
      let iteration = 0;

      const interval = setInterval(() => {
        const words = textToRandomize.split(" ");
        setText(() => {
          const randomizedWords = words.map(
            (word) => {
              const randomizedChars = word
                .split("")
                .map((_, index) => {
                  if (index < iteration) {
                    return word[index];
                  }

                  return letters[
                    Math.floor(
                      Math.random() *
                        letters.length
                    )
                  ];
                })
                .join("");

              if (singleWord) {
                return randomizedChars;
              } else {
                return `${randomizedChars} `;
              }
            }
          );

          if (singleWord) {
            return randomizedWords[0];
          } else {
            return randomizedWords.join("");
          }
        });

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    setTimeout(() => {
      randomize();
    }, 1500);
  }, []);

  return (
    <p className={className} style={style}>
      {text}
    </p>
  );
};

export default RandomizedText;
