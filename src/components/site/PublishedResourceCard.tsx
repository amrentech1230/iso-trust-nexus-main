import { AppLink } from "@/components/AppLink";
import { resourceServiceKind, type PublishedResource } from "@/data/published-resources";

export function PublishedResourceCard({ resource }: { resource: PublishedResource }) {
  const topic = resource.topics[0] ?? resource.category;

  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6">
      <div className="flex flex-wrap gap-2 text-xs font-bold text-indigo-brand">
        <span className="rounded-full bg-muted px-3 py-1">{resource.type}</span>
        <span className="rounded-full bg-muted px-3 py-1">{resource.category}</span>
      </div>
      <AppLink
        href={resource.url}
        className="mt-4 text-lg leading-snug font-bold text-indigo-brand hover:underline"
      >
        {resource.title}
      </AppLink>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {resource.excerpt}
      </p>
      <p className="mt-5 border-t border-border pt-4 text-sm font-semibold text-indigo-brand">
        TRAIBCERT {resourceServiceKind(resource)}: {topic} →
      </p>
    </article>
  );
}
