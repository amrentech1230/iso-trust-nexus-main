# TRAIBCERT Elevate

## Architecture: React SPA + Laravel API

This project is split into two apps:

- **Frontend** (repository root) — a **React 19 + TypeScript** single-page app
  built with **Vite**, **React Router** and **Tailwind CSS 4**. It contains all
  pages (home, certification, training, resources, contact, legal) and the
  enquiry form.
- **Backend** (`backend/`) — a **Laravel 11** API that receives enquiry-form
  submissions at `POST /api/public/enquiry`, validates and stores them, and
  returns a reference (e.g. `TBC-482913`).

> **Note:** This environment has no package-registry network access, so
> `npm install`, `bun install` and `composer install` could **not** be run
> here, and the apps were therefore **not built or tested in this sandbox**.
> All source is complete and ready to build/run where the network is available.
> PHP syntax of every backend file was validated with `php -l`.

### Running the frontend (React SPA)

Requires Node.js. From the repository root:

```sh
npm install          # or: bun install
cp .env.example .env # set VITE_BIGIN_ENABLED=1 to use the real API
npm run dev          # Vite dev server on http://localhost:3000
```

The Vite dev server proxies `/api/*` to the Laravel backend (default
`http://localhost:8000`, configurable via `VITE_API_PROXY_TARGET`).
When `VITE_BIGIN_ENABLED` is unset, the enquiry form uses a local mock so the
UI works without a backend.

Build for production with `npm run build` (outputs to `dist/`). Serve `dist/`
as static files; configure your host to rewrite unknown paths to `index.html`
(SPA fallback) and to serve the legacy 301 redirects listed below.

### Running the backend (Laravel API)

Requires PHP 8.2+ and Composer. From `backend/`:

```sh
cd backend
composer install
cp .env.example .env
php artisan key:generate
touch database/database.sqlite   # SQLite is the default connection
php artisan migrate
php artisan serve                # API on http://localhost:8000
```

#### API endpoints

| Method | Path | Description |
| --- | --- | --- |
| `POST` | `/api/public/enquiry` | Submit an enquiry. Returns `201 { reference, message }`. Validation errors return `422 { message, errors }`. Rate limited to 20/min. |
| `GET` | `/api/admin/enquiries` | List enquiries (paginated). Requires `Authorization: Bearer <ADMIN_API_TOKEN>`. |
| `GET` | `/up` | Health check. |

Set `FRONTEND_URL` in `backend/.env` for CORS (defaults to
`http://localhost:3000`). Run the backend test suite with `php artisan test`.

### Migration note (TanStack Start → React Router)

The app was previously built on TanStack Start (SSR). It was converted to a
plain Vite React SPA:

- `src/main.tsx` + `index.html` are the new client entry (replacing the SSR
  document shell / server entry).
- `src/router.tsx` uses React Router's `createBrowserRouter`.
- `src/lib/router-compat.tsx` is a small shim that keeps each route file's
  original `createFileRoute({ head, loader, component })` shape, so the 22 route
  files needed only import changes. `head()` output is rendered via
  `src/components/site/SEO.tsx` (react-helmet-async).
- Removed: `src/server.ts`, `src/start.ts`, `src/routeTree.gen.ts`,
  `src/routes/__root.tsx` (now `src/components/layout/RootLayout.tsx`).

---

# TRAIBCERT — Complete Website Redesign & Development Prompt

Build a modern, professional, responsive corporate website for **TRAIBCERT**, an independent UK certification body providing ISO certification, Cyber Essentials, professional training, inspection and related compliance services across the UK, UAE and internationally.

This is a **complete website redesign and restructuring project**, not just a homepage redesign.

The website must follow the supplied TRAIBCERT Navigation Sub-Flow v4 specification exactly, including the 76-page information architecture, navigation structure, URL structure, footer structure, branding, accessibility requirements, SEO considerations, redirects and enquiry workflow.

