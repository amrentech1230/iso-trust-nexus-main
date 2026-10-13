import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/certification/inspection")({
  component: InspectionLayout,
});

function InspectionLayout() {
  return <Outlet />;
}
