import { AlertCircle, CheckCircle2, Loader2, Plus, Trash2, Upload } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { captureSource, submitEnquiry } from "@/lib/crm/bigin";

type Qualification = { id: number; year: string; title: string };
type Errors = Partial<Record<string, string>>;

const fieldClass = "mt-2 h-11 bg-background";

export function CareerApplicationForm() {
  const [qualifications, setQualifications] = useState<Qualification[]>([
    { id: 1, year: "", title: "" },
  ]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});

  const addQualification = () => {
    setQualifications((current) => [...current, { id: Date.now(), year: "", title: "" }]);
  };

  const removeQualification = (id: number) => {
    setQualifications((current) => current.filter((item) => item.id !== id));
  };

  const updateQualification = (id: number, field: "year" | "title", value: string) => {
    setQualifications((current) =>
      current.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    );
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const required = [
      "name",
      "designation",
      "experience",
      "location",
      "email",
      "mobile",
      "country",
    ];
    const nextErrors: Errors = {};

    required.forEach((field) => {
      if (!String(data.get(field) ?? "").trim()) nextErrors[field] = "This field is required.";
    });
    const email = String(data.get("email") ?? "");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      nextErrors["email"] = "Enter a valid email address.";
    }
    if (!data.get("consent")) nextErrors["consent"] = "Please confirm we may contact you.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    const qualificationSummary = qualifications
      .filter((item) => item.year || item.title)
      .map((item) => `${item.year || "Year not given"}: ${item.title || "Qualification"}`)
      .join("; ");
    const resume = data.get("resume");
    const resumeName = resume instanceof File ? resume.name : "Not supplied";
    const message = [
      String(data.get("message") ?? ""),
      `Location: ${String(data.get("location"))}`,
      `Country: ${String(data.get("country"))}`,
      `Experience: ${String(data.get("experience"))} years`,
      `Qualifications: ${qualificationSummary || "Not supplied"}`,
      `Resume selected: ${resumeName}`,
    ].join("\n");

    const result = await submitEnquiry({
      firstName: String(data.get("name")),
      lastName: "Career applicant",
      email,
      phone: String(data.get("mobile")),
      company: "Career application",
      country: String(data.get("country")),
      service: `Career: ${String(data.get("designation"))}`,
      message,
      consent: true,
      source: captureSource(),
    });

    setStatus(result.ok ? "success" : "error");
    if (result.ok) form.reset();
  };

  if (status === "success") {
    return (
      <div role="status" className="border border-border bg-background px-6 py-12 text-center">
        <CheckCircle2 className="mx-auto size-10 text-indigo-brand" aria-hidden="true" />
        <h2 className="mt-4 text-xl font-bold text-indigo-brand">Application received</h2>
        <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
          Thank you for your interest in TRAIBCERT. Our team will review your details and contact
          you if a suitable opportunity is available.
        </p>
      </div>
    );
  }

  const fieldError = (name: string) =>
    errors[name] ? (
      <p className="mt-1 text-xs font-medium text-destructive">{errors[name]}</p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="border border-border bg-muted/30 p-5 md:p-8">
      {status === "error" && Object.keys(errors).length > 0 ? (
        <div
          role="alert"
          className="mb-6 flex items-center gap-2 border border-destructive/30 bg-background p-3 text-sm text-destructive"
        >
          <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
          Please complete the highlighted fields.
        </div>
      ) : null}

      <div className="grid gap-x-6 gap-y-5 md:grid-cols-3">
        <div>
          <Label htmlFor="career-name">Name *</Label>
          <Input
            id="career-name"
            name="name"
            autoComplete="name"
            placeholder="Full name"
            className={fieldClass}
          />
          {fieldError("name")}
        </div>
        <div>
          <Label htmlFor="career-designation">Designation interested *</Label>
          <Input
            id="career-designation"
            name="designation"
            placeholder="Role or area of interest"
            className={fieldClass}
          />
          {fieldError("designation")}
        </div>
        <div>
          <Label htmlFor="career-experience">Years of experience *</Label>
          <Input
            id="career-experience"
            name="experience"
            type="number"
            min="0"
            placeholder="Years"
            className={fieldClass}
          />
          {fieldError("experience")}
        </div>
        <div>
          <Label htmlFor="career-location">Location *</Label>
          <Input
            id="career-location"
            name="location"
            autoComplete="address-level2"
            placeholder="City or region"
            className={fieldClass}
          />
          {fieldError("location")}
        </div>
        <div>
          <Label htmlFor="career-email">Email *</Label>
          <Input
            id="career-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email address"
            className={fieldClass}
          />
          {fieldError("email")}
        </div>
        <div>
          <Label htmlFor="career-mobile">Mobile *</Label>
          <Input
            id="career-mobile"
            name="mobile"
            type="tel"
            autoComplete="tel"
            placeholder="Phone number"
            className={fieldClass}
          />
          {fieldError("mobile")}
        </div>
        <div>
          <Label htmlFor="career-country">Country *</Label>
          <Input
            id="career-country"
            name="country"
            autoComplete="country-name"
            placeholder="Country"
            className={fieldClass}
          />
          {fieldError("country")}
        </div>
        <div className="md:col-span-2">
          <Label htmlFor="career-message">Message or introduction letter</Label>
          <Textarea
            id="career-message"
            name="message"
            rows={3}
            placeholder="Tell us about your relevant experience"
            className="mt-2 bg-background"
          />
        </div>
        <div className="md:col-span-2">
          <Label htmlFor="career-resume">Resume upload</Label>
          <Input
            id="career-resume"
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            className={`${fieldClass} cursor-pointer file:mr-3`}
          />
          <p className="mt-1 text-xs text-muted-foreground">PDF, DOC or DOCX</p>
        </div>
      </div>

      <fieldset className="mt-8 border-t border-border pt-6">
        <legend className="px-2 text-sm font-bold text-indigo-brand">
          Qualifications and certificates
        </legend>
        <div className="mt-2 space-y-4">
          {qualifications.map((qualification, index) => (
            <div
              key={qualification.id}
              className="grid items-end gap-3 md:grid-cols-[0.65fr_1.35fr_1.5fr_auto]"
            >
              <div>
                <Label htmlFor={`year-${qualification.id}`}>Year attained</Label>
                <Input
                  id={`year-${qualification.id}`}
                  value={qualification.year}
                  onChange={(event) =>
                    updateQualification(qualification.id, "year", event.target.value)
                  }
                  placeholder="Year"
                  className={fieldClass}
                />
              </div>
              <div>
                <Label htmlFor={`title-${qualification.id}`}>Title</Label>
                <Input
                  id={`title-${qualification.id}`}
                  value={qualification.title}
                  onChange={(event) =>
                    updateQualification(qualification.id, "title", event.target.value)
                  }
                  placeholder="Certificate or qualification"
                  className={fieldClass}
                />
              </div>
              <div>
                <Label htmlFor={`certificate-${qualification.id}`}>Certificate file</Label>
                <Input
                  id={`certificate-${qualification.id}`}
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  className={`${fieldClass} cursor-pointer file:mr-3`}
                />
              </div>
              {index === 0 ? (
                <Button
                  type="button"
                  variant="secondary"
                  className="h-11"
                  onClick={addQualification}
                >
                  <Plus aria-hidden="true" /> Add file
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="size-11"
                  onClick={() => removeQualification(qualification.id)}
                  aria-label="Remove qualification"
                >
                  <Trash2 aria-hidden="true" />
                </Button>
              )}
            </div>
          ))}
        </div>
      </fieldset>

      <div className="mt-7 flex items-start gap-3">
        <input
          id="career-consent"
          name="consent"
          type="checkbox"
          className="mt-1 size-4 accent-primary"
        />
        <Label
          htmlFor="career-consent"
          className="font-normal leading-relaxed text-muted-foreground"
        >
          I agree that TRAIBCERT may contact me about career opportunities and process my
          application.
        </Label>
      </div>
      {fieldError("consent")}

      <Button
        type="submit"
        size="lg"
        className="mt-6 bg-honey font-bold text-indigo-brand hover:bg-honey-hover"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <Loader2 className="animate-spin" aria-hidden="true" />
        ) : (
          <Upload aria-hidden="true" />
        )}
        {status === "loading" ? "Sending…" : "Submit application"}
      </Button>
    </form>
  );
}
