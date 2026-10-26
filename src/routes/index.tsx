import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Globe2, Scale, Users } from "lucide-react";
import aboutTeamImage from "@/assets/home-about-team-clean.jpg";
import auditDeliveryImage from "@/assets/home-audit-delivery.jpg";
import inspectionImage from "@/assets/home-hero-inspection-clean.jpg";
import certificationImage from "@/assets/home-hero-audit.jpg";
import trainingImage from "@/assets/home-training.jpg";
import { BlogCard, IndustryCard, ServiceCard } from "@/components/site/Cards";
import { CertificationProcess } from "@/components/site/CertificationProcess";
import { CTASection } from "@/components/site/CTASection";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { HomeHero } from "@/components/site/HomeHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { courseLevels } from "@/data/courses";
import { industries } from "@/data/industries";
import { posts } from "@/data/insights";
import { popularStandards } from "@/data/standards";
import { faqJsonLd, pageMeta } from "@/lib/seo";
import { AppLink } from "@/components/AppLink";

export const Route = createFileRoute("/")({
  head: () => {
    const meta = pageMeta({
      title: "ISO Certification, Training & Compliance Services | TRAIBCERT",
      description:
        "TRAIBCERT certifies, assesses, verifies, inspects and trains organisations worldwide. Centred in the UK, with audits to current editions of the standards we certify.",
      path: "/",
    });
    return { ...meta, scripts: [faqJsonLd(homeFaqs)] };
  },
  component: Home,
});

const differentiators = [
  {
    icon: Scale,
    title: "Impartial by design",
    body: "We certify; we do not consult on the systems we audit. Decisions are taken independently of sales and rest on objective evidence alone.",
  },
  {
    icon: Users,
    title: "Experienced Auditors",
    body: "Audit teams are matched to your scheme and sector, so findings are relevant and the audit adds value beyond the certificate.",
  },
  {
    icon: Scale,
    title: "Fixed price for the whole cycle",
    body: "The full three-year effort is quoted upfront, with travel at cost. Nothing is cut from the quotation to be added later.",
  },
  {
    icon: BadgeCheck,
    title: "Current editions, planned transitions",
    body: "We certify to the latest edition of every standard and plan ISO 9001 and ISO 14001 transitions inside your existing cycle.",
  },
  {
    icon: ArrowRight,
    title: "Transfer without repeating audits",
    body: "A valid accredited certificate held elsewhere moves to TRAIBCERT with its cycle and expiry date intact.",
  },
  {
    icon: Globe2,
    title: "Centred in the UK, serving across the world",
    body: "Audits are delivered on site, remotely or blended, by our own auditors and an international network, under one quality system and one point of contact.",
  },
];

const services = [
  {
    title: "Certification",
    body: "ISO management system certification, cyber and privacy assessments, cloud and vendor-compliance readiness, and ESG and carbon verification. 55 services, one process, one fixed quotation.",
    href: "/certification",
    icon: "BadgeCheck",
    image: certificationImage,
  },
  {
    title: "Training",
    body: "Four levels for 13 standards, from Foundation to Lead Auditor, self-paced 24×7 on TRAIBCERT Academy, tutor-led online, or onsite for your team.",
    href: "/training",
    icon: "GraduationCap",
    image: trainingImage,
  },
  {
    title: "Inspection",
    body: "Independent third-party inspection of products, production, loading, materials and vendors, reported the same day.",
    href: "/certification/inspection",
    icon: "ClipboardCheck",
    image: inspectionImage,
  },
];

const homeStats = [
  { value: "55", label: "Certification, assessment and verification services" },
  { value: "20", label: "ISO standards certified to the current edition" },
  { value: "13 × 4", label: "Standards taught at four levels, 24×7 on the Academy" },
  { value: "15", label: "Sectors with dedicated certification guidance" },
  { value: "9", label: "Inspection services, from pre-shipment to NDT" },
  { value: "1 working day", label: "For a fixed quotation for the whole cycle" },
];

