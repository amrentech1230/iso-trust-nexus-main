import { Link } from "@tanstack/react-router";
import { Globe, Mail, Phone } from "lucide-react";
import { site, telHref } from "@/config/site";
import { topbarLinks } from "@/config/navigation";

export function TopBar({ hidden }: { hidden: boolean }) {
  return (
    <div
      aria-hidden={hidden}
      className={`hidden overflow-hidden bg-indigo-dark text-[13px] text-white/85 transition-[max-height,opacity] duration-300 lg:block ${
        hidden ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
      }`}
    >
      <div className="container-page flex h-10 items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <a
            href={telHref(site.phones.uk)}
            className="inline-flex items-center gap-1.5 hover:text-honey"
          >
            <Phone className="size-3.5" aria-hidden="true" />
            <span className="sr-only">United Kingdom telephone</span>UK {site.phones.uk}
          </a>
          <a
            href={telHref(site.phones.uae)}
            className="inline-flex items-center gap-1.5 hover:text-honey"
          >
            <Phone className="size-3.5" aria-hidden="true" />
            <span className="sr-only">United Arab Emirates telephone</span>UAE {site.phones.uae}
          </a>
          <a
            href={`mailto:${site.emails.info}`}
            className="inline-flex items-center gap-1.5 hover:text-honey"
          >
            <Mail className="size-3.5" aria-hidden="true" />
            {site.emails.info}
          </a>
        </div>
        <div className="flex items-center gap-5">
          {topbarLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-honey"
              >
                {link.label} ↗
              </a>
            ) : (
              <Link key={link.label} to={link.href} className="hover:text-honey">
                {link.label}
              </Link>
            ),
          )}
          <span className="inline-flex items-center gap-1.5 border-l border-white/20 pl-5">
            <Globe className="size-3.5" aria-hidden="true" />
            <span className="font-medium">EN</span>
          </span>
        </div>
      </div>
    </div>
  );
}
