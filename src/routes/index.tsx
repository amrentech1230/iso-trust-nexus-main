import { Link } from "react-router-dom";
import { createFileRoute } from "@/lib/router-compat";
import {
  ArrowRight,
  BadgeCheck,
  Globe2,
  GraduationCap,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";
import heroImage from "@/assets/hero-certification.jpg";
import {
  AccreditationBadge,
  BlogCard,
  IndustryCard,
  ServiceCard,
  TestimonialCard,
} from "@/components/site/Cards";
import { CertificationProcess } from "@/components/site/CertificationProcess";
import { CTASection } from "@/components/site/CTASection";
import { SectionHeading } from "@/components/site/SectionHeading";
import { site } from "@/config/site";
import { industries } from "@/data/industries";
import { posts } from "@/data/insights";
import { popularStandards } from "@/data/standards";
import { pageMeta } from "@/lib/seo";
import { AppLink } from "@/components/AppLink";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta({
      title: "ISO Certification, Training & Compliance Services | TRAIBCERT",
      description:
        "Independent UK certification body delivering ISO certification, Cyber Essentials, professional training and inspection services across the UK, UAE and internationally.",
      path: "/",
    }),
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
  },
  {
    title: "Training",
    body: "Professional ISO training including Foundation, Awareness, Internal Auditor and Lead Auditor programmes.",
    href: "/training",
    icon: "GraduationCap",
  },
  {
    title: "Inspection",
    body: "Professional inspection and pre-shipment inspection services.",
    href: "/certification/inspection",
    icon: "ClipboardCheck",
  },
  {
    title: "E-Learning",
    body: "Flexible online professional training through the TRAIBCERT E-Learning Academy.",
    href: "/training",
    icon: "MonitorPlay",
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

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-background">
        <div className="container-page grid items-center gap-12 py-14 md:py-20 lg:grid-cols-2">
          <div className="animate-fade-up">
            <p className="text-[11px] font-bold tracking-[0.18em] text-honey-text uppercase">
              Independent UK certification body
            </p>
            <h1 className="mt-4 text-4xl leading-[1.08] font-extrabold text-indigo-brand md:text-5xl lg:text-[3.4rem]">
              ISO Certification, Training &amp; Compliance Services
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Independent certification, professional training and inspection services for
              organisations across the UK, UAE and internationally.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact/enquiry"
                className="inline-flex items-center gap-2 rounded-md bg-honey px-6 py-3.5 text-sm font-bold text-indigo-brand transition-colors hover:bg-honey-hover"
              >
                Get a Quote <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                to="/certification"
                className="inline-flex items-center gap-2 rounded-md border border-indigo-brand/20 px-6 py-3.5 text-sm font-bold text-indigo-brand transition-colors hover:bg-secondary"
              >
                Explore Certification
              </Link>
            </div>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-indigo-brand">
              {site.accreditations.map((a) => (
                <li key={a.label} className="inline-flex items-center gap-2">
                  <BadgeCheck className="size-4 text-honey-text" aria-hidden="true" />
                  {a.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-secondary" aria-hidden="true" />
            <img
              src={heroImage}
              width={1600}
              height={1200}
              alt="Auditor reviewing management system documentation on a tablet in a modern industrial facility"
              className="h-full w-full rounded-2xl object-cover shadow-[0_30px_70px_-40px_rgba(26,24,84,0.6)]"
            />
          </div>
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-28 border-t border-border bg-muted/40 py-16 md:py-20"
      >
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_1fr]">
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
              to="/certification"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-indigo-brand hover:underline"
            >
              Learn More About Us <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <dl className="grid grid-cols-2 gap-4 self-start">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border bg-card p-5">
                <dt className="text-xs text-muted-foreground">{stat.label}</dt>
                <dd className="mt-1 text-2xl font-extrabold text-indigo-brand">{stat.value}</dd>
              </div>
            ))}
          </dl>
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
            eyebrow="Certification process"
            title="A clear route from enquiry to certification"
            align="center"
          />
          <div className="mt-10">
            <CertificationProcess />
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
