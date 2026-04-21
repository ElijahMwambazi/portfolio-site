export type NoteSection = {
  title: string;
  body: string;
};

export type Note = {
  slug: string;
  title: string;
  summary: string;
  body: string;
  tags: string[];
  date: string;
  featured?: boolean;
  category?: string;
  readTime?: string;
  sections?: NoteSection[];
};
