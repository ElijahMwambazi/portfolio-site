import { useEffect } from "react";

const randomNumber = (limit: number) => {
  return Math.floor(Math.random() * limit);
};

const Particles = () => {
  return (
    <div className="relative bg-gray-100 bg-opacity-60 z-10 h-5 w-full mt-20">
      {[...Array(200)].map((_, index) => {
        const particleClasses: string[] = [];
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

        if (index % 4 === 0) {
          particleClasses.push(
            "particleAnimation1"
          );
        } else if (index % 4 === 1) {
          particleClasses.push(
            "particleAnimation2"
          );
        } else if (index % 4 === 2) {
          particleClasses.push(
            "particleAnimation3"
          );
        } else {
          particleClasses.push(
            "particleAnimation4"
          );
        }

        return (
          <div
            key={index}
            className={`${particleClasses.join(
              " "
            )} absolute bg-yellow rounded-full pointer-events-none z-20`}
            style={{
              width: `${heightWidth}px`,
              height: `${heightWidth}px`,
              left: `${startLocation}%`,
              opacity: `${particleOpacity}`,
              animationDelay: `${timeDelay}s`,
              animationDuration: `${animDuration}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Particles;
