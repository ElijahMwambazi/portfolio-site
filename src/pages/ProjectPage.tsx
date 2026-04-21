import { Link, useParams } from "react-router-dom";
import { projects } from "../content/projects";
import { Container } from "../components/ui/Container";

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.86-2.78.62-3.37-1.21-3.37-1.21-.46-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .08 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.09 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.96-2.34 4.82-4.57 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 5h5v5" />
      <path d="M10 14 19 5" />
      <path d="M19 14v5h-5" />
      <path d="M5 10V5h5" />
      <path d="M5 19h5" />
      <path d="M5 5l5 5" />
    </svg>
  );
}

export function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-[0.16em] text-neutral-400 sm:text-sm">
              Work
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-50 sm:text-4xl">
              Project not found
            </h1>
            <p className="mt-4 text-sm leading-7 text-neutral-400 sm:text-base sm:leading-8">
              The project you’re looking for doesn’t exist or hasn’t been added
              yet.
            </p>
            <Link
              to="/work"
              className="mt-8 inline-flex items-center justify-center rounded-xl border border-white/15 bg-white px-4 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-200"
            >
              Back to work
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  const projectLinks = project.links ?? [];
  const hasGitHub = Boolean(project.githubUrl);
  const infoItems = [
    { label: "Type", value: project.type ?? "Software project" },
    {
      label: "Focus",
      value: project.focus ?? "Practical tooling and clear systems",
    },
    { label: "Stack", value: project.stack.join(" · ") },
    { label: "Status", value: project.status ?? "In progress" },
  ].filter((item) => item.value);

  const contentSections =
    project.overview && project.overview.length > 0
      ? project.overview
      : [
          {
            title: "What it is",
            body: `${project.title} is part of my broader interest in building tools that are useful in everyday practice and easier to reason about.`,
          },
          {
            title: "Current direction",
            body: "This project is still evolving. The next step is to deepen the implementation, refine the user experience, and keep improving the structure so it communicates the project clearly both technically and visually.",
          },
        ];

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-212.5 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_42%)]" />

      <Container>
        <div className="relative z-10">
          <Link
            to="/work"
            className="mb-8 inline-flex text-sm text-neutral-400 transition hover:text-white"
          >
            ← Back to work
          </Link>

          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div>
              <div className="flex items-start gap-4">
                {project.logo ? (
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/4 p-2 backdrop-blur-md">
                    <img
                      src={project.logo}
                      alt={`${project.title} logo`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ) : null}

                <div className="min-w-0">
                  <p className="mb-3 text-xs uppercase tracking-[0.16em] text-neutral-400 sm:text-sm">
                    {project.year ? `Project · ${project.year}` : "Project"}
                  </p>

                  <h1 className="text-3xl font-semibold tracking-tight text-neutral-50 sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                    {project.title}
                  </h1>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-300 sm:text-base sm:leading-8 lg:text-lg">
                    {project.summary}
                  </p>
                </div>
              </div>

              <p className="mt-8 max-w-3xl text-sm leading-7 text-neutral-400 sm:text-base sm:leading-8">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-xs text-neutral-300 backdrop-blur-md sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                {hasGitHub ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-neutral-300 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/8 hover:text-white"
                  >
                    <GitHubIcon />
                  </a>
                ) : null}

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white px-4 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-200"
                  >
                    View live
                  </a>
                ) : null}

                {projectLinks
                  .filter(
                    (link) =>
                      link.href !== project.githubUrl &&
                      link.href !== project.liveUrl,
                  )
                  .map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 transition hover:text-white"
                    >
                      <ExternalLinkIcon />
                      <span>{link.label}</span>
                    </a>
                  ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-6">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-16 left-8 h-40 w-40 rounded-full bg-sky-400/10 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-violet-400/10 blur-3xl" />
              </div>

              <div className="relative z-10">
                <p className="mb-4 text-xs uppercase tracking-[0.16em] text-neutral-500">
                  Overview
                </p>

                <div className="space-y-5">
                  {infoItems.map((item) => (
                    <div key={item.label}>
                      <p className="text-sm text-neutral-500">{item.label}</p>
                      <p className="mt-1 text-sm font-medium text-neutral-100 sm:text-base">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {contentSections.map((section) => (
              <div
                key={section.title}
                className="rounded-3xl border border-white/10 bg-white/3 p-5 sm:p-6"
              >
                <p className="mb-4 text-xs uppercase tracking-[0.16em] text-neutral-500">
                  {section.title}
                </p>
                <p className="text-sm leading-7 text-neutral-400 sm:text-base sm:leading-8">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
