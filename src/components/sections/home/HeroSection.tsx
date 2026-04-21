import { Link } from "react-router-dom";
import { Container } from "../../ui/Container";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />

      <Container>
        <div className="relative max-w-4xl">
          <p className="mb-5 text-sm tracking-[0.16em] text-neutral-400 uppercase">
            Lusaka, Zambia · Rust / TypeScript / Linux
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-neutral-50 sm:text-6xl sm:leading-[1.05]">
            Useful tools, clear systems, and ideas that hold up under pressure.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">
            I’m Elijah Mwambazi, a developer interested in practical software,
            Bitcoin and Lightning, privacy, open source, and building tools that
            make complex systems easier to understand.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/work"
              className="rounded-md border border-white/15 bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-neutral-200"
            >
              View work
            </Link>

            <Link
              to="/notes"
              className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium text-neutral-100 transition hover:bg-white hover:text-black"
            >
              Read notes
            </Link>

            <a
              href="#contact"
              className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium text-neutral-100 transition hover:bg-white hover:text-black"
            >
              Contact
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
