import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { site, telHref } from "@/config/site";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

const crumbs = [{ name: "Contact", href: "/contact" }];

export const Route = createFileRoute("/contact/")({
  head: () => {
    const meta = pageMeta({
      title: "Contact TRAIBCERT | ISO Certification & Training",
      description:
        "Contact TRAIBCERT by phone or email, or send an enquiry about ISO certification, Cyber Essentials, training or inspection services.",
      path: "/contact",
    });
    return { ...meta, scripts: [breadcrumbJsonLd([{ name: "Home", href: "/" }, ...crumbs])] };
  },
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to our certification team"
        intro="Tell us what you need certified, trained or inspected and we will point you to the right specialist."
        crumbs={crumbs}
      />
      <section className="py-14 md:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="Details" title="How to reach us" />
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-indigo-brand" aria-hidden="true" />
                <div>
                  <p className="font-bold">Phone</p>
                  <p className="text-muted-foreground">
                    <a className="underline" href={telHref(site.phones.uk)}>
                      {site.phones.uk}
                    </a>{" "}
                    (United Kingdom)
                  </p>
                  <p className="text-muted-foreground">
                    <a className="underline" href={telHref(site.phones.uae)}>
                      {site.phones.uae}
                    </a>{" "}
                    (United Arab Emirates)
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-indigo-brand" aria-hidden="true" />
                <div>
                  <p className="font-bold">Email</p>
                  <a
                    className="text-muted-foreground underline"
                    href={`mailto:${site.emails.info}`}
                  >
                    {site.emails.info}
                  </a>
                  <br />
                  <a
                    className="text-muted-foreground underline"
                    href={`mailto:${site.emails.training}`}
                  >
                    {site.emails.training}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-indigo-brand" aria-hidden="true" />
                <div>
                  <p className="font-bold">Registered office</p>
                  <address className="text-muted-foreground not-italic">
                    {site.address.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Enquiry" title="Send us a message" />
            <div className="mt-6">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
