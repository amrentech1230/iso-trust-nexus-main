import { ChevronRight } from "lucide-react";
import { AppLink } from "@/components/AppLink";

export type Crumb = { name: string; href: string };

export function Breadcrumbs({
  items,
  tone = "light",
}: {
  items: Crumb[];
  tone?: "light" | "dark";
}) {
  const trail: Crumb[] = [{ name: "Home", href: "/" }, ...items];
  const muted = tone === "dark" ? "text-white/70" : "text-muted-foreground";
  const strong = tone === "dark" ? "text-white" : "text-indigo-brand";

  return (
    <nav aria-label="Breadcrumb" className={`text-xs ${muted}`}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {trail.map((crumb, index) => {
          const isLast = index === trail.length - 1;
          return (
            <li key={crumb.href + crumb.name} className="flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className={`font-semibold ${strong}`}>
                  {crumb.name}
                </span>
              ) : (
                <>
                  <AppLink href={crumb.href} className="hover:underline">
                    {crumb.name}
                  </AppLink>
                  <ChevronRight className="size-3.5 opacity-60" aria-hidden="true" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
