import {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
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

  const circlesRef = useRef<
    (HTMLDivElement | null)[]
  >([]);
  const circles = circlesRef.current;

  const circleStyle = useMemo(
    () => ({
      display: "none",
      transition: "all 0.1s ease-out",
      transform: "scale(1)",
      zIndex: "999",
    }),
    []
  );

  // TODO: Place circle next to logo at - first render & when mouse isn't within window
  const animateCircles = useCallback(() => {
    let x = coordinates.x;
    let y = coordinates.y;

    circles.forEach((circle, index) => {
      if (circle) {
        circle.style.left = `${x - 8}px`;
        circle.style.top = `${y - 8}px`;

        const nextCircle =
          circles[index + 1] || circles[0];

        x += (nextCircle!.offsetLeft - x) * 0.02;
        y += (nextCircle!.offsetTop - y) * 0.02;
      }
    });
  }, [coordinates, circles]);

  useEffect(() => {
    if (!circles) return;
    if (!circles.length) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCoordinates({
        x: e.clientX,
        y: e.clientY,
      });

      circles.forEach((circle) => {
        if (circle)
          circle.style.display = "block";
      });
    };

    // const handleMouseLeave = () => {
    //   circles.forEach((circle) => {
    //     if (circle) circle.style.top = "0";
    //   });
    // };

    const debouncedUpdateCoordinates = debounce(
      handleMouseMove,
      2
    );

    window.addEventListener(
      "mousemove",
      debouncedUpdateCoordinates
    );

    // window.addEventListener(
    //   "mouseleave",
    //   handleMouseLeave
    // );

    // window.removeEventListener(
    //   "mouseleave",
    //   handleMouseLeave
    // );

    return () => {
      window.removeEventListener(
        "mousemove",
        debouncedUpdateCoordinates
      );
    };
  }, [circles, animateCircles]);

  window.requestAnimationFrame(animateCircles);

  return (
    <Fragment>
      {[...Array(20)].map((_, index) => (
        <div
          key={index}
          className="h-5 w-5 rounded-full bg-yellow fixed pointer-events-none"
          style={{
            ...circleStyle,
            transform: `scale(${
              (circles.length - index) / 25
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
