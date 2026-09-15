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

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-lg font-extrabold tracking-[0.06em] text-white uppercase">
      {children}
      <span className="mt-2 block h-[3px] w-10 bg-honey" aria-hidden="true" />
    </h2>
  );
}

const allLinks = footerNav.flatMap((column) => column.links);
const half = Math.ceil(allLinks.length / 2);
const linkColumns = [allLinks.slice(0, half), allLinks.slice(half)];

export function Footer() {
  return (
    <footer className="bg-indigo-dark text-white/75">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-3">
        {/* About us */}
        <div>
          <FooterHeading>About Us</FooterHeading>
          <Link to="/" className="mt-8 inline-block">
    <img
              src="https://traibcert.org.uk/images/logo.png"
              alt="TRAIBCERT"
              className="h-auto w-[60%]"
            />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">{site.tagline}</p>
          <ul className="mt-6 space-y-3">
            {site.accreditations.map((a) => (
              <li
                key={a.label}
                className="max-w-xs rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white"
              >
                {a.label}
                <span className="block text-[11px] font-normal text-white/60">{a.note}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact us */}
        <div>
          <FooterHeading>Contact Us</FooterHeading>
          <address className="mt-8 space-y-4 text-sm not-italic">
            <span className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-honey" aria-hidden="true" />
              <span className="max-w-xs">{site.address.inline}</span>
            </span>
            <a href={`mailto:${site.emails.info}`} className="flex gap-3 hover:text-honey">
              <Mail className="mt-0.5 size-4 shrink-0 text-honey" aria-hidden="true" />
              {site.emails.info}
            </a>
            <a href={`mailto:${site.emails.training}`} className="flex gap-3 hover:text-honey">
              <Mail className="mt-0.5 size-4 shrink-0 text-honey" aria-hidden="true" />
              {site.emails.training}
            </a>
            <span className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-honey" aria-hidden="true" />
              <span className="space-y-1">
                <a href={telHref(site.phones.uk)} className="block hover:text-honey">
                  <strong className="font-bold text-white">UK:</strong> {site.phones.uk}
                </a>
                <a href={telHref(site.phones.uae)} className="block hover:text-honey">
                  <strong className="font-bold text-white">UAE:</strong> {site.phones.uae}
                </a>
              </span>
            </span>
          </address>

          <ul className="mt-7 flex gap-3">
            {site.socials.map((social) => {
              const Icon = socialIcons[social.label];
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                    className="grid size-10 place-items-center rounded-full border border-white/15 transition-colors hover:border-honey hover:text-honey"
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

        {/* Informations */}
        <nav aria-label="Footer links">
          <FooterHeading>Informations</FooterHeading>
          <div className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {linkColumns.map((column, index) => (
              <ul key={index} className="space-y-3 text-sm">
                {column.map((link) => (
                  <li key={link.label} className="flex gap-3">
                    <span
                      className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-honey"
                      aria-hidden="true"
                    />
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
            ))}
          </div>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>Copyrights © 2026 {site.legalName}. All Rights Reserved.</p>
          <p>Registered in England &amp; Wales</p>
        </div>
      </div>
    </footer>
  );
}
