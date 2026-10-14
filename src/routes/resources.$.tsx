import { createFileRoute, notFound } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { PublishedResourceCard } from "@/components/site/PublishedResourceCard";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  publishedResources,
  publishedResourcesByUrl,
  resourceSlug,
  resourceTypePaths,
  type PublishedResource,
} from "@/data/published-resources";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/resources/$")({
  loader: ({ params }) => {
    const resource = publishedResourcesByUrl[`/resources/${params._splat ?? ""}`];
    if (!resource) throw notFound();
    return { resource };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Unavailable | TRAIBCERT" }, { name: "robots", content: "noindex" }],
      };
    }
    const { resource } = loaderData;
    const meta = pageMeta({
      title: `${resource.title} | TRAIBCERT`,
      description: resource.excerpt.slice(0, 155),
      path: resource.url,
      type: "article",
    });
    return {
      ...meta,
      scripts: [
        breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Resources", href: "/resources" },
          { name: resource.type, href: resourceTypePaths[resource.type] ?? "/resources" },
          { name: resource.title, href: resource.url },
        ]),
      ],
    };
  },
  component: PublishedResourcePage,
});

function PublishedResourcePage() {
  const { resource } = Route.useLoaderData();
  const related = [
    ...publishedResources.filter(
      (candidate) =>
        candidate.url !== resource.url &&
        candidate.topics.some((topic) => resource.topics.includes(topic)),
    ),
    ...publishedResources.filter(
      (candidate) =>
        candidate.url !== resource.url &&
        !candidate.topics.some((topic) => resource.topics.includes(topic)),
    ),
  ].slice(0, 3);
  const content = resource.body.map((text, index) => ({
    text,
    heading: text.length <= 120 && (resource.body[index + 1]?.length ?? 0) > 120,
  }));
  const headings = content.filter((block) => block.heading);
  const supportLink = firstButton(resource.supportButtons, resource.servicePage);
  const serviceLink = firstButton(resource.serviceCardButtons, resource.servicePage);

  return (
    <>
      <PageHero
        eyebrow={resource.type}
        title={resource.title}
        intro={resource.excerpt}
        crumbs={[
          { name: "Resources", href: "/resources" },
          { name: resource.type, href: resourceTypePaths[resource.type] ?? "/resources" },
          { name: resource.title, href: resource.url },
        ]}
        showEnquiryForm={false}
        fullWidthContent
      >
        <p className="text-sm text-white/80">{resource.byline}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {resource.topics.map((topic) => (
            <AppLink
              key={topic}
              href={`/resources/topics/${resourceSlug(topic)}`}
              className="rounded-full border border-white/30 px-3 py-1 text-sm text-white hover:bg-white/10"
            >
              {topic}
            </AppLink>
          ))}
        </div>
      </PageHero>

      <section className="py-12 md:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,1fr)_16rem]">
          <article className="min-w-0">
            {resource.introduction ? (
              <p className="text-base leading-relaxed text-muted-foreground">
                {resource.introduction}
              </p>
            ) : null}

            <aside className="my-8 rounded-xl border-l-4 border-honey bg-muted/50 p-6">
              <h2 className="text-lg font-bold text-indigo-brand">
                {resource.supportTitle.replace("HOW TRAIBCERT SUPPORTS YOU — ", "")}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {resource.supportCopy}
              </p>
              <AppLink
                href={supportLink.href}
                className="mt-5 inline-flex rounded-md bg-honey px-5 py-3 text-sm font-bold text-indigo-brand hover:bg-honey-hover"
              >
                {supportLink.label}
              </AppLink>
            </aside>

            <div className="space-y-5">
              {content.map((block, index) =>
                block.heading ? (
                  <h2
                    key={`${index}-${block.text}`}
                    id={resourceSlug(block.text)}
                    className="pt-5 text-2xl font-bold text-indigo-brand"
                  >
                    {block.text}
                  </h2>
                ) : (
                  <p
                    key={`${index}-${block.text.slice(0, 24)}`}
                    className="text-base leading-relaxed text-muted-foreground"
                  >
                    {block.text}
                  </p>
                ),
              )}
            </div>

            <section className="mt-12 rounded-xl bg-indigo-brand p-7 text-white">
              <h2 className="text-xl font-bold text-honey">
                {resource.serviceCardTitle.replace("SERVICE CARD — ", "")}
              </h2>
              <p className="mt-3 leading-relaxed text-white/85">{resource.serviceCardCopy}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <AppLink
                  href={serviceLink.href}
                  className="rounded-md bg-honey px-5 py-3 text-sm font-bold text-indigo-brand hover:bg-honey-hover"
                >
                  {serviceLink.label}
                </AppLink>
                <AppLink
                  href="/resources/certificate-transfer"
                  className="rounded-md border border-white/40 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
                >
                  Transfer an existing certificate
                </AppLink>
              </div>
            </section>
          </article>

          {headings.length > 0 ? (
            <nav aria-label="On this page" className="h-fit lg:sticky lg:top-24">
              <p className="font-bold text-indigo-brand">On this page</p>
              <ul className="mt-3 space-y-2 border-l border-border pl-4 text-sm">
                {headings.map(({ text }) => (
                  <li key={text}>
                    <a
                      href={`#${resourceSlug(text)}`}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>
      </section>

      <section className="bg-muted/40 py-12 md:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Related resources" title="More on these topics" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <PublishedResourceCard key={item.url} resource={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function firstButton(buttons: string, fallback: string) {
  const text = buttons.replace(/^Buttons:\s*/, "").split(" · ")[0] ?? "";
  const match = text.match(/^(.*?)\s*\((\/[^)]+)\)$/);
  const button = match
    ? { label: match[1], href: match[2] }
    : { label: text || "Talk to a specialist", href: fallback };
  return {
    ...button,
    href:
      /quote/i.test(button.label) && button.href.startsWith("/certification/")
        ? `${button.href}#quote`
        : button.href,
  };
}
