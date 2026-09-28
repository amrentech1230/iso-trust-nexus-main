import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Globe2, Scale, Sparkles, UserCheck, Workflow } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

const crumbs = [{ name: "Why Choose Us", href: "/why-choose-us" }];

const reasons = [
  {
    icon: Scale,
    title: "Genuine impartiality",
    body: "We never consult on the systems we audit. Certification decisions rest on audit evidence reviewed independently of the audit team.",
  },
  {
    icon: UserCheck,
    title: "Sector-matched auditors",
    body: "Audit teams are assigned on scheme and sector competence, so findings reflect how your organisation actually operates.",
  },
  {
    icon: Workflow,
    title: "Proportionate audit programmes",
    body: "Scope, sites and headcount drive the audit plan. You are not charged for audit time your risk profile does not justify.",
  },
  {
    icon: Clock,
    title: "Predictable planning",
    body: "Dates, stages and expectations are agreed in advance, with clear documentation of what auditors will need on the day.",
  },
  {
    icon: Globe2,
    title: "UK and UAE coverage",
    body: "Multi-site and international programmes are coordinated from our UK base with support across the UAE and beyond.",
  },
  {
    icon: Sparkles,
    title: "Certification plus capability",
    body: "Training from Foundation to Lead Auditor level means your team can maintain the system between audits, not just pass one.",
  },
];

const compare = [
  {
    title: "Clear scoping before you commit",
    body: "You see the standard, stages, audit days and surveillance pattern before any agreement is signed.",
  },
  {
    title: "No surprise findings",
    body: "Auditors explain observations as they arise, so the closing meeting confirms what you already know.",
  },
  {
    title: "Support that continues",
    body: "Surveillance, recertification and transition planning are handled by people already familiar with your scope.",
  },
];

const faqs = [
  {
    q: "What makes an accredited certificate different?",
    a: "Accreditation means an independent body oversees how we audit and make decisions, which is what gives your certificate credibility with buyers, regulators and insurers.",
  },
  {
    q: "Can we transfer an existing certificate to TRAIBCERT?",
    a: "Yes. Valid accredited certificates can normally be transferred, and we review your current certificate, scope and audit history before confirming.",
  },
  {
    q: "How quickly can an audit be arranged?",
    a: "Timing depends on your readiness, scope and site locations. We confirm realistic dates during scoping rather than promising a fixed timeline upfront.",
  },
];

export const Route = createFileRoute("/why-choose-us")({
  head: () => {
    const meta = pageMeta({
      title: "Why Choose Us | Independent ISO Certification Body | TRAIBCERT",
      description:
        "Why organisations choose TRAIBCERT: impartial certification decisions, sector-matched auditors, proportionate audit programmes and UK and UAE coverage.",
      path: "/why-choose-us",
    });
    return {
      ...meta,
      scripts: [breadcrumbJsonLd([{ name: "Home", href: "/" }, ...crumbs]), faqJsonLd(faqs)],
    };
  },
  component: WhyChooseUsPage,
});

function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why choose us"
        title="An audit partner your customers can trust"
        intro="Impartial decisions, competent auditors and audit programmes sized to your real risk, delivered without the consultancy conflict."
        crumbs={crumbs}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            to="/contact/enquiry"
            className="inline-flex items-center gap-2 rounded-md bg-honey px-6 py-3.5 text-sm font-bold text-indigo-brand transition-colors hover:bg-honey-hover"
          >
            Get a Quote <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            Our Services
          </Link>
        </div>
      </PageHero>

      <section className="py-16 md:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Our approach" title="Six reasons clients stay with us" />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <li key={reason.title} className="rounded-xl border border-border bg-card p-6">
                <reason.icon className="size-6 text-indigo-brand" aria-hidden="true" />
                <h2 className="mt-4 text-base font-bold text-indigo-brand">{reason.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="What it feels like" title="Working with our audit teams" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {compare.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-base font-bold text-indigo-brand">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="FAQs" title="Common questions" align="center" />
          <div className="mt-8">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}