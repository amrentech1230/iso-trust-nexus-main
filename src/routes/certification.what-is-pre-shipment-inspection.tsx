import { createFileRoute } from "@tanstack/react-router";
import { InspectionServicePage } from "@/components/site/InspectionServicePage";
import { preShipmentInspection } from "@/data/inspection-services";
import { breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/certification/what-is-pre-shipment-inspection")({
  head: () => {
    const meta = pageMeta({
      title: preShipmentInspection.seoTitle,
      description: preShipmentInspection.metaDescription,
      path: preShipmentInspection.path,
      type: "article",
    });
    return {
      ...meta,
      scripts: [
        breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Certification", href: "/certification" },
          { name: "Inspection", href: "/certification/inspection" },
          { name: preShipmentInspection.title, href: preShipmentInspection.path },
        ]),
        faqJsonLd(preShipmentInspection.faqs),
      ],
    };
  },
  component: () => <InspectionServicePage service={preShipmentInspection} />,
});
