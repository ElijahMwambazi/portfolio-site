import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    slug: "lag-rat",
    title: "Lag Rat",
    summary: "Local network observability platform.",
    description:
      "A project focused on visibility into connectivity, latency, outages, and device activity.",
    stack: ["Rust", "React", "TypeScript", "SQLite"],
    featured: true,
    githubUrl: "https://github.com/ElijahMwambazi/lag-rat",
  },
];