export type InspectionService = {
  slug: string;
  path: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  eyebrow: string;
  hero: string;
  what: string[];
  when: string[];
  checks: string[];
  report: string;
  industries: string[];
  faqs: { q: string; a: string }[];
  related: { label: string; href: string }[];
};

export const inspectionServices: InspectionService[] = [
  {
    slug: "what-is-pre-shipment-inspection",
    path: "/certification/what-is-pre-shipment-inspection",
    title: "Pre-Shipment Inspection (PSI)",
    seoTitle: "Pre-Shipment Inspection (PSI) Services | TRAIBCERT",
    metaDescription:
      "Independent pre-shipment inspection to ISO 2859-1 AQL sampling: quantity, workmanship, function, safety, packaging and labelling checked before you release payment.",
    eyebrow: "Inspection · Pre-shipment",
    hero: "The balance payment is the last leverage a buyer has, and a pre-shipment inspection is what makes it worth holding. When production is complete and at least 80% of the order is packed, a TRAIBCERT inspector draws a statistical sample, checks it against your specification and the sales contract, and reports the same day. Release the payment on evidence or hold it with photographs in hand.",
    what: [
      "A pre-shipment inspection is a final random inspection of finished, packed goods at the factory or warehouse before they are shipped. The inspector verifies that the quantity is complete, that the goods match the approved sample and specification, that workmanship defects are within the agreed acceptable quality limit (AQL), that the product functions and is safe to use, and that packaging, labelling, barcodes and shipping marks are correct for the destination market.",
      "Sampling follows ISO 2859-1 at general inspection level II unless the contract says otherwise: an order of 5,000 units yields a sample of 200, and the usual AQL of 0 critical, 2.5 major and 4.0 minor means no critical defect is tolerated, up to 2.5% of the sample may carry a major defect and up to 4.0% a minor one before the lot is failed. The inspector decides the result against that rule, not by impression.",
      "The checklist covers labour standards, appearance, safety, functionality, quantity, variety, colours, measurements, weight, accessories, labelling, logos and packaging. Brand, logo and labelling checks include the intellectual-property details buyers need verified.",
    ],
    when: [
      "Every first order from a new supplier, and periodically thereafter.",
      "Any order where the balance payment is released against production completion.",
      "Own-brand, private-label and marketplace goods where a returns rate of a few per cent erases the margin.",
      "Seasonal or promotional stock that cannot be replaced in time if it arrives wrong.",
      "Goods destined for a regulated market where labelling, marking or safety errors stop the consignment at the border.",
    ],
    checks: [
      "Quantity: cartons counted against the packing list, packed percentage confirmed, sample drawn at random across cartons.",
      "Conformity: style, colour, material, dimensions, weight and components against the approved sample and specification.",
      "Workmanship: visual defects graded critical, major or minor against the agreed defect library.",
      "Function and safety: on-site tests appropriate to the product, such as power-on, load, drop, adhesion, seam strength, moisture, sharp edges and small parts.",
      "Packaging and labelling: retail packaging, inner and outer cartons, barcodes, labels, logos, warnings, country of origin and shipping marks against destination requirements.",
      "Special requirements: your checklist items and any regulatory markings the destination requires.",
    ],
    report:
      "A same-day flash result (pass, fail or pending) with the principal findings and photographs, then the full report within two working days: sampling record, checklist results, measurements against tolerance, defect photographs by severity, and the inspector's conclusion. Reports are retained for seven years.",
    industries: [
      "Retail and e-commerce importers and own-brand teams.",
      "Consumer goods, garments, footwear, furniture, toys, electrical accessories and homewares manufacturers.",
      "Food and agriculture exporters (packed produce, processed food): condition, weight, labelling and container hygiene.",
      "Traders and freight forwarders buying on behalf of clients.",
      "Public bodies and project owners accepting purchased equipment.",
    ],
    faqs: [
      {
        q: "When should we book?",
        a: "Book when production is scheduled to finish; the inspector attends when at least 80% is packed. Booking five working days ahead secures the date at most locations.",
      },
      {
        q: "What if fewer than 80% are packed on the day?",
        a: "The inspector reports the packed percentage and inspects what is available; the result is marked pending until the remainder is inspected, or you may accept the partial result.",
      },
      {
        q: "Do you inspect 100% of the goods?",
        a: "Only on request; 100% inspection is priced by volume and is usual for high-value or safety-critical items. For most goods AQL sampling gives a statistically sound result at a fraction of the cost.",
      },
      {
        q: "Can you use our checklist and defect library?",
        a: "Yes, and we recommend it. If you have none, TRAIBCERT provides a category checklist and defect library for your approval.",
      },
    ],
    related: [
      { label: "Inspection hub", href: "/certification/inspection" },
      {
        label: "During-production inspection",
        href: "/certification/inspection/during-production",
      },
      {
        label: "Container loading supervision",
        href: "/certification/inspection/container-loading",
      },
      { label: "Defect classification", href: "/certification/inspection/defect-classification" },
    ],
  },
  {
    slug: "initial-production-check",
    path: "/certification/inspection/initial-production-check",
    title: "Initial Production Check (IPC)",
    seoTitle: "Initial Production Check (IPC) Inspection | TRAIBCERT",
    metaDescription:
      "Initial production check at the start of the run: raw materials, components, first units and the factory's readiness verified before volume production commits your order.",
    eyebrow: "Inspection · Initial production check",
    hero: "The cheapest defect to fix is the one found in the first ten units. An initial production check puts a TRAIBCERT inspector in the factory as the line starts, to verify that the materials, components, tooling and first-off units match what you approved before thousands more are made the same way.",
    what: [
      "An initial production check is carried out when raw materials and components have been received and the first units are coming off the line, typically at 0 to 10% of the order. The inspector confirms that the materials and components are those specified (grade, supplier, certificates), that the production line, tooling and moulds are set up as approved, that the first units match the golden sample, and that the factory has the capacity and schedule to deliver on time.",
      "Where a pre-shipment inspection tells you what has been made, an initial production check changes what will be made. It is the point at which a wrong fabric batch, an unapproved component substitution or a mis-set mould is caught for the cost of a day.",
    ],
    when: [
      "A new supplier, new product or new tooling.",
      "Orders with long production runs where a systemic error would be expensive to rework.",
      "Material-critical products: specified fabrics, food-contact plastics, alloys and electrical components.",
      "Tight delivery windows where a late discovery cannot be recovered.",
    ],
    checks: [
      "Raw materials and components: identity, grade and quantity received against the bill of materials, with supplier certificates and test reports on file.",
      "Approved sample: first-off units compared with the golden sample and specification, dimension by dimension.",
      "Tooling and set-up: moulds, dies, jigs and line settings as approved; changes recorded.",
      "Factory readiness: capacity, staffing and schedule against the delivery date; in-process quality control points in place.",
      "Packaging materials: retail packaging, labels and cartons received and correct before they are needed.",
    ],
    report:
      "A same-day flash report on whether production may proceed, with material and first-off findings photographed; the full report follows within two working days and includes a schedule risk statement, so purchasing can act while the run is still at the start.",
    industries: [
      "Manufacturing and importers of engineered and consumer goods.",
      "Retail and own-brand teams launching new lines.",
      "Food and packaging where material identity matters.",
      "Automotive and electrical component buyers.",
    ],
    faqs: [
      {
        q: "Is IPC worth it for repeat orders?",
        a: "Usually not for identical repeats from a proven supplier; it earns its cost on new products, new suppliers, new tooling and changed materials.",
      },
      {
        q: "Can IPC and DUPRO be combined?",
        a: "They are distinct points in the run, but the same inspector often covers both for the same order, which keeps the reference consistent.",
      },
    ],
    related: [
      { label: "Inspection hub", href: "/certification/inspection" },
      {
        label: "During-production inspection",
        href: "/certification/inspection/during-production",
      },
      { label: "Pre-shipment inspection", href: "/certification/what-is-pre-shipment-inspection" },
      { label: "Production monitoring", href: "/certification/inspection/production-monitoring" },
    ],
  },
  {
    slug: "during-production",
    path: "/certification/inspection/during-production",
    title: "During-Production Inspection (DUPRO)",
    seoTitle: "During-Production Inspection (DUPRO) | TRAIBCERT",
    metaDescription:
      "During-production inspection at 20–50% of the run: semi-finished and finished units sampled, systemic defects found while the factory can still correct them.",
    eyebrow: "Inspection · During production",
    hero: "A defect found at 30% of the run is corrected in the next 70%. Found at 100%, it is either shipped or reworked at your expense. During-production inspection, which the old site called production-phase inspection, samples the units already made and the process making them, so the factory fixes the cause and not only the symptom.",
    what: [
      "A during-production inspection takes place when 20 to 50% of the order is complete. The inspector samples finished and semi-finished units to the agreed AQL, walks the line to check that in-process controls are being applied, compares the rate of production with the delivery schedule, and identifies any defect that recurs across units and therefore has a process cause.",
      "The output is corrective: a list of defects with their probable causes, agreed with the factory's quality manager on the day, and a re-check point set before the pre-shipment inspection. Buyers who run DUPRO on new suppliers typically see the pre-shipment failure rate fall sharply, because the pre-shipment inspection then confirms rather than discovers.",
    ],
    when: [
      "New suppliers, new products, or suppliers with a history of pre-shipment failures.",
      "Large orders where rework of the whole lot would be prohibitive.",
      "Products with a long process chain (cut, sew, finish, assemble, test) where an early-stage error hides until the end.",
      "Deadline-driven orders where the production rate needs independent confirmation.",
    ],
    checks: [
      "A sample of finished and semi-finished units against specification and approved sample.",
      "Recurring defects and their process cause; corrective action agreed with the factory.",
      "In-process quality controls: inspection points, records, calibrated gauges and rejected-part handling.",
      "Production status: quantity completed against schedule; risk to the delivery date.",
      "Packaging and labelling readiness for the pre-shipment stage.",
    ],
    report:
      "A flash report the same day stating whether production is on quality and on schedule, with defects, causes and the corrective actions agreed; the full report follows within two working days, structured so that the pre-shipment inspection can verify each corrective action.",
    industries: [
      "Garment, footwear, furniture, toy and homeware importers.",
      "Electrical and electronic goods buyers.",
      "Manufacturing supply chains with contract manufacturers.",
      "Retail own-brand and marketplace sellers.",
    ],
    faqs: [
      {
        q: "Does DUPRO replace pre-shipment inspection?",
        a: "No. DUPRO improves the run; pre-shipment inspection verifies the packed goods. For high-value orders both are used, and a supplier that passes DUPRO cleanly may earn a lighter pre-shipment sample later.",
      },
      {
        q: "Who agrees corrective actions with the factory?",
        a: "The inspector records the findings and the factory's proposed actions; the decision to accept them is yours. TRAIBCERT does not manage the factory on your behalf.",
      },
    ],
    related: [
      { label: "Inspection hub", href: "/certification/inspection" },
      {
        label: "Initial production check",
        href: "/certification/inspection/initial-production-check",
      },
      { label: "Pre-shipment inspection", href: "/certification/what-is-pre-shipment-inspection" },
      { label: "Production monitoring", href: "/certification/inspection/production-monitoring" },
      { label: "Defect classification", href: "/certification/inspection/defect-classification" },
    ],
  },
  {
    slug: "production-monitoring",
    path: "/certification/inspection/production-monitoring",
    title: "Production Monitoring",
    seoTitle: "Production Monitoring Inspection Services | TRAIBCERT",
    metaDescription:
      "Daily or continuous inspector presence at the factory for critical orders: quality, quantity and schedule reported every day, so problems are seen the day they occur.",
    eyebrow: "Inspection · Production monitoring",
    hero: "Some orders are too important for a single visit. Production monitoring places a TRAIBCERT inspector at the factory for the days or weeks that matter, reporting quality, output and schedule every day, so that a buyer thousands of miles away sees the line as clearly as the factory manager does.",
    what: [
      "Production monitoring is continuous or scheduled inspector presence during a production run. The inspector samples units through the day, verifies in-process controls, records output against the plan, witnesses key operations (for example final testing, sealing, sterilisation or coating), and sends a daily report with photographs and quantities. Problems are raised the day they occur, not at the end of the run.",
      "It is used for high-value, safety-critical or reputationally sensitive orders, for suppliers on probation, and for launches where a missed date has a fixed cost. The daily report is also the record that answers a later dispute over what was made, when and how.",
    ],
    when: [
      "High-value or high-volume orders where a day of monitoring is small against the order value.",
      "Suppliers under improvement plans or on their first orders.",
      "Product launches and seasonal stock with immovable dates.",
      "Processes that must be witnessed: testing, calibration, sealing, sterilisation and special coatings.",
    ],
    checks: [
      "Daily output against schedule with a forecast of the completion date.",
      "Sampling through the day at each process stage; defects logged and trended.",
      "In-process controls and records; calibration of gauges and test equipment.",
      "Witnessed operations recorded with photographs and instrument readings.",
      "Material and component usage against the bill of materials; substitutions flagged.",
    ],
    report:
      "A daily report by email or through the client portal with output, defects, photographs and schedule forecast, then an end-of-run summary that consolidates the daily reports and states the final conformity position, ready for the pre-shipment inspection or for direct release.",
    industries: [
      "Manufacturing and engineered equipment buyers.",
      "Retail and consumer goods importers with launch dates.",
      "Medical device and food-contact product buyers where process witnessing matters.",
      "Project owners with schedule-critical procurement.",
    ],
    faqs: [
      {
        q: "How is production monitoring priced?",
        a: "Per inspector day, with a reduced rate for continuous assignments over five days; travel and accommodation are at cost.",
      },
      {
        q: "Can the inspector stop the line?",
        a: "No. The inspector reports and, where you have instructed it, holds goods from packing; instructions to the factory come from you.",
      },
    ],
    related: [
      { label: "Inspection hub", href: "/certification/inspection" },
      {
        label: "During-production inspection",
        href: "/certification/inspection/during-production",
      },
      {
        label: "Vendor inspection and expediting",
        href: "/certification/inspection/vendor-inspection-expediting",
      },
      { label: "Pre-shipment inspection", href: "/certification/what-is-pre-shipment-inspection" },
    ],
  },
  {
    slug: "container-loading",
    path: "/certification/inspection/container-loading",
    title: "Container Loading Supervision",
    seoTitle: "Container Loading Supervision Services | TRAIBCERT",
    metaDescription:
      "Container loading supervision: right goods, right quantity, correct handling and stowage, container condition, seal number and photographs before the doors close.",
    eyebrow: "Inspection · Container loading",
    hero: "A perfect pre-shipment result can still arrive as a short, damaged or substituted shipment if nobody watches the loading. Container loading supervision puts a TRAIBCERT inspector at the doors: the empty container is checked, the cartons counted in, the stowage verified, the seal applied and photographed, and you receive the record the same day.",
    what: [
      "Container loading supervision is the inspection of a shipment at the point of loading. The inspector checks the empty container for damage, holes, moisture and odour; verifies that the goods loaded are the goods inspected (product, quantity, carton marks) against the packing list; supervises handling and stowage so that cartons are not crushed or loaded in the wrong order; records the container and seal numbers; and photographs each stage.",
      "It is a half-day or one-day service that closes the gap between the factory's report and the bill of lading, and it is the evidence that settles a shortage or damage claim with the carrier or the supplier.",
    ],
    when: [
      "Any full-container shipment where a shortage or substitution would matter.",
      "Fragile, moisture-sensitive or temperature-sensitive goods.",
      "Shipments following a failed or partial pre-shipment inspection.",
      "Traders and forwarders loading on behalf of a client.",
    ],
    checks: [
      "Empty container: structure, floor, doors, seals, cleanliness, moisture and odour; reefer set point where applicable.",
      "Goods identity: product and carton marks against the packing list and the pre-shipment report.",
      "Quantity: carton count in, with tally sheet; pallets and loose cartons recorded.",
      "Handling and stowage: loading pattern, weight distribution, bracing and dunnage; damaged cartons removed.",
      "Closure: seal number recorded and photographed; container number and truck details recorded; time of departure.",
    ],
    report:
      "A same-day loading report with tally, container and seal numbers, stowage photographs and any exceptions, sent before the vessel cut-off so a problem can still be acted on at origin.",
    industries: [
      "Retail, consumer goods and food importers and exporters.",
      "Freight forwarders and traders.",
      "Manufacturers shipping finished goods to distributors.",
      "Project cargo and equipment shippers.",
    ],
    faqs: [
      {
        q: "Can loading supervision and pre-shipment inspection be done on the same day?",
        a: "Yes, where the goods are packed and the container is booked for the same day; it is a common combination for smaller orders.",
      },
      {
        q: "Do you supervise loading of break-bulk or project cargo?",
        a: "Yes, with a loading and lashing checklist agreed in advance and a marine surveyor where the cargo requires it.",
      },
    ],
    related: [
      { label: "Inspection hub", href: "/certification/inspection" },
      { label: "Pre-shipment inspection", href: "/certification/what-is-pre-shipment-inspection" },
      {
        label: "Vendor inspection and expediting",
        href: "/certification/inspection/vendor-inspection-expediting",
      },
    ],
  },
  {
    slug: "non-destructive-testing",
    path: "/certification/inspection/non-destructive-testing",
    title: "Non-Destructive Testing (NDT)",
    seoTitle: "Non-Destructive Testing (NDT) Inspection Services | TRAIBCERT",
    metaDescription:
      "Independent NDT of welds, castings, pressure equipment, structures and pipelines: visual, penetrant, magnetic particle, ultrasonic and radiographic testing by qualified technicians.",
    eyebrow: "Inspection · Non-destructive testing",
    hero: "A weld either has a defect or it does not, and the only way to know without cutting it open is non-destructive testing. TRAIBCERT provides independent NDT of materials, welds and components through technicians qualified to the recognised personnel certification schemes, with the method, acceptance criteria and reporting agreed against your code before the first probe is placed.",
    what: [
      "Non-destructive testing examines a material, weld or component for surface and internal discontinuities without damaging it. TRAIBCERT arranges and witnesses the five common methods: visual testing (VT), liquid penetrant testing (PT) for surface-breaking defects in non-porous materials, magnetic particle testing (MT) for surface and near-surface defects in ferromagnetic materials, ultrasonic testing (UT) for internal defects and thickness, and radiographic testing (RT) for internal defects with a permanent film or digital image. Hardness testing and positive material identification are added where the specification calls for them.",
      "Every test is performed and interpreted by technicians holding the personnel qualification level the method and the code require, against acceptance criteria drawn from the applicable construction or product code. The report separates the raw indications from the interpretation and states the acceptance decision.",
    ],
    when: [
      "Fabrication of pressure vessels, boilers, heat exchangers, storage tanks and piping.",
      "Structural steel and bridge fabrication; site welds during erection.",
      "Castings and forgings for rotating equipment and valves.",
      "In-service inspection of plant: corrosion and thickness surveys, crack detection at known problem areas.",
      "Third-party verification of a fabricator's own NDT results before acceptance.",
    ],
    checks: [
      "Method selection and procedure against the applicable code and the material, thickness and joint type.",
      "Technician qualification and equipment calibration verified and recorded.",
      "Extent of testing (percentage of welds, specific joints) as the inspection and test plan requires.",
      "Indications recorded, sized and evaluated against acceptance criteria; repairs re-tested.",
      "Traceability: weld map, joint numbers, material certificates and welder identity linked to each result.",
    ],
    report:
      "An NDT report per method with the procedure reference, equipment and calibration, technician qualification, weld or component map, results and acceptance decision, plus radiographic images or ultrasonic scan records where produced. It is delivered within two working days of the final test, or daily for fabrication in progress.",
    industries: [
      "Energy, oil and gas, and petrochemicals.",
      "Power generation and utilities (water, gas, district heating).",
      "Construction and civil infrastructure.",
      "Manufacturing: fabrication, heavy engineering, castings and forgings.",
      "Transport: rail, marine and pressure-vessel transport equipment.",
    ],
    faqs: [
      {
        q: "Which NDT method do we need?",
        a: "The construction code and the joint decide it: surface methods for fillet welds and surface cracks, volumetric methods for full-penetration welds and castings. Send the drawing and code reference and the inspection plan is drafted for you.",
      },
      {
        q: "Do you provide the NDT technicians or only witness them?",
        a: "Both, depending on location: TRAIBCERT provides qualified technicians in its operating regions and witnesses and verifies a fabricator's or laboratory's NDT elsewhere; the report states which.",
      },
      {
        q: "Can NDT be combined with vendor inspection?",
        a: "It usually is: NDT results are hold points in the inspection and test plan that the vendor inspector reviews before release.",
      },
    ],
    related: [
      { label: "Inspection hub", href: "/certification/inspection" },
      {
        label: "Vendor inspection and expediting",
        href: "/certification/inspection/vendor-inspection-expediting",
      },
      { label: "ISO 9001", href: "/certification/iso-9001" },
      { label: "ISO 45001", href: "/certification/iso-45001" },
    ],
  },
  {
    slug: "automotive-components",
    path: "/certification/inspection/automotive-components",
    title: "Automotive Component Inspection",
    seoTitle: "Automotive Component Inspection & Sorting | TRAIBCERT",
    metaDescription:
      "Independent inspection of automotive parts and sub-assemblies against drawings, control plans and customer-specific requirements; sorting, containment and rework verification.",
    eyebrow: "Inspection · Automotive components",
    hero: "In automotive supply a single non-conforming part can stop a customer's line and trigger a containment demand within hours. TRAIBCERT inspects components and sub-assemblies against the drawing, the control plan and the customer's specific requirements, and provides sorting and containment when a suspect lot must be quarantined and cleared quickly.",
    what: [
      "Automotive component inspection is dimensional, visual and functional inspection of parts and sub-assemblies to the drawing, the control plan and the applicable customer-specific requirements, using calibrated measuring equipment and the customer's gauges where provided. It covers incoming inspection at the buyer, outgoing inspection at the supplier, and third-party sorting and containment when a lot is suspect.",
      "Sorting and containment is a defined service: 100% inspection of the suspect population, segregation of conforming and non-conforming parts, tagging, quantities reconciled, and a daily report to the customer's quality contact until the containment is closed. Rework verification confirms that reworked parts conform before they re-enter the supply.",
    ],
    when: [
      "Launch parts and first-article checks for new tooling or suppliers.",
      "Customer complaints and line-stop events requiring third-party containment.",
      "Suppliers on controlled shipping status.",
      "Incoming inspection resource shortages at tier-one and tier-two plants.",
      "Remanufactured, aftermarket and imported parts where origin and conformity must be verified.",
    ],
    checks: [
      "Dimensional inspection to drawing and control plan with calibrated equipment; results recorded per characteristic.",
      "Visual and cosmetic inspection against the defect library and boundary samples.",
      "Functional and fit checks with gauges and fixtures.",
      "Material and process evidence: certificates, heat-treatment and plating records, traceability marks.",
      "Packaging, labelling and quantity per the customer's packaging specification.",
      "Sorting and containment: population, results, segregation and daily reconciliation.",
    ],
    report:
      "Inspection reports per lot or per shift with characteristic-level results, defect counts and photographs; for containment, a daily reconciliation and a closure report; formats compatible with the customer's 8D and PPAP documentation when required.",
    industries: [
      "Automotive tier-one, tier-two and tier-three suppliers.",
      "Aftermarket and remanufacturing companies.",
      "Importers of automotive parts and accessories.",
      "Manufacturers of components shared with other transport sectors.",
    ],
    faqs: [
      {
        q: "Can you start a containment within 24 hours?",
        a: "In TRAIBCERT's operating regions, yes, subject to inspector availability; the enquiry form has a priority option for line-stop situations.",
      },
      {
        q: "Do your inspectors use our gauges?",
        a: "Yes, when provided and calibrated; otherwise TRAIBCERT brings calibrated general measuring equipment and states this in the report.",
      },
    ],
    related: [
      { label: "Inspection hub", href: "/certification/inspection" },
      { label: "Defect classification", href: "/certification/inspection/defect-classification" },
      {
        label: "Vendor inspection and expediting",
        href: "/certification/inspection/vendor-inspection-expediting",
      },
      { label: "TISAX readiness", href: "/certification/tisax-assessment-readiness" },
    ],
  },
  {
    slug: "defect-classification",
    path: "/certification/inspection/defect-classification",
    title: "Defect Classification Service",
    seoTitle: "Defect Classification Service | TRAIBCERT",
    metaDescription:
      "Independent grading of product defects as critical, major or minor against an agreed defect library and AQL, for supplier disputes, chargebacks, returns analysis and scorecards.",
    eyebrow: "Inspection · Defect classification",
    hero: "Buyer and supplier rarely disagree about whether a defect exists; they disagree about how serious it is. The defect classification service gives both parties an independent grading, against a defect library and AQL agreed in advance, so that acceptance decisions, chargebacks and supplier scorecards rest on a shared rule rather than on a negotiation.",
    what: [
      "Defect classification is the systematic examination and grading of defects found in a sample, a returned population or a disputed lot. Each defect is recorded, photographed and classified as critical (a hazard, a legal non-compliance or a defect that makes the product unusable), major (a defect likely to cause a return or reduce usability) or minor (a departure from specification that does not affect use), using a written defect library specific to the product category.",
      "The service is used to build and maintain the defect library and AQL that TRAIBCERT's other inspections apply; to settle disputes between buyer and supplier over a lot; and to analyse returns and complaints so that recurring defects, their process origin and their cost are visible to both parties.",
    ],
    when: [
      "Setting up a new product category or supplier where no defect library exists.",
      "Disputed lots, chargebacks and claims.",
      "Returns analysis for own-brand or marketplace goods.",
      "Supplier scorecards and periodic quality reviews.",
      "Second-opinion grading of a factory's or a buyer's own inspection result.",
    ],
    checks: [
      "Defect library: categories, definitions, photographs and severity rules agreed with you before use.",
      "Examination of the sample or population; every defect recorded with location, size and photograph.",
      "Classification against the library; borderline cases explained.",
      "Result against the AQL or the contract acceptance rule.",
      "Trend analysis: defect frequency by type, process stage and supplier over time.",
    ],
    report:
      "A classification report with the defect register, photographs, severity counts and the acceptance result, and, for analysis engagements, a trend report with charts by defect type, supplier and period and the process causes indicated by the pattern.",
    industries: [
      "Retail and e-commerce own-brand and marketplace teams.",
      "Consumer goods importers and brands.",
      "Automotive and electrical component buyers.",
      "Manufacturers managing contract-manufacturer quality.",
    ],
    faqs: [
      {
        q: "Is the classification binding on our supplier?",
        a: "Only if your contract makes it so. Many buyers write TRAIBCERT's defect library and classification into their supplier agreements for that reason.",
      },
      {
        q: "Can you classify from photographs or samples sent to you?",
        a: "Yes, for a desk classification; the report states that it was performed on submitted samples or images and not on a random sample drawn by TRAIBCERT.",
      },
    ],
    related: [
      { label: "Inspection hub", href: "/certification/inspection" },
      { label: "Pre-shipment inspection", href: "/certification/what-is-pre-shipment-inspection" },
      {
        label: "During-production inspection",
        href: "/certification/inspection/during-production",
      },
      { label: "ISO 10002", href: "/certification/iso-10002" },
    ],
  },
  {
    slug: "vendor-inspection-expediting",
    path: "/certification/inspection/vendor-inspection-expediting",
    title: "Vendor Inspection and Expediting",
    seoTitle: "Vendor Inspection and Expediting Services | TRAIBCERT",
    metaDescription:
      "Third-party vendor inspection for engineered equipment and project procurement: ITP review, witness and hold points, pre-dispatch and site-receipt inspection, expediting and reporting.",
    eyebrow: "Inspection · Vendor inspection",
    hero: "On a capital project the equipment is built in a dozen factories the owner never sees, and the schedule is only as good as the slowest of them. Vendor inspection and expediting puts TRAIBCERT in those factories on the owner's or contractor's behalf: reviewing the vendor's quality plan, witnessing the tests that matter, releasing equipment for dispatch, checking it on arrival, and reporting progress so that a slipping delivery is known months, not days, in advance.",
    what: [
      "Vendor inspection is the inspection of purchased equipment, materials and fabricated items at the vendor's works against the purchase order, the specification and the inspection and test plan (ITP). TRAIBCERT reviews the vendor's quality assurance plan and ITP, attends the witness and hold points the ITP identifies (material verification, dimensional checks, welding and NDT review, pressure and performance tests, painting and coating, final inspection), issues inspection release notes for dispatch, and inspects the equipment on receipt at site for completeness and transit damage.",
      "Expediting is the companion service: scheduled contact and visits to the vendor to verify progress against the delivery schedule, identify slippage and its causes, and report it to the purchaser with the vendor's recovery plan. The service covers the quality-plan checks, inspection points and delivery follow-up project engineers need.",
    ],
    when: [
      "Capital projects procuring engineered equipment: pumps, compressors, vessels, exchangers, switchgear, transformers, valves, skids, structural steel and precast.",
      "Purchasers without their own inspection staff in the vendor's country.",
      "Contracts where an inspection release note is a condition of payment or shipment.",
      "Long-lead items where a late delivery delays commissioning.",
      "Receipt inspection at site before acceptance and payment.",
    ],
    checks: [
      "Quality plan and ITP review: adequacy against the specification; witness, hold and review points agreed.",
      "Material verification: certificates, markings and, where required, positive material identification.",
      "In-process inspection: dimensions, welding, NDT results, assembly and alignment.",
      "Witnessed tests: hydrostatic, pneumatic, performance, functional, electrical, coating thickness and adhesion.",
      "Final inspection and documentation: manufacturer's data book, nameplate, packing and preservation for transport; inspection release note issued.",
      "Site receipt: completeness against packing list, transit damage, preservation condition; damage report where needed.",
      "Expediting: manufacturing progress, sub-supplier status, schedule variance and recovery plan.",
    ],
    report:
      "Inspection visit reports within two working days of each visit, inspection release notes at dispatch, non-conformance reports where raised, expediting reports on the agreed cycle, and a close-out summary per purchase order for the project's quality file.",
    industries: [
      "Energy, oil and gas, petrochemicals and power.",
      "Utilities: water, wastewater, gas and electricity networks.",
      "Construction and infrastructure: rail, roads, ports, airports and buildings.",
      "Mining and metals.",
      "Manufacturing plants procuring capital equipment.",
      "Public bodies and project owners accepting equipment.",
    ],
    faqs: [
      {
        q: "Do you inspect to our specification or to a code?",
        a: "To both: the purchase order and specification are the primary reference, and the applicable design and construction codes named in them are applied by inspectors with the relevant discipline background.",
      },
      {
        q: "Can you cover vendors in several countries for one project?",
        a: "Yes. TRAIBCERT coordinates inspection across its operating regions and its inspector network, so the project receives one report format and one point of contact.",
      },
      {
        q: "How is vendor inspection priced?",
        a: "Per inspection visit day plus travel, against the ITP; a project budget is estimated from the number of witness and hold points and the vendor locations.",
      },
    ],
    related: [
      { label: "Inspection hub", href: "/certification/inspection" },
      {
        label: "Non-destructive testing",
        href: "/certification/inspection/non-destructive-testing",
      },
      { label: "Production monitoring", href: "/certification/inspection/production-monitoring" },
      { label: "ISO 55001", href: "/certification/iso-55001" },
    ],
  },
];

export const inspectionServicesBySlug = Object.fromEntries(
  inspectionServices.map((service) => [service.slug, service]),
);

export const preShipmentInspection = inspectionServicesBySlug["what-is-pre-shipment-inspection"]!;
