import { createFileRoute, notFound } from "@/lib/router-compat";
import { ArrowRight, Check } from "lucide-react";
import { AppLink } from "@/components/AppLink";
import { StandardCard } from "@/components/site/Cards";
import { CertificationProcess } from "@/components/site/CertificationProcess";
import { CTASection } from "@/components/site/CTASection";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { coursesBySlug } from "@/data/courses";
import { generalFaqs } from "@/data/insights";
import { standards, standardsBySlug } from "@/data/standards";
import { breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/certification/$slug")({
  loader: ({ params }) => {
    const standard = standardsBySlug[params.slug];
    if (!standard) throw notFound();
    return { standard };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Unavailable | TRAIBCERT" }, { name: "robots", content: "noindex" }],
      };
    }
    const { standard } = loaderData;
    const path = `/certification/${params.slug}`;
    const meta = pageMeta({
      title: `${standard.code} Certification | TRAIBCERT`,
      description: standard.summary.slice(0, 155),
      path,
      type: "article",
    });
    return {
      ...meta,
      scripts: [
        breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Certification", href: "/certification" },
          { name: standard.code, href: path },
        ]),
        faqJsonLd([...(standard.faqs ?? []), ...generalFaqs.slice(0, 3)]),
      ],
    };
  },
  component: StandardPage,
});

function StandardPage() {
  const { standard } = Route.useLoaderData();
  const faqs = [...(standard.faqs ?? []), ...generalFaqs.slice(0, 3)];
  const course = standard.training ? coursesBySlug[standard.training] : undefined;
  const related = standards
    .filter((s) => s.category === standard.category && s.slug !== standard.slug)
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={standard.discipline}
        title={`${standard.code} Certification`}
        intro={standard.summary}
        crumbs={[
          { name: "Certification", href: "/certification" },
          { name: standard.code, href: `/certification/${standard.slug}` },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <AppLink
            href="/contact/enquiry"
            className="inline-flex items-center gap-2 rounded-md bg-honey px-5 py-3 text-sm font-bold text-indigo-brand transition-colors hover:bg-honey-hover"
          >
            Get a Quote <ArrowRight className="size-4" aria-hidden="true" />
          </AppLink>
          {course ? (
            <AppLink
              href={`/training/${course.slug}`}
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Related training
            </AppLink>
          ) : null}
        </div>
      </PageHero>

      <section className="py-14 md:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading eyebrow="Overview" title={`What ${standard.code} is`} />
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {standard.whatItIs}
            </p>

            <h2 className="mt-10 text-xl font-bold text-indigo-brand">Requirements at a glance</h2>
            <ul className="mt-4 space-y-2.5">
              {standard.requirements.map((requirement) => (
                <li key={requirement} className="flex gap-2.5 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-honey-text" aria-hidden="true" />
                  {requirement}
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-base font-bold text-indigo-brand">Who needs it</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {standard.whoNeedsIt.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-honey-text" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-muted/50 p-6">
              <h2 className="text-base font-bold text-indigo-brand">Benefits</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {standard.benefits.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-honey-text" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-muted/40 py-14 md:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Certification process"
            title={`How ${standard.code} certification works`}
            align="center"
          />
          <div className="mt-9">
            <CertificationProcess />
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Why TRAIBCERT" title="Independent, practical, international" />
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We are an independent UK certification body. We do not implement the systems we audit,
              so certification decisions rest on objective evidence. Audits are led by auditors with
              sector experience, planned around your sites and delivered across the UK, UAE and
              internationally.
            </p>
            {course ? (
              <div className="mt-6 rounded-xl border border-border bg-card p-6">
                <p className="text-[11px] font-bold tracking-[0.16em] text-honey-text uppercase">
                  Related training
                </p>
                <h3 className="mt-2 text-base font-bold text-indigo-brand">{course.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{course.summary}</p>
                <AppLink
                  href={`/training/${course.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-indigo-brand hover:underline"
                >
                  View course levels <ArrowRight className="size-4" aria-hidden="true" />
                </AppLink>
              </div>
            ) : null}
          </div>
          <div>
            <SectionHeading eyebrow="FAQs" title="Common questions" />
            <div className="mt-4">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="bg-muted/40 py-14 md:py-16">
          <div className="container-page">
            <SectionHeading eyebrow="Related" title="You may also need" />
            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <StandardCard key={item.slug} standard={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CTASection />
    </>
  );
}
