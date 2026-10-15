import { publishedResources, resourcePublishedDate } from "./published-resources";

export type Post = {
  slug: string;
  url: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  excerpt: string;
  author: string;
  body: string[];
};

export const posts: Post[] = publishedResources
  .filter((resource) => resource.type === "Articles")
  .map((resource) => {
    const [author, , readingTime] = resource.byline.split(" · ");
    const slug = resource.url.split("/").at(-1);
    if (!author || !readingTime || !slug) {
      throw new Error(`Invalid article metadata for ${resource.url}`);
    }
    return {
      slug,
      url: resource.url,
      title: resource.title,
      category: resource.category,
      date: resourcePublishedDate(resource),
      readingTime,
      excerpt: resource.excerpt,
      author,
      body: resource.body,
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export const postCategories = ["All", ...new Set(posts.map((post) => post.category))];

export const postsBySlug = Object.fromEntries(posts.map((p) => [p.slug, p]));

export type Guide = {
  slug: string;
  title: string;
  category: string;
  summary: string;
};

export const knowledgeBase: Guide[] = [
  {
    slug: "how-iso-certification-works",
    title: "How ISO certification works, end to end",
    category: "Getting started",
    summary:
      "The full journey from enquiry and scoping through Stage 1 and Stage 2 audits to certification and surveillance.",
  },
  {
    slug: "choosing-the-right-standard",
    title: "Choosing the right standard for your organisation",
    category: "Getting started",
    summary:
      "How to match standards to your risks, contracts and customer requirements instead of certifying everything.",
  },
  {
    slug: "integrated-management-systems",
    title: "Integrating multiple management systems",
    category: "Implementation",
    summary:
      "Running quality, environmental, safety and security systems as one, using the shared Annex SL structure.",
  },
  {
    slug: "preparing-for-a-stage-2-audit",
    title: "Preparing for a Stage 2 certification audit",
    category: "Audit",
    summary:
      "What auditors look for, the evidence to have ready and the mistakes that most often cause findings.",
  },
  {
    slug: "internal-audit-checklists",
    title: "Building useful internal audit checklists",
    category: "Audit",
    summary: "Risk-based checklist design that produces evidence rather than tick-box conformity.",
  },
  {
    slug: "corrective-action-root-cause",
    title: "Corrective action and root cause analysis",
    category: "Improvement",
    summary:
      "Practical techniques for finding causes that matter and closing findings so they stay closed.",
  },
  {
    slug: "annex-a-controls-explained",
    title: "ISO 27001 Annex A controls explained",
    category: "Information security",
    summary:
      "The four control themes, how to justify exclusions and how to evidence implementation.",
  },
  {
    slug: "certificate-transfer-guide",
    title: "Transferring your certificate to TRAIBCERT",
    category: "Client services",
    summary:
      "How transfer works, what documents are needed and how your existing certification cycle is preserved.",
  },
];

export type Download = {
  slug: string;
  title: string;
  type: string;
  summary: string;
  href: string;
};

export const downloads: Download[] = [
  {
    slug: "6-essential-steps",
    title: "6 Essential Steps to ISO Certification",
    type: "Guide",
    summary:
      "Our practical guide to achieving certification the first time. Downloaded by 500+ organisations.",
    href: "/resources/downloads/6-essential-steps",
  },
  {
    slug: "iso-27001-readiness-checklist",
    title: "ISO 27001 Readiness Checklist",
    type: "Checklist",
    summary:
      "A clause-by-clause readiness check covering the ISMS requirements and Annex A control themes.",
    href: "/contact/enquiry",
  },
  {
    slug: "internal-audit-plan-template",
    title: "Internal Audit Plan Template",
    type: "Template",
    summary: "A risk-based annual audit plan template you can adapt to any management system.",
    href: "/contact/enquiry",
  },
  {
    slug: "cyber-essentials-control-summary",
    title: "Cyber Essentials Control Summary",
    type: "Whitepaper",
    summary: "The five technical controls explained in plain language, with common failure points.",
    href: "/contact/enquiry",
  },
];

export const furtherTopics = [
  {
    title: "Accreditation vs certification",
    summary:
      "What accreditation means, who accredits certification bodies and why it matters to your certificate's value.",
  },
  {
    title: "Impartiality in certification",
    summary:
      "Why certification bodies must separate consultancy from certification, and how impartiality is maintained.",
  },
  {
    title: "Surveillance and recertification",
    summary:
      "How the three-year certification cycle works and what happens at each surveillance visit.",
  },
  {
    title: "Multi-site and group certification",
    summary:
      "Sampling approaches for organisations with multiple sites, regions or legal entities.",
  },
  {
    title: "Remote and hybrid auditing",
    summary: "When remote audit techniques are appropriate and how evidence is verified remotely.",
  },
  {
    title: "Scope statements that work",
    summary:
      "Writing a certification scope that is accurate, credible and useful in tender responses.",
  },
];

export const generalFaqs: { q: string; a: string }[] = [
  {
    q: "Do we need a biodiversity survey?",
    a: "No. You need to show that biodiversity and the other named conditions were considered in your context and, where relevant, in your aspects and objectives — proportionate to your activities.",
  },
  {
    q: "Can ISO 14001 be certified with ISO 9001 and ISO 45001?",
    a: "Yes. Integrated audits share the common clauses and reduce total audit days, and both transitions — ISO 9001:2026 and ISO 14001:2026 — can be completed in the same visit.",
  },
  {
    q: "How much does ISO 14001 certification cost?",
    a: "Fees depend on audit days, which follow international audit-time rules based on headcount, sites and the environmental risk of your activities. A low-impact single-site organisation of ten people needs around two days for Stage 1 and Stage 2; a permitted site needs more. We quote the whole three-year cycle in one fixed price, and the on-page calculator gives an indicative range.",
  },
  {
    q: "How long does it take to get certified?",
    a: "Four to nine months for most organisations, with the system running for about three months before Stage 1 so that monitoring, compliance evaluation, internal audit and management review records exist.",
  },
  {
    q: "We are a construction subcontractor — does ISO 14001 apply to temporary sites?",
    a: "Yes. The system covers the activities you perform wherever you perform them, and Stage 2 and surveillance audits sample live sites so that controls such as waste segregation, fuel storage and dust and noise management are seen in operation.",
  },
  {
    q: "What happens after the certificate is issued?",
    a: "Three years of validity with surveillance in each of the first two years and recertification in the third. Between visits you keep the compliance register and aspects data current and tell us about changes to scope or sites.",
  },
  {
    q: "Can we transfer an existing ISO 14001 certificate to TRAIBCERT?",
    a: "Yes. A valid, accredited certificate transfers with its expiry date and cycle intact after a free pre-transfer review; the transition to the 2026 edition can be scheduled at the first visit after transfer.",
  },
];
