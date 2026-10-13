import { createFileRoute } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { inspectionServices } from "@/data/inspection-services";
import { breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Certification", href: "/certification" },
  { name: "Inspection", href: "/certification/inspection" },
];

const services = inspectionServices.map(({ title, path, when }) => ({
  title,
  href: path,
  when: when[0],
}));

const steps = [
  {
    title: "Enquiry",
    description:
      "Tell us the product or equipment, quantity, specification or drawing, factory or site location, and the date the goods must move. A sector specialist replies within one working day with a fixed man-day quotation.",
  },
  {
    title: "Inspection plan",
    description:
      "We agree the sampling plan, checklist, reference documents, and witness and hold points for engineered equipment. For products, the default is ISO 2859-1 general inspection level II with an acceptable quality limit of 0 critical, 2.5 major and 4.0 minor unless your contract says otherwise.",
  },
  {
    title: "Inspection",
    description:
      "The inspector attends on the agreed date, verifies quantity and identity, draws the sample, performs the checks and tests the plan calls for, and photographs everything material.",
  },
  {
    title: "Flash report",
    description:
      "A pass, fail or pending result with the key findings and photographs is sent the same day, so a release or hold decision is not delayed.",
  },
  {
    title: "Full report",
    description:
      "The complete report, with the sampling record, measurements, defect photographs classified by severity and the inspector's conclusion, follows within two working days.",
  },
  {
    title: "Re-inspection",
    description:
      "Where a lot is rejected, the supplier corrects and TRAIBCERT re-inspects the corrected lot; the second report references the first, so the history is traceable.",
  },
];

const industries = [
  {
    title: "Manufacturing and importers of consumer goods",
    description:
      "Pre-shipment, during-production and container loading for orders placed with overseas factories.",
  },
  {
    title: "Construction and infrastructure",
    description:
      "Vendor inspection of structural steel, precast, mechanical and electrical plant, and NDT of site welds.",
  },
  {
    title: "Energy, oil and gas, and utilities",
    description:
      "Witness testing of pressure equipment, pipes, valves and rotating machinery; NDT; expediting of long-lead items.",
  },
  {
    title: "Automotive",
    description: "Component inspection, sorting and containment against control plans.",
  },
  {
    title: "Food, drink and agriculture",
    description:
      "Pre-shipment inspection of packed produce and processed food for weight, labelling, packaging and condition.",
  },
  {
    title: "Transport and logistics",
    description:
      "Loading supervision, pre-shipment inspection for freight forwarders and traders, and damage surveys on receipt.",
  },
  {
    title: "Retail and e-commerce",
    description:
      "Pre-shipment inspection and defect classification for own-brand and marketplace goods.",
  },
  {
    title: "Public sector and project owners",
    description:
      "Independent receipt inspection of purchased plant and equipment before acceptance and payment.",
  },
];

const faqs = [
  {
    q: "How much does an inspection cost?",
    a: "Inspection is priced per inspector man-day plus travel, quoted as a fixed fee in one working day. Most consumer-goods pre-shipment inspections are completed in one man-day; engineered equipment and NDT are quoted against the inspection and test plan.",
  },
  {
    q: "Can you inspect at a factory outside the UK?",
    a: "Yes. Inspections are delivered in the UK, the UAE and the wider Middle East, and India, and at supplier locations in other countries through TRAIBCERT's inspector network, with the report issued by TRAIBCERT.",
  },
  {
    q: "What sampling standard do you use?",
    a: "ISO 2859-1 (the international sampling standard for inspection by attributes) at general inspection level II, unless your purchase contract specifies a different level or a 100% inspection. The AQL is agreed with you before the inspection.",
  },
  {
    q: "What happens if the goods fail?",
    a: "You receive the flash report the same day with the failing items and photographs. Most buyers hold the balance payment, require the supplier to rework or replace, and book a re-inspection; some accept with a price adjustment. The decision is yours and the report gives you the evidence for it.",
  },
  {
    q: "Does an inspection report a certificate?",
    a: "No. An inspection report records what an independent inspector found in a specific lot, shipment, weld or delivery on a specific date. Certification of a management system is a separate service on this site.",
  },
  {
    q: "Can inspection be combined with our supplier's ISO 9001 audit?",
    a: "Inspection and certification are kept separate so that each result is independent, but a buyer can commission both: a certificate tells you the supplier has a working quality system, an inspection tells you what is in this order.",
  },
];

export const Route = createFileRoute("/certification/inspection/")({
  head: () => {
    const meta = pageMeta({
      title: "Third-Party Inspection Services UK, UAE, India | TRAIBCERT",
      description:
        "Independent product, production, loading, NDT and vendor inspection with same-day flash reports. Inspection services across the UK, the Middle East and India.",
      path: "/certification/inspection",
    });
    return {
      ...meta,
      scripts: [breadcrumbJsonLd([{ name: "Home", href: "/" }, ...crumbs]), faqJsonLd(faqs)],
    };
  },
  component: InspectionPage,
});

