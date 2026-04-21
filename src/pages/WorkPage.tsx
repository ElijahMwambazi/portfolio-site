import { Link } from "react-router-dom";
import { projects } from "../content/projects";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";

export function WorkPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading title="Work" />
        <div className="grid gap-6">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="rounded-lg border border-white/10 p-6"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-neutral-300">{project.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-white/10 px-2 py-1 text-sm text-neutral-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <Link
                  to={`/work/${project.slug}`}
                  className="underline hover:text-white"
                >
                  View project
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
