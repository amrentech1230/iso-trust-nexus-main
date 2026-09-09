import { ArrowRight, BadgeCheck, Quote, Star } from "lucide-react";
import * as Icons from "lucide-react";
import type { ComponentType } from "react";
import { AppLink } from "@/components/AppLink";
import type { Course } from "@/data/courses";
import type { Industry } from "@/data/industries";
import type { Post } from "@/data/insights";
import type { Standard } from "@/data/standards";

const iconSet = Icons as unknown as Record<string, ComponentType<{ className?: string }>>;

export function StandardCard({ standard }: { standard: Standard }) {
  return (
    <AppLink
      href={`/certification/${standard.slug}`}
      className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-indigo-soft/40 hover:shadow-[0_18px_40px_-24px_rgba(26,24,84,0.35)]"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="text-sm font-bold text-indigo-brand">{standard.code}</span>
        {standard.tag ? (
          <span className="rounded-sm bg-honey-soft px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-honey-text uppercase">
            {standard.tag}
          </span>
        ) : null}
      </div>
      <p className="mt-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
        {standard.discipline}
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {standard.summary}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-brand">
        Learn more
        <ArrowRight
          className="size-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </AppLink>
  );
}

export function CourseCard({ course }: { course: Course }) {
  return (
    <AppLink
      href={`/training/${course.slug}`}
      className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-indigo-soft/40 hover:shadow-[0_18px_40px_-24px_rgba(26,24,84,0.35)]"
    >
      <span className="text-xs font-bold tracking-wide text-honey-text uppercase">
        {course.category}
      </span>
      <h3 className="mt-2 text-base font-bold text-indigo-brand">{course.code}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{course.summary}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {course.modules.map((module) => (
          <li
            key={module.level}
            className="rounded-md bg-secondary px-2 py-1 text-[11px] font-semibold text-indigo-brand"
          >
            {module.level}
          </li>
        ))}
      </ul>
      <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-border pt-4 text-xs">
        <div>
          <dt className="text-muted-foreground">Duration</dt>
          <dd className="font-semibold text-foreground">
            {course.modules[0]?.duration} – {course.modules[course.modules.length - 1]?.duration}
          </dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Price</dt>
          <dd className="font-semibold text-foreground">On request</dd>
        </div>
      </dl>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-brand">
        View course
        <ArrowRight
          className="size-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </AppLink>
  );
}

export function IndustryCard({ industry }: { industry: Industry }) {
  const Icon = iconSet[industry.icon] ?? BadgeCheck;
  return (
    <AppLink
      href={`/resources/industries/${industry.slug}`}
      className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-indigo-soft/40 hover:shadow-[0_18px_40px_-24px_rgba(26,24,84,0.35)]"
    >
      <span className="grid size-10 place-items-center rounded-lg bg-secondary text-indigo-brand">
        <Icon className="size-5" />
      </span>
      <h3 className="mt-3 text-sm font-bold text-indigo-brand">{industry.name}</h3>
      <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
        {industry.summary}
      </p>
    </AppLink>
  );
}

export function ServiceCard({
  title,
  body,
  href,
  icon,
}: {
  title: string;
  body: string;
  href: string;
  icon: string;
}) {
  const Icon = iconSet[icon] ?? BadgeCheck;
  return (
    <AppLink
      href={href}
      className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-indigo-soft/40 hover:shadow-[0_24px_50px_-28px_rgba(26,24,84,0.4)]"
    >
      <span className="gradient-indigo grid size-12 place-items-center rounded-xl text-white">
        <Icon className="size-6" />
      </span>
      <h3 className="mt-5 text-lg font-bold text-indigo-brand">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-indigo-brand">
        Learn More
        <ArrowRight
          className="size-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </AppLink>
  );
}

export function BlogCard({ post }: { post: Post }) {
  return (
    <AppLink
      href={`/resources/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(26,24,84,0.35)]"
    >
      <div className="gradient-indigo relative h-40 w-full">
        <span className="absolute bottom-3 left-4 rounded-md bg-honey px-2 py-1 text-[11px] font-bold text-indigo-brand">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs text-muted-foreground">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <span aria-hidden="true"> · </span>
          {post.readingTime}
        </p>
        <h3 className="mt-2 text-base leading-snug font-bold text-indigo-brand">{post.title}</h3>
        <p className="mt-2 flex-1 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-brand">
          Read Article
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </AppLink>
  );
}

export function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <figure className="flex h-full flex-col rounded-xl border border-border bg-card p-6">
      <Quote className="size-6 text-honey" aria-hidden="true" />
      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground">
        {quote}
      </blockquote>
      <div className="mt-4 flex gap-0.5" aria-label="Placeholder rating">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="size-4 fill-honey text-honey" aria-hidden="true" />
        ))}
      </div>
      <figcaption className="mt-3 text-xs text-muted-foreground">
        <span className="block font-bold text-indigo-brand">{name}</span>
        {role}
      </figcaption>
    </figure>
  );
}

export function AccreditationBadge({ label, note }: { label: string; note: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4">
      <BadgeCheck className="size-7 shrink-0 text-indigo-brand" aria-hidden="true" />
      <div>
        <p className="text-sm font-bold text-indigo-brand">{label}</p>
        <p className="text-xs text-muted-foreground">{note}</p>
      </div>
    </div>
  );
}
