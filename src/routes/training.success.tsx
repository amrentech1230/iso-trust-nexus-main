import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { AppLink } from "@/components/AppLink";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { type EnrollmentResponse, paymentsApi } from "@/lib/payments";
import { pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Training", href: "/training" },
  { name: "Payment confirmed", href: "/training/success" },
];

export const Route = createFileRoute("/training/success")({
  // Validate the ?ref= query param.
  validateSearch: (search: Record<string, unknown>): { ref?: string | undefined } => ({
    ref: typeof search["ref"] === "string" ? search["ref"] : undefined,
  }),
  head: () => {
    const meta = pageMeta({
      title: "Payment Confirmed | TRAIBCERT Training",
      description: "Your training enrolment has been confirmed.",
      path: "/training/success",
    });
    // Receipt pages should not be indexed.
    return { ...meta, meta: [...(meta.meta ?? []), { name: "robots", content: "noindex" }] };
  },
  component: SuccessPage,
});

type LoadState =
  | { status: "loading" }
  | { status: "missing" }
  | { status: "error"; message: string }
  | { status: "ready"; enrollment: EnrollmentResponse };

function SuccessPage() {
  const { ref } = Route.useSearch();
  const [state, setState] = useState<LoadState>({ status: "loading" });

  useEffect(() => {
    if (!ref) {
      setState({ status: "missing" });
      return;
    }
    let active = true;
    setState({ status: "loading" });
    paymentsApi
      .getEnrollment(ref)
      .then((enrollment) => active && setState({ status: "ready", enrollment }))
      .catch((e) =>
        active
          ? setState({
              status: "error",
              message:
                e instanceof Error ? e.message : "We could not load your enrolment details.",
            })
          : undefined,
      );
    return () => {
      active = false;
    };
  }, [ref]);

  return (
    <>
      <PageHero
        eyebrow="Thank you"
        title="Payment confirmed"
        intro="Your training enrolment has been received. A confirmation has been sent to the email you provided at checkout."
        crumbs={crumbs}
      />

      <section className="py-14 md:py-16">
        <div className="container-page max-w-2xl">
          {state.status === "loading" ? (
            <div className="flex items-center gap-3 rounded-lg border bg-card p-6 text-sm text-muted-foreground">
              <Loader2 className="size-5 animate-spin" aria-hidden="true" />
              Loading your enrolment…
            </div>
          ) : null}

          {state.status === "missing" ? (
            <div className="rounded-lg border bg-card p-6">
              <SectionHeading title="No reference found" />
              <p className="mt-3 text-sm text-muted-foreground">
                We could not find a booking reference in this link. If you have just paid, please
                check your confirmation email, or contact us and we will help.
              </p>
              <AppLink
                href="/contact"
                className="mt-5 inline-flex rounded-md bg-indigo-brand px-5 py-3 text-sm font-bold text-white"
              >
                Contact us
              </AppLink>
            </div>
          ) : null}

          {state.status === "error" ? (
            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <div className="flex items-center gap-2 text-destructive">
                <XCircle className="size-5" aria-hidden="true" />
                <h2 className="text-lg font-bold">We hit a snag</h2>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{state.message}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Your payment may still have succeeded. Please keep your PayPal receipt and contact
                us if you have any concerns.
              </p>
            </div>
          ) : null}

          {state.status === "ready" ? (
            <div className="rounded-lg border bg-card p-6 md:p-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="size-8 text-indigo-brand" aria-hidden="true" />
                <div>
                  <h2 className="text-xl font-bold">You&apos;re enrolled</h2>
                  <p className="text-sm text-muted-foreground">
                    Keep your reference for your records.
                  </p>
                </div>
              </div>

              <dl className="mt-6 divide-y text-sm">
                <div className="flex justify-between gap-4 py-3">
                  <dt className="font-semibold text-muted-foreground">Booking reference</dt>
                  <dd className="font-mono font-bold">{state.enrollment.reference}</dd>
                </div>
                {state.enrollment.course ? (
                  <div className="flex justify-between gap-4 py-3">
                    <dt className="font-semibold text-muted-foreground">Course</dt>
                    <dd className="text-right">{state.enrollment.course.title}</dd>
                  </div>
                ) : null}
                {state.enrollment.customerEmail ? (
                  <div className="flex justify-between gap-4 py-3">
                    <dt className="font-semibold text-muted-foreground">Receipt sent to</dt>
                    <dd className="text-right">{state.enrollment.customerEmail}</dd>
                  </div>
                ) : null}
                {state.enrollment.purchasedAt ? (
                  <div className="flex justify-between gap-4 py-3">
                    <dt className="font-semibold text-muted-foreground">Date</dt>
                    <dd className="text-right">
                      {new Date(state.enrollment.purchasedAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </dd>
                  </div>
                ) : null}
              </dl>

              <div className="mt-6 flex flex-wrap gap-3">
                <AppLink
                  href="/training"
                  className="inline-flex rounded-md bg-honey px-5 py-3 text-sm font-bold text-indigo-brand transition-colors hover:bg-honey-hover"
                >
                  Browse more training
                </AppLink>
                <AppLink
                  href="/contact"
                  className="inline-flex rounded-md border px-5 py-3 text-sm font-bold transition-colors hover:bg-muted"
                >
                  Contact us
                </AppLink>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