---

## 1. PRIMARY OBJECTIVE

Create a high-trust, modern B2B website that positions TRAIBCERT as a professional international certification and training organisation.

The design should communicate:

* Trust
* Professionalism
* Accreditation
* Technical expertise
* International presence
* Security
* Compliance
* Reliability
* Ease of getting certified

The current website contains a large amount of information but feels dated and content-heavy.

The new website should make the same type of information significantly easier to understand, navigate and convert.

Do NOT create a generic startup/SaaS website.

The visual direction should feel like a premium:

**UK certification body + compliance consultancy + professional training organisation.**

---

# 2. BRAND DESIGN SYSTEM

Use the TRAIBCERT brand colours specified by the client.

### Primary Indigo

`#2c2a75`

### Secondary Indigo

`#3f3b8f`

### Gradient Indigo

`#3f3b8f` → `#5b56af`

### Honey Yellow

`#f9b933`

### Yellow Hover

`#e0a520`

### Accessible Yellow

`#c99327`

### Soft Yellow

`#fff4d1`

### Dark Topbar

`#1a1854`

Use white and neutral backgrounds extensively.

The design should feel:

* Clean
* Premium
* Corporate
* Modern
* Spacious
* Trustworthy
* Accessible

Avoid:

* Excessive gradients
* Overly colourful sections
* Glassmorphism everywhere
* Cartoon illustrations
* Generic AI-looking layouts
* Excessive rounded cards
* Huge unnecessary animations

Use subtle animations only where they improve UX.

---

# 3. TYPOGRAPHY

Use a modern professional sans-serif font such as:

**Inter**

or another highly readable modern corporate sans-serif.

Create a clear hierarchy:

* Large bold H1
* Strong H2
* Medium H3
* Readable body copy
* Small supporting labels

Maintain excellent readability and spacing across desktop, tablet and mobile.

---

# 4. GLOBAL HEADER

Create a two-level header.

## Topbar

Dark indigo background:

`#1a1854`

Include:

* UK phone: `+44 7904 664589`
* UAE phone: `+971 0526 909311`
* Email: `info@traibcert.org.uk`
* E-Learning Academy
* Certificate Verification
* EN language switch

The topbar should disappear when scrolling.

---

## Main Header

White background.

Height approximately:

**78px**

Include:

* TRAIBCERT logo
* Home
* Certification
* Training
* Resources
* Contact Us
* Phone display
* Search icon
* Get a Quote CTA

The header should be sticky.

After approximately 50px of scrolling, add a subtle shadow.

The **Get a Quote** button should use honey yellow.

---

# 5. MOBILE HEADER

For screens below approximately 1024px:

Create a right-side off-canvas mobile drawer approximately 320px wide.

Use accordion navigation for:

* Certification
* Training
* Resources
* Contact Us

Include a sticky bottom CTA inside the mobile navigation:

**Get a Quote**

Also show contact details.

The mobile navigation must be extremely easy to use.

---

# 6. PRIMARY NAVIGATION

There are exactly five primary menu items:

1. Home
2. Certification
3. Training
4. Resources
5. Contact Us

Do not add unnecessary primary navigation items.

---

# 7. CERTIFICATION MEGA MENU

Certification must use a large professional mega-menu.

Create approximately five visual areas:

### Column A — ISO Standards

Include:

* Certification
* ISO 9001:2015
* ISO 14001:2026 — CURRENT
* ISO 45001:2018
* ISO 22000:2018
* ISO 22301:2019
* ISO 20000-1:2018
* ISO 10002:2018
* ISO 21001:2018
* ISO 41001:2018
* ISO 31000:2018
* ISO 26000:2010
* ISO 50001:2018
* ISO 13485
* ISO 29001:2020
* ISO 42001:2023 — NEW
* ISO 55001 — NEW
* ISO 14064 — NEW

Each item should have its description/category where appropriate.

---

