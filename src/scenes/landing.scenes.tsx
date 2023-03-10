import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SetSelectedPage } from "../App";
import ProfilePicture from "../assets/profile-image.png";

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
      className="md:flex mdjustify-between md:items md:h-full gap-16 py-10"
    >
      {/* IMAGE */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:h-full before:max-w-[400px] before:border-2 before:border-blue before:z-[-1]">
            <img
              src={ProfilePicture}
              alt="Elijah Mwambazi Profile Image"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
            />
          </div>
        ) : (
          <img
            src={ProfilePicture}
            alt="Elijah Mwambazi Profile Image"
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
          />
        )}
      </div>
    </section>
  );
};

export default Landing;
