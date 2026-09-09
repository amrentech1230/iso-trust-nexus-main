import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { AppLink } from "@/components/AppLink";
import { CourseCard } from "@/components/site/Cards";
import { CourseCheckout } from "@/components/site/CourseCheckout";
import { CTASection } from "@/components/site/CTASection";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { courses, coursesBySlug } from "@/data/courses";
import { generalFaqs } from "@/data/insights";
import { standardsBySlug } from "@/data/standards";
import { breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/training/$slug")({
  loader: ({ params }) => {
    const course = coursesBySlug[params.slug];
    if (!course) throw notFound();
    return { course };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Unavailable | TRAIBCERT" }, { name: "robots", content: "noindex" }],
      };
    }
    const { course } = loaderData;
    const path = `/training/${params.slug}`;
    const meta = pageMeta({
      title: `${course.code} Training Courses | TRAIBCERT`,
      description: course.summary.slice(0, 155),
      path,
      type: "article",
    });
    return {
      ...meta,
      scripts: [
        breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Training", href: "/training" },
          { name: course.code, href: path },
        ]),
        faqJsonLd(generalFaqs.slice(0, 3)),
      ],
    };
  },
  component: CoursePage,
});

function CoursePage() {
  const { course } = Route.useLoaderData();
  const standard = standardsBySlug[course.slug];
  const related = courses.filter((c) => c.category === course.category && c.slug !== course.slug);

  return (
    <>
      <PageHero
        eyebrow={course.discipline}
        title={course.title}
        intro={course.summary}
        crumbs={[
          { name: "Training", href: "/training" },
          { name: course.code, href: `/training/${course.slug}` },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <a
            href="#enrol"
            className="inline-flex items-center gap-2 rounded-md bg-honey px-5 py-3 text-sm font-bold text-indigo-brand transition-colors hover:bg-honey-hover"
          >
            Enrol &amp; pay online <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <AppLink
            href="/contact/enquiry"
            className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            Book by invoice
          </AppLink>
          {standard ? (
            <AppLink
              href={`/certification/${standard.slug}`}
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              {standard.code} certification
            </AppLink>
          ) : null}
        </div>
      </PageHero>

      <section className="py-14 md:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Delivery"
            title="Choose the delivery that fits your team"
            intro="Public dates, private in-house cohorts and self-paced study are all available. Dates and fees are confirmed on request."
          />
          <div className="mt-7 flex flex-wrap gap-2">
            {course.delivery.map((mode) => (
              <span
                key={mode}
                className="rounded-full border bg-card px-4 py-2 text-sm font-semibold"
              >
                {mode}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="enrol" className="scroll-mt-24 py-14 md:py-16">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
            <div>
              <SectionHeading
                eyebrow="Enrolment"
                title="Enrol and pay securely online"
                intro="Reserve your place with an online card or PayPal payment. Prefer to be invoiced or booking for a group? Choose 'Book by invoice' and our team will arrange it."
              />
              <ul className="mt-7 space-y-3">
                {[
                  "Instant confirmation and a receipt reference by email",
                  "Secure payment processed by PayPal",
                  "Public dates, private in-house cohorts and self-paced study",
                  "Group bookings and invoicing available on request",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-indigo-brand"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <CourseCheckout course={course} />
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-14 md:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Course levels" title={`${course.code} training modules`} />
          <div className="mt-9 space-y-6">
            {course.modules.map((module) => (
              <article key={module.level} className="rounded-lg border bg-card p-6 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-lg font-bold">{module.level}</h3>
                  <span className="text-sm font-semibold text-muted-foreground">
                    {module.duration}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {module.audience}
                </p>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="text-xs font-bold tracking-[0.14em] uppercase">
                      Learning objectives
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {module.objectives.map((item) => (
                        <li key={item} className="flex gap-2 text-sm">
                          <Check
                            className="mt-0.5 size-4 shrink-0 text-indigo-brand"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-[0.14em] uppercase">
                      Course content
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {module.content.map((item) => (
                        <li key={item} className="flex gap-2 text-sm">
                          <Check
                            className="mt-0.5 size-4 shrink-0 text-indigo-brand"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="py-14 md:py-16">
          <div className="container-page">
            <SectionHeading eyebrow="Related training" title="Other courses in this area" />
            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.slice(0, 3).map((c) => (
                <CourseCard key={c.slug} course={c} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-muted/40 py-14 md:py-16">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="FAQs" title="Training questions, answered" />
          <div className="mt-6">
            <FAQAccordion faqs={generalFaqs.slice(0, 4)} />
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to book training?"
        body="Tell us the standard, level and number of delegates and we will confirm dates and fees."
      />
    </>
  );
}
