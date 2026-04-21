type SectionHeadingProps = {
  title: string;
  eyebrow?: string;
};

export function SectionHeading({ title, eyebrow }: SectionHeadingProps) {
  return (
    <div className="mb-6">
      {eyebrow ? (
        <p className="mb-2 text-xs uppercase tracking-[0.18em] text-neutral-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
    </div>
  );
}
