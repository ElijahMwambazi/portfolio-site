import Project from "./project.component";

const ProjectsContainer = () => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-20 mt-10">
      {/* Project 1 */}
      {/* TODO: Change description, add start date and finish date, change image*/}
      <Project
        imgSrc={
          "../../public/projects/project-1.jpeg"
        }
        projectName={"Note Daddy"}
        description={
          "The purpose of this project is to provide you with experience in mapping between phenomena in the real world (and data) and the possible distribution functions"
        }
        techStack={["React", "TypeScript"]}
        isActive={false}
        projectState={"TODO"}
        startDate={"TBD"}
        finishDate={"TBD"}
        projectHref={""}
        githubHref={
          "https://github.com/ElijahMwambazi/note-daddy"
        }
      />

      {/* Project 2 */}
      {/* TODO: Change description, , add start date and finish date, change image*/}
      <Project
        imgSrc={
          "../../public/projects/project-2.jpeg"
        }
        projectName={"Post Daddy"}
        description={
          "The purpose of this project is to provide you with experience in mapping between phenomena in the real world (and data) and the possible distribution functions"
        }
        techStack={["JavaScript", "CSS", "HTML"]}
        isActive={false}
        projectState={"TODO"}
        startDate={"TBD"}
        finishDate={"TBD"}
        projectHref={""}
        githubHref={""}
      />

      {/* Project 3 */}
      {/* TODO: change image, add start date and finish date */}
      <Project
        imgSrc={
          "../../public/projects/project-3.jpeg"
        }
        projectName={"Clothes Clothes Clothes"}
        description={
          "E-Commerece clothing web app, built with Redux for state management, styled components for styling, stripe for payments"
        }
        techStack={["React", "TypeScript"]}
        isActive={true}
        projectState={"DONE"}
        startDate={"TBD"}
        finishDate={"TBD"}
        projectHref={
          "https://adorable-strudel-5f2708.netlify.app/"
        }
        githubHref={
          "https://github.com/ElijahMwambazi/clothes-clothes-clothes"
        }
      />

      {/* Project 4 */}
      {/* TODO: Change description, add start date and finish date, change image*/}
      <Project
        imgSrc={
          "../../public/projects/project-3.jpeg"
        }
        projectName={"Trillo"}
        description={
          "The purpose of this project is to provide you with experience in mapping between phenomena in the real world (and data) and the possible distribution functions"
        }
        techStack={["HTML", "Sass", "JavaScript"]}
        isActive={true}
        projectState={"DONE"}
        startDate={"TBD"}
        finishDate={"TBD"}
        projectHref={
          "https://glittery-sopapillas-89c59c.netlify.app/"
        }
        githubHref={
          "https://github.com/ElijahMwambazi/Trillo"
        }
      />

      {/* Project 5 */}
      {/* TODO: Change description, add project href, add start date and finish date, change image*/}
      <Project
        imgSrc={
          "../../public/projects/project-3.jpeg"
        }
        projectName={"Natour"}
        description={
          "The purpose of this project is to provide you with experience in mapping between phenomena in the real world (and data) and the possible distribution functions"
        }
        techStack={["HTML", "Sass", "JavaScript"]}
        isActive={true}
        projectState={"DONE"}
        startDate={"TBD"}
        finishDate={"TBD"}
        projectHref={""}
        githubHref={
          "https://github.com/ElijahMwambazi/Natour"
        }
      />

      {/* Project 6 */}
      {/* TODO: Change description, add project href, add start date and finish date, change image*/}
      <Project
        imgSrc={
          "../../public/projects/project-3.jpeg"
        }
        projectName={"Omnifood"}
        description={
          "The purpose of this project is to provide you with experience in mapping between phenomena in the real world (and data) and the possible distribution functions"
        }
        techStack={["HTML", "Sass", "JavaScript"]}
        isActive={true}
        projectState={"DONE"}
        startDate={"TBD"}
        finishDate={"TBD"}
        projectHref={""}
        githubHref={
          "https://github.com/ElijahMwambazi/Omnifood"
        }
      />
    </div>
  );
};

export default ProjectsContainer;
