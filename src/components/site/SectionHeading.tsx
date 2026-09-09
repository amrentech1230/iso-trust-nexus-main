export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  as?: "h2" | "h3";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="text-[11px] font-bold tracking-[0.18em] text-honey-text uppercase">
          {eyebrow}
        </p>
      ) : null}
      <Tag className="mt-2 text-2xl font-extrabold text-indigo-brand md:text-3xl">{title}</Tag>
      {intro ? (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">{intro}</p>
      ) : null}
    </div>
  );
}
