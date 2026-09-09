/**
 * React Router configuration for the SPA. Each route file still exports a
 * `Route` created by the compat shim (src/lib/router-compat.tsx); here we map
 * every URL path to that route's `Element`.
 */
import { createBrowserRouter, type RouteObject } from "react-router-dom";

import { RootLayout } from "@/components/layout/RootLayout";
import { RouteErrorBoundary } from "@/components/layout/RouteErrorBoundary";

import { Route as HomeRoute } from "@/routes/index";
import { Route as CareersRoute } from "@/routes/careers";
import { Route as CertificationIndexRoute } from "@/routes/certification.index";
import { Route as CertificationSlugRoute } from "@/routes/certification.$slug";
import { Route as ContactIndexRoute } from "@/routes/contact.index";
import { Route as ContactEnquiryRoute } from "@/routes/contact.enquiry";
import { Route as LegalSlugRoute } from "@/routes/legal.$slug";
import { Route as TrainingIndexRoute } from "@/routes/training.index";
import { Route as TrainingSlugRoute } from "@/routes/training.$slug";
import { Route as BlogIndexRoute } from "@/routes/resources.blog.index";
import { Route as BlogSlugRoute } from "@/routes/resources.blog.$slug";
import { Route as DownloadsIndexRoute } from "@/routes/resources.downloads.index";
import { Route as DownloadsSlugRoute } from "@/routes/resources.downloads.$slug";
import { Route as IndustriesIndexRoute } from "@/routes/resources.industries.index";
import { Route as IndustriesSlugRoute } from "@/routes/resources.industries.$slug";
import { Route as CertificateTransferRoute } from "@/routes/resources.certificate-transfer";
import { Route as FaqRoute } from "@/routes/resources.faq";
import { Route as FurtherTopicsRoute } from "@/routes/resources.further-topics";
import { Route as KnowledgeBaseRoute } from "@/routes/resources.knowledge-base";
import { Route as SitemapRoute } from "@/routes/resources.sitemap";
import { Route as SplatRoute } from "@/routes/$";

const routes: RouteObject[] = [
  {
    element: <RootLayout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { index: true, element: <HomeRoute.Element /> },
      { path: "careers", element: <CareersRoute.Element /> },

      { path: "certification", element: <CertificationIndexRoute.Element /> },
      { path: "certification/:slug", element: <CertificationSlugRoute.Element /> },

      { path: "contact", element: <ContactIndexRoute.Element /> },
      { path: "contact/enquiry", element: <ContactEnquiryRoute.Element /> },

      { path: "legal/:slug", element: <LegalSlugRoute.Element /> },

      { path: "training", element: <TrainingIndexRoute.Element /> },
      { path: "training/:slug", element: <TrainingSlugRoute.Element /> },

      { path: "resources/blog", element: <BlogIndexRoute.Element /> },
      { path: "resources/blog/:slug", element: <BlogSlugRoute.Element /> },
      { path: "resources/downloads", element: <DownloadsIndexRoute.Element /> },
      { path: "resources/downloads/:slug", element: <DownloadsSlugRoute.Element /> },
      { path: "resources/industries", element: <IndustriesIndexRoute.Element /> },
      { path: "resources/industries/:slug", element: <IndustriesSlugRoute.Element /> },
      { path: "resources/certificate-transfer", element: <CertificateTransferRoute.Element /> },
      { path: "resources/faq", element: <FaqRoute.Element /> },
      { path: "resources/further-topics", element: <FurtherTopicsRoute.Element /> },
      { path: "resources/knowledge-base", element: <KnowledgeBaseRoute.Element /> },
      { path: "resources/sitemap", element: <SitemapRoute.Element /> },

      // Splat / catch-all: handles legacy redirects then renders the 404 page.
      { path: "*", element: <SplatRoute.Element /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
