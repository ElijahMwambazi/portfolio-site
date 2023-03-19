import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import Heading from "../components/heading.component";

const Skills = () => {
  const isAboveMediumScreens = useMediaQuery(
    "(min-width: 1060px)"
  );
  return (
    <section
      id="skills"
      className="relative mt-24 pb-24"
    >
      {/* HEADER AND IMAGE */}
      <div className="flex md:flex md:justify-between md:gap-16">
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
          <Heading
            firstPartOfText={"Sk"}
            secondPartOfText={"ills"}
          />
          <p
            className="font-playfair mt-10 mb-7 text-3
            text-justify leading-7 md:text-start"
          ></p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div></div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
