import { createFileRoute, redirect } from "@/lib/router-compat";
import { AppLink } from "@/components/AppLink";
import { resolveRedirect } from "@/config/redirects";

export const Route = createFileRoute("/$")({
  beforeLoad: ({ location }) => {
    const target = resolveRedirect(location.pathname);
    if (target) {
      throw redirect({ href: target, statusCode: 301 });
    }
  },
  head: () => ({
    meta: [{ title: "Page not found | TRAIBCERT" }, { name: "robots", content: "noindex" }],
  }),
  component: NotFoundPage,
});

function NotFoundPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page max-w-xl text-center">
        <p className="text-xs font-bold tracking-[0.16em] text-indigo-brand uppercase">Error 404</p>
        <h1 className="mt-3 text-3xl font-extrabold md:text-4xl">We could not find that page</h1>
        <p className="mt-4 text-base text-muted-foreground">
          The page may have moved. Try the certification or training sections, or search the
          sitemap.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <AppLink
            href="/"
            className="inline-flex items-center rounded-md bg-indigo-brand px-5 py-3 text-sm font-bold text-white"
          >
            Back to home
          </AppLink>
          <AppLink
            href="/resources/sitemap"
            className="inline-flex items-center rounded-md border px-5 py-3 text-sm font-bold"
          >
            View sitemap
          </AppLink>
        </div>
      </div>
    </section>
  );
}
