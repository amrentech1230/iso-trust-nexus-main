import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { AppLink } from "@/components/AppLink";
import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { downloads } from "@/data/insights";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Resources", href: "/resources/blog" },
  { name: "Downloads", href: "/resources/downloads" },
];

export const Route = createFileRoute("/resources/downloads/")({
  head: () => {
    const meta = pageMeta({
      title: "Free ISO Guides, Checklists & Whitepapers | TRAIBCERT",
      description:
        "Download practical ISO certification guides, readiness checklists, audit plan templates and Cyber Essentials control summaries.",
      path: "/resources/downloads",
    });
    return { ...meta, scripts: [breadcrumbJsonLd([{ name: "Home", href: "/" }, ...crumbs])] };
  },
  component: DownloadsIndex,
});

function DownloadsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Downloads and whitepapers"
        intro="Practical documents you can use straight away, from certification roadmaps to audit templates."
        crumbs={crumbs}
      />
      <section className="py-14 md:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Library" title="Available downloads" />
          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {downloads.map((item) => (
              <article key={item.slug} className="flex flex-col rounded-lg border bg-card p-6">
                <p className="text-[11px] font-bold tracking-[0.16em] text-indigo-brand uppercase">
                  {item.type}
                </p>
                <h3 className="mt-2 text-base font-bold">{item.title}</h3>
                <p className="mt-2 grow text-sm leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>
                <AppLink
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-indigo-brand"
                >
                  Request this download <ArrowRight className="size-4" aria-hidden="true" />
                </AppLink>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
