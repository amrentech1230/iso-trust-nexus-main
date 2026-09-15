import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { site } from "@/config/site";
import { courses } from "@/data/courses";
import { standards } from "@/data/standards";
import "./site-header.css";

/**
 * TRAIBCERT header — Indigo & Gold.
 *
 * Faithful React port of the shared "TRAIBCERT Reusable Header" HTML. Styling
 * lives in site-header.css (scoped under the .tc-* class names from the design).
 * All navigation targets are internal app routes via TanStack <Link> so the
 * SPA routing keeps working; external destinations use <a>.
 *
 * Font Awesome 6.4 and the Outfit + DM Sans Google Fonts are loaded in the
 * root document head (see src/routes/__root.tsx).
 */

type MegaLink = { title: string; desc: string; icon: string; to: string; external?: boolean };

const aboutLinks: MegaLink[] = [
  {
    title: "About TRAIBCERT",
    desc: "Who we are & our mission",
    icon: "fa-building",
    to: "/#about",
  },
  {
    title: "Why Choose Us",
    desc: "Our approach & expertise",
    icon: "fa-star",
    to: "/why-choose-us",
  },
  {
    title: "Our Services",
    desc: "Certification, training & inspection",
    icon: "fa-briefcase",
    to: "/services",
  },
  // {
  //   title: "Industries",
  //   desc: "Sectors we serve",
  //   icon: "fa-industry",
  //   to: "/resources/industries",
  // },
  {
    title: "Careers",
    desc: "Join our team",
    icon: "fa-user-plus",
    to: "/careers",
  },
  {
    title: "Blog",
    desc: "Latest news & insights",
    icon: "fa-newspaper",
    to: "/resources/blog",
  },
];

const industries: MegaLink[] = [
  {
    title: "Technology & SaaS",
    desc: "Digital, cloud & software-driven businesses",
    icon: "fa-laptop-code",
    to: "/resources/industries/technology-saas",
  },
  {
    title: "Banking & Financial Services",
    desc: "Risk, compliance & operational resilience",
    icon: "fa-building-columns",
    to: "/resources/industries/banking-finance",
  },
  {
    title: "Healthcare",
    desc: "Patient safety, quality & traceability",
    icon: "fa-stethoscope",
    to: "/resources/industries/healthcare",
  },
  {
    title: "Manufacturing & Supply Chain",
    desc: "Production quality & supplier control",
    icon: "fa-industry",
    to: "/resources/industries/manufacturing-supply-chain",
  },
  {
    title: "Construction",
    desc: "Safety, project delivery & supplier assurance",
    icon: "fa-helmet-safety",
    to: "/resources/industries/construction",
  },
  {
    title: "Energy & Oil/Gas",
    desc: "Operational reliability & regulatory compliance",
    icon: "fa-oil-can",
    to: "/resources/industries/energy-oil-gas",
  },
  {
    title: "Public Sector & Government",
    desc: "Public accountability & service standards",
    icon: "fa-building-columns",
    to: "/resources/industries/public-sector-government",
  },
  {
    title: "Education",
    desc: "Learning quality & institutional governance",
    icon: "fa-graduation-cap",
    to: "/resources/industries/education",
  },
  {
    title: "Food & Beverage",
    desc: "Safety, trust & supply continuity",
    icon: "fa-utensils",
    to: "/resources/industries/food-beverage",
  },
  {
    title: "Retail & E-Commerce",
    desc: "Customer experience & trusted operations",
    icon: "fa-cart-shopping",
    to: "/resources/industries/retail-ecommerce",
  },
  {
    title: "Transport & Logistics",
    desc: "Fleet reliability & end-to-end visibility",
    icon: "fa-truck-fast",
    to: "/resources/industries/transport-logistics",
  },
  {
    title: "General / Other Industries",
    desc: "Custom solutions for diverse sectors",
    icon: "fa-layer-group",
    to: "/resources/industries/general-other",
  },
];


