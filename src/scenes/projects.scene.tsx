import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import Heading from "../components/heading.component";
import ProjectsContainer from "../components/projects-container.component";

const Projects = () => {
  const isAboveMediumScreens = useMediaQuery(
    "(min-width: 1060px"
  );

  return (
    <section
      id="projects"
      className="relative mt-24 pb-24"
    >
      <motion.div
        className="md:w-1/3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="flex">
          <Heading
            firstPartOfText={"pro"}
            secondPartOfText={"jects"}
          />
        </div>
      </motion.div>

      {/* Projects Container */}
      <motion.div
        className="md:w-1/3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <ProjectsContainer />
      </motion.div>
    </section>
  );
};

export default Projects;
