import { Container } from "../../ui/Container";
import { SectionHeading } from "../../ui/SectionHeading";

const interests = [
  "Bitcoin",
  "Lightning",
  "Privacy",
  "Open Source",
  "Philosophy",
  "Literature",
  "Economics",
  "Data Science and Machine Learning",
  "AI",
  "Gardening",
];

const focus = [
  "Practical tooling",
  "Everyday useful software",
  "Bitcoin and Lightning",
  "Privacy",
  "Open source",
  "Rust",
  "TypeScript",
  "Linux",
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <div>
            <SectionHeading title="About" />
            <div className="max-w-3xl space-y-5 text-sm leading-7 text-neutral-300 sm:space-y-6 sm:text-base sm:leading-8">
              <p>
                I’m interested in building useful, everyday tools and in
                understanding how things work beneath the surface.
              </p>
              <p>
                My interests include software, Bitcoin, Lightning, privacy,
                philosophy, history, machine learning, deep learning, AI, and
                even slower offline things like gardening.
              </p>
              <p>
                Right now I’m mainly focused on practical tooling, open source,
                Bitcoin and Lightning, privacy, and getting better with Rust,
                TypeScript, and Linux.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.16em] text-neutral-400 sm:mb-4 sm:text-sm">
                Current focus
              </p>
              <div className="flex flex-wrap gap-2">
                {focus.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/2 px-3 py-1.5 text-xs text-neutral-400 sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.16em] text-neutral-400 sm:mb-4 sm:text-sm">
                Interests
              </p>
              <div className="flex flex-wrap gap-2">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/10 px-3 py-1.5 text-xs text-neutral-400 sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
