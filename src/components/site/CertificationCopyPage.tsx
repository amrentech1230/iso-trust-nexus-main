import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { AppLink } from "@/components/AppLink";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import heroImage from "@/assets/hero-certification.jpg";
import {
  certificationCopyFaqs,
  type CertificationCopyPage as CertificationCopy,
} from "@/data/certification-copy";

const certificationSteps: [string, string][] = [
  [
    "Get started",
    "Send your details; a sector specialist scopes the certification and quotes a fixed price for the whole cycle.",
  ],
  ["Assessment", "Stage 1 reviews your system and readiness."],
  ["Certification audit", "Stage 2 tests the system in operation."],
  ["Certification", "An independent decision issues a three-year certificate."],
  ["Maintenance", "Annual surveillance and recertification in year three."],
];

const engagementSteps: [string, string][] = [
  ["Enquiry", "Send your details."],
  ["Scope and quotation", "Fixed price within one working day."],
  ["Assessment", "On site or remote, to the agreed plan."],
  ["Report", "Receive findings, evidence and conclusion."],
  ["Follow-up", "Re-assessment or verification of actions where needed."],
];

const whyTraibcert = [
  {
    title: "Sector-experienced auditors",
    description: "Audit teams are assigned by scheme and sector competence.",
  },
  {
    title: "One body across regions",
    description:
      "The UK, the Middle East, India and worldwide through our auditor network, with one report format and one point of contact.",
  },
  {
    title: "Fixed-price cycle",
    description: "The whole effort is quoted upfront, with travel at cost and nothing added later.",
  },
];

const enquiryUrl = "https://www.traibcert.org.uk/enquiry/";

function getBlock(page: CertificationCopy, prefix: string) {
  return page.blocks.find((block) => block.heading.startsWith(prefix))?.paragraphs ?? [];
}

function getHeroButtons(page: CertificationCopy) {
  const buttonLine = getBlock(page, "1 · Hero").find((paragraph) =>
    paragraph.startsWith("Buttons:"),
  );
  if (!buttonLine) return [];

  return Array.from(
    buttonLine.matchAll(/([^·]+?)\s*→\s*(https?:\/\/[^\s·]+|\/[^\s·]+)/g),
    (match) => {
      const label = match[1]?.replace(/^Buttons:\s*/, "").trim();
      const href = match[2];
      return label && href ? { label, href } : undefined;
    },
  ).filter((button): button is { label: string; href: string } => button !== undefined);
}

function splitBenefit(paragraph: string) {
  const separator = paragraph.match(/\s[—–]\s/);
  if (!separator || separator.index === undefined) {
    return { title: paragraph, description: "" };
  }
  return {
    title: paragraph.slice(0, separator.index),
    description: paragraph.slice(separator.index + separator[0].length),
  };
}

