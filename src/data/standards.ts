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
  certification_process: string[];
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
  }),
  // ── ISO 22000 ─────────────────────────────────────────────────────────────
  base({
    slug: "iso-22000",
    code: "ISO 22000:2018",
    title: "ISO 22000 Food Safety Management Systems",
    category: "iso",
    discipline: "Food safety management",
    summary:
      "ISO 22000:2018 is the international standard for food safety management systems, applicable to all organisations in the food chain from primary production through to retail and food service. It combines the Annex SL management system structure with HACCP principles and prerequisite programmes to provide a comprehensive framework for controlling food safety hazards. TRAIBCERT provides accredited ISO 22000 certification across the UK, UAE and internationally.",
    whatItIs: [
      "ISO 22000:2018 is the international standard for food safety management systems. It applies to any organisation in the food chain -- farmers, processors, manufacturers, packers, distributors, retailers, caterers and providers of food-related services such as equipment, packaging and cleaning. The 2018 edition adopted the Annex SL high-level structure, aligning it with ISO 9001 and ISO 14001.",
      "The standard integrates the Codex Alimentarius HACCP principles with prerequisite programmes (PRPs) and management system requirements. Hazard analysis identifies food safety hazards, PRPs control the environment in which food is produced, and HACCP plans control significant hazards at critical control points.",
      "An ISO 22000 certificate demonstrates to customers, retailers and regulators that food safety hazards are systematically identified, controlled and monitored throughout the supply chain.",
    ],
    important: [
      "Customer and retailer requirements drive most certifications. Major retailers, food service operators and brand owners require their suppliers to hold a recognised food safety certification. ISO 22000 is accepted globally and satisfies requirements across diverse markets.",
      "Regulatory compliance is supported by the requirement to identify applicable food safety legislation and demonstrate that legal requirements are met through the management system.",
      "Brand protection is the risk management benefit. A food safety incident -- contamination, recall or illness -- causes immediate and lasting reputational damage. A certified system with documented controls and traceability reduces both the likelihood and the impact of such events.",
    ],
    emsFramework: [
      "ISO 22000 combines three elements: prerequisite programmes that control the general food safety environment (hygiene, pest control, allergen management, cleaning), hazard analysis that identifies biological, chemical and physical hazards at each step of the process, and HACCP plans that establish critical control points, critical limits, monitoring procedures and corrective actions for significant hazards.",
      "The Annex SL management system structure provides the governance framework: leadership commitment, planning, support, operational control, performance evaluation and improvement. The combination ensures that food safety is managed both at the operational level through HACCP and at the organisational level through the management system.",
    ],
    whoNeedsIt: [
      "Food manufacturers, processors and packers",
      "Primary producers, farmers and growers",
      "Food retailers, distributors and logistics providers",
      "Caterers, restaurants and food service operators",
      "Providers of food contact materials, equipment and services",
    ],
    benefit_para:
      "Retailer and customer access is the primary commercial benefit: ISO 22000 certification satisfies food safety requirements in major retail and food service supply chains. Reduced risk of food safety incidents, recalls and regulatory action is the operational benefit.",
    benefits: [
      "Supply chain access -- certification satisfies food safety requirements from major retailers, food service operators and brand owners.",
      "Hazard control -- the combination of PRPs and HACCP plans provides systematic control of biological, chemical and physical food safety hazards.",
      "Regulatory compliance -- the management system provides documented evidence that applicable food safety legislation is identified and met.",
      "Traceability -- documented controls and records support product traceability and rapid response in the event of a food safety incident.",
    ],
    certification_process: [
      "Application and quotation: we agree the scope covering the food chain steps and products in scope, calculate audit days and provide a fixed price.",
      "Stage 1 audit: review of the food safety management system documentation, hazard analysis, HACCP plans and PRPs.",
      "Stage 2 audit: on-site audit verifying that the system operates as documented, including observation of production processes and verification of critical control points.",
      "Certificate issue: accredited ISO 22000:2018 certificate valid for three years.",
      "Surveillance and recertification: annual surveillance audits; recertification in year three.",
    ],
    implementation_intro:
      "First-time certification typically takes four to nine months. Organisations with existing HACCP systems or BRC/SQF certification are usually quicker because the hazard analysis and prerequisite programmes already exist.",
    implementation_steps: [
      "Obtain ISO 22000:2018, secure top management commitment and appoint a food safety team leader.",
      "Define the scope covering the food chain steps, products and processes included.",
      "Establish prerequisite programmes covering hygiene, pest control, allergen management, cleaning and maintenance.",
      "Conduct hazard analysis: identify all biological, chemical and physical hazards at each process step and assess their significance.",
      "Develop HACCP plans for significant hazards: identify critical control points, establish critical limits, monitoring procedures and corrective actions.",
      "Write the food safety policy, set measurable food safety objectives and establish the documented information required by the standard.",
      "Run the system for at least three months, verifying that controls are effective and handling nonconformities through the corrective action process.",
      "Complete an internal audit and management review, then apply to TRAIBCERT.",
    ],
    implementation_transition:
      "Organisations holding ISO 22000:2005 certificates completed transition to the 2018 edition by June 2021. The key changes were adoption of the Annex SL structure, clearer separation of PRPs and HACCP, and strengthened requirements for communication and emergency preparedness.",
    why_choose_intro: [
      "TRAIBCERT auditors have experience across food manufacturing, processing, distribution and food service. We understand the practical application of HACCP and PRPs across diverse food categories and supply chain steps.",
      "Clients receive a fixed price for the full three-year cycle and audit reports that describe findings in terms of their own hazard analysis and control measures.",
    ],
    industries: [
      "Food & Beverage -- manufacturing, processing and packaging",
      "Retail & E-Commerce -- food retail and online food delivery",
      "Transport & Logistics -- cold chain and food distribution",
      "Agriculture -- primary production and farming",
      "Healthcare -- hospital catering and food service",
      "Education -- school and university catering",
    ],
    who_needs_certification: [
      "Organisations required to hold food safety certification by retail or food service customers.",
      "Food manufacturers and processors seeking to demonstrate systematic hazard control.",
      "Organisations in the food chain subject to food safety legislation and regulatory inspection.",
    ],
    self_check: [
      "Prerequisite programmes are documented and verified as effective",
      "A hazard analysis has been completed for all process steps and products",
      "HACCP plans are in place for all significant hazards with critical limits and monitoring",
      "Traceability records allow product to be traced through the supply chain",
      "An internal audit and management review have been completed in the last twelve months",
    ],
    training: "ISO 22000:2018 Foundation, Awareness, Internal Auditor, Lead Auditor",
    also_need: ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018"],
    faqs: [
      {
        q: "What is the difference between ISO 22000 and HACCP?",
        a: "HACCP is a food safety methodology for identifying and controlling hazards at critical control points. ISO 22000 incorporates HACCP within a full management system framework that also covers leadership, planning, support, performance evaluation and improvement.",
      },
      {
        q: "Is ISO 22000 recognised by GFSI?",
        a: "ISO 22000 itself is not a GFSI-benchmarked scheme, but FSSC 22000, which is built on ISO 22000, is GFSI-benchmarked and widely accepted by major retailers.",
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
      "ISO 22301:2019 is the international standard for business continuity management systems. It specifies requirements to plan, establish, implement, operate, monitor, review, maintain and continually improve a management system to protect against, reduce the likelihood of, prepare for, respond to and recover from disruptive incidents. TRAIBCERT provides accredited ISO 22301 certification across the UK, UAE and internationally.",
    whatItIs: [
      "ISO 22301:2019 is the international standard for business continuity management systems. It applies to organisations of all sizes and sectors that need to ensure continuity of critical activities during and after disruptive incidents -- whether caused by technology failure, supply chain disruption, natural events, cyber incidents or other threats.",
      "The standard uses the Annex SL high-level structure and requires organisations to understand their context, identify interested parties, determine the scope of the BCMS, conduct a business impact analysis, assess risks, establish business continuity strategies and plans, and test and exercise those plans.",
      "An ISO 22301 certificate demonstrates to customers, regulators and stakeholders that the organisation has a tested, audited business continuity management system capable of maintaining critical activities during disruption.",
    ],
    important: [
      "Customer and regulatory requirements drive many certifications. Financial services regulators, government departments and large enterprise customers increasingly require their critical suppliers to demonstrate business continuity capability through ISO 22301 certification.",
      "Operational resilience is the internal benefit. The business impact analysis identifies which activities are critical, the recovery time objectives for each, and the resources required to recover them. This clarity drives investment in the right resilience measures.",
      "Insurance and risk management benefits follow. Documented business continuity plans and evidence of regular testing can reduce insurance premiums and demonstrate due diligence in the event of a claim.",
    ],
    emsFramework: [
      "ISO 22301 requires a business impact analysis (BIA) that identifies critical activities, their dependencies and the maximum tolerable period of disruption for each. Risk assessment identifies threats to those activities. Business continuity strategies define how critical activities will be maintained or recovered within recovery time objectives.",
      "Business continuity plans document the procedures for responding to and recovering from specific disruptive incidents. The plans must be tested and exercised regularly, and lessons learned must feed back into plan improvement. The management system framework ensures that the BCMS is maintained, reviewed and improved over time.",
    ],
    whoNeedsIt: [
      "Financial services, utilities and critical infrastructure organisations",
      "IT service providers and cloud service operators",
      "Organisations required to demonstrate business continuity by customers or regulators",
      "Businesses seeking to protect revenue and reputation during disruptive incidents",
    ],
    benefit_para:
      "Regulatory compliance and customer confidence are the primary drivers. Operational resilience -- the ability to maintain critical activities during disruption -- is the internal benefit that protects revenue, reputation and customer relationships.",
    benefits: [
      "Regulatory compliance -- satisfies business continuity requirements from financial services regulators, government departments and enterprise customers.",
      "Operational resilience -- tested plans and trained teams reduce recovery time and the impact of disruptive incidents.",
      "Customer confidence -- certification demonstrates that critical services will be maintained during disruption.",
      "Insurance benefits -- documented plans and evidence of testing can support insurance negotiations.",
    ],
    certification_process: [
      "Application and quotation: we agree the scope of the BCMS and the critical activities included, calculate audit days and provide a fixed price.",
      "Stage 1 audit: review of the BCMS documentation, business impact analysis, risk assessment and business continuity plans.",
      "Stage 2 audit: on-site audit verifying that the BCMS operates as documented, including review of exercise and test records.",
      "Certificate issue: accredited ISO 22301:2019 certificate valid for three years.",
      "Surveillance and recertification: annual surveillance; recertification in year three.",
    ],
    implementation_intro:
      "First-time certification typically takes four to nine months. The business impact analysis and risk assessment are the most time-consuming elements for organisations without existing business continuity programmes.",
    implementation_steps: [
      "Obtain ISO 22301:2019, secure top management commitment and define the scope of the BCMS.",
      "Conduct a business impact analysis identifying critical activities, their dependencies and maximum tolerable periods of disruption.",
      "Assess risks to critical activities and identify appropriate business continuity strategies.",
      "Develop business continuity plans for each critical activity covering response, recovery and restoration.",
      "Establish the BCMS governance: policy, objectives, roles, responsibilities and documented information.",
      "Test and exercise the business continuity plans and record the results.",
      "Complete an internal audit and management review.",
      "Apply to TRAIBCERT for certification.",
    ],
    implementation_transition:
      "ISO 22301:2019 updated the 2012 edition with adoption of the Annex SL structure and clarified requirements for the business impact analysis and recovery strategies.",
    why_choose_intro: [
      "TRAIBCERT auditors have experience in business continuity management across financial services, IT services, utilities and the public sector. We assess the effectiveness of business continuity plans and exercises, not just their documentation.",
      "Clients receive a fixed price for the full three-year cycle and practical audit findings that help improve business continuity capability.",
    ],
    industries: [
      "Banking & Financial Services -- regulatory resilience requirements",
      "Technology & SaaS -- IT service continuity and cloud operations",
      "Public Sector & Government -- critical service continuity",
      "Healthcare -- clinical service continuity",
      "Energy & Oil/Gas -- operational continuity for critical infrastructure",
      "Transport & Logistics -- supply chain resilience",
    ],
    who_needs_certification: [
      "Organisations required to demonstrate business continuity capability by financial services regulators or government departments.",
      "IT service providers and cloud operators whose customers require evidence of service continuity planning.",
      "Businesses seeking to protect critical revenue streams and customer relationships during disruptive incidents.",
    ],
    self_check: [
      "A business impact analysis has identified critical activities and recovery time objectives",
      "Business continuity plans are in place for all critical activities",
      "Plans have been tested and exercised in the last twelve months",
      "Staff responsible for business continuity response are trained and aware of their roles",
      "An internal audit and management review have been completed in the last twelve months",
    ],
    training: "ISO 22301:2019 Foundation, Awareness, Internal Auditor, Lead Auditor",
    also_need: ["ISO 27001:2022", "ISO 20000-1:2018", "ISO 9001:2015"],
    faqs: [
      {
        q: "What is the difference between disaster recovery and business continuity?",
        a: "Disaster recovery focuses on restoring IT systems after a failure. Business continuity covers the full range of critical activities -- people, premises, technology and suppliers -- and how they will be maintained or recovered during any type of disruption.",
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
      "ISO 31000:2018 provides principles, a framework and a process for managing risk. It can be used by any organisation regardless of its size, activity or sector. TRAIBCERT provides ISO 31000 certification and advisory services to help organisations embed systematic risk management across their operations.",
    whatItIs: [
      "ISO 31000:2018 is the international standard for risk management. Unlike most ISO management system standards, it is a guidance standard rather than a requirements standard -- it provides principles and guidelines rather than certifiable requirements. However, organisations can be assessed against its framework.",
      "The standard defines risk as the effect of uncertainty on objectives and provides a framework for integrating risk management into all organisational activities. It covers the risk management process: communication and consultation, scope, context and criteria, risk assessment (identification, analysis and evaluation), risk treatment, monitoring and review, and recording and reporting.",
      "Organisations use ISO 31000 as the foundation for their enterprise risk management framework, and as the risk management reference for other ISO management system standards including ISO 9001, ISO 14001 and ISO 45001.",
    ],
    important: [
      "Enterprise risk management maturity is increasingly expected by boards, investors and regulators. ISO 31000 provides a recognised international framework for demonstrating that risk is managed systematically across the organisation.",
      "Integration with other management systems is a practical benefit. ISO 31000 provides the risk management methodology referenced by ISO 9001, ISO 14001, ISO 45001 and ISO 27001, so a single risk management framework can serve all management systems.",
      "Decision-making quality improves when risk is considered systematically. The standard's emphasis on integrating risk management into planning and decision-making processes drives better-informed decisions at all levels.",
    ],
    emsFramework: [
      "ISO 31000 describes a risk management framework covering mandate and commitment, design, implementation, evaluation and improvement. The risk management process covers communication and consultation, establishing context, risk identification, risk analysis, risk evaluation, risk treatment, monitoring and review.",
      "The standard emphasises that risk management should be integrated into all organisational processes and decision-making, not treated as a separate compliance activity.",
    ],
    whoNeedsIt: [
      "Organisations seeking to embed systematic risk management across all functions",
      "Boards and senior management teams requiring a recognised risk management framework",
      "Organisations using ISO 9001, ISO 14001 or ISO 45001 seeking a unified risk approach",
      "Financial services, public sector and regulated organisations",
    ],
    benefit_para:
      "Better-informed decisions and improved organisational resilience are the primary benefits. A recognised risk management framework also satisfies governance expectations from boards, investors and regulators.",
    benefits: [
      "Governance -- a recognised risk management framework satisfies board, investor and regulatory expectations.",
      "Integration -- ISO 31000 provides the risk methodology for ISO 9001, ISO 14001, ISO 45001 and ISO 27001.",
      "Decision quality -- systematic risk consideration improves the quality of decisions at all levels.",
      "Resilience -- proactive risk identification and treatment reduces the frequency and impact of adverse events.",
    ],
    certification_process: [
      "Assessment scope: we agree the scope of the risk management framework assessment.",
      "Documentation review: assessment of the risk management framework, process and records.",
      "On-site assessment: interviews and evidence review to assess implementation effectiveness.",
      "Assessment report: findings and recommendations for improvement.",
      "Periodic reassessment to maintain currency.",
    ],
    implementation_intro:
      "ISO 31000 implementation involves establishing a risk management framework, embedding the risk management process into organisational activities and building risk management capability across the organisation.",
    implementation_steps: [
      "Obtain ISO 31000:2018 and secure leadership commitment to systematic risk management.",
      "Design the risk management framework: mandate, policy, roles, responsibilities and integration with organisational processes.",
      "Establish the risk management process: context, risk identification, analysis, evaluation and treatment.",
      "Implement the framework across all functions and decision-making processes.",
      "Build risk management capability through training and awareness.",
      "Monitor and review the effectiveness of the risk management framework.",
      "Continually improve the framework based on review findings.",
    ],
    implementation_transition:
      "ISO 31000:2018 updated the 2009 edition with a more concise and focused presentation of principles, framework and process, and stronger emphasis on leadership commitment and integration.",
    why_choose_intro: [
      "TRAIBCERT provides ISO 31000 assessment and advisory services to help organisations build and embed effective risk management frameworks. Our assessors have experience across financial services, manufacturing, public sector and technology.",
      "We provide practical findings focused on improving risk management effectiveness, not just compliance with the standard.",
    ],
    industries: [
      "Banking & Financial Services -- enterprise risk management",
      "Public Sector & Government -- risk governance and accountability",
      "Manufacturing & Supply Chain -- operational and supply chain risk",
      "Technology & SaaS -- technology and cyber risk",
      "Energy & Oil/Gas -- high-consequence risk management",
    ],
    who_needs_certification: [
      "Organisations seeking to demonstrate risk management maturity to boards, investors or regulators.",
      "Organisations using multiple ISO management system standards seeking a unified risk framework.",
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
        q: "Is ISO 31000 a certifiable standard?",
        a: "ISO 31000 is a guidance standard, not a requirements standard. Organisations can be assessed against its framework, but traditional third-party certification is not available in the same way as for ISO 9001 or ISO 14001.",
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
      "ISO 26000 is structured around seven core subjects: organisational governance, human rights, labour practices, the environment, fair operating practices, consumer issues and community involvement and development. Each core subject includes issues and related actions and expectations.",
      "The standard provides guidance on understanding social responsibility, identifying and engaging with stakeholders, integrating social responsibility throughout the organisation and communicating about social responsibility.",
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
    title: "ISO 13485 Medical Devices Quality Management Systems",
    category: "iso",
    discipline: "Medical devices quality management",
    summary:
      "ISO 13485:2016 is the international standard for quality management systems for medical devices. It specifies requirements for a quality management system where an organisation needs to demonstrate its ability to provide medical devices and related services that consistently meet customer and applicable regulatory requirements. TRAIBCERT provides ISO 13485 certification for medical device manufacturers, distributors and service providers.",
    whatItIs: [
      "ISO 13485:2016 is the international standard for quality management systems in the medical device industry. It is based on ISO 9001 but includes additional requirements specific to medical devices, including risk management, sterile medical devices, implantable devices and in vitro diagnostic medical devices.",
      "The standard applies to organisations involved in one or more stages of the life cycle of a medical device, including design and development, production, storage and distribution, installation, servicing and final decommissioning and disposal. It also applies to suppliers and other external parties that provide products and services to such organisations.",
      "ISO 13485 certification is required or expected by regulatory authorities and customers in most major medical device markets, including the EU (MDR/IVDR), UK (UKCA), USA (FDA) and Canada (Health Canada).",
    ],
    important: [
      "Regulatory market access is the primary driver. ISO 13485 certification is required for CE marking under the EU Medical Device Regulation (MDR) and In Vitro Diagnostic Regulation (IVDR), and is expected by regulatory authorities in most major markets.",
      "Customer requirements reinforce regulatory requirements. Medical device distributors, hospitals and healthcare systems require their suppliers to hold ISO 13485 certification as evidence of quality management system maturity.",
      "Risk management integration is a distinctive requirement. ISO 13485 requires risk management to be integrated throughout the product life cycle, aligned with ISO 14971 (risk management for medical devices).",
    ],
    emsFramework: [
      "ISO 13485 follows the ISO 9001 structure with medical device-specific additions. Key additions include requirements for risk management throughout the product life cycle, specific requirements for sterile medical devices and implantable devices, advisory notices and field safety corrective actions, and feedback and complaint handling aligned with regulatory requirements.",
      "The standard requires documented procedures for all key processes, including design and development, purchasing, production and service provision, sterilisation, labelling and packaging, installation and servicing.",
    ],
    whoNeedsIt: [
      "Medical device manufacturers and assemblers",
      "Medical device distributors and importers",
      "Contract manufacturers and component suppliers to the medical device industry",
      "Organisations providing services to medical device manufacturers",
    ],
    benefit_para:
      "Regulatory market access is the primary benefit: ISO 13485 certification is required for CE marking and is expected by regulatory authorities in most major medical device markets. Customer access and supply chain qualification follow.",
    benefits: [
      "Regulatory market access -- required for CE marking under EU MDR/IVDR and expected by regulatory authorities globally.",
      "Customer qualification -- satisfies quality management requirements from medical device customers and distributors.",
      "Risk management -- integrated risk management throughout the product life cycle reduces the likelihood of device failures and recalls.",
      "Supply chain confidence -- demonstrates quality management maturity to customers and regulatory authorities.",
    ],
    certification_process: [
      "Application and quotation: we agree the scope covering the medical device types and life cycle stages included.",
      "Stage 1 audit: review of the quality management system documentation, risk management files and regulatory compliance.",
      "Stage 2 audit: on-site audit verifying that the quality management system operates as documented.",
      "Certificate issue: ISO 13485:2016 certificate valid for three years.",
      "Surveillance and recertification: annual surveillance; recertification in year three.",
    ],
    implementation_intro:
      "First-time certification typically takes six to twelve months for medical device manufacturers, reflecting the complexity of the regulatory requirements and the need for documented risk management files.",
    implementation_steps: [
      "Obtain ISO 13485:2016 and identify the applicable regulatory requirements for your device types and markets.",
      "Define the scope covering the device types, life cycle stages and sites included.",
      "Establish risk management processes aligned with ISO 14971.",
      "Document all required procedures including design and development, purchasing, production, sterilisation (if applicable) and post-market surveillance.",
      "Implement the quality management system and collect records for at least three months.",
      "Complete an internal audit covering all clauses and processes in scope.",
      "Hold a management review and apply to TRAIBCERT.",
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
      "Cyber Essentials is a UK government-backed certification scheme that helps organisations protect against the most common cyber attacks. It covers five technical controls that block the majority of opportunistic attacks. TRAIBCERT is an IASME-authorised Cyber Essentials certification body providing Cyber Essentials and Cyber Essentials Plus certification across the UK.",
    whatItIs: [
      "Cyber Essentials is a UK government-backed certification scheme managed by IASME on behalf of the National Cyber Security Centre (NCSC). It was introduced in 2014 to help organisations protect themselves against the most common cyber attacks and demonstrate a baseline level of cyber security to customers and supply chains.",
      "The scheme covers five technical controls: firewalls, secure configuration, user access control, malware protection and patch management. These five controls, when properly implemented, protect against the vast majority of opportunistic cyber attacks that exploit known vulnerabilities and poor security hygiene.",
      "Cyber Essentials certification is mandatory for UK government contracts involving the handling of personal information or the provision of certain technical products and services. It is also widely required in the supply chains of defence, healthcare and financial services organisations.",
    ],
    important: [
      "UK government contract requirements make Cyber Essentials mandatory for many suppliers. Any organisation bidding for UK government contracts involving personal data or certain technical services must hold Cyber Essentials certification.",
      "Supply chain requirements are growing. Defence, healthcare, financial services and critical national infrastructure organisations increasingly require their suppliers to hold Cyber Essentials as a baseline cyber security requirement.",
      "Cyber insurance benefits follow. Many cyber insurers offer reduced premiums or improved terms for organisations holding Cyber Essentials certification, recognising that the five controls significantly reduce the risk of common attacks.",
    ],
    emsFramework: [
      "Cyber Essentials is not a management system standard -- it is a technical controls assessment. The five controls are: boundary firewalls and internet gateways (controlling network traffic), secure configuration (removing unnecessary software and changing default settings), user access control (limiting user privileges), malware protection (using anti-malware software), and patch management (keeping software up to date).",
      "The self-assessment questionnaire (SAQ) asks organisations to confirm that the five controls are implemented across all in-scope devices and software. An authorised certification body reviews the SAQ and issues the certificate if the controls are confirmed as implemented.",
    ],
    whoNeedsIt: [
      "UK government suppliers handling personal data or providing technical services",
      "Organisations in defence, healthcare and financial services supply chains",
      "Businesses seeking cyber insurance at competitive rates",
      "Organisations wanting to demonstrate baseline cyber security to customers",
    ],
    benefit_para:
      "UK government contract access and supply chain qualification are the primary commercial benefits. Protection against the majority of opportunistic cyber attacks and cyber insurance benefits are the operational benefits.",
    benefits: [
      "Government contract access -- mandatory for UK government contracts involving personal data or technical services.",
      "Supply chain qualification -- satisfies baseline cyber security requirements in defence, healthcare and financial services supply chains.",
      "Attack prevention -- the five controls protect against the majority of opportunistic cyber attacks.",
      "Cyber insurance -- many insurers offer improved terms for Cyber Essentials certified organisations.",
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
