/**
 * Frontend configuration for the Laravel payments API and PayPal SDK.
 *
 * These are read from Vite env vars at build time. During local development
 * with no `.env`, sensible defaults are used so the UI still renders. Set the
 * real values in a `.env` file (see `.env.example`) before going live.
 *
 *   VITE_API_BASE_URL      e.g. https://api.traibcert.org.uk
 *   VITE_PAYPAL_CLIENT_ID  the PayPal (sandbox or live) client id
 *   VITE_PAYPAL_CURRENCY   e.g. GBP
 */
const env = import.meta.env as Record<string, string | undefined>;

export const apiConfig = {
  /** Base URL of the Laravel API. Endpoints are appended under `/api`. */
  baseUrl: (env["VITE_API_BASE_URL"] ?? "http://localhost:8000").replace(/\/$/, ""),
  paypal: {
    clientId: env["VITE_PAYPAL_CLIENT_ID"] ?? "",
    currency: env["VITE_PAYPAL_CURRENCY"] ?? "GBP",
  },
} as const;

/** Whether the PayPal client id has been configured. */
export const isPayPalConfigured = () => apiConfig.paypal.clientId.trim().length > 0;
