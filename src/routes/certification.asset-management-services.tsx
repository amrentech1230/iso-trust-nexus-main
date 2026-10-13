import { createFileRoute } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { InspectionWhyTraibcert } from "@/components/site/InspectionWhyTraibcert";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

const services = [
  {
    name: "Asset register and hierarchy verification",
    category: "Verification",
    description:
      "Physically verify the asset register against the plant: locate, tag and identify assets; check the site, system, equipment and component hierarchy against the actual configuration; list orphan, duplicate and ghost assets; and score criticality and attribute-data completeness. The output is a verified register ready for an EAM system or ISO 55001 assessment.",
  },
  {
    name: "Asset condition and integrity assessment",
    category: "Verification",
    description:
      "Independently inspect physical assets using visual inspection, measurement and, where required, non-destructive testing. Receive condition grades, remaining-life indicators, immediate risks and evidence for capital planning and insurer discussions.",
  },
  {
    name: "Maintenance strategy and reliability review",
    category: "Advisory",
    description:
      "Review maintenance strategies against criticality and failure history: critical-asset coverage, preventive, condition-based and corrective work, backlog, spares alignment and data for condition-based maintenance. The report sets out findings and priorities; your organisation decides and implements.",
  },
  {
    name: "Asset information and data quality assessment",
    category: "Verification",
    description:
      "Assess asset data against ISO 55001:2024 and your information specification for completeness, accuracy, structure, ownership and readiness to migrate to a new system.",
  },
  {
    name: "ISO 55001:2024 readiness assessment",
    category: "Advisory",
    description:
      "Assess your asset management system against ISO 55001:2024 and report conformity, gaps and priorities, so you know what remains before certification.",
  },
  {
    name: "EAM/APM system selection advisory",
    category: "Advisory",
    description:
      "Support procurement with requirements based on your verified register and maintenance strategy, RFP drafting, weighted technical and commercial evaluation, integration review and data-migration-plan review. TRAIBCERT has no commercial relationship with software vendors.",
  },
  {
    name: "Post-implementation verification",
    category: "Verification",
    description:
      "After go-live, verify that the register, hierarchy, plans and work-order processes match the agreed baseline and design. Reconcile migrated data, check user adoption and control points, and provide a report for sponsor sign-off.",
  },
];

const industries = [
  "Power generation and utilities: evidenced asset condition, investment plans and outage-cost control.",
  "Oil, gas and petrochemicals: process safety and integrity management for pressure systems and pipelines.",
  "Mining, metals and heavy industry: asset reliability at sites where a single failure can stop production.",
  "Transport infrastructure and fleets: maintenance evidence for rail, ports, airports, roads and fleets.",
  "Manufacturing: moving from reactive to condition-based maintenance and reliable EAM data.",
  "Facilities management and real estate: multi-site estates, life-safety systems and statutory inspections.",
  "Public-sector infrastructure owners: ageing assets, deferred maintenance and accountable investment plans.",
  "Waste, recycling and resource recovery: harsh-duty plant, permit conditions and unplanned stoppage risks.",
];

const benefits = [
  "A register you can trust: decisions on maintenance budgets, insurance schedules and EAM data start with knowing what you own and where it is.",
  "Fewer unplanned stoppages: condition and strategy reviews focus maintenance on assets whose failure costs money.",
  "Capital plans with evidence: condition grades and remaining-life indicators support board papers, regulatory submissions and insurer discussions.",
  "System selection based on requirements from your assets and processes, independently evaluated rather than shaped by a vendor demonstration.",
  "A route to ISO 55001:2024: readiness assessment identifies the gaps to close before certification.",
  "Independence you can cite: TRAIBCERT sells no software and builds no plant.",
];

const faqItems = [
  {
    q: "Do you implement ISO 55001 for us?",
    a: "TRAIBCERT assesses readiness and reports gaps; your organisation implements. If TRAIBCERT provides advisory on design or implementation, the independence rule applies and certification must be performed by another body.",
  },
  {
    q: "Do you sell or resell EAM software?",
    a: "No. TRAIBCERT has no commercial relationship with software vendors, receives no referral fees and evaluates vendors against your weighted requirements.",
  },
  {
    q: "How long does an asset register verification take?",
    a: "It depends on the number and spread of assets. A single plant with a few thousand tagged assets typically takes two to four weeks on site; multi-site estates are sampled and phased. A scoping call produces a fixed plan and price.",
  },
  {
    q: "Can this be done for a fleet or an estate rather than a plant?",
    a: "Yes. The methods are the same; the hierarchy and condition grading are adapted to vehicles, buildings and networks.",
  },
  {
    q: "Which regions do you serve?",
    a: "The UK, the UAE and the wider Middle East, and India, with delivery elsewhere through TRAIBCERT's assessor network under TRAIBCERT's report.",
  },
  {
    q: "What is the difference between EAM and APM?",
    a: "EAM is the system of record for assets, maintenance and cost; APM adds condition monitoring, reliability engineering and failure prediction. Many organisations need only a well-implemented EAM; asset-critical organisations may add APM for their most consequential equipment.",
  },
];

