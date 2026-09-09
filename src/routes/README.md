# Routes

These files define the pages of the React Router SPA. Each file exports a
`Route` created via the small compatibility shim in
`src/lib/router-compat.tsx`, which keeps the original
`createFileRoute(path)({ head, loader, component })` shape while the app runs on
[React Router](https://reactrouter.com/).

The actual URL → component mapping lives in **`src/router.tsx`** (an explicit
`createBrowserRouter` config). When you add a page here, also register its path
in `src/router.tsx`.

## How a route file works

```tsx
import { createFileRoute, notFound } from "@/lib/router-compat";

export const Route = createFileRoute("/example/$slug")({
  // Synchronous data lookup (all content is in-memory data modules).
  loader: ({ params }) => {
    const item = itemsBySlug[params.slug];
    if (!item) throw notFound();
    return { item };
  },
  // SEO tags — same { meta, links, scripts } shape as before, rendered by
  // <SEO> (react-helmet-async).
  head: ({ loaderData }) => pageMeta({ title: loaderData!.item.title, ... }),
  component: ExamplePage,
});

function ExamplePage() {
  const { item } = Route.useLoaderData();
  return /* ... */;
}
```

## Conventions

| File | URL |
| --- | --- |
| `index.tsx` | `/` |
| `careers.tsx` | `/careers` |
| `certification.index.tsx` | `/certification` |
| `certification.$slug.tsx` | `/certification/:slug` (dynamic) |
| `$.tsx` | catch-all (`*`) — legacy redirects + 404 |

- Use `Link` from `react-router-dom` for literal paths, or `AppLink` (`href=`)
  for data-driven paths that come from config/data files.
- `notFound()` and `redirect({ href })` are imported from
  `@/lib/router-compat`.
- The global layout (Header, Footer, skip link) is `RootLayout`
  (`src/components/layout/RootLayout.tsx`), applied in `src/router.tsx`.
