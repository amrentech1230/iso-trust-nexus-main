export type CourseLevel =
  "Foundation" | "Awareness" | "Internal Auditor" | "Lead Auditor" | "Practitioner";

export type CourseModule = {
  level: CourseLevel;
  duration: string;
  audience: string;
  objectives: string[];
  content: string[];
  deliveryModes?: string[];
};

export type AcademyCourse = {
  level: Extract<CourseLevel, "Foundation" | "Awareness" | "Internal Auditor">;
  price: number;
  previousPrice?: number;
  duration: string;
  access: string;
  modules: string;
  assessment: string;
  academyPath: string;
  updateModules?: string[];
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
  /**
   * PLACEHOLDER pricing. `priceMinor` is in minor currency units (pence),
   * matching the Laravel `courses` table. These values are indicative only
   * and MUST be replaced with TRAIBCERT's real course fees before go-live.
   * The authoritative price at checkout comes from the backend, not this file.
   */
  priceMinor: number;
  currency: string;
  academyCourses?: AcademyCourse[];
};

const mod = (
  level: CourseLevel,
  duration: string,
  audience: string,
  objectives: string[],
  content: string[],
  deliveryModes: string[],
): CourseModule => ({ level, duration, audience, objectives, content, deliveryModes });

type CourseProfile = {
  foundation: string[];
  awareness: string[];
  internalAuditor: string[];
  leadAuditor?: string[];
  practitioner?: string[];
  foundationAudience?: string;
  awarenessAudience?: string;
  foundationObjectives?: string[];
  awarenessObjectives?: string[];
  audiences?: Partial<Record<CourseLevel, string>>;
  objectives?: Partial<Record<CourseLevel, string[]>>;
  levels?: CourseLevel[];
  foundationDuration?: string;
  awarenessDuration?: string;
  internalAuditorDuration?: string;
  deliveryModes?: Partial<Record<CourseLevel, string[]>>;
};

