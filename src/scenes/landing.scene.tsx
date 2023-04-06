import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { SetSelectedPage } from "../App";
import ProfileImage from "../components/profile-image.component";
import RandomizedText from "../components/randomized-text.componenet";
import Button from "../components/button.component";
import SocialMediaLinks from "../components/social-media-links.component";

export type LandingProps = {
  setSelectedPage: SetSelectedPage;
};

const Landing = ({
  setSelectedPage,
}: LandingProps) => {
  const isAboveMediumScreens = useMediaQuery(
    "(min-width: 1060px"
  );

  return (
    <section
      id="home"
      className="section-landing md:flex md:justify-between md:items-center sm:py-0"
    >
      {/* IMAGE */}
      <motion.div
        className="md:order-2 flex justify-center basis-3/5 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {isAboveMediumScreens ? (
          <div>
            <ProfileImage />
          </div>
        ) : (
          <ProfileImage />
        )}
      </motion.div>

      {/* TEXT */}
      <div className="z-30 basis-2/5 md:mt-32 md:text-center mt-12">
        {/* HEADING */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <RandomizedText
            className="font-bungee text-6xl capitalize z-10 md:text-start"
            textToRandomize="Elijah"
            singleWord={true}
          />
          <RandomizedText
            className="font-bungee text-6xl text-dark-gray capitalize z-10 md:text-start"
            textToRandomize="Mwambazi"
            singleWord={true}
          />
          <RandomizedText
            className="font-josefinSans mt-10 text-justify leading-7 md:text-start"
            textToRandomize="Software engineer who enjoys connecting
            the dots: be it ideas from different
            disciplines, people from different teams, or
            applications from different industries. I have
            strong technical skills and an academic
            background in engineering, statistics, and
            software development. My passion lies in
            solving business problems with tailored data
            and algorithms, communicating complex
            ideas to non-technical stakeholders. I am
            able to jump across vertices to deliver
            high-performing technical business solutions."
            singleWord={false}
          />
        </motion.div>

        {/* CALL TO ACTION */}
        <motion.div
          className="flex justify-center md:justify-start mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex gap-4">
            <Button
              href="https://drive.google.com/file/d/1Hs3wCMTGyyTun-JotnUaEFdV24GlIgB_/view?usp=sharing"
              text="Download CV"
              animated={false}
              isWordSingle={false}
            />

            <Button
              action={() =>
                setSelectedPage("contact")
              }
              href="#contact"
              text="Contact Me"
              animated={true}
              isWordSingle={false}
            />
          </div>
        </motion.div>

        {/* SOCIALS */}
        <motion.div
          className="flex justify-center md:justify-start mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaLinks />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
