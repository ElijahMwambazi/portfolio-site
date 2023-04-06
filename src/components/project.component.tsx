import Button from "./button.component";
import { ReactComponent as GitHubIcon } from "../assets/socials/github.svg";

export type ProjectProps = {
  imgSrc: string;
  title: string;
  description: string;
  isActive: boolean;
  href: string;
};

const Project = ({
  imgSrc,
  title,
  description,
  isActive,
  href,
}: ProjectProps) => {
  return (
    <div className="border-2 border-yellow">
      <img src={imgSrc} alt={title} />
      <div className="">
        <h3>{title}</h3>
        <p className="">{description}</p>
      </div>
      <Button
        href={href}
        text={"View Project"}
        animated={true}
        isWordSingle={false}
      />
    </div>
  );
};

export default Project;
