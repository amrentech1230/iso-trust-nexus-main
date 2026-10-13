import { createFileRoute, notFound } from "@tanstack/react-router";
import { InspectionServicePage } from "@/components/site/InspectionServicePage";
import { inspectionServicesBySlug } from "@/data/inspection-services";
import { breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/certification/inspection/$slug")({
  loader: ({ params }) => {
    const service = inspectionServicesBySlug[params.slug];
    if (!service || service.slug === "what-is-pre-shipment-inspection") throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Unavailable | TRAIBCERT" }, { name: "robots", content: "noindex" }],
      };
    }
    const { service } = loaderData;
    const meta = pageMeta({
      title: service.seoTitle,
      description: service.metaDescription,
      path: service.path,
      type: "article",
    });
    return {
      ...meta,
      scripts: [
        breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Certification", href: "/certification" },
          { name: "Inspection", href: "/certification/inspection" },
          { name: service.title, href: service.path },
        ]),
        faqJsonLd(service.faqs),
      ],
    };
  },
  component: InspectionServiceRoute,
});

function InspectionServiceRoute() {
  const { service } = Route.useLoaderData();
  return <InspectionServicePage service={service} />;
}
