import { useState } from "react";
import Button from "./button.component";
import { ReactComponent as GitHubIcon } from "../assets/socials/github.svg";

export type ProjectProps = {
  imgSrc: string;
  projectName: string;
  description: string;
  techStack: string[];
  isActive: boolean;
  projectState: "DONE" | "ACTIVE" | "TODO";
  projectHref: string;
  githubHref: string;
  startDate: Date | "TBD";
  finishDate: Date | "TBD";
};

const Project = ({
  imgSrc,
  projectName,
  description,
  techStack,
  isActive,
  projectState,
  projectHref,
  githubHref,
  startDate,
  finishDate,
}: ProjectProps) => {
  const [isCardHovered, setIscardHovered] =
    useState(false);
  const [isToggleHovered, setIsToggleHovered] =
    useState(false);
  const [isViewToggled, setIsViewToggled] =
    useState(false);

  const toggleView = () => {
    setIsViewToggled(!isViewToggled);
  };

  return (
    <div
      className="relative overflow-hidden flex flex-col items-center justify-center rounded p-14 border-2 shadow-xl"
      style={{
        borderColor:
          projectState === "DONE"
            ? "#16FF00"
            : projectState === "ACTIVE"
            ? "#FDCC49"
            : projectState === "TODO"
            ? "#757575"
            : "inherit",
      }}
      onMouseEnter={() => setIscardHovered(true)}
      onMouseLeave={() => {
        setIscardHovered(false);
        setIsViewToggled(true);
      }}
    >
      <div
        className="absolute top-2 left-2 p-2 text-sm bg-yellow rounded cursor-pointer"
        style={{
          background:
            projectState === "DONE"
              ? isToggleHovered
                ? "rgba(21, 255, 0, 0.7)"
                : "rgba(21, 255, 0, 0.4)"
              : projectState === "ACTIVE"
              ? isToggleHovered
                ? "rgb(253, 204, 73, 0.7)"
                : "rgba(253, 205, 73, 0.4)"
              : projectState === "TODO"
              ? isToggleHovered
                ? "rgb(117, 117, 117, 0.7)"
                : "rgba(117, 117, 117, 0.4)"
              : "inherit",
        }}
        onClick={() => toggleView()}
        onMouseEnter={() =>
          setIsToggleHovered(true)
        }
        onMouseLeave={() =>
          setIsToggleHovered(false)
        }
      >
        <p>
          {isViewToggled ? "More Info" : "Back"}
        </p>
      </div>
      <div className="absolute top-3 right-6 flex gap-2 items-center justify-center">
        <p
          style={{
            color:
              projectState === "DONE"
                ? "#16FF00"
                : projectState === "ACTIVE"
                ? "#FDCC49"
                : projectState === "TODO"
                ? "#757575"
                : "inherit",
          }}
        >
          {projectState === "DONE" && "available"}
          {projectState === "ACTIVE" && "active"}
          {projectState === "TODO" && "todo"}
        </p>
        <span
          className={`mt-[4px] ${
            isActive ? "active-project" : ""
          } relative w-2 h-2 rounded-full`}
          style={{
            background:
              projectState === "DONE"
                ? "#16FF00"
                : projectState === "ACTIVE"
                ? "#FDCC49"
                : projectState === "TODO"
                ? "#757575"
                : "inherit",
          }}
        />
      </div>
      <img
        src={imgSrc}
        className="w-full h-full absolute top-0 left-0 z-[-1] object-fill"
        style={{
          opacity: isCardHovered ? 0.5 : 1,
          transition: "all 0.2s linea",
        }}
      />

      <div className="w-full">
        <h3
          className="font-josefinSans capitalize text-center font-bold rounded mb-8"
          style={{
            background:
              projectState === "DONE"
                ? "rgba(21, 255, 0, 0.7)"
                : projectState === "ACTIVE"
                ? "rgba(253, 205, 73, 0.7)"
                : projectState === "TODO"
                ? "rgba(117, 117, 117, 0.7)"
                : "inherit",
            transform: isCardHovered
              ? "scale(1)"
              : "scale(0)",
            opacity: isCardHovered ? 1 : 0,
            transition: "all 0.4s linear",
          }}
        >
          {isViewToggled
            ? projectName
            : "Tech Stack"}
        </h3>
        <div
          className="flex flex-col items-center justify-center h-40 overflow-scroll scrollbar-hide mb-12 rounded p-2"
          style={{
            background:
              projectState === "DONE"
                ? "rgba(21, 255, 0, 0.4)"
                : projectState === "ACTIVE"
                ? "rgb(253, 205, 73, 0.4)"
                : projectState === "TODO"
                ? "rgb(117, 117, 117, 0.4)"
                : "inherit",
            transform: isCardHovered
              ? "scale(1)"
              : "scale(0)",
            opacity: isCardHovered ? 1 : 0,
            transition: "all 0.4s linear",
          }}
        >
          {isViewToggled ? (
            <p className="text-center">
              {description}
            </p>
          ) : (
            <ul className="w-full text-center">
              {techStack.map(
                (technology, index) => (
                  <li key={index}>
                    {technology}
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      </div>
      <div className="flex gap-4">
        {isActive && (
          <Button
            href={projectHref}
            toDisplay={`View ${
              (projectState === "DONE" &&
                "Project") ||
              (projectState === "ACTIVE" &&
                "Progress")
            }`}
            animated={false}
            isWordSingle={false}
          />
        )}
        <Button
          href={githubHref}
          toDisplay={
            <GitHubIcon className="w-4 h-4" />
          }
          animated={false}
          isWordSingle={false}
        />
      </div>
      <div className="flex justify-between absolute bottom-1 left-0 w-full opacity-40 px-2">
        <p className="text-sm">
          <span className="font-bold">
            Start Date:
          </span>
          {`${" " + startDate}`}
        </p>
        <p className="text-sm">
          <span className="font-bold">
            Finish Date:
          </span>
          {`${" " + finishDate}`}
        </p>
      </div>
    </div>
  );
};

export default Project;
