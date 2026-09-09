export type CourseLevel = "Foundation" | "Awareness" | "Internal Auditor" | "Lead Auditor";

export type CourseModule = {
  level: CourseLevel;
  duration: string;
  audience: string;
  objectives: string[];
  content: string[];
};

export type Course = {
  slug: string;
  code: string;
  title: string;
  discipline: string;
  summary: string;
  category: "Quality" | "Security" | "Safety" | "Environment" | "Service" | "Laboratory" | "Risk";
  delivery: string[];
  modules: CourseModule[];
  featured?: boolean;
};

const mod = (
  level: CourseLevel,
  duration: string,
  audience: string,
  objectives: string[],
  content: string[],
): CourseModule => ({ level, duration, audience, objectives, content });

const standardModules = (subject: string, standard: string): CourseModule[] => [
  mod(
    "Foundation",
    "1 day",
    `Anyone new to ${standard} who needs a working understanding of ${subject}.`,
    [
      `Explain the purpose and structure of ${standard}`,
      `Describe the key concepts behind ${subject}`,
      "Identify how the standard applies to your organisation",
      "Recognise the typical route to certification",
    ],
    [
      `Introduction to management systems and ${standard}`,
      "Clause-by-clause walkthrough",
      "Documented information and records",
      "Roles, responsibilities and next steps",
    ],
  ),
  mod(
    "Awareness",
    "Half day",
    `Employees who need to understand how ${subject} affects their day-to-day work.`,
    [
      `Describe why ${subject} matters to the organisation`,
      "Understand personal responsibilities within the system",
      "Recognise nonconformities and how to report them",
      "Support audits with confidence",
    ],
    [
      "Why the organisation is certified",
      "Policy, objectives and your role",
      "Practical examples and scenarios",
      "What to expect during an audit",
    ],
  ),
  mod(
    "Internal Auditor",
    "2 days",
    `Staff who will plan and conduct internal audits against ${standard}.`,
    [
      "Plan a risk-based internal audit programme",
      "Prepare checklists and audit plans",
      "Gather objective evidence and interview effectively",
      "Write clear findings and verify corrective action",
    ],
    [
      "Audit principles and terminology (ISO 19011)",
      "Planning, preparation and checklists",
      "Conducting the audit and collecting evidence",
      "Reporting, nonconformities and follow-up",
      "Practical audit exercises",
    ],
  ),
  mod(
    "Lead Auditor",
    "5 days",
    `Experienced auditors and consultants leading audit teams against ${standard}.`,
    [
      "Lead an audit team through the full audit cycle",
      "Manage audit scope, risk and stakeholder communication",
      "Evaluate conformity and effectiveness of controls",
      "Report at management level and close findings",
    ],
    [
      "Advanced interpretation of the standard",
      "Audit programme management and team leadership",
      "Opening meetings, evidence sampling and difficult interviews",
      "Grading findings and management reporting",
      "Continuous assessment and final examination",
    ],
  ),
];