### Column B — Cyber Security & Compliance

Include:

* Cyber Essentials
* Cyber Essentials Plus
* ISO 27001:2022
* ISO 27701 — NEW
* ISO 27017 — NEW
* ISO 27018 — NEW
* SOC 2 Type II Assessment — NEW
* PCI DSS Compliance — NEW
* GDPR Assessment — NEW
* Penetration Testing — NEW

---

### Column C — Sustainability

Include:

* ESG & Sustainability Services
* Carbon & Net-Zero Advisory

---

### Column D — Inspection

Include:

* Inspection Overview
* What is Pre-Shipment Inspection
* Why Pre-Shipment Inspection is Important
* Benefits of Pre-Shipment Inspection

---

### Column E — Featured Campaign

Create a visually strong promotional tile.

Eyebrow:

**TRANSITION ALERT**

Heading:

**ISO 9001:2026 Coming September**

Body:

**The next revision of ISO 9001 is expected September 2026. Book your gap assessment now to plan a smooth transition from the 2015 version.**

CTA:

**Learn more →**

Use:

* Indigo gradient
* Honey-yellow glow
* Honey-yellow CTA
* Indigo CTA text

---

# 8. TRAINING MEGA / WIDE DROPDOWN

Training should use a wide dropdown with a flat list.

Include:

1. Training Landing
2. ISO 9001:2015
3. ISO 14001:2026
4. ISO 45001:2018
5. ISO 22000:2018
6. ISO 27001:2022
7. ISO 41001:2018
8. ISO 20000-1:2018
9. ISO 22301:2019
10. ISO 31000:2018
11. ISO 50001:2018
12. ISO 17025:2017
13. ISO 17043:2010
14. ISO 13528:2015

Where applicable, show course levels such as:

* Foundation
* Awareness
* Internal Auditor
* Lead Auditor

The dropdown should be approximately 520px wide and support internal scrolling on smaller screens.

---

# 9. RESOURCES MEGA MENU

Create a three-section mega menu.

## Knowledge Hub

* Blog
* Knowledge Base / Guides
* Downloads & Whitepapers
* Further Topics
* Frequently Asked Questions

## Industries

Include:

* Industries
* Technology & SaaS
* Banking & Financial Services
* Healthcare
* Manufacturing & Supply Chain
* Construction
* Energy & Oil/Gas
* Public Sector & Government
* Education
* Food & Beverage
* Retail & E-Commerce
* Transport & Logistics

## Client Services

* Certificate Transfer
* Sitemap

---

## Featured Resource Tile

Create a promotional resource card:

Eyebrow:

**FREE DOWNLOAD**

Heading:

**6 Essential Steps to ISO Certification**

Body:

**Our practical guide to achieving certification the first time. Downloaded by 500+ organisations.**

CTA:

**Get the guide →**

Use the same indigo/yellow visual language as the Certification promotional tile.

---

# 10. CONTACT US MENU

Contact Us should contain:

* Contact
* Enquiry / Get Quote

---

# 11. HOMEPAGE

The homepage must contain these ten sections in this order:

## 1. Hero

Create a premium, high-impact hero.

Suggested headline:

**ISO Certification, Training & Compliance Services**

Supporting copy:

**Independent certification, professional training and inspection services for organisations across the UK, UAE and internationally.**

Primary CTA:

**Get a Quote**

Secondary CTA:

**Explore Certification**

Include a professional corporate visual related to:

* Certification
* Auditing
* Business compliance
* Professional standards

Do not use cliché handshake stock photography.

---

## 2. About Us

Introduce TRAIBCERT.

Communicate:

* Independent certification body
* UK presence
* International services
* Certification
* Training
* Inspection
* Compliance expertise

Include a link/CTA:

**Learn More About Us**

---

# 12. WHY CHOOSE US

Create a strong trust-focused section.

Use cards for differentiators such as:

