import Button from "./button.component";

export type ProjectProps = {
  id: number;
  imgSrc: string;
  title: string;
  description: string;
};

const Project = ({
  id,
  imgSrc,
  title,
  description,
}: ProjectProps) => {
  return (
    <div className="item" id={`project-${id}`}>
      <img src={imgSrc} alt={title} />
      <div className="text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <Button
        href={"#"}
        text={"Learn More"}
        animated={true}
        isWordSingle={false}
      />
    </div>
  );
};

export default Project;
