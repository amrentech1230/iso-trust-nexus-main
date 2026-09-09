export const site = {
  name: "TRAIBCERT",
  legalName: "TRAIBCERT LIMITED",
  tagline:
    "Independent UK certification body providing ISO certification, Cyber Essentials, training and inspection services across the UK, UAE and internationally.",
  academyUrl: "https://academy.traibcert.org.uk",
  phones: {
    uk: "+44 7904 664589",
    uae: "+971 0526 909311",
  },
  emails: {
    info: "info@traibcert.org.uk",
    training: "training@traibcert.org.uk",
  },
  address: {
    lines: [
      "Suit 7, 2nd Floor, The Atrium",
      "31 Church Road",
      "Ashford, Middlesex",
      "TW15 2UD",
      "United Kingdom",
    ],
    inline:
      "Suit 7, 2nd Floor, The Atrium, 31 Church Road, Ashford, Middlesex, TW15 2UD, United Kingdom",
  },
  accreditations: [
    { label: "ASCB Accredited", note: "Accreditation body" },
    { label: "IASME Partner", note: "Cyber Essentials" },
    { label: "Cyber Essentials Certification Body", note: "UK scheme" },
  ],
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Facebook", href: "https://www.facebook.com/" },
    { label: "X", href: "https://x.com/" },
    { label: "YouTube", href: "https://www.youtube.com/" },
    { label: "WhatsApp", href: "https://wa.me/447904664589" },
  ],
} as const;

export const telHref = (phone: string) => `tel:${phone.replace(/[^+\d]/g, "")}`;
