import { Link } from "react-router-dom";
import { Container } from "../../ui/Container";

export function HeroSection() {
  return (
    <section className="pt-24 pb-20 sm:pt-32 sm:pb-24">
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
              className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white px-4 py-2.5 text-sm font-semibold text-black! shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-neutral-100 hover:shadow-[0_0_24px_rgba(255,255,255,0.18)] hover:text-black! visited:text-black! active:translate-y-0 active:scale-[0.99] active:text-black! focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              View work
            </Link>

            <Link
              to="/notes"
              className="inline-flex items-center justify-center rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium text-neutral-100! transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-black! hover:shadow-[0_8px_24px_rgba(255,255,255,0.08)] visited:text-neutral-100! active:translate-y-0 active:text-neutral-100! focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Read notes
            </Link>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium text-neutral-100! transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-black! hover:shadow-[0_8px_24px_rgba(255,255,255,0.08)] visited:text-neutral-100! active:translate-y-0 active:text-neutral-100! focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Contact
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
