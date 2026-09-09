import { createFileRoute, notFound } from "@/lib/router-compat";
import { AppLink } from "@/components/AppLink";
import { PageHero } from "@/components/site/PageHero";
import { legalBySlug, legalPages } from "@/data/legal";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/legal/$slug")({
  loader: ({ params }) => {
    const page = legalBySlug[params.slug];
    if (!page) throw notFound();
    return { page };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Unavailable | TRAIBCERT" }, { name: "robots", content: "noindex" }],
      };
    }
    const { page } = loaderData;
    const path = `/legal/${params.slug}`;
    const meta = pageMeta({
      title: `${page.title} | TRAIBCERT`,
      description: page.description.slice(0, 155),
      path,
    });
    return {
      ...meta,
      scripts: [
        breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: page.title, href: path },
        ]),
      ],
    };
  },
  component: LegalPageRoute,
});

function LegalPageRoute() {
  const { page } = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow="Policies"
        title={page.title}
        intro={page.intro}
        crumbs={[{ name: page.title, href: `/legal/${page.slug}` }]}
      />
      <section className="py-14 md:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_3fr]">
          <nav aria-label="Policies" className="text-sm">
            <p className="text-xs font-bold tracking-[0.14em] uppercase">All policies</p>
            <ul className="mt-4 space-y-2">
              {legalPages.map((p) => (
                <li key={p.slug}>
                  <AppLink
                    href={`/legal/${p.slug}`}
                    className={
                      p.slug === page.slug
                        ? "font-bold text-indigo-brand"
                        : "text-muted-foreground hover:text-foreground"
                    }
                  >
                    {p.title}
                  </AppLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="max-w-3xl space-y-8">
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-lg font-bold">{section.heading}</h2>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
