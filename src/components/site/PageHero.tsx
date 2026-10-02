import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  crumbs: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="gradient-indigo relative overflow-hidden text-white">
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 size-96 rounded-full bg-honey/15 blur-3xl"
      />
      <div className="container-page relative py-10 md:py-14">
        <Breadcrumbs items={crumbs} tone="dark" />
        {eyebrow ? (
          <p className="mt-6 text-[11px] font-bold tracking-[0.18em] text-honey uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl text-3xl leading-tight font-extrabold md:text-4xl lg:text-[2.75rem]">
          {title}
        </h1>
        {intro ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            {intro}
          </p>
        ) : null}
        {children ? <div className="mt-7">{children}</div> : null}
      </div>
    </section>
  );
}
