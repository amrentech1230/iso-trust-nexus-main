import { createFileRoute } from "@/lib/router-compat";
import { CourseCard } from "@/components/site/Cards";
import { CTASection } from "@/components/site/CTASection";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { courseCategories, courseLevels, courses } from "@/data/courses";
import { generalFaqs } from "@/data/insights";
import { breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

const crumbs = [{ name: "Training", href: "/training" }];
const faqs = generalFaqs.slice(0, 4);

export const Route = createFileRoute("/training/")({
  head: () => {
    const meta = pageMeta({
      title: "ISO Training Courses & Lead Auditor Training | TRAIBCERT",
      description:
        "Foundation, Awareness, Internal Auditor and Lead Auditor training across ISO 9001, 14001, 45001, 27001 and more. Classroom, live virtual, in-house and e-learning delivery.",
      path: "/training",
    });
    return {
      ...meta,
      scripts: [breadcrumbJsonLd([{ name: "Home", href: "/" }, ...crumbs]), faqJsonLd(faqs)],
    };
  },
  component: TrainingLanding,
});

function TrainingLanding() {
  return (
    <>
      <PageHero
        eyebrow="Training"
        title="Practical ISO training, from awareness to lead auditor"
        intro="Build the internal capability to run and audit your own management system. Courses are delivered in the classroom, live online, in-house at your site, or through our e-learning academy."
        crumbs={crumbs}
      />

      <section className="py-14 md:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Course levels"
            title="Four levels, one progression path"
            intro="Start with the level that matches the role, then progress as responsibilities grow."
          />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {courseLevels.map((level) => (
              <div key={level} className="rounded-lg border bg-card p-5">
                <h3 className="text-base font-bold">{level}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {level === "Foundation"
                    ? "A working understanding of the standard and the route to certification."
                    : level === "Awareness"
                      ? "Short session for teams who need to know their part in the system."
                      : level === "Internal Auditor"
                        ? "Plan, conduct and report internal audits with confidence."
                        : "Lead audit teams through the full audit cycle and report at management level."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {courseCategories.map((category, index) => {
        const list = courses.filter((c) => c.category === category);
        if (list.length === 0) return null;
        return (
          <section
            key={category}
            id={category.toLowerCase()}
            className={`scroll-mt-28 py-14 md:py-16 ${index % 2 === 0 ? "bg-muted/40" : ""}`}
          >
            <div className="container-page">
              <SectionHeading eyebrow={category} title={`${category} training courses`} />
              <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((course) => (
                  <CourseCard key={course.slug} course={course} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-14 md:py-16">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="FAQs" title="Training questions, answered" />
          <div className="mt-6">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
