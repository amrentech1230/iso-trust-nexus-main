/**
 * Root layout for the React Router SPA. Replaces the old TanStack
 * `__root.tsx` RootComponent: global QueryClientProvider, skip link,
 * Header, the routed <Outlet/>, Footer, and scroll restoration.
 *
 * Global <head> defaults (charset, viewport, fonts, favicon) live in
 * index.html; the Organization JSON-LD is injected here via Helmet so it
 * is present on every page.
 */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { Outlet, ScrollRestoration } from "react-router-dom";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/config/site";

const queryClient = new QueryClient();

const organizationJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  alternateName: site.name,
  description: site.tagline,
  email: site.emails.info,
  telephone: site.phones.uk,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Suit 7, 2nd Floor, The Atrium, 31 Church Road",
    addressLocality: "Ashford, Middlesex",
    postalCode: "TW15 2UD",
    addressCountry: "GB",
  },
});

export function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Helmet>
        <script type="application/ld+json">{organizationJsonLd}</script>
      </Helmet>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[70] focus:rounded-md focus:bg-indigo-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </QueryClientProvider>
  );
}
