import { createFileRoute, notFound } from "@tanstack/react-router";
import { BlogCard } from "@/components/site/Cards";
import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { posts, postsBySlug } from "@/data/insights";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/resources/blog/$slug")({
  loader: ({ params }) => {
    const post = postsBySlug[params.slug];
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Unavailable | TRAIBCERT" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    const path = `/resources/blog/${params.slug}`;
    const meta = pageMeta({
      title: `${post.title} | TRAIBCERT`,
      description: post.excerpt.slice(0, 155),
      path,
      type: "article",
    });
    return {
      ...meta,
      scripts: [
        breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Blog", href: "/resources/blog" },
          { name: post.title, href: path },
        ]),
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        intro={post.excerpt}
        crumbs={[
          { name: "Blog", href: "/resources/blog" },
          { name: post.title, href: `/resources/blog/${post.slug}` },
        ]}
      >
        <p className="text-sm text-white/80">
          {post.author} · {post.date} · {post.readingTime}
        </p>
      </PageHero>

      <section className="py-14 md:py-16">
        <div className="container-page max-w-3xl">
          <div className="space-y-5 text-base leading-relaxed">
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-14 md:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="More reading" title="Related articles" />
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
