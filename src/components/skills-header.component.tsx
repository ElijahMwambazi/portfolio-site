import RandomizedText from "./randomized-text.componenet";

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
    <RandomizedText
      textToRandomize={heading}
      singleWord={false}
      className={`font-playfair font-bold mt-10 text-2xl
      text-justify md:text-start ${
        skill
          ? "text-yellow mb-7"
          : "text-dark-gray"
      } hover:text-yellow border-2 rounded p-5`}
      onClick={onSKillClick}
    />
  );
};

export default SkillsHeader;
