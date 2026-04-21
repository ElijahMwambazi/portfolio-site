import { Link } from "react-router-dom";
import { Container } from "../../ui/Container";

export function HeroSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm text-neutral-400">
            Lusaka, Zambia · Rust / TypeScript / Linux
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Useful tools, clear systems, and ideas that hold up under pressure.
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-300">
            I’m Elijah Mwambazi. I’m interested in practical software, Bitcoin
            and Lightning, privacy, open source, and the kinds of tools that
            make complex systems easier to understand.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/work"
              className="rounded-md border border-white/15 px-4 py-2 hover:bg-white hover:text-black"
            >
              View work
            </Link>
            <Link
              to="/notes"
              className="rounded-md border border-white/15 px-4 py-2 hover:bg-white hover:text-black"
            >
              Read notes
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