* Independent & Impartial
* Experienced Auditors
* International Coverage
* Professional Training
* Industry Expertise
* Customer-Focused Service

Use subtle icons.

---

# 13. OUR SERVICES

Create four large service cards:

### Certification

ISO certification services for organisations across multiple industries.

### Training

Professional ISO training including Foundation, Awareness, Internal Auditor and Lead Auditor programmes.

### Inspection

Professional inspection and pre-shipment inspection services.

### E-Learning

Flexible online professional training through the TRAIBCERT E-Learning Academy.

Each card should have:

**Learn More →**

---

# 14. ACCREDITATIONS

Create a visually premium trust section.

Show:

* ASCB Accredited
* IASME Partner
* Cyber Essentials Certification Body

Use accreditation logos/badges only where assets are available.

Do not fabricate accreditation logos.

---

# 15. TESTIMONIALS & STATS

Create a social proof section.

Include:

* Customer testimonials
* Rating/review presentation
* Key company statistics

Do not fabricate statistics or testimonials.

If actual content is not provided, use clearly marked placeholder content that can easily be replaced.

---

# 16. INDUSTRIES

Create a 12-icon responsive industry grid.

Industries:

* Technology & SaaS
* Banking & Financial Services
* Healthcare
* Manufacturing & Supply Chain
* Construction
* Energy & Oil/Gas
* Public Sector & Government
* Education
* Food & Beverage
* Retail & E-Commerce
* Transport & Logistics
* General / Other Industries

Every industry card links to its dedicated industry page.

---

# 17. LATEST INSIGHTS

Show three latest blog/resource cards.

Each card should include:

* Image
* Category
* Date
* Title
* Short excerpt
* Read Article →

Include:

**View All Insights →**

---

# 18. CAREERS

Create a short careers CTA section.

Headline:

**Build Your Career With TRAIBCERT**

Short supporting copy and CTA.

---

# 19. CONTACT CTA

Create a large final CTA section.

Suggested headline:

**Ready to Start Your Certification Journey?**

Supporting copy:

**Talk to our team about certification, training, inspection or compliance requirements.**

CTA:

**Get a Quote**

Secondary:

**Contact Us**

---

# 20. CERTIFICATION LANDING PAGE

Create a dedicated certification overview page.

Include:

* Hero
* Certification introduction
* Popular ISO standards
* Cyber security & compliance
* Sustainability
* Inspection
* Certification process
* Industries
* FAQs
* CTA

Use reusable components so individual certification pages maintain visual consistency.

---

# 21. INDIVIDUAL CERTIFICATION PAGES

Build reusable templates for all certification pages.

Each page should support:

* Hero
* Standard overview
* What the standard is
* Who needs it
* Benefits
* Requirements
* Certification process
* Why TRAIBCERT
* FAQ
* Related training
* CTA

Do not duplicate the exact same layout/content blindly.

Use dynamic data/configuration where possible.

---

# 22. TRAINING LANDING PAGE

Create a professional course discovery page.

Include:

* Hero
* Search
* Course categories
* Standards
* Course levels
* Featured courses
* Course cards
* FAQ
* CTA

Course cards should support:

* Course title
* Standard
* Level
* Duration
* Price
* Rating
* CTA

Do not invent real course prices or ratings unless provided.

---

# 23. INDIVIDUAL TRAINING PAGES

Create reusable training page templates.

Each page should support selectable course modules such as:

* Foundation
* Awareness
* Internal Auditor
* Lead Auditor

Include:

* Course overview
* Who should attend
* Learning objectives
* Course content
* Duration
* Delivery format
* Certification/completion information
* Price area
* FAQ
* Enrol / Buy CTA

---

# 24. INDUSTRY PAGES

Create reusable industry landing-page templates.

Each industry page should explain:

* Industry challenges
* Relevant ISO standards
* Certification benefits
* Training options
* Compliance considerations
* Relevant TRAIBCERT services
* CTA

