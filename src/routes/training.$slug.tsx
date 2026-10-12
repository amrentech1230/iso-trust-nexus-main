import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { AppLink } from "@/components/AppLink";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import trainingImage from "@/assets/home-training.jpg";
import { CourseCard } from "@/components/site/Cards";
import { CourseCheckout } from "@/components/site/CourseCheckout";
import { CTASection } from "@/components/site/CTASection";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  academyCoursesBySlug,
  courses,
  coursesBySlug,
  type AcademyCourse,
  type CourseLevel,
} from "@/data/courses";
import { site } from "@/config/site";
import { standardsBySlug } from "@/data/standards";
import { breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

const iso9001TrainingFaqs = [
  {
    q: "Which level should I start with?",
    a: "Choose Foundation for an introduction to ISO 9001, Awareness if you work inside a certified system, Internal Auditor if you will audit it, or Lead Auditor if you will lead audit teams. Lead Auditor follows Awareness or Internal Auditor.",
  },
  {
    q: "Which ISO 9001:2026 courses can I buy online?",
    a: "Foundation is $40 USD, Awareness is $179 USD and Internal Auditor is $289 USD. Each is self-paced and purchased through the TRAIBCERT Academy.",
  },
  {
    q: "How long do I have access to a self-paced course?",
    a: "Foundation access lasts 90 days. Awareness and Internal Auditor access lasts 180 days. Course access is not advertised as free for life.",
  },
  {
    q: "How long are the courses and what assessment is included?",
    a: "Foundation includes 2 h 10 min of video and a 10â€“15 minute final assessment. Awareness takes about 8 hours and has a 40-minute final examination. Internal Auditor takes about 16 hours and has a 40-minute final assessment; a certificate is issued on passing.",
  },
  {
    q: "Is Lead Auditor training self-paced?",
    a: "No. Lead Auditor is offered as tutor-led training. Contact TRAIBCERT for the next dates and current fees. Onsite delivery is available by quotation.",
  },
  {
    q: "Does the training cover the 2026 edition?",
    a: "This page follows the supplied ISO 9001:2026 training brief. Check the current Academy course titles and materials, and confirm the Transition course availability and pricing with the training team before booking.",
  },
  {
    q: "Do I get a certificate?",
    a: "Yes. A TRAIBCERT certificate of achievement is issued electronically within seven working days after you pass the final assessment.",
  },
  {
    q: "Can I retake the assessment?",
    a: "Yes. You can retake the final assessment within your course access period.",
  },
  {
    q: "Do you train groups?",
    a: "Yes. Ask about onsite delivery or a private online cohort. Onsite training can use your own processes and documents as case material.",
  },
  {
    q: "Does the course prepare us for certification?",
    a: "It gives your team knowledge to implement and audit the system. Training stays generalâ€”we teach the standard, not your specific documentationâ€”so certification decisions remain impartial.",
  },
];

const iso17043TrainingFaqs = [
  {
    q: "Which level should I start with?",
    a: "Choose Foundation if you need to understand proficiency testing, take part in schemes or select them. Choose Awareness if you operate or manage a PT scheme or are preparing a provider for accreditation.",
  },
  {
    q: "Is there an Internal Auditor or Lead Auditor course for ISO/IEC 17043?",
    a: "No. ISO/IEC 17043 is an accreditation standard for proficiency testing providers. The Awareness course includes internal audit modules for provider staff who audit their own system.",
  },
  {
    q: "Is the course updated for ISO/IEC 17043:2023?",
    a: "The Academy courses are still titled ISO 17043:2010 and are being updated to the 2023 edition. This page identifies ISO/IEC 17043:2023 and maps the course content to its current clauses; tutor-led classes are delivered against the 2023 edition.",
  },
  {
    q: "How long do I have to complete a self-paced course?",
    a: "Foundation access lasts 180 days and Awareness access lasts 365 days from the date access is granted.",
  },
  {
    q: "Do I get a certificate?",
    a: "Yes. A TRAIBCERT certificate of achievement is issued electronically within seven working days after you pass the final assessment. It records training; it is not an accreditation.",
  },
  {
    q: "Can I retake the assessment?",
    a: "Self-paced learners can retake the assessment within the course access period. Tutor-led delegates who do not pass are offered one further attempt.",
  },
  {
    q: "Do you train groups?",
    a: "Yes. Arrange onsite delivery, a private online cohort or an Academy group licence for a PT provider or laboratory group.",
  },
  {
    q: "Does the course prepare our organisation for accreditation?",
    a: "It gives staff the knowledge to implement and audit a provider management system and understand what an accreditation assessment examines. TRAIBCERT teaches the standard, not your scheme designs or statistical procedures.",
  },
];

const courseSpecificFaqs: Record<string, { q: string; a: string }[]> = {
  "iso-14001": [
    {
      q: "Are the Academy courses already updated to ISO 14001:2026?",
      a: "The source document lists the Academy courses under ISO 14001:2015 and says they are being updated. Confirm the current edition and materials with TRAIBCERT before booking.",
    },
    {
      q: "Can I take the ISO 9001 and ISO 14001 Internal Auditor bundle?",
      a: "Yes. The Academy lists an integrated bundle with both Internal Auditor courses, about 32 hours of learning and 180-day access. The listed price is $499 USD; confirm the new-site currency before purchase.",
    },
  ],
  "iso-27001": [
    {
      q: "Do I need a technical IT or security background?",
      a: "No. The course teaches the standard as a management system and explains Annex A at the level needed by managers and auditors. Technical specialists may also find the risk-treatment and control-audit content useful.",
    },
    {
      q: "Does the training include ISO/IEC 27001 Amendment 1:2024?",
      a: "The 2024 amendment adds climate change as a consideration in context and interested-party requirements. Confirm that the selected Academy course reflects this amendment before booking.",
    },
  ],
  "iso-45001": [
    {
      q: "Is ISO 45001:2018 still the current edition?",
      a: "Yes. The supplied course brief identifies ISO 45001:2018 as the current edition and says all listed levels are delivered against it.",
    },
    {
      q: "Can an onsite Awareness session be tailored to our workplace?",
      a: "Yes. Onsite delivery can use your own risk assessments and site walk-rounds as case material. Share your preferred dates, location and group size when enquiring.",
    },
  ],
  "iso-22000": [
    {
      q: "Does ISO 22000 training cover HACCP?",
      a: "Yes. The outline covers hazard analysis, the hazard control plan with CCPs and OPRPs, validation, monitoring and verification. It is not a separate HACCP certificate course.",
    },
    {
      q: "Is there an ISO 22000 Foundation or Lead Auditor Academy course?",
      a: "The source document lists Academy courses for Awareness and Internal Auditor only. Foundation is available as an onsite group session; Lead Auditor is tutor-led or onsite.",
    },
  ],
  "iso-22301": [
    {
      q: "Can an onsite course use our continuity plans?",
      a: "Yes. Onsite delivery can use your business impact analysis and continuity plans as case material. Share your preferred dates, location and group size when enquiring.",
    },
    {
      q: "Are the ISO 22301 courses based on the current edition?",
      a: "The supplied course brief identifies ISO 22301:2019 as the current edition and says all three levels are titled and taught to it.",
    },
  ],
  "iso-20000-1": [
    {
      q: "Do I need ITIL knowledge before taking the course?",
      a: "No. The introduction explains how ITIL and other service frameworks relate to ISO/IEC 20000-1. ITIL experience is helpful, but the course assumes no prior knowledge.",
    },
    {
      q: "Are all levels available on the Academy?",
      a: "The source document lists Academy courses for Awareness and Internal Auditor. Lead Auditor is tutor-led or onsite only.",
    },
  ],
  "iso-50001": [
    {
      q: "Do I need an engineering background?",
      a: "No. Awareness starts with energy fundamentals, including energy forms, transformations and energy use, before covering the standard. Engineers may build on their existing operational knowledge.",
    },
    {
      q: "Can onsite training use our energy data?",
      a: "Yes. Onsite delivery can use your energy review and performance data as case material. Share the level, group size, preferred dates and location when enquiring.",
    },
  ],
  "iso-41001": [
    {
      q: "Is Awareness available as a self-paced Academy course?",
      a: "No self-paced Awareness course is listed in the source document. Awareness is tutor-led or onsite; the Academy currently lists the Internal Auditor course.",
    },
    {
      q: "Does ISO 41001 training cover Amendment 1:2024?",
      a: "The supplied Awareness outline includes the amendment's climate-change consideration. The Academy Internal Auditor listing does not mention the amendment, so confirm the materials before booking.",
    },
  ],
  "iso-17025": [
    {
      q: "Is ISO/IEC 17025 certification or accreditation?",
      a: "ISO/IEC 17025 is an accreditation standard for testing and calibration laboratories. A laboratory demonstrates competence to an accreditation body; the training certificate is not laboratory accreditation.",
    },
    {
      q: "Is there a Lead Auditor course?",
      a: "No. The document lists Foundation and Awareness on the Academy and Internal Auditor as tutor-led or onsite. Laboratories need internal auditors; accreditation bodies assess laboratories.",
    },
  ],
  "iso-31000": [
    {
      q: "Can an organisation be certified to ISO 31000?",
      a: "No. ISO 31000 is a risk-management guideline, not a requirements standard for certification. The available training levels are Awareness, Internal Auditor and Practitionerâ€”not Lead Auditor.",
    },
    {
      q: "Which level suits someone who designs risk management?",
      a: "Choose the two-day Practitioner workshop if you design or run risk management in your organisation. Awareness suits people contributing to risk assessments; Internal Auditor suits people reviewing how the framework and process are applied.",
    },
  ],
  "iso-13528": [
    {
      q: "Which level should I start with?",
      a: "Choose Foundation if you are new to a PT provider or need to understand PT reports and performance scores. Choose Awareness if you design schemes, evaluate results, prepare participant reports or run PT statistics.",
    },
    {
      q: "Do I need a statistics background?",
      a: "Foundation assumes school-level mathematics only. Awareness assumes a comfortable grasp of means, standard deviations and basic probability; robust methods and performance scores are taught with worked spreadsheet examples.",
    },
    {
      q: "Is there an auditor or certification course for ISO 13528?",
      a: "No. ISO 13528 is guidance on statistical methods, not a requirements standard to certify or audit. Awareness includes a module on reviewing a scheme's statistical process; broader PT-provider auditing is covered in ISO/IEC 17043 Awareness.",
    },
    {
      q: "Is the course updated for ISO 13528:2022?",
      a: "The Academy courses are still titled ISO 13528:2015 and are being updated. This page identifies the 2022 edition; tutor-led classes are delivered against ISO 13528:2022.",
    },
    {
      q: "How long do I have to complete the self-paced course?",
      a: "Both Foundation and Awareness include 180 days of access from the date access is granted.",
    },
    {
      q: "What assessment and certificate are included?",
      a: "Both Academy courses include a 20-minute final assessment. A TRAIBCERT certificate of achievement is issued after you pass, normally within seven working days.",
    },
    {
      q: "Can I retake the assessment?",
      a: "Self-paced learners can retake the assessment within the access period. Tutor-led delegates who do not pass are offered one further attempt.",
    },
    {
      q: "Can you train a group?",
      a: "Yes. Ask about onsite delivery, a private online cohort for a PT provider or laboratory group, or an Academy group licence with progress reporting.",
    },
    {
      q: "Will TRAIBCERT design or check our scheme statistics?",
      a: "No. TRAIBCERT teaches the standard and its methods, not your scheme design or data. Applying the methods to your schemes remains your responsibility, preserving the impartiality of assessment and certification services.",
    },
    {
      q: "What do I need to study online?",
      a: "A computer or phone with a browser and a spreadsheet application for the worked examples. Course access details are emailed after payment.",
    },
  ],
};

const documentCourseFaqs: Record<string, { q: string; a: string }[]> = {
  "iso-14001": [
    {
      q: "Which level should I start with?",
      a: "Choose Awareness if you work inside or are helping build an environmental management system, Internal Auditor if you will audit it, and Lead Auditor if you will lead audits. Lead Auditor follows Awareness or Internal Auditor. Ask about an onsite Foundation session for a short whole-department introduction.",
    },
    {
      q: "Is the course updated for ISO 14001:2026?",
      a: "The 2026 edition was published on 15 April 2026 and all levels are being updated. The page states the edition each course is delivered against; learners who bought the 2015 Academy course can take the short update module.",
    },
    {
      q: "How long do I have to complete a self-paced course?",
      a: "Awareness and Internal Auditor include 180 days of access from the date access is granted.",
    },
    {
      q: "Should I take the ISO 9001 and ISO 14001 bundle instead?",
      a: "If your organisation runs an integrated quality and environmental system, the bundle includes both Internal Auditor courses under one access period at a lower combined price. If you only audit the environmental management system, the ISO 14001 course is the better fit.",
    },
    {
      q: "Do I get a certificate, and can I retake the assessment?",
      a: "A TRAIBCERT certificate of achievement is issued electronically within seven working days after you pass. You can retake the assessment within the course access period.",
    },
    {
      q: "Do you train groups?",
      a: "Yes. Arrange onsite delivery, a private online cohort or an Academy group licence with progress reporting for your training manager.",
    },
    {
      q: "Does the course prepare us for certification?",
      a: "It builds the knowledge to implement and audit the system. As a certification body, TRAIBCERT teaches the standard rather than your specific documentation so certification decisions remain impartial.",
    },
    {
      q: "What do I need to study online?",
      a: "A computer or phone with a browser. Course access details are emailed after payment.",
    },
  ],
  "iso-45001": [
    {
      q: "Which level should I start with?",
      a: "Choose Foundation to understand the standard, Awareness if you work inside or are helping build the system, Internal Auditor if you will audit it, and Lead Auditor if you will lead audits after Awareness or Internal Auditor.",
    },
    {
      q: "Is ISO 45001:2018 still the current edition?",
      a: "Yes. ISO 45001:2018 is the current edition and every course on this page is delivered against it. If a revision is published, the page will state the edition each course is delivered against and an update module will be offered.",
    },
    {
      q: "How long do I have to complete a self-paced course?",
      a: "Foundation, Awareness and Internal Auditor include 180 days of access from the date access is granted.",
    },
    {
      q: "Do I get a certificate, and can I retake the assessment?",
      a: "A TRAIBCERT certificate of achievement is issued electronically within seven working days after you pass. You can retake the assessment within the course access period.",
    },
    {
      q: "Do you train groups?",
      a: "Yes. Arrange onsite delivery, a private online cohort or an Academy group licence with progress reporting. Onsite Awareness can use your risk assessments and site walk-rounds as case material.",
    },
    {
      q: "Does the course prepare us for certification?",
      a: "It builds the knowledge to implement and audit the system. As a certification body, TRAIBCERT teaches the standard rather than your specific documentation so certification decisions remain impartial.",
    },
    {
      q: "What do I need to study online?",
      a: "A computer or phone with a browser. Course access details are emailed after payment.",
    },
  ],
  "iso-27001": [
    {
      q: "Which level should I start with?",
      a: "Choose Awareness if you work inside or are helping build an ISMS, Internal Auditor if you will audit it, and Lead Auditor if you will lead audits after Awareness or Internal Auditor. Ask about an onsite Foundation session for a short briefing on information-security responsibilities.",
    },
    {
      q: "Is the course updated for ISO/IEC 27001:2022?",
      a: "The Academy courses are written to the 2022 edition, including the 93 Annex A controls and Amendment 1:2024. The page states the edition each course is delivered against.",
    },
    {
      q: "Do I need a technical IT background?",
      a: "No. The standard is a management-system standard and the courses explain Annex A at the level managers and auditors need. Technical specialists may find the risk-treatment and control-auditing modules useful.",
    },
    {
      q: "How long do I have to complete a self-paced course?",
      a: "Awareness and Internal Auditor include 180 days of access from the date access is granted.",
    },
    {
      q: "Do I get a certificate, and can I retake the assessment?",
      a: "A TRAIBCERT certificate of achievement is issued electronically within seven working days after you pass. You can retake the assessment within the course access period.",
    },
    {
      q: "Do you train groups?",
      a: "Yes. Arrange onsite delivery, a private online cohort or an Academy group licence with progress reporting for your training manager.",
    },
    {
      q: "Does the course prepare us for certification?",
      a: "It builds the knowledge to implement and audit the system. As a certification body, TRAIBCERT teaches the standard rather than your risk assessment or Statement of Applicability so certification decisions remain impartial.",
    },
    {
      q: "What do I need to study online?",
      a: "A computer or phone with a browser. Course access details are emailed after payment.",
    },
  ],
  "iso-22000": [
    {
      q: "Which level should I start with?",
      a: "Choose Awareness if you work inside or are helping build an FSMS, Internal Auditor if you will audit it, and Lead Auditor if you will lead audits after Awareness or Internal Auditor. Ask about an onsite Foundation session for a short whole-site hygiene and standard briefing.",
    },
    {
      q: "Is ISO 22000:2018 still the current edition?",
      a: "Yes. ISO 22000:2018 is the current edition and all courses on this page are delivered against it. If a revision is published, the page will state the edition each course is delivered against and an update module will be offered.",
    },
    {
      q: "Does the course cover HACCP?",
      a: "Yes. The Operation module covers hazard analysis, the hazard control plan with CCPs and OPRPs, validation, monitoring and verification. It is not a separate HACCP certificate course.",
    },
    {
      q: "How long do I have to complete a self-paced course?",
      a: "Awareness and Internal Auditor include 180 days of access from the date access is granted.",
    },
    {
      q: "Do I get a certificate, and can I retake the assessment?",
      a: "A TRAIBCERT certificate of achievement is issued electronically within seven working days after you pass. You can retake the assessment within the course access period.",
    },
    {
      q: "Do you train groups?",
      a: "Yes. Arrange onsite delivery, a private online cohort or an Academy group licence with progress reporting. Onsite sessions can be scheduled around production shifts.",
    },
    {
      q: "Does the course prepare us for certification?",
      a: "It builds the knowledge to implement and audit the system. As a certification body, TRAIBCERT teaches the standard rather than your hazard analysis or procedures so certification decisions remain impartial.",
    },
    {
      q: "What do I need to study online?",
      a: "A computer or phone with a browser. Course access details are emailed after payment.",
    },
  ],
  "iso-22301": [
    {
      q: "Which level should I start with?",
      a: "Choose Awareness if you work inside or are helping build a business continuity management system, Internal Auditor if you will audit it, and Lead Auditor if you will lead audits after Awareness or Internal Auditor.",
    },
    {
      q: "Is the course delivered against ISO 22301:2019?",
      a: "Yes. ISO 22301:2019 is the current edition and all three levels are titled and taught to it, with auditing modules referencing ISO 19011.",
    },
    {
      q: "How long do I have to complete a self-paced course?",
      a: "Awareness and Internal Auditor include 180 days of access. Awareness takes about 8 h 40 min and Internal Auditor about 16 h 40 min.",
    },
    {
      q: "Do I get a certificate, and can I retake the assessment?",
      a: "A TRAIBCERT certificate of achievement is issued electronically within seven working days after you pass. Lead Auditor delegates receive a Lead Auditor certificate. You can retake the final assessment within the access period.",
    },
    {
      q: "Do you train groups?",
      a: "Yes. Arrange onsite delivery, a private online cohort or an Academy group licence with progress reporting. Onsite delivery can use your business impact analysis and continuity plans as case material.",
    },
    {
      q: "Does the course prepare us for ISO 22301 certification?",
      a: "It builds the knowledge to implement, exercise and audit the system. As a certification body, TRAIBCERT teaches the standard rather than your specific documentation so certification decisions remain impartial.",
    },
    {
      q: "What do I need to study online?",
      a: "A computer or phone with a browser. Course access details are emailed after payment; the course is also available through the Academy web app.",
    },
  ],
  "iso-20000-1": [
    {
      q: "Which level should I start with?",
      a: "Choose Awareness if you work in service delivery or inside an SMS, Internal Auditor if you will audit it, and Lead Auditor if you will lead audits after Awareness or Internal Auditor.",
    },
    {
      q: "Is the course delivered against ISO/IEC 20000-1:2018?",
      a: "Yes. ISO/IEC 20000-1:2018 is the current edition and all three levels are titled and taught to it, with auditing modules referencing ISO 19011.",
    },
    {
      q: "Do I need ITIL knowledge first?",
      a: "No. The introduction explains how ITIL and other service frameworks relate to the standard. ITIL experience is helpful but not required.",
    },
    {
      q: "How long do I have to complete a self-paced course?",
      a: "Awareness and Internal Auditor include 180 days of access. Awareness takes about 8 hours and Internal Auditor about 16 hours.",
    },
    {
      q: "Do I get a certificate, and can I retake the assessment?",
      a: "A TRAIBCERT certificate of achievement is issued electronically within seven working days after you pass. Lead Auditor delegates receive a Lead Auditor certificate. You can retake the final assessment within the access period.",
    },
    {
      q: "Do you train groups?",
      a: "Yes. Arrange onsite delivery, a private online cohort or an Academy group licence with progress reporting. Onsite delivery can use your service catalogue and agreements as case material.",
    },
    {
      q: "Does the course prepare us for certification?",
      a: "It builds the knowledge to implement and audit the system. As a certification body, TRAIBCERT teaches the standard rather than your specific documentation so certification decisions remain impartial.",
    },
  ],
  "iso-31000": [
    {
      q: "Which level should I start with?",
      a: "Choose Awareness if you contribute to risk assessments or need to understand the guideline, Internal Auditor if you review how risk management is applied, and the Practitioner workshop if you design and run risk management. Practitioner follows Awareness or equivalent experience.",
    },
    {
      q: "Can an organisation be certified to ISO 31000?",
      a: "No. ISO 31000 is a guideline, not a requirements standard, so there is no certification. TRAIBCERT can assess alignment of a risk-management framework and issue a statement of conformity. This is why the course offers Practitioner rather than Lead Auditor training.",
    },
    {
      q: "Is the course delivered against ISO 31000:2018?",
      a: "Yes. ISO 31000:2018 is the current edition and all three levels are titled and taught to it. The Internal Auditor course references ISO 19011.",
    },
    {
      q: "How long do I have to complete a self-paced course?",
      a: "Awareness and Internal Auditor include 180 days of access. Awareness takes about 8 hours and Internal Auditor about 16 hours.",
    },
    {
      q: "Do I get a certificate, and can I retake the assessment?",
      a: "A TRAIBCERT certificate of achievement is issued electronically within seven working days after you pass. Practitioner delegates receive a Practitioner certificate. You can retake the final assessment within the access period.",
    },
    {
      q: "Do you train groups?",
      a: "Yes. Arrange onsite delivery, a private online cohort or an Academy group licence with progress reporting. The Practitioner workshop works best onsite using your risk register and criteria as case material.",
    },
    {
      q: "Will TRAIBCERT help us write our risk framework?",
      a: "No. TRAIBCERT teaches the guideline and techniques, not your specific documentation, preserving impartiality. The Practitioner workshop uses your material for practice; design decisions remain yours.",
    },
  ],
  "iso-50001": [
    {
      q: "Which level should I start with?",
      a: "Choose Awareness if you work inside or are helping build an EnMS, Internal Auditor if you will audit it, and Lead Auditor if you will lead audits after Awareness or Internal Auditor.",
    },
    {
      q: "Is the course delivered against ISO 50001:2018?",
      a: "Yes. ISO 50001:2018 is the current edition and all three levels are titled and taught to it, with auditing modules referencing ISO 19011.",
    },
    {
      q: "Do I need an engineering background?",
      a: "No. Awareness starts with energy fundamentals—forms, transformations and how energy use becomes a bill—before covering the standard. Engineers may build on existing operational knowledge.",
    },
    {
      q: "How long do I have to complete a self-paced course?",
      a: "Awareness and Internal Auditor include 180 days of access. Awareness takes about 8 hours and Internal Auditor about 16 hours.",
    },
    {
      q: "Do I get a certificate, and can I retake the assessment?",
      a: "A TRAIBCERT certificate of achievement is issued electronically within seven working days after you pass. Lead Auditor delegates receive a Lead Auditor certificate. You can retake the final assessment within the access period.",
    },
    {
      q: "Do you train groups?",
      a: "Yes. Arrange onsite delivery, a private online cohort or an Academy group licence with progress reporting. Onsite delivery can use your energy review and performance data as case material.",
    },
    {
      q: "Does the course prepare us for ISO 50001 certification?",
      a: "It builds the knowledge to implement and audit the system. As a certification body, TRAIBCERT teaches the standard rather than your specific documentation so certification decisions remain impartial.",
    },
  ],
  "iso-41001": [
    {
      q: "Which level should I start with?",
      a: "Choose Awareness if you work inside an FM system or manage a contract, Internal Auditor if you will audit it, and Lead Auditor if you will lead audits across sites or providers. Lead Auditor follows Awareness or Internal Auditor.",
    },
    {
      q: "Is the course delivered against the current edition?",
      a: "All levels are delivered against ISO 41001:2018 with Amendment 1:2024 and use ISO 19011:2026 for auditing. A second edition is in preparation; this page identifies the edition used for each course.",
    },
    {
      q: "I already hold ISO 9001 or ISO 45001 training. Do I need to start again?",
      a: "No. ISO 41001 shares the harmonised structure, so the clause logic is familiar. The course focuses on facility-management topics such as the demand organisation, service integration and sourcing.",
    },
    {
      q: "How long do I have to complete the self-paced course?",
      a: "The Internal Auditor Academy course includes 180 days of access; most learners finish within four weeks.",
    },
    {
      q: "Do I get a certificate, and can I retake the assessment?",
      a: "A TRAIBCERT certificate of achievement is issued electronically within seven working days after you pass. Lead Auditor delegates receive a Lead Auditor certificate. Self-paced learners can retake the assessment within the access period; tutor-led delegates who do not pass are offered one further attempt.",
    },
    {
      q: "Do you train groups?",
      a: "Yes. Arrange onsite delivery at your premises or a client site, a private online cohort for an FM provider or estates team, or an Academy group licence with progress reporting.",
    },
    {
      q: "Does the course prepare us for certification?",
      a: "It builds the knowledge to implement and audit the FM system. As a certification body, TRAIBCERT teaches the standard rather than your specific documentation so certification decisions remain impartial.",
    },
    {
      q: "What do I need to study online?",
      a: "A computer or phone with a browser. Course access details are emailed after payment.",
    },
  ],
  "iso-17025": [
    {
      q: "Which level should I start with?",
      a: "Choose Foundation to understand the standard or work alongside a laboratory, Awareness if you work inside the laboratory system or are preparing for accreditation, and Internal Auditor if you will audit the laboratory. Internal Auditor follows Awareness or equivalent laboratory experience.",
    },
    {
      q: "Is there a Lead Auditor course for ISO/IEC 17025?",
      a: "No. ISO/IEC 17025 is an accreditation standard for laboratories, assessed by accreditation bodies rather than certification bodies. The highest level here is Internal Auditor; people seeking management-system lead auditor training can take ISO 9001 Lead Auditor.",
    },
    {
      q: "Is the course delivered against the current edition?",
      a: "Yes. All levels are delivered against ISO/IEC 17025:2017, the current edition, and the auditing content uses ISO 19011:2026.",
    },
    {
      q: "How long do I have to complete a self-paced course?",
      a: "Foundation and Awareness include 180 days of access. Awareness takes about 16 hours; most learners finish within four weeks.",
    },
    {
      q: "Do I get a certificate?",
      a: "A TRAIBCERT certificate of achievement is issued electronically within seven working days after you pass. It records training, is not an accreditation and does not confer auditor registration.",
    },
    {
      q: "Can I retake the assessment?",
      a: "Self-paced learners can retake the assessment within the access period. Tutor-led delegates who do not pass are offered one further attempt.",
    },
    {
      q: "Do you train groups or whole laboratories?",
      a: "Yes. Arrange onsite training at your laboratory, a private online cohort or an Academy group licence with progress reporting for your quality manager.",
    },
    {
      q: "Does the course prepare our laboratory for accreditation?",
      a: "It builds staff knowledge to implement and audit the system and understand what an accreditation assessment examines. TRAIBCERT teaches the standard, not your laboratory documentation, methods or uncertainty budgets; preparing those remains the laboratory's responsibility.",
    },
    {
      q: "What do I need to study online?",
      a: "A computer or phone with a browser. Course access details are emailed after payment.",
    },
  ],
  "iso-13528": courseSpecificFaqs["iso-13528"] ?? [],
};

const trainingFaqs = (
  slug: string,
  standard: string,
  levels: string[],
  academyCourses?: AcademyCourse[],
) => {
  const documentFaqs = documentCourseFaqs[slug];
  if (documentFaqs) return documentFaqs;

  const levelGuidance: Record<string, string> = {
    Foundation: "for an introduction to the standard",
    Awareness: "if you work within the system",
    "Internal Auditor": "if you will review or audit it",
    "Lead Auditor": "if you are experienced and will lead audit teams",
    Practitioner: "if you will design or run risk management in your organisation",
  };

  return [
    {
      q: "Which training level should I choose?",
      a: `Available levels for ${standard}: ${levels
        .map((level) => `${level} ${levelGuidance[level] ?? ""}`)
        .join("; ")}.`,
    },
    {
      q: "How can I take the training?",
      a: "Available delivery modes are shown on this page. Depending on the course, you can study online at your own pace, join a live tutor-led class or request onsite training for your team.",
    },
    ...(academyCourses?.length
      ? [
          {
            q: "Which self-paced courses are listed on the Academy?",
            a: `${academyCourses
              .map(
                (academyCourse) =>
                  `${academyCourse.level}: $${academyCourse.price} USD as listed on the Academy, ${academyCourse.duration}, ${academyCourse.access} access`,
              )
              .join("; ")}. Confirm the currency to be used on the new site before purchase.`,
          },
          {
            q: "What assessment is included?",
            a: academyCourses
              .map((academyCourse) => `${academyCourse.level}: ${academyCourse.assessment}`)
              .join("; "),
          },
        ]
      : []),
    {
      q: "Is there an assessment and certificate?",
      a: "Course assessments and certificate arrangements depend on the level and delivery mode. Ask the training team for the details for your chosen course before booking.",
    },
    {
      q: "Does completing the course certify our organisation?",
      a: "No. Training builds knowledge and skills but does not award management-system certification or laboratory accreditation. TRAIBCERT keeps training general so certification decisions remain impartial.",
    },
    {
      q: "Can you train a group at our premises?",
      a: "Yes. Ask about onsite delivery or a private online cohort. Include your chosen level, number of delegates, preferred dates and location so the team can confirm availability and fees.",
    },
    ...(courseSpecificFaqs[slug] ?? []),
  ];
};

const courseLevelTitles: Record<string, Partial<Record<CourseLevel, string>>> = {
  "iso-9001": {
    Foundation: "Foundation — ISO 9001:2026 Foundation Training",
    Awareness: "Awareness — ISO 9001:2026 Awareness Training",
    "Internal Auditor": "Internal Auditor — ISO 9001:2026 Internal Auditor Training",
    "Lead Auditor": "Lead Auditor — ISO 9001:2026 Lead Auditor Training",
  },
  "iso-14001": {
    Awareness: "Awareness — ISO 14001:2026 Awareness Training",
    "Internal Auditor": "Internal Auditor — ISO 14001:2026 Internal Auditor Training",
    "Lead Auditor": "Lead Auditor — ISO 14001:2026 Lead Auditor Training",
  },
  "iso-45001": {
    Foundation: "Foundation — ISO 45001:2018 Foundation Course",
    Awareness: "Awareness — ISO 45001:2018 Awareness Course",
    "Internal Auditor": "Internal Auditor — ISO 45001:2018 Internal Auditor Course",
    "Lead Auditor": "Lead Auditor — ISO 45001:2018 Lead Auditor Training",
  },
  "iso-27001": {
    Awareness: "Awareness — ISO/IEC 27001:2022 Awareness Course",
    "Internal Auditor": "Internal Auditor — ISO/IEC 27001:2022 Internal Auditor Course",
    "Lead Auditor": "Lead Auditor — ISO/IEC 27001:2022 Lead Auditor Training",
  },
  "iso-22000": {
    Awareness: "Awareness — ISO 22000:2018 Awareness Course",
    "Internal Auditor": "Internal Auditor — ISO 22000:2018 Internal Auditor Course",
    "Lead Auditor": "Lead Auditor — ISO 22000:2018 Lead Auditor Training",
  },
  "iso-22301": {
    Awareness: "Awareness — ISO 22301:2019 Awareness Training",
    "Internal Auditor": "Internal Auditor — ISO 22301:2019 Internal Auditor Course",
    "Lead Auditor": "Lead Auditor — ISO 22301:2019 Lead Auditor Training",
  },
  "iso-20000-1": {
    Awareness: "Awareness — ISO/IEC 20000-1:2018 Awareness Training",
    "Internal Auditor": "Internal Auditor — ISO/IEC 20000-1:2018 Internal Auditor Training",
    "Lead Auditor": "Lead Auditor — ISO/IEC 20000-1:2018 Lead Auditor Training",
  },
  "iso-31000": {
    Awareness: "Awareness — ISO 31000:2018 Awareness Training",
    "Internal Auditor": "Internal Auditor — ISO 31000:2018 Internal Auditor Training",
    Practitioner: "Practitioner — ISO 31000:2018 Practitioner Workshop",
  },
  "iso-50001": {
    Awareness: "Awareness — ISO 50001:2018 Awareness Training",
    "Internal Auditor": "Internal Auditor — ISO 50001:2018 Internal Auditor Course",
    "Lead Auditor": "Lead Auditor — ISO 50001:2018 Lead Auditor Training",
  },
  "iso-41001": {
    Awareness: "Awareness — ISO 41001:2018 Awareness Training",
    "Internal Auditor": "Internal Auditor — ISO 41001:2018 Internal Auditor Training",
    "Lead Auditor": "Lead Auditor — ISO 41001:2018 Lead Auditor Training",
  },
  "iso-17025": {
    Foundation: "Foundation — ISO/IEC 17025:2017 Foundation Training",
    Awareness: "Awareness — ISO/IEC 17025:2017 Awareness Training",
    "Internal Auditor": "Internal Auditor — ISO/IEC 17025:2017 Internal Auditor Training",
  },
  "iso-17043": {
    Foundation: "Foundation — ISO/IEC 17043:2023 Foundation Training",
    Awareness: "Awareness — ISO/IEC 17043:2023 Awareness Training",
  },
  "iso-13528": {
    Foundation: "Foundation — ISO 13528:2022 Foundation Training",
    Awareness: "Awareness — ISO 13528:2022 Awareness Training",
  },
};

const trainingSeo: Record<string, { title: string; description: string; eyebrow: string }> = {
  "iso-9001": {
    title: "ISO 9001:2026 Training | Foundation to Lead Auditor | TRAIBCERT",
    description:
      "ISO 9001:2026 training at four levels â€” Foundation, Awareness, Internal Auditor and Lead Auditor. Learn 24Ã—7 self-paced on TRAIBCERT Academy, live online with a tutor, or onsite at your premises.",
    eyebrow: "QUALITY MANAGEMENT TRAINING Â· ISO 9001:2026",
  },
  "iso-14001": {
    title: "ISO 14001:2026 Training Courses | TRAIBCERT",
    description:
      "ISO 14001:2026 training â€” Awareness, Internal Auditor and Lead Auditor. Study 24Ã—7 on TRAIBCERT Academy, live online with a tutor, or onsite.",
    eyebrow: "ENVIRONMENTAL MANAGEMENT TRAINING Â· ISO 14001:2026",
  },
  "iso-45001": {
    title: "ISO 45001:2018 Training Courses | TRAIBCERT",
    description:
      "ISO 45001:2018 training â€” Foundation, Awareness, Internal Auditor and Lead Auditor. Study 24Ã—7 on TRAIBCERT Academy, live online with a tutor, or onsite.",
    eyebrow: "OCCUPATIONAL HEALTH AND SAFETY TRAINING Â· ISO 45001:2018",
  },
  "iso-27001": {
    title: "ISO/IEC 27001:2022 Training Courses | TRAIBCERT",
    description:
      "ISO/IEC 27001:2022 training â€” Awareness, Internal Auditor and Lead Auditor. Study 24Ã—7 on TRAIBCERT Academy, live online with a tutor, or onsite.",
    eyebrow: "INFORMATION SECURITY TRAINING Â· ISO/IEC 27001:2022",
  },
  "iso-22000": {
    title: "ISO 22000:2018 Training Courses | TRAIBCERT",
    description:
      "ISO 22000:2018 food safety training â€” Awareness, Internal Auditor and Lead Auditor. Study 24Ã—7 on TRAIBCERT Academy, live online with a tutor, or onsite.",
    eyebrow: "FOOD SAFETY MANAGEMENT TRAINING Â· ISO 22000:2018",
  },
  "iso-22301": {
    title: "ISO 22301:2019 Training | Awareness to Lead Auditor",
    description:
      "ISO 22301:2019 business continuity training â€” Awareness, Internal Auditor and Lead Auditor. Self-paced on TRAIBCERT Academy, live online or onsite.",
    eyebrow: "BUSINESS CONTINUITY MANAGEMENT TRAINING Â· ISO 22301:2019",
  },
  "iso-20000-1": {
    title: "ISO/IEC 20000-1:2018 Training Courses | TRAIBCERT",
    description:
      "ISO/IEC 20000-1:2018 IT service management training â€” Awareness, Internal Auditor and Lead Auditor. Self-paced on TRAIBCERT Academy, online or onsite.",
    eyebrow: "IT SERVICE MANAGEMENT TRAINING Â· ISO/IEC 20000-1:2018",
  },
  "iso-31000": {
    title: "ISO 31000:2018 Risk Management Training | TRAIBCERT",
    description:
      "ISO 31000:2018 risk management training â€” Awareness, Internal Auditor and a Practitioner workshop. Self-paced on TRAIBCERT Academy, online or onsite.",
    eyebrow: "RISK MANAGEMENT TRAINING Â· ISO 31000:2018",
  },
  "iso-50001": {
    title: "ISO 50001:2018 Training | Awareness to Lead Auditor",
    description:
      "ISO 50001:2018 energy management training â€” Awareness, Internal Auditor and Lead Auditor. Self-paced on TRAIBCERT Academy, live online or onsite.",
    eyebrow: "ENERGY MANAGEMENT TRAINING Â· ISO 50001:2018",
  },
  "iso-41001": {
    title: "ISO 41001 Training | Awareness to Lead Auditor | TRAIBCERT",
    description:
      "ISO 41001:2018 facility management training: Awareness, Internal Auditor and Lead Auditor. Self-paced on TRAIBCERT Academy, live online or onsite.",
    eyebrow: "FACILITY MANAGEMENT TRAINING Â· ISO 41001:2018",
  },
  "iso-17025": {
    title: "ISO/IEC 17025 Training | Laboratory Competence | TRAIBCERT",
    description:
      "ISO/IEC 17025:2017 laboratory training: Foundation, Awareness and Internal Auditor. Self-paced on TRAIBCERT Academy, live online or onsite.",
    eyebrow: "LABORATORY COMPETENCE TRAINING Â· ISO/IEC 17025:2017",
  },
  "iso-17043": {
    title: "ISO/IEC 17043 Training | Proficiency Testing | TRAIBCERT",
    description:
      "ISO/IEC 17043:2023 training for proficiency testing providers: Foundation and Awareness. Self-paced on TRAIBCERT Academy, live online or onsite.",
    eyebrow: "PROFICIENCY TESTING TRAINING Â· ISO/IEC 17043:2023",
  },
  "iso-13528": {
    title: "ISO 13528 Training | PT Statistics | TRAIBCERT",
    description:
      "ISO 13528:2022 training on the statistics of proficiency testing: Foundation and Awareness. Self-paced on TRAIBCERT Academy, live online or onsite.",
    eyebrow: "PROFICIENCY TESTING STATISTICS TRAINING Â· ISO 13528:2022",
  },
};

const editionAlignment: Record<string, string> = {
  "iso-9001":
    "This page follows the supplied ISO 9001:2026 brief. The source pack identifies the Academy courses as ISO 9001:2015; verify course titles, module and assessment updates, Transition course availability and pricing before booking.",
  "iso-14001":
    "This page follows the supplied ISO 14001:2026 brief. The source pack identifies the Academy Awareness and Internal Auditor listings as ISO 14001:2015; verify their titles, modules and assessments have been updated before presenting them as training against the 2026 edition.",
  "iso-45001":
    "ISO 45001:2018 is the current edition. The page and Academy listings use the 2018 edition; course content is reviewed against the standard and the current ISO 19011 auditing guidance.",
  "iso-27001":
    "The Academy courses are based on ISO/IEC 27001:2022, including the restructured 93 Annex A controls in organisational, people, physical and technological themes. The 2024 Amendment 1 climate-change consideration is relevant to context and interested parties; confirm the latest update status of Academy course materials before booking.",
  "iso-22000":
    "The Academy listings and this page use ISO 22000:2018. The course outline includes the food-chain approach, prerequisite programmes, hazard analysis, hazard control plans, monitoring and verification; confirm current course materials with the training team.",
  "iso-22301":
    "The Academy listings and this page use ISO 22301:2019. Course material covers business-impact analysis, risk assessment, continuity strategies, plans, response and exercise programmes.",
  "iso-20000-1":
    "The Academy listings and this page use ISO/IEC 20000-1:2018. The operational outline covers service portfolio, relationship and agreement, supply and demand, service design and transition, resolution and fulfilment, service assurance and knowledge management.",
  "iso-31000":
    "ISO 31000:2018 is guidance, not a certifiable requirements standard. The course covers its principles, framework and process; it offers Awareness, Internal Auditor and Practitioner training, not Lead Auditor training.",
  "iso-50001":
    "The Academy listings and this page use ISO 50001:2018. The outline covers the energy review, baseline, energy-performance indicators, data collection, operational controls, design, procurement and performance evaluation.",
  "iso-41001":
    "This training page uses ISO 41001:2018 and includes Amendment 1:2024 in its course content. The Academy Internal Auditor listing does not currently mention the amendment.",
  "iso-17025":
    "ISO/IEC 17025:2017 is the current edition and is an accreditation standard for testing and calibration laboratories. The Academy Foundation course URL contains â€œAwareness-Training-Course-Copyâ€ although its title and course content identify it as Foundation; Internal Auditor training is tutor-led/onsite only.",
  "iso-17043":
    "ISO/IEC 17043:2023 replaced the 2010 edition and reorganised requirements around general, structural, resource, process and management-system requirements. The Academy courses are still titled ISO 17043:2010 and follow the earlier clause numbering; the outlines above map that material to the 2023 edition. Tutor-led courses are delivered against ISO/IEC 17043:2023.",
  "iso-13528":
    "This page covers ISO 13528:2022. The Academy listings still carry ISO 13528:2015 in their titles and are being updated; tutor-led classes are delivered against the 2022 edition. Both self-paced levels include 180-day access and a 20-minute final assessment. ISO 13528 is statistical guidance and has no auditor or certification level.",
};

export const Route = createFileRoute("/training/$slug")({
  loader: ({ params }) => {
    const course = coursesBySlug[params.slug];
    if (!course) throw notFound();
    return { course };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Unavailable | TRAIBCERT" }, { name: "robots", content: "noindex" }],
      };
    }
    const { course } = loaderData;
    const seo = trainingSeo[course.slug];
    const academyCourses = course.academyCourses ?? academyCoursesBySlug[course.slug];
    const faqs =
      course.slug === "iso-17043"
        ? iso17043TrainingFaqs
        : course.slug === "iso-9001"
          ? iso9001TrainingFaqs
          : trainingFaqs(
              course.slug,
              course.code,
              course.modules.map((module) => module.level),
              academyCourses,
            );
    const path = `/training/${params.slug}`;
    const firstLevel = course.modules[0]?.level;
    const lastLevel = course.modules[course.modules.length - 1]?.level;
    const levelRange =
      firstLevel && lastLevel && firstLevel !== lastLevel
        ? `${firstLevel} to ${lastLevel}`
        : firstLevel;
    const meta = pageMeta({
      title:
        seo?.title ?? `${course.code} Training${levelRange ? ` | ${levelRange}` : ""} | TRAIBCERT`,
      description: seo?.description ?? course.summary.slice(0, 155),
      path,
      type: "article",
    });
    return {
      ...meta,
      scripts: [
        breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Training", href: "/training" },
          { name: course.code, href: path },
        ]),
        faqJsonLd(faqs),
      ],
    };
  },
  component: CoursePage,
});

