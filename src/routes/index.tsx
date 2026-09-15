import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Globe2,
  GraduationCap,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";
import aboutTeamImage from "@/assets/home-about-team-clean.jpg";
import auditDeliveryImage from "@/assets/home-audit-delivery.jpg";
import cyberImage from "@/assets/home-hero-cyber.jpg";
import inspectionImage from "@/assets/home-hero-inspection-clean.jpg";
import certificationImage from "@/assets/home-hero-audit.jpg";
import trainingImage from "@/assets/home-training.jpg";
import {
  AccreditationBadge,
  BlogCard,
  IndustryCard,
  ServiceCard,
  TestimonialCard,
} from "@/components/site/Cards";
import { CertificationProcess } from "@/components/site/CertificationProcess";
import { CTASection } from "@/components/site/CTASection";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { HomeHero } from "@/components/site/HomeHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { site } from "@/config/site";
import { courseLevels } from "@/data/courses";
import { industries } from "@/data/industries";
import { posts } from "@/data/insights";
import { popularStandards, standardsByCategory } from "@/data/standards";
import { faqJsonLd, pageMeta } from "@/lib/seo";
import { AppLink } from "@/components/AppLink";

export const Route = createFileRoute("/")({
  head: () => {
    const meta = pageMeta({
      title: "ISO Certification, Training & Compliance Services | TRAIBCERT",
      description:
        "Independent UK certification body delivering ISO certification, Cyber Essentials, professional training and inspection services across the UK, UAE and internationally.",
      path: "/",
    });
    return { ...meta, scripts: [faqJsonLd(homeFaqs)] };
  },
  component: Home,
});

const differentiators = [
  {
    icon: Scale,
    title: "Independent & Impartial",
    body: "We certify, we do not consult on the systems we audit. Certification decisions rest on objective evidence alone.",
  },
  {
    icon: Users,
    title: "Experienced Auditors",
    body: "Audits are led by qualified auditors with practical sector experience, so findings are relevant and actionable.",
  },
  {
    icon: Globe2,
    title: "International Coverage",
    body: "We support organisations across the UK, UAE and internationally, combining on-site and remote audit techniques.",
  },
  {
    icon: GraduationCap,
    title: "Professional Training",
    body: "Foundation, Awareness, Internal Auditor and Lead Auditor courses delivered in class, live online or in-house.",
  },
  {
    icon: BadgeCheck,
    title: "Industry Expertise",
    body: "From technology and finance to manufacturing, food and construction, our scope reflects real sector risk.",
  },
  {
    icon: ShieldCheck,
    title: "Customer-Focused Service",
    body: "Clear scoping, predictable audit planning and responsive support from enquiry through to recertification.",
  },
];

const services = [
  {
    title: "Certification",
    body: "ISO certification services for organisations across multiple industries.",
    href: "/certification",
    icon: "BadgeCheck",
    image: certificationImage,
  },
  {
    title: "Training",
    body: "Professional ISO training including Foundation, Awareness, Internal Auditor and Lead Auditor programmes.",
    href: "/training",
    icon: "GraduationCap",
    image: trainingImage,
  },
  {
    title: "Inspection",
    body: "Professional inspection and pre-shipment inspection services.",
    href: "/certification/inspection",
    icon: "ClipboardCheck",
    image: inspectionImage,
  },
  {
    title: "E-Learning",
    body: "Flexible online professional training through the TRAIBCERT E-Learning Academy.",
    href: "/training",
    icon: "MonitorPlay",
    image: cyberImage,
  },
];

const stats = [
  { value: "UK & UAE", label: "Operating regions" },
  { value: "30+", label: "Standards and schemes in scope" },
  { value: "4", label: "Training levels per standard" },
  { value: "ASCB", label: "Accreditation" },
];

const testimonials = [
  {
    quote:
      "Placeholder testimonial — replace with approved client wording. Describe the audit experience, auditor knowledge and the commercial outcome achieved.",
    name: "Client name (placeholder)",
    role: "Quality Manager, sector (placeholder)",
  },
  {
    quote:
      "Placeholder testimonial — replace with approved client wording covering training quality and delegate feedback.",
    name: "Client name (placeholder)",
    role: "Head of Compliance, sector (placeholder)",
  },
  {
    quote:
      "Placeholder testimonial — replace with approved client wording about certificate transfer or international audit coverage.",
    name: "Client name (placeholder)",
    role: "Operations Director, sector (placeholder)",
  },
];

