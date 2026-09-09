import { createFileRoute } from "@/lib/router-compat";
import { BlogCard } from "@/components/site/Cards";
import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { posts } from "@/data/insights";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Resources", href: "/resources/blog" },
  { name: "Blog", href: "/resources/blog" },
];

export const Route = createFileRoute("/resources/blog/")({
  head: () => {
    const meta = pageMeta({
      title: "ISO & Compliance Blog | TRAIBCERT",
      description:
        "Articles on ISO certification, auditing, cyber security, sustainability and compliance from the TRAIBCERT technical team.",
      path: "/resources/blog",
    });
    return { ...meta, scripts: [breadcrumbJsonLd([{ name: "Home", href: "/" }, ...crumbs])] };
  },
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Insights on certification, auditing and compliance"
        intro="Practical articles written by our auditors and technical specialists."
        crumbs={crumbs}
      />
      <section className="py-14 md:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Latest" title="All articles" />
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
