import { ReactElement } from "react";
import ProgressBar from "./progress-bar.component";
import RandomizedText from "./randomized-text.componenet";

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
    <div className="flex flex-col gap-2 p-2 justify-center rounded  text-bold">
      {
        <RandomizedText
          textToRandomize={title}
          singleWord={false}
        />
      }
      <ProgressBar
        skillIcon={skillIcon}
        percentage={percentage}
      />
    </div>
  );
};

export default SkillCard;
