import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Globe2, Scale, ShieldCheck, Target, Users } from "lucide-react";
import { AccreditationBadge } from "@/components/site/Cards";
import { CTASection } from "@/components/site/CTASection";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { site, telHref } from "@/config/site";
import { breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

const crumbs = [{ name: "About Us", href: "/about" }];

const values = [
  {
    icon: Scale,
    title: "Impartiality",
    body: "We do not consult on the management systems we audit. Certification decisions are based on objective audit evidence only.",
  },
  {
    icon: ShieldCheck,
    title: "Confidentiality",
    body: "Client information gathered during audits is handled under formal confidentiality arrangements.",
  },
  {
    icon: Target,
    title: "Competence",
    body: "Audit teams are assigned by scheme and sector competence, and their work is independently reviewed before any decision.",
  },
  {
    icon: Users,
    title: "Service",
    body: "Clear scoping, predictable audit planning and responsive support from first enquiry through to recertification.",
  },
];

const services = [
  {
    title: "Management system certification",
    body: "Quality, environment, health and safety, information security, food safety, service management and sustainability standards.",
    href: "/certification",
    cta: "View standards",
  },
  {
    title: "Professional training",
    body: "Foundation, Awareness, Internal Auditor and Lead Auditor courses delivered in class, live online or in-house.",
    href: "/training",
    cta: "View courses",
  },
  {
    title: "Inspection services",
    body: "Independent inspection, including pre-shipment inspection of goods before dispatch.",
    href: "/certification/inspection",
    cta: "View inspection",
  },
];

const howWeWork = [
  {
    step: "01",
    title: "Application and scoping",
    body: "We confirm the standard, sites, headcount and activities so the audit programme reflects your operations.",
  },
  {
    step: "02",
    title: "Audit planning",
    body: "An audit team is assigned on competence, and dates are agreed with you in advance.",
  },
  {
    step: "03",
    title: "Audit and review",
    body: "Stage 1 and Stage 2 audits are carried out, then the audit file is independently reviewed.",
  },
  {
    step: "04",
    title: "Decision and surveillance",
    body: "Certification is granted on the evidence, then maintained through surveillance and recertification audits.",
  },
];

const faqs = [
  {
    q: "Who is TRAIBCERT?",
    a: "TRAIBCERT LIMITED is an independent UK certification body providing ISO certification, Cyber Essentials, professional training and inspection services to organisations in the UK, the UAE and internationally.",
  },
  {
    q: "Are you accredited?",
    a: "Our certification activity operates under accreditation, and we work as a Cyber Essentials certification body under the UK scheme. Accreditation details for a specific standard are confirmed during scoping.",
  },
  {
    q: "Do you also provide consultancy?",
    a: "No. We keep certification and consultancy strictly separate so that our certification decisions remain impartial.",
  },
  {
    q: "Which sectors do you work with?",
    a: "We audit across technology, finance, manufacturing, food, construction, healthcare, logistics and other sectors, matching auditor competence to your industry.",
  },
];

export const Route = createFileRoute("/about")({
  head: () => {
    const meta = pageMeta({
      title: "About Us | TRAIBCERT Independent UK Certification Body",
      description:
        "TRAIBCERT LIMITED is an independent UK certification body delivering ISO certification, Cyber Essentials, professional training and inspection services in the UK, UAE and internationally.",
      path: "/about",
    });
    return {
      ...meta,
      scripts: [
        breadcrumbJsonLd([{ name: "Home", href: "/" }, ...crumbs]),
        faqJsonLd(faqs),
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: site.legalName,
            alternateName: site.name,
            description: site.tagline,
            telephone: site.phones.uk,
            email: site.emails.info,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Suit 7, 2nd Floor, The Atrium, 31 Church Road",
              addressLocality: "Ashford, Middlesex",
              postalCode: "TW15 2UD",
              addressCountry: "GB",
            },
          }),
        },
      ],
    };
  },
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="An independent certification body built around your operations"
        intro="TRAIBCERT LIMITED delivers ISO certification, Cyber Essentials, professional training and independent inspection for organisations across the UK, the UAE and internationally."
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
            to="/certification"
            className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            Explore Certification
          </Link>
        </div>
      </PageHero>

      <section className="py-16 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="Certification that stands up to scrutiny"
              intro="We assess management systems against recognised standards and issue certification only where the audit evidence supports it."
            />
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our work spans management system certification across quality, environment, health and
              safety, information security, food safety, service management and sustainability;
              professional training from Foundation through Lead Auditor level; and independent
              inspection including pre-shipment inspection. Audits are led by qualified auditors with
              practical sector experience, so findings are relevant to how your organisation actually
              operates.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Buyers, regulators and insurers look past the certificate to how it was earned. That is
              why we separate certification from consultancy, review every audit file independently
              of the audit team, and keep audit programmes proportionate to the risk in your scope.
            </p>
          </div>
          <dl className="grid gap-4 self-start sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-5">
              <dt className="text-xs text-muted-foreground">Operating regions</dt>
              <dd className="mt-1 text-2xl font-extrabold text-indigo-brand">UK &amp; UAE</dd>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <dt className="text-xs text-muted-foreground">Standards and schemes</dt>
              <dd className="mt-1 text-2xl font-extrabold text-indigo-brand">30+</dd>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <dt className="text-xs text-muted-foreground">Training levels per standard</dt>
              <dd className="mt-1 text-2xl font-extrabold text-indigo-brand">4</dd>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <dt className="text-xs text-muted-foreground">Industries covered</dt>
              <dd className="mt-1 text-2xl font-extrabold text-indigo-brand">12</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our values"
            title="The commitments behind every certificate"
            align="center"
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <li key={value.title} className="rounded-xl border border-border bg-card p-6">
                <value.icon className="size-6 text-indigo-brand" aria-hidden="true" />
                <h3 className="mt-4 text-base font-bold text-indigo-brand">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="What we do" title="Three independent service lines" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-7"
              >
                <h3 className="text-lg font-bold text-indigo-brand">{service.title}</h3>
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
          <SectionHeading
            eyebrow="How we work"
            title="From application to recertification"
            align="center"
          />
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {howWeWork.map((item) => (
              <li key={item.step} className="rounded-xl border border-border bg-card p-6">
                <span className="text-sm font-extrabold text-honey-text">{item.step}</span>
                <h3 className="mt-2 text-base font-bold text-indigo-brand">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Accreditations"
              title="Accredited, recognised and independently overseen"
              intro="Accreditation is what gives a certificate value. Badge assets are added as approved artwork becomes available."
            />
            <div className="mt-8 grid gap-4">
              {site.accreditations.map((a) => (
                <AccreditationBadge key={a.label} label={a.label} note={a.note} />
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7">
            <Globe2 className="size-6 text-indigo-brand" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-bold text-indigo-brand">Where to find us</h3>
            <address className="mt-3 text-sm leading-relaxed text-muted-foreground not-italic">
              {site.address.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <dl className="mt-5 grid gap-3 text-sm">
              <div>
                <dt className="text-muted-foreground">UK</dt>
                <dd className="font-semibold">
                  <a className="hover:underline" href={telHref(site.phones.uk)}>
                    {site.phones.uk}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">UAE</dt>
                <dd className="font-semibold">
                  <a className="hover:underline" href={telHref(site.phones.uae)}>
                    {site.phones.uae}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Email</dt>
                <dd className="font-semibold">
                  <a className="hover:underline" href={`mailto:${site.emails.info}`}>
                    {site.emails.info}
                  </a>
                </dd>
              </div>
            </dl>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-indigo-brand hover:underline"
            >
              Contact us <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-20">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="FAQs" title="Questions about TRAIBCERT" align="center" />
          <div className="mt-8">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-card p-8 md:flex-row md:items-center md:p-10">
          <div>
            <Award className="size-6 text-indigo-brand" aria-hidden="true" />
            <h2 className="mt-3 text-2xl font-extrabold text-indigo-brand">
              Join our audit and training team
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              We work with auditors, technical reviewers and trainers across quality, security,
              safety and sustainability disciplines.
            </p>
          </div>
          <Link
            to="/careers"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-indigo-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-indigo-soft"
          >
            View Careers <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}