import { createFileRoute } from "@tanstack/react-router";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Contact", href: "/contact" },
  { name: "Enquiry", href: "/contact/enquiry" },
];

const process = [
  "We review your scope, sites, headcount and the standards you need.",
  "A specialist confirms the audit days and stages required.",
  "You receive a written proposal with the full certification cycle costed.",
  "Once approved, we agree audit dates and confirm your lead auditor.",
];

export const Route = createFileRoute("/contact/enquiry")({
  head: () => {
    const meta = pageMeta({
      title: "Request a Certification Quote | TRAIBCERT",
      description:
        "Tell us your scope, sites and standards and receive a written proposal covering your full certification or training requirement.",
      path: "/contact/enquiry",
    });
    return { ...meta, scripts: [breadcrumbJsonLd([{ name: "Home", href: "/" }, ...crumbs])] };
  },
  component: EnquiryPage,
});

function EnquiryPage() {
  return (
    <>
      <PageHero
        eyebrow="Get a quote"
        title="Request a proposal"
        intro="Share a few details about your organisation and requirements. There is no obligation and no cost for a proposal."
        crumbs={crumbs}
      />
      <section className="py-14 md:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="What happens next" title="Our quoting process" />
            <ol className="mt-6 space-y-4">
              {process.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-indigo-brand text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <SectionHeading eyebrow="Enquiry form" title="Tell us your requirement" />
            <div className="mt-6">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
