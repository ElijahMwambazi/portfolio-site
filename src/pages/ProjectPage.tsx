import { useParams } from "react-router-dom";
import { projects } from "../content/projects";
import { Container } from "../components/ui/Container";

export function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="py-20">
        <Container>
          <h1 className="text-2xl font-semibold">Project not found</h1>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-20">
      <Container>
        <h1 className="text-3xl font-semibold">{project.title}</h1>
        <p className="mt-4 max-w-3xl text-neutral-300">{project.description}</p>
      </Container>
    </section>
  );
}
