export type Industry = {
  slug: string;
  name: string;
  icon: string;
  summary: string;
  challenges: string[];
  standards: string[];
  benefits: string[];
  training: string[];
};

export const industries: Industry[] = [
  {
    slug: "technology-saas",
    name: "Technology & SaaS",
    icon: "Cpu",
    summary:
      "Security, privacy and AI assurance for software companies selling to enterprise and public sector buyers.",
    challenges: [
      "Long enterprise security reviews slowing sales cycles",
      "Multi-tenant cloud architectures and shared responsibility",
      "Rapid release cadence versus documented control",
      "Growing AI governance expectations",
    ],
    standards: ["iso-27001", "iso-27701", "iso-42001", "iso-20000-1", "cyber-essentials"],
    benefits: [
      "Shorter security questionnaires and vendor reviews",
      "Consistent controls across engineering and operations",
      "Credible AI and privacy governance",
      "Eligibility for regulated and public sector contracts",
    ],
    training: ["iso-27001", "iso-20000-1"],
  },
  {
    slug: "banking-finance",
    name: "Banking & Financial Services",
    icon: "Landmark",
    summary:
      "Resilience, information security and risk management for financial institutions and their supply chains.",
    challenges: [
      "Operational resilience and regulatory expectations",
      "Third-party and outsourcing risk oversight",
      "Sensitive customer data protection",
      "Fragmented risk frameworks across entities",
    ],
    standards: ["iso-27001", "iso-22301", "iso-31000", "pci-dss", "iso-27701"],
    benefits: [
      "Evidenced resilience and continuity capability",
      "Consistent enterprise risk language",
      "Stronger regulatory and client assurance",
      "Reduced payment and data breach exposure",
    ],
    training: ["iso-27001", "iso-22301", "iso-31000"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "HeartPulse",
    summary:
      "Quality, patient data protection and device compliance for healthcare providers and suppliers.",
    challenges: [
      "Protecting special category patient data",
      "Device and software regulatory requirements",
      "Continuity of critical clinical services",
      "Multi-site consistency of care processes",
    ],
    standards: ["iso-9001", "iso-13485", "iso-27001", "iso-22301", "gdpr-assessment"],
    benefits: [
      "Consistent, auditable clinical and support processes",
      "Robust patient data protection",
      "Regulatory-aligned device quality management",
      "Tested continuity for critical services",
    ],
    training: ["iso-9001", "iso-27001"],
  },
  {
    slug: "manufacturing-supply-chain",
    name: "Manufacturing & Supply Chain",
    icon: "Factory",
    summary:
      "Quality, safety, environmental and inspection services across production and global sourcing.",
    challenges: [
      "Defect and rework cost across production lines",
      "Supplier quality in distant markets",
      "Environmental permits and waste obligations",
      "Worker safety in higher-risk operations",
    ],
    standards: ["iso-9001", "iso-14001", "iso-45001", "iso-50001", "inspection"],
    benefits: [
      "Lower defect, rework and warranty cost",
      "Verified supplier and shipment quality",
      "Reduced environmental and energy cost",
      "Fewer safety incidents and lost days",
    ],
    training: ["iso-9001", "iso-14001", "iso-45001"],
  },
  {
    slug: "construction",
    name: "Construction",
    icon: "HardHat",
    summary:
      "Health and safety, quality and environmental management for contractors and the built environment.",
    challenges: [
      "High-risk activities and large contractor networks",
      "Prequalification and framework requirements",
      "Site environmental controls and complaints",
      "Consistency across projects and joint ventures",
    ],
    standards: ["iso-45001", "iso-9001", "iso-14001", "iso-41001", "iso-55001"],
    benefits: [
      "Stronger prequalification and tender scores",
      "Reduced incident and enforcement exposure",
      "Consistent site quality and handover records",
      "Better subcontractor governance",
    ],
    training: ["iso-45001", "iso-9001", "iso-14001"],
  },
  {
    slug: "energy-oil-gas",
    name: "Energy & Oil/Gas",
    icon: "Flame",
    summary:
      "Sector quality management, energy performance and carbon assurance for energy operations and suppliers.",
    challenges: [
      "Operator qualification and supply chain audits",
      "Asset integrity and unplanned downtime",
      "Energy intensity and emissions reporting",
      "Safety-critical operations across sites",
    ],
    standards: ["iso-29001", "iso-50001", "iso-45001", "iso-14064", "iso-55001"],
    benefits: [
      "Sector-recognised quality assurance",
      "Improved asset reliability and lifecycle planning",
      "Verified energy and emissions performance",
      "Stronger safety governance",
    ],
    training: ["iso-45001", "iso-50001"],
  },
  {
    slug: "public-sector-government",
    name: "Public Sector & Government",
    icon: "Building2",
    summary:
      "Assurance, security and continuity for public bodies and the suppliers who serve them.",
    challenges: [
      "Mandatory supplier cyber requirements",
      "Transparency and accountability obligations",
      "Continuity of essential public services",
      "Value-for-money and social value evidence",
    ],
    standards: ["cyber-essentials", "cyber-essentials-plus", "iso-27001", "iso-22301", "iso-9001"],
    benefits: [
      "Meets common procurement cyber requirements",
      "Demonstrable service quality and continuity",
      "Clear governance and audit trails",
      "Evidence for social value commitments",
    ],
    training: ["iso-27001", "iso-9001"],
  },
  {
    slug: "education",
    name: "Education",
    icon: "GraduationCap",
    summary: "Learner-focused management systems and data protection for education providers.",
    challenges: [
      "Consistent quality across programmes and campuses",
      "Safeguarding and pupil data protection",
      "Funder and inspection expectations",
      "Growing online and blended delivery",
    ],
    standards: ["iso-21001", "iso-27001", "iso-9001", "gdpr-assessment"],
    benefits: [
      "Learner-centred, measurable delivery",
      "Robust protection of learner data",
      "Consistency across sites and modes of delivery",
      "Credibility with funders and inspectors",
    ],
    training: ["iso-9001", "iso-27001"],
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage",
    icon: "UtensilsCrossed",
    summary: "Food safety, quality and supplier assurance across the food and drink chain.",
    challenges: [
      "Hazard control across complex ingredient chains",
      "Retailer and food service audit demands",
      "Allergen, labelling and traceability accuracy",
      "Waste, water and energy pressure",
    ],
    standards: ["iso-22000", "iso-9001", "iso-14001", "inspection", "iso-50001"],
    benefits: [
      "Systematic hazard and traceability control",
      "Readiness for customer and retailer audits",
      "Fewer recalls, complaints and product losses",
      "Lower utility and waste cost",
    ],
    training: ["iso-22000", "iso-9001"],
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-Commerce",
    icon: "ShoppingCart",
    summary: "Payment security, customer data protection and supplier quality for retailers.",
    challenges: [
      "Card payment security and PCI DSS scope",
      "High-volume customer data and marketing consent",
      "Supplier quality across imported product ranges",
      "Peak-season operational resilience",
    ],
    standards: ["pci-dss", "iso-27001", "gdpr-assessment", "inspection", "iso-10002"],
    benefits: [
      "Reduced payment and data breach exposure",
      "Verified product quality before shipment",
      "Better complaint handling and retention",
      "Resilience through peak trading",
    ],
    training: ["iso-27001", "iso-9001"],
  },
  {
    slug: "transport-logistics",
    name: "Transport & Logistics",
    icon: "Truck",
    summary:
      "Safety, continuity, asset and environmental management for transport and logistics operators.",
    challenges: [
      "Driver and yard safety management",
      "Fleet and asset reliability",
      "Emissions and fuel cost pressure",
      "Service continuity across networks",
    ],
    standards: ["iso-45001", "iso-55001", "iso-14001", "iso-22301", "iso-9001"],
    benefits: [
      "Fewer incidents and insurance claims",
      "Improved asset availability and lifecycle cost",
      "Reduced fuel use and emissions",
      "More reliable service commitments",
    ],
    training: ["iso-45001", "iso-9001", "iso-22301"],
  },
  {
    slug: "general-other",
    name: "General / Other Industries",
    icon: "Layers",
    summary:
      "Not listed? We certify and train organisations across many other sectors — tell us about your scope.",
    challenges: [
      "Unclear which standards apply to your activities",
      "Customer or tender requirements you must meet quickly",
      "Multiple overlapping compliance requests",
      "Limited internal compliance resource",
    ],
    standards: ["iso-9001", "iso-27001", "iso-45001", "iso-14001"],
    benefits: [
      "Practical advice on the right scope and standard",
      "One partner for certification, training and inspection",
      "Efficient integrated management systems",
      "Clear, staged route to certification",
    ],
    training: ["iso-9001", "iso-27001"],
  },
];

export const industriesBySlug = Object.fromEntries(industries.map((i) => [i.slug, i]));
