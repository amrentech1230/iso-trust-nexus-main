import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { AppLink } from "@/components/AppLink";
import { StandardCard } from "@/components/site/Cards";
import { CertificationProcess } from "@/components/site/CertificationProcess";
import { CTASection } from "@/components/site/CTASection";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { coursesBySlug } from "@/data/courses";
import { generalFaqs } from "@/data/insights";
import { standards, standardsBySlug } from "@/data/standards";
import { breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/certification/$slug")({
loader: ({ params }) => {
const standard = standardsBySlug[params.slug];
if (!standard) throw notFound();
return { standard };
},
head: ({ params, loaderData }) => {
if (!loaderData) {
return {
meta: [{ title: "Unavailable | TRAIBCERT" }, { name: "robots", content: "noindex" }],
};
}
const { standard } = loaderData;
const path = `/certification/${params.slug}`;
const meta = pageMeta({
title: `${standard.code} Certification | TRAIBCERT`,
description: standard.summary.slice(0, 155),
path,
type: "article",
});
return {
...meta,
scripts: [
breadcrumbJsonLd([
{ name: "Home", href: "/" },
{ name: "Certification", href: "/certification" },
{ name: standard.code, href: path },
]),
faqJsonLd([...(standard.faqs ?? []), ...generalFaqs.slice(0, 3)]),
],
};
},
component: StandardPage,
});

function StandardPage() {
const { standard } = Route.useLoaderData();
const faqs = [...(standard.faqs ?? []), ...generalFaqs.slice(0, 3)];
const course = standard.training ? coursesBySlug[standard.training] : undefined;
const related = standards
.filter((s) => s.category === standard.category && s.slug !== standard.slug)
.slice(0, 3);

return (
<>
  <PageHero eyebrow={standard.discipline} title={`${standard.code} Certification`} intro={standard.summary} crumbs={[ {
    name: "Certification" , href: "/certification" }, { name: standard.code, href: `/certification/${standard.slug}` },
    ]}>
    <div className="flex flex-wrap gap-3">
      {/* <AppLink href="/contact/enquiry"
        className="inline-flex items-center gap-2 rounded-md bg-honey px-5 py-3 text-sm font-bold text-indigo-brand transition-colors hover:bg-honey-hover">
        Get a Quote
        <ArrowRight className="size-4" aria-hidden="true" />
      </AppLink> */}

      {course ? (
      <AppLink href={`/training/${course.slug}`}
        className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10">
        Related training
      </AppLink>
      ) : null}
    </div>
  </PageHero>

  <section className="py-14 md:py-16">
    <div className="container-page grid gap-10 lg:grid-cols-[1.4fr_1fr]">
      <div>
        <SectionHeading eyebrow="Overview" title={`What ${standard.code} is`} />

      <div className="mt-5 space-y-5">
        {Array.isArray(standard.whatItIs) &&
          standard.whatItIs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-relaxed text-muted-foreground text-justify"
            >
              {paragraph}
            </p>
          ))}
      </div>
        <h2 className="mt-10 text-xl font-bold text-indigo-brand">{`Why is ${standard.code} important`}</h2>
          <div className="mt-5 space-y-5">
            {Array.isArray(standard.important) &&
              standard.important.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-relaxed text-muted-foreground text-justify"
                >
                  {paragraph}
                </p>
              ))}
          </div>
        <h2 className="mt-10 text-xl font-bold text-indigo-brand">EMS framework</h2>
          <div className="mt-5 space-y-5">
            {Array.isArray(standard.emsFramework) &&
              standard.emsFramework.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-relaxed text-muted-foreground text-justify"
                >
                  {paragraph}
                </p>
              ))}
          </div>
        <h2 className="mt-10 text-xl font-bold text-indigo-brand">
          Benefits of {standard.code}
        </h2>

        <div className="mt-5">
          {/* Benefits introduction */}
          {standard.benefit_para ? (
          <p className="text-base leading-relaxed text-muted-foreground text-justify">
            {standard.benefit_para}
          </p>
          ) : null}

          {/* Benefits list */}
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {standard.benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3 rounded-lg border border-border bg-white p-4">
              <span
                className="flex size-6 shrink-0 items-center justify-center rounded-full bg-honey text-xs font-bold text-indigo-brand">
                ✓
              </span>

              <p className="text-sm leading-6 text-muted-foreground text-justify">
                {benefit}
              </p>
            </div>
            ))}
          </div>
        </div>

        <h2 className="mt-10 text-xl font-bold text-indigo-brand">
          Certification process
        </h2>

        <div className="mt-5 space-y-5">
          {Array.isArray(standard.certification_process) &&
          standard.certification_process.map((paragraph, index) => (
          <p key={index} className="text-base leading-relaxed text-muted-foreground text-justify">
            {paragraph}
          </p>
          ))}
        </div>
