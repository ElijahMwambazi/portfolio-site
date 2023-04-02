import {
  ReactElement,
  useEffect,
  useRef,
} from "react";

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

  useEffect(() => {
    let startCount = 0;

    const progressBar = () => {
      startCount++;

      if (countbarRef.current) {
        countbarRef.current.innerHTML = `<h3>${startCount}%</h3>`;
        countbarRef.current.style.width = `${startCount}%`;

        if (startCount === percentage) {
          clearInterval(stop);
        }
      }
    };

    const stop = setInterval(() => {
      progressBar();
    }, 25);

    return () => clearInterval(stop);
  }, [percentage]);

  return (
    <div className="flex gap-4">
      {skillIcon}
      <div className="rounded-full grow border-yellow border-2 p-2">
        <div
          className="font-montserrat text-sm bg-yellow flex justify-end rounded-full px-2 text-dark-green font-bold"
          data-percentnumber={percentage}
          ref={countbarRef}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
