import {
  Fragment,
  useEffect,
  useRef,
  useState,
} from "react";
import { debounce } from "lodash";

type Coordinates = {
  x: number;
  y: number;
};

const CursorTrailer = () => {
  const [coordinates, setCoordinates] =
    useState<Coordinates>({
      x: 0,
      y: 0,
    });

  const [hasFocus, setHasFocus] =
    useState<boolean>(true);

  const circlesRef = useRef<
    (HTMLDivElement | null)[]
  >([]);
  const circles = circlesRef.current;

  const circleStyle = {
    transition: "all 0.1s ease-out",
    transform: "scale(1)",
    display: "none",
  };

  useEffect(() => {
    if (!circles) return;
    if (!circles.length) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCoordinates({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const debouncedUpdateCoordinates = debounce(
      handleMouseMove,
      16 // Update every 16ms (60fps)
    );

    window.addEventListener(
      "mousemove",
      debouncedUpdateCoordinates
    );

    const handleWindowBlur = () => {
      setHasFocus(false);
    };

    const handleWindowFocus = () => {
      setHasFocus(true);
    };

    window.addEventListener(
      "blur",
      handleWindowBlur
    );
    window.addEventListener(
      "focus",
      handleWindowFocus
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        debouncedUpdateCoordinates
      );
      window.removeEventListener(
        "blur",
        handleWindowBlur
      );
      window.removeEventListener(
        "focus",
        handleWindowFocus
      );
    };
  }, []);

  useEffect(() => {
    if (!circles) return;
    if (!circles.length) return;

    const animateCircles = () => {
      let x = coordinates.x;
      let y = coordinates.y;

      circles.forEach((circle, index) => {
        if (circle) {
          circle.style.display = "block";
          circle.style.left = `${x - 10}px`;
          circle.style.top = `${y - 10}px`;

          const nextCircle =
            circles[index + 1] || circles[0];

          x += (nextCircle!.offsetLeft - x) * 0.2;
          y += (nextCircle!.offsetTop - y) * 0.2;
        }
      });
    };

    window.requestAnimationFrame(animateCircles);
  }, [coordinates, hasFocus]);

  return (
    <Fragment>
      {[...Array(20)].map((_, index) => (
        <div
          key={index}
          className="h-5 w-5 rounded-full bg-yellow opacity-2 fixed pointer-events-none z-9999"
          style={{
            ...circleStyle,
            transform: `scale(${
              (circles.length - index) * 0.05
            })`,
          }}
          ref={(el) =>
            (circlesRef.current[index] = el)
          }
        ></div>
      ))}
    </Fragment>
  );
};

export default CursorTrailer;
