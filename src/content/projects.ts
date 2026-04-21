import type { Project } from "../types/project";
import lagRatLogo from "../assets/projects/lag-rat-logo.png";

// * PROJECT FORMAT
// {
//   slug: "project-slug",
//   title: "Project Title",
//   summary: "One-line summary.",
//   description: "Longer project description.",
//   stack: ["React", "TypeScript"],
//   featured: true,
//   githubUrl: "https://github.com/...",
//   liveUrl: "https://...",
//   logo: someLogo,
//   status: "In progress",
//   type: "Web app",
//   focus: "Tooling, education, visualization",
//   year: "2026",
//   overview: [
//     {
//       title: "What it is",
//       body: "Explain the project.",
//     },
//     {
//       title: "Current direction",
//       body: "Explain where it is going.",
//     },
//   ],
//   links: [
//     {
//       label: "Documentation",
//       href: "https://...",
//     },
//   ],
// }

export const projects: Project[] = [
  {
    slug: "lag-rat",
    title: "Lag Rat",
    summary:
      "Local network observability platform for home and local networks.",
    description:
      "Lag Rat is a local observability platform focused on visibility into connectivity, latency, DNS health, outages, alerts, and device activity through a local API and dashboard.",
    stack: ["Rust", "React", "TypeScript", "SQLite"],
    featured: true,
    githubUrl: "https://github.com/ElijahMwambazi/lag-rat",
    logo: lagRatLogo,
    status: "In progress",
    type: "Software project",
    focus: "Observability, local tooling, network visibility",
    year: "2026",
    overview: [
      {
        title: "What it is",
        body: "Lag Rat is a local-first observability tool for monitoring network conditions, outages, DNS health, latency, and device activity in a way that is practical and easy to reason about.",
      },
      {
        title: "Current direction",
        body: "The current focus is on refining the dashboard, strengthening backend behavior, improving the data model, and making the overall system clearer both technically and visually.",
      },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ElijahMwambazi/lag-rat",
      },
    ],
  },
];
