import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/resources/blog/")({
  beforeLoad: () => {
    throw redirect({ href: "/resources/articles", statusCode: 301 });
  },
});
