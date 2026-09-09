import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { courses } from "@/data/courses";
import { standards } from "@/data/standards";
import {
  captureSource,
  getRecaptchaToken,
  submitEnquiry,
  type EnquiryPayload,
} from "@/lib/crm/bigin";

type Errors = Partial<Record<string, string>>;

const services = [
  "ISO Certification",
  "Cyber Essentials / Cyber Essentials Plus",
  "Training",
  "Inspection",
  "ESG / Carbon",
  "Certificate Transfer",
  "Other",
];

const employeeBands = ["1–10", "11–50", "51–200", "201–500", "500+"];

const fieldClass =
  "w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-indigo-soft";
const labelClass = "block text-sm font-semibold text-foreground";

export function EnquiryForm({ defaultStandard }: { defaultStandard?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [reference, setReference] = useState("");
  const [formError, setFormError] = useState("");

  const validate = (data: FormData): Errors => {
    const next: Errors = {};
    const required = ["firstName", "lastName", "email", "company", "service", "message"];
    for (const key of required) {
      if (!String(data.get(key) ?? "").trim()) next[key] = "This field is required.";
    }
    const email = String(data.get("email") ?? "");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      next["email"] = "Enter a valid email address.";
    }
    if (!data.get("consent")) next["consent"] = "Please confirm we can contact you.";
    return next;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: silently succeed for bots without submitting.
    if (String(data.get("companyWebsite") ?? "")) {
      setStatus("success");
      return;
    }

    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setFormError("Please correct the highlighted fields.");
      return;
    }

    setStatus("loading");
    setFormError("");
    const recaptchaToken = await getRecaptchaToken("enquiry");
    const payload: EnquiryPayload = {
      firstName: String(data.get("firstName")),
      lastName: String(data.get("lastName")),
      email: String(data.get("email")),
      phone: String(data.get("phone") ?? ""),
      company: String(data.get("company")),
      country: String(data.get("country") ?? ""),
      service: String(data.get("service")),
      standard: String(data.get("standard") ?? ""),
      employees: String(data.get("employees") ?? ""),
      message: String(data.get("message")),
      consent: Boolean(data.get("consent")),
      source: captureSource(),
      ...(recaptchaToken ? { recaptchaToken } : {}),
    };

    const result = await submitEnquiry(payload);
    if (result.ok) {
      setReference(result.reference);
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
      setFormError(result.error);
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-border bg-card p-8 text-center"
        aria-live="polite"
      >
        <CheckCircle2 className="mx-auto size-10 text-indigo-brand" aria-hidden="true" />
        <h2 className="mt-4 text-xl font-bold text-indigo-brand">Thank you — enquiry received</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          A member of our team will respond shortly. You will also receive an acknowledgement email.
          {reference ? (
            <>
              {" "}
              Your reference is <span className="font-semibold text-foreground">{reference}</span>.
            </>
          ) : null}
        </p>
      </div>
    );
  }

  const fieldError = (name: string) =>
    errors[name] ? (
      <p id={`${name}-error`} className="mt-1 text-xs font-medium text-destructive">
        {errors[name]}
      </p>
    ) : null;

  const invalid = (name: string) =>
    errors[name]
      ? { "aria-invalid": true as const, "aria-describedby": `${name}-error` }
      : undefined;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {formError ? (
        <div
          role="alert"
          className="flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          {formError}
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="firstName">
            First name *
          </label>
          <input id="firstName" name="firstName" className={fieldClass} {...invalid("firstName")} />
          {fieldError("firstName")}
        </div>
        <div>
          <label className={labelClass} htmlFor="lastName">
            Last name *
          </label>
          <input id="lastName" name="lastName" className={fieldClass} {...invalid("lastName")} />
          {fieldError("lastName")}
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Work email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
            {...invalid("email")}
          />
          {fieldError("email")}
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="company">
            Organisation *
          </label>
          <input id="company" name="company" className={fieldClass} {...invalid("company")} />
          {fieldError("company")}
        </div>
        <div>
          <label className={labelClass} htmlFor="country">
            Country
          </label>
          <input id="country" name="country" className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="service">
            Service required *
          </label>
          <select id="service" name="service" className={fieldClass} {...invalid("service")}>
            <option value="">Please select…</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {fieldError("service")}
        </div>
        <div>
          <label className={labelClass} htmlFor="standard">
            Standard or course
          </label>
          <select
            id="standard"
            name="standard"
            className={fieldClass}
            defaultValue={defaultStandard ?? ""}
          >
            <option value="">Not sure yet</option>
            <optgroup label="Certification">
              {standards.map((standard) => (
                <option key={standard.slug} value={standard.code}>
                  {standard.code}
                </option>
              ))}
            </optgroup>
            <optgroup label="Training">
              {courses.map((course) => (
                <option key={course.slug} value={`${course.code} Training`}>
                  {course.code} Training
                </option>
              ))}
            </optgroup>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="employees">
            Number of employees
          </label>
          <select id="employees" name="employees" className={fieldClass}>
            <option value="">Please select…</option>
            {employeeBands.map((band) => (
              <option key={band} value={band}>
                {band}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="message">
            Tell us about your scope, sites and timescales *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={fieldClass}
            {...invalid("message")}
          />
          {fieldError("message")}
        </div>
      </div>

      {/* Honeypot field — hidden from users, filled by bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="companyWebsite">Company website</label>
        <input id="companyWebsite" name="companyWebsite" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          className="mt-1 size-4 accent-[#2c2a75]"
          {...invalid("consent")}
        />
        <label htmlFor="consent" className="text-sm text-muted-foreground">
          I agree that TRAIBCERT may contact me about this enquiry. See our{" "}
          <a href="/legal/privacy" className="font-semibold text-indigo-brand underline">
            Privacy Policy
          </a>
          . *
        </label>
      </div>
      {fieldError("consent")}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 rounded-md bg-honey px-6 py-3 text-sm font-bold text-indigo-brand transition-colors hover:bg-honey-hover disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" /> Sending…
          </>
        ) : (
          "Submit enquiry"
        )}
      </button>
      <p className="text-xs text-muted-foreground">
        This form is protected by spam filtering and reCAPTCHA v3 where enabled. Submissions are
        routed to our CRM for follow-up.
      </p>
    </form>
  );
}
