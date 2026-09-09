import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { furtherTopics } from "@/data/insights";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Resources", href: "/resources/blog" },
  { name: "Further Topics", href: "/resources/further-topics" },
];

export const Route = createFileRoute("/resources/further-topics")({
  head: () => {
    const meta = pageMeta({
      title: "Further Certification Topics Explained | TRAIBCERT",
      description:
        "Accreditation versus certification, impartiality, surveillance cycles, multi-site sampling, remote auditing and writing scope statements.",
      path: "/resources/further-topics",
    });
    return { ...meta, scripts: [breadcrumbJsonLd([{ name: "Home", href: "/" }, ...crumbs])] };
  },
  component: FurtherTopicsPage,
});

function FurtherTopicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Further topics"
        intro="Short explanations of the certification concepts that most often come up in tenders, audits and customer questions."
        crumbs={crumbs}
      />
      <section className="py-14 md:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Explainers" title="Topics we are asked about" />
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {furtherTopics.map((topic) => (
              <article key={topic.title} className="rounded-lg border bg-card p-6">
                <h2 className="text-base font-bold">{topic.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {topic.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
