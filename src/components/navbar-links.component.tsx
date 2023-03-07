import {
  SelectedPage,
  SetSelectedPage,
} from "../App";
import Link from "./link.component";

export type NavBarProps = {
  className?: string;
  selectedPage: SelectedPage;
  setSelectedPage: SetSelectedPage;
};

const NavBarLinks = ({
  className,
  selectedPage,
  setSelectedPage,
}: NavBarProps) => {
  return (
    <div className={`${className}`}>
      <Link
        page="home"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page="skills"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page="projects"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page="testimonials"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page="contact"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
};

export default NavBarLinks;
