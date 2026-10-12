/**
 * Centralised 301 redirect configuration for legacy TRAIBCERT URLs.
 * Consumed by src/routes/$.tsx (catch-all) so every legacy path is handled
 * in one place rather than scattered across components.
 */

export type RedirectRule = {
  from: string; // legacy path, may end with /* for prefix matches
  to: string; // target path, may use $1 for the captured remainder
};

export const redirects: RedirectRule[] = [
  { from: "/industry.php", to: "/resources/industries" },
  { from: "/agriculture-and-farming.php", to: "/resources/industries/food-beverage" },
  {
    from: "/banking-and-financial-services.php",
    to: "/resources/industries/banking-finance",
  },
  { from: "/construction-and-building.php", to: "/resources/industries/construction" },
  { from: "/customer-service.php", to: "/certification/iso-10002" },
  {
    from: "/welding.php",
    to: "/resources/industries/manufacturing-supply-chain",
  },
  {
    from: "/environmental-management-and-sustainability.php",
    to: "/resources/industries/waste-recycling",
  },
  {
    from: "/facilities-management.php",
    to: "/resources/industries/facilities-management",
  },
  { from: "/health-and-safety.php", to: "/certification/iso-45001" },
  {
    from: "/information-management.php",
    to: "/resources/industries/technology-saas",
  },
  {
    from: "/manufacturing-and-processing.php",
    to: "/resources/industries/manufacturing-supply-chain",
  },
  {
    from: "/quality-and-business-improvement.php",
    to: "/certification/iso-9001",
  },
  {
    from: "/transport-and-logistics.php",
    to: "/resources/industries/transport-logistics",
  },
  { from: "/waste-and-recycling.php", to: "/resources/industries/waste-recycling" },
  { from: "/about.php", to: "/#about" },
  { from: "/why-choose-us.php", to: "/#why-choose-us" },
  { from: "/services.php", to: "/#services" },
  { from: "/career.php", to: "/careers" },
  { from: "/careers.php", to: "/careers" },
  { from: "/contact.php", to: "/contact" },
  { from: "/enquiry.php", to: "/contact/enquiry" },
  { from: "/cyber-essentials.php", to: "/certification/cyber-essentials" },
  { from: "/cyber-essentials-plus.php", to: "/certification/cyber-essentials-plus" },
  { from: "/training.php", to: "/training" },
  { from: "/certification.php", to: "/certification" },
  { from: "/blog.php", to: "/resources/blog" },
  { from: "/faq.php", to: "/resources/faq" },
  { from: "/sitemap.php", to: "/resources/sitemap" },
  { from: "/privacy-policy.php", to: "/legal/privacy" },
  { from: "/terms-and-conditions.php", to: "/legal/terms" },
  { from: "/cookie-policy.php", to: "/legal/cookies" },
  { from: "/industries/*", to: "/resources/industries/$1" },
  { from: "/blog/*", to: "/resources/blog/$1" },
  { from: "/iso-certification/*", to: "/certification/$1" },
];

const normalise = (path: string) => {
  const trimmed = path.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed.toLowerCase();
};

/** Returns the redirect target for a legacy path, or null when none applies. */
export const resolveRedirect = (pathname: string): string | null => {
  const path = normalise(pathname);
  for (const rule of redirects) {
    if (rule.from.endsWith("/*")) {
      const prefix = normalise(rule.from.slice(0, -2));
      if (path === prefix || path.startsWith(`${prefix}/`)) {
        const rest = path.slice(prefix.length).replace(/^\//, "");
        return rule.to.replace("$1", rest).replace(/\/$/, "") || "/";
      }
    } else if (path === normalise(rule.from)) {
      return rule.to;
    }
  }
  return null;
};
