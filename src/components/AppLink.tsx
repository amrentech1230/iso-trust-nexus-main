import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";

type AppLinkProps = Omit<ComponentProps<typeof Link>, "to"> & { href: string };

/**
 * Link wrapper for configuration-driven navigation, where hrefs come from
 * data files rather than literal route paths.
 */
export function AppLink({ href, ...props }: AppLinkProps) {
  return <Link to={href as never} {...props} />;
}
