import type { Note } from "../types/note";

// * NOTES FORMAT
// {
//   slug: "note-slug",
//   title: "Note title",
//   summary: "One-line summary.",
//   body: "Short fallback body.",
//   tags: ["tag1", "tag2"],
//   date: "2026-04-21",
//   featured: true,
//   category: "Category",
//   readTime: "3 min read",
//   sections: [
//     {
//       title: "Section title",
//       body: "Section content.",
//     },
//   ],
// }

export const notes: Note[] = [
  {
    slug: "why-this-site-exists",
    title: "Why this site exists",
    summary: "A short note on what I want this site to be.",
    body: "I wanted a space that feels simple, personal, and useful. Not just a list of projects, but a place to collect work, notes, and the ideas I keep returning to.",
    tags: ["meta", "website"],
    date: "2026-04-21",
    featured: true,
    category: "Meta",
    readTime: "2 min read",
    sections: [
      {
        title: "What I wanted",
        body: "I wanted this site to feel calm, clear, and personal. Not overly polished in a corporate way, but thoughtful enough to reflect how I think about software and the things I care about.",
      },
      {
        title: "Why notes matter here",
        body: "The notes section is important because a lot of what I’m interested in doesn’t fit neatly into project cards. Some things are better captured as reflections, technical notes, and ideas still taking shape.",
      },
    ],
  },
  {
    slug: "notes-on-useful-tools",
    title: "Notes on useful tools",
    summary: "A few thoughts on the kinds of software I’m drawn to.",
    body: "I’m especially interested in tools that make systems easier to inspect, understand, and work with. I like software that is calm, practical, and clear about what it is doing.",
    tags: ["tools", "software", "systems"],
    date: "2026-04-21",
    featured: false,
    category: "Software",
    readTime: "2 min read",
    sections: [
      {
        title: "What draws me in",
        body: "I’m drawn to tools that reduce confusion rather than add more abstraction. I like software that gives visibility into what is happening and makes it easier to reason about systems.",
      },
      {
        title: "What I keep coming back to",
        body: "Again and again, I find myself interested in tools around observability, diagnostics, local-first software, privacy, and interfaces that help people understand complexity without flattening it.",
      },
    ],
  },
];
