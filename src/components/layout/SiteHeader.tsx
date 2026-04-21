import { Link, NavLink, useLocation } from "react-router-dom";

export function SiteHeader() {
  const location = useLocation();

  const contactHref = location.pathname === "/" ? "#contact" : "/#contact";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-sm font-semibold tracking-[0.2em] text-neutral-100 uppercase"
        >
          EM
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium text-neutral-300">
          <NavLink to="/" className="transitionhover:text-white">
            Home
          </NavLink>
          <NavLink to="/work" className="transition hover:text-white">
            Work
          </NavLink>
          <NavLink to="/notes" className="transition hover:text-white">
            Notes
          </NavLink>
          <a href={contactHref} className="transition hover:text-white">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
