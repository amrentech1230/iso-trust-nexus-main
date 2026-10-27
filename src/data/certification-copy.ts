import pages from "./certification-copy.json";

export const certificationCopyPages = pages;
export type CertificationCopyPage = (typeof pages)[number] & {
  pricingTiers?: { label: string; employees: string; price: string }[];
  pricingVat?: string;
  pricingAddOns?: { label: string; price: string }[];
};

export const certificationCopyPagesBySlug = Object.fromEntries(
  pages.map((page) => [page.slug, page]),
);

export function certificationCopyHero(page: CertificationCopyPage) {
  return page.blocks.find((block) => block.heading.startsWith("1 · Hero"))?.paragraphs ?? [];
}

export function certificationCopyFaqs(page: CertificationCopyPage) {
  const paragraphs =
    page.blocks.find((block) => block.heading.startsWith("9 · FAQ"))?.paragraphs ?? [];
  const faqs: { q: string; a: string }[] = [];

  for (let index = 0; index + 1 < paragraphs.length; index += 2) {
    const q = paragraphs[index];
    const a = paragraphs[index + 1];
    if (q && a) faqs.push({ q, a });
  }

  return faqs;
}
