import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { knowledgeBase } from "@/data/insights";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Resources", href: "/resources/blog" },
  { name: "Knowledge Base", href: "/resources/knowledge-base" },
];

export const Route = createFileRoute("/resources/knowledge-base")({
  head: () => {
    const meta = pageMeta({
      title: "ISO Knowledge Base & Guides | TRAIBCERT",
      description:
        "Step-by-step guides to ISO certification, audit preparation, integrated management systems, Annex A controls and certificate transfer.",
      path: "/resources/knowledge-base",
    });
    return { ...meta, scripts: [breadcrumbJsonLd([{ name: "Home", href: "/" }, ...crumbs])] };
  },
  component: KnowledgeBasePage,
});

function KnowledgeBasePage() {
  const categories = [...new Set(knowledgeBase.map((g) => g.category))];

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Knowledge base and guides"
        intro="Reference guides covering the questions we are asked most often, written for people implementing and auditing management systems."
        crumbs={crumbs}
      />
      {categories.map((category, index) => (
        <section
          key={category}
          className={`py-12 md:py-14 ${index % 2 === 0 ? "" : "bg-muted/40"}`}
        >
          <div className="container-page">
            <SectionHeading eyebrow={category} title={`${category} guides`} />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {knowledgeBase
                .filter((g) => g.category === category)
                .map((guide) => (
                  <article key={guide.slug} className="rounded-lg border bg-card p-6">
                    <h3 className="text-base font-bold">{guide.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {guide.summary}
                    </p>
                  </article>
                ))}
            </div>
          </div>
        </section>
      ))}
      <CTASection />
    </>
  );
}
