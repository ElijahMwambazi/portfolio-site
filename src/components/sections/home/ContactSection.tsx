import { Container } from "../../ui/Container";
import { SectionHeading } from "../../ui/SectionHeading";

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-white/10 py-20">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <SectionHeading title="Contact" />
            <p className="max-w-2xl text-neutral-300">
              Open to thoughtful conversations around software, open source,
              Bitcoin and Lightning, privacy, and useful tools.
            </p>
          </div>

          <div className="max-w-2xl leading-8 text-neutral-400">
            <p>
              GitHub:{" "}
              <a
                className="text-neutral-100 underline underline-offset-4 hover:text-white"
                href="https://github.com/ElijahMwambazi"
                target="_blank"
                rel="noreferrer"
              >
                ElijahMwambazi
              </a>
            </p>

            <p>
              Email:{" "}
              <a
                className="text-neutral-100 underline underline-offset-4 hover:text-white"
                href="mailto:elijahmwambazi@gmail.com"
              >
                elijahmwambazi@gmail.com
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
