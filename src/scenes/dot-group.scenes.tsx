import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  SelectedPage,
  SetSelectedPage,
} from "../App";
import Dot from "../components/dot.component";

export type DotGroupProps = {
  selectedPage: SelectedPage;
  setSelectedPage: SetSelectedPage;
};

const DotGroup = ({
  selectedPage,
  setSelectedPage,
}: DotGroupProps) => {
  const selectedStyles = `relative bg-yellow w-3 h-3 rounded-full before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%] z-2`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <Dot
        page="home"
        selectedStyles={selectedStyles}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Dot
        page="skills"
        selectedStyles={selectedStyles}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Dot
        page="projects"
        selectedStyles={selectedStyles}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Dot
        page="testimonials"
        selectedStyles={selectedStyles}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Dot
        page="contacts"
        selectedStyles={selectedStyles}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
};

export default DotGroup;
