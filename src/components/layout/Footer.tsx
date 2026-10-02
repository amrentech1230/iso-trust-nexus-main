import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, Mail, MapPin, MessageCircle, Phone, Youtube } from "lucide-react";
import type { ComponentType } from "react";
import { AppLink } from "@/components/AppLink";
import { footerNav } from "@/config/navigation";
import { site, telHref } from "@/config/site";

const socialIcons: Record<string, ComponentType<{ className?: string }>> = {
  LinkedIn: Linkedin,
  Facebook: Facebook,
  YouTube: Youtube,
  WhatsApp: MessageCircle,
};

export function Footer() {
  return (
    <footer className="bg-indigo-dark text-white/75">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="text-xl font-extrabold tracking-tight text-white">
            TRAIBCERT
          </Link>
          <p className="mt-3 text-sm leading-relaxed">{site.tagline}</p>
          <address className="mt-5 space-y-2 text-sm not-italic">
            <span className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-honey" aria-hidden="true" />
              <span>{site.address.inline}</span>
            </span>
            <a href={telHref(site.phones.uk)} className="flex gap-2 hover:text-honey">
              <Phone className="mt-0.5 size-4 shrink-0 text-honey" aria-hidden="true" />
              UK {site.phones.uk}
            </a>
            <a href={telHref(site.phones.uae)} className="flex gap-2 hover:text-honey">
              <Phone className="mt-0.5 size-4 shrink-0 text-honey" aria-hidden="true" />
              UAE {site.phones.uae}
            </a>
            <a href={`mailto:${site.emails.info}`} className="flex gap-2 hover:text-honey">
              <Mail className="mt-0.5 size-4 shrink-0 text-honey" aria-hidden="true" />
              {site.emails.info}
            </a>
            <a href={`mailto:${site.emails.training}`} className="flex gap-2 hover:text-honey">
              <Mail className="mt-0.5 size-4 shrink-0 text-honey" aria-hidden="true" />
              {site.emails.training}
            </a>
          </address>

          <ul className="mt-5 flex flex-wrap gap-2">
            {site.accreditations.map((a) => (
              <li
                key={a.label}
                className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1.5 text-[11px] font-semibold text-white"
              >
                {a.label}
              </li>
            ))}
          </ul>

          <ul className="mt-5 flex gap-2">
            {site.socials.map((social) => {
              const Icon = socialIcons[social.label];
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                    className="grid size-9 place-items-center rounded-md border border-white/15 transition-colors hover:border-honey hover:text-honey"
                  >
                    {Icon ? (
                      <Icon className="size-4" />
                    ) : (
                      <span className="text-xs font-bold">X</span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {footerNav.map((column) => (
          <nav key={column.heading} aria-label={column.heading}>
            <h2 className="text-[11px] font-bold tracking-[0.16em] text-honey uppercase">
              {column.heading}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {column.links.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="hover:text-honey"
                    >
                      {link.label} ↗
                    </a>
                  ) : (
                    <AppLink href={link.href} className="hover:text-honey">
                      {link.label}
                    </AppLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>Copyrights © 2026 TRAIBCERT LIMITED. All Rights Reserved.</p>
          <p>Registered in England &amp; Wales</p>
        </div>
      </div>
    </footer>
  );
}
