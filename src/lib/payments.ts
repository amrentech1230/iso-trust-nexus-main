import { apiConfig } from "@/config/api";

/**
 * Service layer for the Laravel payments API.
 *
 * The React app never talks to PayPal's REST API directly — it only exchanges
 * opaque order IDs with our own backend, which holds the PayPal secret and is
 * the single source of truth for prices.
 */

export type CreateOrderInput = {
  courseSlug: string;
  customerName?: string | undefined;
  customerEmail?: string | undefined;
};

export type CreateOrderResponse = {
  id: string;
  status: string;
};

export type CaptureOrderInput = {
  orderId: string;
  customerName?: string | undefined;
  customerEmail?: string | undefined;
};

export type CaptureOrderResponse = {
  status: "paid";
  reference: string;
};

export type EnrollmentResponse = {
  reference: string;
  status: string;
  customerName: string | null;
  customerEmail: string | null;
  course: { slug: string; code: string; title: string } | null;
  purchasedAt: string | null;
};

class ApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  let response: Response;
  try {
    response = await fetch(`${apiConfig.baseUrl}/api${path}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(init?.headers ?? {}),
      },
      ...init,
    });
  } catch {
    throw new ApiError("We could not reach the payment service. Please try again.", 0);
  }

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const message =
      (data && typeof data.message === "string" && data.message) ||
      "Something went wrong processing your payment.";
    throw new ApiError(message, response.status);
  }

  return data as T;
}

export const paymentsApi = {
  createOrder: (input: CreateOrderInput) =>
    request<CreateOrderResponse>("/paypal/create-order", {
      method: "POST",
      body: JSON.stringify(input),
    }),

  captureOrder: (input: CaptureOrderInput) =>
    request<CaptureOrderResponse>("/paypal/capture-order", {
      method: "POST",
      body: JSON.stringify(input),
    }),

  getEnrollment: (reference: string) =>
    request<{ data: EnrollmentResponse }>(`/enrollments/${encodeURIComponent(reference)}`).then(
      (r) => r.data,
    ),
};

export { ApiError };
