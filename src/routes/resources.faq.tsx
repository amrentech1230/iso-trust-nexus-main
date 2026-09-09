import { createFileRoute } from "@/lib/router-compat";
import { CTASection } from "@/components/site/CTASection";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { generalFaqs } from "@/data/insights";
import { breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Resources", href: "/resources/blog" },
  { name: "FAQ", href: "/resources/faq" },
];

export const Route = createFileRoute("/resources/faq")({
  head: () => {
    const meta = pageMeta({
      title: "Frequently Asked Questions | TRAIBCERT",
      description:
        "Answers to common questions about ISO certification, audit stages, timescales, accreditation, transfers and training.",
      path: "/resources/faq",
    });
    return {
      ...meta,
      scripts: [breadcrumbJsonLd([{ name: "Home", href: "/" }, ...crumbs]), faqJsonLd(generalFaqs)],
    };
  },
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Frequently asked questions"
        intro="The questions we are asked most often about certification, audits and training."
        crumbs={crumbs}
      />
      <section className="py-14 md:py-16">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="FAQs" title="Certification and training questions" />
          <div className="mt-6">
            <FAQAccordion faqs={generalFaqs} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
