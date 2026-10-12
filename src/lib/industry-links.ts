import { coursesBySlug } from "@/data/courses";

export function countryFromBrowserLocale(availableCountries: string[]) {
  const locale = navigator.language.toLowerCase();
  const region = locale.match(/[-_]([a-z]{2})$/)?.[1];
  const country =
    region === "gb"
      ? "UK"
      : region === "us"
        ? "USA"
        : region === "in"
          ? "India"
          : region === "ae"
            ? "UAE"
            : ["at", "be", "bg", "hr", "cy", "cz", "dk", "ee", "fi", "fr", "de", "gr", "hu", "ie", "it", "lv", "lt", "lu", "mt", "nl", "pl", "pt", "ro", "sk", "si", "es", "se"].includes(region ?? "")
              ? "EU"
              : "All";

  return availableCountries.includes(country) ? country : "All";
}

export function trainingLevelHref(courseTitle: string, courseUrl: string): string | null {
  const slug = courseUrl.split("/").at(-1) ?? "";
  const course = coursesBySlug[slug];
  const level = course?.modules.find((module) =>
    courseTitle.toLowerCase().includes(module.level.toLowerCase()),
  )?.level;

  return level ? `${courseUrl}#level-${level.toLowerCase().replaceAll(" ", "-")}` : null;
}
