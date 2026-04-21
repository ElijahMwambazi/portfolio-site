type SectionHeadingProps = {
  title: string;
  eyebrow?: string;
};

export function SectionHeading({ title, eyebrow }: SectionHeadingProps) {
  return (
    <div className="mb-5 sm:mb-6">
      {eyebrow ? (
        <p className="mb-2 text-xs uppercase tracking-[0.18em] text-neutral-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-xl font-semibold tracking-tight text-neutral-100 sm:text-2xl">
        {title}
      </h2>
    </div>
  );
}
