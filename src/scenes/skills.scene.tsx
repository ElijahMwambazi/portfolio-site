import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import Particles from "./particles.scene";
import Line from "../components/line.component";

const Skills = () => {
  const isAboveMediumScreens = useMediaQuery(
    "(min-width: 1060px)"
  );
  return (
    <section
      id="skills"
      className="relative pt-12 pb-24"
    >
      <Particles />
      {/* HEADER AND IMAGE */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-montserrat capitalize font-semibold text-2xl mb-5">
            My{" "}
            <span className="text-yellow">
              Skills
            </span>
          </p>
          <Line />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
