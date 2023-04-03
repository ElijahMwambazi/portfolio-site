import { ReactNode } from "react";

export type SkillCardContainerProps = {
  showSkills: boolean;
  children: ReactNode;
};

const SkillCardsContainer = ({
  showSkills,
  children,
}: SkillCardContainerProps) => {
  return (
    <div
      className={`grid grid-cols-3 gap-6 w-full px-10`}
      style={{
        display: `${showSkills ? "" : "none"}`,
        visibility: `${
          showSkills ? "visible" : "hidden"
        }`,
        animation: `${
          showSkills
            ? "dropDown 0.3s linear"
            : "goUp 0.3s linear"
        }`,
      }}
    >
      {children}
    </div>
  );
};

export default SkillCardsContainer;
