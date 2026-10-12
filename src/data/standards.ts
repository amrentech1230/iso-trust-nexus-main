export type StandardCategory = "iso" | "cyber" | "sustainability" | "inspection";

export type Standard = {
  slug?: string;
  code?: string;
  title?: string;
  category?: StandardCategory;
  tag?: "NEW" | "CURRENT";
  discipline?: string;
  summary?: string;
  whatItIs?: string[];
  important?: string[];
  emsFramework?: string[];
  whoNeedsIt?: string[];
  benefits?: string[];
  certification_process?: string[];
  implementation_intro?: string;
  implementation_steps?: string[];
  implementation_transition?: string;
  benefit_para?: string;
  requirements?: string[];
  training?: string;
  faqs?: { q: string; a: string }[];
  why_choose_intro?: string[];
  industries?: string[];
  who_needs_certification?: string[];
  self_check?: string[];
  also_need?: string[];
  whyitmatters?: string[];
  systemcover? : string[];
  pricing?: string[];
  assessment_process?: string[];
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

  // ── ISO 9001 ──────────────────────────────────────────────────────────────
  base({
    slug: "iso-9001",
    code: "ISO 9001:2015",
    title: "ISO 9001 Quality Management Systems",
    category: "iso",
    discipline: "Quality management",
    summary:
      "ISO 9001:2015 is the world's most widely adopted management system standard, with over one million certificates in force across every sector and country. It sets out the requirements for a quality management system that consistently delivers products and services meeting customer and regulatory requirements, and drives continual improvement. TRAIBCERT provides accredited ISO 9001 certification for organisations of all sizes across the UK, UAE and internationally.",
    whatItIs: [
      "ISO 9001 is the international standard for quality management systems, published by the International Organization for Standardization. The current edition, ISO 9001:2015, uses the high-level structure shared with ISO 14001 and ISO 45001, making integrated management systems straightforward to build and audit. A revision, ISO 9001:2026, is anticipated; TRAIBCERT will transition certificates as soon as the new edition is published.",
      "The standard requires an organisation to understand its context and the needs of interested parties, apply risk-based thinking to its processes, demonstrate leadership commitment, set measurable quality objectives, control its operations and externally provided products and services, monitor and measure performance, and drive continual improvement through internal audit, management review and corrective action.",
      "An ISO 9001 certificate confirms that an accredited, independent certification body has audited the quality management system, found it meets the standard and seen it operating in practice. The certificate is valid for three years with annual surveillance audits and is listed on a public register.",
    ],
    important: [
      "Customer confidence is the primary driver. Buyers in manufacturing, construction, professional services and the public sector routinely require ISO 9001 certification as a condition of tender or framework approval. A certificate removes the need to answer the same quality questions on every questionnaire.",
      "Operational discipline is the internal benefit. The standard's process approach and risk-based thinking reduce defects, rework and complaints by building quality into operations rather than inspecting it in at the end. Organisations consistently report lower cost of poor quality after certification.",
      "Regulatory and legal compliance is supported by the requirement to identify applicable statutory and regulatory requirements and demonstrate they are met. For sectors such as medical devices, aerospace and automotive, ISO 9001 is the baseline on which sector-specific schemes are built.",
    ],
    emsFramework: [
      "ISO 9001 follows the Plan-Do-Check-Act cycle arranged in the Annex SL high-level structure. Clause 4 establishes context; Clause 5 requires leadership and policy; Clause 6 covers planning including risk and opportunity; Clause 7 addresses support -- people, infrastructure, environment, knowledge, communication and documented information; Clause 8 covers operational planning and control including design, external providers and nonconforming outputs; Clause 9 requires performance evaluation through monitoring, internal audit and management review; Clause 10 drives improvement.",
      "The process approach is central: the organisation maps its key processes, defines their inputs, outputs, sequence and interaction, assigns ownership and monitors performance. Risk-based thinking replaces the prescriptive preventive action of earlier editions, asking the organisation to identify what could go wrong and decide how to address it proportionately.",
    ],
    whoNeedsIt: [
      "Organisations tendering for public sector, construction or manufacturing contracts",
      "Businesses whose customers require a certified quality management system",
      "Organisations seeking to reduce defects, rework and customer complaints",
      "Companies building an integrated management system with ISO 14001 or ISO 45001",
    ],
    benefit_para:
      "Winning and retaining contracts is the commercial benefit most organisations cite first: ISO 9001 certification answers the quality section of supplier questionnaires and framework applications in one line. Operational savings follow as the process approach and corrective action cycle reduce rework, waste and complaints.",
    benefits: [
      "Tender and contract access -- certification satisfies quality requirements in public sector, construction, manufacturing and professional services procurement.",
      "Reduced cost of poor quality -- process controls and root-cause corrective action cut defects, rework, warranty claims and customer complaints.",
      "Customer confidence -- an accredited certificate on a public register gives buyers independent assurance without the need for customer audits.",
      "Foundation for integration -- the Annex SL structure means ISO 14001 and ISO 45001 share the same leadership, planning, support and improvement clauses, reducing total audit days.",
    ],
    certification_process: [
      "Application and quotation: we agree the scope, sites and headcount, calculate audit days in line with international rules and provide a fixed price for the full three-year cycle.",
      "Stage 1 audit: a review of your documented system and readiness for Stage 2, typically conducted remotely. We confirm the scope, identify any areas to address before Stage 2 and agree the audit plan.",
      "Stage 2 audit: an on-site audit of the full management system in operation. Findings are classified as major nonconformities, minor nonconformities or observations. A positive decision leads to certification.",
      "Certificate issue: an accredited ISO 9001:2015 certificate valid for three years, listed on our public register and available to share with customers.",
      "Surveillance and recertification: surveillance audits in years one and two maintain the certificate; recertification in year three renews it for a further three-year cycle.",
    ],
    implementation_intro:
      "TRAIBCERT audits and certifies; the management system is built by your own team or an adviser you appoint. First-time certification typically takes three to nine months depending on the size and complexity of the organisation and the maturity of existing processes.",
    implementation_steps: [
      "Obtain ISO 9001:2015, secure top management commitment and appoint a management representative with authority across all functions and sites in scope.",
      "Define the scope of the quality management system, carry out a gap assessment against the standard and identify the processes that need to be documented or improved.",
      "Map the key processes, define their sequence and interaction, assign process owners and establish the controls, monitoring and measurement needed for each.",
      "Write or update the quality policy, set measurable quality objectives aligned to the strategic direction of the organisation and plan how they will be achieved.",
      "Put in place the support elements: competence records, awareness training, communication plan, document control and records management.",
      "Run the system for at least three months, collecting monitoring data, handling nonconformities and customer complaints through the corrective action process.",
      "Complete an internal audit covering all clauses and all processes in scope, and hold a management review that examines the evidence and decides on improvements.",
      "Apply to TRAIBCERT for Stage 1 and Stage 2 audits.",
    ],
    implementation_transition:
      "Organisations holding ISO 9001:2008 certificates completed transition to the 2015 edition by September 2018. When ISO 9001:2026 is published, TRAIBCERT will provide transition guidance and schedule transition audits at the next surveillance or recertification visit.",
    why_choose_intro: [
      "TRAIBCERT is an accredited, independent certification body with auditors experienced across manufacturing, construction, professional services, technology and the public sector. Integrated audits combining ISO 9001 with ISO 14001 and ISO 45001 are delivered by one team in one visit, reducing cost and disruption.",
      "Clients receive a fixed price for the full three-year cycle, clear audit reports with findings described in terms of their own processes, and a certificate listed on our public register. Certificate transfer from another accredited body is available with the existing expiry date and cycle preserved.",
    ],
    industries: [
      "Manufacturing & Supply Chain -- product quality, supplier control and customer requirements",
      "Construction -- framework and principal contractor requirements",
      "Professional Services -- client confidence and tender qualification",
      "Technology & SaaS -- software development, service delivery and customer satisfaction",
      "Healthcare -- patient safety and regulatory compliance",
      "Food & Beverage -- product safety and customer requirements",
      "Public Sector & Government -- procurement and service delivery",
      "Education -- student and stakeholder satisfaction",
      "Retail & E-Commerce -- product quality and customer experience",
      "Transport & Logistics -- service reliability and customer requirements",
    ],
    who_needs_certification: [
      "Organisations required to hold ISO 9001 as a condition of tender, framework or contract.",
      "Businesses whose customers conduct supplier audits and would accept a certificate in place.",
      "Organisations seeking to reduce the cost of poor quality through a structured process approach.",
      "Companies building an integrated management system as a foundation for ISO 14001 or ISO 45001.",
    ],
    self_check: [
      "Top management is visibly committed and has signed a quality policy",
      "Key processes are mapped with owners, inputs, outputs and performance measures",
      "Customer requirements and applicable regulatory requirements are identified",
      "Nonconformities and customer complaints are handled through a corrective action process",
      "An internal audit and management review have been completed in the last twelve months",
    ],
    training: "ISO 9001:2015 Foundation, Awareness, Internal Auditor, Lead Auditor",
    also_need: ["ISO 14001:2015", "ISO 45001:2018", "ISO 27001:2022", "ISO 13485"],
    faqs: [
      {
        q: "How long does ISO 9001 certification take?",
        a: "Most organisations achieve certification in three to nine months. The main variable is how mature your existing processes are and how quickly documented information and records can be built up.",
      },
      {
        q: "Do we need a consultant to get ISO 9001 certified?",
        a: "No. Many organisations build their own system using the standard and our guidance. TRAIBCERT certifies; we do not consult on the systems we audit, which protects impartiality.",
      },
      {
        q: "Can ISO 9001 be audited together with ISO 14001 and ISO 45001?",
        a: "Yes. The shared Annex SL structure means the common clauses -- leadership, planning, support, performance evaluation and improvement -- can be audited once, reducing total audit days significantly.",
      },
    ],
  }),

  // ── ISO 14001 ─────────────────────────────────────────────────────────────
  base({
    slug: "iso-14001",
    code: "ISO 14001:2015",
    title: "ISO 14001 Environmental Management Systems",
    category: "iso",
    tag: "CURRENT",
    discipline: "Environmental management",
    summary:
      "Over half a million organisations worldwide are certified to ISO 14001, and in the UK, it has become the standard answer to the environmental section of every supplier questionnaire, from construction frameworks to retailer codes. ISO 14001:2015 is the current edition. It widens the view an organisation must take of the environment -- climate, biodiversity, pollution and resources -- and asks for discipline in managing change and controlling suppliers. TRAIBCERT certifies to the current edition and quotes the full three-year cycle as one fixed price.",
    whatItIs: [
      "ISO 14001 is the international standard for environmental management systems, published by the International Organization for Standardization. It sets out how an organisation identifies the ways its activities, products and services interact with the environment, meets its legal and other obligations, controls the aspects that matter and improves its environmental performance over time.",
      "The standard uses the Annex SL high-level structure shared with ISO 9001 and ISO 45001, so leadership, competence, documents, internal audit and management review are common elements that can be run once for all three. Two elements are distinctive to environmental management: the aspects register and the register of compliance obligations.",
      "An ISO 14001 certificate confirms that an accredited, independent certification body has audited the environmental management system covering the scope on the certificate, found that it meets the standard and seen it operating on site. It is valid for three years with annual surveillance audits and is listed on a public register.",
    ],
    important: [
      "Compliance is the first reason. Permits, consents, waste duty-of-care, packaging and producer-responsibility obligations all need to be identified, met and shown to be met. ISO 14001 provides the register, the evaluation and the evidence, and certified organisations report fewer regulatory interventions.",
      "Cost is the second. Structured attention to energy, water, materials and waste typically finds savings in the first year that exceed the cost of certification, and the same data feeds carbon reporting. Market access is the third: principal contractors, local authorities, utilities and retailers now require environmental certification of their supply chains.",
      "Reputation completes the case. A pollution incident, a prosecution or an unsupported environmental claim travels quickly. For a board, the certificate is evidence that environmental risk is managed with the same discipline as financial risk.",
    ],
    emsFramework: [
      "An environmental management system follows the Plan-Do-Check-Act cycle: understand your environmental position and plan what to control, run the controls, check performance and compliance, and act on the results. ISO 14001 arranges that cycle in the harmonised structure shared with ISO 9001 and ISO 45001.",
      "Two elements are distinctive to environmental management. The first is the aspects register: a record of how your activities, products and services interact with the environment across their life cycle. The second is the register of compliance obligations: the permits, consents, laws and voluntary commitments that apply to you, each with an owner and a known status.",
      "Around them sit the common elements: leadership commitment, risk-based planning, operational controls, supplier and contractor criteria, emergency preparedness, performance monitoring, compliance evaluation, internal audit and management review.",
    ],
    whoNeedsIt: [
      "Manufacturers, construction and engineering businesses",
      "Organisations with permits, consents or waste obligations",
      "Suppliers asked to evidence environmental credentials",
      "Organisations building an ESG or net-zero programme",
    ],
    benefit_para:
      "Systematic legal compliance is the benefit regulators notice: every permit, consent, duty-of-care and producer-responsibility obligation is identified, evaluated and evidenced, which reduces the risk of enforcement. Resource and waste savings are the benefit finance directors notice; structured attention to energy, water, raw materials and waste typically pays for certification in the first year.",
    benefits: [
      "Tender and framework points -- principal contractors, local authorities, utilities and retailers award points for, or require, a certified environmental system.",
      "ESG and lender evidence -- investors, lenders and customers increasingly ask for certified environmental management in ESG questionnaires and sustainability-linked finance conditions.",
      "Incident and reputational protection -- operational controls, emergency preparedness and management of change reduce the likelihood of spills, breaches and unsupported claims.",
      "A base for net zero -- aspects data, compliance registers and monitoring systems are the foundation for ISO 50001, greenhouse-gas verification and credible net-zero plans.",
    ],
    certification_process: [
      "Application and quotation: we agree the scope, sites and activities, calculate audit days reflecting the environmental risk of your operations and provide a fixed price for the full three-year cycle.",
      "Stage 1 audit: a review of your documented system, aspects register, compliance obligations register and readiness for Stage 2, typically conducted remotely.",
      "Stage 2 audit: an on-site audit of the full environmental management system in operation, including verification of compliance with applicable legal obligations.",
      "Certificate issue: an accredited ISO 14001 certificate valid for three years, listed on our public register.",
      "Surveillance and recertification: surveillance audits in years one and two; recertification in year three.",
    ],
    implementation_intro:
      "TRAIBCERT audits and certifies; the system itself is built by your own team or an adviser you appoint. First-time certification typically takes four to nine months depending on the number of sites and the state of existing compliance records. Organisations that already hold ISO 9001 are usually quicker because the common elements exist.",
    implementation_steps: [
      "Obtain ISO 14001:2015, secure top management commitment and appoint someone to lead the work with authority to reach every site and function in scope.",
      "Carry out a gap review, define the scope and review your context: the environmental conditions that affect you and what regulators, customers, neighbours and lenders expect.",
      "Identify your environmental aspects across the life cycle of your activities, products and services, decide which are significant, and build the register of compliance obligations -- including permits, consents, waste, packaging, F-gas, COSHH and voluntary commitments, with an owner for each.",
      "Write or update the environmental policy, set measurable objectives for the significant aspects, put operational controls in place and prepare and test emergency arrangements.",
      "Train people at every level, then run the system for about three months, monitoring key parameters and completing a compliance evaluation.",
      "Complete an internal audit covering every part of the standard and every site in scope.",
      "Hold a management review that examines the audit results, compliance evaluation, monitoring data and objectives.",
      "Apply to TRAIBCERT; after Stage 1, Stage 2 and a positive decision, maintain the system through surveillance and recertification.",
    ],
    implementation_transition:
      "Your ISO 14001:2015 certificate remains valid, but no new 2015 certificates can be issued after 31 October 2027 and every certificate must transition by 30 April 2029. TRAIBCERT is issuing 2026 certificates now. We transition at your next scheduled surveillance or recertification audit, adding the time needed to cover the revised clauses and quoting it before the visit, so there is no extra trip. Organisations holding both ISO 14001 and ISO 9001 can transition both standards in the same audit. A stand-alone transition audit is available for anyone who needs the 2026 certificate early. On a positive decision, the certificate is reissued as ISO 14001:2026 with its existing expiry date.",
    why_choose_intro: [
      "TRAIBCERT is an accredited, independent certification body. Our environmental auditors have worked in manufacturing, construction, waste, utilities and facilities, and most are qualified across ISO 9001 and ISO 45001 as well, so integrated audits are delivered by one team in one visit.",
      "Clients receive a fixed price for the full three-year cycle, audit reports that describe findings in terms of their permits, aspects and controls, and a certificate listed on our public register.",
    ],
    industries: [
      "Manufacturing & Supply Chain -- permits, waste and packaging obligations",
      "Construction -- contractor and framework requirements",
      "Energy & Oil/Gas -- high-risk operations and stakeholder scrutiny",
      "Transport & Logistics -- fleet emissions and depot controls",
      "Food & Beverage -- water, effluent and packaging",
      "Public Sector & Government -- estates and net-zero commitments",
      "Retail & E-Commerce",
      "Technology & SaaS -- data-centre energy and e-waste",
      "Healthcare",
      "Education",
    ],
    who_needs_certification: [
      "Environmental sections of supplier questionnaires from principal contractors, utilities, local authorities and retailers.",
      "Framework and tender criteria that award points for a certified environmental management system.",
      "Permit and consent holders who must demonstrate systematic legal compliance to regulators.",
      "ESG questionnaires from lenders, investors and customers that ask for certified environmental management.",
    ],
    self_check: [
      "You know your permits, consents and waste duties and have checked compliance in the last year",
      "Your aspects register covers what you buy and what happens to products after use",
      "Changes such as new processes or sites are assessed before they happen",
      "An emergency drill and an internal audit have been done in the last twelve months",
    ],
    training: "ISO 14001:2015 Foundation, Awareness, Internal Auditor, Lead Auditor",
    also_need: ["ISO 50001:2018", "ISO 9001:2015", "ISO 45001:2018"],
    faqs: [
      {
        q: "How long does ISO 14001 certification take?",
        a: "Four to nine months for most organisations, with the system running for about three months before Stage 1 so that monitoring, compliance evaluation, internal audit and management review records exist.",
      },
      {
        q: "Can ISO 14001 be certified with ISO 9001 and ISO 45001?",
        a: "Yes. Integrated audits share the common clauses and reduce total audit days.",
      },
      {
        q: "Can we transfer an existing ISO 14001 certificate to TRAIBCERT?",
        a: "Yes. A valid, accredited certificate transfers with its expiry date and cycle intact after a free pre-transfer review.",
      },
    ],
  }),

  // ── ISO 45001 ─────────────────────────────────────────────────────────────
  base({
    slug: "iso-45001",
    code: "ISO 45001:2018",
    title: "ISO 45001 Occupational Health & Safety Management System",
    category: "iso",
    discipline: "Occupational health & safety",
    summary:
      "ISO 45001:2018 is the international standard for occupational health and safety management systems. It replaced OHSAS 18001 in 2018 and provides a framework for eliminating hazards, reducing OH&S risks, taking advantage of OH&S opportunities and addressing nonconformities. TRAIBCERT provides accredited ISO 45001 certification for organisations across the UK, UAE and internationally.",
    whatItIs: [
      "ISO 45001:2018 is the first truly international standard for occupational health and safety management systems, published by the International Organization for Standardization. It replaced OHSAS 18001 and uses the Annex SL high-level structure shared with ISO 9001 and ISO 14001, enabling straightforward integration.",
      "The standard requires organisations to identify hazards, assess OH&S risks and opportunities, establish controls using the hierarchy of controls, meet legal and other requirements, consult and involve workers, and drive continual improvement in OH&S performance.",
      "An ISO 45001 certificate demonstrates to regulators, clients and workers that the organisation manages health and safety systematically and is committed to preventing work-related injury and ill health.",
    ],
    important: [
      "Legal compliance is the foundation. Organisations must identify applicable health and safety legislation, evaluate compliance and demonstrate that legal requirements are met. A certified system provides the evidence trail regulators and enforcement authorities expect.",
      "Worker protection is the purpose. The standard's emphasis on worker consultation and participation, hazard elimination and the hierarchy of controls drives genuine improvement in workplace safety rather than paperwork compliance.",
      "Commercial access follows. Principal contractors, clients in construction, manufacturing and facilities management, and public sector buyers increasingly require ISO 45001 certification as a condition of contract.",
    ],
    emsFramework: [
      "ISO 45001 follows the Plan-Do-Check-Act cycle in the Annex SL structure. The distinctive elements are hazard identification and OH&S risk assessment, the hierarchy of controls (elimination, substitution, engineering controls, administrative controls, PPE), worker consultation and participation, and management of change.",
      "The standard places particular emphasis on leadership and worker participation: top management must demonstrate active commitment, and workers at all levels must be consulted on hazard identification, risk assessment and incident investigation. This distinguishes ISO 45001 from its predecessor OHSAS 18001.",
    ],
    whoNeedsIt: [
      "Construction, manufacturing and engineering organisations",
      "Organisations required to hold OH&S certification by clients or principal contractors",
      "Businesses seeking to reduce workplace incidents, injuries and ill health",
      "Organisations integrating health and safety with ISO 9001 and ISO 14001",
    ],
    benefit_para:
      "Reduced workplace incidents and the associated costs -- lost time, investigation, legal liability and reputational damage -- are the primary operational benefit. Contract access in construction, manufacturing and facilities management is the commercial benefit most organisations cite.",
    benefits: [
      "Reduced workplace incidents -- systematic hazard identification, risk assessment and control reduce the frequency and severity of work-related injuries and ill health.",
      "Legal compliance evidence -- the compliance evaluation process provides documented evidence that applicable health and safety legislation is identified and met.",
      "Contract access -- certification satisfies OH&S requirements in construction, manufacturing, facilities and public sector procurement.",
      "Integration efficiency -- the Annex SL structure means ISO 45001 shares common clauses with ISO 9001 and ISO 14001, reducing total audit days for integrated systems.",
    ],
    certification_process: [
      "Application and quotation: we agree the scope, sites and headcount, calculate audit days and provide a fixed price for the full three-year cycle.",
      "Stage 1 audit: review of documented system, hazard register, risk assessments and legal register, typically conducted remotely.",
      "Stage 2 audit: on-site audit of the full OH&S management system in operation, including observation of workplace controls and worker consultation processes.",
      "Certificate issue: accredited ISO 45001:2018 certificate valid for three years.",
      "Surveillance and recertification: annual surveillance audits; recertification in year three.",
    ],
    implementation_intro:
      "First-time certification typically takes four to nine months. Organisations already holding OHSAS 18001 or ISO 9001 are usually quicker because many of the common elements already exist.",
    implementation_steps: [
      "Obtain ISO 45001:2018, secure top management commitment and appoint an OH&S lead with authority across all sites and functions in scope.",
      "Define the scope, carry out a gap assessment and review the organisational context including applicable legal and other requirements.",
      "Identify hazards across all activities, assess OH&S risks and opportunities, and establish controls using the hierarchy of controls.",
      "Write or update the OH&S policy, set measurable OH&S objectives and plan how they will be achieved.",
      "Establish worker consultation and participation processes, competence and awareness programmes, and emergency preparedness arrangements.",
      "Run the system for at least three months, investigating incidents and near misses through the corrective action process.",
      "Complete an internal audit and management review.",
      "Apply to TRAIBCERT for Stage 1 and Stage 2 audits.",
    ],
    implementation_transition:
      "Organisations that held OHSAS 18001 completed transition to ISO 45001 by March 2021. The key changes were the addition of organisational context, worker participation requirements and the explicit hierarchy of controls.",
    why_choose_intro: [
      "TRAIBCERT auditors have practical experience in construction, manufacturing, facilities and logistics -- the sectors where OH&S risk is highest. Integrated audits with ISO 9001 and ISO 14001 are delivered by one team in one visit.",
      "Clients receive a fixed price for the full three-year cycle and audit reports that describe findings in terms of their own hazards, controls and legal requirements.",
    ],
    industries: [
      "Construction -- principal contractor and client requirements",
      "Manufacturing & Supply Chain -- workplace safety and legal compliance",
      "Energy & Oil/Gas -- high-hazard operations",
      "Transport & Logistics -- driver and warehouse safety",
      "Facilities Management -- contractor and client requirements",
      "Healthcare -- staff and patient safety",
      "Public Sector & Government -- duty of care and procurement",
    ],
    who_needs_certification: [
      "Organisations required to hold ISO 45001 as a condition of contract or framework.",
      "Businesses seeking to reduce workplace incidents and the associated legal and financial exposure.",
      "Organisations building an integrated management system with ISO 9001 and ISO 14001.",
    ],
    self_check: [
      "Hazards have been identified for all activities, including contractors and visitors",
      "Risk assessments are in place and controls follow the hierarchy",
      "Applicable health and safety legislation has been identified and compliance evaluated",
      "Workers are consulted on hazard identification and incident investigation",
      "An internal audit and management review have been completed in the last twelve months",
    ],
    training: "ISO 45001:2018 Foundation, Awareness, Internal Auditor, Lead Auditor",
    also_need: ["ISO 9001:2015", "ISO 14001:2015", "ISO 50001:2018"],
    faqs: [
      {
        q: "What replaced OHSAS 18001?",
        a: "ISO 45001:2018 replaced OHSAS 18001. All OHSAS 18001 certificates expired by March 2021.",
      },
      {
        q: "Can ISO 45001 be audited with ISO 9001 and ISO 14001?",
        a: "Yes. The shared Annex SL structure means the common clauses can be audited once, significantly reducing total audit days.",
      },
    ],
    systemcover : []
  }),
  // ── ISO 22000 ─────────────────────────────────────────────────────────────
  base({
    slug: "iso-22000",
    code: "ISO 22000:2018",
    title: "ISO 22000 Food Safety Management Systems",
    category: "iso",
    discipline: "Food safety management",
    summary:
      "FOOD SAFETY ISO 22000:2018 Certification ISO 22000:2018 is the international standard for food safety management systems, combining HACCP principles with management-system discipline. An accredited certificate proves that hazards are controlled across your products, processes and sites. More than 40,000 organisations hold it, and manufacturers, food-service operators, wholesalers and importers ask for it from suppliers anywhere in the food chain.",
    whatItIs: [
      "ISO 22000 applies to any organisation in the food chain, from primary production to catering. It combines interactive communication, system management, prerequisite programmes and the internationally agreed HACCP principles. Certificates cover the products, processes and sites in scope, last three years with annual surveillance and appear on a public register. It is also the base text for sector schemes that add prerequisite requirements.",
    ],
    important: [
      // "Customer and retailer requirements drive most certifications. Major retailers, food service operators and brand owners require their suppliers to hold a recognised food safety certification. ISO 22000 is accepted globally and satisfies requirements across diverse markets.",
      // "Regulatory compliance is supported by the requirement to identify applicable food safety legislation and demonstrate that legal requirements are met through the management system.",
      // "Brand protection is the risk management benefit. A food safety incident -- contamination, recall or illness -- causes immediate and lasting reputational damage. A certified system with documented controls and traceability reduces both the likelihood and the impact of such events.",
    ],
    whyitmatters:[
      "Breadth is its strength: primary producers, ingredient and packaging suppliers, hauliers, storage operators and contract caterers all fit one standard. Certified organisations have validated HACCP plans, tested traceability and recall, and documented supplier approval, so they face fewer customer audits, fewer holds and withdrawals, faster onboarding and systematic due-diligence evidence for food regulators. One accredited certificate is routinely accepted in place of several customer audits each year.",
    ],
    systemcover: [
      "Context, scope and communication along the food chain",
      "Leadership and a competent food safety team",
      "Prerequisite programmes: hygiene, pest control, allergens, maintenance and supplier control",
      "Hazard analysis with critical control points and validated limits",
      "Traceability, emergency preparedness and tested product withdrawal",
      "Verification, internal audit, management review and improvement",
    ],
    emsFramework: [
    ],

    benefit_para:
      "Retailer and customer access is the primary commercial benefit: ISO 22000 certification satisfies food safety requirements in major retail and food service supply chains. Reduced risk of food safety incidents, recalls and regulatory action is the operational benefit.",
    benefits: [
      "Fewer customer audits — One accredited certificate replaces many supplier audits from manufacturers, food-service operators and wholesalers.",
      "Fewer holds and recalls — Validated HACCP, verified prerequisites and tested traceability reduce the costliest events in a food business.",
      "Evidence of due diligence — Systematic records support food regulators and any due-diligence defence.",
      "Whole-chain coverage — One standard covers manufacturing, storage, transport and catering, and integrates with quality and environmental systems.",
    ],
    certification_process: [
      "Shared five-step strip (Get started · Assessment · Certification audit · Certification ",
      "Maintenance) linking to /certification/process; ",
      "Holding a certificate elsewhere Certificate transfer (/resources/certificate-transfer)",
    ],
    implementation_intro:
      "",
    implementation_steps: [
      "Appoint the food safety team, secure commitment and agree the scope of products and sites.",
      "Establish and verify prerequisite programmes: cleaning, pest control, hygiene, allergens and suppliers.",
      "Describe products, confirm flow diagrams on site, analyse hazards and validate control measures.",
      "Operate for about three months with monitoring records, a mock recall, internal audit and review.",
      "Apply for a quotation; complete Stage 1, Stage 2 on site and the certification decision.",
    ],
    whoNeedsIt: [
      "Suppliers of ingredients, packaging, storage and transport asked for certification by food manufacturers, food-service operators and wholesalers; caterers and hospitality groups evidencing due diligence; exporters facing import-market requirements; and groups wanting one standard across manufacturing, logistics and service sites.",
      "one standard across manufacturing, logistics and service sites.Industries: Food & drink manufacturing · Ingredient & packaging suppliers · Contract catering · Storage & distribution · Cold chain · Retail own-label · Hospital catering · School catering · Agriculture · Equipment & chemical suppliers",
    ],
    pricing: [
      "Price follows audit days, set by headcount, the number of distinct HACCP studies, product risk category, production sites and shifts with critical-control monitoring, and integration with quality or environmental audits. Send your details and a sector specialist replies within one working day with a fixed quotation for the whole cycle.",
    ],
    implementation_transition:
      "",
    why_choose_intro: [
      "",
    ],
    industries: [
     
    ],
    who_needs_certification: [
      
    ],
    self_check: [
      
    ],
    training: "ISO 22000:2018 Foundation, Awareness, Internal Auditor, Lead Auditor",
    also_need: ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018"],
    faqs: [
      {
        q: "Can a small catering business be certified?",
        a: "Yes. Audit days scale with headcount and complexity, and a single kitchen has proportionately simple prerequisite programmes and a simple HACCP plan.",
      },
      {
        q: "We are a haulier or cold store. Do we need a HACCP plan?",
        a: "Yes, proportionate to your activities. Storage and transport hazards are mainly temperature, contamination, allergen segregation and pest control.",
      },
      {
        q: "How long does certification take?",
        a: "Five to nine months for most first-time applicants, with the system operating for about three months before Stage 1 so monitoring, mock-recall and audit records exist.",
      },
      {
        q: "Can it be audited with ISO 9001 and ISO 14001?",
        a: "Yes. Shared structure means quality, environmental and food safety requirements are audited in one programme with one management review.",
      },
    ],
  }),

  // ── ISO 10002 ─────────────────────────────────────────────────────────────
  base({
    slug: "iso-10002",
    code: "ISO 10002:2018",
    title: "ISO 10002 Customer Satisfaction",
    category: "iso",
    discipline: "Customer satisfaction management",
    summary:
      "ISO 10002:2018 provides guidance for the process of handling complaints related to products and services within an organisation, including planning, design, operation, maintenance and improvement. It is applicable to organisations of all sizes and in all sectors. TRAIBCERT provides ISO 10002 certification for organisations seeking to demonstrate a systematic and transparent approach to customer complaint handling.",
    whatItIs: [
      "ISO 10002:2018 is the international standard for customer satisfaction -- guidelines for complaints handling in organisations. It provides a framework for receiving, evaluating and resolving customer complaints in a way that is visible, accessible, responsive, objective, confidential, customer-focused and accountable.",
      "The standard is designed to be used alongside ISO 9001 and complements the customer focus and customer satisfaction requirements of the quality management system standard. It can be implemented as a standalone system or integrated within an existing ISO 9001 framework.",
      "Certification to ISO 10002 demonstrates to customers, regulators and stakeholders that the organisation takes complaints seriously, handles them consistently and uses them as a source of improvement.",
    ],
    important: [
      "Customer retention is the business case. Research consistently shows that customers who have a complaint handled well are more loyal than those who never complained. A certified complaints handling process turns negative experiences into retention opportunities.",
      "Regulatory requirements in financial services, utilities and public services increasingly mandate formal complaints handling processes. ISO 10002 provides a recognised framework that satisfies regulatory expectations.",
      "Continuous improvement is the operational benefit. Complaints data, analysed systematically, identifies recurring product and service failures that internal quality controls may not detect.",
    ],
    emsFramework: [
      "ISO 10002 establishes a complaints handling process covering: commitment and policy, objectives, activities (receiving, acknowledging, assessing, investigating and responding to complaints), maintenance and improvement. The process must be visible to customers, accessible through multiple channels and free of charge.",
      "The standard requires top management commitment, a complaints handling policy, designated responsibility, trained staff, documented procedures and regular review of complaints data to identify trends and drive improvement.",
    ],
    whoNeedsIt: [
      "Financial services, utilities and public sector organisations with regulatory complaints handling requirements",
      "Retail, e-commerce and consumer-facing businesses",
      "Organisations seeking to improve customer retention and satisfaction",
      "Businesses integrating complaints handling with ISO 9001",
    ],
    benefit_para:
      "Improved customer retention and satisfaction scores are the primary benefits. A transparent, accessible and responsive complaints process converts dissatisfied customers into loyal ones and provides data to prevent recurrence.",
    benefits: [
      "Customer retention -- effective complaint resolution retains customers who would otherwise leave without complaint.",
      "Regulatory compliance -- satisfies formal complaints handling requirements in regulated sectors.",
      "Improvement data -- complaints analysis identifies recurring failures that drive product and service improvement.",
      "Reputation -- a certified complaints process demonstrates commitment to customer service to prospective customers.",
    ],
    certification_process: [
      "Application and quotation: we agree the scope and provide a fixed price for the audit programme.",
      "Stage 1 audit: review of the complaints handling process documentation and readiness.",
      "Stage 2 audit: on-site audit verifying that the complaints handling process operates as documented.",
      "Certificate issue: ISO 10002:2018 certificate valid for three years.",
      "Surveillance and recertification: annual surveillance; recertification in year three.",
    ],
    implementation_intro:
      "ISO 10002 implementation is typically straightforward for organisations with existing customer service processes. The main work is documenting the complaints handling process, establishing accessibility and ensuring systematic analysis of complaints data.",
    implementation_steps: [
      "Obtain ISO 10002:2018 and secure top management commitment to a customer-focused complaints handling policy.",
      "Design the complaints handling process: how complaints are received, acknowledged, assessed, investigated and resolved.",
      "Establish accessibility: ensure customers can submit complaints through multiple channels at no cost.",
      "Train staff responsible for handling complaints in the process and in customer communication.",
      "Implement the process and collect complaints data for at least three months.",
      "Analyse complaints data to identify trends and drive improvement.",
      "Complete an internal audit and management review.",
      "Apply to TRAIBCERT for certification.",
    ],
    implementation_transition:
      "ISO 10002:2018 updated the 2014 edition with alignment to the ISO 9001:2015 structure and strengthened requirements for objectivity and confidentiality.",
    why_choose_intro: [
      "TRAIBCERT provides ISO 10002 certification for organisations across retail, financial services, utilities and the public sector. Our auditors assess the effectiveness of the complaints handling process, not just its documentation.",
      "Clients receive a fixed price for the full three-year cycle and practical audit findings that help improve the complaints process.",
    ],
    industries: [
      "Banking & Financial Services -- regulatory complaints handling requirements",
      "Retail & E-Commerce -- consumer complaint management",
      "Public Sector & Government -- citizen complaint handling",
      "Technology & SaaS -- customer support and service management",
      "Healthcare -- patient complaint handling",
      "Education -- student and parent complaint processes",
    ],
    who_needs_certification: [
      "Organisations in regulated sectors with mandatory complaints handling requirements.",
      "Consumer-facing businesses seeking to improve customer retention through effective complaint resolution.",
      "Organisations integrating complaints handling with an ISO 9001 quality management system.",
    ],
    self_check: [
      "A complaints handling policy is in place and communicated to customers",
      "Customers can submit complaints through multiple accessible channels at no cost",
      "All complaints are acknowledged, assessed and responded to within defined timeframes",
      "Complaints data is analysed regularly to identify trends and drive improvement",
      "An internal audit and management review have been completed in the last twelve months",
    ],
    training: "ISO 10002:2018 Awareness, Internal Auditor",
    also_need: ["ISO 9001:2015", "ISO 20000-1:2018"],
    faqs: [
      {
        q: "Can ISO 10002 be integrated with ISO 9001?",
        a: "Yes. ISO 10002 is designed to complement ISO 9001 and can be audited as part of an integrated management system audit.",
      },
    ],
  }),
  // ── ISO 20000-1 ───────────────────────────────────────────────────────────
  base({
    slug: "iso-20000-1",
    code: "ISO 20000-1:2018",
    title: "ISO 20000-1 IT Service Management System",
    category: "iso",
    discipline: "IT service management",
    summary:
      "ISO/IEC 20000-1:2018 is the international standard for IT service management systems. It specifies requirements for an organisation to establish, implement, maintain and continually improve a service management system to plan, design, transition, deliver and improve services to meet agreed service requirements. TRAIBCERT provides accredited ISO 20000-1 certification for IT service providers across the UK, UAE and internationally.",
    whatItIs: [
      "ISO/IEC 20000-1:2018 is the international standard for service management systems, published jointly by ISO and IEC. It applies to any organisation that delivers IT services -- internal IT departments, managed service providers, cloud service providers and outsourced IT operations. The 2018 edition adopted the Annex SL high-level structure, aligning it with ISO 9001, ISO 14001 and ISO 27001.",
      "The standard covers the full service lifecycle: service planning, design and transition, delivery, resolution and relationship management. It requires organisations to define the scope of the service management system, establish service level agreements, manage incidents, problems, changes, releases and configurations, and continually improve service quality.",
      "An ISO 20000-1 certificate demonstrates to customers and procurement teams that IT services are delivered through a managed, audited and continually improving service management system.",
    ],
    important: [
      "Customer and procurement requirements drive most certifications. Government departments, financial services firms and large enterprises increasingly require their IT service providers to hold ISO 20000-1 certification as evidence of service management maturity.",
      "Operational discipline is the internal benefit. The standard's requirements for incident, problem, change and configuration management reduce service disruptions, improve resolution times and prevent recurring incidents.",
      "Alignment with ITIL is a practical benefit. ISO 20000-1 is aligned with ITIL best practice, so organisations already using ITIL processes have a clear path to certification.",
    ],
    emsFramework: [
      "ISO 20000-1 organises service management requirements into service management system requirements (governance, planning, support, performance evaluation, improvement) and service delivery requirements (service planning, design and transition, supply and demand, resolution, relationship management).",
      "The service management system provides the governance framework; the service delivery requirements specify what must be managed: service level agreements, capacity, availability, service continuity, incident management, service request management, problem management, change management, release management, configuration management, and relationship and supplier management.",
    ],
    whoNeedsIt: [
      "IT managed service providers and outsourced IT operations",
      "Internal IT departments serving large organisations",
      "Cloud service providers and SaaS companies",
      "IT service providers tendering for government or financial services contracts",
    ],
    benefit_para:
      "Contract access in government and financial services procurement is the primary commercial benefit. Operational improvements in incident resolution, change success rates and service availability are the internal benefits.",
    benefits: [
      "Contract access -- certification satisfies IT service management requirements in government, financial services and enterprise procurement.",
      "Reduced service disruptions -- structured incident, problem and change management reduces the frequency and impact of service outages.",
      "Customer confidence -- an accredited certificate demonstrates service management maturity to existing and prospective customers.",
      "ITIL alignment -- the standard aligns with ITIL best practice, providing a certification framework for organisations already using ITIL processes.",
    ],
    certification_process: [
      "Application and quotation: we agree the scope of the service management system and the services included, calculate audit days and provide a fixed price.",
      "Stage 1 audit: review of the service management system documentation, service level agreements and process documentation.",
      "Stage 2 audit: on-site audit verifying that service management processes operate as documented.",
      "Certificate issue: accredited ISO 20000-1:2018 certificate valid for three years.",
      "Surveillance and recertification: annual surveillance; recertification in year three.",
    ],
    implementation_intro:
      "First-time certification typically takes four to nine months. Organisations already using ITIL processes are usually quicker because the service management processes exist and need to be documented and formalised.",
    implementation_steps: [
      "Obtain ISO 20000-1:2018, secure top management commitment and define the scope of the service management system.",
      "Identify the services in scope and establish service level agreements with customers.",
      "Document and implement the required service management processes: incident, problem, change, release, configuration, capacity, availability, continuity and relationship management.",
      "Establish the service management system governance: policy, objectives, roles, responsibilities and documented information.",
      "Run the processes for at least three months, collecting performance data and handling incidents and changes through the documented processes.",
      "Complete an internal audit covering all clauses and processes in scope.",
      "Hold a management review and apply to TRAIBCERT.",
    ],
    implementation_transition:
      "Organisations holding ISO 20000-1:2011 certificates completed transition to the 2018 edition by September 2021. The key changes were adoption of the Annex SL structure and strengthened requirements for service planning and supplier management.",
    why_choose_intro: [
      "TRAIBCERT auditors have experience in IT service management across managed services, cloud operations and internal IT departments. We assess the effectiveness of service management processes, not just their documentation.",
      "Clients receive a fixed price for the full three-year cycle and audit reports that describe findings in terms of their own service management processes and service level agreements.",
    ],
    industries: [
      "Technology & SaaS -- managed service providers and cloud operations",
      "Banking & Financial Services -- IT service management for regulated environments",
      "Public Sector & Government -- IT service delivery for government departments",
      "Healthcare -- clinical IT systems and service management",
      "Retail & E-Commerce -- e-commerce platform operations",
    ],
    who_needs_certification: [
      "IT service providers required to hold ISO 20000-1 certification by government or enterprise customers.",
      "Managed service providers seeking to differentiate on service management maturity.",
      "Internal IT departments seeking to formalise and improve service delivery.",
    ],
    self_check: [
      "Service level agreements are in place for all services in scope",
      "Incident, problem, change and configuration management processes are documented and operating",
      "Service performance is monitored and reported against agreed targets",
      "Supplier management processes are in place for all external service providers",
      "An internal audit and management review have been completed in the last twelve months",
    ],
    training: "ISO 20000-1:2018 Foundation, Awareness, Internal Auditor, Lead Auditor",
    also_need: ["ISO 27001:2022", "ISO 9001:2015", "ISO 22301:2019"],
    faqs: [
      {
        q: "What is the relationship between ISO 20000-1 and ITIL?",
        a: "ISO 20000-1 specifies what must be managed; ITIL provides guidance on how to manage it. Organisations using ITIL processes have a clear path to ISO 20000-1 certification.",
      },
      {
        q: "Does ISO 20000-1 apply to cloud service providers?",
        a: "Yes. The standard applies to any organisation delivering IT services, including cloud service providers, SaaS companies and managed service providers.",
      },
    ],
  }),

  // ── ISO 22301 ─────────────────────────────────────────────────────────────
  base({
    slug: "iso-22301",
    code: "ISO 22301:2019",
    title: "ISO 22301 Business Continuity Management Systems",
    category: "iso",
    discipline: "Business continuity management",
    summary:
      "BUSINESS CONTINUITY ISO 22301:2019 Certification ISO 22301:2019 is the international standard for business continuity management systems. An accredited certificate proves that prioritised products and services will continue or recover within agreed times, and that plans have been exercised. Banks, insurers, utilities, public bodies and enterprise customers ask for it from suppliers, increasingly alongside ISO/IEC 27001.",
    whatItIs: [
      "ISO 22301 sets out how an organisation identifies the products and services whose loss would hurt most, the time within which they must be restored, the resources and strategies needed, and the plans, response structure and exercises that make recovery real. Certificates cover the activities, sites and services in scope, last three years with annual surveillance and appear on a public register.",
    ],
    whyitmatters: [
      "Disaster recovery restores systems; business continuity keeps the organisation delivering, including people, premises, suppliers and communications. Operational-resilience rules, critical third-party requirements and customer resilience programmes push the requirement down supply chains. For a mid-sized supplier the certificate is often the fastest route through a resilience questionnaire, and exercises find untested backups, missing alternative suppliers and broken call cascades before an incident does.",
    ],
    systemcover: [
      "Context, scope and continuity obligations",
      "Leadership, policy and authority to invoke plans",
      "Business impact analysis with recovery time and recovery point objectives",
      "Risk assessment of disruption to prioritised activities",
      "Continuity strategies, resources, response structure and incident plans",
      "Exercise programme, internal audit, management review and improvement",
    ],
    important: [
      "",
    ],
    emsFramework: [
      "",
    ],
    whoNeedsIt: [
      "",
    ],
    benefit_para:
      "",
    benefits: [
      "Resilience evidence — Answers operational-resilience, licence-condition and contract requirements with independently verified capability.",
      "Faster supplier due diligence — Often the quickest route through a customer resilience questionnaire, replacing detailed plan reviews",
      "Bounded cost of disruption — Prioritised activities recover within agreed times, limiting revenue, penalty and customer loss.",
      "Integration with ISO 27001 — Shared structure means one audit and review; holders of ISO 27001 add continuity for few extra days",
    ],
    certification_process: [
      "Shared five-step strip (Get started · Assessment · Certification audit · Certification · Maintenance) linking to /certification/process; 'Holding a certificate elsewhere? Certificate transfer (/resources/certificate-transfer)'.",
    ],
    implementation_intro:
      "",
    implementation_steps: [
      "Secure commitment, appoint a continuity lead and define scope and obligations.",
      "Complete the business impact analysis and assess risks to prioritised activities",
      "Select strategies and secure resources; document the response structure and plans",
      "Train response teams, run at least one exercise and feed the lessons back.",
      "Audit internally, hold a management review, then apply for Stage 1, Stage 2 and decision",
    ],
    implementation_transition:
      "",
    why_choose_intro: [
      "",
    ],
    whoNeedsIt: [
      "Critical third parties and outsourcers in financial services, managed-service and cloud providers whose contracts specify certified continuity, utilities and transport operators and their supply ",
      "chains, public-sector suppliers, and organisations answering customer resilience questionnaires after major incidents.",
      "Industries: Banking & financial services · Managed services & cloud · Public sector suppliers · Transport & logistics · Utilities & energy · Healthcare · Manufacturing · Retail & e-commerce · Insurance",
    ],
    industries: [

    ],
    who_needs_certification: [
     
    ],
    self_check: [
    
    ],
    pricing: [
      "Price follows audit days, set by headcount, the number and criticality of prioritised activities, operational sites and recovery locations, reliance on outsourced and cloud services, integration with ISO/IEC 27001 and remote delivery. Send your details and a sector specialist replies within one working day with a fixed quotation for the whole cycle.",
    ],

    training: "ISO 22301:2019 Foundation, Awareness, Internal Auditor, Lead Auditor",
    also_need: ["ISO 27001:2022", "ISO 20000-1:2018", "ISO 9001:2015"],
    faqs: [
      {
        q: "How is it different from disaster recovery?",
        a: "Disaster recovery restores IT. ISO 22301 covers continuity of the whole organisation: people, premises, suppliers, information and communications as well as technology",
      },
      {

        q: "Must plans be exercised before certification?",
        a: "Yes. Evidence of exercises, with lessons fed back into the plans, is needed before Stage 2, and exercising continues every year.",
      },
      {
        q: "Does it satisfy a bank customer's resilience requirements?",
        a : "It provides the tested, independently verified capability those requirements ask for. Scope the system around the services the customer receives so the certificate maps to them."
      },
      {
        q: "How long does certification take?",
        a: "Four to eight months for most organisations, with the impact analysis complete, plans written and at least one exercise run before Stage 1.",
      },
    ],
  }),

  // ── ISO 21001 ─────────────────────────────────────────────────────────────
  base({
    slug: "iso-21001",
    code: "ISO 21001:2018",
    title: "ISO 21001 Educational Organisation Management Systems",
    category: "iso",
    discipline: "Educational organisation management",
    summary:
      "ISO 21001:2018 is the international standard for management systems for educational organisations. It provides a specific management tool for educational organisations to meet the needs and expectations of learners and other beneficiaries. TRAIBCERT provides ISO 21001 certification for schools, colleges, universities, training providers and other educational organisations.",
    whatItIs: [
      "ISO 21001:2018 is the international standard for educational organisation management systems (EOMS). It is based on ISO 9001 but adapted specifically for educational organisations, with additional requirements addressing the unique needs of learners, inclusive education, accessibility and the educational process.",
      "The standard applies to any organisation that uses a curriculum to support the development of competence through teaching, learning or research, regardless of type, size or the products and services it provides. This includes schools, colleges, universities, training providers, e-learning providers and corporate training departments.",
      "Certification demonstrates to learners, parents, employers and regulators that the educational organisation manages its processes systematically and is committed to meeting the needs of learners and other beneficiaries.",
    ],
    important: [
      "Learner outcomes are the primary focus. The standard requires organisations to understand the needs of learners and other beneficiaries, design educational processes to meet those needs and monitor whether they are being met. This drives genuine improvement in educational quality.",
      "Inclusive education requirements distinguish ISO 21001 from ISO 9001. The standard includes specific requirements for accessibility, reasonable accommodation and support for learners with special needs.",
      "International recognition supports organisations operating across borders or seeking to attract international learners and partnerships.",
    ],
    emsFramework: [
      "ISO 21001 follows the ISO 9001 structure with educational-specific additions. Key additions include requirements for understanding the needs of learners and other beneficiaries, the educational process (curriculum design, delivery and assessment), inclusive education and accessibility, and the social responsibility of educational organisations.",
      "The management system framework covers leadership commitment, planning, support, operational control of educational processes, performance evaluation through learner outcome monitoring and satisfaction measurement, and continual improvement.",
    ],
    whoNeedsIt: [
      "Schools, colleges and universities",
      "Professional training providers and academies",
      "E-learning and distance learning providers",
      "Corporate training and learning and development departments",
    ],
    benefit_para:
      "Improved learner outcomes and satisfaction are the primary benefits. International recognition and the ability to demonstrate educational quality to learners, parents, employers and regulators are the commercial benefits.",
    benefits: [
      "Learner satisfaction -- systematic understanding and management of learner needs improves educational outcomes and satisfaction.",
      "Inclusive education -- specific requirements for accessibility and reasonable accommodation support all learners.",
      "International recognition -- ISO 21001 certification is recognised globally and supports international partnerships and learner recruitment.",
      "Continuous improvement -- performance monitoring and management review drive ongoing improvement in educational quality.",
    ],
    certification_process: [
      "Application and quotation: we agree the scope covering the educational programmes and learner groups included.",
      "Stage 1 audit: review of the EOMS documentation, curriculum design processes and learner outcome monitoring.",
      "Stage 2 audit: on-site audit verifying that the EOMS operates as documented.",
      "Certificate issue: ISO 21001:2018 certificate valid for three years.",
      "Surveillance and recertification: annual surveillance; recertification in year three.",
    ],
    implementation_intro:
      "Organisations already holding ISO 9001 certification have a clear path to ISO 21001, as the management system framework is shared. The additional work covers the educational-specific requirements.",
    implementation_steps: [
      "Obtain ISO 21001:2018 and identify the differences from ISO 9001 relevant to your organisation.",
      "Define the scope covering the educational programmes, learner groups and locations included.",
      "Establish processes for understanding learner needs, designing curriculum and monitoring learner outcomes.",
      "Implement inclusive education requirements: accessibility, reasonable accommodation and support for learners with special needs.",
      "Run the system for at least three months, collecting learner satisfaction and outcome data.",
      "Complete an internal audit and management review.",
      "Apply to TRAIBCERT for certification.",
    ],
    implementation_transition:
      "ISO 21001:2018 is the first edition of this standard. Organisations previously certified to ISO 9001 in the education sector can transition to ISO 21001 at their next surveillance or recertification audit.",
    why_choose_intro: [
      "TRAIBCERT provides ISO 21001 certification for educational organisations across schools, higher education, professional training and e-learning. Our auditors understand the educational process and assess the effectiveness of the management system in improving learner outcomes.",
      "Clients receive a fixed price for the full three-year cycle and practical audit findings focused on educational quality improvement.",
    ],
    industries: [
      "Education -- schools, colleges and universities",
      "Professional training providers and academies",
      "E-learning and distance learning providers",
      "Public Sector & Government -- publicly funded educational institutions",
    ],
    who_needs_certification: [
      "Educational organisations seeking to demonstrate quality to learners, parents, employers and regulators.",
      "Training providers required to hold quality certification by awarding bodies or funding authorities.",
      "Educational organisations seeking international recognition for learner recruitment and partnerships.",
    ],
    self_check: [
      "Learner needs and expectations have been identified and are used to design educational programmes",
      "Inclusive education requirements are addressed including accessibility and reasonable accommodation",
      "Learner outcomes and satisfaction are monitored and used to drive improvement",
      "An internal audit and management review have been completed in the last twelve months",
    ],
    training: "ISO 21001:2018 Awareness, Internal Auditor",
    also_need: ["ISO 9001:2015", "ISO 10002:2018"],
    faqs: [
      {
        q: "How does ISO 21001 differ from ISO 9001?",
        a: "ISO 21001 is based on ISO 9001 but includes additional requirements specific to educational organisations, including learner-focused processes, inclusive education, accessibility and the social responsibility of educational organisations.",
      },
    ],
  }),
  // ── ISO 41001 ─────────────────────────────────────────────────────────────
  base({
    slug: "iso-41001",
    code: "ISO 41001:2018",
    title: "ISO 41001 Facilities Management Systems",
    category: "iso",
    discipline: "Facilities management",
    summary:
      "ISO 41001:2018 is the international standard for facility management systems. It specifies requirements for an effective facility management system when an organisation needs to demonstrate that it delivers value in support of the primary activities of the organisation it serves. TRAIBCERT provides ISO 41001 certification for facilities management organisations and in-house FM teams across the UK, UAE and internationally.",
    whatItIs: [
      "ISO 41001:2018 is the international standard for facility management systems. It applies to organisations that provide facility management services -- whether as an outsourced FM provider, an in-house FM team or a specialist service provider -- and to the organisations that procure FM services.",
      "The standard uses the Annex SL high-level structure and requires organisations to understand the needs of the organisation they serve (the demand organisation), define the scope of FM services, manage the delivery of those services and continually improve FM performance.",
      "Certification demonstrates to clients, procurement teams and stakeholders that FM services are delivered through a managed, audited and continually improving facility management system.",
    ],
    important: [
      "Client and procurement requirements drive many certifications. Large organisations procuring FM services increasingly require their providers to hold ISO 41001 certification as evidence of FM management maturity.",
      "Operational efficiency is the internal benefit. The standard's requirements for understanding client needs, managing FM processes and monitoring performance drive efficiency improvements and cost reduction.",
      "The standard supports the professionalisation of the FM sector by providing a recognised international framework for FM service delivery.",
    ],
    emsFramework: [
      "ISO 41001 requires organisations to understand the needs and expectations of the demand organisation (the client), define the scope of FM services, establish FM policies and objectives, manage FM processes and resources, monitor FM performance and drive continual improvement.",
      "The standard covers the full range of FM services: hard services (maintenance, engineering, energy), soft services (cleaning, security, catering), space management, project management and supplier management.",
    ],
    whoNeedsIt: [
      "Outsourced FM service providers",
      "In-house FM teams in large organisations",
      "Specialist FM service providers (cleaning, security, maintenance)",
      "Organisations tendering for FM contracts in the public or private sector",
    ],
    benefit_para:
      "Contract access in public and private sector FM procurement is the primary commercial benefit. Operational efficiency improvements and client satisfaction are the internal benefits.",
    benefits: [
      "Contract access -- certification satisfies FM management requirements in public and private sector procurement.",
      "Client confidence -- an accredited certificate demonstrates FM management maturity to existing and prospective clients.",
      "Operational efficiency -- systematic management of FM processes and performance drives efficiency and cost reduction.",
      "Professionalisation -- ISO 41001 provides a recognised international framework for FM service delivery.",
    ],
    certification_process: [
      "Application and quotation: we agree the scope of the FM system and the services included.",
      "Stage 1 audit: review of the FM system documentation and service delivery processes.",
      "Stage 2 audit: on-site audit verifying that FM processes operate as documented.",
      "Certificate issue: ISO 41001:2018 certificate valid for three years.",
      "Surveillance and recertification: annual surveillance; recertification in year three.",
    ],
    implementation_intro:
      "First-time certification typically takes four to nine months. Organisations already holding ISO 9001 are usually quicker because the management system framework exists.",
    implementation_steps: [
      "Obtain ISO 41001:2018, secure top management commitment and define the scope of the FM system.",
      "Understand the needs and expectations of the demand organisation and define FM service requirements.",
      "Document FM processes covering hard services, soft services, space management and supplier management.",
      "Establish FM performance monitoring and reporting against agreed service levels.",
      "Run the system for at least three months, collecting performance data and handling nonconformities.",
      "Complete an internal audit and management review.",
      "Apply to TRAIBCERT for certification.",
    ],
    implementation_transition:
      "ISO 41001:2018 is the first edition of this standard. Organisations previously certified to ISO 9001 in the FM sector can build on their existing management system framework.",
    why_choose_intro: [
      "TRAIBCERT provides ISO 41001 certification for FM service providers and in-house FM teams. Our auditors understand FM service delivery across hard services, soft services and integrated FM.",
      "Clients receive a fixed price for the full three-year cycle and practical audit findings focused on FM performance improvement.",
    ],
    industries: [
      "Facilities Management -- outsourced and in-house FM providers",
      "Construction -- building services and maintenance",
      "Public Sector & Government -- public estate management",
      "Healthcare -- hospital facilities management",
      "Retail & E-Commerce -- retail estate management",
      "Education -- campus facilities management",
    ],
    who_needs_certification: [
      "FM service providers required to hold ISO 41001 certification by public or private sector clients.",
      "In-house FM teams seeking to formalise and improve FM service delivery.",
      "FM organisations seeking to differentiate on management system maturity.",
    ],
    self_check: [
      "The needs and expectations of the demand organisation are understood and documented",
      "FM service requirements and performance targets are agreed with the client",
      "FM processes are documented and operating as documented",
      "FM performance is monitored and reported against agreed targets",
      "An internal audit and management review have been completed in the last twelve months",
    ],
    training: "ISO 41001:2018 Foundation, Awareness, Internal Auditor, Lead Auditor",
    also_need: ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018"],
    faqs: [
      {
        q: "Does ISO 41001 apply to in-house FM teams?",
        a: "Yes. ISO 41001 applies to any organisation that manages facilities, whether as an outsourced provider or an in-house team.",
      },
    ],
  }),

  // ── ISO 31000 ─────────────────────────────────────────────────────────────
  base({
    slug: "iso-31000",
    code: "ISO 31000:2018",
    title: "ISO 31000 Risk Management",
    category: "iso",
    discipline: "Risk management",
    summary:
      "RISK MANAGEMENT ISO 31000:2018 Risk Management Assessment ISO 31000:2018 is the international standard for risk management. It is guidance, not a certifiable standard, so TRAIBCERT carries out an independent assessment against it and issues a findings report and a statement of conformity. Audit committees, lenders, insurers and regulators rely on that statement as evidence that risk shapes decisions, not just registers.",
    whatItIs: [
      "ISO 31000:2018 sets out how organisations of any kind should manage risk. It has three parts: eight principles describing effective risk management, a framework owned by leadership that builds risk into governance, and a process running from scope and context through identification, analysis, evaluation and treatment to monitoring and reporting. Because it contains no certifiable requirements, no accredited certificate exists. TRAIBCERT assesses how closely your practice follows it.",
    ],
    whyitmatters: [
      "Governance codes, lender covenants and insurer questionnaires now ask whether risk management shapes decisions, not whether a risk register exists. An assessment tests whether appetite is set and used, whether risk information reaches decision-makers, whether treatments are tracked and whether the framework is reviewed. Boards gain assurance beyond internal audit, and groups gain a common benchmark across subsidiaries and countries.",
    ],
    systemcover: [
      "Leadership commitment, risk appetite and board accountability",
      "Risk management built into governance, planning and investment decisions",
      "Framework design: context, criteria, roles, resources and communication",
      "Risk process: identify, analyse, evaluate and treat at every level",
      "Treatment plans with owners, dates, funding and residual-risk decisions",
      "Monitoring, reporting and annual review of the framework itself",
    ],
    important: [
      "",
    ],
    emsFramework: [
      "",
    ],
    whoNeedsIt: [
      "",
    ],
    benefit_para:
      "",
    benefits: [
      "Lender and insurer evidence — Due-diligence and covenant questions answered with a findings report and statement, not a self-description.",
      "Governance assurance — An independent view for boards and audit committees that goes beyond internal audit.",
      "One risk approach — Risk requirements of other management systems aligned under a single enterprise framework.",
      "Group consistency — A common benchmark across subsidiaries and countries shows where practice diverges.",
    ],
    assessment_process: [
      "Scoping: agree entities, decision levels, documents and interviews, then receive a fixed quotation.",
      "Document review: policy, appetite, framework, registers and reporting reviewed against the standard.",
      "Interviews: board members, executives and risk owners tested on how risk shapes real decisions.",
      "Report and statement: findings report and statement of conformity, independently reviewed before issue.",
      "Annual review confirms the framework remains in use and renews the statement.",
    ],
    WhoNeedsIt: [
      "Boards and audit committees seeking assurance beyond internal audit. Investors, lenders and insurers reviewing risk governance. Groups harmonising practice across subsidiaries and countries. Organisations answering governance submissions on embedded risk management, and holders of other management system certificates seeking a single risk approach.Industries: Banking & finance · Public sector · Energy & oil/gas · Manufacturing · Technology & SaaS · Healthcare · Education · Construction",
    ],
    pricing: [
      "Assessments are priced on assessor days. Entities and countries in scope, decision-making levels, interviews required and documentation maturity set the days; combining with a certification audit shares interviews. The fee covers the assessment and annual review. Send your details and a sector specialist replies within one working day with a fixed quotation.",
    ],
    certification_process: [
      "",
    ],
    implementation_intro:
      "",
    implementation_steps: [
      "",
    ],
    implementation_transition:
      "",
    why_choose_intro: [
      "",
    ],
    industries: [
      "",
    ],
    who_needs_certification: [
      "",
    ],
    self_check: [
      "A risk management policy and framework are in place and endorsed by leadership",
      "Risk identification, analysis and evaluation processes are documented and operating",
      "Risk treatment plans are in place for significant risks",
      "Risk management is integrated into planning and decision-making processes",
      "The risk management framework is reviewed and improved regularly",
    ],
    training: "ISO 31000:2018 Foundation, Awareness, Internal Auditor",
    also_need: ["ISO 9001:2015", "ISO 14001:2015", "ISO 27001:2022"],
    faqs: [
      {
        q: "Can we get an ISO 31000 certificate?",
        a: "No. ISO 31000 is guidance, so accredited certification to it does not exist. TRAIBCERT issues a statement of conformity after an independent assessment.",
      },
      {
        q: "How long does the assessment take?",
        a: "Typically three to six weeks from proposal to statement, depending on group structure and the number of entities."
      },
      {
        q: "What does the statement say?",
        a: "That, on the evidence assessed, your risk management framework and process conform to ISO 31000:2018 within a stated scope and date, supported by a findings report.",
      },
      {
        q:"Does the assessment tell us how to fix gaps?",
        a:"It reports findings prioritised by impact. As an independent body, TRAIBCERT does not design or implement remedies.",
      },
    ],
  }),

  // ── ISO 26000 ─────────────────────────────────────────────────────────────
  base({
    slug: "iso-26000",
    code: "ISO 26000:2010",
    title: "ISO 26000 Guidance on Social Responsibility",
    category: "iso",
    discipline: "Social responsibility",
    summary:
      "ISO 26000:2010 provides guidance on social responsibility to all types of organisations regardless of their size or location. It helps organisations contribute to sustainable development by encouraging them to go beyond legal compliance and recognise that compliance with law is a fundamental duty. TRAIBCERT provides ISO 26000 advisory and assessment services to help organisations embed social responsibility into their governance and operations.",
    whatItIs: [
      "ISO 26000:2010 is the international guidance standard on social responsibility. Unlike most ISO standards, it is not a management system standard and is not intended for certification purposes -- it provides guidance rather than requirements. However, organisations can be assessed against its principles and core subjects.",
      "The standard covers seven core subjects of social responsibility: organisational governance, human rights, labour practices, the environment, fair operating practices, consumer issues and community involvement and development. It provides guidance on integrating socially responsible behaviour into the organisation's strategies, systems, practices and processes.",
      "ISO 26000 is used by organisations as a framework for their CSR and ESG programmes, and as a reference for reporting against sustainability frameworks.",
    ],
    important: [
      "Stakeholder expectations for social responsibility are increasing. Investors, customers, employees and regulators expect organisations to demonstrate responsible behaviour beyond legal compliance. ISO 26000 provides a recognised international framework for doing so.",
      "ESG reporting alignment is a practical benefit. The seven core subjects of ISO 26000 align with the environmental, social and governance dimensions of ESG reporting frameworks.",
      "Supply chain requirements are growing. Large organisations increasingly require their suppliers to demonstrate social responsibility through assessments against recognised frameworks.",
    ],
    emsFramework: [
      "",
    ],
    whoNeedsIt: [
      "Organisations developing CSR or ESG programmes",
      "Businesses required to demonstrate social responsibility by customers or investors",
      "Organisations reporting against sustainability frameworks",
      "Public sector and not-for-profit organisations",
    ],
    benefit_para:
      "Stakeholder confidence and ESG reporting credibility are the primary benefits. A structured approach to social responsibility also identifies risks and opportunities that purely financial analysis may miss.",
    benefits: [
      "Stakeholder confidence -- demonstrates responsible behaviour to investors, customers, employees and communities.",
      "ESG alignment -- the seven core subjects align with ESG reporting dimensions.",
      "Risk identification -- systematic consideration of social responsibility issues identifies risks and opportunities.",
      "Supply chain access -- satisfies social responsibility requirements from large customers and investors.",
    ],
    certification_process: [
      "Assessment scope: we agree the scope of the social responsibility assessment.",
      "Documentation review: assessment of policies, programmes and reporting against ISO 26000 core subjects.",
      "Stakeholder engagement review: assessment of stakeholder identification and engagement processes.",
      "Assessment report: findings and recommendations for improvement.",
    ],
    implementation_intro:
      "ISO 26000 implementation involves identifying relevant social responsibility issues, integrating social responsibility into governance and operations, and communicating transparently with stakeholders.",
    implementation_steps: [
      "Obtain ISO 26000:2010 and identify the core subjects and issues relevant to your organisation.",
      "Assess current practices against the guidance for each relevant core subject.",
      "Develop policies and programmes to address identified gaps.",
      "Integrate social responsibility into governance, strategy and operations.",
      "Engage with stakeholders on social responsibility issues and performance.",
      "Report transparently on social responsibility performance.",
    ],
    implementation_transition:
      "ISO 26000:2010 is the first and current edition of this standard. A revision is under development.",
    why_choose_intro: [
      "TRAIBCERT provides ISO 26000 assessment and advisory services to help organisations develop credible social responsibility programmes. Our assessors have experience across the seven core subjects and can help organisations align their CSR programmes with ISO 26000.",
      "We provide practical findings focused on improving social responsibility performance and stakeholder communication.",
    ],
    industries: [
      "All sectors -- social responsibility applies to all organisations",
      "Banking & Financial Services -- responsible finance and investment",
      "Manufacturing & Supply Chain -- supply chain social responsibility",
      "Public Sector & Government -- public accountability and community development",
      "Retail & E-Commerce -- consumer issues and supply chain",
    ],
    who_needs_certification: [
      "Organisations developing or improving CSR and ESG programmes.",
      "Businesses required to demonstrate social responsibility by customers, investors or regulators.",
      "Organisations seeking a recognised framework for social responsibility reporting.",
    ],
    self_check: [
      "Relevant social responsibility issues have been identified across the seven core subjects",
      "Policies and programmes are in place to address significant social responsibility issues",
      "Stakeholders have been identified and engagement processes are in place",
      "Social responsibility performance is monitored and reported",
    ],
    training: "ISO 26000:2010 Awareness",
    also_need: ["ISO 14001:2015", "ISO 45001:2018", "ISO 50001:2018"],
    faqs: [
      {
        q: "Can organisations be certified to ISO 26000?",
        a: "ISO 26000 is a guidance standard and is not intended for certification. However, organisations can be assessed against its principles and core subjects to demonstrate their social responsibility commitment.",
      },
    ],
  }),

  // ── ISO 50001 ─────────────────────────────────────────────────────────────
  base({
    slug: "iso-50001",
    code: "ISO 50001:2018",
    title: "ISO 50001 Energy Management",
    category: "iso",
    discipline: "Energy management",
    summary:
      "ISO 50001:2018 is the international standard for energy management systems. It provides organisations with a framework to establish systems and processes to improve energy performance, including energy efficiency, use and consumption. TRAIBCERT provides accredited ISO 50001 certification for organisations across the UK, UAE and internationally.",
    whatItIs: [
      "ISO 50001:2018 is the international standard for energy management systems. It uses the Annex SL high-level structure shared with ISO 9001, ISO 14001 and ISO 45001, enabling straightforward integration. The standard requires organisations to establish an energy baseline, set energy performance indicators, identify significant energy uses and drive continual improvement in energy performance.",
      "The standard applies to any organisation that wants to improve energy performance, reduce energy costs and demonstrate commitment to reducing greenhouse gas emissions. It is applicable to all types and sizes of organisations regardless of geographical, cultural or social conditions.",
      "An ISO 50001 certificate demonstrates to customers, regulators and stakeholders that energy is managed systematically and that energy performance is improving over time.",
    ],
    important: [
      "Energy cost reduction is the primary operational benefit. Systematic identification of significant energy uses, energy performance indicators and improvement actions typically delivers measurable energy savings that exceed the cost of certification.",
      "Regulatory compliance is supported. In the UK, ISO 50001 certification satisfies the ESOS (Energy Savings Opportunity Scheme) compliance route for large organisations, avoiding the need for separate ESOS audits.",
      "Carbon reporting and net-zero commitments are supported by the energy data and improvement actions generated by the energy management system.",
    ],
    emsFramework: [
      "ISO 50001 requires organisations to establish an energy review identifying significant energy uses and their current performance, an energy baseline for comparison, energy performance indicators (EnPIs) to measure performance, and energy objectives and targets for improvement.",
      "The management system framework covers leadership commitment, energy policy, planning, support, operational control of significant energy uses, monitoring and measurement of EnPIs, internal audit, management review and continual improvement.",
    ],
    whoNeedsIt: [
      "Large energy users in manufacturing, data centres and logistics",
      "Organisations subject to ESOS (Energy Savings Opportunity Scheme) in the UK",
      "Organisations with net-zero or carbon reduction commitments",
      "Organisations building on ISO 14001 with a dedicated energy management system",
    ],
    benefit_para:
      "Measurable energy cost savings are the primary benefit, typically exceeding the cost of certification in the first year. ESOS compliance and carbon reporting support are additional benefits for UK organisations.",
    benefits: [
      "Energy cost savings -- systematic identification and management of significant energy uses delivers measurable cost reductions.",
      "ESOS compliance -- ISO 50001 certification satisfies the ESOS compliance route for large UK organisations.",
      "Carbon reporting -- energy data and improvement actions support carbon reporting and net-zero commitments.",
      "Integration -- the Annex SL structure means ISO 50001 integrates with ISO 14001, ISO 9001 and ISO 45001.",
    ],
    certification_process: [
      "Application and quotation: we agree the scope covering the sites and energy sources included.",
      "Stage 1 audit: review of the energy management system documentation, energy review, baseline and EnPIs.",
      "Stage 2 audit: on-site audit verifying that the energy management system operates as documented.",
      "Certificate issue: accredited ISO 50001:2018 certificate valid for three years.",
      "Surveillance and recertification: annual surveillance; recertification in year three.",
    ],
    implementation_intro:
      "First-time certification typically takes four to nine months. Organisations already holding ISO 14001 are usually quicker because the management system framework exists and energy aspects are already identified.",
    implementation_steps: [
      "Obtain ISO 50001:2018, secure top management commitment and appoint an energy management representative.",
      "Conduct an energy review: identify energy sources, uses and consumption, and identify significant energy uses.",
      "Establish an energy baseline and energy performance indicators for significant energy uses.",
      "Set energy objectives and targets and develop action plans to achieve them.",
      "Implement operational controls for significant energy uses and establish monitoring and measurement.",
      "Run the system for at least three months, collecting energy performance data.",
      "Complete an internal audit and management review.",
      "Apply to TRAIBCERT for certification.",
    ],
    implementation_transition:
      "ISO 50001:2018 updated the 2011 edition with adoption of the Annex SL structure and clarified requirements for energy performance indicators and the energy review.",
    why_choose_intro: [
      "TRAIBCERT auditors have experience in energy management across manufacturing, data centres, logistics and the public sector. We assess the effectiveness of the energy management system in delivering measurable energy performance improvement.",
      "Clients receive a fixed price for the full three-year cycle and audit reports that describe findings in terms of their own significant energy uses and performance indicators.",
    ],
    industries: [
      "Manufacturing & Supply Chain -- high energy use and cost reduction",
      "Technology & SaaS -- data centre energy management",
      "Transport & Logistics -- fleet and depot energy management",
      "Public Sector & Government -- public estate energy management and net-zero",
      "Energy & Oil/Gas -- operational energy efficiency",
      "Retail & E-Commerce -- store and distribution centre energy management",
    ],
    who_needs_certification: [
      "Large UK organisations subject to ESOS seeking to use ISO 50001 as the compliance route.",
      "Organisations with significant energy costs seeking systematic energy cost reduction.",
      "Organisations with net-zero or carbon reduction commitments needing an energy management backbone.",
    ],
    self_check: [
      "Significant energy uses have been identified and their current performance measured",
      "An energy baseline and energy performance indicators are in place",
      "Energy objectives and targets are set and action plans are in place",
      "Energy performance is monitored against EnPIs and reported to management",
      "An internal audit and management review have been completed in the last twelve months",
    ],
    training: "ISO 50001:2018 Foundation, Awareness, Internal Auditor, Lead Auditor",
    also_need: ["ISO 14001:2015", "ISO 9001:2015", "ISO 45001:2018"],
    faqs: [
      {
        q: "Does ISO 50001 satisfy ESOS requirements?",
        a: "Yes. In the UK, ISO 50001 certification covering all significant energy uses satisfies the ESOS compliance route, avoiding the need for separate ESOS audits.",
      },
    ],
  }),

  // ── ISO 13485 ─────────────────────────────────────────────────────────────
  base({
    slug: "iso-13485",
    code: "ISO 13485",
    title: "ISO 13485:2016 Medical Device QMS Certification | TRAIBCERT",
    category: "iso",
    discipline: "ISO 13485:2016 medical device quality management certification for manufacturers, suppliers, distributors and servicers from an accredited body",
    summary:
      "MEDICAL DEVICES ISO 13485:2016 Certification ISO 13485:2016 is the international quality management standard for medical devices, written for regulatory compliance. An accredited certificate shows your quality system meets the standard and operates effectively. Regulators, notified bodies and device manufacturers auditing their suppliers ask for it across the whole device supply chain.",
    whatItIs: [
      "ISO 13485 covers organisations at any stage of the device life cycle: design, production, storage, distribution, installation, servicing and decommissioning, plus suppliers of components, software, packaging and sterilisation. Built on ISO 9001 but written for regulatory compliance, it adds risk management, design controls, validated processes, traceability, complaint handling and regulatory reporting. It is not a product approval; conformity marking is a separate assessment of the device.",
    ],
    Whyitmatters: [
      "A manufacturer without ISO 13485 cannot progress device conformity assessment without building an equivalent system. A supplier without it is a risk on its customer's approved list, and a distributor or importer may fail a health regulator's registration requirements. Beyond access, validated processes and traceability reduce scrap, rework, field actions and recalls, and an accredited certificate shortens customer supplier audits.",
    ],
    systemcover: [
      "Management responsibility, quality policy and regulatory roles",
      "Competent people and a controlled work environment, including cleanliness",
      "Risk management across the product life cycle",
      "Design and development controls with a design file",
      "Supplier evaluation in proportion to product risk",
      "Validated processes, identification and traceability",
      "Complaint handling, reportability decisions and regulator reporting",
    ],
    important: [
      "",
    ],
    emsFramework: [
      "",
    ],
    whoNeedsIt: [
      "",
    ],
    benefit_para:
      "",
    benefits: [
      "Supplier approval — Keeps component, software, packaging and sterilisation suppliers on manufacturers' approved lists and shortens their audits.",
      "Regulatory foundation — Provides the quality-system evidence that conformity assessment and market registration routes rely on.",
      "Fewer field actions — Validated processes, traceability and controlled design reduce nonconformance, recalls and their cost.",
      "Complaint control — A defined route from complaint to reportability decision keeps regulatory reporting timely and defensible.",
    ],
    certification_process: [
      "Shared five-step strip (Get started · Assessment · Certification audit · Certification · Maintenance) linking to /certification/process; 'Holding a certificate elsewhere? Certificate transfer (/resources/certificate-transfer)'.",
    ],
    implementation_intro:
      "",
    implementation_steps: [
      "Gap review against ISO 13485:2016; confirm your regulatory role and market requirements",
      "Secure top management commitment, set policy, define scope and appoint responsible roles",
      "Build procedures, device files and risk management across design, production and post-market.",
      "Validate processes, establish traceability and implement complaint and regulatory-reporting procedures",
      "Operate for three months, complete internal audit and management review, then apply.",
    ],
    implementation_transition:
      "ISO 13485:2016 updated the 2003 edition with strengthened requirements for risk management, software validation, sterile medical devices and post-market surveillance.",
    why_choose_intro: [
      "TRAIBCERT provides ISO 13485 certification for medical device manufacturers, distributors and service providers. Our auditors have experience in the medical device regulatory environment and understand the requirements of EU MDR/IVDR, UKCA and other regulatory frameworks.",
      "Clients receive a fixed price for the full three-year cycle and audit reports that describe findings in terms of their own device types, processes and regulatory requirements.",
    ],
    industries: [
      "Healthcare -- medical device manufacturers and distributors",
      "Manufacturing & Supply Chain -- contract manufacturers and component suppliers",
      "Technology & SaaS -- software as a medical device (SaMD)",
    ],
    who_needs_certification: [
      "Medical device manufacturers required to hold ISO 13485 for CE marking or regulatory market access.",
      "Medical device distributors and importers required to hold ISO 13485 by customers or regulatory authorities.",
      "Contract manufacturers and component suppliers required to hold ISO 13485 by medical device customers.",
    ],
    self_check: [
      "Risk management files are in place for all device types in scope, aligned with ISO 14971",
      "Design and development procedures are documented and records are maintained",
      "Post-market surveillance and complaint handling processes are in place",
      "Applicable regulatory requirements have been identified and compliance is monitored",
      "An internal audit and management review have been completed in the last twelve months",
    ],
    training: "ISO 13485 Awareness, Internal Auditor",
    also_need: ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018"],
    faqs: [
      {
        q: "Is ISO 13485 required for CE marking?",
        a: "Yes. ISO 13485 certification is required for CE marking under the EU Medical Device Regulation (MDR) and In Vitro Diagnostic Regulation (IVDR).",
      },
      {
        q: "How does ISO 13485 differ from ISO 9001?",
        a: "ISO 13485 is based on ISO 9001 but includes additional requirements specific to medical devices, including risk management, sterile devices, advisory notices and regulatory compliance. It does not include the continual improvement requirement of ISO 9001 in the same way, focusing instead on maintaining the effectiveness of the quality management system.",
      },
    ],
  }),

  // ── ISO 29001 ─────────────────────────────────────────────────────────────
  base({
    slug: "iso-29001",
    code: "ISO 29001:2020",
    title: "ISO 29001 QMS for the Oil and Natural Gas Industry",
    category: "iso",
    discipline: "Oil and gas quality management",
    summary:
      "ISO 29001:2020 is the quality management system standard for the petroleum, petrochemical and natural gas industries. It is based on ISO 9001 and includes additional sector-specific requirements for product and service supply organisations in the oil and gas industry. TRAIBCERT provides ISO 29001 certification for organisations supplying products and services to the oil and gas sector.",
    whatItIs: [
      "ISO 29001:2020 is the quality management system standard for the petroleum, petrochemical and natural gas industries. It was developed jointly by ISO and the International Association of Oil and Gas Producers (IOGP) and is based on ISO 9001:2015 with additional sector-specific requirements.",
      "The standard applies to organisations that supply products and services to the oil and gas industry, including equipment manufacturers, service companies, engineering contractors and maintenance providers. It addresses the specific quality risks of the oil and gas sector including safety-critical equipment, high-consequence operations and complex supply chains.",
      "ISO 29001 certification is required or expected by major oil and gas operators and engineering contractors as a condition of supplier qualification.",
    ],
    important: [
      "Supplier qualification is the primary driver. Major oil and gas operators and engineering contractors require their suppliers to hold ISO 29001 certification as evidence of quality management system maturity in the sector.",
      "Safety-critical equipment requirements are addressed by the sector-specific additions to ISO 9001, including requirements for product realisation planning, verification and validation of safety-critical items.",
      "The standard replaces the previous API Q1 and Q2 standards in many supply chain qualification requirements.",
    ],
    emsFramework: [
      "ISO 29001 follows the ISO 9001 structure with oil and gas sector-specific additions. Key additions include requirements for contingency planning, product and service realisation planning for safety-critical items, verification and validation of safety-critical equipment, and management of safety-critical documentation.",
      "The standard requires documented procedures for all key processes relevant to the oil and gas supply chain, including design and development, purchasing, production and service provision, inspection and testing, and nonconforming product control.",
    ],
    whoNeedsIt: [
      "Equipment manufacturers supplying the oil and gas industry",
      "Engineering and maintenance service companies in the oil and gas sector",
      "Inspection, testing and certification service providers",
      "Organisations seeking qualification on oil and gas operator approved vendor lists",
    ],
    benefit_para:
      "Supplier qualification and approved vendor list status with major oil and gas operators are the primary commercial benefits. Operational quality improvements in safety-critical product and service delivery are the internal benefits.",
    benefits: [
      "Supplier qualification -- certification satisfies quality management requirements for oil and gas operator and contractor approved vendor lists.",
      "Safety-critical quality -- sector-specific requirements address the quality risks of safety-critical equipment and services.",
      "Market access -- ISO 29001 is recognised globally across the oil and gas supply chain.",
      "ISO 9001 alignment -- organisations holding ISO 9001 have a clear path to ISO 29001 certification.",
    ],
    certification_process: [
      "Application and quotation: we agree the scope covering the products and services supplied to the oil and gas industry.",
      "Stage 1 audit: review of the quality management system documentation and sector-specific procedures.",
      "Stage 2 audit: on-site audit verifying that the quality management system operates as documented.",
      "Certificate issue: ISO 29001:2020 certificate valid for three years.",
      "Surveillance and recertification: annual surveillance; recertification in year three.",
    ],
    implementation_intro:
      "Organisations already holding ISO 9001 have a clear path to ISO 29001. The additional work covers the sector-specific requirements for safety-critical items and oil and gas supply chain processes.",
    implementation_steps: [
      "Obtain ISO 29001:2020 and identify the sector-specific requirements applicable to your products and services.",
      "Define the scope covering the oil and gas products and services included.",
      "Implement sector-specific requirements including contingency planning and safety-critical item controls.",
      "Document all required procedures for oil and gas supply chain processes.",
      "Run the system for at least three months and collect records.",
      "Complete an internal audit and management review.",
      "Apply to TRAIBCERT for certification.",
    ],
    implementation_transition:
      "ISO 29001:2020 updated the 2010 edition with alignment to ISO 9001:2015 and updated sector-specific requirements.",
    why_choose_intro: [
      "TRAIBCERT provides ISO 29001 certification for organisations supplying the oil and gas industry. Our auditors understand the quality requirements of the oil and gas supply chain and the sector-specific additions to ISO 9001.",
      "Clients receive a fixed price for the full three-year cycle and audit reports relevant to their oil and gas supply chain processes.",
    ],
    industries: [
      "Energy & Oil/Gas -- equipment manufacturers and service companies",
      "Manufacturing & Supply Chain -- oil and gas equipment supply chain",
      "Construction -- oil and gas construction and engineering",
    ],
    who_needs_certification: [
      "Organisations required to hold ISO 29001 for oil and gas operator or contractor approved vendor list qualification.",
      "Equipment manufacturers and service companies seeking to access the oil and gas supply chain.",
    ],
    self_check: [
      "Sector-specific requirements for safety-critical items are identified and addressed",
      "Contingency planning is in place for key supply chain risks",
      "Verification and validation procedures are in place for safety-critical products",
      "An internal audit and management review have been completed in the last twelve months",
    ],
    training: "ISO 29001:2020 Awareness, Internal Auditor",
    also_need: ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018"],
    faqs: [
      {
        q: "How does ISO 29001 relate to ISO 9001?",
        a: "ISO 29001 is based on ISO 9001 and includes all of its requirements plus additional sector-specific requirements for the oil and gas industry. Organisations holding ISO 9001 have a clear path to ISO 29001 certification.",
      },
    ],
  }),

  // ── ISO 42001 ─────────────────────────────────────────────────────────────
  base({
    slug: "iso-42001",
    code: "ISO 42001:2023",
    title: "ISO 42001 Artificial Intelligence Management System",
    category: "iso",
    tag: "NEW",
    discipline: "AI management",
    summary:
      "ISO/IEC 42001:2023 is the world's first international standard for artificial intelligence management systems. It provides requirements for establishing, implementing, maintaining and continually improving an AI management system within the context of an organisation. TRAIBCERT provides ISO 42001 certification for organisations developing, providing or using AI systems.",
    whatItIs: [
      "ISO/IEC 42001:2023 is the first international standard for artificial intelligence management systems, published jointly by ISO and IEC in December 2023. It uses the Annex SL high-level structure shared with ISO 9001, ISO 14001 and ISO 27001, enabling integration with existing management systems.",
      "The standard applies to any organisation that develops, provides or uses AI systems -- technology companies building AI products, organisations deploying AI in their operations, and service providers using AI to deliver services. It addresses the responsible development and use of AI, including AI risk and impact assessment, data governance, human oversight and transparency.",
      "ISO 42001 certification provides organisations with a recognised framework for demonstrating responsible AI governance to customers, regulators and stakeholders at a time when AI assurance questions are appearing in procurement and regulatory requirements.",
    ],
    important: [
      "Procurement and regulatory requirements for AI governance are emerging rapidly. Buyers are asking how AI features are governed, what data trains them, who reviews outputs and what happens when the model is wrong. ISO 42001 provides a recognised framework to answer these questions.",
      "The EU AI Act and other emerging AI regulations require organisations to demonstrate risk-based governance of AI systems. ISO 42001 provides a management system framework aligned with these regulatory expectations.",
      "Organisations already holding ISO 27001 have a significant head start: much of the governance scaffolding exists, and the new work is primarily AI impact assessment and lifecycle documentation.",
    ],
    emsFramework: [
      "ISO 42001 requires organisations to establish an AI policy, conduct AI risk and impact assessments, implement controls for responsible AI development and use, manage AI-related data governance, establish human oversight mechanisms and drive continual improvement in AI management.",
      "The standard includes an Annex A with a comprehensive set of AI controls covering AI system impact assessment, AI system lifecycle, data for AI, information for interested parties, human oversight, and responsible AI objectives. Organisations select applicable controls based on their AI risk and impact assessment.",
    ],
    whoNeedsIt: [
      "Technology companies developing AI products and services",
      "Organisations deploying AI in customer-facing or high-risk applications",
      "Organisations subject to the EU AI Act or other AI regulations",
      "Businesses whose customers require evidence of responsible AI governance",
    ],
    benefit_para:
      "Demonstrating responsible AI governance to customers, regulators and stakeholders is the primary benefit. A structured AI management system also reduces the operational and reputational risks of AI system failures.",
    benefits: [
      "Regulatory readiness -- provides a management system framework aligned with the EU AI Act and other emerging AI regulations.",
      "Customer confidence -- demonstrates responsible AI governance to customers asking about AI assurance.",
      "Risk reduction -- systematic AI risk and impact assessment reduces the likelihood of AI system failures and their consequences.",
      "Integration -- the Annex SL structure means ISO 42001 integrates with ISO 27001, ISO 9001 and other management systems.",
    ],
    certification_process: [
      "Application and quotation: we agree the scope covering the AI systems and applications included.",
      "Stage 1 audit: review of the AI management system documentation, AI risk and impact assessments and control selection.",
      "Stage 2 audit: on-site audit verifying that the AI management system operates as documented.",
      "Certificate issue: ISO 42001:2023 certificate valid for three years.",
      "Surveillance and recertification: annual surveillance; recertification in year three.",
    ],
    implementation_intro:
      "ISO 42001 is a new standard and most organisations are at an early stage of implementation. Organisations already holding ISO 27001 have a significant head start because the management system framework and many governance processes already exist.",
    implementation_steps: [
      "Obtain ISO 42001:2023 and inventory where AI is used in your products, services and operations.",
      "Define the scope of the AI management system covering the AI systems and applications included.",
      "Conduct AI risk and impact assessments for AI systems in scope.",
      "Select applicable controls from Annex A based on the risk and impact assessment.",
      "Implement controls covering AI lifecycle management, data governance, human oversight and transparency.",
      "Establish the AI management system governance: policy, objectives, roles and documented information.",
      "Run the system for at least three months and collect records.",
      "Complete an internal audit and management review, then apply to TRAIBCERT.",
    ],
    implementation_transition:
      "ISO 42001:2023 is the first edition of this standard. There is no previous edition to transition from.",
    why_choose_intro: [
      "TRAIBCERT provides ISO 42001 certification for technology companies and organisations deploying AI. Our auditors understand AI system development and deployment and the governance requirements of the standard.",
      "Clients receive a fixed price for the full three-year cycle and practical audit findings focused on improving AI governance effectiveness.",
    ],
    industries: [
      "Technology & SaaS -- AI product development and deployment",
      "Banking & Financial Services -- AI in credit, fraud and customer service",
      "Healthcare -- AI in diagnostics, treatment and administration",
      "Public Sector & Government -- AI in public services and decision-making",
      "Retail & E-Commerce -- AI in personalisation and supply chain",
      "Manufacturing & Supply Chain -- AI in quality control and predictive maintenance",
    ],
    who_needs_certification: [
      "Technology companies developing AI products required to demonstrate responsible AI governance by customers or regulators.",
      "Organisations subject to the EU AI Act or other AI regulations requiring a management system framework.",
      "Businesses whose customers are asking AI assurance questions in procurement.",
    ],
    self_check: [
      "AI systems used in your products, services and operations have been inventoried",
      "AI risk and impact assessments have been completed for AI systems in scope",
      "Controls are in place for AI lifecycle management, data governance and human oversight",
      "An AI policy is in place and communicated to relevant staff",
      "An internal audit and management review have been completed in the last twelve months",
    ],
    training: "ISO 42001:2023 Awareness, Internal Auditor",
    also_need: ["ISO 27001:2022", "ISO 9001:2015", "ISO 27701"],
    faqs: [
      {
        q: "Does ISO 42001 satisfy EU AI Act requirements?",
        a: "ISO 42001 provides a management system framework aligned with the governance requirements of the EU AI Act. Certification to ISO 42001 demonstrates a systematic approach to AI risk management that supports EU AI Act compliance.",
      },
      {
        q: "Do we need ISO 27001 before ISO 42001?",
        a: "No, but organisations holding ISO 27001 have a significant head start because the management system framework and many governance processes already exist. ISO 42001 can be implemented standalone or integrated with ISO 27001.",
      },
    ],
  }),

  // ── Cyber Essentials ──────────────────────────────────────────────────────
  base({
    slug: "cyber-essentials",
    code: "Cyber Essentials",
    title: "Cyber Essentials",
    category: "cyber",
    discipline: "Cyber security",
    summary:
      "CYBER SECURITY Cyber Essentials Certification Cyber Essentials (Danzell v3.3, from 26 April 2026) is the UK Government-backed baseline for cyber security. A certificate shows that five technical controls are in place that stop most commodity internet attacks. Customers, tender processes, supply-chain questionnaires and insurers ask for it as a minimum.",
    whatItIs: [
      "Cyber Essentials is a verified self-assessment. You answer the current question set on your internet boundary, devices, user accounts, malware protection and patching. A board-level signatory declares the answers true, a qualified assessor examines them and, on a pass, the certificate is issued immediately and listed on a public register. It is valid for 12 months. Organisations of any size are eligible, and the process is online",
    ],
    Whyitmatters: [
      "Government contracts involving personal data or IT services have required the scheme since 2014, and the expectation has spread to defence, health, education and private-sector supply chains. The latest UK Cyber Security Breaches Survey found that 43 per cent of businesses identified a breach or attack in the past year, rising to 69 per cent of large firms, while only around 5 per cent hold the certificate.",
      "Cyber Essentials is a UK scheme; it applies to organisations operating in or selling into the UK, although organisations anywhere may certify.",
    ],
    controls: [
      "Firewalls and internet gateways controlling traffic to your network and devices",
      "Secure configuration: no default passwords, unnecessary software or open services",
      "Access control: administrator rights limited, multi-factor authentication on cloud services",
      "Malware protection on every in-scope device",
      "Security update management: high-risk and critical updates applied within 14 days",
      "Cloud services in scope, with every legal entity declared",
    ],

    important: [
      "",
    ],
    emsFramework: [
      "",
    ],
    whoNeedsIt: [
      "",
    ],
    benefit_para:
      "UK government contract access and supply chain qualification are the primary commercial benefits. Protection against the majority of opportunistic cyber attacks and cyber insurance benefits are the operational benefits.",
    benefits: [
      "Win tenders and contracts — Meets the minimum security requirement that many customers, prime contractors and tender processes set for suppliers.",
      "Insurance included — Eligible UK organisations under £20 million turnover receive cyber liability insurance with the certificate, up to £25,000.",
      "Stops common attacks — Five controls block the great majority of commodity attacks, whatever the size of your organisation",
      "Public proof — Listed on a public register, with a badge for your website, email footers and tenders.",
    ],
    certification_process: [
      "Scoping: we agree the scope covering the devices, software and network boundaries included.",
      "Self-assessment questionnaire: your organisation completes the SAQ confirming implementation of the five controls.",
      "Review: TRAIBCERT reviews the SAQ and requests clarification where needed.",
      "Certificate issue: Cyber Essentials certificate valid for twelve months.",
      "Annual renewal: the certificate must be renewed annually.",
    ],
    implementation_intro:
      "Cyber Essentials implementation typically takes two to four weeks for organisations with a clear IT inventory and basic security controls already in place. The main work is ensuring the five controls are consistently implemented across all in-scope devices.",
    implementation_steps: [
      "Define the scope: identify all devices, software and network boundaries in scope.",
      "Implement boundary firewalls: ensure all internet-facing boundaries are protected by firewalls with appropriate rules.",
      "Implement secure configuration: remove unnecessary software, change default passwords and disable unnecessary services.",
      "Implement user access control: limit user privileges to what is needed for each role and use multi-factor authentication for internet-facing services.",
      "Implement malware protection: deploy anti-malware software on all in-scope devices.",
      "Implement patch management: ensure all software is patched within 14 days of a patch being released.",
      "Complete the self-assessment questionnaire and submit to TRAIBCERT.",
    ],
    implementation_transition:
      "Cyber Essentials is updated periodically by IASME and the NCSC. The current version (Montpellier) introduced requirements for multi-factor authentication for cloud services and home working devices.",
    why_choose_intro: [
      "TRAIBCERT is an IASME-authorised Cyber Essentials certification body. We provide clear guidance on scoping and the five controls, and our review process is straightforward and efficient.",
      "Organisations can progress from Cyber Essentials to Cyber Essentials Plus with TRAIBCERT, with the Plus assessment building on the self-assessment already completed.",
    ],
    industries: [
      "Technology & SaaS -- government and enterprise supply chain",
      "Public Sector & Government -- mandatory for government suppliers",
      "Healthcare -- NHS and healthcare supply chain",
      "Banking & Financial Services -- financial services supply chain",
      "Manufacturing & Supply Chain -- defence and critical infrastructure supply chain",
    ],
    who_needs_certification: [
      "UK government suppliers required to hold Cyber Essentials as a contract condition.",
      "Organisations in defence, healthcare and financial services supply chains with Cyber Essentials requirements.",
      "Businesses seeking to demonstrate baseline cyber security to customers and insurers.",
    ],
    self_check: [
      "All internet-facing boundaries are protected by firewalls with appropriate rules",
      "Unnecessary software is removed and default passwords are changed on all in-scope devices",
      "User privileges are limited to what is needed and MFA is used for internet-facing services",
      "Anti-malware software is deployed on all in-scope devices",
      "All software is patched within 14 days of a patch being released",
    ],
    training: "Cyber Essentials Awareness",
    also_need: ["Cyber Essentials Plus", "ISO 27001:2022"],
    faqs: [
      {
        q: "How long does Cyber Essentials certification take?",
        a: "Most organisations complete the self-assessment and receive their certificate within two to four weeks, assuming the five controls are already implemented.",
      },
      {
        q: "How long is a Cyber Essentials certificate valid?",
        a: "Cyber Essentials certificates are valid for twelve months and must be renewed annually.",
      },
    ],
  }),

  // ── Cyber Essentials Plus ─────────────────────────────────────────────────
  base({
    slug: "cyber-essentials-plus",
    code: "Cyber Essentials Plus",
    title: "Cyber Essentials Plus",
    category: "cyber",
    discipline: "Cyber security",
    summary:
      "Cyber Essentials Plus is the higher level of the UK government-backed Cyber Essentials scheme. It includes all the requirements of Cyber Essentials but adds an independent technical verification of the five controls by an authorised assessor. TRAIBCERT provides Cyber Essentials Plus certification for organisations requiring independent verification of their cyber security controls.",
    whatItIs: [
      "Cyber Essentials Plus is the higher level of the Cyber Essentials scheme. It covers the same five technical controls as Cyber Essentials -- firewalls, secure configuration, user access control, malware protection and patch management -- but adds an independent technical assessment by an authorised assessor to verify that the controls are implemented as claimed.",
      "The technical assessment includes vulnerability scanning of internet-facing systems, internal vulnerability scanning, and testing of malware protection and patch management controls on a sample of devices. The assessment is conducted on-site or remotely depending on the scope.",
      "Cyber Essentials Plus provides a higher level of assurance than the self-assessment route and is required by some government departments and defence contractors.",
    ],
    important: [
      "Independent verification provides higher assurance than self-assessment. The technical assessment verifies that the five controls are actually implemented, not just that the organisation believes they are.",
      "Some government departments and defence contractors require Cyber Essentials Plus rather than the basic Cyber Essentials certification.",
      "The Plus assessment often identifies vulnerabilities and misconfigurations that the self-assessment process missed, providing additional security improvement value.",
    ],
    emsFramework: [
      "Cyber Essentials Plus uses the same five controls framework as Cyber Essentials. The difference is the verification method: instead of a self-assessment questionnaire, an authorised assessor conducts technical testing to verify that the controls are implemented.",
      "The technical assessment covers: external vulnerability scanning of internet-facing IP addresses, internal vulnerability scanning of a sample of devices, testing of malware protection controls, testing of patch management controls, and verification of user access control and MFA implementation.",
    ],
    whoNeedsIt: [
      "Organisations required to hold Cyber Essentials Plus by government departments or defence contractors",
      "Organisations wanting independent verification of their cyber security controls",
      "Businesses seeking the highest level of Cyber Essentials assurance",
    ],
    benefit_para:
      "Independent verification of cyber security controls provides higher assurance to customers and supply chains than self-assessment. Some government and defence contracts specifically require Cyber Essentials Plus.",
    benefits: [
      "Independent verification -- technical assessment provides higher assurance than self-assessment.",
      "Contract access -- required by some government departments and defence contractors.",
      "Vulnerability identification -- the technical assessment often identifies vulnerabilities missed by self-assessment.",
      "Customer confidence -- demonstrates a higher level of cyber security assurance to customers.",
    ],
    certification_process: [
      "Cyber Essentials prerequisite: Cyber Essentials Plus requires a current Cyber Essentials certificate.",
      "Scoping: we agree the scope and schedule the technical assessment.",
      "Technical assessment: external vulnerability scanning, internal scanning and device testing.",
      "Certificate issue: Cyber Essentials Plus certificate valid for twelve months.",
      "Annual renewal: both Cyber Essentials and Cyber Essentials Plus must be renewed annually.",
    ],
    implementation_intro:
      "Organisations must hold a current Cyber Essentials certificate before applying for Cyber Essentials Plus. The technical assessment is typically conducted within two to four weeks of the Cyber Essentials certificate being issued.",
    implementation_steps: [
      "Obtain Cyber Essentials certification first.",
      "Ensure all five controls are consistently implemented across all in-scope devices.",
      "Remediate any vulnerabilities identified during the Cyber Essentials self-assessment.",
      "Schedule the Cyber Essentials Plus technical assessment with TRAIBCERT.",
      "Remediate any findings from the technical assessment within the agreed timeframe.",
      "Receive Cyber Essentials Plus certificate on successful completion.",
    ],
    implementation_transition:
      "Cyber Essentials Plus is renewed annually alongside Cyber Essentials. The technical assessment must be repeated each year.",
    why_choose_intro: [
      "TRAIBCERT is an IASME-authorised Cyber Essentials certification body providing both Cyber Essentials and Cyber Essentials Plus. Our assessors conduct thorough technical assessments and provide clear remediation guidance for any findings.",
      "Organisations can complete both Cyber Essentials and Cyber Essentials Plus with TRAIBCERT, with the Plus assessment building efficiently on the self-assessment already completed.",
    ],
    industries: [
      "Public Sector & Government -- government departments requiring Plus",
      "Manufacturing & Supply Chain -- defence supply chain",
      "Technology & SaaS -- high-assurance cyber security requirements",
      "Banking & Financial Services -- financial services supply chain",
    ],
    who_needs_certification: [
      "Organisations required to hold Cyber Essentials Plus by government departments or defence contractors.",
      "Organisations wanting independent technical verification of their cyber security controls.",
    ],
    self_check: [
      "A current Cyber Essentials certificate is in place",
      "All five controls are consistently implemented across all in-scope devices",
      "Internet-facing systems are patched and free of known vulnerabilities",
      "MFA is implemented for all internet-facing services and cloud accounts",
    ],
    training: "Cyber Essentials Awareness",
    also_need: ["ISO 27001:2022", "Cyber Essentials"],
    faqs: [
      {
        q: "Do I need Cyber Essentials before Cyber Essentials Plus?",
        a: "Yes. Cyber Essentials Plus requires a current Cyber Essentials certificate as a prerequisite.",
      },
    ],
  }),

  // ── ISO 27001 ─────────────────────────────────────────────────────────────
  base({
    slug: "iso-27001",
    code: "ISO 27001:2022",
    title: "ISO 27001 Information Security Management System",
    category: "cyber",
    discipline: "Information security management",
    summary:
      "ISO/IEC 27001:2022 is the international standard for information security management systems. It provides a framework for establishing, implementing, maintaining and continually improving an ISMS to protect the confidentiality, integrity and availability of information. TRAIBCERT provides accredited ISO 27001 certification for organisations across the UK, UAE and internationally.",
    whatItIs: [
      "ISO/IEC 27001:2022 is the international standard for information security management systems, published jointly by ISO and IEC. The 2022 edition updated the 2013 edition with a revised Annex A control set, reorganised from 14 domains and 114 controls to four themes and 93 controls, including 11 new controls addressing areas such as threat intelligence, cloud security and data masking.",
      "The standard requires organisations to assess information security risks, select appropriate controls from Annex A and other sources, implement and operate the ISMS, monitor and measure its performance, and drive continual improvement. The scope can cover the entire organisation or specific business units, locations or systems.",
      "An ISO 27001 certificate demonstrates to customers, regulators and stakeholders that information security risks are managed systematically through an audited, independently certified management system.",
    ],
    important: [
      "Enterprise customer and procurement requirements drive most certifications. Technology companies, financial services firms and professional services organisations are routinely required to hold ISO 27001 certification by enterprise customers as evidence of information security management maturity.",
      "Regulatory alignment is a significant benefit. ISO 27001 provides a management system framework that supports compliance with GDPR, NIS2, the UK Cyber Resilience Act and other information security regulations.",
      "The 2022 edition introduced 11 new controls addressing modern threats including threat intelligence, physical security monitoring, configuration management, ICT readiness for business continuity, web filtering, secure coding, cloud service security, data masking, data leakage prevention, monitoring activities and vulnerability management.",
    ],
    emsFramework: [
      "ISO 27001 requires an information security risk assessment that identifies information security risks, assesses their likelihood and impact, and selects controls to treat them. The Statement of Applicability (SoA) documents which Annex A controls are applicable, which are implemented and the justification for any exclusions.",
      "The Annex A control set is organised into four themes: organisational controls (37 controls), people controls (8 controls), physical controls (14 controls) and technological controls (34 controls). The 11 new controls in the 2022 edition address threat intelligence, physical security monitoring, configuration management, ICT readiness, web filtering, secure coding, cloud security, data masking, data leakage prevention, monitoring and vulnerability management.",
    ],
    whoNeedsIt: [
      "Technology companies and SaaS providers handling customer data",
      "Financial services, healthcare and professional services organisations",
      "Organisations required to hold ISO 27001 by enterprise customers",
      "Organisations subject to GDPR, NIS2 or other information security regulations",
    ],
    benefit_para:
      "Enterprise customer access and regulatory compliance are the primary drivers. Systematic information security risk management reduces the likelihood and impact of security incidents, data breaches and the associated regulatory and reputational consequences.",
    benefits: [
      "Customer access -- certification satisfies information security requirements from enterprise customers in technology, financial services and professional services.",
      "Regulatory alignment -- provides a management system framework supporting GDPR, NIS2 and other information security regulations.",
      "Risk reduction -- systematic risk assessment and control selection reduces the likelihood and impact of security incidents.",
      "Integration -- the Annex SL structure means ISO 27001 integrates with ISO 9001, ISO 22301 and ISO 42001.",
    ],
    certification_process: [
      "Application and quotation: we agree the scope of the ISMS and the information assets included.",
      "Stage 1 audit: review of the ISMS documentation, risk assessment, Statement of Applicability and control implementation.",
      "Stage 2 audit: on-site audit verifying that the ISMS operates as documented and controls are effective.",
      "Certificate issue: accredited ISO 27001:2022 certificate valid for three years.",
      "Surveillance and recertification: annual surveillance; recertification in year three.",
    ],
    implementation_intro:
      "First-time certification typically takes six to twelve months. The information security risk assessment and Statement of Applicability are the most time-consuming elements. Organisations already holding ISO 27001:2013 certificates must transition to the 2022 edition by October 2025.",
    implementation_steps: [
      "Obtain ISO 27001:2022, define the scope of the ISMS and secure top management commitment.",
      "Conduct an information security risk assessment: identify information assets, threats, vulnerabilities and risks.",
      "Select controls from Annex A and other sources to treat identified risks and document the Statement of Applicability.",
      "Implement selected controls across organisational, people, physical and technological domains.",
      "Establish the ISMS governance: policy, objectives, roles, responsibilities and documented information.",
      "Run the ISMS for at least three months, monitoring control effectiveness and handling security incidents.",
      "Complete an internal audit and management review.",
      "Apply to TRAIBCERT for Stage 1 and Stage 2 audits.",
    ],
    implementation_transition:
      "Organisations holding ISO 27001:2013 certificates must transition to the 2022 edition by 31 October 2025. The main changes are the revised Annex A control set and 11 new controls. TRAIBCERT schedules transition audits at the next surveillance or recertification visit.",
    why_choose_intro: [
      "TRAIBCERT provides ISO 27001 certification for technology companies, financial services firms and professional services organisations. Our auditors have experience across the full Annex A control set and understand the practical implementation of information security controls in diverse technology environments.",
      "Clients receive a fixed price for the full three-year cycle, a planned route through the 2022 edition transition, and audit reports that describe findings in terms of their own risk assessment and control implementation.",
    ],
    industries: [
      "Technology & SaaS -- software development, cloud services and data processing",
      "Banking & Financial Services -- financial data and customer information protection",
      "Healthcare -- patient data and clinical system security",
      "Professional Services -- client data and confidentiality",
      "Public Sector & Government -- government data and NIS2 compliance",
      "Manufacturing & Supply Chain -- operational technology and supply chain security",
    ],
    who_needs_certification: [
      "Technology companies required to hold ISO 27001 by enterprise customers as a condition of contract.",
      "Organisations subject to GDPR, NIS2 or other information security regulations requiring a management system framework.",
      "Financial services and healthcare organisations with stringent information security requirements.",
    ],
    self_check: [
      "An information security risk assessment has been completed and risks are documented",
      "A Statement of Applicability documents which Annex A controls are applicable and implemented",
      "Controls are implemented across organisational, people, physical and technological domains",
      "Security incidents are handled through a documented incident management process",
      "An internal audit and management review have been completed in the last twelve months",
    ],
    training: "ISO 27001:2022 Foundation, Awareness, Internal Auditor, Lead Auditor",
    also_need: ["Cyber Essentials", "ISO 22301:2019", "ISO 42001:2023", "ISO 27701"],
    faqs: [
      {
        q: "What changed in ISO 27001:2022?",
        a: "The 2022 edition revised the Annex A control set from 114 controls in 14 domains to 93 controls in four themes, and added 11 new controls addressing threat intelligence, cloud security, data masking, secure coding and other modern security topics.",
      },
      {
        q: "When must we transition from ISO 27001:2013 to ISO 27001:2022?",
        a: "All ISO 27001:2013 certificates must be transitioned to the 2022 edition by 31 October 2025. TRAIBCERT schedules transition audits at the next surveillance or recertification visit.",
      },
    ],
  }),

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
].map((slug) => standardsBySlug[slug]).filter((s): s is Standard => s !== undefined);
