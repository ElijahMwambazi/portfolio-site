import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import NavBar from "./scenes/navbar.scenes";
import DotGroup from "./scenes/dot-group.scenes";
import Landing from "./scenes/landing.scenes";
import CursorTrailer from "./components/cursor-trailer.component";

export type IsTopOfPage = boolean;
export type SelectedPage = string;
export type SetSelectedPage = (
  page: string
) => void;

function App() {
  const [isTopOfPage, setIsTopOfPage] =
    useState(true);
  const [selectedPage, setSelectedPage] =
    useState("home");
  const isAboveMediumScreens = useMediaQuery(
    "(min-width: 1060px)"
  );

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
    <div className="app bg-deep-blue">
      <CursorTrailer />
      <NavBar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing
          setSelectedPage={setSelectedPage}
        />
      </div>
    </div>
  );
}

export default App;