export function CertificationCopyPage({ page }: { page: CertificationCopy }) {
  const hero = getBlock(page, "1 · Hero");
  const whatItIs = getBlock(page, "2 · What it is");
  const whyItMatters = getBlock(page, "2 · Why it matters");
  const systemBlock = page.blocks.find((block) => block.heading.startsWith("3 ·"));
  const systemCovers = systemBlock?.paragraphs ?? [];
  const benefits = getBlock(page, "4 · Benefits");
  const processBlock = page.blocks.find((block) => block.heading.startsWith("5 ·"));
  const process = processBlock?.paragraphs ?? [];
  const implementationBlock = page.blocks.find((block) => block.heading.startsWith("6 ·"));
  const implementation = implementationBlock?.paragraphs ?? [];
  const whoNeedsIt = getBlock(page, "7 · Who needs it");
  const pricing = getBlock(page, "8 · Pricing");
  const faqs = certificationCopyFaqs(page);
  const close = getBlock(page, "10 · Why TRAIBCERT + close").join(" ");
  const quoteLabel = /button:\s*([^→]+)→/i.exec(close)?.[1]?.trim() ?? "Get a quote";
  const heroButtons = getHeroButtons(page);
  const isEngagement = process.some((paragraph) =>
    /engagement|assessment process/i.test(paragraph),
  );
  const processStepsToShow = isEngagement ? engagementSteps : certificationSteps;
  const heroEyebrow = hero[0] ?? "";
  const heroIntro = hero[2] ?? page.metaDescription;
  const transition = process.find((paragraph) => paragraph.startsWith("Transition:"));
  const audience = whoNeedsIt[0] ?? "";
  const industryLine = whoNeedsIt.find((paragraph) => paragraph.startsWith("Industries:"));
  const industries =
    industryLine
      ?.replace(/^Industries:\s*/, "")
      .split("·")
      .map((industry) => industry.trim())
      .filter(Boolean) ?? [];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-indigo-brand text-white">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-brand/95 via-indigo-brand/90 to-indigo-brand/75"
        />
        <div className="container-page py-8 md:py-10">
          <nav aria-label="Breadcrumb" className="text-xs text-white/70">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <AppLink href="/" className="hover:underline">
                  Home
                </AppLink>
              </li>
              <li aria-hidden="true">›</li>
              <li>
                <AppLink href="/certification" className="hover:underline">
                  Certification
                </AppLink>
              </li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" className="font-semibold text-white">
                {page.title.replace(/ Certification$/, "")}
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-10 py-8 md:grid-cols-[1.35fr_0.65fr] md:py-10">
            <div>
              <p className="text-xs font-bold tracking-[0.16em] text-honey uppercase">
                {heroEyebrow}
              </p>
              <h1 className="mt-3 text-3xl leading-tight font-extrabold md:text-4xl lg:text-5xl">
                {page.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
                {heroIntro}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {heroButtons.map((button, index) =>
                  button.href.startsWith("http") ? (
                    <a
                      key={button.label}
                      href={button.href}
                      className={
                        index === 0
                          ? "inline-flex items-center gap-2 rounded-full bg-honey px-5 py-3 text-sm font-bold text-indigo-brand transition-colors hover:bg-honey-hover"
                          : "inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
                      }
                    >
                      {button.label}
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <AppLink
                      key={button.label}
                      href={button.href}
                      className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
                    >
                      {button.label}
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </AppLink>
                  ),
                )}
              </div>
            </div>

            <div className="mx-auto grid size-48 place-items-center rounded-full border-[3px] border-honey text-center md:size-56">
              <div className="px-5">
                <ShieldCheck className="mx-auto size-7 text-honey" aria-hidden="true" />
                <p className="mt-2 text-lg font-extrabold leading-tight">
                  {page.title.replace(/ Certification$/, "")}
                </p>
                <p className="mt-2 text-xs text-white/80">{hero[0]}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12">
        <div className="container-page grid gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="text-xl font-bold text-indigo-dark">
              What {page.title.replace(/ Certification$/, "")} is
            </h2>
            {whatItIs.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-sm leading-6 text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
          <div>
            <h2 className="text-xl font-bold text-indigo-dark">Why it matters</h2>
            {whyItMatters.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-sm leading-6 text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {systemCovers.length > 0 ? (
        <section className="bg-muted/40 py-10 md:py-12">
          <div className="container-page">
            <h2 className="text-xl font-bold text-indigo-dark">
              {systemBlock?.heading.replace(/^\d+ · /, "") ?? "What the system covers"}
            </h2>
            <ul className="mt-5 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {systemCovers.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-5 text-foreground"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-honey-text" aria-hidden="true" />
                  {item.replace(/^[•·-]\s*/, "")}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {benefits.length > 0 ? (
        <section className="py-10 md:py-12">
          <div className="container-page">
            <h2 className="text-xl font-bold text-indigo-dark">
              Benefits of {page.title.replace(/ Certification$/, "")}
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((item) => {
                const benefit = splitBenefit(item);
                return (
                  <article
                    key={item}
                    className="rounded-md border border-border border-t-2 border-t-honey bg-white p-4"
                  >
                    <Check className="size-4 text-honey-text" aria-hidden="true" />
                    <h3 className="mt-3 text-sm font-bold text-indigo-dark">{benefit.title}</h3>
                    {benefit.description ? (
                      <p className="mt-2 text-xs leading-5 text-muted-foreground">
                        {benefit.description}
                      </p>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-muted/40 py-10 md:py-12">
        <div className="container-page">
          <h2 className="text-xl font-bold text-indigo-dark">
            {processBlock?.heading.replace(/^\d+ · /, "") ??
              `How ${page.title.replace(/ Certification$/, "")} works`}
          </h2>
          <div className="relative mt-7">
            <span
              aria-hidden="true"
              className="absolute top-3.5 right-[8%] left-[8%] hidden border-t border-border lg:block"
            />
            <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {processStepsToShow.map(([title, description], index) => (
                <li key={title}>
                  <span className="relative z-10 grid size-7 place-items-center rounded-full bg-indigo-brand text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-2 text-sm font-bold text-indigo-dark">{title}</h3>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{description}</p>
                </li>
              ))}
            </ol>
          </div>
          {!isEngagement ? (
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-indigo-brand">
              <AppLink href="/resources/certificate-transfer" className="hover:underline">
                Holding a certificate elsewhere? Certificate transfer{" "}
                <span aria-hidden="true">→</span>
              </AppLink>
            </div>
          ) : null}
          {transition ? (
            <p className="mt-4 max-w-4xl text-xs leading-5 text-muted-foreground">
              {transition.replace(/^Transition:\s*/, "")}{" "}
              <AppLink
                href="/certification/transition-timeline"
                className="font-semibold text-indigo-brand hover:underline"
              >
                See the transition timeline.
              </AppLink>
            </p>
          ) : null}
        </div>
      </section>

      <section className="py-10 md:py-12">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold text-indigo-dark">
              {implementationBlock?.heading.replace(/^\d+ · /, "") ?? "Implementation steps"}
            </h2>
            <ol className="mt-5 space-y-3">
              {implementation.map((step, index) => (
                <li
                  key={step}
                  className="flex items-start gap-3 text-sm leading-5 text-muted-foreground"
                >
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-honey text-xs font-bold text-indigo-brand">
                    {index + 1}
                  </span>
                  {step.replace(/^\d+\.\s*/, "")}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="text-xl font-bold text-indigo-dark">Who needs it?</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{audience}</p>
            {industries.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <span
                    key={industry}
                    className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-indigo-brand"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {pricing.length > 0 ? (
        <section className="bg-muted/40 py-10 md:py-12">
          <div className="container-page">
            <h2 className="text-xl font-bold text-indigo-dark">Pricing</h2>
            <div className="mt-4 flex flex-col gap-5 border-y border-border py-5 md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl space-y-3">
                {pricing.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-6 text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
              <a
                href={enquiryUrl}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-honey px-5 py-3 text-sm font-bold text-indigo-brand transition-colors hover:bg-honey-hover"
              >
                {quoteLabel}
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      ) : null}

      {faqs.length > 0 ? (
        <section className="py-10 md:py-12">
          <div className="container-page max-w-4xl">
            <h2 className="text-xl font-bold text-indigo-dark">Frequently asked questions</h2>
            <div className="mt-4">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-indigo-brand py-10 text-white md:py-12">
        <div className="container-page">
          <p className="text-xs font-bold tracking-[0.16em] text-honey uppercase">
            Why organisations choose TRAIBCERT
          </p>
          <h2 className="mt-2 text-2xl font-extrabold md:text-3xl">
            Independent, practical, international
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {whyTraibcert.map((reason, index) => (
              <article key={reason.title}>
                {index === 0 ? (
                  <Check className="size-5 text-honey" aria-hidden="true" />
                ) : index === 1 ? (
                  <ArrowRight className="size-5 text-honey" aria-hidden="true" />
                ) : (
                  <ShieldCheck className="size-5 text-honey" aria-hidden="true" />
                )}
                <h3 className="mt-2 text-sm font-bold">{reason.title}</h3>
                <p className="mt-1 text-xs leading-5 text-white/80">{reason.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-4 border-t border-white/20 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/90">
              Send your details and a sector specialist replies within one working day.
            </p>
            <a
              href={enquiryUrl}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-honey px-5 py-3 text-sm font-bold text-indigo-brand transition-colors hover:bg-honey-hover"
            >
              {quoteLabel}
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
