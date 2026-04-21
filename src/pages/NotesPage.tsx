import { Link } from "react-router-dom";
import { notes } from "../content/notes";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";

export function NotesPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading title="Notes" />
        <div className="grid gap-6">
          {notes.map((note) => (
            <article
              key={note.slug}
              className="rounded-lg border border-white/10 p-6"
            >
              <h3 className="text-xl font-semibold">{note.title}</h3>
              <p className="mt-2 text-neutral-300">{note.summary}</p>
              <p className="mt-3 text-sm text-neutral-500">{note.date}</p>
              <div className="mt-4">
                <Link
                  to={`/notes/${note.slug}`}
                  className="underline hover:text-white"
                >
                  Read note
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