const inspectionLinks: MegaLink[] = [
  {
    title: "What is Pre-Shipment",
    desc: "Understanding PSI process",
    icon: "fa-box-open",
    to: "/certification/pre-shipment-inspection",
  },
  {
    title: "Why PSI is Important",
    desc: "Key reasons for inspection",
    icon: "fa-circle-exclamation",
    to: "/certification/pre-shipment-inspection",
  },
  {
    title: "Benefits of PSI",
    desc: "Advantages for your business",
    icon: "fa-chart-line",
    to: "/certification/pre-shipment-inspection",
  },
  {
    title: "Why Choose Our Services",
    desc: "TRAIBCERT inspection advantage",
    icon: "fa-handshake",
    to: "/certification",
  },
];

const resourceLinks: MegaLink[] = [
  {
    title: "Further Topics",
    desc: "Deep dives & technical guides",
    icon: "fa-book-open",
    to: "/resources/further-topics",
  },
  { title: "Blog", desc: "Latest news & insights", icon: "fa-newspaper", to: "/resources/blog" },
  {
    title: "FAQ",
    desc: "Common questions answered",
    icon: "fa-circle-question",
    to: "/resources/faq",
  },
  {
    title: "6 Essential Steps",
    desc: "Your certification roadmap",
    icon: "fa-list-check",
    to: "/resources/downloads",
  },
];

// Certification standards for the wide mega grid (from app data).
const certLinks = standards.map((s) => ({
  label: s.code === s.title ? s.title : `${s.code} ${s.discipline ?? ""}`.trim(),
  to: `/certification/${s.slug}`,
  tag: s.tag,
}));

// Training courses grouped into the three design columns.
const classroomCourses = courses;
const foundationCourses = courses.filter((c) =>
  ["iso-9001", "iso-45001", "iso-22000", "iso-27001", "iso-17025", "iso-17043", "iso-13528"].includes(
    c.slug,
  ),
);
const auditorCourses = courses.filter((c) =>
  [
    "iso-9001",
    "iso-14001",
    "iso-45001",
    "iso-22000",
    "iso-27001",
    "iso-50001",
    "iso-20000-1",
    "iso-22301",
    "iso-31000",
  ].includes(c.slug),
);

function MegaLinkRow({ link, onNavigate }: { link: MegaLink; onNavigate: () => void }) {
  const inner = (
    <>
      <div className="ml-icon">
        <i className={`fas ${link.icon}`} aria-hidden="true" />
      </div>
      <div className="ml-text">
        <span className="ml-title">{link.title}</span>
        <span className="ml-desc">{link.desc}</span>
      </div>
    </>
  );
  return (
    <Link to={link.to} className="tc-mega-link" onClick={onNavigate}>
      {inner}
    </Link>
  );
}

