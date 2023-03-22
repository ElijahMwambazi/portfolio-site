import { ReactElement } from "react";
import ProgressBar from "./progress-bar.component";

export type SkillCardProps = {
  skillIcon: ReactElement;
  title: string;
  percentage: number;
};

const SkillCard = ({
  skillIcon,
  title,
  percentage,
}: SkillCardProps) => {
  return (
    <div className="flex flex-col gap-2 p-2 justify-center rounded border-yellow border-2 text-bold">
      {skillIcon}
      <ProgressBar
        title={title}
        percentage={percentage}
      />
    </div>
  );
};

export default SkillCard;
