import { useParams } from "react-router-dom";
import { notes } from "../content/notes";
import { Container } from "../components/ui/Container";

export function NotePage() {
  const { slug } = useParams();
  const note = notes.find((item) => item.slug === slug);

  if (!note) {
    return (
      <section className="py-20">
        <Container>
          <h1 className="text-2xl font-semibold">Note not found</h1>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-20">
      <Container>
        <h1 className="text-3xl font-semibold">{note.title}</h1>
        <p className="mt-2 text-sm text-neutral-500">{note.date}</p>
        <div className="mt-6 max-w-3xl text-neutral-300">
          <p>{note.body}</p>
        </div>
      </Container>
    </section>
  );
}