const categoryGroups = [
  {
    title: "ISO Management Systems",
    count: "20 standards",
    body: "Quality, environment, health and safety, information security, food safety and service management standards.",
    items: [
      "ISO 9001:2026",
      "ISO 14001:2026",
      "ISO 45001:2018",
      "ISO/IEC 27001:2022",
      "ISO 22000:2018",
    ],
    href: "/certification",
  },
  {
    title: "Cyber Security & Compliance",
    count: "15 services",
    body: "Cyber Essentials, Cyber Essentials Plus, IASME Cyber Assurance, ISO/IEC 27001, penetration testing, SOC 2, CSA STAR and cloud assurance.",
    items: [
      "Cyber Essentials",
      "Cyber Essentials Plus",
      "IASME Cyber Assurance Level 1",
      "ISO/IEC 27001",
      "Penetration testing",
    ],
    href: "/certification",
  },
  {
    title: "Privacy & Data Protection",
    count: "9 frameworks",
    body: "Privacy management and data-protection assurance for UK, EU, US, Indian and UAE requirements.",
    items: ["ISO/IEC 27701", "UK GDPR", "EU GDPR", "HIPAA", "PCI DSS"],
    href: "/certification",
  },
  {
    title: "Sustainability & ESG",
    count: "8 services",
    body: "ESG assurance, greenhouse-gas verification, carbon and net-zero verification, green audits and ISO 50001.",
    items: [
      "ESG assurance",
      "GHG verification",
      "Carbon neutrality",
      "Net-zero verification",
      "ISO 50001",
    ],
    href: "/certification",
  },
  {
    title: "Vendor Compliance",
    count: "4 frameworks",
    body: "Supplier and vendor assurance frameworks for organisations working across complex supply chains.",
    items: ["EcoVadis", "TISAX", "CyberVadis", "Microsoft SSPA"],
    href: "/certification",
  },
  {
    title: "Inspection & Asset Management",
    count: "9 inspection services",
    body: "Independent product and supplier inspection, asset management services and ISO 55001 certification.",
    items: [
      "Pre-shipment inspection",
      "Production monitoring",
      "Non-destructive testing",
      "ISO 55001",
    ],
    href: "/certification/inspection",
  },
];

const deliveryModes = [
  {
    title: "On-site audits",
    body: "Auditors attend your premises to review operations, records and practice in context.",
  },
  {
    title: "Remote audits",
    body: "Document review and interviews conducted online where the scope and risk allow it.",
  },
  {
    title: "Blended programmes",
    body: "Multi-site and international scopes combine on-site sampling with remote sessions, delivered by our own auditors and international network under one quality system.",
  },
];

const levelDetails: Record<string, string> = {
  Foundation: "Understand the structure, terminology and intent of the standard.",
  Awareness: "Give teams the practical context they need to work within the system.",
  "Internal Auditor": "Plan, conduct and report internal audits against the requirements.",
  "Lead Auditor": "Lead audit teams and manage full audit programmes end to end.",
};

const homeFaqs = [
  {
    q: "How long does ISO certification take?",
    a: "Timescales depend on your scope, number of sites and how mature your management system already is. After a scoping discussion we set out a realistic audit plan covering the Stage 1 and Stage 2 audits.",
  },
  {
    q: "Do you provide consultancy as well as certification?",
    a: "No. We certify; we do not consult on the management systems we audit. Certification decisions are based on objective evidence and kept separate from sales.",
  },
  {
    q: "Can we transfer an existing certificate to TRAIBCERT?",
    a: "Yes. Certificate transfer is available where your current certificate is valid and accredited. We review your existing audit history before confirming the transfer.",
  },
  {
    q: "Where do you operate?",
    a: "TRAIBCERT is centred in the UK and serves organisations across the world. Audits are delivered on site, remotely or blended, by our own auditors and an international network, with one report format and one point of contact wherever you are.",
  },
  {
    q: "How much does certification or training cost?",
    a: "Fees depend on scope, headcount, sites and risk. Send us your details through the enquiry form and we will prepare a written quotation.",
  },
];

