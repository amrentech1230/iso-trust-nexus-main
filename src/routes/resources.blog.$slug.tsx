import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { postsBySlug } from "@/data/insights";

export const Route = createFileRoute("/resources/blog/$slug")({
  beforeLoad: ({ params }) => {
    const post = postsBySlug[params.slug];
    if (!post) throw notFound();
    throw redirect({ href: post.url, statusCode: 301 });
  },
});