export const courses: Course[] = [
  {
    slug: "iso-9001",
    code: "ISO 9001:2015",
    title: "ISO 9001:2015 Quality Management Training",
    discipline: "Quality management",
    category: "Quality",
    summary:
      "Foundation to Lead Auditor training on quality management systems, process approach and risk-based thinking.",
    delivery: ["Classroom", "Live virtual", "In-house", "E-Learning"],
    modules: standardModules("quality management", "ISO 9001"),
    featured: true,
  },
  {
    slug: "iso-14001",
    code: "ISO 14001:2026",
    title: "ISO 14001 Environmental Management Training",
    discipline: "Environmental management",
    category: "Environment",
    summary:
      "Training on environmental aspects and impacts, compliance obligations and environmental auditing.",
    delivery: ["Classroom", "Live virtual", "In-house"],
    modules: standardModules("environmental management", "ISO 14001"),
    featured: true,
  },
  {
    slug: "iso-45001",
    code: "ISO 45001:2018",
    title: "ISO 45001:2018 Occupational Health & Safety Training",
    discipline: "Health & safety",
    category: "Safety",
    summary:
      "Training on hazard identification, worker participation and OH&S management system auditing.",
    delivery: ["Classroom", "Live virtual", "In-house"],
    modules: standardModules("occupational health and safety", "ISO 45001"),
    featured: true,
  },
  {
    slug: "iso-22000",
    code: "ISO 22000:2018",
    title: "ISO 22000:2018 Food Safety Management Training",
    discipline: "Food safety",
    category: "Quality",
    summary: "HACCP principles, prerequisite programmes and food safety management auditing.",
    delivery: ["Classroom", "Live virtual", "In-house"],
    modules: standardModules("food safety management", "ISO 22000"),
  },
  {
    slug: "iso-27001",
    code: "ISO/IEC 27001:2022",
    title: "ISO/IEC 27001:2022 Information Security Training",
    discipline: "Information security",
    category: "Security",
    summary:
      "Risk assessment, Annex A controls and ISMS auditing for information security practitioners.",
    delivery: ["Classroom", "Live virtual", "In-house", "E-Learning"],
    modules: standardModules("information security management", "ISO/IEC 27001"),
    featured: true,
  },
  {
    slug: "iso-41001",
    code: "ISO 41001:2018",
    title: "ISO 41001:2018 Facility Management Training",
    discipline: "Facility management",
    category: "Service",
    summary: "Facility management system requirements, service levels and FM auditing.",
    delivery: ["Live virtual", "In-house"],
    modules: standardModules("facility management", "ISO 41001"),
  },
  {
    slug: "iso-20000-1",
    code: "ISO/IEC 20000-1:2018",
    title: "ISO/IEC 20000-1:2018 IT Service Management Training",
    discipline: "IT service management",
    category: "Service",
    summary: "Service management system requirements, service levels and SMS auditing.",
    delivery: ["Live virtual", "In-house"],
    modules: standardModules("IT service management", "ISO/IEC 20000-1"),
  },
  {
    slug: "iso-22301",
    code: "ISO 22301:2019",
    title: "ISO 22301:2019 Business Continuity Training",
    discipline: "Business continuity",
    category: "Risk",
    summary: "Business impact analysis, continuity strategy, exercising and BCMS auditing.",
    delivery: ["Classroom", "Live virtual", "In-house"],
    modules: standardModules("business continuity management", "ISO 22301"),
  },
  {
    slug: "iso-31000",
    code: "ISO 31000:2018",
    title: "ISO 31000:2018 Risk Management Training",
    discipline: "Risk management",
    category: "Risk",
    summary: "Risk principles, framework and process, with practical risk assessment workshops.",
    delivery: ["Live virtual", "In-house"],
    modules: standardModules("risk management", "ISO 31000"),
  },
  {
    slug: "iso-50001",
    code: "ISO 50001:2018",
    title: "ISO 50001:2018 Energy Management Training",
    discipline: "Energy management",
    category: "Environment",
    summary: "Energy review, baselines, performance indicators and EnMS auditing.",
    delivery: ["Live virtual", "In-house"],
    modules: standardModules("energy management", "ISO 50001"),
  },
  {
    slug: "iso-17025",
    code: "ISO/IEC 17025:2017",
    title: "ISO/IEC 17025:2017 Testing & Calibration Laboratories Training",
    discipline: "Laboratory competence",
    category: "Laboratory",
    summary:
      "Competence requirements for testing and calibration laboratories, including method validation and traceability.",
    delivery: ["Classroom", "Live virtual", "In-house"],
    modules: standardModules("laboratory competence", "ISO/IEC 17025"),
  },
  {
    slug: "iso-17043",
    code: "ISO/IEC 17043:2010",
    title: "ISO/IEC 17043:2010 Proficiency Testing Training",
    discipline: "Proficiency testing",
    category: "Laboratory",
    summary:
      "Requirements for proficiency testing providers, scheme design and performance evaluation.",
    delivery: ["Live virtual", "In-house"],
    modules: standardModules("proficiency testing schemes", "ISO/IEC 17043"),
  },
  {
    slug: "iso-13528",
    code: "ISO 13528:2015",
    title: "ISO 13528:2015 Statistical Methods for Proficiency Testing",
    discipline: "Statistical methods",
    category: "Laboratory",
    summary:
      "Statistical methods used in interlaboratory comparison, including z-scores and assigned values.",
    delivery: ["Live virtual", "In-house"],
    modules: standardModules("statistical evaluation of proficiency testing", "ISO 13528"),
  },
];

export const coursesBySlug = Object.fromEntries(courses.map((c) => [c.slug, c]));
export const courseCategories = [
  "Quality",
  "Security",
  "Safety",
  "Environment",
  "Service",
  "Laboratory",
  "Risk",
] as const;
export const courseLevels: CourseLevel[] = [
  "Foundation",
  "Awareness",
  "Internal Auditor",
  "Lead Auditor",
];
