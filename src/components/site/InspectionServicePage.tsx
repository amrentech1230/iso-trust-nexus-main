import { ArrowRight } from "lucide-react";
import { AppLink } from "@/components/AppLink";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import type { InspectionService } from "@/data/inspection-services";

const process =
  "Enquiry → scope and quotation (one working day) → inspection plan and date → inspection → same-day flash report → full report within two working days → release, hold or re-inspection decision.";

const preShipmentBenefits = [
  "Verify quantity, workmanship and conformity with the approved sample before goods leave the factory.",
  "Apply an agreed ISO 2859-1 sampling plan and AQL so the lot decision follows a defined rule.",
  "Check product function, safety, packaging, labelling and shipping marks for the destination market.",
  "Receive a same-day flash result and the full report within two working days to support a release, hold or re-inspection decision.",
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-lg border border-border bg-card p-4 text-sm leading-relaxed text-muted-foreground"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function InspectionServicePage({ service }: { service: InspectionService }) {
  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        intro={service.hero}
        crumbs={[
          { name: "Certification", href: "/certification" },
          { name: "Inspection", href: "/certification/inspection" },
          { name: service.title, href: service.path },
        ]}
        showEnquiryForm={false}
        fullWidthContent
      >
        <div className="flex flex-wrap gap-3">
          <AppLink
            href="/contact/enquiry"
            className="inline-flex items-center gap-2 rounded-md bg-honey px-6 py-3.5 text-sm font-bold text-indigo-brand transition-colors hover:bg-honey-hover"
          >
            Book this inspection <ArrowRight className="size-4" aria-hidden="true" />
          </AppLink>
          <AppLink
            href="/contact/enquiry"
            className="inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            Get a quote in one working day
          </AppLink>
        </div>
      </PageHero>

      <section id="what" className="scroll-mt-28 py-14 md:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Overview" title={`What ${service.title} is`} />
          <div className="mt-6 max-w-4xl space-y-5 text-base leading-relaxed text-muted-foreground">
            {service.what.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="when" className="scroll-mt-28 bg-muted/40 py-14 md:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why PSI is important"
            title="Why inspect goods before shipment?"
            intro="A pre-shipment inspection checks finished, packed goods while there is still time to resolve problems before dispatch and balance-payment release."
          />
          <BulletList items={service.when} />
        </div>
      </section>

      {service.slug === "what-is-pre-shipment-inspection" ? (
        <section id="benefits" className="scroll-mt-28 py-14 md:py-16">
          <div className="container-page">
            <SectionHeading
              eyebrow="Benefits of PSI"
              title="Make the shipment decision on inspection evidence"
            />
            <BulletList items={preShipmentBenefits} />
          </div>
        </section>
      ) : null}

      <section id="checks" className="py-14 md:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Inspection checklist" title="What the inspector checks" />
          <BulletList items={service.checks} />
        </div>
      </section>

      <section id="report" className="bg-muted/40 py-14 md:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Deliverables" title="What you receive" />
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-muted-foreground">
            {service.report}
          </p>
          <div className="mt-8 rounded-xl border border-border bg-card p-6">
            <p className="text-xs font-bold tracking-[0.16em] text-indigo-brand uppercase">
              Inspection process
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{process}</p>
            <AppLink
              href="/certification/inspection"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-indigo-brand hover:underline"
            >
              See the full inspection process <ArrowRight className="size-4" aria-hidden="true" />
            </AppLink>
          </div>
        </div>
      </section>

      <section id="industries" className="py-14 md:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Industries" title="Who uses this inspection" />
          <BulletList items={service.industries} />
        </div>
      </section>

      <section id="faq" className="bg-muted/40 py-14 md:py-16">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="FAQs" title={`${service.title} questions`} align="center" />
          <div className="mt-8">
            <FAQAccordion faqs={service.faqs} />
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Related services" title="Continue exploring inspection" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.related.map((item) => (
              <AppLink
                key={item.href}
                href={item.href}
                className="rounded-lg border border-border bg-card p-5 text-sm font-semibold text-indigo-brand transition-colors hover:bg-muted"
              >
                {item.label} <ArrowRight className="ml-1 inline size-4" aria-hidden="true" />
              </AppLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