const courseProfiles: Record<string, CourseProfile> = {
  "ISO 9001": {
    foundation: [
      "ISO 9001:2026 history, purpose and ten-clause structure",
      "Quality management principles and customer focus",
      "Leadership, quality culture and ethical behaviour",
      "Process approach, risk and opportunity, and the certification cycle",
    ],
    awareness: [
      "Introduction to ISO 9001:2026 — purpose, structure, terminology and changes from 2015 (101 min)",
      "Quality-management principles and the harmonised structure (44 min)",
      "Context — internal and external issues, climate change, interested parties and QMS scope (30 min)",
      "Leadership — commitment, quality culture, ethical behaviour, policy and responsibilities (29 min)",
      "Planning — risks, opportunities, objectives and changes (20 min)",
      "Support — resources, competence, awareness, communication and documented information (62 min)",
      "Operation — customer requirements, design, external providers and service delivery (95 min)",
      "Performance evaluation — monitoring, customer satisfaction, audit and management review (35 min)",
      "Improvement — nonconformity, corrective action and continual improvement (44 min)",
      "Section tests and timed 40-minute final examination; certificate on passing",
    ],
    internalAuditor: [
      "Introduction to ISO 9001:2026 and the process approach (106 min)",
      "QMS principles and harmonised structure (77 min)",
      "Context — interested parties, scope and QMS processes (69 min)",
      "Leadership — commitment, policy, roles and responsibilities (49 min)",
      "Planning — risks, opportunities, objectives and changes (55 min)",
      "Support — resources, competence, communication and documented information (97 min)",
      "Operation — customer requirements, design, external providers and service delivery (150 min)",
      "Performance evaluation — monitoring, measurement, audit and management review (97 min)",
      "Improvement — nonconformity, corrective action and continual improvement (57 min)",
      "Internal auditing — ISO 19011 principles, auditor competence and programme management (27 min)",
      "Audit planning — objectives, scope, criteria, checklists and sampling (24 min)",
      "Performing an audit — opening meeting, interviewing, evidence and audit management (81 min)",
      "Reporting — findings, root cause, corrective action and follow-up (54 min)",
      "Timed 40-minute final assessment; certificate on passing",
    ],
    leadAuditor: [
      "Day 1 — interpret clauses 4–7; context, leadership, process approach and workshops",
      "Day 2 — clauses 8–10; audit principles, auditor competence and audit programme",
      "Day 3 — initiate and plan the audit; document review, sampling, opening meeting and interview role-play",
      "Day 4 — manage the team, evaluate evidence, grade findings, report and close the audit",
      "Day 5 — audit completion, corrective-action verification, assessment review and two-hour written examination",
      "Assessment: continuous participation and exercises plus written examination; certificate on passing",
    ],
    audiences: {
      Foundation:
        "New employees, managers whose departments are in scope, sales and bid teams answering tender questions, and anyone deciding whether to certify. No prior knowledge is required.",
      Awareness:
        "Department managers, supervisors, engineers, quality representatives and administrators who make the QMS work, including teams preparing for first certification. Also suitable before Internal Auditor training.",
      "Internal Auditor":
        "People who will plan, conduct and report QMS internal audits. No prior auditing experience is required; familiarity with ISO 9000 terms is helpful.",
      "Lead Auditor":
        "Quality managers, consultants and auditors who will lead audit teams, manage audit programmes or work towards third-party auditor competence. Awareness or Internal Auditor knowledge is expected.",
    },
    objectives: {
      Foundation: [
        "Explain ISO 9001 and how the 2026 edition is organised",
        "Describe the seven quality-management principles",
        "Recognise the process approach, risk-based thinking and Plan-Do-Check-Act",
        "Describe implementation, certification and the three-year cycle",
      ],
      Awareness: [
        "Explain ISO 9001:2026 requirements and how they apply to your area",
        "Identify the documented information and records your role must maintain",
        "Recognise and report nonconformities and support external audits",
        "Describe the changes from the 2015 edition",
      ],
      "Internal Auditor": [
        "Interpret ISO 9001:2026 clauses as audit criteria",
        "Plan a risk-based audit programme, scope, criteria and sampling",
        "Interview, observe work and gather objective evidence",
        "Grade findings, report nonconformities and verify corrective action",
      ],
      "Lead Auditor": [
        "Interpret ISO 9001:2026 in the context of a certification audit",
        "Plan, conduct, report and follow up an audit using ISO 19011",
        "Lead an audit team, manage evidence and conduct opening and closing meetings",
        "Evaluate QMS effectiveness and complete the written examination",
      ],
    },
  },
  "ISO 14001": {
    foundation: [
      "Environmental management system purpose and ISO 14001 structure",
      "Environmental aspects, impacts and compliance obligations",
      "Environmental policy, objectives and operational control",
      "The certification route and continual improvement",
    ],
    awareness: [
      "Introduction to ISO 14001:2026 and the process approach — purpose, structure, terminology and changes from the 2015 edition (101 min)",
      "Environmental management system principles and the harmonised structure — EMS model, Plan-Do-Check-Act cycle and ten-clause structure (44 min)",
      "Context of the organisation — internal and external issues including climate change, interested parties, compliance obligations and scope (30 min)",
      "Leadership — commitment, environmental policy, roles and responsibilities (29 min)",
      "Planning — environmental aspects and impacts, compliance obligations, risks and opportunities, objectives and plans (20 min)",
      "Support — resources, competence, awareness, communication and documented information (62 min)",
      "Operation — operational planning and control, life-cycle perspective, outsourced processes, emergency preparedness and response (95 min)",
      "Performance evaluation — monitoring and measurement, evaluation of compliance, internal audit and management review (35 min)",
      "Improvement — nonconformity, corrective action and continual improvement (44 min)",
      "Section assessments after each module and timed 40-minute final assessment; certificate of achievement on passing",
    ],
    internalAuditor: [
      "Introduction to ISO 14001:2026 and the process approach (106 min)",
      "Environmental management principles and harmonised structure (77 min)",
      "Context — climate change, interested parties, compliance obligations and scope (69 min)",
      "Leadership — commitment, policy, roles and responsibilities (49 min)",
      "Planning — aspects, impacts, compliance, risks, objectives and changes (55 min)",
      "Support — resources, competence, communication and documented information (97 min)",
      "Operation — operational controls, life-cycle perspective, outsourcing and emergency response (150 min)",
      "Performance evaluation — monitoring, compliance, internal audit and management review (97 min)",
      "Improvement — nonconformity, corrective action and continual improvement (57 min)",
      "Internal auditing — ISO 19011 principles, auditor competence and programme management (27 min)",
      "Audit planning — objectives, scope, criteria, checklists and sampling (24 min)",
      "Performing an audit — opening meeting, interviews, observation and objective evidence (81 min)",
      "Reporting — findings, root cause, corrective action and follow-up (54 min)",
      "Timed 40-minute final assessment; certificate on passing",
    ],
    leadAuditor: [
      "Day 1 — interpret clauses 4–7; context, aspects, impacts and compliance obligations",
      "Day 2 — clauses 8–10; operational controls, life-cycle perspective, emergency response and audit principles",
      "Day 3 — initiate and plan the audit; document review, sampling, opening meeting and interview role-play",
      "Day 4 — evaluate evidence and legal compliance, grade findings, report and close the audit",
      "Day 5 — audit completion, corrective-action verification, assessment review and two-hour written examination",
      "Assessment: continuous participation and exercises plus written examination; certificate on passing",
    ],
    levels: ["Awareness", "Internal Auditor", "Lead Auditor"],
    awarenessAudience:
      "Department managers, supervisors, environmental representatives, engineers, facilities and administrative staff, and internal teams preparing for a first certification. No prior knowledge of ISO standards is required.",
    awarenessObjectives: [
      "Explain every requirement of ISO 14001:2026 and how it applies in your own area",
      "Identify environmental aspects, impacts and compliance obligations and explain how the organisation controls them",
      "Identify the documented information and records your role must keep",
      "Recognise nonconformities and report them",
      "Support external audits and describe what changed from the 2015 edition",
    ],
    foundationDuration: "2 h 10 min",
    awarenessDuration: "About 8 h (one day tutor-led)",
    deliveryModes: {
      Awareness: ["Self-paced online", "Live tutor-led online", "Onsite"],
      "Internal Auditor": ["Self-paced online", "Live tutor-led online", "Onsite"],
      "Lead Auditor": ["Live tutor-led online", "Onsite"],
    },
    audiences: {
      "Internal Auditor":
        "Environmental team leaders, department heads, technicians, supervisors, HSE and facilities staff, and people building a career in environmental management. No audit experience is needed; Awareness or familiarity with ISO 14001 terminology helps.",
      "Lead Auditor":
        "Environmental and HSE managers, consultants and auditors who will lead audit teams or manage audit programmes. Delegates should know ISO 14001 to Awareness or Internal Auditor level.",
    },
    objectives: {
      "Internal Auditor": [
        "Interpret ISO 14001:2026 clauses as audit criteria and plan a risk-based audit programme",
        "Prepare audit plans and checklists and audit environmental aspects, impacts and compliance obligations",
        "Conduct audits using interviews, observation and record sampling",
        "Grade findings, verify corrective action and report opportunities to improve environmental performance",
      ],
      "Lead Auditor": [
        "Interpret ISO 14001:2026 in the context of a certification audit, including aspects, impacts and compliance obligations",
        "Plan, conduct, report and follow up audits in accordance with ISO 19011",
        "Lead audit teams and evaluate legal compliance and life-cycle controls",
        "Assess EMS effectiveness against environmental objectives and compliance obligations",
      ],
    },
  },
  "ISO 45001": {
    foundation: [
      "Introduction to ISO 45001:2018 and its history — OH&S management and where the standard is used (27 min)",
      "Risk and hazard definitions — hazards, risks, opportunities, incidents and near misses (24 min)",
      "Leadership and worker participation — commitment, consultation and OH&S policy (12 min)",
      "Process-based approach — risk-based thinking and the OH&S management-system model (27 min)",
      "OH&S principles and the harmonised ten-clause structure (30 min)",
      "10-minute multiple-choice final assessment; certificate on passing",
    ],
    awareness: [
      "Introduction to ISO 45001:2018 and the process approach — purpose, structure, terminology and relationship to earlier OH&S standards (101 min)",
      "OH&S management-system principles and the harmonised structure — Plan-Do-Check-Act and the ten-clause structure (44 min)",
      "Context — internal and external issues, workers, interested parties and OH&S system scope (30 min)",
      "Leadership and worker participation — commitment, OH&S policy, roles, consultation and participation (29 min)",
      "Planning — hazard identification, OH&S risks and opportunities, legal requirements, objectives and changes (20 min)",
      "Support — resources, competence, awareness, communication and documented information (62 min)",
      "Operation — operational controls, hierarchy of controls, change, procurement, contractors and emergency preparedness (95 min)",
      "Performance evaluation — monitoring, compliance evaluation, internal audit and management review (35 min)",
      "Improvement — incidents, nonconformity, corrective action and continual improvement (44 min)",
      "Section assessments and timed 40-minute final assessment; certificate of achievement on passing",
    ],
    internalAuditor: [
      "Introduction to ISO 45001:2018 and the process approach (106 min)",
      "OH&S management-system principles and harmonised structure (77 min)",
      "Context of the organisation — issues, workers, interested parties and scope (69 min)",
      "Leadership and worker participation — commitment, policy, roles and consultation (49 min)",
      "Planning — hazard identification, OH&S risks, legal requirements, objectives and change (55 min)",
      "Support — resources, competence, awareness, communication and documented information (97 min)",
      "Operation — controls, hierarchy of controls, change, contractors and emergency preparedness (150 min)",
      "Performance evaluation — monitoring, compliance, internal audit and management review (97 min)",
      "Improvement — incidents, nonconformity, corrective action and continual improvement (57 min)",
      "Internal audit introduction — ISO 19011, auditor competence and audit-programme management (27 min)",
      "Audit planning and preparation — objectives, scope, criteria, checklists and sampling (24 min)",
      "Performing an audit — opening meeting, interviews, work observation and objective evidence (81 min)",
      "Audit reporting — findings, root cause, corrective action and follow-up (54 min)",
      "Timed 40-minute final assessment; certificate of achievement on passing",
    ],
    leadAuditor: [
      "Day 1 — interpret clauses 4–7; context, leadership, worker participation, hazards and risk assessment",
      "Day 2 — clauses 8–10; hierarchy of controls, change, contractors, emergencies and audit principles",
      "Day 3 — initiate, plan and prepare the audit; document review, sampling, opening meeting and interview role-play",
      "Day 4 — manage the audit team, evaluate evidence and compliance, grade findings and report conclusions",
      "Day 5 — audit completion and corrective-action verification; continuous assessment and two-hour written examination",
      "Assessment: continuous participation and exercises plus written examination; certificate on passing",
    ],
    awarenessDuration: "About 8 h (one day tutor-led)",
    internalAuditorDuration: "About 16 h (two days tutor-led)",
    audiences: {
      Foundation:
        "New employees, line managers, HR and administrative staff, contractors and anyone who needs an introduction to workplace hazards, OH&S risks and worker participation. No prior knowledge is required.",
      Awareness:
        "Department managers, supervisors, safety representatives and committee members, engineers, HR and administrative staff, and teams preparing for first certification. No prior ISO knowledge is required.",
      "Internal Auditor":
        "Safety team leaders, HSE officers, department heads, technicians and supervisors who will plan, conduct and report internal audits. No audit experience is needed; Awareness or familiarity with ISO 45001 terminology helps.",
      "Lead Auditor":
        "HSE managers, safety professionals, consultants and auditors who will lead audit teams or manage audit programmes. Delegates should know ISO 45001 to Awareness or Internal Auditor level.",
    },
    objectives: {
      Foundation: [
        "Explain what ISO 45001 is, its history and the structure of the 2018 edition",
        "Distinguish hazards, OH&S risks, incidents and opportunities",
        "Explain leadership commitment and worker consultation and participation",
        "Describe the process approach, Plan-Do-Check-Act cycle and route to certification",
      ],
      Awareness: [
        "Explain ISO 45001:2018 requirements and how they apply in your work area",
        "Describe hazard identification, risk assessment and the hierarchy of controls",
        "Explain the practical requirements for consultation and participation of workers",
        "Identify required records, report incidents and nonconformities, and support external audits",
      ],
      "Internal Auditor": [
        "Interpret ISO 45001:2018 clauses as audit criteria and plan a risk-based audit programme",
        "Prepare an audit plan and checklist and gather evidence through interviews, observation and records",
        "Audit hazards, controls, worker participation and legal requirements",
        "Grade findings, write nonconformity reports, verify corrective action and report to management",
      ],
      "Lead Auditor": [
        "Interpret ISO 45001:2018 for certification-body audits, including hazards, risk controls and worker participation",
        "Plan, conduct, report and follow up audits in accordance with ISO 19011",
        "Lead an audit team, manage evidence and conduct opening and closing meetings",
        "Evaluate OH&S system effectiveness and its ability to prevent injury and meet legal requirements",
      ],
    },
    foundationAudience:
      "New employees, line managers, HR and administrative staff, contractors and anyone deciding whether to certify. No prior knowledge is required.",
    foundationObjectives: [
      "Explain what ISO 45001 is, its history and the structure of the 2018 edition",
      "Distinguish hazards, OH&S risks, incidents and opportunities",
      "Explain leadership commitment and worker consultation and participation",
      "Describe the process approach, Plan-Do-Check-Act cycle and route to certification",
    ],
  },
  "ISO 22000": {
    foundation: [
      "Food safety management system purpose and ISO 22000 structure",
      "Food safety hazards and the food-chain approach",
      "HACCP principles and prerequisite programmes",
      "Roles, records and the route to certification",
    ],
    awareness: [
      "Introduction to ISO 22000:2018 and the process approach — purpose, structure, terminology and relationship to HACCP and the 2005 edition (101 min)",
      "FSMS principles and harmonised structure — communication, PRPs, HACCP, two-level Plan-Do-Check-Act and ten clauses (44 min)",
      "Context — internal and external issues, interested parties, statutory and regulatory requirements and FSMS scope (30 min)",
      "Leadership — commitment, food-safety policy and food-safety team responsibilities (29 min)",
      "Planning — risks, opportunities, food-safety objectives and planned change (20 min)",
      "Support — resources, external FSMS services, work environment, competence, communication and documented information (62 min)",
      "Operation — PRPs, traceability, emergencies, hazard analysis, validation, hazard control plan, monitoring, verification and product/process nonconformity including recall (95 min)",
      "Performance evaluation — monitoring, analysis, internal audit and management review (35 min)",
      "Improvement — corrective action, continual improvement and updating the FSMS (44 min)",
      "Section assessments and timed 40-minute final assessment; certificate of achievement on passing",
    ],
    internalAuditor: [
      "Introduction to ISO 22000:2018 and the process approach (106 min)",
      "Food-safety management-system principles and harmonised structure (77 min)",
      "Context, interested parties and FSMS scope (69 min)",
      "Leadership, food-safety policy, team roles and responsibilities (49 min)",
      "Planning — food-safety hazards, objectives, risks and changes (55 min)",
      "Support — resources, competence, communication and documented information (97 min)",
      "Operation — PRPs, hazard analysis, hazard control plan, traceability and recall (150 min)",
      "Performance evaluation — monitoring, verification, internal audit and management review (97 min)",
      "Improvement — nonconformity, corrective action and continual improvement (57 min)",
      "Internal audit introduction — ISO 19011, auditor competence and audit-programme management (27 min)",
      "Audit planning and preparation — objectives, scope, criteria, checklists and sampling (24 min)",
      "Performing an audit — opening meeting, interviews, process observation and objective evidence (81 min)",
      "Audit reporting — findings, root cause, corrective action and follow-up (54 min)",
      "Timed final assessment; certificate of achievement on passing",
    ],
    leadAuditor: [
      "Day 1 — interpret clauses 4–7; context, leadership, food-safety team, hazards and objectives",
      "Day 2 — clauses 8–10; PRPs, HACCP, hazard control plans, traceability and emergency response",
      "Day 3 — initiate, plan and prepare the audit; document review, sampling, opening meeting and interview role-play",
      "Day 4 — manage audit teams, evaluate food-safety evidence, grade findings and report conclusions",
      "Day 5 — audit completion, corrective-action verification, continuous assessment and written examination",
      "Assessment: continuous participation and exercises plus written examination; certificate on passing",
    ],
    levels: ["Awareness", "Internal Auditor", "Lead Auditor"],
    awarenessDuration: "About 8 h (one day tutor-led)",
    internalAuditorDuration: "About 16 h (two days tutor-led)",
    audiences: {
      Awareness:
        "Department managers, production and shift supervisors, food safety team members, quality and technical staff, engineers and administrators preparing for certification. No prior ISO knowledge is required; basic food-hygiene familiarity helps.",
      "Internal Auditor":
        "Food safety team leaders and members, quality and technical managers, department heads, technicians and supervisors in food manufacturing, catering, packaging and logistics. Awareness or familiarity with ISO 22000 and HACCP helps; no audit experience is required.",
      "Lead Auditor":
        "Food safety and quality managers, technical managers, consultants and auditors who will lead audit teams or manage audit programmes. Delegates should know ISO 22000 to Awareness or Internal Auditor level.",
    },
    objectives: {
      Awareness: [
        "Explain ISO 22000:2018 requirements and how they apply in your work area",
        "Describe how PRPs, hazard analysis and the hazard control plan (CCPs and OPRPs) work together",
        "Explain the management-system and operational food-safety Plan-Do-Check-Act cycles",
        "Identify required records, recognise unsafe product and nonconformities, and support audits",
      ],
      "Internal Auditor": [
        "Interpret ISO 22000:2018 requirements, including PRPs, hazard analysis and the hazard control plan, as audit criteria",
        "Plan risk-based audits and prepare audit plans and checklists",
        "Audit hazard controls, traceability, monitoring, verification and product/process records",
        "Report findings, verify corrective action and communicate audit results to management",
      ],
      "Lead Auditor": [
        "Interpret ISO 22000:2018 requirements for food-safety certification audits",
        "Plan and lead audits of hazard analysis, PRPs, CCPs, OPRPs and food-chain communication",
        "Manage audit teams, evidence, findings and corrective-action follow-up",
        "Evaluate whether the FSMS controls food-safety hazards and meets applicable requirements",
      ],
    },
  },
  "ISO/IEC 27001": {
    foundation: [
      "Information security management system purpose and structure",
      "Confidentiality, integrity, availability and information security risk",
      "Risk treatment, the Statement of Applicability and Annex A controls",
      "Roles, documented information and certification",
    ],
    awareness: [
      "Introduction to ISO/IEC 27001:2022 and the process approach — purpose, structure, terminology and changes from 2013 (101 min)",
      "ISMS principles and harmonised structure — confidentiality, integrity, availability, Plan-Do-Check-Act and ten clauses (44 min)",
      "Context — internal and external issues, interested parties and ISMS scope (30 min)",
      "Leadership — commitment, information-security policy, roles and responsibilities (29 min)",
      "Planning — risk assessment and treatment, Statement of Applicability, objectives and planned changes (20 min)",
      "Support — resources, competence, awareness, communication and documented information (62 min)",
      "Operation — operational planning and practical risk assessment and treatment (95 min)",
      "Performance evaluation — monitoring, measurement, internal audit and management review (35 min)",
      "Improvement and Annex A — corrective action and the 93 organisational, people, physical and technological controls (44 min)",
      "Section assessments and timed 40-minute final assessment; certificate on passing",
    ],
    internalAuditor: [
      "Introduction to ISO/IEC 27001:2022 and the process approach (106 min)",
      "ISMS principles and harmonised structure (77 min)",
      "Context, interested parties and ISMS scope (69 min)",
      "Leadership, policy, roles and responsibilities (49 min)",
      "Risk assessment, risk treatment, Statement of Applicability and objectives (55 min)",
      "Support — resources, competence, awareness, communication and documented information (97 min)",
      "Operation — risk assessment and treatment in practice (150 min)",
      "Performance evaluation — monitoring, measurement and management review (47 min)",
      "Improvement and Annex A — corrective action and auditing the 93 controls across four themes (97 min)",
      "Internal audit introduction — ISO 19011, competence and audit-programme management (27 min)",
      "Audit planning — objectives, scope, criteria, checklists and sampling (24 min)",
      "Performing an audit — interviews, system and record evidence (81 min)",
      "Reporting — findings, root cause, corrective action and follow-up (54 min)",
      "Timed 40-minute final assessment; certificate on passing",
    ],
    leadAuditor: [
      "Day 1 — interpret clauses 4–7; scope, information-security risk assessment and treatment",
      "Day 2 — clauses 8–10 and Annex A control themes; audit principles and programme",
      "Day 3 — plan the audit, review documents, sample evidence and conduct interviews",
      "Day 4 — evaluate evidence against the Statement of Applicability, report findings and close the audit",
      "Day 5 — complete the audit, verify corrective action and sit the written examination",
      "Assessment: continuous participation and exercises plus written examination; certificate on passing",
    ],
    levels: ["Awareness", "Internal Auditor", "Lead Auditor"],
    deliveryModes: {
      Awareness: ["Self-paced online", "Live tutor-led online", "Onsite"],
      "Internal Auditor": ["Self-paced online", "Live tutor-led online", "Onsite"],
      "Lead Auditor": ["Live tutor-led online", "Onsite"],
    },
    awarenessDuration: "About 8 h (one day tutor-led)",
    internalAuditorDuration: "About 16 h (two days tutor-led)",
    audiences: {
      Awareness:
        "Executives, department heads, development and operations teams, IT and security representatives, engineers, HR and administrators involved in the ISMS or first certification. No security-engineering background is required.",
      "Internal Auditor":
        "Information-security team leaders and engineers, IT and operations managers, department heads, compliance officers and aspiring auditors. Awareness or familiarity with ISO/IEC 27001 terminology helps; previous audit experience is not needed.",
      "Lead Auditor":
        "Information-security managers, CISOs and their teams, IT governance and compliance professionals, consultants and auditors preparing to lead audit teams. Delegates should know ISO/IEC 27001 to Awareness or Internal Auditor level.",
    },
    objectives: {
      Awareness: [
        "Explain ISO/IEC 27001:2022 requirements and their application to your role",
        "Describe information-security risk assessment and treatment and how the Statement of Applicability uses Annex A",
        "Identify required records, report incidents and weaknesses, and support external audits",
        "Describe the main changes from the 2013 edition and Amendment 1:2024",
      ],
      "Internal Auditor": [
        "Interpret ISO/IEC 27001:2022 clauses and Annex A controls as audit criteria",
        "Plan a risk-based ISMS audit and prepare a checklist covering the Statement of Applicability",
        "Gather evidence from interviews, system evidence and records",
        "Grade findings, report nonconformities, verify corrective action and report to management",
      ],
      "Lead Auditor": [
        "Interpret ISO/IEC 27001:2022 requirements, risk treatment, the Statement of Applicability and Annex A for audits",
        "Plan, conduct, report and follow up audits in accordance with ISO 19011",
        "Lead an audit team and evaluate evidence against selected controls and requirements",
        "Evaluate ISMS effectiveness against interested-party, legal and contractual requirements",
      ],
    },
  },
  "ISO 41001": {
    foundation: [
      "Facility management system purpose and the demand organisation",
      "Service integration, service levels and interested parties",
      "Sourcing and control of external FM providers",
      "System performance and continual improvement",
    ],
    awareness: [
      "Introduction to ISO 41001:2018 — facility management, FM-system model, harmonised structure and ISO 41011/41012 (60 min)",
      "Context — demand organisation, interested parties, scope and climate-change consideration in Amendment 1:2024 (45 min)",
      "Leadership and planning — policy, roles, risks, opportunities, objectives and changes (60 min)",
      "Support — resources, competence, awareness, communication, information and knowledge (60 min)",
      "Operation — coordination, service integration, sourcing, external providers and change (90 min)",
      "Performance and improvement — measurement, service indicators, audit, review and corrective action (60 min)",
      "Applying the standard — case exercises on hard and soft services contracts (45 min)",
      "40-minute multiple-choice final assessment; certificate on passing",
    ],
    internalAuditor: [
      "Introduction to ISO 41001:2018 and the process approach — demand organisation and FM-system model (72 min)",
      "Facility-management principles and harmonised structure (58 min)",
      "Context — climate change, interested parties and scope (60 min)",
      "Leadership — commitment, FM policy, roles and responsibilities (54 min)",
      "Planning — risks, opportunities and FM objectives (78 min)",
      "Support — resources, competence, awareness, communication and documented information (97 min)",
      "Operation — service integration, sourcing, providers and operational controls (150 min)",
      "Performance evaluation — service performance, audit and management review (97 min)",
      "Improvement — nonconformity, corrective action and continual improvement (57 min)",
      "Internal audit — ISO 19011:2026 principles, objectives and audit types (27 min)",
      "Audit preparation — initiation, criteria, scope, team and document review (24 min)",
      "Performing the audit — questioning, evidence, checklists, observation and trails (81 min)",
      "Reporting — objective evidence, corrective action and auditor/auditee interaction (54 min)",
      "Timed 40-minute final assessment; certificate on passing",
    ],
    leadAuditor: [
      "Day 1 — facility management, demand organisation and interpretation of clauses 4–7",
      "Day 2 — operational requirements, service integration, sourcing, external providers and audit principles",
      "Day 3 — initiate and plan the audit; review documents, sample and interview",
      "Day 4 — lead the audit team, evaluate service evidence, grade findings and report",
      "Day 5 — complete the audit, verify corrective action and sit the written examination",
      "Assessment: continuous participation and exercises plus written examination; certificate on passing",
    ],
    levels: ["Awareness", "Internal Auditor", "Lead Auditor"],
    awarenessDuration: "One day tutor-led",
    deliveryModes: {
      Awareness: ["Live tutor-led online", "Onsite"],
      "Internal Auditor": ["Self-paced online", "Live tutor-led online", "Onsite"],
      "Lead Auditor": ["Live tutor-led online", "Onsite"],
    },
    internalAuditorDuration: "About 16 h",
    audiences: {
      Awareness:
        "Facility-management providers and in-house estates teams who need to understand the demand organisation, service integration, sourcing and service levels. No prior ISO knowledge is required.",
      "Internal Auditor":
        "Facility-management team leaders, department heads, service managers and staff responsible for checking service delivery, sourcing and performance. Awareness or familiarity with ISO 41001 helps.",
      "Lead Auditor":
        "Facility-management managers, consultants and auditors who lead audits for FM providers and demand organisations. Delegates should already know ISO 41001 to Awareness or Internal Auditor level.",
    },
    objectives: {
      Awareness: [
        "Explain ISO 41001:2018 and the demand organisation's role in facility management",
        "Describe service integration, sourcing, provider control and service levels",
        "Recognise the performance and improvement requirements of the FM system",
      ],
      "Internal Auditor": [
        "Interpret ISO 41001:2018 as audit criteria",
        "Plan and conduct audits of service delivery, sourcing and performance",
        "Gather evidence from FM activities and service records",
        "Report findings, verify corrective action and communicate conclusions",
      ],
      "Lead Auditor": [
        "Plan and lead audits of FM providers and demand organisations",
        "Evaluate service integration and the control of external providers",
        "Manage multi-site audit teams, evidence, findings and reporting",
        "Assess whether the FM system meets the demand organisation's needs and interested-party requirements",
      ],
    },
  },
  "ISO/IEC 20000-1": {
    foundation: [
      "Service management system purpose and ISO/IEC 20000-1 structure",
      "Service catalogue, service levels and customer relationships",
      "Incident, problem, change and release management",
      "Service performance and continual improvement",
    ],
    awareness: [
      "Introduction to ISO/IEC 20000-1:2018 — purpose, history, ITIL and other frameworks (101 min)",
      "Service-management principles and harmonised structure — conformity, applicability, parties and control (44 min)",
      "Context — service-management terms, interested parties, SMS scope and setup (30 min)",
      "Leadership — commitment, policy, roles and responsibilities (29 min)",
      "Planning — risks, opportunities, objectives and SMS planning (20 min)",
      "Support — resources, competence, awareness, communication, information and knowledge (62 min)",
      "Operation — portfolio, catalogue, assets, configuration, relationships, agreements, supply, demand, transition, resolution and service assurance (95 min)",
      "Performance evaluation — measurement, internal audit, management review and service reporting (35 min)",
      "Improvement — corrective action, continual improvement and certification cycle (44 min)",
      "Section assessments and timed 20-minute final assessment; certificate on passing",
    ],
    internalAuditor: [
      "Introduction to ISO/IEC 20000-1:2018 and the process approach (106 min)",
      "Service-management principles and harmonised structure (77 min)",
      "Context, interested parties and SMS scope (69 min)",
      "Leadership, policy, roles and responsibilities (49 min)",
      "Planning — risks, opportunities, objectives and changes (55 min)",
      "Support — resources, competence, communication, documented information and knowledge (97 min)",
      "Operation — service portfolio, catalogue, assets, configuration, relationships, agreements, transition, resolution and assurance (150 min)",
      "Performance evaluation — measurement, internal audit, management review and reporting (97 min)",
      "Improvement — nonconformity, corrective action and continual improvement (57 min)",
      "Internal audit introduction — ISO 19011, competence and audit-programme management (27 min)",
      "Audit planning — objectives, scope, criteria, checklists and sampling (24 min)",
      "Performing an audit — interviews, service records, observation and evidence (81 min)",
      "Audit reporting — findings, root cause, corrective action and follow-up (54 min)",
      "Timed final assessment; certificate on passing",
    ],
    leadAuditor: [
      "Day 1 — interpret clauses 4–7; SMS context, leadership, planning and support",
      "Day 2 — clauses 8–10; service portfolio and operational processes; audit principles",
      "Day 3 — initiate and plan the audit; document review, sampling and interviews",
      "Day 4 — evaluate service evidence, supplier controls, findings and management reporting",
      "Day 5 — audit completion, corrective-action verification and written examination",
      "Assessment: continuous participation and exercises plus written examination; certificate on passing",
    ],
    levels: ["Awareness", "Internal Auditor", "Lead Auditor"],
    awarenessDuration: "About 8 h",
    internalAuditorDuration: "About 16 h",
    deliveryModes: {
      Awareness: ["Self-paced online", "Live tutor-led online", "Onsite"],
      "Internal Auditor": ["Self-paced online", "Live tutor-led online", "Onsite"],
      "Lead Auditor": ["Live tutor-led online", "Onsite"],
    },
    audiences: {
      Awareness:
        "Department managers, supervisors, service-management representatives, service-desk and frontline engineers, and administrators working in or supporting an SMS. No prior knowledge is required; service-management experience is helpful.",
      "Internal Auditor":
        "Service-delivery team leaders, department heads, technicians, supervisors and service-management representatives who will audit an SMS. No prior audit experience is needed; basic service-management terminology helps.",
      "Lead Auditor":
        "Service-management leads, IT managers, consultants and auditors who will lead audit teams or manage audit programmes. Delegates should know ISO/IEC 20000-1 to Awareness or Internal Auditor level.",
    },
    objectives: {
      Awareness: [
        "Explain ISO/IEC 20000-1:2018, why organisations implement it and how it relates to ITIL and other frameworks",
        "Describe service-management principles, conformity and control of other parties",
        "Identify service portfolio, catalogue, asset, configuration, relationship and agreement requirements",
        "Describe service design, transition, resolution, fulfilment and service assurance",
        "Recognise nonconformities and support service reporting and audits",
      ],
      "Internal Auditor": [
        "Interpret ISO/IEC 20000-1:2018 clauses as audit criteria",
        "Plan risk-based audits and prepare plans and checklists for the SMS",
        "Audit service portfolio, catalogue, asset/configuration, relationship, agreement and operational processes",
        "Report findings, verify corrective action and communicate audit results",
      ],
      "Lead Auditor": [
        "Interpret ISO/IEC 20000-1:2018 requirements for SMS certification audits",
        "Plan and lead audits of service design, transition, delivery and improvement",
        "Evaluate supplier controls, service performance and operational evidence",
        "Manage audit teams, report findings and follow up corrective actions",
      ],
    },
  },
  "ISO 22301": {
    foundation: [
      "Business continuity management system purpose and structure",
      "Disruption scenarios, impacts and recovery priorities",
      "Business impact analysis and continuity strategies",
      "Exercising, response and continual improvement",
    ],
    awareness: [
      "Introduction to ISO 22301:2019 and the process approach — BCMS purpose, history, PDCA and implementation (101 min)",
      "BCMS principles and harmonised structure — context, BIA, risk, strategies and improvement (44 min)",
      "Context — scope, terminology, interested parties and determining the BCMS (30 min)",
      "Leadership — commitment, continuity policy, roles and responsibilities (29 min)",
      "Planning — risks, opportunities, continuity objectives and change (20 min)",
      "Support — resources, competence, awareness, communication and controlled information (62 min)",
      "Operation — BIA, risk assessment, strategies, resources, response, warning, plans, recovery and exercises (95 min)",
      "Performance evaluation — plans, procedures, internal audit and management review (35 min)",
      "Improvement — nonconformity, corrective action and continual improvement (44 min)",
      "Section assessments and timed 40-minute final assessment; certificate on passing",
    ],
    internalAuditor: [
      "Introduction to ISO 22301:2019 and the process approach (106 min)",
      "BCMS principles and harmonised structure (77 min)",
      "Context, interested parties and BCMS scope (69 min)",
      "Leadership, policy, roles and responsibilities (49 min)",
      "Planning — risks, continuity objectives and changes (55 min)",
      "Support — resources, competence, communication and documented information (97 min)",
      "Operation — BIA, risk, strategies, response, recovery and exercise programme (150 min)",
      "Performance evaluation — plan evaluation, audit and management review (97 min)",
      "Improvement — nonconformity, corrective action and continual improvement (57 min)",
      "Internal audit introduction — ISO 19011, competence and audit-programme management (27 min)",
      "Audit planning — objectives, scope, criteria, checklists and sampling (24 min)",
      "Performing an audit — interviews, observation, records and objective evidence (81 min)",
      "Audit reporting — findings, root cause, corrective action and follow-up (54 min)",
      "Timed final assessment; certificate on passing",
    ],
    leadAuditor: [
      "Day 1 — interpret clauses 4–7; context, policy, objectives and workshops",
      "Day 2 — clause 8 BIA, risks, strategies, plans and exercising; clauses 9–10 and audit principles",
      "Day 3 — initiate and plan the audit; document review, sampling and interviews",
      "Day 4 — evaluate continuity evidence, grade findings, report and close the audit",
      "Day 5 — complete the audit, verify corrective action and sit the written examination",
      "Assessment: continuous participation and exercises plus written examination; certificate on passing",
    ],
    levels: ["Awareness", "Internal Auditor", "Lead Auditor"],
    awarenessDuration: "About 8 h 40 min",
    internalAuditorDuration: "About 16 h 40 min",
    deliveryModes: {
      Awareness: ["Self-paced online", "Live tutor-led online", "Onsite"],
      "Internal Auditor": ["Self-paced online", "Live tutor-led online", "Onsite"],
      "Lead Auditor": ["Live tutor-led online", "Onsite"],
    },
    audiences: {
      Awareness:
        "Department managers, supervisors, business-continuity coordinators, IT and facilities staff, risk and compliance representatives, and teams preparing for certification. No prior knowledge is required.",
      "Internal Auditor":
        "Business-continuity managers and team leaders, department heads, BCMS team members, risk and compliance staff, and people aspiring to a continuity role. Basic continuity terminology helps; audit experience is not required.",
      "Lead Auditor":
        "Business-continuity managers, resilience and risk professionals, consultants and auditors preparing to lead audits. Delegates should know ISO 22301 to Awareness or Internal Auditor level.",
    },
    objectives: {
      Awareness: [
        "Explain ISO 22301:2019 and its harmonised structure",
        "Describe business-impact analysis, risk assessment and continuity strategy selection",
        "Identify BCMS records, plans, exercise records and recovery arrangements",
        "Recognise nonconformities and support internal and certification audits",
      ],
      "Internal Auditor": [
        "Interpret ISO 22301:2019 clauses as audit criteria",
        "Plan risk-based BCMS audits and prepare an audit plan and checklist",
        "Audit business-impact analysis, risk assessment, strategies, plans and exercise records",
        "Conduct audits, grade findings, report nonconformities and verify corrective action",
      ],
      "Lead Auditor": [
        "Interpret ISO 22301:2019 requirements in audit situations, including BIA, strategies, plans and exercising",
        "Plan, conduct, report and follow up audits in accordance with ISO 19011",
        "Lead audit teams and evaluate exercise, test and recovery evidence",
        "Assess BCMS capability to protect priority activities during disruption",
      ],
    },
  },
  "ISO 31000": {
    foundation: [
      "Risk management principles and value creation",
      "Leadership, integration and the risk management framework",
      "Communication, consultation and risk criteria",
      "Risk assessment, treatment, monitoring and review",
    ],
    awareness: [
      "Introduction to ISO 31000:2018 — hazard, risk, consequences, likelihood, controls and risk-management fundamentals (101 min)",
      "Risk-management system — identify, analyse, evaluate and treat: avoid, reduce, share or retain (64 min)",
      "Hazard and risk operability — studies, incident reporting, decisions, controls and lifecycle (64 min)",
      "Leadership and commitment — components, terminology, pillars and principles (40 min)",
      "Framework design — leadership, integration, design, implementation, evaluation and improvement (53 min)",
      "Risk process — communication, context, criteria, assessment, treatment, monitoring, review and reporting (73 min)",
      "Risk assessment — worked analysis, evaluation, treatment plans and residual risk (70 min)",
      "Timed 40-minute final assessment; certificate on passing",
    ],
    internalAuditor: [
      "Introduction to ISO 31000:2018 and risk-management fundamentals (120 min)",
      "Risk-management system — identification, analysis, evaluation and treatment options (97 min)",
      "Hazard and risk operability — studies, incident reporting, decision-making and controls",
      "Leadership and commitment — principles, framework and integration",
      "Risk process — context, criteria, assessment, treatment, monitoring and reporting",
      "Risk assessment — worked examples, treatment planning and residual risk",
      "Audit and review planning for the framework and process",
      "Risk-register, assessment, treatment-plan and monitoring-record review",
      "Interviews and objective evidence; findings and corrective-action follow-up",
      "ISO 19011 audit principles and internal review practice",
      "Final assessment; certificate on passing",
    ],
    practitioner: [
      "Workshop 1 — apply ISO 31000 principles and assess organisational context and criteria",
      "Workshop 2 — design and integrate the risk-management framework",
      "Workshop 3 — facilitate risk identification, analysis and evaluation",
      "Workshop 4 — select, implement and monitor risk treatments",
      "Workshop 5 — communicate, review and improve the framework and process",
      "Practical risk assessment using participant scenarios; certificate on successful assessment",
    ],
    levels: ["Awareness", "Internal Auditor", "Practitioner"],
    awarenessDuration: "About 8 h",
    internalAuditorDuration: "About 16 h",
    audiences: {
      Awareness:
        "Department managers, supervisors, risk-management representatives, engineers, project and compliance staff, and administrators involved in identifying, analysing or treating risk. No prior knowledge is required.",
      "Internal Auditor":
        "Risk managers and team leaders, department heads, risk-team members and management-system internal auditors reviewing risk management. Basic risk concepts help; prior audit experience is not required.",
      Practitioner:
        "Risk managers, heads of function, project and programme managers and other people who design or run risk management in their organisation.",
    },
    objectives: {
      Awareness: [
        "Explain ISO 31000:2018 and distinguish hazard, risk, consequence, likelihood and control",
        "Describe the principles, framework and process and how they fit together",
        "Explain leadership, integration and the design of a risk-management framework",
        "Identify, analyse and evaluate risks and select proportionate treatments",
      ],
      "Internal Auditor": [
        "Interpret ISO 31000:2018 principles, framework and process as review criteria",
        "Plan a review and assess risk registers, assessments, treatments and monitoring records",
        "Interview process owners and gather objective evidence",
        "Write findings and follow corrective action through",
      ],
      Practitioner: [
        "Design a risk-management framework that reflects ISO 31000:2018 principles",
        "Integrate risk management into organisational processes and decision-making",
        "Facilitate risk assessment and select proportionate treatment options",
        "Monitor, review and communicate the effectiveness of risk management",
      ],
    },
    deliveryModes: {
      Awareness: ["Self-paced online", "Live tutor-led online", "Onsite"],
      "Internal Auditor": ["Self-paced online", "Live tutor-led online", "Onsite"],
      Practitioner: ["Live tutor-led online", "Onsite"],
    },
  },
  "ISO 50001": {
    foundation: [
      "Energy management system purpose and ISO 50001 structure",
      "Energy uses, energy review and significant energy uses",
      "Energy baselines, performance indicators and objectives",
      "Operational control and continual improvement",
    ],
    awareness: [
      "Introduction to ISO 50001:2018 — energy fundamentals, aims, benefits, ratings, systems and energy waste (101 min)",
      "EnMS principles and harmonised structure — energy use, management concepts and objectives (44 min)",
      "Context — organisation, interested parties, scope and EnMS (30 min)",
      "Leadership — commitment, energy policy, roles and responsibilities (29 min)",
      "Planning — risks, objectives, targets, energy review, EnPIs, baseline and data collection (20 min)",
      "Support — resources, competence, awareness, communication and documented information (62 min)",
      "Operation — operational planning, control, design and procurement (95 min)",
      "Performance evaluation — energy performance, legal compliance, internal audit and management review (35 min)",
      "Improvement — corrective action, continual improvement and certification cycle (44 min)",
      "Section assessments and timed 40-minute final assessment; certificate on passing",
    ],
    internalAuditor: [
      "Introduction to ISO 50001:2018 and the process approach (106 min)",
      "EnMS principles and harmonised structure (77 min)",
      "Context, interested parties and EnMS scope (69 min)",
      "Leadership, energy policy, roles and responsibilities (49 min)",
      "Planning — energy review, risks, objectives, baseline, EnPIs and data (55 min)",
      "Support — competence, communication and documented information (97 min)",
      "Operation — energy controls, design and procurement (150 min)",
      "Performance evaluation — measurement, compliance and management review (97 min)",
      "Improvement — nonconformity, corrective action and continual improvement (57 min)",
      "Internal audit introduction — ISO 19011, auditor competence and audit programme (27 min)",
      "Audit planning — objectives, scope, criteria, checklists and sampling (24 min)",
      "Performing an audit — interviews, energy data, records and objective evidence (81 min)",
      "Audit reporting — findings, root cause, corrective action and follow-up (54 min)",
      "Timed final assessment; certificate on passing",
    ],
    leadAuditor: [
      "Day 1 — interpret clauses 4–7; context, leadership, planning and energy review",
      "Day 2 — clauses 8–10; significant energy uses, controls, design and procurement; audit principles",
      "Day 3 — initiate, plan and prepare the audit; document review, sampling and interviews",
      "Day 4 — evaluate energy evidence, grade findings, report and close the audit",
      "Day 5 — audit completion, corrective-action verification and written examination",
      "Assessment: continuous participation and exercises plus written examination; certificate on passing",
    ],
    levels: ["Awareness", "Internal Auditor", "Lead Auditor"],
    awarenessDuration: "About 8 h",
    internalAuditorDuration: "About 16 h",
    deliveryModes: {
      Awareness: ["Self-paced online", "Live tutor-led online", "Onsite"],
      "Internal Auditor": ["Self-paced online", "Live tutor-led online", "Onsite"],
      "Lead Auditor": ["Live tutor-led online", "Onsite"],
    },
    audiences: {
      Awareness:
        "Department managers, supervisors, energy representatives, facilities and maintenance engineers, and administrators working in or supporting an EnMS. No prior knowledge is required; energy-management experience is helpful.",
      "Internal Auditor":
        "Energy-audit team leaders, department heads, technicians, supervisors, energy and facilities managers who will audit an EnMS. Basic energy-management terminology helps; audit experience is not required.",
      "Lead Auditor":
        "Energy and facilities managers, environmental and sustainability leads, consultants and auditors who will lead EnMS audit teams. Delegates should know ISO 50001 to Awareness or Internal Auditor level.",
    },
    objectives: {
      Awareness: [
        "Explain ISO 50001:2018, its aims, benefits and structure",
        "Describe energy forms, transformations, performance and common sources of waste",
        "Explain the energy review, baseline, EnPIs and energy-data collection plan",
        "Identify operational control, design and procurement requirements and support audits",
      ],
      "Internal Auditor": [
        "Interpret ISO 50001:2018 clauses as audit criteria",
        "Plan risk-based EnMS audits and prepare audit plans and checklists",
        "Audit the energy review, baseline, EnPIs, data collection and operational controls",
        "Report findings, verify corrective action and assess continual improvement in energy performance",
      ],
      "Lead Auditor": [
        "Interpret ISO 50001:2018 requirements for energy-management certification audits",
        "Plan and lead audits of energy reviews, significant energy uses and performance improvement",
        "Evaluate energy baselines, EnPIs, data and operational controls",
        "Manage audit teams, evidence and reporting and verify corrective action",
      ],
    },
  },
  "ISO/IEC 17025": {
    foundation: [
      "Introduction to ISO/IEC 17025:2017 — ISO Guide 25, the 2017 edition, and accreditation versus certification (72 min)",
      "Laboratory management principles — competence, impartiality, confidentiality, consistent operation and risk-based thinking (25 min)",
      "Clauses 1–5 — scope, references, terms, general and structural requirements (46 min)",
      "Resource and process requirements — personnel, equipment, traceability, methods, sampling, uncertainty, result validity, reporting and nonconforming work (226 min)",
      "Management-system requirements — Options A/B, documents, risks, improvement, corrective action, audit and management review (91 min)",
      "20-minute multiple-choice final assessment; certificate on passing",
    ],
    awareness: [
      "Introduction to ISO/IEC 17025:2017 and the process approach — purpose, structure and terminology",
      "Laboratory competence, impartiality, confidentiality and the harmonised structure",
      "General and structural requirements — impartiality, confidentiality, organisation and scope",
      "Resources — personnel, facilities, equipment, metrological traceability and external services",
      "Processes — requests, method selection, verification and validation, sampling and item handling",
      "Technical records, measurement uncertainty, validity of results and reporting",
      "Complaints, nonconforming work, corrective action and continual improvement",
      "Management-system options, documents, internal audit and management review",
      "Section assessments and timed 40-minute final assessment; certificate on passing",
    ],
    internalAuditor: [
      "Day 1 morning — general, structural and resource requirements as audit criteria; audit cycle, ISO 19011:2026 and auditor competence",
      "Day 1 afternoon — method validation, sampling, item handling, technical records, uncertainty, result validity, proficiency testing and reporting; audit-programme workshop",
      "Day 2 morning — opening meeting, analyst interviews, witnessing a test or calibration, sampling records and certificates",
      "Day 2 afternoon — grade findings, write nonconformity reports, close the audit, report to management and verify corrective action",
      "40-minute written assessment plus assessed exercises; certificate of achievement on passing",
    ],
    levels: ["Foundation", "Awareness", "Internal Auditor"],
    foundationDuration: "8 h 20 min",
    awarenessDuration: "About 16 h",
    internalAuditorDuration: "2 days",
    deliveryModes: {
      Foundation: ["Self-paced online", "Onsite"],
      Awareness: ["Self-paced online", "Live tutor-led online", "Onsite"],
      "Internal Auditor": ["Live tutor-led online", "Onsite"],
    },
    foundationAudience:
      "New laboratory staff, sample-reception and administrative teams, managers who depend on laboratory results, sales staff answering tender questions, and organisations considering accreditation. No prior knowledge is required.",
    awarenessAudience:
      "Laboratory heads, quality and technical managers, department managers, supervisors, team leaders, engineers, technicians and administrators involved in testing and calibration, including teams preparing for their first accreditation assessment. Foundation or laboratory experience helps but is not required.",
    foundationObjectives: [
      "Explain ISO/IEC 17025:2017, its structure and how it differs from ISO 9001",
      "Describe laboratory competence, impartiality and confidentiality",
      "Recognise structural, resource, process and management-system requirements",
      "Describe the accreditation route and what an assessment examines",
    ],
    awarenessObjectives: [
      "Explain ISO/IEC 17025:2017 requirements and their application in your laboratory",
      "Identify technical records, calibration evidence and documented information your role must keep",
      "Recognise nonconforming work and manage it through the laboratory system",
      "Participate in an internal audit and support an accreditation assessment",
    ],
    audiences: {
      "Internal Auditor":
        "Laboratory staff who plan, conduct and report internal audits before an accreditation assessment. Familiarity with ISO/IEC 17025 and laboratory processes is helpful; this is tutor-led training.",
    },
    objectives: {
      "Internal Auditor": [
        "Interpret ISO/IEC 17025:2017 clauses, including technical requirements, as audit criteria",
        "Plan and conduct an internal audit using ISO 19011 principles",
        "Gather objective evidence from laboratory processes, records and technical activities",
        "Report findings, verify corrective action and prepare the laboratory for assessment",
      ],
    },
  },
  "ISO/IEC 17043": {
    foundation: [
      "Introduction to ISO/IEC 17043:2023: history from ISO Guide 43 through the 2010 edition, the 2023 restructuring, proficiency testing in laboratory competence, and provider accreditation (69 min)",
      "Personnel, facilities, equipment and PT scheme design: scheme planning, PT item preparation, homogeneity and stability testing, statistical design and assigned values (96 min)",
      "Operation of PT schemes, choice of methods, data analysis and evaluation of results (75 min)",
      "Reports, communication with participants and confidentiality (66 min)",
      "Management system requirements: organisation, documentation, contract review, subcontracting, purchasing, complaints and appeals, nonconforming work, improvement, corrective action, records, internal audit and management review (183 min)",
      "25-minute multiple-choice final assessment; certificate on passing",
    ],
    awareness: [
      "Introduction to ISO/IEC 17043:2023 and the process approach (102 min)",
      "Personnel, facilities, equipment and PT scheme design, including PT item preparation, homogeneity, stability and assigned values (111 min)",
      "Operation of PT schemes, choice of methods, data analysis and evaluation of results (114 min)",
      "Reports, communication with participants and confidentiality (103 min)",
      "Management system requirements: impartiality, organisation, management system options and document control (105 min)",
      "Management system requirements: contract review, subcontracting, complaints, appeals, nonconforming work, corrective action, risks, records, internal audit and management review (183 min)",
      "Internal audit introduction: ISO 19011:2026 principles and auditor competence (45 min)",
      "Internal audit programme: planning, audit plans and checklists, conducting audits and gathering evidence (60 min)",
      "Nonconformity reports: grading, closing findings and verifying corrective action (85 min)",
      "50-minute final assessment; certificate on passing",
    ],
    internalAuditor: ["Internal auditor content is not listed for this standard"],
    levels: ["Foundation", "Awareness"],
    foundationAudience:
      "New staff at a proficiency testing provider, laboratory staff who take part in PT schemes, quality managers selecting schemes, and organisations considering operating a scheme and seeking accreditation. No prior knowledge is required.",
    awarenessAudience:
      "Scheme coordinators, technical managers, laboratory heads, quality staff, laboratory teams and technicians preparing PT items, and administrative staff handling participant registration, reporting and complaints. Foundation or PT scheme experience is helpful but not required.",
    foundationObjectives: [
      "Explain proficiency testing, the role of a provider and the structure of ISO/IEC 17043:2023",
      "Describe how schemes are planned, PT items checked for homogeneity and stability, and results evaluated and reported",
      "Recognise provider structural, resource, process and management system requirements",
      "Describe the route to provider accreditation and the role of accredited schemes for participants",
    ],
    awarenessObjectives: [
      "Explain ISO/IEC 17043:2023 requirements and apply them to your scheme or role",
      "Identify provider records, including homogeneity and stability data and participant reports",
      "Recognise and manage nonconforming work in scheme operation",
      "Plan and participate in internal audits, raise findings and close nonconformities",
      "Support an accreditation assessment",
    ],
    objectives: {
      Foundation: [
        "Explain proficiency testing, the role of a provider and the structure of ISO/IEC 17043:2023",
        "Describe scheme planning, PT-item preparation, homogeneity and stability checks, evaluation and reporting",
        "Recognise structural, resource, process and management-system requirements",
        "Describe provider accreditation and the value of accredited schemes to participants",
      ],
      Awareness: [
        "Explain ISO/IEC 17043:2023 requirements and apply them to your scheme or role",
        "Identify provider records, including homogeneity and stability data and participant reports",
        "Recognise and manage nonconforming work in scheme operation",
        "Plan and participate in internal audits, raise findings and close nonconformities",
        "Support an accreditation assessment",
      ],
    },
    foundationDuration: "8 h 25 min",
    awarenessDuration: "About 16 h (two days tutor-led)",
    deliveryModes: {
      Foundation: ["Self-paced online", "Onsite"],
      Awareness: ["Self-paced online", "Live tutor-led online", "Onsite"],
    },
  },
  "ISO 13528": {
    foundation: [
      "Introduction to ISO 13528:2022 — role of PT statistics, relationship to ISO/IEC 17043 and editions (47 min)",
      "General principles and definitions — assigned values, robust statistics, outliers and scheme purpose (65 min)",
      "Statistical design, review of PT items and initial results review — homogeneity, stability and blunder review (85 min)",
      "Assigned values, standard uncertainty and performance evaluation — reference and consensus values and evaluation criteria (135 min)",
      "Performance statistics and graphics — z, z-prime, zeta, En, histograms, density, bar and Youden plots (105 min)",
      "20-minute multiple-choice final assessment; certificate on passing",
    ],
    awareness: [
      "Introduction to ISO 13528:2022 and the process approach — relationship to ISO/IEC 17043:2023 (101 min)",
      "Interlaboratory-comparison principles — provider, participant and statistician roles",
      "Statistical design, homogeneity, stability and initial review of results",
      "Assigned values and standard uncertainty — recognised methods and worked calculations",
      "Performance evaluation — standard deviation for proficiency assessment and criteria",
      "Performance statistics — z, z-prime, zeta and En scores",
      "Graphical reporting — histograms, kernel density, bar and Youden plots",
      "Qualitative and semi-quantitative schemes and non-numerical results",
      "Internal audit of statistical design, data handling and evaluation against ISO 13528 and ISO/IEC 17043",
      "20-minute final assessment; certificate on passing",
    ],
    internalAuditor: ["Auditor levels are not offered for this statistical guidance standard"],
    levels: ["Foundation", "Awareness"],
    foundationDuration: "8 h 20 min",
    awarenessDuration: "About 16 h",
    deliveryModes: {
      Foundation: ["Self-paced online", "Onsite"],
      Awareness: ["Self-paced online", "Live tutor-led online", "Onsite"],
    },
    foundationAudience:
      "New PT-provider staff, laboratory analysts and quality managers who interpret PT reports, and managers deciding how a scheme should be designed. No prior statistics beyond school level is required.",
    awarenessAudience:
      "PT scheme coordinators, technical and quality managers, laboratory managers designing interlaboratory comparisons, statisticians new to PT, engineers and staff preparing participant reports. Basic statistical knowledge is assumed.",
    foundationObjectives: [
      "Explain ISO 13528:2022 and its relationship to ISO/IEC 17043",
      "Describe assigned values, standard deviation for proficiency assessment, robust statistics and performance scores",
      "Recognise statistical scheme-design checks and review of test items and results",
      "Read PT reports and interpret performance evaluations and graphs",
    ],
    awarenessObjectives: [
      "Apply ISO 13528:2022 guidance to statistical design of PT schemes",
      "Assess homogeneity and stability and perform initial review of results",
      "Determine assigned values and calculate standard uncertainty",
      "Select and calculate performance statistics and present results graphically",
      "Review a scheme's statistical process and raise audit findings",
    ],
  },
};

