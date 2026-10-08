import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { AppLink } from "@/components/AppLink";
import { CTASection } from "@/components/site/CTASection";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { coursesBySlug } from "@/data/courses";
import { industries } from "@/data/industries";
import { standardsBySlug } from "@/data/standards";
import { trainingLevelHref } from "@/lib/industry-links";
import { breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/resources/industries/$slug")({
  loader: ({ params }) => {
    const industry = industries.find((item) => item.slug === params.slug);
    if (!industry) throw notFound();
    return { industry };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Unavailable | TRAIBCERT" }, { name: "robots", content: "noindex" }],
      };
    }
    const { industry } = loaderData;
    const path = `/resources/industries/${params.slug}`;
    const meta = pageMeta({
      title: industry.seoTitle,
      description: industry.metaDescription,
      path,
      type: "article",
    });
    return {
      ...meta,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: industry.h1,
            about: { "@type": "Thing", name: industry.name },
          }),
        },
        breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Industries", href: "/resources/industries" },
          { name: industry.name, href: path },
        ]),
        faqJsonLd([...industry.faqs]),
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: industry.certifications
              .filter((item) => standardsBySlug[item.url.split("/").at(-1) ?? ""])
              .map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: item.name,
                url: item.url,
              })),
          }),
        },
      ],
    };
  },
  component: IndustryPage,
});

function IndustryPage() {
  const { industry } = Route.useLoaderData();
  const certifications = industry.certifications;
  const training = industry.training;
  const related = industry.related
    .map((name) => industries.find((item) => item.name === name))
    .filter((item): item is (typeof industries)[number] => Boolean(item))
    .filter((item) => item.slug !== industry.slug);
  return (
    <>
      <PageHero
        eyebrow={industry.eyebrow}
        title={industry.h1}
        intro={industry.hero}
        crumbs={[
          { name: "Industries", href: "/resources/industries" },
          { name: industry.name, href: `/resources/industries/${industry.slug}` },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <AppLink
            href="/contact/enquiry"
            className="inline-flex items-center gap-2 rounded-md bg-honey px-5 py-3 text-sm font-bold text-indigo-brand transition-colors hover:bg-honey-hover"
          >
            {industry.primaryCta}
            <ArrowRight className="size-4" aria-hidden="true" />
          </AppLink>
          <AppLink
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            {industry.secondaryCta}
          </AppLink>
        </div>
      </PageHero>

      <section className="py-14 md:py-16">
        <div id="profile" className="container-page scroll-mt-24">
          <SectionHeading eyebrow="Sector context" title={industry.profileHeading} />
          <CopyBlocks paragraphs={industry.profile} />
        </div>
      </section>

      <section id="requirements" className="scroll-mt-24 bg-muted/40 py-14 md:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="What buyers and oversight bodies ask for"
            title={`What customers, regulators and insurers require in ${industry.name}`}
          />
          <CopyBlocks paragraphs={industry.requirements} />
        </div>
      </section>

      <section id="certifications" className="scroll-mt-24 py-14 md:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Standards"
            title={`Certifications and assessments for ${industry.name}`}
          />
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((item) => {
              const slug = item.url.split("/").at(-1) ?? "";
              const standard = standardsBySlug[slug];
              const card = (
                <>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-sm font-bold text-indigo-brand">{item.name}</h3>
                    {item.region !== "Global" ? (
                      <span className="shrink-0 rounded-sm bg-honey-soft px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-honey-text uppercase">
                        {item.region}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.why}
                  </p>
                  {standard ? (
                    <span className="mt-4 text-sm font-semibold text-indigo-brand">Learn more</span>
                  ) : (
                    <AppLink
                      href="/contact/enquiry"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-indigo-brand hover:underline"
                    >
                      Ask about this service
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </AppLink>
                  )}
                </>
              );
              const className =
                "flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-indigo-soft/40 hover:shadow-[0_18px_40px_-24px_rgba(26,24,84,0.35)]";

              return standard ? (
                <AppLink key={`${item.name}-${item.region}`} href={item.url} className={className}>
                  {card}
                </AppLink>
              ) : (
                <article key={`${item.name}-${item.region}`} className={className}>
                  {card}
                </article>
              );
            })}
          </div>
          {industry.regions.length > 0 ? (
            <div className="mt-8 rounded-lg border border-border bg-muted/40 p-5">
              <h3 className="text-base font-bold text-indigo-brand">
                If you operate in a specific country
              </h3>
              <ul className="mt-3 space-y-2">
                {industry.regions.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-indigo-brand"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      <section id="training" className="scroll-mt-24 bg-muted/40 py-14 md:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Training" title={`Recommended training for ${industry.name}`} />
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {training.map((item) => {
              const courseSlug = item.url.split("/").at(-1)?.split("#")[0] ?? "";
              const course = coursesBySlug[courseSlug];
              const levels =
                course?.modules.filter((module) =>
                  item.course.toLowerCase().includes(module.level.toLowerCase()),
                ) ?? [];
              return (
                <article
                  key={`${item.course}-${item.url}`}
                  className="flex h-full flex-col rounded-xl border border-border bg-card p-6"
                >
                  <h3 className="text-sm font-bold text-indigo-brand">{item.course}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.who}
                  </p>
                  {levels.length > 0 ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {levels.map((level) => {
                        const href = trainingLevelHref(level.level, `/training/${courseSlug}`);
                        return href ? (
                          <AppLink
                            key={level.level}
                            href={href}
                            className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-brand hover:underline"
                          >
                            {level.level}
                            <ArrowRight className="size-4" aria-hidden="true" />
                          </AppLink>
                        ) : null;
                      })}
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="benefits" className="scroll-mt-24 py-14 md:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Business outcomes"
            title={`Benefits of certification in ${industry.name}`}
          />
          <CopyBlocks paragraphs={industry.benefits} />
        </div>
      </section>

      <section id="journey" className="scroll-mt-24 bg-muted/40 py-14 md:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Plan your next steps"
            title={`A typical certification journey in ${industry.name}`}
          />
          <CopyBlocks paragraphs={industry.journey} />
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 py-14 md:py-16">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="Answers" title={`${industry.name} FAQs`} />
          <div className="mt-6">
            <FAQAccordion faqs={[...industry.faqs]} />
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="bg-muted/40 py-14 md:py-16">
          <div className="container-page">
            <SectionHeading eyebrow="Other sectors" title="Related industries" />
            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <article key={item.slug} className="rounded-lg border bg-card p-6">
                  <h3 className="text-base font-bold">
                    <AppLink href={`/resources/industries/${item.slug}`}>{item.name}</AppLink>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.summary}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CTASection
        title={`Talk to a sector specialist about ${industry.name}`}
        body="Share your scope, locations and the standards your customers or regulators require. Our team will help you plan the right next step."
      />
    </>
  );
}

function CopyBlocks({ paragraphs }: { paragraphs: readonly string[] }) {
  return (
    <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}
