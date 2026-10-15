import { createFileRoute } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { courses } from "@/data/courses";
import { industries } from "@/data/industries";
import { legalPages } from "@/data/legal";
import { certificationCopyPages } from "@/data/certification-copy";
import {
  publishedResources,
  resourceCategories,
  resourceSlug,
  resourceTypePaths,
} from "@/data/published-resources";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Resources", href: "/resources" },
  { name: "Sitemap", href: "/resources/sitemap" },
];

export const Route = createFileRoute("/resources/sitemap")({
  head: () => {
    const meta = pageMeta({
      title: "Sitemap | TRAIBCERT",
      description:
        "Every page on the TRAIBCERT website: certification standards, training courses, industries, resources, policies and contact pages.",
      path: "/resources/sitemap",
    });
    return { ...meta, scripts: [breadcrumbJsonLd([{ name: "Home", href: "/" }, ...crumbs])] };
  },
  component: SitemapPage,
});

function SitemapPage() {
  const groups: { heading: string; links: { label: string; href: string }[] }[] = [
    {
      heading: "Main pages",
      links: [
        { label: "Home", href: "/" },
        { label: "Certification", href: "/certification" },
        { label: "Certification process", href: "/certification/process" },
        { label: "ISO transition timeline", href: "/certification/transition-timeline" },
        { label: "Training", href: "/training" },
        { label: "Contact", href: "/contact" },
        { label: "Enquiry / Get Quote", href: "/contact/enquiry" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      heading: "Certification pages",
      links: certificationCopyPages.map((page) => ({
        label: page.title,
        href: page.url,
      })),
    },
    {
      heading: "Training courses",
      links: courses.map((c) => ({ label: c.code, href: `/training/${c.slug}` })),
    },
    {
      heading: "Resources",
      links: [
        { label: "Resource Centre", href: "/resources" },
        ...Object.entries(resourceTypePaths).map(([label, href]) => ({ label, href })),
        { label: "Knowledge Base", href: "/resources/knowledge-base" },
        { label: "Downloads", href: "/resources/downloads" },
        { label: "Further Topics", href: "/resources/further-topics" },
        { label: "FAQ", href: "/resources/faq" },
        { label: "Certificate Transfer", href: "/resources/certificate-transfer" },
        { label: "Industries", href: "/resources/industries" },
        ...resourceCategories.map((category) => ({
          label: category,
          href: `/resources/categories/${resourceSlug(category)}`,
        })),
        ...[...new Set(publishedResources.flatMap((resource) => resource.topics))].map((topic) => ({
          label: `${topic} resources`,
          href: `/resources/topics/${resourceSlug(topic)}`,
        })),
      ],
    },
    {
      heading: "Industries",
      links: industries.map((i) => ({
        label: i.name,
        href: `/resources/industries/${i.slug}`,
      })),
    },
    {
      heading: "Articles",
      links: [
        ...publishedResources.map((resource) => ({
          label: resource.title,
          href: resource.url,
        })),
      ],
    },
    {
      heading: "Policies",
      links: legalPages.map((p) => ({ label: p.title, href: `/legal/${p.slug}` })),
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Sitemap"
        intro="A complete index of the TRAIBCERT website."
        crumbs={crumbs}
        showEnquiryForm={false}
        fullWidthContent
      />
      <section className="py-14 md:py-16">
        <div className="container-page grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <SectionHeading eyebrow="Index" title={group.heading} />
              <ul className="mt-4 space-y-2 text-sm">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <AppLink
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </AppLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </section>
    </>
  );
}
