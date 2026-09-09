/**
 * React Router error boundary — replaces the old TanStack `errorComponent`.
 * Shown when a route throws during render.
 */
import { useEffect } from "react";
import { useRouteError, useRevalidator } from "react-router-dom";

import { reportLovableError } from "@/lib/lovable-error-reporting";

export function RouteErrorBoundary() {
  const error = useRouteError();
  const { revalidate } = useRevalidator();

  useEffect(() => {
    reportLovableError(error, { boundary: "react_router_error_boundary" });
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => revalidate()}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}
