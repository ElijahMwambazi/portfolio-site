import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import NavBar from "./scenes/navbar.scenes";

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
      <NavBar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
}

export default App;
