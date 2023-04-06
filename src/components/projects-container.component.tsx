import Project, {
  ProjectProps,
} from "./project.component";

const ProjectsContainer = () => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
      <Project
        imgSrc={""}
        title={""}
        description={""}
        isActive={false}
        href={""}
      />
    </div>
  );
};

export default ProjectsContainer;
