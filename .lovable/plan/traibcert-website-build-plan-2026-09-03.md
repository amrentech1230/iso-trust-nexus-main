# TRAIBCERT — Website Build Plan

A configuration-driven, production-grade corporate site for TRAIBCERT built on the existing TanStack Start + React + TypeScript + Tailwind v4 stack. Everything (navigation, standards, courses, industries, legal pages) is driven from typed data files so pages scale past the initial 76 without rework.

## Design system

- Brand tokens in `src/styles.css`: primary indigo `#2c2a75`, secondary `#3f3b8f`, indigo gradient to `#5b56af`, honey yellow `#f9b933`, hover `#e0a520`, accessible yellow `#c99327` (used for any yellow text on white), soft yellow `#fff4d1`, dark topbar `#1a1854`, white/neutral surfaces.
- Inter loaded via `<link>` in the root route; type scale for H1/H2/H3/body/labels.
- Focus ring: 2px indigo outline, 2px offset. `prefers-reduced-motion` respected. Restrained motion only (hero, cards, CTA, stats, mega-menu transitions).

## Global chrome

- **TopBar** (`#1a1854`): UK +44 7904 664589, UAE +971 0526 909311, info@traibcert.org.uk, E-Learning Academy, Certificate Verification, EN switch. Hides on scroll.
- **Header** (white, ~78px, sticky, shadow after 50px): logo, 5 primary items (Home, Certification, Training, Resources, Contact Us), phone, search icon, honey-yellow Get a Quote.
- **Mega menus**: Certification (ISO standards / cyber & compliance / sustainability / inspection / featured "ISO 9001:2026 Coming September" tile), Training (~520px wide flat list with course levels, internal scroll), Resources (Knowledge Hub / Industries / Client Services + "6 Essential Steps to ISO Certification" tile), Contact Us (Contact, Enquiry). Keyboard + arrow-key navigation, ESC to close, `aria-haspopup`/`aria-expanded`, never overflow viewport.
- **Mobile drawer** (<1024px): right off-canvas ~320px, accordion sections, contact details, sticky Get a Quote.
- **Footer**: 4 columns (Brand+contact+accreditation badges+socials, Company, Quick Links incl. external academy, Policies) plus bottom bar "Copyrights © 2026 TRAIBCERT LIMITED. All Rights Reserved." / "Registered in England & Wales". No invented registration number.

## Reusable components

Hero, SectionHeading, CTASection, ServiceCard, CertificationCard, TrainingCard, IndustryCard, TestimonialCard, BlogCard, FAQAccordion (with FAQPage JSON-LD), Breadcrumbs (with BreadcrumbList JSON-LD), CertificationProcess (5 steps: Get Started → Assessment → Certification Audit → Certification → Maintenance), AccreditationBadge, ContactForm, LeadForm, SearchDialog.

## Pages and URLs

- `/` — hero, about, why choose us, services (Certification/Training/Inspection/E-Learning), accreditations (ASCB, IASME, Cyber Essentials CB), testimonials + stats (clearly labelled placeholders), 12-industry grid, latest insights, careers, contact CTA.
- `/certification` landing + `/certification/<standard>` template pages for every ISO standard, cyber/compliance, sustainability and inspection item in the mega menu, driven by `src/data/standards.ts`.
- `/training` course-discovery landing (search, categories, levels, featured, cards) + `/training/<standard>` templates with selectable Foundation/Awareness/Internal Auditor/Lead Auditor modules. No invented prices, ratings or dates.
- `/resources/blog` (+ article route), `/resources/knowledge-base`, `/resources/downloads`, `/resources/further-topics`, `/resources/faq`, `/resources/industries` + 12 industry pages, `/resources/certificate-transfer`, `/resources/sitemap`.
- `/resources/downloads/6-essential-steps` lead-magnet landing with lead capture + source tracking.
- `/contact`, `/contact/enquiry`, `/careers`.
- `/legal/privacy`, `/terms`, `/confidentiality`, `/impartiality`, `/refund`, `/cookies`.

## Enquiry form

Native React form (no iframe) with validation, loading/success/error states, accessible labels, honeypot spam guard, UTM/source capture, reCAPTCHA v3 hook point. A typed service layer (`src/lib/crm/`) targets Zoho Bigin and returns a mocked response until credentials exist, so the UI needs no rework when the backend is connected.

## SEO, redirects, accessibility

- Per-route `head()`: unique title, meta description, canonical, OG and Twitter tags; single H1; JSON-LD Organization (root), BreadcrumbList, FAQPage, Article, Course where applicable.
- Centralised redirect map (`src/config/redirects.ts`) handling `/about.php`, `/why-choose-us.php`, `/services.php`, `/career.php`, `/cyber-essentials.php`, `/enquiry.php`, `/industries/*` and legacy blog paths via a splat route issuing 301s.
- Semantic landmarks, alt text, contrast-safe colour pairs, responsive checks at 1440/1280/1024/768/480/375.

## Build order

1. Design tokens, fonts, layout primitives.
2. `src/config/navigation.ts`, contact and footer config, `src/data/*` for standards / courses / industries.
3. TopBar, Header, mega menus, mobile drawer, Footer, Breadcrumbs, SearchDialog.
4. Homepage sections.
5. Certification landing + template; Training landing + template.
6. Resources, blog, industries, downloads/lead magnet.
7. Contact, Enquiry, Careers, Legal pages, sitemap, redirects.
8. Responsive/accessibility/SEO pass across routes.

## Notes

Given the size (76 pages), the first pass delivers the design system, all global chrome, the homepage, and every template with the full data set wired in; the remaining static content pages are generated from those templates in the same flow. No accreditations, testimonials, statistics, prices, registration numbers, staff or awards are invented — placeholders are visibly marked for replacement.
