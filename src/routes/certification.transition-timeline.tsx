import { createFileRoute } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { certificationCopyPagesBySlug } from "@/data/certification-copy";
import { pageMeta } from "@/lib/seo";

const standardsInTransition = ["iso-9001", "iso-14001"].map((slug) => {
  const page = certificationCopyPagesBySlug[slug];
  if (!page) throw new Error(`Missing certification copy for ${slug}`);
  const transition = page.blocks
    .find((block) => block.heading.startsWith("5 ·"))
    ?.paragraphs.find((paragraph) => paragraph.startsWith("Transition:"));
  return {
    slug,
    title: page.title,
    href: page.url,
    detail: transition?.replace(/^Transition:\s*/, ""),
  };
});

export const Route = createFileRoute("/certification/transition-timeline")({
  head: () =>
    pageMeta({
      title: "ISO 9001 and ISO 14001 Transition Timeline | TRAIBCERT",
      description:
        "Key transition dates for ISO 9001:2026 and ISO 14001:2026, including certificate issue cut-offs and final transition deadlines.",
      path: "/certification/transition-timeline",
    }),
  component: TransitionTimelinePage,
});

function TransitionTimelinePage() {
  return (
    <>
      <section className="bg-indigo-brand py-10 text-white md:py-14">
        <div className="container-page">
          <Breadcrumbs
            tone="dark"
            items={[
              { name: "Certification", href: "/certification" },
              {
                name: "Transition timeline",
                href: "/certification/transition-timeline",
              },
            ]}
          />
          <p className="mt-6 text-xs font-bold tracking-[0.16em] text-honey uppercase">
            Standards transition
          </p>
          <h1 className="mt-3 text-3xl font-extrabold md:text-4xl">
            ISO 9001 and ISO 14001 transition timeline
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85">
            Published transition dates for the new editions, copied from the applicable
            certification page guidance.
          </p>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container-page grid gap-5 md:grid-cols-2">
          {standardsInTransition.map((standard) => (
            <article key={standard.slug} className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-xl font-bold text-indigo-brand">{standard.title}</h2>
              {standard.detail ? (
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{standard.detail}</p>
              ) : null}
              <AppLink
                href={standard.href}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-brand hover:underline"
              >
                View certification details <span aria-hidden="true">→</span>
              </AppLink>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
