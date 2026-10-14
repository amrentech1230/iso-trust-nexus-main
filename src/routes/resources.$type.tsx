import { createFileRoute, notFound } from "@tanstack/react-router";
import { PublishedResourceCard } from "@/components/site/PublishedResourceCard";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { publishedResources, resourceTypePaths } from "@/data/published-resources";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

const typeByPath = Object.fromEntries(
  Object.entries(resourceTypePaths).map(([type, path]) => [path.split("/").at(-1), type]),
);

export const Route = createFileRoute("/resources/$type")({
  loader: ({ params }) => {
    const type = typeByPath[params.type] as string | undefined;
    if (!type) throw notFound();
    return {
      type,
      items: publishedResources.filter((resource) => resource.type === type),
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Unavailable | TRAIBCERT" }, { name: "robots", content: "noindex" }],
      };
    }
    const path = resourceTypePaths[loaderData.type];
    const meta = pageMeta({
      title: `${loaderData.type} | TRAIBCERT Resource Centre`,
      description: `Browse TRAIBCERT ${loaderData.type.toLowerCase()} written by auditors and technical specialists.`,
      path,
    });
    return {
      ...meta,
      scripts: [
        breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Resources", href: "/resources" },
          { name: loaderData.type, href: path },
        ]),
      ],
    };
  },
  component: ResourceTypePage,
});

function ResourceTypePage() {
  const { type, items } = Route.useLoaderData();
  return (
    <>
      <PageHero
        eyebrow="TRAIBCERT resource centre"
        title={type}
        intro={`Browse ${type.toLowerCase()} from TRAIBCERT auditors and technical specialists.`}
        crumbs={[
          { name: "Resources", href: "/resources" },
          { name: type, href: resourceTypePaths[type] },
        ]}
        showEnquiryForm={false}
        fullWidthContent
      />
      <section className="py-12 md:py-16">
        <div className="container-page">
          <SectionHeading eyebrow={type} title={`Published ${type.toLowerCase()}`} />
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
