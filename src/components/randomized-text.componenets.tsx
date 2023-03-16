import { useEffect, useState } from "react";

export type RandomizedTextProps = {
  styles?: string;
  singleWord: boolean;
  headingText: string;
};

const RandomizedText = ({
  styles,
  singleWord,
  headingText,
}: RandomizedTextProps) => {
  const letters = "abcdefghijklmnopqrstuvwxyz";

  const [text, setText] = useState(headingText);

  useEffect(() => {
    const randomize = () => {
      let iteration = 0;

      const interval = setInterval(() => {
        const words = headingText.split(" ");
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

  return <p className={styles}>{text}</p>;
};

export default RandomizedText;
