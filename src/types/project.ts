export type ProjectSection = {
  title: string;
  body: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

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
  status?: string;
  type?: string;
  focus?: string;
  year?: string;
  overview?: ProjectSection[];
  links?: ProjectLink[];
};
