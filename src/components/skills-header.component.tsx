import RandomizedText from "./randomized-text.componenet";
import { ReactComponent as ArrowIcon } from "../assets/arrow.svg";

export type SkillsHeaderProps = {
  heading: string;
  skill: boolean;
  onSKillClick: (
    event: React.MouseEvent<HTMLParagraphElement>
  ) => void;
};

const SkillsHeader = ({
  heading,
  skill,
  onSKillClick,
}: SkillsHeaderProps) => {
  return (
    <div
      className={`skills-header mt-10 ${
        skill
          ? "text-yellow mb-7"
          : "text-dark-gray"
      } hover:text-yellow border-2 rounded p-5 flex justify-between items-center z-50`}
      onClick={onSKillClick}
    >
      <RandomizedText
        textToRandomize={heading}
        singleWord={false}
        className={`font-josefinSans text-2xl
      text-justify md:text-start`}
      />
      <ArrowIcon
        className={`${
          skill ? "fill-yellow" : "fill-dark-gray"
        }`}
        style={{
          transform: `${
            skill
              ? "rotate(180deg)"
              : "rotate(360deg)"
          }`,
          transition: "all 0.3s linear",
        }}
      />
    </div>
  );
};

export default SkillsHeader;
