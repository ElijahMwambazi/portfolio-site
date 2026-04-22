import { Link } from "react-router-dom";
import { notes } from "../content/notes";
import { Container } from "../components/ui/Container";

export function NotesPage() {
  const featuredNotes = notes.filter((note) => note.featured);
  const otherNotes = notes.filter((note) => !note.featured);

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-130 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_42%)] sm:h-175 lg:h-212.5" />

      <Container>
        <div className="relative z-10 flex h-full flex-col">
          <div className="max-w-3xl">
            <p className="mb-3 text-[11px] uppercase tracking-[0.16em] text-neutral-400 sm:mb-4 sm:text-sm">
              Notes
            </p>

            <h1 className="text-2xl font-semibold tracking-tight text-neutral-50 leading-[1.08] sm:text-4xl lg:text-6xl lg:leading-[1.05]">
              Notes, ideas, and things I’m learning.
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-300 sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">
              A place for technical notes, reflections, and ideas around
              software, Bitcoin and Lightning, privacy, Linux, and other things
              I keep returning to.
            </p>
          </div>

          {featuredNotes.length > 0 ? (
            <div className="mt-10 sm:mt-12 lg:mt-14">
              <div className="mb-5 flex flex-col gap-2 sm:mb-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <h2 className="text-lg font-medium text-neutral-100 sm:text-xl">
                  Featured
                </h2>
                <p className="text-sm text-neutral-500">
                  {featuredNotes.length} note
                  {featuredNotes.length > 1 ? "s" : ""}
                </p>
              </div>

              <div className="grid items-start gap-5 sm:gap-6 lg:grid-cols-2">
                {featuredNotes.map((note) => (
                  <article
                    key={note.slug}
                    className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5 lg:p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_rgba(0,0,0,0.32)]"
                  >
                    <div className="pointer-events-none absolute inset-0">
                      <div className="absolute -top-16 left-8 h-40 w-40 rounded-full bg-sky-400/10 blur-3xl transition-all duration-300 group-hover:bg-sky-400/15" />
                      <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-violet-400/10 blur-3xl transition-all duration-300 group-hover:bg-violet-400/15" />
                    </div>

                    <div className="relative z-10 flex h-full flex-col">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <h3 className="text-lg font-semibold tracking-tight text-neutral-100 sm:text-xl lg:text-2xl">
                            {note.title}
                          </h3>
                          <p className="mt-2 line-clamp-2 text-sm leading-7 text-neutral-400 sm:text-base">
                            {note.summary}
                          </p>
                        </div>

                        <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs uppercase tracking-[0.16em] text-neutral-300 backdrop-blur-md">
                          Featured
                        </span>
                      </div>

                      <p className="mt-5 line-clamp-4 text-sm leading-7 text-neutral-300 sm:mt-6 sm:text-base sm:leading-8">
                        {note.body.length > 220
                          ? `${note.body.slice(0, 220)}...`
                          : note.body}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {note.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs text-neutral-200 backdrop-blur-md sm:text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto pt-6 flex flex-col gap-3 sm:pt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                        <p className="text-sm text-neutral-500">{note.date}</p>

                        <Link
                          to={`/notes/${note.slug}`}
                          className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white px-4 py-2.5 text-sm font-semibold text-black! transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-200 sm:w-auto"
                        >
                          Read note
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ) : null}

          {otherNotes.length > 0 ? (
            <div className="mt-12 sm:mt-14 lg:mt-16">
              <div className="mb-5 flex flex-col gap-2 sm:mb-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <h2 className="text-lg font-medium text-neutral-100 sm:text-xl">
                  More notes
                </h2>
                <p className="text-sm text-neutral-500">
                  {otherNotes.length} note
                  {otherNotes.length > 1 ? "s" : ""}
                </p>
              </div>

              <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
                {otherNotes.map((note) => (
                  <article
                    key={note.slug}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/4 p-4 sm:p-5 backdrop-blur-lg transition-all duration-300 hover:border-white/20 hover:bg-white/6 hover:shadow-[0_16px_40px_rgba(0,0,0,0.22)]"
                  >
                    <div className="pointer-events-none absolute inset-0">
                      <div className="absolute -right-10 top-0 h-24 w-24 rounded-full bg-white/5 blur-2xl" />
                    </div>

                    <div className="relative z-10 flex h-full flex-col">
                      <h3 className="text-lg font-semibold text-neutral-100">
                        {note.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-neutral-400">
                        {note.summary}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {note.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex items-center justify-between gap-3">
                        <p className="text-xs text-neutral-500">{note.date}</p>

                        <Link
                          to={`/notes/${note.slug}`}
                          className="text-sm font-medium text-neutral-300 transition hover:text-white"
                        >
                          Read note
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ) : null}

          {notes.length === 0 ? (
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/3 p-5 sm:mt-12 sm:p-6 lg:p-8">
              <h2 className="text-xl font-semibold text-neutral-100">
                No notes yet
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base sm:leading-8">
                This section will hold technical notes, reflections, and
                learning logs as the site grows.
              </p>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
