import { createFileRoute } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { SectionHeading } from "@/components/site/SectionHeading";
import { pageMeta } from "@/lib/seo";

const steps = [
  {
    title: "Get started",
    description:
      "Send your details; a sector specialist scopes the certification and quotes a fixed price for the whole cycle.",
  },
  { title: "Assessment", description: "Stage 1 reviews your system and readiness." },
  { title: "Certification audit", description: "Stage 2 tests the system in operation." },
  {
    title: "Certification",
    description: "An independent decision issues a three-year certificate.",
  },
  {
    title: "Maintenance",
    description: "Annual surveillance and recertification in year three.",
  },
];

export const Route = createFileRoute("/certification/process")({
  head: () =>
    pageMeta({
      title: "The Certification Process | TRAIBCERT",
      description:
        "Understand the five stages of certification, from initial scoping and assessment through audit, independent decision and annual surveillance.",
      path: "/certification/process",
    }),
  component: CertificationProcessPage,
});

function CertificationProcessPage() {
  return (
    <>
      <section className="bg-indigo-brand py-10 text-white md:py-14">
        <div className="container-page">
          <Breadcrumbs
            tone="dark"
            items={[
              { name: "Certification", href: "/certification" },
              { name: "Certification process", href: "/certification/process" },
            ]}
          />
          <p className="mt-6 text-xs font-bold tracking-[0.16em] text-honey uppercase">
            Certification process
          </p>
          <h1 className="mt-3 text-3xl font-extrabold md:text-4xl">Five stages, no surprises</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85">
            One clear route from scoping to certification and ongoing surveillance, with a fixed
            quotation for the whole cycle before you commit.
          </p>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container-page">
          <SectionHeading title="How certification works" />
          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-xl border border-border bg-card p-5">
                <span className="grid size-8 place-items-center rounded-full bg-indigo-brand text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h2 className="mt-3 text-base font-bold text-indigo-brand">{step.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-muted-foreground">
            Already certified by another body?{" "}
            <AppLink
              href="/resources/certificate-transfer"
              className="font-semibold text-indigo-brand hover:underline"
            >
              Learn about certificate transfer.
            </AppLink>
          </p>
        </div>
      </section>
    </>
  );
}
