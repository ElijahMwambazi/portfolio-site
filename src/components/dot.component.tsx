import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  SelectedPage,
  SetSelectedPage,
} from "../App";

export type DotProps = {
  page: string;
  selectedStyles: string;
  selectedPage: SelectedPage;
  setSelectedPage: SetSelectedPage;
};

const Dot = ({
  page,
  selectedStyles,
  selectedPage,
  setSelectedPage,
}: DotProps) => {
  return (
    <AnchorLink
      className={`${
        selectedPage === `${page}`
          ? selectedStyles
          : "bg-dark-gray w-3 h-3 rounded-full"
      }
  `}
      href={`#${page}`}
      onClick={() => setSelectedPage(`${page}`)}
    />
  );
};

export default Dot;
