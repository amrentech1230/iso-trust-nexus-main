import { courses } from "@/data/courses";
import { industries } from "@/data/industries";
import { standardsByCategory } from "@/data/standards";
import { site } from "./site";

export type NavLink = {
  label: string;
  href: string;
  note?: string;
  tag?: string;
  external?: boolean;
};

export type NavColumn = {
  heading: string;
  links: NavLink[];
};

export type FeaturedTile = {
  eyebrow: string;
  heading: string;
  body: string;
  cta: string;
  href: string;
};

export type PrimaryNavItem = {
  label: string;
  href: string;
  menu?: {
    kind: "mega" | "wide" | "simple";
    columns: NavColumn[];
    featured?: FeaturedTile;
  };
};

const certificationLinks = (category: Parameters<typeof standardsByCategory>[0]): NavLink[] =>
  standardsByCategory(category).map((s) => ({
    label: s.code === s.title ? s.title : s.code,
    href: `/certification/${s.slug}`,
    note: s.discipline,
    ...(s.tag ? { tag: s.tag } : {}),
  }));

export const primaryNav: PrimaryNavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Certification",
    href: "/certification",
    menu: {
      kind: "mega",
      columns: [
        {
          heading: "ISO Standards",
          links: [
            { label: "Certification", href: "/certification", note: "All standards overview" },
            ...certificationLinks("iso"),
          ],
        },
        {
          heading: "Cyber Security & Compliance",
          links: certificationLinks("cyber"),
        },
        {
          heading: "Sustainability",
          links: certificationLinks("sustainability"),
        },
        {
          heading: "Inspection",
          links: certificationLinks("inspection"),
        },
      ],
      featured: {
        eyebrow: "Transition alert",
        heading: "ISO 9001:2026 Coming September",
        body: "The next revision of ISO 9001 is expected September 2026. Book your gap assessment now to plan a smooth transition from the 2015 version.",
        cta: "Learn more",
        href: "/certification/iso-9001",
      },
    },
  },
  {
    label: "Training",
    href: "/training",
    menu: {
      kind: "wide",
      columns: [
        {
          heading: "ISO Training Courses",
          links: [
            { label: "Training Landing", href: "/training", note: "All courses and levels" },
            ...courses.map((c) => ({
              label: c.code,
              href: `/training/${c.slug}`,
              note: c.modules.map((m) => m.level).join(" · "),
            })),
          ],
        },
      ],
    },
  },
  {
    label: "Resources",
    href: "/resources/blog",
    menu: {
      kind: "mega",
      columns: [
        {
          heading: "Knowledge Hub",
          links: [
            { label: "Blog", href: "/resources/blog" },
            { label: "Knowledge Base / Guides", href: "/resources/knowledge-base" },
            { label: "Downloads & Whitepapers", href: "/resources/downloads" },
            { label: "Further Topics", href: "/resources/further-topics" },
            { label: "Frequently Asked Questions", href: "/resources/faq" },
          ],
        },
        {
          heading: "Industries",
          links: [
            { label: "Industries", href: "/resources/industries", note: "All sectors" },
            ...industries.map((i) => ({
              label: i.name,
              href: `/resources/industries/${i.slug}`,
            })),
          ],
        },
        {
          heading: "Client Services",
          links: [
            { label: "Certificate Transfer", href: "/resources/certificate-transfer" },
            { label: "Sitemap", href: "/resources/sitemap" },
          ],
        },
      ],
      featured: {
        eyebrow: "Free download",
        heading: "6 Essential Steps to ISO Certification",
        body: "Our practical guide to achieving certification the first time. Downloaded by 500+ organisations.",
        cta: "Get the guide",
        href: "/resources/downloads/6-essential-steps",
      },
    },
  },
  {
    label: "Contact Us",
    href: "/contact",
    menu: {
      kind: "simple",
      columns: [
        {
          heading: "Contact",
          links: [
            { label: "Contact", href: "/contact", note: "Offices, phone and email" },
            { label: "Enquiry / Get Quote", href: "/contact/enquiry", note: "Tell us your scope" },
          ],
        },
      ],
    },
  },
];

export const topbarLinks: NavLink[] = [
  { label: "E-Learning Academy", href: site.academyUrl, external: true },
  { label: "Certificate Verification", href: "/resources/certificate-transfer" },
];

export const footerNav: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/#about" },
      { label: "Services", href: "/#services" },
      { label: "Why Choose Us", href: "/#why-choose-us" },
      { label: "Accreditations", href: "/#accreditations" },
      { label: "Careers", href: "/careers" },
      { label: "Certificate Transfer", href: "/resources/certificate-transfer" },
    ],
  },
  {
    heading: "Quick Links",
    links: [
      { label: "All Standards", href: "/certification" },
      { label: "Training", href: "/training" },
      { label: "Blog", href: "/resources/blog" },
      { label: "FAQ", href: "/resources/faq" },
      { label: "Industries", href: "/resources/industries" },
      { label: "Enquiry", href: "/contact/enquiry" },
      { label: "Contact", href: "/contact" },
      { label: "Sitemap", href: "/resources/sitemap" },
      { label: "E-Learning Academy", href: site.academyUrl, external: true },
    ],
  },
  {
    heading: "Policies",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms & Conditions", href: "/legal/terms" },
      { label: "Confidentiality Policy", href: "/legal/confidentiality" },
      { label: "Impartiality Policy", href: "/legal/impartiality" },
      { label: "Refund & Cancellation Policy", href: "/legal/refund" },
      { label: "Cookie Policy", href: "/legal/cookies" },
    ],
  },
];
