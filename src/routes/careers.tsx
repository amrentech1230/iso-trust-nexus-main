import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { AppLink } from "@/components/AppLink";
import { CareerApplicationForm } from "@/components/forms/CareerApplicationForm";
import { PageHero } from "@/components/site/PageHero";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

const crumbs = [{ name: "Careers", href: "/careers" }];

export const Route = createFileRoute("/careers")({
  head: () => {
    const meta = pageMeta({
      title: "Careers | Auditors, Assessors & Inspectors | TRAIBCERT",
      description:
        "Join TRAIBCERT as an auditor, assessor, inspector or tutor. Centred in the UK, working across the world. In-house and contract roles.",
      path: "/careers",
    });
    return { ...meta, scripts: [breadcrumbJsonLd([{ name: "Home", href: "/" }, ...crumbs])] };
  },
  component: CareersPage,
});

const roles = [
  {
    title: "Lead Auditor, management systems",
    based: "UK · Middle East · India",
    pattern: "In-house or contract",
    needs:
      "Registered lead auditor in two or more of ISO 9001, 14001, 45001, 27001, 22000 or 22301; five years in industry; current on the 2026 editions or willing to be witnessed.",
  },
  {
    title: "Auditor, management systems",
    based: "UK · Middle East · India",
    pattern: "In-house or contract",
    needs:
      "Qualified in one standard, with a strong sector background and working towards lead auditor.",
  },
  {
    title: "Cyber Essentials assessor",
    based: "UK, remote",
    pattern: "Contract",
    needs:
      "Licensed or eligible for the scheme; Windows, macOS, mobile and cloud administration; precise written findings.",
  },
  {
    title: "Penetration tester",
    based: "UK or remote",
    pattern: "Contract",
    needs: "Recognised practitioner certification and a web, network, cloud or mobile specialism.",
  },
  {
    title: "Privacy and cloud assessor",
    based: "Remote",
    pattern: "Contract",
    needs:
      "GDPR, HIPAA, DPDP, PDPL or CCPA assessment, or SOC 2 and cloud configuration experience.",
  },
  {
    title: "GHG and ESG verifier",
    based: "UK or remote",
    pattern: "In-house or contract",
    needs: "Verification to ISO 14064-3 or an assurance standard; Scope 3 and ESG frameworks.",
  },
  {
    title: "Third-party inspector",
    based: "UK · Middle East · India · supplier sites",
    pattern: "Contract",
    needs: "Product, welding, NDT, automotive or vendor inspection experience; same-day reporting.",
  },
  {
    title: "Technical reviewer",
    based: "UK, remote",
    pattern: "In-house",
    needs:
      "Senior auditor who reviews files they did not audit and can return a report for action.",
  },
  {
    title: "Academy tutor",
    based: "Remote and onsite",
    pattern: "Contract",
    needs: "Practising lead auditor who can teach from Foundation to Lead Auditor level.",
  },
  {
    title: "Client services and scheduling",
    based: "Ashford, hybrid",
    pattern: "In-house",
    needs: "Organised and numerate; certification or training body experience preferred.",
  },
];

const reasons = [
  [
    "Sector-matched work",
    "You audit what you understand; competence, not availability, decides who goes where.",
  ],
  [
    "Current editions",
    "We train and witness auditors on ISO 9001:2026 and ISO 14001:2026 before they audit them.",
  ],
  [
    "Centred in the UK, worldwide",
    "On-site, remote or blended; travel is planned around you and paid at cost.",
  ],
  ["Wide scope", "Twenty ISO standards, cyber, privacy, ESG and inspection under one roof."],
  [
    "Impartiality that protects you",
    "Decisions are taken by reviewers who took no part in the audit; findings stand on evidence.",
  ],
  [
    "In-house or contract",
    "Join the core team or work with us as an approved contract auditor on a day rate.",
  ],
];

function CareersPage() {
  const [selectedRole, setSelectedRole] = useState("");

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Audit the systems organisations are judged by"
        intro="TRAIBCERT is an accredited, independent certification body centred in the UK and serving organisations across the world. If you know a standard, a sector and how to find out what is really happening, we would like to hear from you."
        crumbs={crumbs}
      >
        <div className="flex flex-wrap gap-3">
          <AppLink
            href="#roles"
            className="inline-flex items-center gap-2 rounded-md bg-honey px-5 py-3 text-sm font-bold text-indigo-brand"
          >
            See roles <ArrowRight className="size-4" aria-hidden="true" />
          </AppLink>
          <AppLink
            href="#apply"
            className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-bold text-white"
          >
            Send your profile <ArrowRight className="size-4" aria-hidden="true" />
          </AppLink>
        </div>
      </PageHero>
      <section className="bg-muted/40 py-12 md:py-16">
        <div className="container-page">
          <h2 className="text-2xl font-extrabold text-indigo-brand">Why TRAIBCERT</h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map(([title, description]) => (
              <article key={title} className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-base font-bold text-indigo-brand">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="roles" className="scroll-mt-24 py-12 md:py-16">
        <div className="container-page">
          <h2 className="text-2xl font-extrabold text-indigo-brand">Roles</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Opportunities are open on a rolling basis. Select a role to start your application.
          </p>
          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {roles.map((role) => (
              <article
                key={role.title}
                className="flex flex-col rounded-xl border border-border bg-card p-5"
              >
                <h3 className="text-base font-bold text-indigo-brand">{role.title}</h3>
                <p className="mt-2 text-xs font-semibold text-honey-text">{role.based}</p>
                <p className="mt-1 text-xs text-muted-foreground">{role.pattern}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {role.needs}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedRole(role.title);
                    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-indigo-brand hover:underline"
                >
                  Apply <ArrowRight className="size-4" aria-hidden="true" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-muted/40 py-12 md:py-16">
        <div className="container-page">
          <h2 className="text-2xl font-extrabold text-indigo-brand">How it works</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Send your profile",
              "Competence review against the scheme rules",
              "Interview",
              "Approval, code of conduct and confidentiality agreement",
              "Witnessed first audit",
              "Assignments",
            ].map((step, index) => (
              <li key={step} className="rounded-lg border border-border bg-card p-5">
                <span className="text-sm font-bold text-honey-text">0{index + 1}</span>
                <p className="mt-2 text-sm font-semibold text-indigo-brand">{step}</p>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm text-muted-foreground">
            We reply within five working days and charge no fees at any stage.
          </p>
        </div>
      </section>
      <section id="apply" className="scroll-mt-24 py-12 md:py-16">
        <div className="container-page max-w-5xl">
          <h2 className="text-2xl font-extrabold text-indigo-brand">
            Tell us where your expertise lies
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            If you audit, assess, inspect or teach to the standards above, send us your profile.
          </p>
          <div className="mt-7">
            <CareerApplicationForm key={selectedRole} selectedRole={selectedRole} />
          </div>
        </div>
      </section>
    </>
  );
}
