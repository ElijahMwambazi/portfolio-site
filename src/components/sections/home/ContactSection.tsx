import { Container } from "../../ui/Container";
import { SectionHeading } from "../../ui/SectionHeading";

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <Container>
        <SectionHeading title="Contact" />
        <div className="space-y-3 text-neutral-300">
          <p>
            GitHub:{" "}
            <a
              className="underline hover:text-white"
              href="https://github.com/ElijahMwambazi"
              target="_blank"
              rel="noreferrer"
            >
              github.com/ElijahMwambazi
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              className="underline hover:text-white"
              href="mailto:.elijajmwambaxi@gmail.com"
            >
              you@example.com
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