<h2 className="mt-10 text-xl font-bold text-indigo-brand">
  Implementation steps
</h2>

{/* Introduction */}
{standard.implementation_intro ? (
  <p className="mt-4 text-base leading-relaxed text-muted-foreground text-justify">
    {standard.implementation_intro}
  </p>
) : null}

{/* Numbered implementation steps */}
<div className="mt-6 space-y-4">
  {standard.implementation_steps?.map((step, index) => (
    <div
      key={index}
      className="flex items-start gap-4 rounded-lg border border-border bg-white p-4"
    >
      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-honey text-sm font-bold text-indigo-brand">
        {index + 1}
      </span>

      <p className="text-sm leading-6 text-muted-foreground text-justify">
        {step}
      </p>
    </div>
  ))}
</div>

{/* Transition */}
{standard.implementation_transition ? (
  <p className="mt-6 text-base leading-relaxed text-muted-foreground text-justify">
    {standard.implementation_transition}
  </p>
) : null}
      </div>

<aside className="space-y-6">

  {/* Request a Quote Form */}
  

  {/* Who needs it */}
  <div className="rounded-xl border border-border bg-card p-6">
    <h2 className="text-base font-bold text-indigo-brand">
      Who needs it
    </h2>

    <ul className="mt-3 space-y-2 text-sm text-muted-foreground text-justify">
      {standard.whoNeedsIt.map((item) => (
        <li key={item} className="flex gap-2.5">
          <Check
            className="mt-0.5 size-4 shrink-0 text-honey-text"
            aria-hidden="true"
          />
          {item}
        </li>
      ))}
    </ul>
  </div>

  {/* Benefits */}
  <div className="rounded-xl border border-border bg-muted/50 p-6">
    <h2 className="text-base font-bold text-indigo-brand">
      Benefits of {standard.code}
    </h2>

    <ul className="mt-3 space-y-2 text-sm text-muted-foreground text-justify">
      {standard.benefits.map((item) => (
        <li key={item} className="flex gap-2.5">
          <Check
            className="mt-0.5 size-4 shrink-0 text-honey-text"
            aria-hidden="true"
          />
          {item}
        </li>
      ))}
    </ul>
  </div>

  <div className="overflow-hidden rounded-xl border border-border bg-white shadow-sm">

    {/* Form Header */}
    <div className="bg-[#258eaf] px-5 py-3.5">
      <h2 className="text-lg font-bold text-white">
        Request a quote
      </h2>
    </div>

    {/* Form Body */}
    <div className="p-5">
      <form
        action="/contact/enquiry"
        method="POST"
        className="space-y-4"
      >
        {/* Name */}
        <div>
          <label
            htmlFor="sidebar-name"
            className="mb-1.5 block text-sm font-medium text-indigo-brand"
          >
            Name
          </label>

          <input
            id="sidebar-name"
            name="name"
            type="text"
            required
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none transition focus:border-indigo-brand focus:ring-1 focus:ring-indigo-brand"
          />
        </div>

        {/* Organization */}
        <div>
          <label
            htmlFor="sidebar-organization"
            className="mb-1.5 block text-sm font-medium text-indigo-brand"
          >
            Organization
          </label>

          <input
            id="sidebar-organization"
            name="organization"
            type="text"
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none transition focus:border-indigo-brand focus:ring-1 focus:ring-indigo-brand"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="sidebar-email"
            className="mb-1.5 block text-sm font-medium text-indigo-brand"
          >
            Email
          </label>

          <input
            id="sidebar-email"
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none transition focus:border-indigo-brand focus:ring-1 focus:ring-indigo-brand"
          />
        </div>

        {/* Std / ISD Code */}
        <div>
          <label
            htmlFor="sidebar-std-code"
            className="mb-1.5 block text-sm font-medium text-indigo-brand"
          >
            Std Or Isd Code
          </label>

          <input
            id="sidebar-std-code"
            name="std_or_isd_code"
            type="text"
            placeholder=""
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none transition focus:border-indigo-brand focus:ring-1 focus:ring-indigo-brand"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="sidebar-phone"
            className="mb-1.5 block text-sm font-medium text-indigo-brand"
          >
            Phone
          </label>

          <input
            id="sidebar-phone"
            name="phone"
            type="tel"
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none transition focus:border-indigo-brand focus:ring-1 focus:ring-indigo-brand"
          />
        </div>

        {/* Country */}
        <div>
          <label
            htmlFor="sidebar-country"
            className="mb-1.5 block text-sm font-medium text-indigo-brand"
          >
            Country
          </label>

          <input
            id="sidebar-country"
            name="country"
            type="text"
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none transition focus:border-indigo-brand focus:ring-1 focus:ring-indigo-brand"
          />
        </div>

        {/* Service */}
        <div>
          <label
            htmlFor="sidebar-service"
            className="sr-only"
          >
            Select Service
          </label>

          <select
            id="sidebar-service"
            name="service"
            defaultValue=""
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-indigo-brand focus:ring-1 focus:ring-indigo-brand"
          >
            <option value="" disabled>
              --Select Service--
            </option>

            <option value={`${standard.code} Certification`}>
              {standard.code} Certification
            </option>

            <option value="Certification">
              Certification
            </option>

            <option value="Training">
              Training
            </option>

            <option value="Other">
              Other
            </option>
          </select>
        </div>

        {/* Comments */}
        <div>
          <label
            htmlFor="sidebar-comments"
            className="mb-1.5 block text-sm font-medium text-indigo-brand"
          >
            Comments
          </label>

          <textarea
            id="sidebar-comments"
            name="comments"
            rows={3}
            className="w-full resize-none rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none transition focus:border-indigo-brand focus:ring-1 focus:ring-indigo-brand"
          />
        </div>

        {/* Captcha */}
        <div>
          <input
            type="text"
            name="captcha"
            placeholder="Captcha"
            className="w-32 rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none transition focus:border-indigo-brand focus:ring-1 focus:ring-indigo-brand"
          />
        </div>

        {/* Captcha image */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 items-center justify-center bg-gray-200 px-3 font-mono text-lg tracking-wider text-black">
            qdbqhe
          </div>

          <button
            type="button"
            aria-label="Refresh captcha"
            className="flex size-10 items-center justify-center rounded-md border border-gray-200 bg-white text-lg text-sky-500"
          >
            ↻
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-md bg-[#ffe01b] px-5 py-3 text-sm font-bold uppercase tracking-wide text-gray-900 transition hover:bg-[#f5d500]"
        >
          Submit Contact
        </button>
      </form>
    </div>
  </div>

</aside>
    </div>
  </section>

  <section className="bg-muted/40 py-14 md:py-16">
    <div className="container-page">
      <SectionHeading eyebrow="Certification process" title={`How ${standard.code} certification works`}
        align="center" />
      <div className="mt-9">
        <CertificationProcess />
      </div>
    </div>
  </section>

  <section className="py-14 md:py-16">
    <div className="container-page grid gap-10 lg:grid-cols-2">
      <div>
        <SectionHeading eyebrow="Why TRAIBCERT" title="Our surveillance is due early in 2027 — should we transition then?" />
        <p className="mt-4 text-base leading-relaxed text-muted-foreground text-justify">
          Yes, if your review and internal audit are complete; otherwise at the following visit. You have until 30 April 2029, but earlier avoids the rush, and no new 2015 certificates can be issued after 31 October 2027.
        </p>
        {course ? (
        <div className="mt-6 rounded-xl border border-border bg-card p-6">
          <p className="text-[11px] font-bold tracking-[0.16em] text-honey-text uppercase">
            Related training
          </p>
          <h3 className="mt-2 text-base font-bold text-indigo-brand">{course.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground text-justify ">{course.summary}</p>
          <AppLink href={`/training/${course.slug}`}
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-indigo-brand hover:underline">
            View course levels
            <ArrowRight className="size-4" aria-hidden="true" />
          </AppLink>
        </div>
        ) : null}
      </div>
      <div>
        <SectionHeading eyebrow="FAQs" title="" />
        <div className="mt-4">
          <FAQAccordion faqs={faqs} />
        </div>
      </div>
      
    </div>
  </section>

  {related.length > 0 ? (
  <section className="bg-muted/40 py-14 md:py-16">
    <div className="container-page">
      <SectionHeading eyebrow="Related" title="You may also need" />
      <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((item) => (
        <StandardCard key={item.slug} standard={item} />
        ))}
      </div>
      
    </div>
  </section>
  ) : null}

    {related.length > 0 ? (
  <section className="bg-muted/40 py-14 md:py-16">
    <div className="container-page">
      <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
{/* Why choose TRAIBCERT? */}
<h2 className="mt-10 text-xl font-bold text-indigo-brand">
  Why choose TRAIBCERT?
</h2>

<div className="mt-5 space-y-5">
  {standard.why_choose_intro?.map((paragraph, index) => (
    <p
      key={index}
      className="text-base leading-relaxed text-muted-foreground text-justify"
    >
      {paragraph}
    </p>
  ))}
</div>

{/* Industries */}
<h2 className="mt-10 text-xl font-bold text-indigo-brand">
  Industries we certify to ISO 14001
</h2>

<p className="mt-4 text-base leading-relaxed text-muted-foreground text-justify">
  Organisations in these sectors most often ask us for ISO 14001 — select
  yours for sector-specific guidance.
</p>

<div className="mt-5 grid gap-3 sm:grid-cols-2">
  {standard.industries?.map((industry, index) => (
    <div
      key={index}
      className="flex items-start gap-3 rounded-lg border border-border bg-white p-4"
    >
      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-honey text-xs font-bold text-indigo-brand">
        ✓
      </span>

      <p className="text-sm leading-6 text-muted-foreground text-justify">
        {industry}
      </p>
    </div>
  ))}
</div>

{/* Who needs certification */}
<h2 className="mt-10 text-xl font-bold text-indigo-brand">
  Who needs ISO 14001 certification?
</h2>

<ul className="mt-5 space-y-3">
  {standard.who_needs_certification?.map((item, index) => (
    <li
      key={index}
      className="flex items-start gap-3 text-sm leading-6 text-muted-foreground text-justify"
    >
      <Check
        className="mt-1 size-4 shrink-0 text-honey-text"
        aria-hidden="true"
      />
      <span>{item}</span>
    </li>
  ))}
</ul>

{/* Self check */}
<h2 className="mt-10 text-xl font-bold text-indigo-brand">
  Ready to apply? A quick self-check
</h2>

<div className="mt-5 space-y-3">
  {standard.self_check?.map((item, index) => (
    <div
      key={index}
      className="flex items-start gap-3 rounded-lg border border-border bg-white p-4"
    >
      <Check
        className="mt-0.5 size-5 shrink-0 text-honey-text"
        aria-hidden="true"
      />

      <p className="text-sm leading-6 text-muted-foreground text-justify">
        {item}
      </p>
    </div>
  ))}
</div>

{/* Training */}
<h2 className="mt-10 text-xl font-bold text-indigo-brand">
  Training
</h2>

{standard.training ? (
  <p className="mt-4 text-base leading-relaxed text-muted-foreground text-justify">
    {standard.training}
  </p>
) : null}

{/* You may also need */}
<h2 className="mt-10 text-xl font-bold text-indigo-brand">
  You may also need
</h2>

<div className="mt-5 grid gap-3 sm:grid-cols-2">
  {standard.also_need?.map((item, index) => (
    <div
      key={index}
      className="flex items-center gap-3 rounded-lg border border-border bg-white p-4"
    >
      <Check
        className="size-5 shrink-0 text-honey-text"
        aria-hidden="true"
      />

      <p className="text-sm font-medium text-muted-foreground text-justify">
        {item}
      </p>
    </div>
  ))}
</div>
      </div>
      
    </div>
  </section>
  ) : null}

  <CTASection />
</>
);
}