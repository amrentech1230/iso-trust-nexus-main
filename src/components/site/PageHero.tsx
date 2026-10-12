import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  children,
  enquiryContext = "certification",
  showEnquiryForm = true,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  crumbs: Crumb[];
  children?: ReactNode;
  enquiryContext?: "certification" | "training";
  showEnquiryForm?: boolean;
}) {
  return (
    <section className="gradient-indigo relative overflow-hidden text-white ">
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 size-96 rounded-full bg-honey/15 blur-3xl"
      />

      <div className="container-page relative py-10 md:py-14">
        <Breadcrumbs items={crumbs} tone="dark" />

        <div
          className={`mt-6 grid grid-cols-1 gap-10 md:items-start ${
            showEnquiryForm ? "md:grid-cols-2" : "md:grid-cols-1"
          }`}
        >
          {/* LEFT SIDE */}
          <div>
            {eyebrow ? (
              <p className="text-[11px] font-bold tracking-[0.18em] text-honey uppercase ">
                {eyebrow}
              </p>
            ) : null}

            <h1 className="mt-3 max-w-3xl text-3xl leading-tight font-extrabold md:text-4xl lg:text-[2.75rem]">
              {title}
            </h1>

            {intro ? (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg text-justify text-justify tracking-[1px]">
                {intro}
              </p>
            ) : null}

            {children ? <div className="mt-7">{children}</div> : null}
          </div>

          {/* RIGHT SIDE - ENQUIRY FORM */}
          {showEnquiryForm ? (
            <div>
              <form
                action="/contact/enquiry"
                method="get"
                className="rounded-xl bg-white p-6 text-left shadow-xl"
              >
                <h2 className="text-xl font-bold text-indigo-brand">
                  {enquiryContext === "training" ? "Ask about training" : "Request an enquiry"}
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {enquiryContext === "training"
                    ? "Ask our team about course levels, dates, delivery options and group training."
                    : "Get in touch with our team about your certification requirements."}
                </p>

                <div className="mt-5 space-y-4">
                  {/* NAME */}
                  <div>
                    <label htmlFor="hero-name" className="text-sm font-semibold text-indigo-brand">
                      Name
                    </label>

                    <input
                      id="hero-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="mt-1 w-full rounded-md border border-border px-3 py-2.5 text-sm text-foreground outline-none focus:border-indigo-brand"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label htmlFor="hero-email" className="text-sm font-semibold text-indigo-brand">
                      Work email
                    </label>

                    <input
                      id="hero-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="mt-1 w-full rounded-md border border-border px-3 py-2.5 text-sm text-foreground outline-none focus:border-indigo-brand"
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label htmlFor="hero-phone" className="text-sm font-semibold text-indigo-brand">
                      Phone
                    </label>

                    <input
                      id="hero-phone"
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                      className="mt-1 w-full rounded-md border border-border px-3 py-2.5 text-sm text-foreground outline-none focus:border-indigo-brand"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label
                      htmlFor="hero-message"
                      className="text-sm font-semibold text-indigo-brand"
                    >
                      How can we help?
                    </label>

                    <textarea
                      id="hero-message"
                      name="message"
                      rows={3}
                      placeholder={
                        enquiryContext === "training"
                          ? "Tell us the standard, level, group size and preferred delivery..."
                          : "Tell us about your requirements..."
                      }
                      className="mt-1 w-full rounded-md border border-border px-3 py-2.5 text-sm text-foreground outline-none focus:border-indigo-brand"
                    />
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="w-full rounded-md bg-honey px-5 py-3 text-sm font-bold text-indigo-brand transition-colors hover:bg-honey-hover"
                  >
                    Send enquiry
                  </button>
                </div>
              </form>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
