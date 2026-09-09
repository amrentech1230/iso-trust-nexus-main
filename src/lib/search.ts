import { courses } from "@/data/courses";
import { industries } from "@/data/industries";
import { knowledgeBase, posts } from "@/data/insights";
import { standards } from "@/data/standards";

export type SearchResult = {
  title: string;
  href: string;
  group: "Certification" | "Training" | "Industries" | "Insights" | "Knowledge Base" | "Pages";
  description: string;
};

const staticPages: SearchResult[] = [
  {
    title: "Get a Quote",
    href: "/contact/enquiry",
    group: "Pages",
    description: "Tell us your scope and receive a certification or training quotation.",
  },
  {
    title: "Contact",
    href: "/contact",
    group: "Pages",
    description: "UK and UAE contact details and office address.",
  },
  {
    title: "Certificate Transfer",
    href: "/resources/certificate-transfer",
    group: "Pages",
    description: "Transfer an existing accredited certificate to TRAIBCERT.",
  },
  {
    title: "Frequently Asked Questions",
    href: "/resources/faq",
    group: "Pages",
    description: "Answers about certification, cost, timescales and transfers.",
  },
  {
    title: "Careers",
    href: "/careers",
    group: "Pages",
    description: "Auditor, technical and support roles at TRAIBCERT.",
  },
  {
    title: "Downloads & Whitepapers",
    href: "/resources/downloads",
    group: "Pages",
    description: "Guides, checklists and templates for certification teams.",
  },
];

/**
 * Local search index. Swap `searchAll` for an API call when a backend search
 * service is available — the UI consumes this function only.
 */
export const searchIndex: SearchResult[] = [
  ...standards.map((s) => ({
    title: `${s.code} — ${s.discipline}`,
    href: `/certification/${s.slug}`,
    group: "Certification" as const,
    description: s.summary,
  })),
  ...courses.map((c) => ({
    title: `${c.code} Training`,
    href: `/training/${c.slug}`,
    group: "Training" as const,
    description: c.summary,
  })),
  ...industries.map((i) => ({
    title: i.name,
    href: `/resources/industries/${i.slug}`,
    group: "Industries" as const,
    description: i.summary,
  })),
  ...posts.map((p) => ({
    title: p.title,
    href: `/resources/blog/${p.slug}`,
    group: "Insights" as const,
    description: p.excerpt,
  })),
  ...knowledgeBase.map((g) => ({
    title: g.title,
    href: "/resources/knowledge-base",
    group: "Knowledge Base" as const,
    description: g.summary,
  })),
  ...staticPages,
];

export const searchAll = (query: string, limit = 12): SearchResult[] => {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  const terms = q.split(/\s+/);
  return searchIndex
    .map((item) => {
      const haystack = `${item.title} ${item.description}`.toLowerCase();
      const score = terms.reduce((total, term) => {
        if (!haystack.includes(term)) return total - 10;
        return total + (item.title.toLowerCase().includes(term) ? 3 : 1);
      }, 0);
      return { item, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.item);
};