Example:

**Technology & SaaS**

Relevant standards could include:

* ISO 27001
* ISO 27701
* ISO 42001
* ISO 20000-1

Do not make unsupported claims about certifications or accreditation.

---

# 25. RESOURCE PAGES

Create reusable templates for:

* Blog
* Knowledge Base
* Downloads
* Further Topics
* FAQ

The blog should have:

* Categories
* Search
* Featured article
* Article grid
* Pagination

Individual articles should support:

* Title
* Author
* Date
* Featured image
* Content
* Related articles
* CTA

---

# 26. DOWNLOAD / LEAD MAGNET

Create a dedicated landing page for:

**6 Essential Steps to ISO Certification**

Include:

* Strong headline
* Benefits
* Guide preview
* Lead capture form
* Download CTA

Track campaign/source information where possible.

---

# 27. CONTACT PAGE

Create a professional Contact page.

Show:

### UK

Suit 7, 2nd Floor, The Atrium
31 Church Road
Ashford, Middlesex
TW15 2UD
United Kingdom

### Phone

+44 7904 664589

### UAE

+971 0526 909311

### Email

[info@traibcert.org.uk](mailto:info@traibcert.org.uk)

[training@traibcert.org.uk](mailto:training@traibcert.org.uk)

Also include a contact/enquiry CTA.

---

# 28. GET A QUOTE / ENQUIRY PAGE

Create a custom native React enquiry form.

The final implementation should be designed for integration with:

**Zoho Bigin**

Requirements:

* Native React form
* reCAPTCHA v3
* Auto-responder
* UTM/source tracking
* Validation
* Success state
* Error state
* Loading state
* Accessible labels
* Spam protection

Do not use an iframe for the enquiry form.

If API credentials are unavailable during development, create a clean integration service layer and mock the API response so the backend can be connected later without rebuilding the UI.

---

# 29. FOOTER

Create a four-column footer.

## Column 1 — Brand + Contact

Include:

TRAIBCERT

Tagline:

**Independent UK certification body providing ISO certification, Cyber Essentials, training and inspection services across the UK, UAE and internationally.**

Address:

Suit 7, 2nd Floor, The Atrium, 31 Church Road, Ashford, Middlesex, TW15 2UD, United Kingdom

UK:

+44 7904 664589

UAE:

+971 0526 909311

Emails:

[info@traibcert.org.uk](mailto:info@traibcert.org.uk)
[training@traibcert.org.uk](mailto:training@traibcert.org.uk)

Accreditation badges:

ASCB Accredited
IASME Partner
Cyber Essentials CB

Social icons:

* LinkedIn
* Facebook
* Twitter/X
* YouTube
* WhatsApp

---

## Column 2 — Company

* About Us
* Services
* Why Choose Us
* Accreditations
* Careers
* Certificate Transfer

---

## Column 3 — Quick Links

* All Standards
* Training
* Blog
* FAQ
* Industries
* Enquiry
* Contact
* Sitemap
* E-Learning Academy ↗

External academy:

`https://academy.traibcert.org.uk`

---

## Column 4 — Policies

* Privacy Policy
* Terms & Conditions
* Confidentiality Policy
* Impartiality Policy
* Refund & Cancellation Policy
* Cookie Policy

---

## Footer Bottom Bar

Copyright:

**Copyrights © 2026 TRAIBCERT LIMITED. All Rights Reserved.**

Right side:

**Registered in England & Wales**

Do not invent the company registration number.

---

# 30. PAGE URL STRUCTURE

Maintain the following URL architecture:

Home:

`/`

Certification:

`/certification`

Certification pages:

`/certification/iso-9001`

`/certification/iso-14001`

`/certification/iso-45001`

etc.

Training:

`/training`

Training pages:

`/training/iso-9001`

etc.

Resources:

`/resources/blog`

`/resources/knowledge-base`

`/resources/downloads`

