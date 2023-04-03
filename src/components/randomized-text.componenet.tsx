import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export type RandomizedTextProps = {
  className?: string;
  singleWord: boolean;
  textToRandomize: string;
  onClick?: (
    event: React.MouseEvent<HTMLParagraphElement>
  ) => void;
  style?: {};
};

const RandomizedText = ({
  className,
  style,
  singleWord,
  onClick,
  textToRandomize,
}: RandomizedTextProps) => {
  const letters = "abcdefghijklmnopqrstuvwxyz";

  const [text, setText] = useState(
    textToRandomize
  );

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  console.log(inView);

  useEffect(() => {
    if (inView) {
      const randomize = () => {
        let iteration = 0;

        const interval = setInterval(() => {
          const words =
            textToRandomize.split(" ");
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
    }
  }, [inView]);

  return (
    <p
      ref={ref}
      className={className}
      style={style}
      onClick={onClick}
    >
      {text}
    </p>
  );
};

export default RandomizedText;
