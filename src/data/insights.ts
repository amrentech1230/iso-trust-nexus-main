export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  excerpt: string;
  author: string;
  body: string[];
  featured?: boolean;
};

export const postCategories = [
  "All",
  "Certification",
  "Cyber Security",
  "Sustainability",
  "Training",
  "Inspection",
];

export const posts: Post[] = [
  {
    slug: "preparing-for-the-iso-9001-2026-revision",
    title: "Preparing for the ISO 9001 revision: a practical transition checklist",
    category: "Certification",
    date: "2026-08-18",
    readingTime: "6 min read",
    author: "TRAIBCERT Technical Team",
    featured: true,
    excerpt:
      "A revision of ISO 9001 is anticipated. Here is how to plan a calm, staged transition instead of a last-minute scramble.",
    body: [
      "Every revision of a management system standard triggers the same pattern: a long quiet period, then a rush of activity as the transition deadline approaches. Organisations that treat the revision as a planned project rather than an audit emergency consistently spend less time and money on it.",
      "Start with a gap assessment against the draft requirements. The objective is not a perfect answer to every clause, but a clear list of the changes that will genuinely affect your documented information, risk approach and internal audit programme.",
      "Next, map each gap to an owner and a realistic date within your existing certification cycle. Where possible, fold the work into scheduled internal audits and management reviews so the transition becomes part of normal operation rather than an extra programme.",
      "Finally, brief your auditors and your people early. Awareness training is inexpensive compared with the cost of a surveillance visit where nobody can explain how the system has changed.",
    ],
  },
  {
    slug: "cyber-essentials-vs-iso-27001",
    title: "Cyber Essentials or ISO 27001: which one does your organisation need?",
    category: "Cyber Security",
    date: "2026-07-29",
    readingTime: "5 min read",
    author: "TRAIBCERT Technical Team",
    excerpt:
      "The two schemes solve different problems. This guide explains the scope, effort and commercial value of each.",
    body: [
      "Cyber Essentials covers five technical controls that block the most common opportunistic attacks. It is fast, affordable and frequently mandated in UK public sector procurement. It is not a management system.",
      "ISO/IEC 27001 is a management system standard. It asks you to assess information security risk, decide which controls apply, run the system and improve it. Enterprise buyers and regulated clients usually expect it.",
      "Many organisations do both: Cyber Essentials to satisfy immediate procurement requirements and demonstrate hygiene, then ISO 27001 as the governance backbone that keeps those controls working.",
      "If your next contract names a specific scheme, start there. If you are building long-term assurance, start with the risk assessment.",
    ],
  },
  {
    slug: "building-a-credible-carbon-baseline",
    title: "Building a carbon baseline that survives customer scrutiny",
    category: "Sustainability",
    date: "2026-07-11",
    readingTime: "7 min read",
    author: "TRAIBCERT Technical Team",
    excerpt:
      "Scope 3 is where most carbon inventories fall apart. A defensible boundary and consistent method matter more than precision.",
    body: [
      "Carbon reporting fails audits for predictable reasons: unclear boundaries, inconsistent emission factors and undocumented assumptions. None of these require expensive software to fix.",
      "Define the reporting boundary first and write it down, including what is excluded and why. ISO 14064 provides the structure for this and makes later verification much simpler.",
      "For Scope 3, accept that early inventories will be estimate-heavy. Document the method, record the data source for each category and plan how each estimate will be improved next cycle.",
      "Pair the inventory with an energy management system. Measured reductions, rather than pledges, are what customers increasingly ask to see.",
    ],
  },
  {
    slug: "internal-audit-programme-that-adds-value",
    title: "How to run an internal audit programme people actually value",
    category: "Training",
    date: "2026-06-24",
    readingTime: "5 min read",
    author: "TRAIBCERT Training Team",
    excerpt:
      "Internal audits should surface risk, not paperwork. A few structural changes make the difference.",
    body: [
      "The most common internal audit failure is scheduling by clause rather than by risk. Auditing every clause equally spreads effort thinly across areas where nothing is likely to go wrong.",
      "Build the programme around your highest-risk processes, recent incidents and customer complaints. Use the remaining capacity for coverage of the rest across the certification cycle.",
      "Train auditors to gather evidence and describe findings factually. Vague findings generate defensive responses; specific ones generate corrective action.",
      "Close the loop. An audit programme that never verifies effectiveness of corrective action teaches the organisation that findings can be ignored.",
    ],
  },
  {
    slug: "pre-shipment-inspection-avoiding-costly-surprises",
    title: "Pre-shipment inspection: avoiding costly surprises at the port",
    category: "Inspection",
    date: "2026-06-02",
    readingTime: "4 min read",
    author: "TRAIBCERT Inspection Team",
    excerpt:
      "Once goods have shipped, your options narrow and your costs rise. Independent inspection moves the decision point earlier.",
    body: [
      "Disputes about quantity, packing and specification are far easier to resolve while goods are still at the supplier's premises.",
      "A good inspection brief starts with unambiguous acceptance criteria. If the specification is open to interpretation, the inspection result will be too.",
      "Sampling should reflect risk: new suppliers, new product lines and previous nonconformities all justify tighter inspection.",
      "Report findings with photographs and measurements. Objective evidence protects the relationship as well as the shipment.",
    ],
  },
  {
    slug: "iso-42001-ai-governance-first-steps",
    title: "ISO/IEC 42001: first steps towards AI governance",
    category: "Certification",
    date: "2026-05-19",
    readingTime: "6 min read",
    author: "TRAIBCERT Technical Team",
    excerpt:
      "AI assurance questions are appearing in procurement. ISO/IEC 42001 gives you a structure to answer them.",
    body: [
      "Buyers are starting to ask how AI features are governed: what data trains them, who reviews outputs, and what happens when the model is wrong.",
      "ISO/IEC 42001 provides a management system for exactly these questions, covering AI risk and impact assessment, data governance and human oversight.",
      "If you already hold ISO 27001, much of the governance scaffolding exists. The new work is usually AI impact assessment and lifecycle documentation.",
      "Start by inventorying where AI is actually used in your products and operations. Most organisations find more than they expected.",
    ],
  },
];

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
    q: "What does an independent certification body do?",
    a: "A certification body audits your management system against a standard and, where requirements are met, issues certification. To protect impartiality, we do not implement the systems we certify.",
  },
  {
    q: "How long does certification take?",
    a: "Timescales depend on your size, number of sites, complexity and current readiness. After a short scoping conversation we set out a realistic timeline and audit day estimate.",
  },
  {
    q: "How much does certification cost?",
    a: "Cost is driven by audit days, which depend on employee numbers, scope and risk. Request a quote and we will provide a clear breakdown with no obligation.",
  },
  {
    q: "What is the difference between Stage 1 and Stage 2 audits?",
    a: "Stage 1 confirms your system is designed and documented appropriately and that you are ready. Stage 2 tests whether it is implemented and effective in practice.",
  },
  {
    q: "Can we transfer an existing certificate to TRAIBCERT?",
    a: "Yes. Certificate transfer preserves your existing certification cycle where the current certification is valid and accredited. We review your certificate, recent audit reports and open findings.",
  },
  {
    q: "Do you certify organisations outside the UK?",
    a: "Yes. We work with organisations across the UK, UAE and internationally, using a mix of on-site and remote audit techniques where appropriate.",
  },
  {
    q: "Do you deliver training as well as certification?",
    a: "Yes. We provide Foundation, Awareness, Internal Auditor and Lead Auditor training, delivered in the classroom, live online, in-house or through our E-Learning Academy.",
  },
  {
    q: "What accreditations does TRAIBCERT hold?",
    a: "We are an ASCB accredited certification body and an IASME partner delivering Cyber Essentials and Cyber Essentials Plus certification.",
  },
];
