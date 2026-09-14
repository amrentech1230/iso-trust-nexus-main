import { useEffect, useState } from "react";
import { apiConfig, isPayPalConfigured } from "@/config/api";

type SdkStatus = "idle" | "loading" | "ready" | "error" | "unconfigured";

// Shared promise so the SDK <script> is only ever injected once, even if
// multiple components mount the PayPal buttons.
let sdkPromise: Promise<void> | null = null;

function loadPayPalSdk(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("PayPal SDK can only load in the browser"));
  }
  if ((window as unknown as { paypal?: unknown }).paypal) {
    return Promise.resolve();
  }
  if (sdkPromise) return sdkPromise;

  sdkPromise = new Promise<void>((resolve, reject) => {
    const params = new URLSearchParams({
      "client-id": apiConfig.paypal.clientId,
      currency: apiConfig.paypal.currency,
      intent: "capture",
      components: "buttons",
    });
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?${params.toString()}`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      sdkPromise = null;
      reject(new Error("Failed to load the PayPal SDK"));
    };
    document.head.appendChild(script);
  });

  return sdkPromise;
}

/**
 * Lazily loads the PayPal JS SDK and reports its status. Returns
 * "unconfigured" when no client id is set, so the UI can show a graceful
 * fallback instead of a broken button.
 */
export function usePayPalSdk(): SdkStatus {
  const [status, setStatus] = useState<SdkStatus>(() =>
    isPayPalConfigured() ? "idle" : "unconfigured",
  );

  useEffect(() => {
    if (!isPayPalConfigured()) {
      setStatus("unconfigured");
      return;
    }
    let active = true;
    setStatus("loading");
    loadPayPalSdk()
      .then(() => active && setStatus("ready"))
      .catch(() => active && setStatus("error"));
    return () => {
      active = false;
    };
  }, []);

  return status;
}
