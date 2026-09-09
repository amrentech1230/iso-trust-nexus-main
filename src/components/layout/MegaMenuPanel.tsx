import { Link } from "@tanstack/react-router";
import type { KeyboardEvent } from "react";
import type { PrimaryNavItem } from "@/config/navigation";
import { FeaturedTile } from "./FeaturedTile";

const widthClass: Record<NonNullable<PrimaryNavItem["menu"]>["kind"], string> = {
  mega: "left-1/2 -translate-x-1/2 w-[min(72rem,calc(100vw-2.5rem))]",
  wide: "left-0 w-[min(32.5rem,calc(100vw-2.5rem))]",
  simple: "left-0 w-[min(20rem,calc(100vw-2.5rem))]",
};

export function MegaMenuPanel({
  item,
  onClose,
}: {
  item: PrimaryNavItem & { menu: NonNullable<PrimaryNavItem["menu"]> };
  onClose: () => void;
}) {
  const { menu } = item;

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    const links = Array.from(
      event.currentTarget.querySelectorAll<HTMLAnchorElement>("a[href]"),
    ).filter((el) => el.offsetParent !== null);
    const index = links.indexOf(document.activeElement as HTMLAnchorElement);
    if (index === -1) return;
    event.preventDefault();
    const next = event.key === "ArrowDown" ? index + 1 : index - 1;
    links[(next + links.length) % links.length]?.focus();
  };

  const gridClass =
    menu.kind === "mega"
      ? `grid gap-x-8 gap-y-6 ${
          menu.featured ? "lg:grid-cols-[1.15fr_1fr_0.85fr_0.9fr_1fr]" : "lg:grid-cols-4"
        }`
      : "grid gap-6";

  return (
    <div
      onKeyDown={handleKeyDown}
      className={`absolute top-full ${widthClass[menu.kind]} animate-fade-up rounded-xl border border-border bg-popover p-6 shadow-[0_24px_60px_-24px_rgba(26,24,84,0.35)]`}
    >
      <div className={gridClass}>
        {menu.columns.map((column) => (
          <div key={column.heading} className="min-w-0">
            <p className="mb-3 text-[11px] font-bold tracking-[0.14em] text-indigo-soft uppercase">
              {column.heading}
            </p>
            <ul
              className={
                menu.kind === "wide"
                  ? "max-h-[60vh] space-y-0.5 overflow-y-auto pr-1"
                  : "max-h-[62vh] space-y-0.5 overflow-y-auto pr-1"
              }
            >
              {column.links.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    to={link.href}
                    onClick={onClose}
                    className="group block rounded-md px-2 py-1.5 transition-colors hover:bg-secondary focus-visible:bg-secondary"
                  >
                    <span className="flex items-baseline gap-2">
                      <span className="text-sm font-semibold text-foreground group-hover:text-indigo-brand">
                        {link.label}
                      </span>
                      {link.tag ? (
                        <span
                          className={`rounded-sm px-1.5 py-0.5 text-[9px] font-bold tracking-wider uppercase ${
                            link.tag === "NEW"
                              ? "bg-honey-soft text-honey-text"
                              : "bg-secondary text-indigo-brand"
                          }`}
                        >
                          {link.tag}
                        </span>
                      ) : null}
                    </span>
                    {link.note ? (
                      <span className="mt-0.5 block text-xs text-muted-foreground">
                        {link.note}
                      </span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {menu.featured ? <FeaturedTile tile={menu.featured} onNavigate={onClose} /> : null}
      </div>
    </div>
  );
}
