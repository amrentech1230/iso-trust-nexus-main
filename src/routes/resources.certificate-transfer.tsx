import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Resources", href: "/resources/blog" },
  { name: "Certificate Transfer", href: "/resources/certificate-transfer" },
];

const steps = [
  "Send us your current certificate and the latest audit reports.",
  "We review the scope, accreditation status and any open findings.",
  "We confirm the transfer plan and the remaining certification cycle.",
  "Your certificate is reissued and surveillance continues on schedule.",
];

export const Route = createFileRoute("/resources/certificate-transfer")({
  head: () => {
    const meta = pageMeta({
      title: "Transfer Your ISO Certificate | TRAIBCERT",
      description:
        "Move your existing accredited ISO certification to TRAIBCERT without restarting your certification cycle. See how transfer works and what we need.",
      path: "/resources/certificate-transfer",
    });
    return { ...meta, scripts: [breadcrumbJsonLd([{ name: "Home", href: "/" }, ...crumbs])] };
  },
  component: CertificateTransferPage,
});

function CertificateTransferPage() {
  return (
    <>
      <PageHero
        eyebrow="Client services"
        title="Transfer your certificate to TRAIBCERT"
        intro="If you hold a valid accredited certificate, you can transfer it to us and keep your existing certification cycle intact."
        crumbs={crumbs}
      />
      <section className="py-14 md:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Process" title="How transfer works" />
            <ol className="mt-6 space-y-3">
              {steps.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-indigo-brand text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <h3 className="mt-9 text-base font-bold">What you keep</h3>
            <ul className="mt-4 space-y-2">
              {[
                "Your existing certification expiry date",
                "Your accredited status, subject to review",
                "Your current audit programme and scope",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-indigo-brand" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Start a transfer" title="Send us your details" />
            <div className="mt-6">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
