import { useNavigate } from "@tanstack/react-router";
import { AlertCircle, Loader2, ShieldCheck } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { isPayPalConfigured } from "@/config/api";
import type { Course } from "@/data/courses";
import { formatPrice } from "@/data/courses";
import { usePayPalSdk } from "@/hooks/usePayPalSdk";
import { paymentsApi } from "@/lib/payments";

type CheckoutStatus = "form" | "processing" | "error";

// Minimal shape of the parts of the PayPal SDK we use.
type PayPalButtonsConfig = {
  style?: Record<string, unknown>;
  createOrder: () => Promise<string>;
  onApprove: (data: { orderID: string }) => Promise<void>;
  onError: (err: unknown) => void;
  onCancel?: () => void;
};
type PayPalNamespace = {
  Buttons: (config: PayPalButtonsConfig) => { render: (el: HTMLElement) => Promise<void> };
};

export function CourseCheckout({ course }: { course: Course }) {
  const navigate = useNavigate();
  const sdkStatus = usePayPalSdk();
  const buttonsRef = useRef<HTMLDivElement>(null);
  const rendered = useRef(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<CheckoutStatus>("form");
  const [error, setError] = useState<string | null>(null);

  // Keep the latest buyer details available to the PayPal callbacks without
  // re-rendering the buttons.
  const buyerRef = useRef({ name: "", email: "" });
  useEffect(() => {
    buyerRef.current = { name, email };
  }, [name, email]);

  const priceLabel = formatPrice(course.priceMinor, course.currency);

  const createOrder = useCallback(async () => {
    setError(null);
    const res = await paymentsApi.createOrder({
      courseSlug: course.slug,
      customerName: buyerRef.current.name || undefined,
      customerEmail: buyerRef.current.email || undefined,
    });
    return res.id;
  }, [course.slug]);

  const onApprove = useCallback(
    async (data: { orderID: string }) => {
      setStatus("processing");
      try {
        const res = await paymentsApi.captureOrder({
          orderId: data.orderID,
          customerName: buyerRef.current.name || undefined,
          customerEmail: buyerRef.current.email || undefined,
        });
        navigate({ to: "/training/success", search: { ref: res.reference } });
      } catch (e) {
        setStatus("error");
        setError(e instanceof Error ? e.message : "Payment could not be completed.");
      }
    },
    [navigate],
  );

  const onError = useCallback((e: unknown) => {
    setStatus("error");
    setError(e instanceof Error ? e.message : "PayPal reported an error. Please try again.");
  }, []);

  // Render the PayPal buttons once the SDK is ready.
  useEffect(() => {
    if (sdkStatus !== "ready" || rendered.current || !buttonsRef.current) return;
    const paypal = (window as unknown as { paypal?: PayPalNamespace }).paypal;
    if (!paypal) return;

    rendered.current = true;
    paypal
      .Buttons({
        style: { layout: "vertical", shape: "rect", color: "gold", label: "pay" },
        createOrder,
        onApprove,
        onError,
        onCancel: () => setStatus("form"),
      })
      .render(buttonsRef.current)
      .catch(() => onError(new Error("Unable to display PayPal buttons.")));
  }, [sdkStatus, createOrder, onApprove, onError]);

  return (
    <aside
      aria-label={`Enrol in ${course.code}`}
      className="rounded-lg border bg-card p-6 shadow-sm md:p-7"
    >
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-xs font-bold tracking-[0.14em] text-muted-foreground uppercase">
          Enrol online
        </span>
        <span className="rounded-full bg-honey-soft px-2.5 py-1 text-xs font-semibold text-honey-text">
          Indicative price
        </span>
      </div>

      <p className="mt-3 text-3xl font-bold text-indigo-brand">{priceLabel}</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Per delegate. Final fees are confirmed at checkout.
      </p>

      <div className="mt-6 space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="checkout-name">Full name</Label>
          <Input
            id="checkout-name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Smith"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="checkout-email">Email for your receipt</Label>
          <Input
            id="checkout-email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@company.com"
          />
        </div>
      </div>

      {error ? (
        <div
          role="alert"
          className="mt-4 flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span>{error}</span>
        </div>
      ) : null}

      <div className="mt-6 min-h-[52px]" aria-live="polite">
        {status === "processing" ? (
          <div className="flex items-center justify-center gap-2 rounded-md border bg-muted/40 py-3 text-sm font-semibold">
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Confirming your payment…
          </div>
        ) : sdkStatus === "loading" || sdkStatus === "idle" ? (
          <div className="flex items-center justify-center gap-2 rounded-md border bg-muted/40 py-3 text-sm text-muted-foreground">
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Loading secure checkout…
          </div>
        ) : sdkStatus === "error" ? (
          <p className="rounded-md border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
            The PayPal checkout could not load. Please refresh and try again, or contact us to book
            by invoice.
          </p>
        ) : !isPayPalConfigured() ? (
          <div className="rounded-md border border-dashed bg-muted/40 p-3 text-sm text-muted-foreground">
            Online payment is not configured in this environment. Add a PayPal client id
            (VITE_PAYPAL_CLIENT_ID) to enable the buttons.
          </div>
        ) : (
          <div ref={buttonsRef} />
        )}
      </div>

      <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
        <ShieldCheck className="size-4 text-indigo-brand" aria-hidden="true" />
        Payments are processed securely by PayPal. We never see your card details.
      </p>
    </aside>
  );
}
