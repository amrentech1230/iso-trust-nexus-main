export type StandardCategory = "iso" | "cyber" | "sustainability" | "inspection";

export type Standard = {
  slug: string;
  code: string;
  title: string;
  category: StandardCategory;
  tag?: "NEW" | "CURRENT";
  discipline: string;
  summary: string;
  whatItIs: string;
  whoNeedsIt: string[];
  benefits: string[];
  requirements: string[];
  training?: string;
  faqs?: { q: string; a: string }[];
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
    slug: "iso-9001",
    code: "ISO 9001:2015",
    title: "ISO 9001:2015 Quality Management",
    category: "iso",
    discipline: "Quality management",
    summary:
      "The world's most widely adopted quality management standard, used to deliver consistent products and services and demonstrate capability to customers.",
    whatItIs:
      "ISO 9001:2015 sets out the requirements for a quality management system (QMS). It is built on a process approach, risk-based thinking and the Plan-Do-Check-Act cycle, so quality is managed across the whole organisation rather than inspected at the end.",
    whoNeedsIt: [
      "Organisations bidding for contracts that require certified quality management",
      "Manufacturers and suppliers with multi-stage production or supply chains",
      "Service organisations standardising delivery across teams or sites",
      "Any business seeking fewer defects, complaints and reworks",
    ],
    benefits: [
      "Independent, accredited proof of quality capability",
      "Stronger tender and framework eligibility",
      "Fewer nonconformities, reworks and customer complaints",
      "Clear responsibilities and repeatable processes",
    ],
    training: "iso-9001",
    faqs: [
      {
        q: "How long does ISO 9001 certification take?",
        a: "It depends on the size and complexity of your organisation and how mature your current processes are. We confirm a realistic timeline after the initial scoping discussion.",
      },
      {
        q: "Is ISO 9001 being revised?",
        a: "A revision of ISO 9001 is anticipated. We offer gap assessments so you can plan the transition alongside your existing certification cycle.",
      },
    ],
  }),
  base({
    slug: "iso-14001",
    code: "ISO 14001:2026",
    title: "ISO 14001 Environmental Management",
    category: "iso",
    tag: "CURRENT",
    discipline: "Environmental management",
    summary:
      "Environmental management system certification for organisations managing environmental impact, legal compliance and resource efficiency.",
    whatItIs:
      "ISO 14001 specifies requirements for an environmental management system (EMS). It helps you identify environmental aspects and impacts, meet compliance obligations and improve environmental performance in a structured, auditable way.",
    whoNeedsIt: [
      "Manufacturers, construction and engineering businesses",
      "Organisations with permits, consents or waste obligations",
      "Suppliers asked to evidence environmental credentials",
      "Organisations building an ESG or net-zero programme",
    ],
    benefits: [
      "Structured control of environmental risk and compliance",
      "Reduced waste, energy and resource costs",
      "Credible evidence for tenders and ESG reporting",
      "A foundation for carbon and net-zero work",
    ],
    training: "iso-14001",
  }),
  base({
    slug: "iso-45001",
    code: "ISO 45001:2018",
    title: "ISO 45001:2018 Occupational Health & Safety",
    category: "iso",
    discipline: "Health & safety",
    summary:
      "Occupational health and safety management system certification focused on preventing work-related injury and ill health.",
    whatItIs:
      "ISO 45001 sets requirements for an occupational health and safety management system, including hazard identification, worker consultation and participation, operational control and incident investigation.",
    whoNeedsIt: [
      "Construction, manufacturing and logistics organisations",
      "Organisations with high-risk activities or contractor networks",
      "Employers replacing legacy OH&S frameworks",
      "Businesses required to evidence safety performance in tenders",
    ],
    benefits: [
      "Reduced incidents, absence and insurance exposure",
      "Demonstrable duty-of-care and legal awareness",
      "Meaningful worker participation in safety",
      "Recognised assurance for clients and regulators",
    ],
    training: "iso-45001",
  }),
  base({
    slug: "iso-22000",
    code: "ISO 22000:2018",
    title: "ISO 22000:2018 Food Safety Management",
    category: "iso",
    discipline: "Food safety",
    summary:
      "Food safety management system certification combining HACCP principles with management system discipline across the food chain.",
    whatItIs:
      "ISO 22000 specifies requirements for a food safety management system for any organisation in the food chain, integrating HACCP, prerequisite programmes and hazard control planning.",
    whoNeedsIt: [
      "Food manufacturers, processors and packers",
      "Catering, hospitality and food service operators",
      "Ingredient suppliers, storage and distribution businesses",
      "Retailers requiring supplier assurance",
    ],
    benefits: [
      "Systematic control of food safety hazards",
      "Confidence for retailers and food service buyers",
      "Alignment with regulatory expectations",
      "Fewer recalls, complaints and product losses",
    ],
    training: "iso-22000",
  }),
  base({
    slug: "iso-22301",
    code: "ISO 22301:2019",
    title: "ISO 22301:2019 Business Continuity",
    category: "iso",
    discipline: "Business continuity",
    summary:
      "Business continuity management system certification for organisations that must keep critical services running through disruption.",
    whatItIs:
      "ISO 22301 sets requirements for a business continuity management system, including business impact analysis, continuity strategies, plans and exercising.",
    whoNeedsIt: [
      "Financial services, healthcare and public sector suppliers",
      "Technology and data-centre operators",
      "Organisations with contractual resilience obligations",
      "Businesses dependent on single sites or key suppliers",
    ],
    benefits: [
      "Tested plans for the disruptions that matter most",
      "Reduced downtime and recovery cost",
      "Assurance for clients, insurers and regulators",
      "Clear roles and escalation during incidents",
    ],
    training: "iso-22301",
  }),
  base({
    slug: "iso-20000-1",
    code: "ISO/IEC 20000-1:2018",
    title: "ISO/IEC 20000-1:2018 IT Service Management",
    category: "iso",
    discipline: "IT service management",
    summary:
      "Service management system certification for IT service providers who need to evidence reliable, measurable service delivery.",
    whatItIs:
      "ISO/IEC 20000-1 specifies requirements for a service management system (SMS), covering service planning, design, transition, delivery and improvement.",
    whoNeedsIt: [
      "Managed service providers and IT outsourcers",
      "Internal IT functions with defined service catalogues",
      "SaaS providers with service-level commitments",
      "Public sector IT suppliers",
    ],
    benefits: [
      "Consistent, measurable service performance",
      "Stronger position in IT procurement",
      "Clear incident, change and problem management",
      "Integrates well with ISO 27001",
    ],
    training: "iso-20000-1",
  }),
  base({
    slug: "iso-10002",
    code: "ISO 10002:2018",
    title: "ISO 10002:2018 Complaints Management",
    category: "iso",
    discipline: "Customer satisfaction",
    summary:
      "Guidance-based certification for organisations that want a fair, visible and effective complaints handling process.",
    whatItIs:
      "ISO 10002 describes how to plan, design, operate and improve a complaints handling process so complaints are resolved consistently and used to drive improvement.",
    whoNeedsIt: [
      "Regulated service providers",
      "Consumer-facing organisations with high contact volumes",
      "Public bodies with statutory complaint duties",
      "Organisations recovering from reputational issues",
    ],
    benefits: [
      "Faster, fairer complaint resolution",
      "Improved customer retention and trust",
      "Insight from complaint root-cause analysis",
      "Evidence of customer-focused governance",
    ],
  }),
  base({
    slug: "iso-21001",
    code: "ISO 21001:2018",
    title: "ISO 21001:2018 Educational Organisations",
    category: "iso",
    discipline: "Education management",
    summary:
      "Management system certification for educational organisations focused on learner needs and educational outcomes.",
    whatItIs:
      "ISO 21001 sets requirements for an educational organisation management system (EOMS), placing learners and other beneficiaries at the centre of planning and delivery.",
    whoNeedsIt: [
      "Schools, colleges and universities",
      "Training providers and academies",
      "EdTech and online learning organisations",
      "Corporate learning functions",
    ],
    benefits: [
      "Learner-centred processes and measurable outcomes",
      "Consistent delivery across programmes and sites",
      "Credibility with learners, parents and funders",
      "Structured approach to inclusion and accessibility",
    ],
  }),
  base({
    slug: "iso-41001",
    code: "ISO 41001:2018",
    title: "ISO 41001:2018 Facility Management",
    category: "iso",
    discipline: "Facility management",
    summary:
      "Facility management system certification for in-house teams and FM service providers.",
    whatItIs:
      "ISO 41001 specifies requirements for a facility management system, aligning the built environment and support services with organisational objectives.",
    whoNeedsIt: [
      "FM service providers and contractors",
      "Estates and workplace teams",
      "Multi-site property operators",
      "Organisations consolidating FM supply chains",
    ],
    benefits: [
      "Aligned FM strategy, service levels and cost control",
      "Improved workplace safety and productivity",
      "Better supplier and contract governance",
      "Recognised assurance for FM tenders",
    ],
    training: "iso-41001",
  }),
  base({
    slug: "iso-31000",
    code: "ISO 31000:2018",
    title: "ISO 31000:2018 Risk Management",
    category: "iso",
    discipline: "Risk management",
    summary:
      "Risk management framework guidance used to embed consistent risk practice across governance and decision-making.",
    whatItIs:
      "ISO 31000 provides principles, a framework and a process for managing risk. It is guidance rather than a requirements standard, so it is typically used for assessment, training and framework development.",
    whoNeedsIt: [
      "Boards and risk functions formalising risk appetite",
      "Organisations integrating risk across ISO systems",
      "Project and programme-heavy businesses",
      "Regulated organisations with governance obligations",
    ],
    benefits: [
      "Common risk language across the organisation",
      "Better informed decisions and prioritisation",
      "Alignment of risk with strategy and objectives",
      "Support for other ISO management systems",
    ],
    training: "iso-31000",
    requirements: [
      "Risk management principles and value creation",
      "Leadership, integration and framework design",
      "Risk identification, analysis and evaluation",
      "Risk treatment and residual risk decisions",
      "Monitoring, review, recording and reporting",
    ],
  }),
  base({
    slug: "iso-26000",
    code: "ISO 26000:2010",
    title: "ISO 26000:2010 Social Responsibility",
    category: "iso",
    discipline: "Social responsibility",
    summary:
      "Guidance on social responsibility used to structure and evidence responsible business practice.",
    whatItIs:
      "ISO 26000 offers guidance on social responsibility across core subjects including governance, human rights, labour practices, the environment, fair operating practices, consumer issues and community involvement.",
    whoNeedsIt: [
      "Organisations building a responsible business programme",
      "Suppliers answering ESG questionnaires",
      "Public sector and NGO partners",
      "Businesses reporting on social value",
    ],
    benefits: [
      "Structured, recognised approach to social responsibility",
      "Support for social value and ESG reporting",
      "Stronger stakeholder relationships",
      "Reduced ethical and reputational risk",
    ],
    requirements: [
      "Organisational governance",
      "Human rights and labour practices",
      "The environment",
      "Fair operating practices",
      "Consumer issues",
      "Community involvement and development",
    ],
  }),
  base({
    slug: "iso-50001",
    code: "ISO 50001:2018",
    title: "ISO 50001:2018 Energy Management",
    category: "iso",
    discipline: "Energy management",
    summary:
      "Energy management system certification for organisations reducing energy consumption, cost and carbon intensity.",
    whatItIs:
      "ISO 50001 specifies requirements for an energy management system (EnMS), including energy review, baselines, performance indicators and improvement planning.",
    whoNeedsIt: [
      "Energy-intensive manufacturers and processors",
      "Large property and estate portfolios",
      "Organisations with energy compliance obligations",
      "Businesses with carbon reduction targets",
    ],
    benefits: [
      "Measured, sustained reductions in energy use",
      "Evidence for compliance and reporting schemes",
      "Lower operating costs and carbon emissions",
      "Data-driven investment decisions",
    ],
    training: "iso-50001",
  }),
  base({
    slug: "iso-13485",
    code: "ISO 13485",
    title: "ISO 13485 Medical Devices Quality Management",
    category: "iso",
    discipline: "Medical devices",
    summary:
      "Quality management system certification for organisations involved in the medical device lifecycle.",
    whatItIs:
      "ISO 13485 specifies quality management system requirements for organisations designing, producing, installing or servicing medical devices, with strong emphasis on risk management and regulatory requirements.",
    whoNeedsIt: [
      "Medical device manufacturers and contract manufacturers",
      "Component and sterilisation service suppliers",
      "Distributors and importers of devices",
      "Software as a medical device developers",
    ],
    benefits: [
      "Regulatory-aligned quality management",
      "Controlled design, validation and traceability",
      "Improved supplier and post-market controls",
      "Confidence for regulators and customers",
    ],
  }),
  base({
    slug: "iso-29001",
    code: "ISO 29001:2020",
    title: "ISO 29001:2020 Petroleum & Gas Quality Management",
    category: "iso",
    discipline: "Oil, gas & petrochemical",
    summary:
      "Sector-specific quality management certification for the petroleum, petrochemical and natural gas supply chain.",
    whatItIs:
      "ISO 29001 builds on ISO 9001 with additional requirements for defect prevention and variation reduction in the oil and gas supply chain.",
    whoNeedsIt: [
      "Equipment and materials suppliers to oil and gas",
      "Service contractors on upstream and downstream projects",
      "Fabrication and inspection service providers",
      "Organisations bidding for operator frameworks",
    ],
    benefits: [
      "Sector-recognised quality assurance",
      "Reduced defects and project delays",
      "Improved qualification for operator supply chains",
      "Consistency across projects and sites",
    ],
  }),
  base({
    slug: "iso-42001",
    code: "ISO/IEC 42001:2023",
    title: "ISO/IEC 42001:2023 AI Management System",
    category: "iso",
    tag: "NEW",
    discipline: "Artificial intelligence",
    summary:
      "The first management system standard for artificial intelligence, covering responsible development, deployment and oversight of AI systems.",
    whatItIs:
      "ISO/IEC 42001 specifies requirements for an AI management system (AIMS), addressing AI-specific risks, impact assessment, data governance and human oversight across the AI lifecycle.",
    whoNeedsIt: [
      "SaaS and technology companies shipping AI features",
      "Organisations deploying AI in regulated decisions",
      "Public bodies procuring or operating AI systems",
      "Suppliers facing AI assurance questionnaires",
    ],
    benefits: [
      "Demonstrable responsible-AI governance",
      "Structured AI risk and impact assessment",
      "Clear accountability and human oversight",
      "Readiness for emerging AI regulation",
    ],
  }),
  base({
    slug: "iso-55001",
    code: "ISO 55001",
    title: "ISO 55001 Asset Management",
    category: "iso",
    tag: "NEW",
    discipline: "Asset management",
    summary:
      "Asset management system certification for organisations that depend on physical assets and infrastructure.",
    whatItIs:
      "ISO 55001 specifies requirements for an asset management system, aligning asset lifecycle decisions with organisational objectives, risk and value.",
    whoNeedsIt: [
      "Utilities, transport and infrastructure operators",
      "Manufacturing plants with critical equipment",
      "Property and estate portfolios",
      "Public sector asset owners",
    ],
    benefits: [
      "Whole-life cost and risk visibility",
      "Better maintenance and investment planning",
      "Reduced unplanned failures",
      "Evidence of responsible asset stewardship",
    ],
  }),
  base({
    slug: "iso-14064",
    code: "ISO 14064",
    title: "ISO 14064 Greenhouse Gas Quantification",
    category: "iso",
    tag: "NEW",
    discipline: "Greenhouse gas",
    summary:
      "Greenhouse gas quantification and reporting, used to produce credible carbon inventories and support net-zero claims.",
    whatItIs:
      "ISO 14064 provides requirements for quantifying and reporting greenhouse gas emissions and removals at organisation and project level, and for validation and verification activities.",
    whoNeedsIt: [
      "Organisations reporting Scope 1, 2 and 3 emissions",
      "Businesses with net-zero or SBTi commitments",
      "Suppliers asked to disclose carbon data",
      "Project developers claiming emission reductions",
    ],
    benefits: [
      "Credible, consistent emissions data",
      "Support for disclosure and customer requirements",
      "Baseline for reduction planning",
      "Reduced greenwashing risk",
    ],
  }),

  // Cyber security & compliance
  base({
    slug: "cyber-essentials",
    code: "Cyber Essentials",
    title: "Cyber Essentials Certification",
    category: "cyber",
    discipline: "UK government-backed scheme",
    summary:
      "The UK government-backed scheme covering five technical controls that protect against the most common cyber attacks.",
    whatItIs:
      "Cyber Essentials is a self-assessment certification, verified by a certification body, covering firewalls, secure configuration, user access control, malware protection and security update management.",
    whoNeedsIt: [
      "Suppliers bidding for UK public sector contracts",
      "SMEs seeking a practical baseline of cyber hygiene",
      "Organisations needing cyber insurance evidence",
      "Businesses preparing for ISO 27001",
    ],
    benefits: [
      "Recognised baseline against common attacks",
      "Eligibility for many public sector tenders",
      "Fast, cost-effective route to cyber assurance",
      "Clear remediation actions for IT teams",
    ],
    requirements: [
      "Firewalls and internet gateways",
      "Secure configuration",
      "User access control",
      "Malware protection",
      "Security update management",
    ],
  }),
  base({
    slug: "cyber-essentials-plus",
    code: "Cyber Essentials Plus",
    title: "Cyber Essentials Plus Certification",
    category: "cyber",
    discipline: "Technically audited scheme",
    summary:
      "The audited tier of Cyber Essentials, where the five controls are independently tested rather than self-declared.",
    whatItIs:
      "Cyber Essentials Plus covers the same five controls as Cyber Essentials, verified through hands-on technical testing of devices, patching and configuration by an assessor.",
    whoNeedsIt: [
      "Organisations whose contracts specify the Plus tier",
      "Suppliers handling sensitive government data",
      "Businesses wanting independent technical validation",
      "Organisations already holding Cyber Essentials",
    ],
    benefits: [
      "Independently tested technical controls",
      "Higher assurance for clients and insurers",
      "Evidence of effective patch and device management",
      "Meets stricter procurement requirements",
    ],
    requirements: [
      "Valid Cyber Essentials certification in place",
      "Sampled device and configuration testing",
      "Vulnerability scanning of in-scope systems",
      "Verification of malware and access controls",
      "Remediation of identified issues",
    ],
  }),
  base({
    slug: "iso-27001",
    code: "ISO/IEC 27001:2022",
    title: "ISO/IEC 27001:2022 Information Security",
    category: "cyber",
    discipline: "Information security",
    summary:
      "The international standard for information security management systems, and the benchmark for enterprise security assurance.",
    whatItIs:
      "ISO/IEC 27001 specifies requirements for an information security management system (ISMS), including risk assessment, risk treatment and the Annex A controls covering organisational, people, physical and technological themes.",
    whoNeedsIt: [
      "SaaS and technology providers handling client data",
      "Financial, legal and healthcare service providers",
      "Organisations facing enterprise security reviews",
      "Businesses consolidating fragmented security controls",
    ],
    benefits: [
      "Recognised assurance that shortens security reviews",
      "Risk-based prioritisation of security investment",
      "Reduced likelihood and impact of incidents",
      "Foundation for privacy and cloud extensions",
    ],
    training: "iso-27001",
    faqs: [
      {
        q: "Do we need penetration testing for ISO 27001?",
        a: "Testing is not explicitly mandated, but technical vulnerability management is. Many organisations use penetration testing as evidence that controls work as intended.",
      },
    ],
  }),
  base({
    slug: "iso-27701",
    code: "ISO/IEC 27701",
    title: "ISO/IEC 27701 Privacy Information Management",
    category: "cyber",
    tag: "NEW",
    discipline: "Privacy management",
    summary:
      "A privacy extension to ISO 27001 for organisations processing personally identifiable information as controller or processor.",
    whatItIs:
      "ISO/IEC 27701 extends the ISMS with privacy-specific requirements and controls for PII controllers and processors, mapping closely to data protection obligations.",
    whoNeedsIt: [
      "Processors handling client personal data",
      "Organisations with GDPR-heavy obligations",
      "HR, marketing and health data platforms",
      "Existing ISO 27001 certified organisations",
    ],
    benefits: [
      "Demonstrable privacy governance",
      "Clear controller and processor responsibilities",
      "Efficient reuse of existing ISMS work",
      "Stronger answers in data protection due diligence",
    ],
  }),
  base({
    slug: "iso-27017",
    code: "ISO/IEC 27017",
    title: "ISO/IEC 27017 Cloud Security Controls",
    category: "cyber",
    tag: "NEW",
    discipline: "Cloud security",
    summary:
      "Cloud-specific security guidance for cloud service providers and customers, used alongside ISO 27001.",
    whatItIs:
      "ISO/IEC 27017 provides implementation guidance for information security controls in cloud environments, clarifying the split of responsibility between provider and customer.",
    whoNeedsIt: [
      "Cloud and managed hosting providers",
      "SaaS platforms on public cloud infrastructure",
      "Organisations with significant cloud footprints",
      "Buyers assessing cloud supplier controls",
    ],
    benefits: [
      "Clear shared-responsibility boundaries",
      "Cloud-appropriate control implementation",
      "Improved confidence for cloud customers",
      "Complements ISO 27001 certification",
    ],
  }),
  base({
    slug: "iso-27018",
    code: "ISO/IEC 27018",
    title: "ISO/IEC 27018 PII Protection in Public Cloud",
    category: "cyber",
    tag: "NEW",
    discipline: "Cloud privacy",
    summary:
      "Guidance for public cloud providers acting as processors of personally identifiable information.",
    whatItIs:
      "ISO/IEC 27018 sets out controls and guidance for protecting PII in public cloud services, including transparency, data return and disclosure obligations.",
    whoNeedsIt: [
      "Public cloud and SaaS processors",
      "Providers hosting regulated personal data",
      "Organisations answering privacy assurance requests",
      "Cloud providers holding ISO 27001",
    ],
    benefits: [
      "Privacy assurance specific to public cloud",
      "Transparency on data handling and location",
      "Reduced customer due-diligence friction",
      "Alignment with data protection expectations",
    ],
  }),
  base({
    slug: "soc-2-type-ii",
    code: "SOC 2 Type II",
    title: "SOC 2 Type II Assessment",
    category: "cyber",
    tag: "NEW",
    discipline: "Assurance assessment",
    summary:
      "Readiness and assessment support for the SOC 2 Trust Services Criteria over an operating period.",
    whatItIs:
      "A SOC 2 Type II assessment evaluates the design and operating effectiveness of controls against the Trust Services Criteria — security, availability, processing integrity, confidentiality and privacy — over a defined period.",
    whoNeedsIt: [
      "SaaS providers selling into North America",
      "Technology suppliers to enterprise buyers",
      "Organisations asked for SOC 2 in procurement",
      "Businesses maturing beyond ISO 27001 alone",
    ],
    benefits: [
      "Evidence of controls operating over time",
      "Faster enterprise vendor onboarding",
      "Reuse of existing ISMS evidence",
      "Clear remediation roadmap before the audit period",
    ],
    requirements: [
      "Scoping of systems and Trust Services Criteria",
      "Control design and documentation",
      "Evidence collection across the observation period",
      "Remediation of identified gaps",
      "Coordination with the reporting auditor",
    ],
  }),
  base({
    slug: "pci-dss",
    code: "PCI DSS",
    title: "PCI DSS Compliance",
    category: "cyber",
    tag: "NEW",
    discipline: "Payment security",
    summary:
      "Support for organisations that store, process or transmit cardholder data and must meet PCI DSS requirements.",
    whatItIs:
      "PCI DSS is the payment card industry data security standard. Compliance activity covers scoping the cardholder data environment, implementing the required controls and completing the applicable validation route.",
    whoNeedsIt: [
      "E-commerce and retail merchants",
      "Payment service providers and platforms",
      "Contact centres taking card payments",
      "Organisations reducing cardholder data scope",
    ],
    benefits: [
      "Reduced card data breach and fine exposure",
      "Clarity on scope and applicable validation route",
      "Stronger acquirer and processor relationships",
      "Reusable controls for ISO 27001",
    ],
    requirements: [
      "Cardholder data environment scoping and data flows",
      "Network segmentation and access control",
      "Encryption, logging and monitoring controls",
      "Vulnerability management and testing",
      "Policy, training and validation documentation",
    ],
  }),
  base({
    slug: "gdpr-assessment",
    code: "GDPR Assessment",
    title: "GDPR Assessment",
    category: "cyber",
    tag: "NEW",
    discipline: "Data protection",
    summary:
      "An independent review of your data protection practices against UK GDPR obligations, with a prioritised action plan.",
    whatItIs:
      "A GDPR assessment reviews lawful bases, records of processing, transparency, data subject rights, retention, international transfers, contracts and breach management, and reports on gaps and priorities.",
    whoNeedsIt: [
      "Organisations without a formal data protection programme",
      "Businesses processing special category data",
      "Companies expanding into UK or EU markets",
      "Organisations preparing for ISO 27701",
    ],
    benefits: [
      "Clear picture of data protection maturity",
      "Prioritised, practical remediation plan",
      "Better answers for customers and regulators",
      "Reduced enforcement and reputational risk",
    ],
    requirements: [
      "Records of processing and data mapping",
      "Lawful basis and transparency review",
      "Data subject rights procedures",
      "Retention, security and transfer controls",
      "Processor contracts and breach response",
    ],
  }),
  base({
    slug: "penetration-testing",
    code: "Penetration Testing",
    title: "Penetration Testing",
    category: "cyber",
    tag: "NEW",
    discipline: "Technical security testing",
    summary:
      "Technical security testing of applications, infrastructure and cloud environments, reported with practical remediation advice.",
    whatItIs:
      "Penetration testing simulates attacker behaviour against agreed targets to identify exploitable weaknesses, rate their risk and recommend fixes. Findings support ISO 27001, Cyber Essentials Plus and customer assurance.",
    whoNeedsIt: [
      "Teams releasing new or significantly changed applications",
      "Organisations with internet-facing infrastructure",
      "Businesses with annual testing obligations",
      "Companies validating remediation work",
    ],
    benefits: [
      "Evidence-based view of real exploitability",
      "Prioritised, developer-ready remediation guidance",
      "Support for certification and customer assurance",
      "Retest confirmation of fixes",
    ],
    requirements: [
      "Agreed scope, targets and testing windows",
      "Rules of engagement and authorisation",
      "Testing execution and finding validation",
      "Risk-rated report with remediation advice",
      "Optional retest of remediated findings",
    ],
  }),

  // Sustainability
  base({
    slug: "esg-sustainability",
    code: "ESG & Sustainability",
    title: "ESG & Sustainability Services",
    category: "sustainability",
    discipline: "ESG advisory",
    summary:
      "Support for building, evidencing and reporting an ESG programme that stands up to customer and investor scrutiny.",
    whatItIs:
      "Our ESG services help you define material topics, set governance and targets, collect reliable data and report credibly, using ISO standards as the operating backbone.",
    whoNeedsIt: [
      "Suppliers facing ESG questionnaires and audits",
      "Organisations reporting social value in tenders",
      "Businesses with investor or lender ESG requirements",
      "Companies consolidating scattered sustainability claims",
    ],
    benefits: [
      "Focus on material, evidenced topics",
      "Consistent data and reporting discipline",
      "Better tender and investor responses",
      "Reduced greenwashing risk",
    ],
    requirements: [
      "Materiality assessment and stakeholder mapping",
      "Governance, policy and target setting",
      "Data collection and assurance readiness",
      "Reporting alignment with recognised frameworks",
      "Improvement roadmap and review cycle",
    ],
  }),
  base({
    slug: "carbon-net-zero",
    code: "Carbon & Net-Zero",
    title: "Carbon & Net-Zero Advisory",
    category: "sustainability",
    discipline: "Carbon advisory",
    summary:
      "Carbon footprint quantification and net-zero planning grounded in ISO 14064 and ISO 50001 practice.",
    whatItIs:
      "We help you build a defensible emissions inventory across Scopes 1, 2 and 3, set a credible reduction pathway and put the management systems in place to deliver and evidence it.",
    whoNeedsIt: [
      "Organisations with net-zero commitments",
      "Suppliers asked for carbon data by customers",
      "Energy-intensive operations targeting cost reduction",
      "Businesses preparing for verification",
    ],
    benefits: [
      "Defensible baseline and reporting boundary",
      "Prioritised reduction opportunities",
      "Energy cost savings alongside carbon cuts",
      "Verification-ready documentation",
    ],
    requirements: [
      "Boundary and inventory design",
      "Scope 1, 2 and 3 data collection",
      "Emission factor and calculation methodology",
      "Reduction pathway and target setting",
      "Monitoring, reporting and verification readiness",
    ],
  }),

  // Inspection
  base({
    slug: "inspection",
    code: "Inspection Services",
    title: "Inspection Services Overview",
    category: "inspection",
    discipline: "Inspection",
    summary:
      "Independent inspection services covering pre-shipment, in-process and supplier verification activities.",
    whatItIs:
      "Our inspection services provide independent verification that goods, materials and workmanship match specification, contract and regulatory requirements before value changes hands.",
    whoNeedsIt: [
      "Importers and buyers sourcing internationally",
      "Manufacturers verifying supplier quality",
      "Trading companies managing shipment risk",
      "Project owners verifying delivered materials",
    ],
    benefits: [
      "Independent verification before shipment or payment",
      "Fewer rejected consignments and disputes",
      "Documented evidence for buyers and insurers",
      "Reduced rework and logistics cost",
    ],
    requirements: [
      "Specification and acceptance criteria agreement",
      "Inspection plan and sampling approach",
      "On-site inspection and testing witness",
      "Documented findings and photographic evidence",
      "Reporting and follow-up verification",
    ],
  }),
  base({
    slug: "what-is-pre-shipment-inspection",
    code: "Pre-Shipment Inspection",
    title: "What is Pre-Shipment Inspection?",
    category: "inspection",
    discipline: "Inspection",
    summary:
      "An explanation of pre-shipment inspection: what happens, when it takes place and what it verifies.",
    whatItIs:
      "Pre-shipment inspection (PSI) is an independent check performed before goods leave the supplier, verifying quantity, quality, markings, packing and documentation against the purchase order and specification.",
    whoNeedsIt: [
      "Buyers importing from new or distant suppliers",
      "Organisations paying against shipping documents",
      "Businesses with recurring quality disputes",
      "Companies with contractual PSI requirements",
    ],
    benefits: [
      "Problems found before goods ship",
      "Objective, documented inspection results",
      "Protection against quantity and quality shortfalls",
      "Smoother customs and buyer acceptance",
    ],
    requirements: [
      "Purchase order and specification review",
      "Inspection booking with the supplier",
      "Quantity, quality and packing verification",
      "Marking, labelling and document checks",
      "Inspection report issue",
    ],
  }),
  base({
    slug: "why-pre-shipment-inspection-is-important",
    code: "Why PSI Matters",
    title: "Why Pre-Shipment Inspection is Important",
    category: "inspection",
    discipline: "Inspection",
    summary:
      "Why independent inspection before shipment protects cash, schedule and reputation in international trade.",
    whatItIs:
      "Once goods are shipped, remedies become slow and expensive. Pre-shipment inspection moves the point of verification to the supplier's premises, where problems can still be corrected quickly.",
    whoNeedsIt: [
      "Importers with limited supplier oversight",
      "Businesses with tight delivery deadlines",
      "Organisations exposed to non-conforming stock",
      "Buyers using letters of credit",
    ],
    benefits: [
      "Lower risk of paying for non-conforming goods",
      "Fewer schedule disruptions and returns",
      "Stronger negotiating position with suppliers",
      "Evidence for insurance and dispute resolution",
    ],
    requirements: [
      "Clear contractual inspection clauses",
      "Agreed acceptance and sampling criteria",
      "Independent inspection before dispatch",
      "Documented, timely reporting",
      "Defined action on nonconformity",
    ],
  }),
  base({
    slug: "benefits-of-pre-shipment-inspection",
    code: "PSI Benefits",
    title: "Benefits of Pre-Shipment Inspection",
    category: "inspection",
    discipline: "Inspection",
    summary:
      "The commercial and operational benefits of adding independent pre-shipment inspection to your supply chain.",
    whatItIs:
      "Pre-shipment inspection reduces trade risk, improves supplier performance over time and produces the objective evidence buyers, insurers and customs authorities expect.",
    whoNeedsIt: [
      "Procurement teams managing supplier risk",
      "Quality functions without overseas presence",
      "Finance teams protecting payment terms",
      "Logistics teams reducing exceptions",
    ],
    benefits: [
      "Reduced financial exposure on each shipment",
      "Improved supplier quality discipline",
      "Objective evidence for claims and disputes",
      "Predictable, documented acceptance decisions",
    ],
    requirements: [
      "Risk-based inspection programme design",
      "Supplier performance tracking",
      "Consistent inspection criteria",
      "Reporting and corrective action loops",
      "Periodic programme review",
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
].map((slug) => standardsBySlug[slug]!);