const standardModules = (subject: string, standard: string): CourseModule[] => {
  const profile = courseProfiles[standard];
  if (!profile) throw new Error(`Missing training content profile for ${standard}`);
  const defaultModes = (level: CourseLevel) =>
    level === "Lead Auditor" || level === "Practitioner"
      ? ["Live tutor-led online", "Onsite"]
      : ["Self-paced online", "Live tutor-led online", "Onsite"];
  const modes = (level: CourseLevel) => profile.deliveryModes?.[level] ?? defaultModes(level);

  const allModules = [
    mod(
      "Foundation",
      profile.foundationDuration ?? "2 h 10 min",
      profile.audiences?.Foundation ??
        profile.foundationAudience ??
        `Anyone new to ${standard} who needs a practical introduction to ${subject}.`,
      profile.objectives?.Foundation ??
        profile.foundationObjectives ?? [
          `Explain the purpose and structure of ${standard}`,
          `Describe the core principles of ${subject}`,
          `Recognise how ${standard} applies to your organisation`,
        ],
      profile.foundation,
      modes("Foundation"),
    ),
    mod(
      "Awareness",
      profile.awarenessDuration ?? "About 8 h",
      profile.audiences?.Awareness ??
        profile.awarenessAudience ??
        `Staff who work within or support the organisation's ${subject} system.`,
      profile.objectives?.Awareness ??
        profile.awarenessObjectives ?? [
          `Explain the requirements of ${standard} relevant to your role`,
          `Identify the records and controls used in ${subject}`,
          "Recognise issues to report and how to support an audit",
        ],
      profile.awareness,
      modes("Awareness"),
    ),
    mod(
      "Internal Auditor",
      profile.internalAuditorDuration ?? "About 16 h",
      profile.audiences?.["Internal Auditor"] ??
        `People who review or audit the organisation's ${subject} arrangements.`,
      profile.objectives?.["Internal Auditor"] ?? [
        `Use ${standard} requirements as audit or review criteria`,
        "Plan activities and gather objective evidence",
        "Report findings and follow up corrective action",
      ],
      profile.internalAuditor,
      modes("Internal Auditor"),
    ),
    ...(profile.leadAuditor
      ? [
          mod(
            "Lead Auditor",
            "5 days",
            profile.audiences?.["Lead Auditor"] ??
              `Experienced ${subject} professionals preparing to lead audit teams.`,
            profile.objectives?.["Lead Auditor"] ?? [
              `Interpret ${standard} requirements in an audit`,
              "Lead an audit team through planning, evidence gathering and reporting",
              "Evaluate findings and communicate conclusions to management",
            ],
            profile.leadAuditor,
            modes("Lead Auditor"),
          ),
        ]
      : []),
    ...(profile.practitioner
      ? [
          mod(
            "Practitioner",
            "2 days",
            profile.audiences?.Practitioner ??
              `Risk professionals responsible for applying ${subject} in their organisation.`,
            profile.objectives?.Practitioner ?? [
              "Apply the framework and process to organisational risks",
              "Select and implement proportionate risk treatments",
              "Communicate and review risk information",
            ],
            profile.practitioner,
            modes("Practitioner"),
          ),
        ]
      : []),
  ];

  return allModules.filter((module) =>
    (profile.levels ?? ["Foundation", "Awareness", "Internal Auditor", "Lead Auditor"]).includes(
      module.level,
    ),
  );
};

