import { createFileRoute, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { CourseCard, StandardCard } from "@/components/site/Cards";
import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { coursesBySlug } from "@/data/courses";
import { industries } from "@/data/industries";
import { standardsBySlug } from "@/data/standards";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/resources/industries/$slug")({
  loader: ({ params }) => {
    const industry = industries.find((i) => i.slug === params.slug);
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
      title: `ISO Certification for ${industry.name} | TRAIBCERT`,
      description: industry.summary.slice(0, 155),
      path,
      type: "article",
    });
    return {
      ...meta,
      scripts: [
        breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Industries", href: "/resources/industries" },
          { name: industry.name, href: path },
        ]),
      ],
    };
  },
  component: IndustryPage,
});

function IndustryPage() {
  const { industry } = Route.useLoaderData();
  const standards = industry.standards
    .map((s) => standardsBySlug[s])
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const courses = industry.training
    .map((c) => coursesBySlug[c])
    .filter((c): c is NonNullable<typeof c> => Boolean(c));
  const related = industries.filter((i) => i.slug !== industry.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Industry"
        title={`Certification for ${industry.name}`}
        intro={industry.summary}
        crumbs={[
          { name: "Industries", href: "/resources/industries" },
          { name: industry.name, href: `/resources/industries/${industry.slug}` },
        ]}
      />

      <section className="py-14 md:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Sector context" title="Challenges we see" />
            <ul className="mt-6 space-y-3">
              {industry.challenges.map((item) => (
                <li key={item} className="flex gap-2 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-indigo-brand" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Outcomes" title="What certification delivers" />
            <ul className="mt-6 space-y-3">
              {industry.benefits.map((item) => (
                <li key={item} className="flex gap-2 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-indigo-brand" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {standards.length > 0 ? (
        <section className="bg-muted/40 py-14 md:py-16">
          <div className="container-page">
            <SectionHeading eyebrow="Standards" title={`Relevant standards for ${industry.name}`} />
            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {standards.map((standard) => (
                <StandardCard key={standard.slug} standard={standard} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {courses.length > 0 ? (
        <section className="py-14 md:py-16">
          <div className="container-page">
            <SectionHeading eyebrow="Training" title="Recommended training" />
            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <CourseCard key={course.slug} course={course} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-muted/40 py-14 md:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Other sectors" title="Related industries" />
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((i) => (
              <article key={i.slug} className="rounded-lg border bg-card p-6">
                <h3 className="text-base font-bold">{i.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