function Home() {
  return (
    <>
      <HomeHero />

      <section className="border-y border-border bg-indigo-brand/[0.03] py-8">
        <div className="container-page grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homeStats.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-border bg-card p-5">
              <p className="text-2xl font-extrabold text-indigo-brand">{stat.value}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-28 border-t border-border bg-muted/40 py-16 md:py-20"
      >
        <div className="container-page grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="About TRAIBCERT"
              title="A certification body built around the way you work"
              intro="TRAIBCERT is an accredited, independent certification body centred in the UK and serving organisations across the world. We certify management systems to the current editions of the ISO standards, assess against cyber, privacy, cloud and vendor-compliance frameworks, verify ESG and greenhouse-gas claims, inspect products and plant, and train the people who run the systems we audit."
            />
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              What sets us apart is the audit itself. Teams are assigned by scheme and sector
              competence, so the auditor of a contractor has managed sites and the auditor of a
              software company has run an information security system. The whole three-year cycle is
              quoted upfront at a fixed price, with nothing added later. A certificate held with
              another body transfers to TRAIBCERT with its cycle intact. Every enquiry is answered
              by a sector specialist within one working day.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-indigo-brand hover:underline"
            >
              Learn More About Us <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div>
            <img
              src={aboutTeamImage}
              width={1400}
              height={1050}
              loading="lazy"
              alt="Certification professionals reviewing audit evidence together"
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-[0_24px_60px_-36px_rgba(26,24,84,0.45)]"
            />
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="scroll-mt-28 py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why choose us"
            title="Certification that stands up to scrutiny"
            intro="Buyers, regulators and insurers look past the certificate to how it was earned. These are the commitments behind ours."
            align="center"
          />
          <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-indigo-soft/40"
              >
                <item.icon className="size-6 text-indigo-brand" aria-hidden="true" />
                <h3 className="mt-4 text-base font-bold text-indigo-brand">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="services" className="scroll-mt-28 bg-muted/40 py-16 md:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Our services" title="Three ways we support compliance" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Popular standards"
            title="Standards organisations ask us about most"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {popularStandards.map((standard) => (
              <AppLink
                key={standard.slug}
                href={`/certification/${standard.slug}`}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-indigo-soft/40"
              >
                <p className="text-sm font-bold text-indigo-brand">{standard.code}</p>
                <p className="mt-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  {standard.discipline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {standard.summary}
                </p>
              </AppLink>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Scheme families"
            title="Certification schemes grouped by discipline"
            intro="Browse by the type of risk you need to demonstrate control over. Each group links through to the relevant certification and assurance services."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {categoryGroups.map((group) => (
              <AppLink
                key={group.title}
                href={group.href}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-0.5 hover:border-indigo-soft/40"
              >
                <p className="text-[11px] font-bold tracking-[0.18em] text-honey-text uppercase">
                  {group.count}
                </p>
                <h3 className="mt-2 text-lg font-bold text-indigo-brand">{group.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {group.body}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md bg-secondary px-2 py-1 text-[11px] font-semibold text-indigo-brand"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-indigo-brand">
                  View standards
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </AppLink>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Certification process"
            title="A clear route from enquiry to certification"
            align="center"
          />
          <div className="mt-10">
            <CertificationProcess />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <img
            src={auditDeliveryImage}
            width={1400}
            height={1050}
            loading="lazy"
            alt="Auditor and site manager discussing observations in a production facility"
            className="aspect-[4/3] w-full rounded-xl object-cover shadow-[0_24px_60px_-36px_rgba(26,24,84,0.45)]"
          />
          <div>
            <SectionHeading
              eyebrow="How audits are delivered"
              title="Audit methods matched to your scope"
              intro="We agree the audit approach with you during scoping, balancing scheme rules, site locations and the level of risk involved."
            />
            <ul className="mt-7 grid gap-3">
              {deliveryModes.map((mode) => (
                <li key={mode.title} className="border-l-2 border-honey pl-5 py-1">
                  <h3 className="text-base font-bold text-indigo-brand">{mode.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{mode.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="accreditations" className="scroll-mt-28 py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Accreditation"
            title="Accredited, recognised and independently overseen"
            intro="Accreditation is what gives a certificate its value. TRAIBCERT's certification activities are accredited and its Cyber Essentials assessments are delivered under licence from the scheme, so every certificate and assessment we issue is recognised by buyers, regulators and insurers. Certification decisions are reviewed by people who took no part in the audit, and our impartiality committee oversees the separation of certification from every other service."
          />
          <div className="mt-5 flex flex-wrap gap-5 text-sm font-semibold text-indigo-brand">
            <AppLink href="/legal/impartiality" className="hover:underline">
              Impartiality policy <span aria-hidden="true">→</span>
            </AppLink>
            <AppLink
              href="/resources/explainers/checking-a-certificate"
              className="hover:underline"
            >
              Check a certificate <span aria-hidden="true">→</span>
            </AppLink>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Industries"
            title="Sector expertise across fifteen industries"
            intro="Every sector is asked to prove something different. Select yours for the standards, training and inspection it is asked for."
          />
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {industries.map((industry) => (
              <IndustryCard key={industry.slug} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Training levels"
            title="Training levels for the standards we teach"
            intro="Four levels for 13 standards: self-paced 24×7 on TRAIBCERT Academy, tutor-led online on published dates, or onsite for your team."
            align="center"
          />
          <div className="mt-10 grid overflow-hidden rounded-xl border border-border bg-card lg:grid-cols-[0.8fr_1.2fr]">
            <img
              src={trainingImage}
              width={1400}
              height={900}
              loading="lazy"
              alt="Instructor leading a professional ISO training workshop"
              className="h-full min-h-72 w-full object-cover"
            />
            <ol className="grid sm:grid-cols-2">
              {courseLevels.map((level, index) => (
                <li key={level} className="border-b border-border p-6 sm:border-r last:border-b-0">
                  <span className="text-xs font-bold tracking-wide text-honey-text uppercase">
                    Level {index + 1}
                  </span>
                  <h3 className="mt-2 text-base font-bold text-indigo-brand">{level}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {levelDetails[level]}
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              to="/training"
              className="inline-flex items-center gap-2 rounded-md bg-indigo-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-indigo-soft"
            >
              Browse Training Courses <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Latest insights" title="Guidance from our technical team" />
            <Link
              to="/resources/articles"
              className="inline-flex items-center gap-2 text-sm font-bold text-indigo-brand hover:underline"
            >
              View All Articles <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading
            eyebrow="FAQs"
            title="Common questions before you start"
            intro="Cannot see your question? Send us your scope and our team will answer directly."
          />
          <div>
            <FAQAccordion faqs={homeFaqs} />
            <Link
              to="/resources/faq"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-indigo-brand hover:underline"
            >
              See all FAQs <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-card p-8 md:flex-row md:items-center md:p-10">
          <div>
            <h2 className="text-2xl font-extrabold text-indigo-brand">
              Build Your Career With TRAIBCERT
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              We work with auditors, technical experts and support professionals across quality,
              security, safety and sustainability disciplines. Tell us where your expertise lies.
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
