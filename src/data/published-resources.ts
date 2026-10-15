import resourceRecords from "./published-resources.json";

export type PublishedResource = (typeof resourceRecords)[number];

export const publishedResources: PublishedResource[] = resourceRecords;

export const publishedResourcesByUrl = Object.fromEntries(
  publishedResources.map((resource) => [resource.url, resource]),
) as Record<string, PublishedResource | undefined>;

export function resourcePublishedDate(resource: PublishedResource) {
  const date = resource.byline.match(/\d{4}-\d{2}-\d{2}/)?.[0];
  if (!date) throw new Error(`Missing publication date for ${resource.url}`);
  return date;
}

export const resourceCategories = [
  "Quality and operations",
  "Health, safety and environment",
  "Information security and cyber",
  "Privacy and data protection",
  "Cloud and technology assurance",
  "Resilience and risk",
  "Sustainability and ESG",
  "Vendor and supply-chain compliance",
  "Asset management and inspection",
  "Training and auditing skills",
  "Understanding certification",
];

export const resourceTypePaths: Record<string, string> = {
  Articles: "/resources/articles",
  Guides: "/resources/guides",
  "Checklists & templates": "/resources/templates",
  Explainers: "/resources/explainers",
  "Standards updates": "/resources/updates",
};

export function resourceSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function resourceServiceKind(resource: PublishedResource) {
  const support = resource.supportTitle.toLowerCase();
  if (support.includes("certifies organisations")) return "certification";
  if (support.includes("assesses organisations")) return "assessment";
  if (support.includes("trains teams")) return "training";
  if (support.includes("delivers")) return "engagement";
  return "service";
}

export function resourcesForTopic(topic: string) {
  return publishedResources.filter((resource) => resource.topics.includes(topic));
}

export function resourcesForCategory(category: string) {
  return publishedResources.filter((resource) => resource.category === category);
}
