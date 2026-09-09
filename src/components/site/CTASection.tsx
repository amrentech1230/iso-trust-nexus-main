import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTASection({
  title = "Ready to Start Your Certification Journey?",
  body = "Talk to our team about certification, training, inspection or compliance requirements.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="gradient-indigo relative overflow-hidden py-16 text-white md:py-20">
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -left-16 size-80 rounded-full bg-honey/15 blur-3xl"
      />
      <div className="container-page relative text-center">
        <h2 className="mx-auto max-w-2xl text-2xl font-extrabold md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/85">{body}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact/enquiry"
            className="inline-flex items-center gap-2 rounded-md bg-honey px-6 py-3 text-sm font-bold text-indigo-brand transition-colors hover:bg-honey-hover"
          >
            Get a Quote <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
