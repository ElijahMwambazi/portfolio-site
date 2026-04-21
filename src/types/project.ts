export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  stack: string[];
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  logo?: string;
};