export const courses: Course[] = [
  {
    slug: "iso-9001",
    code: "ISO 9001:2026",
    title: "ISO 9001:2026 Training Courses",
    discipline: "Quality management",
    category: "Quality",
    summary:
      "ISO 9001:2026 is the standard most organisations are asked about first, and the one most people are asked to help run. Whether you need a two-hour grounding, a working knowledge of every clause, the skills to audit your own system or the competence to lead audit teams, TRAIBCERT teaches ISO 9001 at four levels. Study at your own pace on TRAIBCERT Academy, join a live online class with a tutor, or have us deliver at your site. Every course ends with an assessment and a TRAIBCERT certificate.",
    delivery: ["Self-paced online", "Live tutor-led online", "Onsite"],
    modules: standardModules("quality management", "ISO 9001"),
    featured: true,
    priceMinor: 49500,
    currency: "GBP",
    academyCourses: [
      {
        level: "Foundation",
        price: 40,
        previousPrice: 89,
        duration: "2 h 10 min video",
        access: "90 days",
        modules: "5 modules",
        assessment: "10–15 min final assessment",
        academyPath: "/store/courses/Foundation%20training",
      },
      {
        level: "Awareness",
        price: 179,
        previousPrice: 229,
        duration: "About 8 h",
        access: "180 days",
        modules: "9 modules with section tests",
        assessment: "40 min final examination",
        academyPath: "/store/courses/Awareness%20Training%20Module",
        updateModules: [
          "What changed in ISO 9001:2026",
          "Transition for existing certificate holders",
        ],
      },
      {
        level: "Internal Auditor",
        price: 289,
        previousPrice: 439,
        duration: "About 16 h",
        access: "180 days",
        modules: "13 modules plus ISO 19011 audit modules",
        assessment: "40 min final assessment; certificate on pass",
        academyPath: "/store/courses/Internal%20Auditor%20Training",
        updateModules: [
          "What changed in ISO 9001:2026",
          "Transition for existing certificate holders",
        ],
      },
    ],
  },
  {
    slug: "iso-14001",
    code: "ISO 14001:2026",
    title: "ISO 14001:2026 Training Courses",
    discipline: "Environmental management",
    category: "Environment",
    summary:
      "ISO 14001 is the standard organisations turn to when customers, regulators and investors ask how environmental impact is being managed, and the one most often run alongside ISO 9001. TRAIBCERT teaches ISO 14001 at three levels, updated for the 2026 edition. Study at your own pace on TRAIBCERT Academy, join a live online class with a practising lead auditor, or learn at your site using your own aspects, impacts and compliance obligations as case material. Every course ends with an assessment and a TRAIBCERT certificate.",
    delivery: ["Self-paced online", "Live tutor-led online", "Onsite"],
    modules: standardModules("environmental management", "ISO 14001"),
    featured: true,
    priceMinor: 49500,
    currency: "GBP",
  },
  {
    slug: "iso-45001",
    code: "ISO 45001:2018",
    title: "ISO 45001:2018 Training Courses",
    discipline: "Health & safety",
    category: "Safety",
    summary:
      "ISO 45001:2018 is the international standard for occupational health and safety management systems. TRAIBCERT teaches it at four levels, from a practical introduction to the skills to audit your own OH&S system or lead audit teams. Study at your own pace on TRAIBCERT Academy, join a live online class with a practising lead auditor, or learn at your site using your own hazards, risks and controls as case material. Every course ends with an assessment and a TRAIBCERT certificate.",
    delivery: ["Self-paced online", "Live tutor-led online", "Onsite"],
    modules: standardModules("occupational health and safety", "ISO 45001"),
    featured: true,
    priceMinor: 49500,
    currency: "GBP",
  },
  {
    slug: "iso-22000",
    code: "ISO 22000:2018",
    title: "ISO 22000:2018 Training Courses",
    discipline: "Food safety",
    category: "Quality",
    summary:
      "ISO 22000:2018 connects food safety management across the food chain. Build understanding of prerequisite programmes, hazard analysis and HACCP controls, then progress to auditing or leading audits of a food safety management system. Learn through TRAIBCERT Academy, in a live online class or onsite using practical food-chain scenarios. Every course ends with an assessment and a TRAIBCERT certificate.",
    delivery: ["Self-paced online", "Live tutor-led online", "Onsite"],
    modules: standardModules("food safety management", "ISO 22000"),
    priceMinor: 49500,
    currency: "GBP",
  },
  {
    slug: "iso-27001",
    code: "ISO/IEC 27001:2022",
    title: "ISO/IEC 27001:2022 Training Courses",
    discipline: "Information security",
    category: "Security",
    summary:
      "ISO/IEC 27001:2022 helps organisations manage information security through a risk-based management system. Across Awareness, Internal Auditor and Lead Auditor training, learn how to assess and treat risk, select Annex A controls and audit an ISMS. Choose self-paced learning on TRAIBCERT Academy, live online training or onsite delivery. Every course ends with an assessment and a TRAIBCERT certificate.",
    delivery: ["Self-paced online", "Live tutor-led online", "Onsite"],
    modules: standardModules("information security management", "ISO/IEC 27001"),
    featured: true,
    priceMinor: 59500,
    currency: "GBP",
  },
  {
    slug: "iso-41001",
    code: "ISO 41001:2018",
    title: "ISO 41001:2018 Training Courses",
    discipline: "Facility management",
    category: "Service",
    summary:
      "ISO 41001:2018 gives facility management providers and in-house estates teams a framework to plan, deliver and improve services. Training focuses on the demand organisation, service integration, service levels and control of external providers. Choose the available self-paced Academy course, live online training or onsite delivery; every course ends with an assessment and a TRAIBCERT certificate.",
    delivery: ["Self-paced online", "Live tutor-led online", "Onsite"],
    modules: standardModules("facility management", "ISO 41001"),
    priceMinor: 45000,
    currency: "GBP",
  },
  {
    slug: "iso-20000-1",
    code: "ISO/IEC 20000-1:2018",
    title: "ISO/IEC 20000-1:2018 Training Courses",
    discipline: "IT service management",
    category: "Service",
    summary:
      "ISO/IEC 20000-1:2018 sets requirements for a service management system that keeps IT services aligned with customer needs. Learn about service levels, incident and change management, supplier controls and continual improvement, with options for self-paced Academy study, live online classes and onsite delivery. Every course ends with an assessment and a TRAIBCERT certificate.",
    delivery: ["Self-paced online", "Live tutor-led online", "Onsite"],
    modules: standardModules("IT service management", "ISO/IEC 20000-1"),
    priceMinor: 45000,
    currency: "GBP",
  },
  {
    slug: "iso-22301",
    code: "ISO 22301:2019",
    title: "ISO 22301:2019 Training Courses",
    discipline: "Business continuity",
    category: "Risk",
    summary:
      "ISO 22301:2019 helps organisations prepare for disruption and continue delivering priority products and services. Choose Awareness, Internal Auditor or Lead Auditor training covering business impact analysis, continuity strategies, response plans and exercising. Learn on TRAIBCERT Academy, live online or onsite. Every course ends with an assessment and a TRAIBCERT certificate.",
    delivery: ["Self-paced online", "Live tutor-led online", "Onsite"],
    modules: standardModules("business continuity management", "ISO 22301"),
    priceMinor: 49500,
    currency: "GBP",
  },
  {
    slug: "iso-31000",
    code: "ISO 31000:2018",
    title: "ISO 31000:2018 Training Courses",
    discipline: "Risk management",
    category: "Risk",
    summary:
      "ISO 31000:2018 provides principles, a framework and a process for managing risk across an organisation. Choose Awareness, Internal Auditor or a tutor-led Practitioner workshop to understand, review or apply risk management in decisions and operations. This is a guidance standard rather than a certifiable requirements standard. Study on TRAIBCERT Academy or ask about live online and onsite delivery.",
    delivery: ["Self-paced online", "Live tutor-led online", "Onsite"],
    modules: standardModules("risk management", "ISO 31000"),
    priceMinor: 45000,
    currency: "GBP",
  },
  {
    slug: "iso-50001",
    code: "ISO 50001:2018",
    title: "ISO 50001:2018 Training Courses",
    discipline: "Energy management",
    category: "Environment",
    summary:
      "ISO 50001:2018 helps organisations improve energy performance through a structured energy management system. Learn to carry out an energy review, identify significant energy uses, establish baselines and indicators, and audit the system. Choose self-paced Academy learning, a live online class or onsite delivery. Every course ends with an assessment and a TRAIBCERT certificate.",
    delivery: ["Self-paced online", "Live tutor-led online", "Onsite"],
    modules: standardModules("energy management", "ISO 50001"),
    priceMinor: 45000,
    currency: "GBP",
  },
  {
    slug: "iso-17025",
    code: "ISO/IEC 17025:2017",
    title: "ISO/IEC 17025:2017 Training Courses",
    discipline: "Laboratory competence",
    category: "Laboratory",
    summary:
      "ISO/IEC 17025:2017 is the international standard for the competence of testing and calibration laboratories. Training covers impartiality, method validation, metrological traceability and the validity of results, with self-paced Foundation and Awareness courses and tutor-led auditor training. Every course ends with an assessment and a TRAIBCERT certificate.",
    delivery: ["Self-paced online", "Live tutor-led online", "Onsite"],
    modules: standardModules("laboratory competence", "ISO/IEC 17025"),
    priceMinor: 55000,
    currency: "GBP",
  },
  {
    slug: "iso-17043",
    code: "ISO/IEC 17043:2023",
    title: "ISO/IEC 17043:2023 Training Courses",
    discipline: "Proficiency testing",
    category: "Laboratory",
    summary:
      "ISO/IEC 17043:2023 sets out the general requirements for the competence, impartiality and consistent operation of proficiency testing providers: the organisations that design PT schemes, prepare and distribute test items, evaluate participant results and report performance. The 2023 edition follows the same general, structural, resource, process and management system layout as ISO/IEC 17025. TRAIBCERT teaches it at two levels: an 8 h 25 min Foundation course and an about 16-hour Awareness course for PT provider staff. Both courses are available on TRAIBCERT Academy and end with an assessment and TRAIBCERT certificate.",
    delivery: ["Self-paced online", "Live tutor-led online", "Onsite"],
    modules: standardModules("proficiency testing schemes", "ISO/IEC 17043"),
    priceMinor: 55000,
    currency: "GBP",
    academyCourses: [
      {
        level: "Foundation",
        price: 209,
        previousPrice: 349,
        duration: "8 h 25 min",
        access: "180 days",
        modules: "5 modules",
        assessment: "25 min multiple-choice final assessment",
        academyPath: "/courses/ISO-17043-2010-Foundation-Training-5dac0737e4b0d29b9d9eae1e",
      },
      {
        level: "Awareness",
        price: 362,
        previousPrice: 582,
        duration: "About 16 h",
        access: "365 days",
        modules: "9 modules, including internal audit modules",
        assessment: "50 min final assessment",
        academyPath: "/courses/ISO-170432010-Awareness-Training-5dac0c3ae4b0d29b9d9eb4cc",
      },
    ],
  },
  {
    slug: "iso-13528",
    code: "ISO 13528:2022",
    title: "ISO 13528:2022 Training Courses",
    discipline: "Statistical methods",
    category: "Laboratory",
    summary:
      "ISO 13528:2022 is the statistical companion to ISO/IEC 17043. It covers methods used to design proficiency testing schemes, determine assigned values and uncertainty, calculate performance statistics such as z-scores and present results. This guidance standard has Foundation and Awareness training, not auditor levels. Courses are available through TRAIBCERT Academy and by enquiry for tutor-led or onsite delivery.",
    delivery: ["Self-paced online", "Live tutor-led online", "Onsite"],
    modules: standardModules("statistical evaluation of proficiency testing", "ISO 13528"),
    priceMinor: 55000,
    currency: "GBP",
  },
];

