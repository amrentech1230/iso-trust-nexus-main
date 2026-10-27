import { industryContent } from "@/data/industry-content";

export const industries = industryContent.filter(
  (industry) => industry.slug !== "laboratories-testing",
);

export type Industry = (typeof industries)[number];
