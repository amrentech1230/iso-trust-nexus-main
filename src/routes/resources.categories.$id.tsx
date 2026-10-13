import { createFileRoute, notFound } from "@tanstack/react-router";
import { PublishedResourceCard } from "@/components/site/PublishedResourceCard";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { resourceCategories, resourcesForCategory, resourceSlug } from "@/data/published-resources";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

const cyberIntro =
  "Information security is now a condition of doing business rather than an IT matter, and the evidence customers ask for comes in layers: Cyber Essentials, the UK scheme of five technical controls, for UK public-sector and insurer requirements; ISO/IEC 27001, the international management system standard, for enterprise and regulated buyers everywhere; and penetration testing to prove that the controls hold against an attacker. This category explains each, compares them, and helps you choose the sequence that fits the contracts you are pursuing.";

const cyberServices = [
  { label: "ISO/IEC 27001", href: "/certification/iso-27001" },
  { label: "Cyber Essentials (UK)", href: "/certification/cyber-essentials" },
  { label: "Penetration testing", href: "/certification/penetration-testing" },
];

export const Route = createFileRoute("/resources/categories/$id")({
  loader: ({ params }) => {
    const category = resourceCategories.find((name) => resourceSlug(name) === params.id);
    if (!category) throw notFound();
    return { category, items: resourcesForCategory(category) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Unavailable | TRAIBCERT" }, { name: "robots", content: "noindex" }],
      };
    }
    const path = `/resources/categories/${resourceSlug(loaderData.category)}`;
    const meta = pageMeta({
      title: `${loaderData.category} | TRAIBCERT Resources`,
      description:
        loaderData.category === "Information security and cyber"
          ? cyberIntro.slice(0, 155)
          : `Resources and services in ${loaderData.category} from TRAIBCERT.`,
      path,
    });
    return {
      ...meta,
      scripts: [
        breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Resources", href: "/resources" },
          { name: loaderData.category, href: path },
        ]),
      ],
    };
  },
  component: ResourceCategoryPage,
});

function ResourceCategoryPage() {
  const { category, items } = Route.useLoaderData();
  return (
    <>
      <PageHero
        eyebrow="Resource category"
        title={category}
        intro={category === "Information security and cyber" ? cyberIntro : undefined}
        crumbs={[
          { name: "Resources", href: "/resources" },
          { name: category, href: `/resources/categories/${resourceSlug(category)}` },
        ]}
        showEnquiryForm={false}
      />
      <section className="py-12 md:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Resources" title={`Resources in ${category}`} />
          {category === "Information security and cyber" ? (
            <div className="mt-6 rounded-xl border border-border bg-card p-6">
              <h2 className="font-bold text-indigo-brand">TRAIBCERT services in this category</h2>
              <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                {cyberServices.map((service) => (
                  <li key={service.href}>
                    <AppLink
                      href={service.href}
                      className="font-semibold text-indigo-brand hover:underline"
                    >
                      {service.label} →
                    </AppLink>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {items.length ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((resource) => (
                <PublishedResourceCard key={resource.url} resource={resource} />
              ))}
            </div>
          ) : (
            <p className="mt-5 text-muted-foreground">
              No finished resources in this category are available yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
