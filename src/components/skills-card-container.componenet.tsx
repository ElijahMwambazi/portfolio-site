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
      className={`grid md:grid-cols-3 sm:grid-cols-2 gap-6 w-full px-10`}
      style={{
        display: `${showSkills ? "" : "none"}`,
        animation: `${
          showSkills && "dropDown 0.3s linear"
        }`,
      }}
    >
      {children}
    </div>
  );
};

export default SkillCardsContainer;
