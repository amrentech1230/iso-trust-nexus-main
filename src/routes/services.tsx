import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ClipboardCheck,
  GraduationCap,
  PackageSearch,
  ShieldCheck,
} from "lucide-react";
import { CTASection } from "@/components/site/CTASection";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

const crumbs = [{ name: "Our Services", href: "/services" }];

const services = [
  {
    icon: ClipboardCheck,
    title: "Management system certification",
    body: "Independent audit and certification against quality, environment, health and safety, information security, food safety, service management and sustainability standards.",
    href: "/certification",
    cta: "View all standards",
  },
  {
    icon: ShieldCheck,
    title: "Cyber security and compliance",
    body: "Cyber Essentials and Cyber Essentials Plus assessment alongside information security certification for organisations with contractual security requirements.",
    href: "/certification/cyber-essentials",
    cta: "View cyber schemes",
  },
  {
    icon: GraduationCap,
    title: "Professional training",
    body: "Foundation, Awareness, Internal Auditor and Lead Auditor courses delivered in class, live online, in-house or through our e-learning academy.",
    href: "/training",
    cta: "View courses",
  },
  {
    icon: PackageSearch,
    title: "Inspection services",
    body: "Independent inspection activity, including pre-shipment inspection of goods before dispatch, carried out by qualified inspectors.",
    href: "/certification/inspection",
    cta: "View inspection",
  },
];

const delivery = [
  {
    title: "On-site audits",
    body: "Auditors attend your premises where the scope, processes or regulatory context require physical verification.",
  },
  {
    title: "Remote audits",
    body: "Document review, interviews and evidence sampling conducted online where the standard and scope allow.",
  },
  {
    title: "Hybrid programmes",
    body: "A combination of remote planning and on-site verification, keeping travel and disruption proportionate.",
  },
];

const faqs = [
  {
    q: "Can you certify more than one standard at the same time?",
    a: "Yes. Integrated audits covering multiple standards can be planned together, which usually reduces total audit time and disruption.",
  },
  {
    q: "Do you provide consultancy to help us prepare?",
    a: "No. We keep certification and consultancy strictly separate to protect impartiality, but our training courses build the internal capability you need.",
  },
  {
    q: "How do I get a price for a service?",
    a: "Send us your standard, sites, headcount and activities through the enquiry form and we will scope the work and confirm the audit programme.",
  },
];

export const Route = createFileRoute("/services")({
  head: () => {
    const meta = pageMeta({
      title: "Our Services | ISO Certification, Training & Inspection | TRAIBCERT",
      description:
        "TRAIBCERT services: ISO management system certification, Cyber Essentials assessment, accredited professional training and independent inspection across the UK, UAE and internationally.",
      path: "/services",
    });
    return {
      ...meta,
      scripts: [breadcrumbJsonLd([{ name: "Home", href: "/" }, ...crumbs]), faqJsonLd(faqs)],
    };
  },
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Certification, training and inspection under one roof"
        intro="Four connected service lines that help you demonstrate compliance, build internal competence and verify what leaves your site."
        crumbs={crumbs}
      >
        <Link
          to="/contact/enquiry"
          className="inline-flex items-center gap-2 rounded-md bg-honey px-6 py-3.5 text-sm font-bold text-indigo-brand transition-colors hover:bg-honey-hover"
        >
          Get a Quote <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </PageHero>

      <section className="py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we do"
            title="Service lines"
            intro="Each service is delivered by competent specialists and reviewed independently of the people who carried out the work."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-7"
              >
                <service.icon className="size-6 text-indigo-brand" aria-hidden="true" />
                <h2 className="mt-4 text-lg font-bold text-indigo-brand">{service.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.body}
                </p>
                <Link
                  to={service.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-indigo-brand hover:underline"
                >
                  {service.cta} <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Delivery" title="How audits are delivered" align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {delivery.map((item) => (
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
          <SectionHeading eyebrow="FAQs" title="Questions about our services" align="center" />
          <div className="mt-8">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}