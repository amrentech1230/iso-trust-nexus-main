/**
 * Client-side submission helpers for enquiry and career forms.
 * Career applications are stored by the Laravel API, including private file
 * attachments. General enquiries retain their separate Bigin integration.
 */
import { apiConfig } from "@/config/api";

export type EnquirySource = {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  referrer?: string;
  landingPath?: string;
};

export type EnquiryPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  service: string;
  standard?: string;
  industry?: string;
  employees?: string;
  message: string;
  consent: boolean;
  recaptchaToken?: string;
  source: EnquirySource;
};

export type EnquiryResult = { ok: true; reference: string } | { ok: false; error: string };
export type CareerApplicationResult =
  { ok: true; reference: string } | { ok: false; error: string };

export async function submitCareerApplication(
  formData: FormData,
): Promise<CareerApplicationResult> {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/api/career-applications`, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    });
    const data = (await response.json().catch(() => null)) as {
      reference?: string;
      message?: string;
      errors?: Record<string, string[]>;
    } | null;
    if (!response.ok) {
      const validationMessage = data?.errors ? Object.values(data.errors).flat()[0] : undefined;
      return {
        ok: false,
        error: validationMessage ?? data?.message ?? "We could not submit your application.",
      };
    }
    if (!data?.reference) {
      return { ok: false, error: "The server did not confirm your application. Please try again." };
    }
    return { ok: true, reference: data.reference };
  } catch {
    return { ok: false, error: "Network error. Please try again or email us directly." };
  }
}

const isConfigured = () => Boolean(import.meta.env["VITE_BIGIN_ENABLED"]);

export async function submitEnquiry(payload: EnquiryPayload): Promise<EnquiryResult> {
  try {
    if (!isConfigured()) {
      // Mocked response until Zoho Bigin credentials are connected.
      await new Promise((resolve) => setTimeout(resolve, 900));
      if (!payload.email.includes("@")) return { ok: false, error: "Invalid email address." };
      return { ok: true, reference: `TBC-${Date.now().toString().slice(-6)}` };
    }

    const response = await fetch("/api/public/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) return { ok: false, error: "We could not submit your enquiry." };
    const data = (await response.json()) as { reference?: string };
    return { ok: true, reference: data.reference ?? "received" };
  } catch {
    return { ok: false, error: "Network error. Please try again or email us directly." };
  }
}

/** reCAPTCHA v3 hook point — returns undefined until a site key is configured. */
export async function getRecaptchaToken(action = "enquiry"): Promise<string | undefined> {
  const siteKey = import.meta.env["VITE_RECAPTCHA_SITE_KEY"] as string | undefined;
  const grecaptcha = (globalThis as { grecaptcha?: { execute?: unknown } }).grecaptcha as
    { execute: (key: string, opts: { action: string }) => Promise<string> } | undefined;
  if (!siteKey || !grecaptcha?.execute) return undefined;
  return grecaptcha.execute(siteKey, { action });
}

export const captureSource = (): EnquirySource => {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const get = (key: string) => params.get(key) ?? undefined;
  const source: EnquirySource = {
    landingPath: window.location.pathname,
  };
  const map: [keyof EnquirySource, string][] = [
    ["utmSource", "utm_source"],
    ["utmMedium", "utm_medium"],
    ["utmCampaign", "utm_campaign"],
    ["utmTerm", "utm_term"],
    ["utmContent", "utm_content"],
  ];
  for (const [key, param] of map) {
    const value = get(param);
    if (value) source[key] = value;
  }
  if (document.referrer) source.referrer = document.referrer;
  return source;
};
