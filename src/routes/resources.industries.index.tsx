import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppLink } from "@/components/AppLink";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { IndustryCard } from "@/components/site/Cards";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { industryMatrixTermsBySlug } from "@/data/industry-matrix";
import { industries } from "@/data/industries";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Resources", href: "/resources/blog" },
  { name: "Industries", href: "/resources/industries" },
];

export const Route = createFileRoute("/resources/industries/")({
  head: () => {
    const meta = pageMeta({
      title: "ISO Certification by Industry | Sector Guides | TRAIBCERT",
      description:
        "Which ISO standards, cyber schemes, assessments and training your sector is asked for, and why. Fifteen sector guides from an accredited certification body with a global clientele.",
      path: "/resources/industries",
    });
    return { ...meta, scripts: [breadcrumbJsonLd([{ name: "Home", href: "/" }, ...crumbs])] };
  },
  component: IndustriesIndex,
});

function IndustriesIndex() {
  const [selectedSector, setSelectedSector] = useState("All");
  const [selectedStandard, setSelectedStandard] = useState("All");
  const standards = [...new Set(Object.values(industryMatrixTermsBySlug).flat())].sort();
  const matrixRows = industries
    .filter((industry) => selectedSector === "All" || industry.slug === selectedSector)
    .map((industry) => ({
      industry,
      standards: industryMatrixTermsBySlug[industry.slug] ?? [],
    }))
    .filter(
      ({ standards: sectorStandards }) =>
        selectedStandard === "All" || sectorStandards.includes(selectedStandard),
    );

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Certification by industry"
        intro="Every sector is asked to prove something different. A contractor must show it controls safety on site; a software company that it protects customer data; a food manufacturer that hazards are under control; a supplier to government that it meets the cyber and carbon conditions written into public contracts. The standards are international, but the reasons for holding them are local to your industry. Choose your sector below for a plain account of what customers, regulators and insurers in your field require, which certifications and assessments answer those requirements, the training that builds your team's capability, and how organisations like yours usually sequence the work."
        crumbs={crumbs}
      >
        <div className="flex flex-wrap gap-3">
          <AppLink
            href="#sectors"
            className="inline-flex items-center gap-2 rounded-md bg-honey px-5 py-3 text-sm font-bold text-indigo-brand transition-colors hover:bg-honey-hover"
          >
            Find your sector
          </AppLink>
          <AppLink
            href="#not-listed"
            className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            Not listed? Tell us your scope
          </AppLink>
        </div>
      </PageHero>
      <section id="sectors" className="scroll-mt-20 py-14 md:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Sectors" title="Industries we work with" />
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <IndustryCard key={industry.slug} industry={industry} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-muted/40 py-14 md:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Compare sectors"
            title="Standards by industry"
            intro="Compare the standards, schemes and training typically relevant to each sector. Country-specific schemes are labelled."
          />
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1.5 text-sm font-semibold text-indigo-brand">
              <span>Sector</span>
              <select
                aria-label="Filter sectors"
                className="rounded-md border border-border bg-card px-3 py-2.5 text-foreground"
                onChange={(event) => setSelectedSector(event.target.value)}
                value={selectedSector}
              >
                <option value="All">All sectors</option>
                {industries.map((industry) => (
                  <option key={industry.slug} value={industry.slug}>
                    {industry.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-1.5 text-sm font-semibold text-indigo-brand">
              <span>Standard, scheme or training</span>
              <select
                aria-label="Filter standards and schemes"
                className="rounded-md border border-border bg-card px-3 py-2.5 text-foreground"
                onChange={(event) => setSelectedStandard(event.target.value)}
                value={selectedStandard}
              >
                <option value="All">All standards and schemes</option>
                {standards.map((standard) => (
                  <option key={standard} value={standard}>
                    {standard}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="mt-8 overflow-x-auto rounded-xl border border-border bg-card">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead className="bg-secondary">
                <tr>
                  <th scope="col" className="w-64 p-4 text-sm font-bold text-indigo-brand">
                    Sector
                  </th>
                  <th scope="col" className="p-4 text-sm font-bold text-indigo-brand">
                    Standards and schemes typically held
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {matrixRows.map(({ industry, standards: sectorStandards }) => (
                  <tr key={industry.slug}>
                    <th scope="row" className="p-4 align-top text-sm font-bold text-indigo-brand">
                      <AppLink
                        href={`/resources/industries/${industry.slug}`}
                        className="underline-offset-2 hover:underline"
                      >
                        {industry.name}
                      </AppLink>
                    </th>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-2">
                        {sectorStandards
                          .filter(
                            (standard) =>
                              selectedStandard === "All" || standard === selectedStandard,
                          )
                          .map((standard) => (
                            <span
                              key={standard}
                              className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-indigo-brand"
                            >
                              {standard}
                            </span>
                          ))}
                      </div>
                    </td>
                  </tr>
                ))}
                {matrixRows.length === 0 ? (
                  <tr>
                    <td colSpan={2} className="p-4 text-sm text-muted-foreground">
                      No sectors match those filters. Choose a different sector or standard.
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section id="not-listed" className="scroll-mt-20 py-14 md:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Sector expertise" title="Sector-experienced auditors" />
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Audit teams are assigned by scheme and sector competence, so a construction audit is
              led by someone who has managed sites and a software audit by someone who has run an
              information security management system. We deliver across the UK, the Middle East and
              India.
            </p>
            <div className="mt-10">
              <SectionHeading
                eyebrow="Not listed?"
                title="Tell us your scope"
                intro="Share your organisation, sector in your own words, standards of interest, headcount and sites. Our team will reply within two working days."
              />
            </div>
          </div>
          <div>
            <EnquiryForm includeIndustryField />
          </div>
        </div>
      </section>
    </>
  );
}
