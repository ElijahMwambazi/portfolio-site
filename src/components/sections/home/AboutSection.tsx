import { Container } from "../../ui/Container";
import { SectionHeading } from "../../ui/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <Container>
        <SectionHeading title="About" />
        <div className="max-w-3xl space-y-4 text-neutral-300">
          <p>
            I’m interested in building useful, everyday tools and in
            understanding how things work beneath the surface.
          </p>
          <p>
            My interests include software, Bitcoin, Lightning, privacy,
            philosophy, history, machine learning, deep learning, AI, and even
            slower offline things like gardening.
          </p>
          <p>
            Right now I’m mainly focused on practical tooling, open source,
            Bitcoin and Lightning, privacy, and getting better with Rust,
            TypeScript, and Linux.
          </p>
        </div>
      </Container>
    </section>
  );
}
