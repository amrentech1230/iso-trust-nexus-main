export type StandardCategory = "iso" | "cyber" | "sustainability" | "inspection";

export type Standard = {
  slug: string;
  code: string;
  title: string;
  category: StandardCategory;
  tag?: "NEW" | "CURRENT";
  discipline: string;
  summary: string;
  whatItIs: string[];
  important: string[];
  emsFramework: string[];
  whoNeedsIt: string[];
  benefits: string[];
  certification_process:string[];
  implementation_intro: string;
  implementation_steps: string[];
  implementation_transition: string;
  benefit_para: string;
  requirements: string[];
  training?: string;
  faqs?: { q: string; a: string }[];
  why_choose_intro: string[];
  industries: string[];
  who_needs_certification: string[];
  self_check: string[];
  also_need: string[];
};

const genericRequirements = [
  "Context of the organisation and interested parties",
  "Leadership commitment and a documented policy",
  "Risk-based planning with measurable objectives",
  "Competence, awareness and documented information",
  "Operational controls and performance monitoring",
  "Internal audit, management review and continual improvement",
];

const base = (s: Omit<Standard, "requirements"> & { requirements?: string[] }): Standard => ({
  ...s,
  requirements: s.requirements ?? genericRequirements,
});

export const standards: Standard[] = [

  base({
    slug: "iso-14001",
    code: "ISO 14001:2026",
    title: "ISO 14001 Environmental Management",
    category: "iso",
    tag: "CURRENT",
    discipline: "Environmental management",
    summary:
      "Over half a million organisations worldwide are certified to ISO 14001, and in the UK, it has become the standard answer to the environmental section of every supplier questionnaire, from construction frameworks to retailer codes. ISO 14001:2026, published on 15 April 2026, is the current edition. It widens the view an organisation must take of the environment - climate, biodiversity, pollution and resources - and asks for discipline in managing change and controlling suppliers. TRAIBCERT certifies to the 2026 edition, transitions ISO 14001:2015 certificates ahead of the 30 April 2029 deadline and quotes the full three-year cycle as one fixed price.",
    whatItIs:[
      
   
      "ISO 14001 is the international standard for environmental management systems, published by the International Organization for Standardization. It sets out how an organisation identifies the ways its activities, products and services interact with the environment, meets its legal and other obligations, controls the aspects that matter and improves its environmental performance over time. The current edition, ISO 14001:2026, was published on 15 April 2026 and is the fourth since the standard first appeared in 1996. It replaces ISO 14001:2015; new certificates to the 2015 edition cannot be issued after 31 October 2027, and every certificate must be transitioned to the 2026 edition by 30 April 2029, when any 2015 certificate still in force is withdrawn. The full transition timeline for both standards is shown on our transition timeline (/certification/transition-timeline).",
      "The revision is evolutionary. The structure shared with ISO 9001 and ISO 45001 is unchanged and policy commitments are the same. The differences are a broader definition of the environmental conditions an organisation must consider - climate change, biodiversity, pollution and resource availability are named; a clearer separation between environmental aspects and the wider risks and opportunities to the business; a new clause on planning of changes; wider language on externally provided processes, products and services in place of 'outsourced processes'; leadership support extended to people in all roles, not only the environmental manager; and internal audits that state their objectives. Guidance in the annex has been expanded to help consistent interpretation.",
      "It is the second most widely adopted management-system standard in the world, with more than half a million certificates in force across manufacturing, construction, energy, transport, food, facilities and the public sector. An ISO 14001 certificate confirms that an accredited, independent certification body has audited the environmental management system covering the scope on the certificate, found that it meets the standard and seen it operating on site. It is valid for three years with annual surveillance audits and is listed on a public register.",
      ],
      important:[
      "Compliance is the first reason. Permits, consents, waste duty-of-care, packaging and producer-responsibility obligations, F-gas, COSHH and increasingly climate-related disclosure all need to be identified, met and shown to be met. ISO 14001 provides the register, the evaluation and the evidence, and certified organisations report fewer regulatory interventions.",
      "Cost is the second. Structured attention to energy, water, materials and waste typically finds savings in the first year that exceed the cost of certification, and the same data feeds carbon reporting. Market access is the third: principal contractors, local authorities, utilities and retailers now require environmental certification of their supply chains, and ESG questionnaires from lenders and customers ask for it explicitly. A certified system is also the natural backbone for ISO 50001 energy management, greenhouse-gas verification and net-zero plans.",
      "Reputation completes the case. A pollution incident, a prosecution or an unsupported environmental claim travels quickly, and the 2026 edition's emphasis on life cycle thinking and supplier control is designed to prevent exactly those failures. For a board, the certificate is evidence that environmental risk is managed with the same discipline as financial risk",
      ],
      emsFramework:[
        "An environmental management system follows the Plan-Do-Check-Act cycle: understand your environmental position and plan what to control, run the controls, check performance and compliance, and act on the results. ISO 14001 arranges that cycle in the harmonised structure shared with ISO 9001 and ISO 45001, so leadership, competence, documents, internal audit and management review are common elements that can be run once for all three.",

        "Two elements are distinctive to environmental management. The first is the aspects register: a record of how your activities, products and services interact with the environment across their life cycle - procurement, use and end-of-life, not only what happens on site - with the significant ones identified. The second is the register of compliance obligations: the permits, consents, laws and voluntary commitments that apply to you, each with an owner and a known status. Both sit inside a context review that, in the 2026 edition, must visibly consider climate change, biodiversity, pollution and resource availability alongside the expectations of regulators, customers, neighbours and lenders.",

        "Around them sit the common elements. Leadership means top management owns the system, commits in writing to protecting the environment, meeting obligations and improving performance, and supports people in every role. Planning keeps business risks and opportunities distinct from environmental aspects, sets measurable objectives for the significant ones and - new in 2026 - assesses changes such as new products, sites, permits or legislation before they happen. Support and operation cover competent people, awareness across the workforce, controlled documents, operational controls for significant aspects, environmental criteria applied to suppliers, contractors and externally provided services, and tested emergency preparedness. Performance evaluation is the monitoring of key environmental parameters, a periodic evaluation of compliance with every obligation, internal audits with stated objectives and a management review that examines the evidence. Improvement corrects incidents, nonconformities and audit findings at root cause so that environmental performance improves year on year rather than simply being maintained.",
      ],

    whoNeedsIt: [
      "Manufacturers, construction and engineering businesses",
      "Organisations with permits, consents or waste obligations",
      "Suppliers asked to evidence environmental credentials",
      "Organisations building an ESG or net-zero programme",
    ],
    benefits: 
    [
      "Tender and framework points - principal contractors, local authorities, utilities and retailers award points for, or require, a certified environmental system; the certificate answers the environmental section of most supplier questionnaires in one line.",
      "ESG and lender evidence - investors, lenders and customers increasingly ask for certified environmental management in ESG questionnaires and sustainability-linked finance conditions; an accredited certificate is verifiable evidence rather than a policy statement.",
      "Incident and reputational protection - operational controls, emergency preparedness and management of change reduce the likelihood of spills, breaches and unsupported claims, the failures that reach the press and the regulator.",
      "A base for net zero - aspects data, compliance registers and monitoring systems are the foundation for ISO 50001, greenhouse-gas verification and credible net-zero plans, so the environmental system is reused rather than duplicated.",
    ],
    benefit_para: "Systematic legal compliance is the benefit regulators notice: every permit, consent, duty-of-care and producer-responsibility obligation is identified, evaluated and evidenced, which reduces the risk of enforcement and gives inspectors confidence when they visit. Resource and waste savings are the benefit finance director's notice; structured attention to energy, water, raw materials and waste typically pays for certification in the first year, and the same data serves SECR, ESOS and customer carbon requests.",

    certification_process: [
  "One route for every standard. Application and quotation -> Stage 1 -> Stage 2 -> independent review and decision -> three-year certificate with annual surveillance and recertification in year three. The full flow, who does what and typical timings are on our certification process page (/certification/process).",

  "Already certified elsewhere? A valid, accredited ISO 14001 certificate transfers to TRAIBCERT with its expiry date and audit cycle intact after a free pre-transfer review - see certificate transfer (/resources/certificate-transfer) for the documents to send.",

  "Environmental audit days reflect the risk of your activities as well as headcount: permitted installations, waste operations and construction sites attract more time than offices, because there is more to see and more to evaluate for compliance. Stage 1 can be delivered remotely; Stage 2 and surveillance need to see controls working on site, including temporary construction sites and depots, and groups with similar sites under central control can be sampled.",

  "Your ISO 14001:2015 certificate remains valid, but three dates matter: no new 2015 certificates after 31 October 2027, every certificate transitioned by 30 April 2029, and - because certification bodies had to complete their own transition first - TRAIBCERT is issuing 2026 certificates now. We transition at your next scheduled surveillance or recertification audit, adding the time needed to cover the revised clauses and quoting it before the visit, so there is no extra trip. Organisations holding both ISO 14001 and ISO 9001 can transition both standards in the same audit, which is cheaper than two. A stand-alone transition audit is available for anyone who needs the 2026 certificate early. On a positive decision the certificate is reissued as ISO 14001:2026 with your existing expiry date.",
],
implementation_intro:
  "TRAIBCERT audits and certifies; the system itself is built by your own team or an adviser you appoint. First-time certification typically takes four to nine months depending on the number of sites and the state of existing compliance records; organisations that already hold ISO 9001 are usually quicker because the common elements exist.",

implementation_steps: [
  "Obtain ISO 14001:2026, secure top management commitment and appoint someone to lead the work with authority to reach every site and function in scope.",

  "Carry out a gap review, define the scope and review your context: the environmental conditions that affect you, including climate change, biodiversity, pollution and resource availability, and what regulators, customers, neighbours and lenders expect.",

  "Identify your environmental aspects across the life cycle of your activities, products and services, decide which are significant, and build the register of compliance obligations - permits, consents, waste, packaging, F-gas, COSHH and voluntary commitments - with an owner for each.",

  "Write or update the environmental policy, set measurable objectives for the significant aspects, put operational controls and supplier and contractor criteria in place, establish a process for assessing planned changes before they take effect, and prepare and test emergency arrangements.",

  "Train people at every level so they know the policy, the significant aspects of their own work and what to do when something goes wrong, then run the system for about three months, monitoring key parameters and completing a compliance evaluation against every obligation.",

  "Complete an internal audit with stated objectives, covering every part of the standard and every site in scope.",

  "Hold a management review that examines the audit results, compliance evaluation, monitoring data and objectives and decides what to change.",

  "Apply to TRAIBCERT; after Stage 1, Stage 2 and a positive decision, maintain the system through surveillance and recertification, keeping the compliance register and aspects data current as the business changes.",
],

implementation_transition:
  "For an established ISO 14001:2015 system the transition is a matter of weeks, not months. Revisit your context review so that climate change, biodiversity, pollution and resource availability are visibly considered; check that your aspects register looks along the life cycle; put a simple process in place for assessing changes such as new products, sites, permits or legislation, which is the one genuinely new element; make sure environmental criteria reach the suppliers, contractors and services you buy; and state objectives for your internal audits. A management review that records the transition completes the picture. Our one-day ISO 14001:2026 Transition course walks through each point with worked examples.",

  why_choose_intro: [
  "TRAIBCERT is an accredited, independent certification body with a global clientele and an understanding of its clients' needs. Our environmental auditors have worked in manufacturing, construction, waste, utilities and facilities, and most are qualified across ISO 9001 and ISO 45001 as well, so integrated audits are delivered by one team in one visit. With auditors in the UK, the UAE and India, organisations operating in more than one of those markets hold a single accredited certificate with local site visits and UK-based independent review.",

  "Clients receive a fixed price for the full three-year cycle, a planned route through the ISO 14001:2026 transition timed to a scheduled visit, audit reports that describe findings in terms of your permits, aspects and controls, and a certificate listed on our public register. Where you intend to add ISO 50001 or greenhouse-gas verification, we plan the programme so that the environmental system is reused rather than repeated. Surveillance and expiry dates are protected whether you certify with us first or transfer to us.",
],

industries: [
  "Manufacturing & Supply Chain - permits, waste and packaging obligations",
  "Construction - contractor and framework requirements",
  "Energy & Oil/Gas - high-risk operations and stakeholder scrutiny",
  "Transport & Logistics - fleet emissions and depot controls",
  "Food & Beverage - water, effluent and packaging",
  "Public Sector & Government - estates and public-sector net-zero commitments",
  "Retail & E-Commerce",
  "Technology & SaaS - data-centre energy and e-waste",
  "Healthcare",
  "Education",
  "General / Other Industries - waste and recycling, facilities management and agriculture",
],

who_needs_certification: [
  "Environmental sections of supplier questionnaires from principal contractors, utilities, local authorities and retailers.",
  "Framework and tender criteria that award points for a certified environmental management system.",
  "Permit and consent holders who must demonstrate systematic legal compliance to regulators.",
  "ESG questionnaires from lenders, investors and customers that ask for certified environmental management as evidence.",
  "Organisations preparing for ISO 50001, greenhouse-gas verification or net-zero commitments that need a management backbone.",
],

self_check: [
  "You know your permits, consents and waste duties and have checked compliance in the last year",
  "Your aspects register covers what you buy and what happens to products after use",
  "Climate change and biodiversity have been considered in your context review",
  "Changes such as new processes or sites are assessed before they happen",
  "An emergency drill and an internal audit have been done in the last twelve months",
],

training: "ISO 14001:2026 Transition (1 day), Foundation, Awareness, Internal Auditor, Lead Auditor",

also_need: [
  "ISO 50001:2018",
  "GHG inventory verification",
  "ISO 9001:2026",
  "ISO 45001:2018",
],
    
  },
  

),
  

];

export const standardsBySlug = Object.fromEntries(standards.map((s) => [s.slug, s]));

export const standardsByCategory = (category: StandardCategory) =>
  standards.filter((s) => s.category === category);

export const popularStandards = [
  "iso-9001",
  "iso-27001",
  "iso-14001",
  "iso-45001",
  "cyber-essentials",
  "iso-22000",
]
  // Only include standards that actually exist in the data set, so pages that
  // render popularStandards cannot crash if a slug is missing.
  .map((slug) => standardsBySlug[slug])
  .filter((s): s is Standard => Boolean(s));