function CoursePage() {
  const { course } = Route.useLoaderData();
  const academyCourses = course.academyCourses ?? academyCoursesBySlug[course.slug];
  const modulesForDelivery = (deliveryMode: string) =>
    course.modules.filter((module) =>
      (module.deliveryModes ?? course.delivery).includes(deliveryMode),
    );
  const tutorLedModules = modulesForDelivery("Live tutor-led online");
  const onsiteModules = modulesForDelivery("Onsite");
  const standard = standardsBySlug[course.slug];
  const related = courses.filter(
    (item) => item.category === course.category && item.slug !== course.slug,
  );
  const faqs =
    course.slug === "iso-17043"
      ? iso17043TrainingFaqs
      : course.slug === "iso-9001"
        ? iso9001TrainingFaqs
        : trainingFaqs(
            course.slug,
            course.code,
            course.modules.map((module) => module.level),
            academyCourses,
          );

  return (
    <>
      <PageHero
        eyebrow={trainingSeo[course.slug]?.eyebrow ?? course.discipline}
        title={course.title}
        intro={course.summary}
        enquiryContext="training"
        crumbs={[
          { name: "Training", href: "/training" },
          { name: course.code, href: `/training/${course.slug}` },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <AppLink
            href="#choose-level"
            className="inline-flex items-center gap-2 rounded-md bg-honey px-5 py-3 text-sm font-bold text-indigo-brand transition-colors hover:bg-honey-hover"
          >
            Choose your level <ArrowRight className="size-4" aria-hidden="true" />
          </AppLink>
          <AppLink
            href="#request-training"
            className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            Ask about training
          </AppLink>
          {standard ? (
            <AppLink
              href={`/certification/${standard.slug}`}
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              {standard.code} certification
            </AppLink>
          ) : null}
        </div>
      </PageHero>

      <section id="choose-level" className="scroll-mt-24 py-14 md:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Choose your level"
            title={`Choose your ${course.code} training level`}
            intro="Select the course that matches your role. Each option links directly to its course details below."
          />
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {course.modules.map((module) => (
              <AppLink
                key={module.level}
                href={`#level-${module.level.toLowerCase().replaceAll(" ", "-")}`}
                className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-indigo-soft/40 hover:shadow-[0_18px_40px_-24px_rgba(26,24,84,0.35)]"
              >
                <h3 className="text-sm font-bold text-indigo-brand">
                  {courseLevelTitles[course.slug]?.[module.level] ?? module.level}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {module.audience}
                </p>
                <span className="mt-4 text-sm font-semibold text-indigo-brand">
                  {module.duration}
                  <ArrowRight className="ml-1 inline size-4" aria-hidden="true" />
                </span>
              </AppLink>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-muted/40 py-14 md:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Learning options"
            title="Three ways to learn"
            intro="Choose self-paced Academy study, a live tutor-led class or onsite training for your team. Availability varies by level."
          />
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            <article
              id="self-paced"
              className="scroll-mt-24 rounded-xl border border-border bg-card p-6"
            >
              <h3 className="text-base font-bold text-indigo-brand">24/7 self-paced — Academy</h3>
              {academyCourses?.length ? (
                <ul className="mt-4 space-y-3">
                  {academyCourses.map((academyCourse) => (
                    <li key={academyCourse.level} className="text-sm leading-relaxed">
                      <AppLink
                        href={`#level-${academyCourse.level.toLowerCase().replaceAll(" ", "-")}`}
                        className="font-semibold text-indigo-brand hover:underline"
                      >
                        {academyCourse.level}
                      </AppLink>
                      <span className="text-muted-foreground">
                        {" "}
                        — ${academyCourse.price} USD as listed · {academyCourse.duration} ·{" "}
                        {academyCourse.access} access
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm text-muted-foreground">
                  A self-paced Academy course is not listed for this standard.
                </p>
              )}
            </article>
            <article
              id="tutor-led"
              className="scroll-mt-24 rounded-xl border border-border bg-card p-6"
            >
              <h3 className="text-base font-bold text-indigo-brand">Live tutor-led online</h3>
              {tutorLedModules.length ? (
                <>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Available for {tutorLedModules.map((module) => module.level).join(", ")}.
                    Contact us for dates and fees.
                  </p>
                  <AppLink
                    href="#request-training"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-indigo-brand hover:underline"
                  >
                    Ask about tutor-led dates <ArrowRight className="size-4" aria-hidden="true" />
                  </AppLink>
                </>
              ) : (
                <p className="mt-3 text-sm text-muted-foreground">
                  Tutor-led delivery is not listed for this standard.
                </p>
              )}
            </article>
            <article
              id="onsite"
              className="scroll-mt-24 rounded-xl border border-border bg-card p-6"
            >
              <h3 className="text-base font-bold text-indigo-brand">Onsite at your premises</h3>
              {onsiteModules.length ? (
                <>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Available for {onsiteModules.map((module) => module.level).join(", ")}. Group
                    training is arranged by request.
                  </p>
                  <AppLink
                    href="#request-training"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-indigo-brand hover:underline"
                  >
                    Request onsite training <ArrowRight className="size-4" aria-hidden="true" />
                  </AppLink>
                </>
              ) : (
                <p className="mt-3 text-sm text-muted-foreground">
                  Onsite delivery is not listed for this standard.
                </p>
              )}
            </article>
          </div>
          <img
            src={trainingImage}
            width={1400}
            height={900}
            loading="lazy"
            alt="Instructor leading a professional ISO training workshop"
            className="mt-8 h-64 w-full rounded-xl object-cover md:h-80"
          />
        </div>
      </section>

      <section id="enrol" className="scroll-mt-24 py-14 md:py-16">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
            <div>
              <SectionHeading
                eyebrow="Enrolment"
                title="Enrol and pay securely online"
                intro="Reserve your place online or contact our team if you prefer an invoice or are booking for a group."
              />
              <ul className="mt-7 space-y-3">
                {[
                  "Instant confirmation and a receipt reference by email",
                  "Secure payment processed by PayPal",
                  "Public dates, private in-house cohorts and self-paced study",
                  "Group bookings and invoicing available on request",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-indigo-brand"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {academyCourses?.length ? (
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  Self-paced Academy options:{" "}
                  {academyCourses.map((item) => `${item.level} ($${item.price} USD)`).join(", ")}.
                  Access periods are time-limited; confirm currency and current availability before
                  booking.
                </p>
              ) : null}
            </div>
            <CourseCheckout course={course} />
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-14 md:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Course levels"
            title={`${course.code} training modules`}
            intro={editionAlignment[course.slug] ?? ""}
          />
          <div className="mt-9 space-y-6">
            {course.modules.map((module) => {
              const academyCourse = academyCourses?.find((item) => item.level === module.level);
              return (
                <article
                  id={`level-${module.level.toLowerCase().replaceAll(" ", "-")}`}
                  key={module.level}
                  className="scroll-mt-24 rounded-lg border bg-card p-6 md:p-8"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="text-lg font-bold">
                      {courseLevelTitles[course.slug]?.[module.level] ?? module.level}
                    </h3>
                    <span className="text-sm font-semibold text-muted-foreground">
                      {module.duration}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {module.audience}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Delivery:</span>{" "}
                    {(module.deliveryModes ?? course.delivery).join(" · ")}
                  </p>
                  {academyCourse ? (
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-4 rounded-lg bg-muted/40 p-4">
                      <p className="text-sm font-semibold text-indigo-brand">
                        Self-paced Academy: ${academyCourse.price} USD as listed on TRAIBCERT
                        Academy · {academyCourse.access} access · {academyCourse.assessment}
                      </p>
                      <a
                        href={`${site.academyUrl}${academyCourse.academyPath}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-2 rounded-md bg-honey px-4 py-2.5 text-sm font-bold text-indigo-brand transition-colors hover:bg-honey-hover"
                      >
                        Buy on Academy
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </a>
                    </div>
                  ) : null}
                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="text-xs font-bold tracking-[0.14em] uppercase">
                        Learning objectives
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {module.objectives.map((item) => (
                          <li key={item} className="flex gap-2 text-sm">
                            <Check
                              className="mt-0.5 size-4 shrink-0 text-indigo-brand"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold tracking-[0.14em] uppercase">
                        Course content
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {module.content.map((item) => (
                          <li key={item} className="flex gap-2 text-sm">
                            <Check
                              className="mt-0.5 size-4 shrink-0 text-indigo-brand"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="compare" className="scroll-mt-24 bg-muted/40 py-14 md:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Compare levels"
            title={`Compare ${course.code} training levels`}
            intro="Compare the available course duration, delivery options and Academy listing before choosing."
          />
          <div className="mt-8 grid gap-4 md:hidden">
            {course.modules.map((module) => {
              const academyCourse = academyCourses?.find((item) => item.level === module.level);
              return (
                <article key={module.level} className="rounded-lg border bg-card p-5">
                  <h3 className="font-bold text-indigo-brand">
                    {courseLevelTitles[course.slug]?.[module.level] ?? module.level}
                  </h3>
                  <dl className="mt-3 space-y-2 text-sm">
                    <div>
                      <dt className="font-semibold">Duration</dt>
                      <dd className="text-muted-foreground">{module.duration}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Delivery</dt>
                      <dd className="text-muted-foreground">
                        {(module.deliveryModes ?? course.delivery).join(" · ")}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Academy</dt>
                      <dd className="text-muted-foreground">
                        {academyCourse
                          ? `$${academyCourse.price} USD · ${academyCourse.access} access`
                          : "No self-paced Academy listing"}
                      </dd>
                    </div>
                  </dl>
                </article>
              );
            })}
          </div>
          <div className="mt-8 hidden overflow-x-auto rounded-lg border bg-card md:block">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted/60">
                <tr>
                  <th scope="col" className="px-5 py-3 font-semibold">
                    Level
                  </th>
                  <th scope="col" className="px-5 py-3 font-semibold">
                    Duration
                  </th>
                  <th scope="col" className="px-5 py-3 font-semibold">
                    Delivery
                  </th>
                  <th scope="col" className="px-5 py-3 font-semibold">
                    Academy listing
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {course.modules.map((module) => {
                  const academyCourse = academyCourses?.find((item) => item.level === module.level);
                  return (
                    <tr key={module.level}>
                      <th scope="row" className="px-5 py-4 font-semibold text-indigo-brand">
                        {courseLevelTitles[course.slug]?.[module.level] ?? module.level}
                      </th>
                      <td className="px-5 py-4">{module.duration}</td>
                      <td className="px-5 py-4">
                        {(module.deliveryModes ?? course.delivery).join(" · ")}
                      </td>
                      <td className="px-5 py-4">
                        {academyCourse
                          ? `$${academyCourse.price} USD · ${academyCourse.access} access`
                          : "Not listed"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {editionAlignment[course.slug] ? (
        <section id="edition" className="scroll-mt-24 py-14 md:py-16">
          <div className="container-page">
            <SectionHeading
              eyebrow={`Edition note · ${course.code}`}
              title="Edition and course-content alignment"
              intro={editionAlignment[course.slug] ?? ""}
            />
          </div>
        </section>
      ) : null}

      <section id="request-training" className="scroll-mt-24 bg-muted/40 py-14 md:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Group and tutor-led training"
              title={`Request ${course.code} training`}
              intro="Tell us which level you need, your group size and preferred dates. The training team will respond within two working days."
            />
          </div>
          <div className="rounded-xl border border-border bg-card p-6 md:p-8">
            <EnquiryForm
              defaultService="Training"
              defaultStandard={`${course.code} Training`}
              defaultMessage={`I am enquiring about ${course.code} training. Please advise on the available levels, dates and fees for my team.`}
            />
          </div>
        </div>
      </section>

      <section id="tutors" className="scroll-mt-24 py-14 md:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Meet the tutors"
            title="Learn from experienced auditors and assessors"
            intro={
              course.category === "Laboratory"
                ? "Courses are written and delivered by practising laboratory assessors and trainers with international experience in laboratory competence, proficiency testing and statistics."
                : "Courses are taught by practising auditors and trainers, with learning aligned to the editions and audit practices identified for each standard."
            }
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Practical expertise",
                text: "Learn from tutors who bring audit and assessment experience into the course.",
              },
              {
                title: "Edition-aware content",
                text: `Course materials identify the applicable edition of ${course.code} and note where Academy materials are still being updated.`,
              },
              {
                title: "Assessment and achievement",
                text: "Complete the course assessment and receive a TRAIBCERT certificate of achievement on passing.",
              },
              {
                title: "Flexible delivery",
                text: "Study on the Academy where listed, join a live online class or request onsite training for your team.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-lg border border-border bg-card p-5">
                <h3 className="text-sm font-bold text-indigo-brand">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="py-14 md:py-16">
          <div className="container-page">
            <SectionHeading eyebrow="Related training" title="Other courses in this area" />
            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.slice(0, 3).map((item) => (
                <CourseCard key={item.slug} course={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-muted/40 py-14 md:py-16">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="FAQs" title="Training questions, answered" />
          <div className="mt-6">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to book ${course.code} training?`}
        body="Tell us the standard, level and number of delegates and we will confirm dates and fees."
      />
    </>
  );
}
