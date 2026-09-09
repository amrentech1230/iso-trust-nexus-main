import { createFileRoute, notFound } from "@tanstack/react-router";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { downloads } from "@/data/insights";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/resources/downloads/$slug")({
  loader: ({ params }) => {
    const item = downloads.find((d) => d.slug === params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Unavailable | TRAIBCERT" }, { name: "robots", content: "noindex" }],
      };
    }
    const { item } = loaderData;
    const path = `/resources/downloads/${params.slug}`;
    const meta = pageMeta({
      title: `${item.title} | TRAIBCERT`,
      description: item.summary.slice(0, 155),
      path,
      type: "article",
    });
    return {
      ...meta,
      scripts: [
        breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Downloads", href: "/resources/downloads" },
          { name: item.title, href: path },
        ]),
      ],
    };
  },
  component: DownloadPage,
});

function DownloadPage() {
  const { item } = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow={item.type}
        title={item.title}
        intro={item.summary}
        crumbs={[
          { name: "Downloads", href: "/resources/downloads" },
          { name: item.title, href: `/resources/downloads/${item.slug}` },
        ]}
      />
      <section className="py-14 md:py-16">
        <div className="container-page max-w-2xl">
          <SectionHeading
            eyebrow="Request access"
            title="Tell us where to send it"
            intro="Complete the short form and our team will email you the document."
          />
          <div className="mt-8">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
