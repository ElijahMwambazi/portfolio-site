import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const randomNumber = (limit: number) => {
  return Math.floor(Math.random() * limit);
};

const Particles = () => {
  const bgRef = useRef<HTMLDivElement | null>(
    null
  );

  useEffect(() => {
    const bg = bgRef.current;

    if (bg) {
      for (let i = 0; i < 300; i++) {
        const particleOpacity =
          randomNumber(10) * 0.1;
        const heightWidth = randomNumber(11) + 5;
        const startLocation =
          -50 + randomNumber(150);
        const timeDelay = randomNumber(10);
        const animDuration =
          5 +
          randomNumber(10) +
          Math.random() +
          0.2;

        const particleClasses = ["particle"];

        if (i % 4 === 0) {
          particleClasses.push(
            "particleAnimation1"
          );
        }

        if (i % 4 === 1) {
          particleClasses.push(
            "particleAnimation2"
          );
        }

        if (i % 4 === 2) {
          particleClasses.push(
            "particleAnimation3"
          );
        } else {
          particleClasses.push(
            "particleAnimation4"
          );
        }

        const particle = (
          <span
            key={i}
            className={particleClasses.join(" ")}
            style={{
              backgroundColor: "#FDCC49",
              width: `${heightWidth}px`,
              height: `${heightWidth}px`,
              left: `${startLocation}%`,
              animationDelay: `${timeDelay}s`,
              animationDuration: `${animDuration}s`,
              opacity: `${particleOpacity}`,
              pointerEvents: "none",
              position: "absolute",
            }}
          />
        );

        ReactDOM.createPortal(particle, bg);
      }
    }
  }, []);

  return (
    <>
      <div
        className="absolute bg-gray-100 bg-opacity-60 top-0 left-0 z-50 h-full w-full pointer-events-none"
        ref={bgRef}
      ></div>
    </>
  );
};

export default Particles;
