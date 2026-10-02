import { createFileRoute } from "@tanstack/react-router";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

const crumbs = [{ name: "Careers", href: "/careers" }];

const areas = [
  {
    title: "Lead auditors",
    summary:
      "Experienced auditors across quality, environment, safety, information security and food safety schemes.",
  },
  {
    title: "Technical reviewers",
    summary:
      "Specialists who review audit files and certification decisions independently of the audit team.",
  },
  {
    title: "Trainers",
    summary:
      "Tutors delivering Foundation to Lead Auditor courses in the classroom and live online.",
  },
  {
    title: "Client services",
    summary: "Scheduling, scoping and account support for certified clients across our regions.",
  },
];

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
        title="Build your career in certification"
        intro="We work with auditors, technical reviewers and trainers across the UK, UAE and internationally. Register your interest and we will be in touch when a suitable opportunity arises."
        crumbs={crumbs}
      />
      <section className="py-14 md:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Areas" title="Where we recruit" />
          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {areas.map((area) => (
              <article key={area.title} className="rounded-lg border bg-card p-6">
                <h2 className="text-base font-bold">{area.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-muted/40 py-14 md:py-16">
        <div className="container-page max-w-2xl">
          <SectionHeading
            eyebrow="Register interest"
            title="Tell us about your experience"
            intro="Include the schemes you are qualified in and the regions you can cover."
          />
          <div className="mt-8">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
