/**
 * Compatibility shim that lets the route files keep their original
 * TanStack-Router-style shape (`createFileRoute(...)({ head, loader, component })`)
 * while the app actually runs on React Router (react-router-dom).
 *
 * Why: converting the app from TanStack Start to a plain React SPA otherwise
 * means rewriting 23 route files. Instead, `createFileRoute` returns a small
 * `RouteModule` that:
 *   - renders the `component`
 *   - runs the synchronous `loader` (all app data is in-memory) and exposes it
 *     via `Route.useLoaderData()`
 *   - renders SEO tags from `head()` via <SEO> (react-helmet-async)
 *
 * `notFound()` and `redirect()` mirror the TanStack throwing-control-flow API.
 */
import { type ReactNode } from "react";
import { Navigate, useParams } from "react-router-dom";
import { SEO, type HeadResult } from "@/components/site/SEO";

/** Thrown by a loader to signal a 404. Rendered as the not-found UI. */
export class NotFoundError extends Error {
  constructor() {
    super("NotFound");
    this.name = "NotFoundError";
  }
}

export function notFound(): never {
  throw new NotFoundError();
}

/** Thrown by beforeLoad/loader to signal a client-side redirect. */
export class RedirectError extends Error {
  href: string;
  statusCode: number;
  constructor(opts: { href: string; statusCode?: number }) {
    super("Redirect");
    this.name = "RedirectError";
    this.href = opts.href;
    this.statusCode = opts.statusCode ?? 302;
  }
}

export function redirect(opts: { href: string; statusCode?: number }): never {
  throw new RedirectError(opts);
}

type LoaderArgs = { params: Record<string, string> };
type BeforeLoadArgs = { location: { pathname: string; search: string; hash: string } };

type RouteConfig<TLoaderData> = {
  head?: (args: { params: Record<string, string>; loaderData?: TLoaderData }) => HeadResult;
  loader?: (args: LoaderArgs) => TLoaderData;
  beforeLoad?: (args: BeforeLoadArgs) => void;
  component: () => ReactNode;
  // Accepted for API-compatibility with the old root route; unused in the SPA.
  shellComponent?: (props: { children: ReactNode }) => ReactNode;
  notFoundComponent?: () => ReactNode;
  errorComponent?: (props: { error: Error; reset: () => void }) => ReactNode;
};

export type RouteModule<TLoaderData = unknown> = {
  Element: () => ReactNode;
  useLoaderData: () => TLoaderData;
  useParams: () => Record<string, string>;
  config: RouteConfig<TLoaderData>;
};

/**
 * A tiny stand-in for TanStack's `createFileRoute`. The `path` argument is kept
 * for readability/parity but the real path mapping lives in `src/router.tsx`.
 */
export function createFileRoute(_path: string) {
  return function defineRoute<TLoaderData>(
    config: RouteConfig<TLoaderData>,
  ): RouteModule<TLoaderData> {
    const route: RouteModule<TLoaderData> = {
      useParams: () => useParams() as Record<string, string>,
      useLoaderData: () => {
        const params = useParams() as Record<string, string>;
        // Loaders are synchronous (in-memory lookups), so it's safe to run here.
        return config.loader ? config.loader({ params }) : (undefined as TLoaderData);
      },
      Element: () => <RouteRenderer config={config} />,
      config,
    };
    return route;
  };
}

function RouteRenderer<TLoaderData>({ config }: { config: RouteConfig<TLoaderData> }) {
  const params = useParams() as Record<string, string>;

  // beforeLoad (used by the splat route for legacy redirects).
  if (config.beforeLoad) {
    try {
      config.beforeLoad({
        location: {
          pathname: window.location.pathname,
          search: window.location.search,
          hash: window.location.hash,
        },
      });
    } catch (err) {
      if (err instanceof RedirectError) {
        return <Navigate to={err.href} replace />;
      }
      throw err;
    }
  }

  // Run the loader; a thrown NotFoundError renders the not-found UI.
  let loaderData: TLoaderData | undefined;
  if (config.loader) {
    try {
      loaderData = config.loader({ params });
    } catch (err) {
      if (err instanceof NotFoundError) {
        return <NotFound />;
      }
      if (err instanceof RedirectError) {
        return <Navigate to={err.href} replace />;
      }
      throw err;
    }
  }

  const head = config.head?.({ params, loaderData });

  return (
    <>
      {head ? <SEO head={head} /> : null}
      {config.component()}
    </>
  );
}

/** Shared 404 UI, imported lazily to avoid a circular import with the route. */
function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-indigo-brand">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </a>
          <a
            href="/resources/sitemap"
            className="inline-flex items-center justify-center rounded-md border border-input px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent/10"
          >
            View sitemap
          </a>
        </div>
      </div>
    </div>
  );
}
