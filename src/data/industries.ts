import { industryContent } from "@/data/industry-content";

export const industries = industryContent;

export type Industry = (typeof industries)[number];
