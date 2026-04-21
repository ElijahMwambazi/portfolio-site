import { Container } from "../../ui/Container";
import { SectionHeading } from "../../ui/SectionHeading";

const interests = [
  "Bitcoin",
  "Lightning",
  "Privacy",
  "Open Source",
  "Philosophy",
  "History",
  "Machine Learning",
  "Deep Learning",
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
    <section id="about" className="border-t border-white/10 py-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading title="About" />
            <div className="max-w-3xl space-y-5 text-neutral-300">
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
              <p className="mb-4 text-sm uppercase tracking-[0.16em] text-neutral-400">
                Current focus
              </p>
              <div className="flex flex-wrap gap-2">
                {focus.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/10 px-3 py-1.5 text-sm text-neutral-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.16em] text-neutral-400">
                Interests
              </p>
              <div className="flex flex-wrap gap-2">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/10 px-3 py-1.5 text-sm text-neutral-400"
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
