import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import {
  IsTopOfPage,
  SelectedPage,
  SetSelectedPage,
} from "../App";
import MenuButton from "../components/menu-button.component";
import { ReactComponent as MenuIcon } from "../assets/menu-icon.svg";
import { ReactComponent as CloseMenu } from "../assets/close-icon.svg";
import NavBarLinks from "../components/navbar-links.component";

export type NavBarProps = {
  isTopOfPage: IsTopOfPage;
  selectedPage: SelectedPage;
  setSelectedPage: SetSelectedPage;
};

const NavBar = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}: NavBarProps) => {
  const navBarBackground = isTopOfPage
    ? ""
    : "bg-red";
  const [isMenuToggled, setIsMenuToggled] =
    useState(false);
  const isAboveSmallScreens = useMediaQuery(
    "(min-width: 768px)"
  );

  return (
    <nav
      className={`z-40 w-full fixed top-0 py-6 ${navBarBackground}`}
    >
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">
          EM
        </h4>

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <NavBarLinks
            className="flex items-center justify-between gap-16 font-opensans text-sm font-semibold"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        ) : (
          <MenuButton
            svg={<MenuIcon />}
            isMenuToggled={isMenuToggled}
            setIsMenuToggled={setIsMenuToggled}
          />
        )}

        {/* MOBILE NAVBAR POPUP */}
        {!isAboveSmallScreens &&
          isMenuToggled && (
            <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
              {/* MOBLIE NAVBAR CLOSE BUTTON */}
              <div className="flex justify-end p-12">
                <MenuButton
                  svg={<CloseMenu />}
                  isMenuToggled={isMenuToggled}
                  setIsMenuToggled={
                    setIsMenuToggled
                  }
                />
              </div>

              {/* MOBILE NAVBAR LINKS */}
              <NavBarLinks
                className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          )}
      </div>
    </nav>
  );
};

export default NavBar;