export function SiteHeader() {
  const [navOpen, setNavOpen] = useState(false);
  const [mobItem, setMobItem] = useState<string | null>(null);

  const closeAll = () => {
    setNavOpen(false);
    setMobItem(null);
  };

  // On mobile the whole <li> toggles its mega panel; on desktop hover handles it.
  const toggleMob = (key: string) => setMobItem((cur) => (cur === key ? null : key));

  return (
    <div className="tc-root">
      {/* ═══ TOP STRIP ═══ */}
      <div className="tc-topstrip">
        <div className="tc-wrap">
          <div className="tc-topstrip-left">
            <a href={`mailto:${site.emails.info}`}>
              <i className="fas fa-envelope" aria-hidden="true" /> {site.emails.info}
            </a>
            <span>
              <i className="fas fa-phone" aria-hidden="true" /> <strong>UK:</strong>{" "}
              {site.phones.uk}
            </span>
            <span>
              <i className="fas fa-phone" aria-hidden="true" /> <strong>UAE:</strong>{" "}
              {site.phones.uae}
            </span>
          </div>
          <div className="tc-topstrip-right">
            <Link to="/contact/enquiry" className="tc-btn-quote">
              <i className="fas fa-file-alt" aria-hidden="true" /> Get Quote
            </Link>
            <a
              href="http://www.traibcert.org.uk/pdf/Traibcert-Brocuher.pdf"
              className="tc-btn-brochure"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-download" aria-hidden="true" /> Brochure
            </a>
            <div className="tc-topstrip-social">
              <a
                href="https://www.facebook.com/Traibcert-pvt-ltd-563843920683744/"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f" aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com/cert_traib"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/company/traibcert"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ MAIN HEADER ═══ */}
      <header className="tc-header">
        <div className="tc-wrap">
          {/* Logo */}
          <Link to="/" className="tc-logo" aria-label="TRAIBCERT home" onClick={closeAll}>
            <img
              src="https://traibcert.org.uk/images/logo.png"
              alt="TRAIBCERT logo"
              className="tc-logo-image"
              style={{ width: "65%" }}
            />
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            className="tc-mobile-toggle"
            onClick={() => setNavOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={navOpen}
          >
            <i className="fas fa-bars" aria-hidden="true" />
          </button>

          {/* Navigation — 6 items */}
          <nav aria-label="Primary">
            <ul className={`tc-nav${navOpen ? " open" : ""}`}>
              {/* 1. HOME (with About mega) */}
              <li
                className={`tc-nav-item${mobItem === "home" ? " mob-open" : ""}`}
                onClick={() => toggleMob("home")}
              >
                <Link to="/" className="tc-nav-link" onClick={closeAll}>
                  Home <i className="fas fa-chevron-down chevron" aria-hidden="true" />
                </Link>
                <div className="tc-mega tc-mega-about">
                  <div className="tc-mega-about-grid">
                    {aboutLinks.map((l) => (
                      <MegaLinkRow key={l.title} link={l} onNavigate={closeAll} />
                    ))}
                  </div>
                </div>
              </li>

              {/* 2. CERTIFICATION */}
              <li
                className={`tc-nav-item${mobItem === "cert" ? " mob-open" : ""}`}
                onClick={() => toggleMob("cert")}
              >
                <Link to="/certification" className="tc-nav-link" onClick={closeAll}>
                  Certification <i className="fas fa-chevron-down chevron" aria-hidden="true" />
                </Link>
                <div className="tc-mega tc-mega-cert">
                  <div className="tc-mega-cert-head">
                    <h4>
                      <i
                        className="fas fa-certificate"
                        style={{ color: "var(--tc-gold)", marginRight: 6 }}
                        aria-hidden="true"
                      />{" "}
                      ISO Management System Certifications
                    </h4>
                    <Link to="/certification" onClick={closeAll}>
                      View all &rarr;
                    </Link>
                  </div>
                  <div className="tc-mega-cert-grid">
                    {certLinks.map((c) => (
                      <Link
                        key={c.to + c.label}
                        to={c.to}
                        className={`tc-cert-link${c.tag ? " highlight" : ""}`}
                        onClick={closeAll}
                      >
                        <span
                          className="cert-dot"
                          style={c.tag ? { background: "var(--tc-gold)", opacity: 1 } : undefined}
                        />
                        {c.label}
                        {c.tag ? (
                          <i
                            className="fas fa-sparkles"
                            style={{ fontSize: 10, color: "var(--tc-gold)", marginLeft: 4 }}
                            aria-hidden="true"
                          />
                        ) : null}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              {/* 3. INDUSTRIES */}
              <li
                className={`tc-nav-item${mobItem === "industries" ? " mob-open" : ""}`}
                onClick={() => toggleMob("industries")}
              >
                <Link to="/resources/industries" className="tc-nav-link" onClick={closeAll}>
                  Industries <i className="fas fa-chevron-down chevron" aria-hidden="true" />
                </Link>
                <div className="tc-mega tc-mega-inspect">
                  <div className="tc-mega-inspect-grid">
                    {industries.map((l) => (
                      <MegaLinkRow key={l.title} link={l} onNavigate={closeAll} />
                    ))}
                  </div>
                </div>
              </li>

              {/* 4. TRAINING */}
              <li
                className={`tc-nav-item${mobItem === "training" ? " mob-open" : ""}`}
                onClick={() => toggleMob("training")}
              >
                <Link to="/training" className="tc-nav-link" onClick={closeAll}>
                  Training <i className="fas fa-chevron-down chevron" aria-hidden="true" />
                </Link>
                <div className="tc-mega tc-mega-training">
                  <div className="tc-mega-training-layout">
                    <div className="tc-mega-col">
                      <h5>
                        <i
                          className="fas fa-chalkboard-teacher"
                          style={{ marginRight: 4 }}
                          aria-hidden="true"
                        />{" "}
                        Classroom Training
                      </h5>
                      {classroomCourses.map((c) => (
                        <Link key={c.slug} to={`/training/${c.slug}`} onClick={closeAll}>
                          <i className="fas fa-chevron-right" aria-hidden="true" />
                          {c.code}
                        </Link>
                      ))}
                    </div>
                    <div className="tc-mega-col">
                      <h5>
                        <i
                          className="fas fa-laptop"
                          style={{ marginRight: 4 }}
                          aria-hidden="true"
                        />{" "}
                        Foundation E-Learning
                      </h5>
                      {foundationCourses.map((c) => (
                        <Link key={c.slug} to={`/training/${c.slug}`} onClick={closeAll}>
                          <i className="fas fa-chevron-right" aria-hidden="true" />
                          {c.code} Foundation
                        </Link>
                      ))}
                      <a
                        href={site.academyUrl}
                        style={{ marginTop: 10, color: "var(--tc-gold)", fontWeight: 600 }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-arrow-right" aria-hidden="true" />
                        Visit TRAIBCERT Academy &rarr;
                      </a>
                    </div>
                    <div className="tc-mega-col">
                      <h5>
                        <i
                          className="fas fa-headset"
                          style={{ marginRight: 4 }}
                          aria-hidden="true"
                        />{" "}
                        Internal Auditor
                      </h5>
                      {auditorCourses.map((c) => (
                        <Link key={c.slug} to={`/training/${c.slug}`} onClick={closeAll}>
                          <i className="fas fa-chevron-right" aria-hidden="true" />
                          {c.code} Internal Auditor
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </li>

              {/* 5. INSPECTION */}
              <li
                className={`tc-nav-item${mobItem === "inspect" ? " mob-open" : ""}`}
                onClick={() => toggleMob("inspect")}
              >
                <Link to="/certification" className="tc-nav-link" onClick={closeAll}>
                  Inspection <i className="fas fa-chevron-down chevron" aria-hidden="true" />
                </Link>
                <div className="tc-mega tc-mega-inspect">
                  <div className="tc-mega-inspect-grid">
                    {inspectionLinks.map((l) => (
                      <MegaLinkRow key={l.title} link={l} onNavigate={closeAll} />
                    ))}
                  </div>
                </div>
              </li>

              {/* 5. RESOURCES */}
              <li
                className={`tc-nav-item${mobItem === "resources" ? " mob-open" : ""}`}
                onClick={() => toggleMob("resources")}
              >
                <Link to="/resources/blog" className="tc-nav-link" onClick={closeAll}>
                  Resources <i className="fas fa-chevron-down chevron" aria-hidden="true" />
                </Link>
                <div className="tc-mega tc-mega-topics">
                  <div className="tc-mega-topics-grid">
                    {resourceLinks.map((l) => (
                      <MegaLinkRow key={l.title} link={l} onNavigate={closeAll} />
                    ))}
                  </div>
                </div>
              </li>

              {/* 6. CONTACT */}
              <li
                className={`tc-nav-item${mobItem === "contact" ? " mob-open" : ""}`}
                onClick={() => toggleMob("contact")}
              >
                <Link to="/contact" className="tc-nav-link" onClick={closeAll}>
                  Contact <i className="fas fa-chevron-down chevron" aria-hidden="true" />
                </Link>
                <div className="tc-mega tc-mega-contact">
                  <div className="tc-contact-card">
                    <i className="fas fa-map-marker-alt" aria-hidden="true" />
                    <div>
                      <div className="cc-label">Head Office</div>
                      <div className="cc-value">{site.address.inline}</div>
                    </div>
                  </div>
                  <div className="tc-contact-card">
                    <i className="fas fa-envelope" aria-hidden="true" />
                    <div>
                      <div className="cc-label">Email</div>
                      <div className="cc-value">
                        <a href={`mailto:${site.emails.info}`}>{site.emails.info}</a>
                      </div>
                    </div>
                  </div>
                  <div className="tc-contact-card">
                    <i className="fas fa-phone" aria-hidden="true" />
                    <div>
                      <div className="cc-label">Phone</div>
                      <div className="cc-value">
                        UK: {site.phones.uk} &nbsp;|&nbsp; UAE: {site.phones.uae}
                      </div>
                    </div>
                  </div>
                  <Link to="/contact/enquiry" className="tc-mega-contact-cta" onClick={closeAll}>
                    <i className="fas fa-paper-plane" style={{ marginRight: 6 }} aria-hidden="true" />{" "}
                    Submit Enquiry
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
