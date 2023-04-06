import {
  Fragment,
  useEffect,
  useState,
} from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import NavBar from "./scenes/navbar.scene";
import DotGroup from "./scenes/dot-group.scene";
import Landing from "./scenes/landing.scene";
import CursorTrailer from "./components/cursor-trailer.component";
import WelcomeScreen from "./scenes/welcome-screen.scene";
import Skills from "./scenes/skills.scene";
import Particles from "./scenes/particles.scene";
import Projects from "./scenes/projects.scene";
import ShootingStars from "./components/shooting-stars.component";

export type IsTopOfPage = boolean;
export type SelectedPage = string;
export type SetSelectedPage = (
  page: string
) => void;

function App() {
  const [showContent, setShowContent] =
    useState(false);
  const [isTopOfPage, setIsTopOfPage] =
    useState(true);
  const [selectedPage, setSelectedPage] =
    useState("home");

  const isAboveMediumScreens = useMediaQuery(
    "(min-width: 1060px)"
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0)
        setIsTopOfPage(true);

      if (window.scrollY !== 0)
        setIsTopOfPage(false);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <div className="app">
      <div className="relative selection:bg-yellow selection:text-black overflow-hidden">
        {showContent ? (
          <Fragment>
            {isAboveMediumScreens && (
              <CursorTrailer />
            )}
            <NavBar
              isTopOfPage={isTopOfPage}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <div className="w-5/6 mx-auto md:h-full">
              {isAboveMediumScreens && (
                <DotGroup
                  selectedPage={selectedPage}
                  setSelectedPage={
                    setSelectedPage
                  }
                />
              )}
              <Landing
                setSelectedPage={setSelectedPage}
              />
            </div>
            <Particles className={"mt-20"} />
            <div className="w-5/6 mx-auto md:h-full">
              <Skills />
            </div>
            <Particles />
            <div className="relative w-5/6 mx-auto md:h-full">
              <Projects />
              {/* <ShootingStars /> */}
            </div>
            <Particles />
          </Fragment>
        ) : (
          <WelcomeScreen />
        )}
      </div>
    </div>
  );
}

export default App;
