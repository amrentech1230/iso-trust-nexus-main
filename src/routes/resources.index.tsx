import { createFileRoute } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  publishedResources,
  resourceCategories,
  resourceSlug,
  resourcesForCategory,
} from "@/data/published-resources";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

const crumbs = [{ name: "Resources", href: "/resources" }];

const resourceTypes = [
  {
    title: "Articles",
    count: "150",
    href: "/resources/articles",
    description: "600–1,200 words; one question answered; published fortnightly.",
  },
  {
    title: "Guides",
    count: "137",
    href: "/resources/guides",
    description:
      "1,500–3,000 words with a table of contents; the authoritative piece on a topic; updated, not replaced.",
  },
  {
    title: "Checklists & templates",
    count: "63",
    href: "/resources/templates",
    description:
      "Downloadable PDF, DOCX or XLSX behind a short form; one page of context on the site.",
  },
  {
    title: "Explainers",
    count: "11",
    href: "/resources/explainers",
    description:
      '300–500 words on one certification concept, including the current "further topics".',
  },
  {
    title: "Standards updates",
    count: "4",
    href: "/resources/updates",
    description:
      "A short dated notice on a standard, scheme or regulation change and what TRAIBCERT clients should do.",
  },
];

const featuredResources = [
  publishedResources.find((resource) => resource.title === "What is ISO 45001 and who needs it?"),
  publishedResources.find(
    (resource) => resource.title === "Building a carbon baseline that survives customer scrutiny",
  ),
  publishedResources.find(
    (resource) => resource.title === "ISO 9001:2026 is published: a practical transition checklist",
  ),
].filter((resource) => resource !== undefined);

const reasons = [
  {
    title: "Sector-experienced auditors",
    description:
      "Audit teams are assigned by scheme and sector competence, so the person auditing a contractor has managed sites and the person auditing a software company has run an ISMS.",
  },
  {
    title: "One body across three regions",
    description:
      "Offices and auditor networks in the UK, the Middle East and India, with one report format, one quality system and one point of contact for multi-site and multi-country organisations.",
  },
  {
    title: "Fixed-price three-year cycle",
    description:
      "The full effort is quoted upfront for the whole cycle, with travel at cost; nothing is cut from the quotation to be added later.",
  },
  {
    title: "Transfer without repeating audits",
    description:
      "A valid accredited certificate held elsewhere transfers to TRAIBCERT with the cycle intact.",
  },
  {
    title: "Certification, assessment, inspection and training under one roof",
    description:
      "ISO standards, cyber schemes, privacy and cloud assessments, ESG and GHG verification, third-party inspection and Academy training, kept impartial by design.",
  },
];

export const Route = createFileRoute("/resources/")({
  head: () => {
    const meta = pageMeta({
      title: "TRAIBCERT Resource Centre | Guides, Checklists & Explainers",
      description:
        "Guides, checklists and explainers written by TRAIBCERT auditors and technical specialists to help organisations find the certification, report or course they need.",
      path: "/resources",
    });
    return {
      ...meta,
      scripts: [breadcrumbJsonLd([{ name: "Home", href: "/" }, ...crumbs])],
    };
  },
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="TRAIBCERT resource centre"
        title="Guides, checklists and explainers from the certification body that will audit you"
        intro="TRAIBCERT certifies, assesses, verifies, inspects and trains organisations across the UK, the Middle East and India. Everything here is written by our auditors and technical specialists to get you from the question you have been asked to the certificate, report or course that answers it."
        crumbs={crumbs}
        showEnquiryForm={false}
      >
        <div className="flex flex-wrap gap-3">
          <AppLink
            href="/contact"
            className="inline-flex items-center rounded-md bg-honey px-6 py-3.5 text-sm font-bold text-indigo-brand transition-colors hover:bg-honey-hover"
          >
            Get a quote
          </AppLink>
          <AppLink
            href="/certification/process"
            className="inline-flex items-center rounded-md border border-white/40 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            How certification with TRAIBCERT works
          </AppLink>
        </div>
      </PageHero>

      <section className="py-14 md:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Browse resources" title="Find the right resource for you" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resourceTypes.map((type) => (
              <AppLink
                key={type.title}
                href={type.href}
                className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-indigo-brand"
              >
                <p className="text-xs font-bold tracking-[0.16em] text-indigo-brand uppercase">
                  {type.count} resources
                </p>
                <h2 className="mt-2 text-lg font-bold">{type.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {type.description}
                </p>
              </AppLink>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-14 md:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Featured" title="Start with these resources" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {featuredResources.map((resource) => (
              <AppLink
                key={resource.url}
                href={resource.url}
                className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-indigo-brand"
              >
                <p className="text-xs font-bold tracking-[0.16em] text-indigo-brand uppercase">
                  {resource.type}
                </p>
                <h2 className="mt-2 text-base font-bold text-indigo-brand">{resource.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {resource.excerpt}
                </p>
              </AppLink>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why TRAIBCERT"
            title="Experience that shows in the audit, the report and the price"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <article key={reason.title} className="rounded-xl border border-border bg-card p-6">
                <h2 className="text-base font-bold text-indigo-brand">{reason.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-14 md:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Service topics" title="Browse by what TRAIBCERT does for you" />
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Eleven categories, forty-six topics. Every topic is a service TRAIBCERT delivers; each
            hub explains what we certify, assess or verify, and links to the service page and the
            quotation form.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resourceCategories.map((category) => {
              const topics = [
                ...new Set(resourcesForCategory(category).flatMap((resource) => resource.topics)),
              ];
              return (
                <article key={category} className="rounded-xl border border-border bg-card p-6">
                  <AppLink
                    href={`/resources/categories/${resourceSlug(category)}`}
                    className="text-base font-bold text-indigo-brand hover:underline"
                  >
                    {category}
                  </AppLink>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {topics.length
                      ? `${topics.length} published ${topics.length === 1 ? "topic" : "topics"}`
                      : "Browse this service category"}
                  </p>
                  {topics.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {topics.map((topic) => (
                        <AppLink
                          key={topic}
                          href={`/resources/topics/${resourceSlug(topic)}`}
                          className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-indigo-brand hover:bg-indigo-brand/10"
                        >
                          {topic}
                        </AppLink>
                      ))}
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Monthly digest" title="Keep up with new resources" />
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            New guides, checklists and standards updates, once a month.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            To ask about resource updates,{" "}
            <AppLink href="/contact" className="font-semibold text-indigo-brand hover:underline">
              contact our team
            </AppLink>
            .
          </p>
        </div>
      </section>
    </>
  );
}