const independence =
  "TRAIBCERT does not certify an asset management system it has helped to design or implement. An organisation receiving readiness, strategy or system-selection advisory from TRAIBCERT on its asset management system is not eligible for TRAIBCERT ISO 55001 certification for that system and is referred to another certification body. Conversely, an organisation certified by TRAIBCERT may receive verification and inspection services, but not advisory on the system it holds a certificate for. Asset-register verification, condition assessment and post-implementation verification are verification activities and do not affect eligibility. The engagement letter states which category the work falls into before it starts.";

export const Route = createFileRoute("/certification/asset-management-services")({
  head: () => {
    const meta = pageMeta({
      title: "Asset Management Services (EAM/PAM) | TRAIBCERT",
      description:
        "Independent asset management services: asset register and condition verification, ISO 55001 readiness assessment, and EAM/APM system selection advisory for asset-intensive organisations.",
      path: "/certification/asset-management-services",
      type: "article",
    });
    return {
      ...meta,
      scripts: [
        breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Services", href: "/certification/inspection" },
          { name: "Asset management services", href: "/certification/asset-management-services" },
        ]),
        faqJsonLd(faqItems),
      ],
    };
  },
  component: AssetManagementServicesPage,
});

function AssetManagementServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Asset Management · EAM/PAM Services"
        title="Enterprise and Physical Asset Management Services"
        intro="Asset-intensive organisations live or die by the condition of what they own: turbines, substations, pumps, fleets, buildings and networks. Enterprise asset management (EAM) manages assets across their whole life, while physical asset management (PAM) applies that discipline to plant and infrastructure. TRAIBCERT independently verifies assets and their condition, assesses asset management systems against ISO 55001:2024, and advises on EAM and asset performance management (APM) system selection without vendor interests."
        crumbs={[
          { name: "Services", href: "/certification/inspection" },
          { name: "Asset management services", href: "/certification/asset-management-services" },
        ]}
        showEnquiryForm={false}
        fullWidthContent
      >
        <div className="flex flex-wrap gap-3">
          <AppLink
            href="/contact/enquiry"
            className="inline-flex items-center rounded-md bg-honey px-6 py-3.5 text-sm font-bold text-indigo-brand transition-colors hover:bg-honey-hover"
          >
            Discuss your asset programme
          </AppLink>
          <AppLink
            href="/contact/enquiry"
            className="inline-flex items-center rounded-md border border-white/40 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            Request an ISO 55001 readiness assessment
          </AppLink>
        </div>
      </PageHero>

      <section id="what" className="scroll-mt-28 py-14 md:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="EAM and PAM" title="What EAM and PAM are, and why they matter" />
          <div className="mt-6 max-w-4xl space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              An asset management system, in the sense of ISO 55000, is the policies, plans,
              processes, data and decisions by which an organisation realises value from assets at
              an acceptable level of risk and cost. It answers what the organisation owns, its
              condition and value, the cost of keeping it running, and the consequences if it stops.
            </p>
            <p>
              EAM software holds the register, maintenance plans, work orders and costs. APM
              software adds condition monitoring, reliability analysis and failure prediction.
              Neither is useful when the register is wrong, the hierarchy does not match the plant
              or the maintenance strategy has not kept pace with operations.
            </p>
            <p>
              ISO 55001 was reissued in 2024 with expectations on climate, data quality, digital
              asset information and outsourced operations. TRAIBCERT helps asset-intensive
              organisations establish reliable evidence before they assess, select or improve
              systems.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-28 bg-muted/40 py-14 md:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Services"
            title="Independent support across the asset lifecycle"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.name} className="rounded-xl border border-border bg-card p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-base font-bold text-indigo-brand">{service.name}</h3>
                  <span className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-indigo-brand">
                    {service.category}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="scroll-mt-28 py-14 md:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Industries"
            title="Industries that need EAM/PAM services"
            intro="The need is set by asset intensity, the consequence of failure and regulation."
          />
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {industries.map((industry) => (
              <li
                key={industry}
                className="rounded-lg border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground"
              >
                {industry}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="benefits" className="scroll-mt-28 bg-muted/40 py-14 md:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Benefits" title="Better evidence for asset decisions" />
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="rounded-lg border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground"
              >
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <InspectionWhyTraibcert />

      <section id="independence" className="scroll-mt-28 py-14 md:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Independence and impartiality"
            title="Advice and certification stay separate"
          />
          <p className="mt-5 max-w-4xl rounded-xl border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground">
            {independence}
          </p>
        </div>
      </section>

      <section id="faq" className="scroll-mt-28 bg-muted/40 py-14 md:py-16">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="FAQs" title="Asset management questions" align="center" />
          <div className="mt-8">
            <FAQAccordion faqs={faqItems} />
          </div>
          <div className="mt-8 text-center">
            <AppLink
              href="/certification/iso-55001"
              className="font-semibold text-indigo-brand hover:underline"
            >
              Learn about ISO 55001 certification <span aria-hidden="true">→</span>
            </AppLink>
          </div>
        </div>
      </section>
    </>
  );
}
