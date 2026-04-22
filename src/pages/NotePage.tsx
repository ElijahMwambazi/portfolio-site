import { Link, useParams } from "react-router-dom";
import { notes } from "../content/notes";
import { Container } from "../components/ui/Container";

export function NotePage() {
  const { slug } = useParams();
  const note = notes.find((item) => item.slug === slug);

  if (!note) {
    return (
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-[0.16em] text-neutral-400 sm:text-sm">
              Notes
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-50 sm:text-4xl">
              Note not found
            </h1>
            <p className="mt-4 text-sm leading-7 text-neutral-400 sm:text-base sm:leading-8">
              The note you’re looking for doesn’t exist or hasn’t been added
              yet.
            </p>
            <Link
              to="/notes"
              className="mt-8 inline-flex items-center justify-center rounded-xl border border-white/15 bg-white px-4 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-200"
            >
              Back to notes
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  const contentSections =
    note.sections && note.sections.length > 0
      ? note.sections
      : [
          {
            title: "Note",
            body: note.body,
          },
        ];

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-130 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_42%)] sm:h-175 lg:h-212.5" />

      <Container>
        <div className="relative z-10">
          <Link
            to="/notes"
            className="mb-6 inline-flex text-sm text-neutral-400 transition hover:text-white sm:mb-8"
          >
            ← Back to notes
          </Link>

          <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div>
              <p className="mb-2 text-[11px] uppercase tracking-[0.16em] text-neutral-400 sm:mb-3 sm:text-sm">
                {note.category ? `Note · ${note.category}` : "Note"}
              </p>

              <h1 className="text-2xl font-semibold tracking-tight text-neutral-50 leading-[1.08] sm:text-4xl lg:text-6xl lg:leading-[1.05]">
                {note.title}
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-300 sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">
                {note.summary}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-2 sm:mt-8 sm:gap-3">
                {note.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-xs text-neutral-300 backdrop-blur-md sm:text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:p-5 lg:p-6">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-16 left-8 h-40 w-40 rounded-full bg-sky-400/10 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-violet-400/10 blur-3xl" />
              </div>

              <div className="relative z-10">
                <p className="mb-4 text-xs uppercase tracking-[0.16em] text-neutral-500">
                  Overview
                </p>

                <div className="space-y-5">
                  <div>
                    <p className="text-sm text-neutral-500">Category</p>
                    <p className="mt-1 text-sm font-medium text-neutral-100 sm:text-base">
                      {note.category ?? "General"}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-neutral-500">Published</p>
                    <p className="mt-1 text-sm font-medium text-neutral-100 sm:text-base">
                      {note.date}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-neutral-500">Read time</p>
                    <p className="mt-1 text-sm font-medium text-neutral-100 sm:text-base">
                      {note.readTime ?? "Short note"}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-neutral-500">Tags</p>
                    <p className="mt-1 text-sm font-medium text-neutral-100 sm:text-base">
                      {note.tags.join(" · ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-2">
            {contentSections.map((section) => (
              <div
                key={section.title}
                className="rounded-3xl border border-white/10 bg-white/3 p-4 sm:p-5 lg:p-6"
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

          {!note.sections || note.sections.length === 0 ? (
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/3 p-4 sm:mt-12 sm:p-5 lg:p-6">
              <p className="text-sm leading-7 text-neutral-400 sm:text-base sm:leading-8">
                {note.body}
              </p>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
