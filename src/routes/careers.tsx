import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { CareerApplicationForm } from "@/components/forms/CareerApplicationForm";
import { PageHero } from "@/components/site/PageHero";
import { site } from "@/config/site";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

const crumbs = [{ name: "Careers", href: "/careers" }];

export const Route = createFileRoute("/careers")({
  head: () => {
    const meta = pageMeta({
      title: "Careers at TRAIBCERT | Auditors, Trainers & Reviewers",
      description:
        "Work with TRAIBCERT as a lead auditor, technical reviewer, trainer or client services specialist. Register your interest with our team.",
      path: "/careers",
    });
    return { ...meta, scripts: [breadcrumbJsonLd([{ name: "Home", href: "/" }, ...crumbs])] };
  },
  component: CareersPage,
});

function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Grow your career with TRAIBCERT"
        intro="Join an international team helping organisations turn standards and best practice into lasting business excellence."
        crumbs={crumbs}
      />
      <section className="py-12 md:py-16">
        <div className="container-page">
          <div className="max-w-5xl">
            <div className="border-b border-border pb-8">
              <h2 className="text-2xl font-extrabold text-indigo-brand">Career opportunities</h2>
              <span className="mt-3 block h-1 w-14 bg-honey" aria-hidden="true" />
              <p className="mt-6 text-base leading-7 text-muted-foreground">
                At TRAIBCERT, we believe our strength relies on the skill, judgement and talent of
                our people. Great teams bring together innovative thinking, practical experience and
                the commitment needed to deliver service excellence in every business avenue.
              </p>
              <p className="mt-4 font-bold text-foreground">
                We welcome qualified experts around the globe to join us and explore opportunities
                that meet customer demands.
              </p>
              <a
                href={`mailto:${site.emails.careers}`}
                className="mt-6 inline-flex items-center gap-3 text-base font-bold text-indigo-brand hover:underline"
              >
                <span className="grid size-11 place-items-center border border-honey bg-honey-soft text-honey-text">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                {site.emails.careers}
              </a>
            </div>
            <div className="mt-8">
              <CareerApplicationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}