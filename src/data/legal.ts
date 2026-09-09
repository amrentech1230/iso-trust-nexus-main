export type LegalPage = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
};

const contactNote =
  "Questions about this policy can be sent to info@traibcert.org.uk or posted to TRAIBCERT LIMITED, Suit 7, 2nd Floor, The Atrium, 31 Church Road, Ashford, Middlesex, TW15 2UD, United Kingdom.";

export const legalPages: LegalPage[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    description:
      "How TRAIBCERT collects, uses, shares and protects personal data across certification, training and inspection services.",
    intro:
      "This policy explains how TRAIBCERT LIMITED handles personal data when you enquire about our services, attend training, or take part in certification and inspection activities.",
    sections: [
      {
        heading: "Data we collect",
        body: [
          "Contact and organisation details you provide through enquiry, quotation and training registration forms.",
          "Information needed to plan and record audits, inspections and training, including names and roles of participants.",
          "Technical data such as IP address, device and browsing information collected through our website and analytics.",
        ],
      },
      {
        heading: "How we use personal data",
        body: [
          "To respond to enquiries, prepare quotations and deliver the services you request.",
          "To plan, conduct and record certification, inspection and training activities, and to maintain certification records.",
          "To meet legal, accreditation and contractual obligations, and to improve our services and website.",
        ],
      },
      {
        heading: "Lawful basis",
        body: [
          "We rely on contract performance for delivering services, legitimate interests for business communications and service improvement, consent where required for marketing, and legal obligation where retention or disclosure is required.",
        ],
      },
      {
        heading: "Sharing and retention",
        body: [
          "Personal data may be shared with accreditation bodies, scheme owners and subcontracted auditors where necessary, subject to confidentiality obligations.",
          "We retain certification, audit and training records for the periods required by accreditation and scheme rules, and other data no longer than necessary.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "You have rights of access, rectification, erasure, restriction, objection and portability, and the right to withdraw consent where consent is the lawful basis.",
          contactNote,
        ],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms & Conditions",
    description:
      "The terms governing use of the TRAIBCERT website and the provision of certification, training and inspection services.",
    intro:
      "These terms apply to your use of this website and, together with our service agreements, to the certification, training and inspection services we provide.",
    sections: [
      {
        heading: "Use of this website",
        body: [
          "Website content is provided for general information. It does not constitute professional advice and may change without notice.",
          "You may not misuse the website, attempt unauthorised access, or reproduce content without permission.",
        ],
      },
      {
        heading: "Services and quotations",
        body: [
          "Quotations are based on the information supplied at the time of enquiry, including employee numbers, sites and scope. Changes to that information may change audit effort and fees.",
          "Certification is granted only where the applicable requirements are met, and remains subject to surveillance and scheme rules.",
        ],
      },
      {
        heading: "Client obligations",
        body: [
          "Clients agree to provide accurate information, access to sites, records and personnel, and to inform us of changes affecting certification.",
          "Clients must use certification marks and statements only in the manner permitted by the relevant scheme.",
        ],
      },
      {
        heading: "Liability",
        body: [
          "Nothing in these terms excludes liability where it cannot lawfully be excluded. Otherwise, our liability is limited as set out in the applicable service agreement.",
          contactNote,
        ],
      },
    ],
  },
  {
    slug: "confidentiality",
    title: "Confidentiality Policy",
    description:
      "How TRAIBCERT protects client information obtained during certification, inspection and training activities.",
    intro:
      "TRAIBCERT treats all information obtained during certification, inspection and training activity as confidential, except where disclosure is required by law, accreditation or scheme rules.",
    sections: [
      {
        heading: "Our commitment",
        body: [
          "Information about clients, their systems, processes and records is accessible only to personnel who need it to perform their duties.",
          "All personnel, including subcontracted auditors and technical experts, are bound by written confidentiality undertakings.",
        ],
      },
      {
        heading: "Permitted disclosure",
        body: [
          "Information may be disclosed to accreditation bodies and scheme owners for the purpose of assessment and oversight, subject to their own confidentiality obligations.",
          "Where disclosure is required by law or regulation, the client will be informed unless prohibited from doing so.",
        ],
      },
      {
        heading: "Information security",
        body: [
          "Client records are stored with access control, backup and retention arrangements appropriate to their sensitivity.",
          contactNote,
        ],
      },
    ],
  },
  {
    slug: "impartiality",
    title: "Impartiality Policy",
    description:
      "How TRAIBCERT identifies, evaluates and manages threats to impartiality in certification activities.",
    intro:
      "Impartiality is fundamental to the value of certification. TRAIBCERT manages conflicts of interest so that certification decisions are made objectively and are free from commercial or other pressure.",
    sections: [
      {
        heading: "Principles",
        body: [
          "Certification decisions are based only on objective evidence of conformity.",
          "We do not provide management system consultancy or internal auditing to organisations we certify.",
        ],
      },
      {
        heading: "Managing threats",
        body: [
          "Relationships that could threaten impartiality are identified, recorded and evaluated before work is accepted.",
          "Personnel declare relationships that may create conflict, and are not assigned where a conflict exists.",
          "Audit teams are rotated in line with scheme requirements to avoid familiarity threats.",
        ],
      },
      {
        heading: "Oversight",
        body: [
          "Impartiality is reviewed through management review and, where required, an impartiality committee or oversight arrangement.",
          contactNote,
        ],
      },
    ],
  },
  {
    slug: "refund",
    title: "Refund & Cancellation Policy",
    description:
      "Cancellation, postponement and refund terms for TRAIBCERT certification services and training courses.",
    intro:
      "This policy sets out how cancellations, postponements and refunds are handled for certification activities and training courses.",
    sections: [
      {
        heading: "Training courses",
        body: [
          "Cancellation requests must be made in writing. The applicable charge depends on how far in advance of the course start date the request is received.",
          "Delegate substitutions are accepted before the course start date at no additional charge.",
          "Where TRAIBCERT cancels or reschedules a course, delegates may transfer to another date or receive a full refund of course fees paid.",
        ],
      },
      {
        heading: "Certification and inspection activities",
        body: [
          "Audits and inspections cancelled or postponed at short notice may incur charges reflecting committed auditor time and non-recoverable travel costs.",
          "Fees for work already performed, including planning and reporting, are not refundable.",
        ],
      },
      {
        heading: "Refund processing",
        body: [
          "Approved refunds are issued to the original payment method within a reasonable period of approval.",
          contactNote,
        ],
      },
    ],
  },
  {
    slug: "cookies",
    title: "Cookie Policy",
    description:
      "The cookies and similar technologies used on the TRAIBCERT website and how to control them.",
    intro:
      "This policy explains the cookies and similar technologies used on this website, what they do, and how you can control them.",
    sections: [
      {
        heading: "Categories of cookies",
        body: [
          "Strictly necessary cookies enable core functions such as security, navigation and form submission.",
          "Analytics cookies help us understand how the website is used so we can improve content and navigation.",
          "Marketing cookies, where used, help measure the effectiveness of campaigns and referral sources.",
        ],
      },
      {
        heading: "Managing cookies",
        body: [
          "You can accept or reject non-essential cookies through your browser settings, and delete cookies already stored.",
          "Blocking some cookies may affect parts of the website, including form submission and spam protection.",
        ],
      },
      {
        heading: "Third parties",
        body: [
          "Some cookies are set by third-party services we use for analytics, spam protection and embedded content.",
          contactNote,
        ],
      },
    ],
  },
];

export const legalBySlug = Object.fromEntries(legalPages.map((p) => [p.slug, p]));
