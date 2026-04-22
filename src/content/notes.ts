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
    slug: "why-i-use-polar-for-bitcoin-and-lightning-prototyping",
    title: "Why I use Polar for Bitcoin and Lightning prototyping",
    summary:
      "A short note on how Polar helped me build practical intuition around Bitcoin Core, Lightning, regtest, and local Bitcoin application development.",
    body: "Polar has been one of the most useful tools for making Bitcoin and Lightning feel more concrete to me. Instead of only reading about nodes, channels, invoices, and payments, it gave me a local environment where I could actually work with them and see how the pieces fit together.",
    tags: ["bitcoin", "lightning", "polar", "regtest", "tooling"],
    date: "2026-04-22",
    featured: true,
    category: "Bitcoin",
    readTime: "3 min read",
    sections: [
      {
        title: "Why it helped",
        body: "Polar made it easier for me to move from theory into practice. It gave me a controlled environment for experimenting with Bitcoin Core and Lightning nodes locally, without worrying about real funds or relying on external infrastructure. That made it much easier to build intuition around how the system behaves.",
      },
      {
        title: "What I used it for",
        body: "I have used Polar to get more familiar with Bitcoin Core, the Lightning Network, and the process of prototyping Bitcoin applications around them. Working in regtest made it possible to create local nodes, connect them, fund them, and test flows in a way that felt immediate and practical.",
      },
      {
        title: "Why regtest matters",
        body: "Regtest is useful because it turns Bitcoin and Lightning into something you can actively work with instead of only study from a distance. It creates a space for experimentation, mistakes, and iteration. For prototyping, that matters a lot because it shortens the gap between an idea and something testable.",
      },
      {
        title: "What I keep taking from it",
        body: "What I like most about Polar is that it helps make Bitcoin development feel tangible. It gives structure to experimentation and makes the network easier to reason about. For me, it has been a useful bridge between learning Bitcoin conceptually and starting to think more seriously about building applications around it.",
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
