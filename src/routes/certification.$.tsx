import { createFileRoute, notFound } from "@tanstack/react-router";
import { CertificationCopyPage } from "@/components/site/CertificationCopyPage";
import { certificationCopyFaqs, certificationCopyPagesBySlug } from "@/data/certification-copy";
import { breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/certification/$")({
  loader: ({ params }) => {
    const copyPage = certificationCopyPagesBySlug[params._splat ?? ""];
    if (!copyPage) throw notFound();
    return { copyPage };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Unavailable | TRAIBCERT" }, { name: "robots", content: "noindex" }],
      };
    }
    const { copyPage } = loaderData;
    const meta = pageMeta({
      title: copyPage.seoTitle,
      description: copyPage.metaDescription,
      path: copyPage.url,
      type: "article",
    });
    return {
      ...meta,
      scripts: [
        breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Certification", href: "/certification" },
          { name: copyPage.title, href: copyPage.url },
        ]),
        faqJsonLd(certificationCopyFaqs(copyPage)),
      ],
    };
  },
  component: CertificationCopyRoutePage,
});

function CertificationCopyRoutePage() {
  const { copyPage } = Route.useLoaderData();
  return <CertificationCopyPage page={copyPage} />;
}
