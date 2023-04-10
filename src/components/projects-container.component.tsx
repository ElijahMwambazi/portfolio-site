import Project from "./project.component";

const ProjectsContainer = () => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-20 mt-10">
      {/* Project 1 */}
      <Project
        imgSrc={
          "../../public/projects/project-1.jpeg"
        }
        projectName={"Project 1"}
        description={
          "The purpose of this project is to provide you with experience in mapping between phenomena in the real world (and data) and the possible distribution functions"
        }
        isActive={false}
        href={""}
        projectState={"TODO"}
        startDate={"TBD"}
        finishDate={"TBD"}
      />

      {/* Project 2 */}
      <Project
        imgSrc={
          "../../public/projects/project-2.jpeg"
        }
        projectName={"Project 2"}
        description={
          "The purpose of this project is to provide you with experience in mapping between phenomena in the real world (and data) and the possible distribution functions"
        }
        isActive={true}
        href={""}
        projectState={"DONE"}
        startDate={"TBD"}
        finishDate={"TBD"}
      />

      {/* Project 3 */}
      <Project
        imgSrc={
          "../../public/projects/project-3.jpeg"
        }
        projectName={"Project 3"}
        description={
          "The purpose of this project is to provide you with experience in mapping between phenomena in the real world (and data) and the possible distribution functions"
        }
        isActive={true}
        href={""}
        projectState={"ACTIVE"}
        startDate={"TBD"}
        finishDate={"TBD"}
      />
    </div>
  );
};

export default ProjectsContainer;
