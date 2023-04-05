import {
  ReactElement,
  useEffect,
  useRef,
} from "react";
import { useInView } from "react-intersection-observer";

export type ProgressBarProps = {
  skillIcon: ReactElement;
  percentage: number;
};

const ProgressBar = ({
  skillIcon,
  percentage,
}: ProgressBarProps) => {
  const countbarRef =
    useRef<HTMLDivElement>(null);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      let startCount = 0;

      const progressBar = () => {
        startCount++;

        if (countbarRef.current) {
          if (percentage <= 20) {
            countbarRef.current.innerHTML =
              "<h3>TODO</h3>";
            countbarRef.current.style.width =
              "100%";
            countbarRef.current.style.color =
              "white";
            countbarRef.current.style.justifyContent =
              "center";
          }

          if (percentage > 20) {
            countbarRef.current.innerHTML = `<h3>${startCount}%</h3>`;
            countbarRef.current.style.width = `${startCount}%`;

            if (startCount === percentage) {
              clearInterval(stop);
            }
          }
        }
      };

      const stop = setInterval(() => {
        progressBar();
      }, 25);

      return () => clearInterval(stop);
    }
  }, [percentage, inView]);

  return (
    <div className="flex gap-4" ref={ref}>
      {skillIcon}
      <div className="rounded-full grow border-yellow border-2 p-2">
        <div
          className="font-montserrat text-sm bg-yellow flex justify-end rounded-full px-2 text-dark-green font-bold"
          ref={countbarRef}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
