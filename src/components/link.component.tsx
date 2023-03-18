import Anchorlink from "react-anchor-link-smooth-scroll";
import {
  SelectedPage,
  SetSelectedPage,
} from "../App";
import RandomizedText from "./randomized-text.componenet";

export type LinkProps = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: SetSelectedPage;
};

const Link = ({
  page,
  selectedPage,
  setSelectedPage,
}: LinkProps) => {
  const lowerCasePage = page.toLowerCase();

  return (
    <Anchorlink
      className={`${
        selectedPage === lowerCasePage
          ? "text-yellow"
          : ""
      }
      hover:text-yellow transition duration-500
      `}
      href={`#${lowerCasePage}`}
      onClick={() =>
        setSelectedPage(lowerCasePage)
      }
    >
      {
        <RandomizedText
          textToRandomize={page}
          singleWord={false}
        />
      }
    </Anchorlink>
  );
};

export default Link;
