import { Link, NavLink, useLocation } from "react-router-dom";

export function SiteHeader() {
  const location = useLocation();

  const contactHref = location.pathname === "/" ? "#contact" : "/#contact";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-semibold tracking-wide">
          Elijah Mwambazi
        </Link>

        <nav className="flex items-center gap-6 text-sm text-neutral-300">
          <NavLink to="/" className="hover:text-white">
            Home
          </NavLink>
          <NavLink to="/work" className="hover:text-white">
            Work
          </NavLink>
          <NavLink to="/notes" className="hover:text-white">
            Notes
          </NavLink>
          <a href={contactHref} className="hover:text-white">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
