import { createFileRoute } from "@/lib/router-compat";
import { IndustryCard } from "@/components/site/Cards";
import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { industries } from "@/data/industries";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Resources", href: "/resources/blog" },
  { name: "Industries", href: "/resources/industries" },
];

export const Route = createFileRoute("/resources/industries/")({
  head: () => {
    const meta = pageMeta({
      title: "ISO Certification by Industry Sector | TRAIBCERT",
      description:
        "Sector-specific certification and training guidance for technology, manufacturing, construction, healthcare, food, logistics and professional services.",
      path: "/resources/industries",
    });
    return { ...meta, scripts: [breadcrumbJsonLd([{ name: "Home", href: "/" }, ...crumbs])] };
  },
  component: IndustriesIndex,
});

function IndustriesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Certification by industry"
        intro="How the standards apply in your sector, the risks auditors focus on and the certifications buyers ask for."
        crumbs={crumbs}
      />
      <section className="py-14 md:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Sectors" title="Industries we work with" />
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <IndustryCard key={industry.slug} industry={industry} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