export const academyCoursesBySlug: Record<string, AcademyCourse[]> = {
  "iso-14001": [
    {
      level: "Awareness",
      price: 215,
      previousPrice: 362,
      duration: "About 8 h",
      access: "180 days",
      modules: "Course modules with final assessment",
      assessment: "Final assessment; certificate on pass",
      academyPath: "/courses/ISO-140012015-Awareness-Training-5d8b57b1e4b088ef037a622b",
    },
    {
      level: "Internal Auditor",
      price: 349,
      previousPrice: 569,
      duration: "About 16 h",
      access: "180 days",
      modules: "Internal auditor modules",
      assessment: "Final assessment; certificate on pass",
      academyPath: "/courses/ISO-140012015-Internal-Auditor-Training-5d905cc9e4b0069e8389789a",
    },
  ],
  "iso-45001": [
    {
      level: "Foundation",
      price: 49,
      previousPrice: 109,
      duration: "2 h 10 min",
      access: "180 days",
      modules: "Foundation modules",
      assessment: "10 min final quiz",
      academyPath: "/courses/ISO-450012018-Foundation-Course-5dabf630e4b0d29b9d9e9547",
    },
    {
      level: "Awareness",
      price: 290,
      previousPrice: 362,
      duration: "About 8 h",
      access: "180 days",
      modules: "Awareness modules",
      assessment: "Final assessment; certificate on pass",
      academyPath: "/courses/ISO-450012018-Awareness-Course-5da9a9fae4b08f53ae53ecea",
    },
    {
      level: "Internal Auditor",
      price: 329,
      previousPrice: 529,
      duration: "16 h",
      access: "180 days",
      modules: "Internal auditor modules",
      assessment: "Final assessment; certificate on pass",
      academyPath: "/courses/ISO-45001-2018-InternalAuditor-Course-5da9a4a6e4b08f53ae53e628",
    },
  ],
  "iso-27001": [
    {
      level: "Awareness",
      price: 269,
      previousPrice: 359,
      duration: "About 8 h",
      access: "180 days",
      modules: "Awareness modules",
      assessment: "Final assessment; certificate on pass",
      academyPath: "/courses/ISO-270012022-Awareness-Course-67cc01e506938f1cf1e3f327",
    },
    {
      level: "Internal Auditor",
      price: 399,
      previousPrice: 599,
      duration: "16 h",
      access: "180 days",
      modules: "Internal auditor modules",
      assessment: "Final assessment; certificate on pass",
      academyPath: "/courses/ISO-270012022-Internal-Auditor-Course-67cc022268e13f3695508fa5",
    },
  ],
  "iso-22000": [
    {
      level: "Awareness",
      price: 255,
      previousPrice: 362,
      duration: "About 8 h",
      access: "180 days",
      modules: "Awareness modules",
      assessment: "Final assessment; certificate on pass",
      academyPath: "/courses/ISO-22000-2018-Awareness-Course-5da9973ce4b08f53ae53c407",
    },
    {
      level: "Internal Auditor",
      price: 329,
      previousPrice: 529,
      duration: "16 h",
      access: "180 days",
      modules: "Internal auditor modules",
      assessment: "Final assessment; certificate on pass",
      academyPath: "/courses/ISO-22000-2018-Internal-Auditor-Course-5da9a0c9e4b08f53ae53d4ef",
    },
  ],
  "iso-22301": [
    {
      level: "Awareness",
      price: 274,
      previousPrice: 439,
      duration: "8 h 40 min",
      access: "180 days",
      modules: "Awareness modules",
      assessment: "Final assessment; certificate on pass",
      academyPath: "/courses/ISO-223012019-Awareness-Training-5dad41f5e4b0d29b9d9fec86",
    },
    {
      level: "Internal Auditor",
      price: 489,
      previousPrice: 659,
      duration: "16 h 40 min",
      access: "180 days",
      modules: "Internal auditor modules",
      assessment: "Final assessment; certificate on pass",
      academyPath: "/courses/ISO-22301-2019-Internal-Auditor-Course-5dac3d80e4b0d29b9d9eede0",
    },
  ],
  "iso-20000-1": [
    {
      level: "Awareness",
      price: 219,
      previousPrice: 329,
      duration: "About 8 h",
      access: "180 days",
      modules: "Awareness modules",
      assessment: "Final assessment; certificate on pass",
      academyPath: "/courses/ISO-20000-12018-Awareness-Training-5dada4e3e4b0d29b9da0a31d",
    },
    {
      level: "Internal Auditor",
      price: 362,
      previousPrice: 659,
      duration: "About 16 h",
      access: "180 days",
      modules: "Internal auditor modules",
      assessment: "Final assessment; certificate on pass",
      academyPath: "/courses/ISO-200002018-Internal-Auditor-Training-5dad84bbe4b0d29b9da07d89",
    },
  ],
  "iso-31000": [
    {
      level: "Awareness",
      price: 274,
      previousPrice: 439,
      duration: "About 8 h",
      access: "180 days",
      modules: "7 modules",
      assessment: "Final assessment; certificate on pass",
      academyPath: "/courses/ISO-310002018-Awareness-Training-5dad545ce4b0d29b9da015eb",
    },
    {
      level: "Internal Auditor",
      price: 494,
      previousPrice: 659,
      duration: "About 16 h",
      access: "180 days",
      modules: "11 modules",
      assessment: "Final assessment; certificate on pass",
      academyPath: "/courses/ISO-310002018-internal-auditor-training-5dad505de4b0d29b9d9fff64",
    },
  ],
  "iso-50001": [
    {
      level: "Awareness",
      price: 219,
      previousPrice: 362,
      duration: "About 8 h",
      access: "180 days",
      modules: "Awareness modules",
      assessment: "Final assessment; certificate on pass",
      academyPath: "/courses/ISO-500012018-Awareness-training-5dad7f1ae4b0d29b9da0766f",
    },
    {
      level: "Internal Auditor",
      price: 362,
      previousPrice: 715,
      duration: "About 16 h",
      access: "180 days",
      modules: "Internal auditor modules",
      assessment: "Final assessment; certificate on pass",
      academyPath: "/courses/ISO-500012018-Internal-Auditor-Course-5dad7b7ee4b0d29b9da07105",
    },
  ],
  "iso-41001": [
    {
      level: "Internal Auditor",
      price: 440,
      previousPrice: 740,
      duration: "About 16 h",
      access: "180 days",
      modules: "13 modules",
      assessment: "40 min final assessment",
      academyPath: "/courses/ISO-410012018-Internal-Auditor-course-69357ee50dd54569c98c2ad8",
    },
  ],
  "iso-17025": [
    {
      level: "Foundation",
      price: 209,
      previousPrice: 362,
      duration: "8 h 20 min",
      access: "180 days",
      modules: "5 modules",
      assessment: "20 min final assessment",
      academyPath: "/courses/ISO-170252017-Awareness-Training-Course-Copy-5dac004ae4b0d29b9d9ea05d",
    },
    {
      level: "Awareness",
      price: 329,
      previousPrice: 529,
      duration: "About 16 h",
      access: "180 days",
      modules: "9 modules",
      assessment: "40 min final assessment",
      academyPath: "/courses/ISO-17025-2017-Awareness-Training-Course-5da9b143e4b08f53ae53f68a",
    },
  ],
  "iso-17043": [
    {
      level: "Foundation",
      price: 209,
      previousPrice: 349,
      duration: "8 h 25 min",
      access: "180 days",
      modules: "5 modules",
      assessment: "25 min multiple-choice final assessment",
      academyPath: "/courses/ISO-17043-2010-Foundation-Training-5dac0737e4b0d29b9d9eae1e",
    },
    {
      level: "Awareness",
      price: 362,
      previousPrice: 582,
      duration: "About 16 h",
      access: "365 days",
      modules: "9 modules",
      assessment: "50 min final assessment",
      academyPath: "/courses/ISO-170432010-Awareness-Training-5dac0c3ae4b0d29b9d9eb4cc",
    },
  ],
  "iso-13528": [
    {
      level: "Foundation",
      price: 259,
      previousPrice: 359,
      duration: "8 h 20 min",
      access: "180 days",
      modules: "5 modules",
      assessment: "20 min final assessment",
      academyPath: "/courses/ISO-135282015-Foundation-Training-5dadaaeee4b0d29b9da0abcd",
    },
    {
      level: "Awareness",
      price: 359,
      previousPrice: 579,
      duration: "About 16 h",
      access: "180 days",
      modules: "9 modules",
      assessment: "20 min final assessment",
      academyPath: "/courses/ISO-135282015-awareness-training-5dada668e4b0d29b9da0a4a9",
    },
  ],
};

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
  "Practitioner",
];

/**
 * Format a minor-unit amount (pence) as a localised currency string,
 * e.g. formatPrice(49500, "GBP") -> "£495.00".
 */
export const formatPrice = (priceMinor: number, currency = "GBP") =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency,
  }).format(priceMinor / 100);
