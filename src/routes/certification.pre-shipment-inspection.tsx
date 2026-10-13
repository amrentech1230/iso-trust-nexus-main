import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/certification/pre-shipment-inspection")({
  beforeLoad: () => {
    throw redirect({
      href: "/certification/what-is-pre-shipment-inspection",
      statusCode: 301,
    });
  },
});
