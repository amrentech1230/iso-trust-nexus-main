import { createFileRoute, notFound } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { PublishedResourceCard } from "@/components/site/PublishedResourceCard";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { publishedResources, resourceSlug } from "@/data/published-resources";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/resources/topics/$id")({
  loader: ({ params }) => {
    const topic = [...new Set(publishedResources.flatMap((resource) => resource.topics))].find(
      (name) => resourceSlug(name) === params.id,
    );
    if (!topic) throw notFound();
    return {
      topic,
      items: publishedResources.filter((resource) => resource.topics.includes(topic)),
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Unavailable | TRAIBCERT" }, { name: "robots", content: "noindex" }],
      };
    }
    const path = `/resources/topics/${resourceSlug(loaderData.topic)}`;
    const meta = pageMeta({
      title: `${loaderData.topic} resources | TRAIBCERT`,
      description: `Guides, articles and practical resources about ${loaderData.topic} from TRAIBCERT.`,
      path,
    });
    return {
      ...meta,
      scripts: [
        breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Resources", href: "/resources" },
          { name: `${loaderData.topic} resources`, href: path },
        ]),
      ],
    };
  },
  component: ResourceTopicPage,
});

function ResourceTopicPage() {
  const { topic, items } = Route.useLoaderData();
  const service = items[0];
  if (topic === "ISO 9001") {
    return <Iso9001TopicPage items={items} />;
  }
  return (
    <>
      <PageHero
        eyebrow="Resource topic"
        title={`${topic} resources`}
        intro={service?.excerpt}
        crumbs={[
          { name: "Resources", href: "/resources" },
          { name: `${topic} resources`, href: `/resources/topics/${resourceSlug(topic)}` },
        ]}
        showEnquiryForm={false}
        fullWidthContent
      />
      {service ? (
        <section className="py-10">
          <div className="container-page rounded-xl bg-muted/50 p-6 md:p-8">
            <h2 className="text-xl font-bold text-indigo-brand">What TRAIBCERT does for {topic}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{service.supportCopy}</p>
            <AppLink
              href={service.servicePage}
              className="mt-5 inline-flex rounded-md bg-honey px-5 py-3 text-sm font-bold text-indigo-brand hover:bg-honey-hover"
            >
              Read the TRAIBCERT service page
            </AppLink>
          </div>
        </section>
      ) : null}
      <section className="py-12 md:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Topic resources" title={`Resources about ${topic}`} />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((resource) => (
              <PublishedResourceCard key={resource.url} resource={resource} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Iso9001TopicPage({ items }: { items: typeof publishedResources }) {
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
  ];

  return (
    <>
      <PageHero
        eyebrow="Resource topic"
        title="ISO 9001 resources"
        intro="Quality management system"
        crumbs={[
          { name: "Resources", href: "/resources" },
          { name: "ISO 9001 resources", href: "/resources/topics/iso-9001" },
        ]}
        showEnquiryForm={false}
        fullWidthContent
      />
      <section className="py-10">
        <div className="container-page max-w-4xl">
          <h2 className="text-2xl font-bold text-indigo-brand">
            What is ISO 9001, and what TRAIBCERT does
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              ISO 9001 is the international standard for a quality management system: the processes,
              responsibilities and records by which an organisation consistently delivers what its
              customers require and improves how it does so. ISO 9001:2026 was published on 16
              September 2026 and replaces the 2015 edition.
            </p>
            <p>
              It is the most widely held management system certificate in the world and the one most
              often asked for in tenders, supplier approvals and frameworks.
            </p>
            <p>
              TRAIBCERT certifies organisations to ISO 9001, providing a Stage 1 and Stage 2 audit,
              an independent certification decision and a three-year certificate with annual
              surveillance.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <AppLink
              href="/certification/iso-9001#quote"
              className="rounded-md bg-honey px-5 py-3 text-sm font-bold text-indigo-brand hover:bg-honey-hover"
            >
              Get a certification quote
            </AppLink>
            <AppLink
              href="/certification/iso-9001"
              className="rounded-md border border-border px-5 py-3 text-sm font-bold text-indigo-brand hover:bg-muted"
            >
              Read the ISO 9001 service page
            </AppLink>
          </div>
        </div>
      </section>
      <section className="bg-muted/40 py-10">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why TRAIBCERT"
            title="Experience that shows in the audit, the report and the price"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {reasons.map((reason) => (
              <article key={reason.title} className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-bold text-indigo-brand">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Topic resources" title="ISO 9001 resources" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((resource) => (
              <PublishedResourceCard key={resource.url} resource={resource} />
            ))}
          </div>
        </div>
      </section>
      <section className="container-page pb-14">
        <div className="rounded-xl bg-indigo-brand p-7 text-white">
          <h2 className="text-xl font-bold text-honey">Certification with TRAIBCERT: ISO 9001</h2>
          <p className="mt-3 leading-relaxed text-white/85">
            Quality management system. Tell us your sites, headcount and the date you need it by; a
            sector specialist replies within one working day with a fixed quotation for the whole
            cycle.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <AppLink
              href="/certification/iso-9001"
              className="rounded-md bg-honey px-5 py-3 text-sm font-bold text-indigo-brand hover:bg-honey-hover"
            >
              Get a certification quote
            </AppLink>
            <AppLink
              href="/resources/certificate-transfer"
              className="rounded-md border border-white/40 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
            >
              Transfer an existing certificate
            </AppLink>
          </div>
        </div>
      </section>
    </>
  );
}