function InspectionPage() {
  return (
    <>
      <PageHero
        eyebrow="Inspection · Third-party inspection"
        title="Third-Party Inspection Services"
        intro="An independent inspector on the factory floor, at the loading bay or on your site is the cheapest control you will ever buy. TRAIBCERT inspects products, production, loading, materials and vendors on behalf of buyers, project owners and manufacturers, and reports the same day so the decision to release, hold or rework is made on facts rather than on a supplier's assurance. Inspections are delivered across the UK, the Middle East and India by inspectors who know the product category, and every inspection follows a plan you approve before anyone travels."
        crumbs={crumbs}
        showEnquiryForm={false}
        fullWidthContent
      >
        <div className="flex flex-wrap gap-3">
          <AppLink
            href="/contact/enquiry"
            className="inline-flex items-center rounded-md bg-honey px-6 py-3.5 text-sm font-bold text-indigo-brand transition-colors hover:bg-honey-hover"
          >
            Book an inspection
          </AppLink>
          <AppLink
            href="/contact/enquiry"
            className="inline-flex items-center rounded-md border border-white/40 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            Get a quote in one working day
          </AppLink>
        </div>
      </PageHero>

      <section id="what" className="py-14 md:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Inspection" title="What third-party inspection is" />
          <div className="mt-6 max-w-4xl space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Third-party inspection is the examination of a product, process, installation or
              shipment by a body that is independent of the buyer, the seller and the manufacturer.
              Its purpose is to provide information on conformity with a regulation, a standard, a
              drawing or a purchase contract: quality, quantity, safety, fitness for use and, for
              plant, continued safe operation. The global testing, inspection and certification
              market was valued at about USD 242 billion in 2025, and the share of that work which
              is outsourced to independent bodies is expected to reach half by 2031, because buyers
              have learnt that an inspector who reports to them, not to the factory, is the only
              reliable way to know what is in the container before it sails or what is in the weld
              before the plant is commissioned.
            </p>
            <p>
              TRAIBCERT&apos;s inspection work is organised as an inspection body in line with the
              international standard for bodies performing inspection, with documented inspection
              plans, competence records for every inspector, calibrated equipment and a report
              format that separates what was observed from what was concluded. Inspection is a
              separate activity from management system certification; an inspection report says what
              was found on the day and is not a certificate of the supplier&apos;s system.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="bg-muted/40 py-14 md:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Inspection services"
            title="Inspection at every stage of an order or project"
            intro="Nine services cover the life of an order or a project, from the first units off the line to the vendor's factory gate. Each has its own page."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-base font-bold text-indigo-brand">
                  <AppLink href={service.href} className="hover:underline">
                    {service.title}
                  </AppLink>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.when}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-14 md:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Process"
            title="How an inspection works"
            intro="Enquiry → scope and quotation (one working day) → inspection plan and date → inspection → same-day flash report → full report within two working days → release, hold or re-inspection decision."
          />
          <ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-xl border border-border bg-card p-6">
                <p className="text-xs font-bold tracking-[0.16em] text-indigo-brand uppercase">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 text-base font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="industries" className="bg-muted/40 py-14 md:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Industries"
            title="Industries that use inspection"
            intro="Inspection is bought wherever the cost of a defective delivery exceeds the cost of a day of an inspector's time. The most frequent users are:"
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <article key={industry.title} className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-sm font-bold text-indigo-brand">{industry.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {industry.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reports" className="py-14 md:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Reports" title="What you receive" />
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-muted-foreground">
            Every report carries the same information in the same order: order and supplier
            identification, inspection date and location, reference documents, sampling plan and
            sample size, quantity and packing status, results by checklist item, defects
            photographed and classified, measurements against tolerance, functional and safety test
            results, and a clear conclusion of conformity, non-conformity or pending. Reports are
            delivered as PDF with the photograph set and are retained for seven years so a dispute
            two years after delivery can be settled from the record.
          </p>
        </div>
      </section>

      <section id="why" className="bg-muted/40 py-14 md:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Why TRAIBCERT" title="Independent inspection, clear evidence" />
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-muted-foreground">
            Fixed man-day pricing quoted in one working day; inspectors with product-category
            experience; same-day flash reports; coverage across the UK, the Middle East and India
            without subcontracting the report; and analysis of your inspection history so the
            pattern of defects, not only the individual lot, is visible.
          </p>
        </div>
      </section>

      <section id="faq" className="py-14 md:py-16">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="FAQs" title="Inspection questions answered" align="center" />
          <div className="mt-8">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