`/resources/further-topics`

`/resources/faq`

Industries:

`/resources/industries`

`/resources/industries/technology-saas`

`/resources/industries/banking-finance`

etc.

Contact:

`/contact`

`/contact/enquiry`

Legal:

`/legal/privacy`

`/legal/terms`

`/legal/confidentiality`

`/legal/impartiality`

`/legal/refund`

`/legal/cookies`

---

# 31. SEO

Build the application with SEO in mind from the beginning.

Every page should support:

* Unique title
* Meta description
* H1
* Proper H2/H3 hierarchy
* Canonical URL
* Open Graph metadata
* Twitter/X metadata
* Breadcrumbs
* Structured data where appropriate
* Descriptive URLs
* Image alt text
* Internal linking

Implement JSON-LD:

* Organization
* BreadcrumbList
* FAQPage where appropriate
* Article where appropriate
* Course where appropriate

Avoid:

* Duplicate titles
* Duplicate meta descriptions
* Multiple H1s
* Keyword stuffing
* Thin content
* Orphan pages

---

# 32. BREADCRUMBS

Every non-homepage page should have breadcrumbs.

Example:

Home → Certification → ISO 9001

Home → Resources → Industries → Technology & SaaS

Implement BreadcrumbList JSON-LD schema.

---

# 33. OLD URL REDIRECTS

Prepare the application/server configuration for 301 redirects.

Required redirects include:

`/about.php` → `/#about`

`/why-choose-us.php` → `/#why-choose-us`

`/services.php` → `/#services`

`/career.php` → `/#careers`

`/industries/*` → `/resources/industries/*`

`/cyber-essentials.php` → `/certification/cyber-essentials`

`/enquiry.php` → `/contact/enquiry`

Existing blog URLs should either be preserved or redirected according to the CMS migration decision.

Create a centralized redirect configuration rather than scattering redirects throughout components.

---

# 34. CONFIGURATION-DRIVEN NAVIGATION

Do NOT hard-code the entire header navigation directly inside visual components.

Create a centralized navigation configuration/data structure.

For example:

`src/config/navigation.ts`

Store:

* Primary nav
* Mega menu columns
* URLs
* Labels
* Tags
* Featured campaigns
* Footer navigation
* Contact information

This should allow future campaign updates without changing the navigation component.

---

# 35. REUSABLE COMPONENT ARCHITECTURE

Build reusable components such as:

* Header
* TopBar
* DesktopNavigation
* MobileNavigation
* MegaMenu
* Breadcrumbs
* Hero
* CTA
* ServiceCard
* CertificationCard
* TrainingCard
* IndustryCard
* TestimonialCard
* BlogCard
* FAQAccordion
* Footer
* ContactForm
* Newsletter/LeadForm
* AccreditationBadge
* SectionHeading

Do not create 76 completely independent page implementations if a reusable template can be used.

Use data/configuration to populate similar pages.

---

# 36. ACCESSIBILITY

Follow WCAG-conscious implementation.

Requirements:

* Semantic HTML
* `

`
* ``
* ``
* `

`
* `

`
* `

`
* `

`
* ``

Navigation requirements:

* Keyboard accessible
* Tab navigation
* Arrow-key navigation inside mega menus where appropriate
* ESC closes menus
* `aria-haspopup`
* `aria-expanded`
* Proper focus management

Visible focus:

**2px indigo outline with 2px offset**

Respect:

`prefers-reduced-motion`

Do not rely on colour alone to communicate state.

Ensure sufficient contrast.

Important:

Never use `#f9b933` as normal yellow text on a white background.

For yellow text on white use:

`#c99327`

---

# 37. RESPONSIVE DESIGN

The website must work perfectly on:

* Desktop
* Laptop
* Tablet
* Mobile

Test approximately:

* 1440px
* 1280px
* 1024px
* 768px
* 480px
* 375px

Mega menus must never overflow the viewport.

