import { Link } from "react-router-dom";
import { ChevronDown, Menu, Phone, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { primaryNav } from "@/config/navigation";
import { site, telHref } from "@/config/site";
import { MegaMenuPanel } from "./MegaMenuPanel";
import { MobileNav } from "./MobileNav";
import { SearchDialog } from "./SearchDialog";
import { TopBar } from "./TopBar";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <TopBar hidden={scrolled} />
      <div
        className={`border-b bg-background transition-shadow duration-300 ${
          scrolled
            ? "border-transparent shadow-[0_6px_24px_-12px_rgba(26,24,84,0.35)]"
            : "border-border"
        }`}
      >
        <div className="container-page flex h-[78px] items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3" aria-label="TRAIBCERT home">
            <span className="gradient-indigo grid size-10 place-items-center rounded-lg text-base font-black text-white">
              T
            </span>
            <span className="leading-none">
              <span className="block text-xl font-extrabold tracking-tight text-indigo-brand">
                TRAIBCERT
              </span>
              <span className="mt-1 hidden text-[10.5px] font-medium tracking-[0.16em] text-muted-foreground uppercase sm:block">
                Certification · Training · Inspection
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden lg:block" onMouseLeave={scheduleClose}>
            <ul className="flex items-center gap-1">
              {primaryNav.map((item) => {
                const isOpen = openMenu === item.label;
                return (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => {
                      cancelClose();
                      setOpenMenu(item.menu ? item.label : null);
                    }}
                  >
                    {item.menu ? (
                      <button
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                        onClick={() => setOpenMenu(isOpen ? null : item.label)}
                        className={`inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                          isOpen
                            ? "bg-secondary text-indigo-brand"
                            : "text-foreground hover:text-indigo-brand"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        />
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        activeOptions={{ exact: true }}
                        activeProps={{ className: "text-indigo-brand" }}
                        className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:text-indigo-brand"
                      >
                        {item.label}
                      </Link>
                    )}
                    {item.menu && isOpen ? (
                      <MegaMenuPanel
                        item={item as typeof item & { menu: NonNullable<typeof item.menu> }}
                        onClose={() => setOpenMenu(null)}
                      />
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={telHref(site.phones.uk)}
              className="hidden items-center gap-2 rounded-md px-2 py-2 text-sm font-semibold text-indigo-brand xl:inline-flex"
            >
              <Phone className="size-4" aria-hidden="true" />
              {site.phones.uk}
            </a>
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search the site"
              className="rounded-md p-2.5 text-indigo-brand transition-colors hover:bg-secondary"
            >
              <Search className="size-5" aria-hidden="true" />
            </button>
            <Link
              to="/contact/enquiry"
              className="hidden rounded-md bg-honey px-4 py-2.5 text-sm font-bold text-indigo-brand transition-colors hover:bg-honey-hover sm:inline-flex"
            >
              Get a Quote
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation"
              aria-expanded={mobileOpen}
              className="rounded-md p-2.5 text-indigo-brand transition-colors hover:bg-secondary lg:hidden"
            >
              <Menu className="size-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  );
}
