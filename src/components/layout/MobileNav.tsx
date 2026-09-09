import { Link } from "@tanstack/react-router";
import { ChevronDown, Mail, Phone, X } from "lucide-react";
import { useState } from "react";
import { primaryNav, topbarLinks } from "@/config/navigation";
import { site, telHref } from "@/config/site";

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>("Certification");

  return (
    <div
      className={`fixed inset-0 z-[60] lg:hidden ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-indigo-dark/50 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        role="dialog"
        aria-label="Site navigation"
        aria-modal={open}
        className={`absolute inset-y-0 right-0 flex w-[20rem] max-w-[92vw] flex-col bg-background shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <span className="text-base font-extrabold tracking-tight text-indigo-brand">
            TRAIBCERT
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation"
            className="rounded-md p-2 text-muted-foreground hover:bg-secondary"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {primaryNav.map((item) => {
              const isOpen = expanded === item.label;
              if (!item.menu) {
                return (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className="block rounded-md px-3 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }
              return (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => setExpanded(isOpen ? null : item.label)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between rounded-md px-3 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
                  >
                    {item.label}
                    <ChevronDown
                      className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen ? (
                    <div className="space-y-4 pt-1 pb-3">
                      {item.menu.columns.map((column) => (
                        <div key={column.heading}>
                          <p className="px-3 pb-1 text-[11px] font-bold tracking-[0.14em] text-indigo-soft uppercase">
                            {column.heading}
                          </p>
                          <ul>
                            {column.links.map((link) => (
                              <li key={link.href + link.label}>
                                <Link
                                  to={link.href}
                                  onClick={onClose}
                                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-indigo-brand"
                                >
                                  {link.label}
                                  {link.tag ? (
                                    <span className="ml-2 rounded-sm bg-honey-soft px-1.5 py-0.5 text-[9px] font-bold text-honey-text uppercase">
                                      {link.tag}
                                    </span>
                                  ) : null}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>

          <div className="mt-6 space-y-2 border-t border-border px-3 pt-5 text-sm">
            <a
              href={telHref(site.phones.uk)}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <Phone className="size-4" aria-hidden="true" /> UK {site.phones.uk}
            </a>
            <a
              href={telHref(site.phones.uae)}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <Phone className="size-4" aria-hidden="true" /> UAE {site.phones.uae}
            </a>
            <a
              href={`mailto:${site.emails.info}`}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <Mail className="size-4" aria-hidden="true" /> {site.emails.info}
            </a>
            {topbarLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="block pt-1 font-medium text-indigo-brand"
                >
                  {link.label} ↗
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={onClose}
                  className="block pt-1 font-medium text-indigo-brand"
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </nav>

        <div className="border-t border-border bg-background p-4">
          <Link
            to="/contact/enquiry"
            onClick={onClose}
            className="block rounded-md bg-honey px-4 py-3 text-center text-sm font-bold text-indigo-brand hover:bg-honey-hover"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
