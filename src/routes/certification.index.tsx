import { createFileRoute } from "@tanstack/react-router";
import { IndustryCard, StandardCard } from "@/components/site/Cards";
import { CertificationProcess } from "@/components/site/CertificationProcess";
import { CTASection } from "@/components/site/CTASection";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { industries } from "@/data/industries";
import { generalFaqs } from "@/data/insights";
import { standardsByCategory } from "@/data/standards";
import { breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

const crumbs = [{ name: "Certification", href: "/certification" }];
const faqs = generalFaqs.slice(0, 5);

export const Route = createFileRoute("/certification/")({
  head: () => {
    const meta = pageMeta({
      title: "ISO Certification & Cyber Essentials Services | TRAIBCERT",
      description:
        "Accredited ISO certification, Cyber Essentials, sustainability and inspection services from an independent UK certification body serving the UK, UAE and international clients.",
      path: "/certification",
    });
    return {
      ...meta,
      scripts: [breadcrumbJsonLd([{ name: "Home", href: "/" }, ...crumbs]), faqJsonLd(faqs)],
    };
  },
  component: CertificationLanding,
});

const groups = [
  {
    id: "iso",
    eyebrow: "ISO standards",
    title: "Management system certification",
    intro:
      "Quality, environment, safety, service, food safety, energy, risk and AI management systems, certified against the current published standard.",
    category: "iso" as const,
  },
  {
    id: "cyber",
    eyebrow: "Cyber security & compliance",
    title: "Security, privacy and payment assurance",
    intro:
      "From the UK government-backed Cyber Essentials scheme through to ISO 27001, privacy extensions, SOC 2 readiness, PCI DSS and technical testing.",
    category: "cyber" as const,
  },
  {
    id: "sustainability",
    eyebrow: "Sustainability",
    title: "ESG, carbon and net-zero",
    intro:
      "Build a defensible sustainability programme with credible data, recognised frameworks and management systems that keep it running.",
    category: "sustainability" as const,
  },
  {
    id: "inspection",
    eyebrow: "Inspection",
    title: "Independent inspection services",
    intro:
      "Pre-shipment and supplier inspection that verifies quantity, quality, packing and documentation before goods leave the supplier.",
    category: "inspection" as const,
  },
];

function CertificationLanding() {
  return (
    <>
      <PageHero
        eyebrow="Certification"
        title="Accredited certification for the standards your customers ask for"
        intro="TRAIBCERT certifies management systems, delivers Cyber Essentials and Cyber Essentials Plus, and provides independent inspection services for organisations in the UK, UAE and internationally."
        crumbs={crumbs}
      />

      <section className="py-14 md:py-16">
        <div className="container-page">
          <SectionHeading
            title="Certification with a clear scope and a defensible audit trail"
            intro="Certification starts with the right scope. We look at your activities, sites, headcount and customer requirements, then confirm the audit days and route required — before you commit."
          />
        </div>
      </section>

      {groups.map((group, index) => (
        <section
          key={group.id}
          id={group.id}
          className={`scroll-mt-28 py-14 md:py-16 ${index % 2 === 0 ? "bg-muted/40" : ""}`}
        >
          <div className="container-page">
            <SectionHeading eyebrow={group.eyebrow} title={group.title} intro={group.intro} />
            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {standardsByCategory(group.category).map((standard) => (
                <StandardCard key={standard.slug} standard={standard} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-14 md:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Certification process"
            title="Five stages, no surprises"
            align="center"
          />
          <div className="mt-9">
            <CertificationProcess />
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-14 md:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Industries" title="Sector-specific certification guidance" />
          <div className="mt-9 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {industries.map((industry) => (
              <IndustryCard key={industry.slug} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="FAQs" title="Certification questions, answered" />
          <div className="mt-6">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
