import { Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import auditImage from "@/assets/home-hero-audit.jpg";
import cyberImage from "@/assets/home-hero-cyber.jpg";
import globalImage from "@/assets/home-hero-global-clean.jpg";
import inspectionImage from "@/assets/home-hero-inspection-clean.jpg";
import trainingImage from "@/assets/home-hero-training-clean.jpg";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";

const slides = [
  { src: auditImage, label: "Management system audit in a modern manufacturing facility" },
  { src: trainingImage, label: "Professional auditor training workshop" },
  { src: inspectionImage, label: "Industrial equipment inspection" },
  { src: cyberImage, label: "Information security compliance review" },
  { src: globalImage, label: "International manufacturing and logistics operations" },
];

export function HomeHero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 2000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const showPrevious = () => setActive((current) => (current - 1 + slides.length) % slides.length);
  const showNext = () => setActive((current) => (current + 1) % slides.length);

  return (
    <section
      className="relative min-h-[clamp(30rem,calc(100svh-8rem),38rem)] overflow-hidden bg-indigo-dark text-white"
      aria-roledescription="carousel"
      aria-label="TRAIBCERT services"
    >
      <div className="absolute inset-0" aria-hidden="true">
        {slides.map((slide, index) => (
          <img
            key={slide.src}
            src={slide.src}
            alt=""
            width={1600}
            height={1000}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
            className={`home-hero-slide absolute inset-0 size-full object-cover object-center ${
              active === index ? "home-hero-slide-active" : ""
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-indigo-dark/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-dark via-indigo-dark/75 to-indigo-dark/10" />
      </div>

      <div className="container-page relative flex min-h-[clamp(30rem,calc(100svh-8rem),38rem)] items-center py-14 md:py-16">
        <div className="animate-fade-up max-w-3xl">
          <p className="text-[11px] font-bold tracking-[0.18em] text-honey uppercase">
            Independent UK certification body
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.08] font-extrabold md:text-5xl lg:text-[3.55rem]">
            ISO Certification, Training &amp; Compliance Services
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            Independent certification, professional training and inspection services for
            organisations across the UK, UAE and internationally.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact/enquiry"
              className="inline-flex items-center gap-2 rounded-md bg-honey px-6 py-3.5 text-sm font-bold text-indigo-brand transition-colors hover:bg-honey-hover"
            >
              Get a Quote <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              to="/certification"
              className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-indigo-dark/20 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Explore Certification
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-white">
            {site.accreditations.map((accreditation) => (
              <li key={accreditation.label} className="inline-flex items-center gap-2">
                <BadgeCheck className="size-4 text-honey" aria-hidden="true" />
                {accreditation.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Image {active + 1} of {slides.length}: {slides[active]?.label}
      </p>
      <div className="absolute right-5 bottom-5 left-5 flex items-center justify-between gap-4 md:right-8 md:bottom-7 md:left-auto">
        <div className="flex items-center gap-2">
          {slides.map((slide, index) => (
            <Button
              key={slide.label}
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setActive(index)}
              aria-label={`Show image ${index + 1}: ${slide.label}`}
              aria-current={active === index ? "true" : undefined}
              className={`h-1.5 rounded-full p-0 transition-all hover:bg-honey ${
                active === index ? "w-9 bg-honey" : "w-4 bg-white/55"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={showPrevious}
            aria-label="Previous image"
            className="border border-white/30 bg-indigo-dark/35 text-white hover:bg-white hover:text-indigo-brand"
          >
            <ChevronLeft />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setPaused((value) => !value)}
            aria-label={paused ? "Play slideshow" : "Pause slideshow"}
            className="border border-white/30 bg-indigo-dark/35 text-white hover:bg-white hover:text-indigo-brand"
          >
            {paused ? <Play /> : <Pause />}
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={showNext}
            aria-label="Next image"
            className="border border-white/30 bg-indigo-dark/35 text-white hover:bg-white hover:text-indigo-brand"
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </section>
  );
}