Tables/cards/content must remain usable on mobile.

Forms must be comfortable to complete on touch devices.

---

# 38. SEARCH

Add a global search icon in the desktop header.

Create a search interface that can search:

* Certifications
* Training
* Resources
* Industries
* Blog content

The search UI should be clean and fast.

If backend search is not available yet, implement the frontend architecture so a search API can be connected later.

---

# 39. PERFORMANCE

Prioritize:

* Fast page loading
* Optimized images
* Lazy loading
* Responsive images
* Minimal JavaScript where possible
* Reusable components
* Efficient routing
* Clean code

Avoid unnecessary animation libraries and excessive client-side rendering.

---

# 40. VISUAL STYLE

The visual language should combine:

**UK corporate professionalism + certification authority + modern digital experience.**

Use:

* Large whitespace
* Strong indigo headers
* Honey-yellow CTAs
* Clean cards
* Professional photography
* Subtle line/iconography
* Clean grids
* Strong typography
* Modern hover states
* Gentle scroll animations

Use subtle animated effects on:

* Hero elements
* Cards
* CTA sections
* Statistics
* Mega menu transitions

But keep the site professional.

---

# 41. DO NOT INVENT BUSINESS INFORMATION

Very important:

Do not invent:

* Accreditations
* Certifications
* Company registration numbers
* Customer logos
* Customer testimonials
* Review counts
* Statistics
* Course prices
* Training dates
* Addresses
* Staff members
* Awards

If actual information is unavailable, use clearly labelled placeholders that can easily be replaced.

---

# 42. CONTENT STRATEGY

Use concise, professional B2B copy.

Avoid excessive paragraphs.

Convert long content into:

* Cards
* Accordions
* Bullet points
* Process steps
* Comparison tables
* Tabs
* Callouts

Important information should be scannable.

---

# 43. CERTIFICATION PROCESS COMPONENT

Create a reusable visual certification process:

### 01 — Get Started

Discuss your certification requirements.

### 02 — Assessment

Review your current systems and readiness.

### 03 — Certification Audit

Conduct the required audit.

### 04 — Certification

Receive certification after successful completion.

### 05 — Maintenance

Maintain and improve your management system.

Use this component across relevant pages.

---

# 44. TRUST & CONVERSION

Throughout the website, strategically place:

* Accreditation information
* Testimonials
* Certification benefits
* Process explanations
* FAQs
* Contact CTAs
* Quote CTAs

Every major page should have a logical next action.

Primary conversion:

**Get a Quote**

Secondary conversion:

**Contact Us**

For training:

**Enrol / View Course**

For resources:

**Download Guide**

---

# 45. TECHNICAL STRUCTURE

Use a clean modern React architecture.

Prefer:

* React
* TypeScript
* Tailwind CSS
* Reusable components
* Centralized data/configuration
* Clean routing
* SEO-friendly page metadata

Use sensible folder structure such as:

`src/components`

`src/pages`

`src/config`

`src/data`

`src/layouts`

`src/lib`

`src/hooks`

Do not create unnecessarily complex architecture.

---

# 46. FINAL IMPLEMENTATION REQUIREMENT

The website should feel like a **real production-ready certification organisation website**, not an AI-generated template.

Pay particular attention to:

1. Information hierarchy
2. Navigation
3. Mobile UX
4. SEO
5. Accessibility
6. Trust signals
7. Conversion
8. Page consistency
9. Performance
10. Professional visual design

Start by building:

**Global design system → Header → Navigation → Footer → Homepage → Certification template → Training template → Resource template → Industry template → Contact → Legal pages**

Then populate the remaining pages using reusable templates and configuration-driven data.

Make the architecture scalable so the website can continue growing beyond the initial 76-page structure without requiring major redevelopment.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/97f0f0ef-a999-488b-a83b-224b9fc2306f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
#   i s o - t r u s t - n e x u s - m a i n  
 