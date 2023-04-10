import Button from "./button.component";
import { ReactComponent as GitHubIcon } from "../assets/socials/github.svg";
import { finished } from "stream";

export type ProjectProps = {
  imgSrc: string;
  projectName: string;
  description: string;
  isActive: boolean;
  projectState: "DONE" | "ACTIVE" | "TODO";
  href: string;
  startDate: Date | "TBD";
  finishDate: Date | "TBD";
};

const Project = ({
  imgSrc,
  projectName,
  description,
  isActive,
  projectState,
  href,
  startDate,
  finishDate,
}: ProjectProps) => {
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
    >
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
        className="w-full h-full absolute top-0 left-0 z-[-1] opacity-20 object-fill"
      />
      <div className="">
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
          }}
        >
          {projectName}
        </h3>
        <div
          className="flex flex-col items-center justify-center h-40 overflow-scroll scrollbar-hide mb-12 rounded p-2"
          style={{
            background:
              projectState === "DONE"
                ? "rgba(21, 255, 0, 0.3)"
                : projectState === "ACTIVE"
                ? "rgba(253, 205, 73, 0.3)"
                : projectState === "TODO"
                ? "rgba(117, 117, 117, 0.3)"
                : "inherit",
          }}
        >
          <p className="text-center">
            {description}
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        {isActive && (
          <Button
            href={href}
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
          href={href}
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
