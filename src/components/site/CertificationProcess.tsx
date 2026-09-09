const steps = [
  { number: "01", title: "Get Started", body: "Discuss your certification requirements." },
  { number: "02", title: "Assessment", body: "Review your current systems and readiness." },
  { number: "03", title: "Certification Audit", body: "Conduct the required audit." },
  {
    number: "04",
    title: "Certification",
    body: "Receive certification after successful completion.",
  },
  { number: "05", title: "Maintenance", body: "Maintain and improve your management system." },
];

export function CertificationProcess() {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((step) => (
        <li
          key={step.number}
          className="group relative rounded-xl border border-border bg-card p-5 transition-colors hover:border-indigo-soft/40"
        >
          <span className="text-2xl font-black text-honey">{step.number}</span>
          <h3 className="mt-2 text-base font-bold text-indigo-brand">{step.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
