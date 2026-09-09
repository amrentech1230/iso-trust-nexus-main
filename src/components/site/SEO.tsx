/**
 * Renders the SEO payload produced by the route `head()` functions
 * (and by `src/lib/seo.ts` helpers) using react-helmet-async.
 *
 * The shape matches what TanStack Start's head() returned:
 *   meta:  [{ title } | { name, content } | { property, content } | { charSet } | ...]
 *   links: [{ rel, href, ... }]
 *   scripts: [{ type, children }]   // e.g. application/ld+json
 */
import { Helmet } from "react-helmet-async";

type MetaTag = Record<string, string>;
type LinkTag = Record<string, string>;
type ScriptTag = { type?: string; children?: string; src?: string };

export type HeadResult = {
  meta?: MetaTag[];
  links?: LinkTag[];
  scripts?: ScriptTag[];
};

export function SEO({ head }: { head: HeadResult }) {
  const { meta = [], links = [], scripts = [] } = head;

  // A meta entry of the form { title: "..." } maps to <title>.
  const titleEntry = meta.find((m) => typeof m["title"] === "string");
  const title = titleEntry?.["title"];

  return (
    <Helmet>
      {title ? <title>{title}</title> : null}

      {meta.map((m, i) => {
        if (m["title"] !== undefined) return null; // handled by <title>
        if (m["charSet"] !== undefined) return <meta key={`m-${i}`} charSet={m["charSet"]} />;
        // name / property + content
        const { content, name, property, ...rest } = m;
        return (
          <meta
            key={`m-${i}`}
            {...(name ? { name } : {})}
            {...(property ? { property } : {})}
            {...(content !== undefined ? { content } : {})}
            {...rest}
          />
        );
      })}

      {links.map((l, i) => (
        <link key={`l-${i}`} {...l} />
      ))}

      {scripts.map((s, i) =>
        s.children ? (
          <script key={`s-${i}`} type={s.type ?? "text/javascript"}>
            {s.children}
          </script>
        ) : s.src ? (
          <script key={`s-${i}`} type={s.type ?? "text/javascript"} src={s.src} />
        ) : null,
      )}
    </Helmet>
  );
}
