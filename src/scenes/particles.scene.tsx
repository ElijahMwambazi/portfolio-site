import { useEffect, useState } from "react";

const randomNumber = (limit: number) => {
  return Math.floor(Math.random() * limit);
};

export type Particle = {
  key: number;
  particleClasses: string[];
  particleOpacity: number;
  heightWidth: number;
  startLocation: number;
  timeDelay: number;
  animationDuration: number;
};

const Particles = () => {
  const [particles, setParticles] = useState<
    Particle[]
  >([]);

  useEffect(() => {
    const newParticles = [...Array(200)].map(
      (_, index) => {
        const particleClasses = [];
        const particleOpacity =
          randomNumber(10) * 0.1;
        const heightWidth = randomNumber(11) + 5;
        const startLocation =
          -50 + randomNumber(150);
        const timeDelay = randomNumber(10);
        const animationDuration =
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

        return {
          key: index,
          particleClasses,
          heightWidth,
          startLocation,
          particleOpacity,
          timeDelay,
          animationDuration,
        };
      }
    );

    setParticles(newParticles);
  }, []);

  return (
    <div className="relative bg-gray-100 bg-opacity-60 z-10 h-5 w-full mt-20">
      {particles.map((particle) => (
        <div
          key={particle.key}
          className={`${particle.particleClasses.join(
            " "
          )} absolute bg-yellow rounded-full pointer-events-none z-20`}
          style={{
            width: `${particle.heightWidth}px`,
            height: `${particle.heightWidth}px`,
            left: `${particle.startLocation}%`,
            opacity: `${particle.particleOpacity}`,
            animationDelay: `${particle.timeDelay}s`,
            animationDuration: `${particle.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
