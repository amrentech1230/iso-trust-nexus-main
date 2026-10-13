const reasons = [
  {
    title: "Faster response",
    description:
      "A sector specialist replies to every inspection enquiry within one working day with a fixed man-day quotation. Inspections in TRAIBCERT's operating regions are booked within five working days at most locations.",
  },
  {
    title: "Real-time information",
    description:
      "Receive a flash report on the inspection day and the full report within two working days, with daily reports during production monitoring and expediting.",
  },
  {
    title: "Inspectors who know the product",
    description:
      "Inspectors are assigned by product category and discipline, including consumer goods, textiles, electrical, mechanical, welding and NDT, automotive and food. Competence records are kept for each inspector and method.",
  },
  {
    title: "One body across the UK, the Middle East and India",
    description:
      "Inspections use one report format, one point of contact and one quality system across TRAIBCERT's offices and inspector network.",
  },
  {
    title: "Customised to your specification",
    description:
      "Checklists, defect libraries, AQLs, witness and hold points and report formats follow your specification and contract. Where needed, TRAIBCERT provides a category standard for your approval.",
  },
  {
    title: "Data that improves the next order",
    description:
      "Inspection results can be analysed across lots, suppliers and periods to reveal recurring defects, process causes and costs, supporting supplier scorecards and development conversations.",
  },
  {
    title: "Fixed pricing",
    description:
      "Man-day rates are quoted in advance with travel at cost; there are no report fees, portal fees or photograph surcharges.",
  },
  {
    title: "Independence that carries weight",
    description:
      "TRAIBCERT builds nothing, sells no software and reports to the party that commissions it, providing evidence for regulators, lenders, insurers and other parties to a dispute.",
  },
];

export function InspectionWhyTraibcert({
  limit = reasons.length,
  id,
}: {
  limit?: number;
  id?: string;
}) {
  return (
    <section id={id} className="scroll-mt-28 bg-muted/40 py-14 md:py-16">
      <div className="container-page">
        <h2 className="text-xl font-bold text-indigo-dark">Why TRAIBCERT</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.slice(0, limit).map((reason) => (
            <article key={reason.title} className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-sm font-bold text-indigo-brand">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
