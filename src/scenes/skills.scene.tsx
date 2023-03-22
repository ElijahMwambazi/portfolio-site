import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import Heading from "../components/heading.component";
import SkillCard from "../components/skill-card.component";
import { ReactComponent as ReactIcon } from "../assets/skills/react.svg";
import { ReactComponent as TypeScriptIcon } from "../assets/skills/type-script.svg";
import { ReactComponent as JavaScriptIcon } from "../assets/skills/java-script.svg";
import { ReactComponent as PythonIcon } from "../assets/skills/python.svg";

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
      <div className="md:flex flex-col md:justify-between md:gap-16">
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
              firstPartOfText={"Sk"}
              secondPartOfText={"ills"}
            />
          </div>
          {/* <p
            className="font-playfair mt-10 mb-7 text-3
            text-justify leading-7 md:text-start"
          >
            Skill ranging from pr
          </p> */}
        </motion.div>

        <div className="grid grid-cols-3 gap-4 w-full px-10">
          <SkillCard
            skillIcon={
              <JavaScriptIcon className="w-8 h-8" />
            }
            title="JavaScript"
            percentage={80}
          />
          <SkillCard
            skillIcon={
              <TypeScriptIcon className="w-8 h-8" />
            }
            title="TypeScript"
            percentage={80}
          />
          <SkillCard
            skillIcon={
              <ReactIcon className="w-8 h-8" />
            }
            title="React"
            percentage={90}
          />
          <SkillCard
            skillIcon={
              <PythonIcon className="w-8 h-8" />
            }
            title="Python"
            percentage={80}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