const trustStrip = [
  { title: "Independent body", body: "Certification decisions separated from consultancy." },
  { title: "Accredited schemes", body: "ISO management systems and UK cyber schemes." },
  { title: "UK & UAE teams", body: "On-site and remote audits across both regions." },
  { title: "Four training levels", body: "Foundation, Awareness, Internal and Lead Auditor." },
];

const categoryGroups = [
  {
    key: "iso" as const,
    title: "ISO Management Systems",
    body: "Quality, environment, health and safety, information security, food safety and service management standards.",
    href: "/certification",
  },
  {
    key: "cyber" as const,
    title: "Cyber Security & Compliance",
    body: "Cyber Essentials and information security schemes for organisations handling sensitive data.",
    href: "/certification",
  },
  {
    key: "sustainability" as const,
    title: "Sustainability",
    body: "Energy, environment and responsible-business schemes supporting reporting commitments.",
    href: "/certification",
  },
  {
    key: "inspection" as const,
    title: "Inspection",
    body: "Independent inspection services including pre-shipment inspection of goods.",
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
    body: "Multi-site and international scopes combine on-site sampling with remote sessions.",
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
    a: "No. To protect impartiality we do not consult on the management systems we audit. We deliver certification, training and inspection services only.",
  },
  {
    q: "Can we transfer an existing certificate to TRAIBCERT?",
    a: "Yes. Certificate transfer is available where your current certificate is valid and accredited. We review your existing audit history before confirming the transfer.",
  },
  {
    q: "Where do you operate?",
    a: "We support organisations across the UK, the UAE and internationally, using a mix of on-site and remote audit techniques.",
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
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustStrip.map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <BadgeCheck className="mt-0.5 size-5 shrink-0 text-honey-text" aria-hidden="true" />
              <div>
                <p className="text-sm font-bold text-indigo-brand">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
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
              eyebrow="About us"
              title="An independent certification body built around your operations"
              intro="TRAIBCERT LIMITED is an independent UK certification body providing ISO certification, Cyber Essentials, professional training and inspection services. We work with organisations in the UK, the UAE and internationally."
            />
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Our work spans management system certification across quality, environment, health and
              safety, information security, food safety, service management and sustainability;
              accredited training at Foundation through Lead Auditor level; and independent
              inspection including pre-shipment inspection. Certification and consultancy are kept
              strictly separate to protect impartiality.
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
            <dl className="mt-4 grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-border bg-card p-4">
                  <dt className="text-xs text-muted-foreground">{stat.label}</dt>
                  <dd className="mt-1 text-xl font-extrabold text-indigo-brand">{stat.value}</dd>
                </div>
              ))}
            </dl>
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
          <SectionHeading eyebrow="Our services" title="Four ways we support compliance" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
            intro="Browse by the type of risk you need to demonstrate control over. Each group links through to the full list of standards we certify."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {categoryGroups.map((group) => (
              <AppLink
                key={group.title}
                href={group.href}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-0.5 hover:border-indigo-soft/40"
              >
                <p className="text-[11px] font-bold tracking-[0.18em] text-honey-text uppercase">
                  {standardsByCategory(group.key).length} schemes
                </p>
                <h3 className="mt-2 text-lg font-bold text-indigo-brand">{group.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {group.body}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {standardsByCategory(group.key)
                    .slice(0, 5)
                    .map((standard) => (
                      <li
                        key={standard.slug}
                        className="rounded-md bg-secondary px-2 py-1 text-[11px] font-semibold text-indigo-brand"
                      >
                        {standard.code}
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
            eyebrow="Accreditations"
            title="Accredited, recognised and independently overseen"
            intro="Accreditation is what gives a certificate value. Badge assets are added as approved artwork becomes available."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {site.accreditations.map((a) => (
              <AccreditationBadge key={a.label} label={a.label} note={a.note} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Testimonials"
            title="What clients say"
            intro="Placeholder content shown below. Replace each entry with approved client wording and permissions before publication."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name + testimonial.role} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Industries"
            title="Sector expertise across twelve industries"
            intro="Every sector faces a different mix of quality, security, safety and environmental risk. Select yours for relevant standards and training."
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
            title="Four levels for every standard we train"
            intro="Courses run in the classroom, live online or in-house at your premises, and are also available through our E-Learning Academy."
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
              to="/resources/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-indigo-brand hover:underline"
            >
              View All Insights <ArrowRight className="size-4" aria-hidden="true" />
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