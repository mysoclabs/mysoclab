import { useEffect, useRef, useState } from "react";
import {
  ClipboardList,
  ScanSearch,
  ShieldAlert,
  ShieldCheck,
  FileText,
  type LucideIcon,
} from "lucide-react";

type Stage = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const stages: Stage[] = [
  {
    title: "Understand & Scope",
    description:
      "Understand business requirements, infrastructure, security objectives and the assessment scope.",
    icon: ClipboardList,
  },
  {
    title: "Assess & Discover",
    description:
      "Evaluate systems, applications and security environments to identify potential vulnerabilities and risks.",
    icon: ScanSearch,
  },
  {
    title: "Analyze & Validate",
    description:
      "Investigate findings, validate security weaknesses and understand their potential business impact.",
    icon: ShieldAlert,
  },
  {
    title: "Recommend & Strengthen",
    description:
      "Provide practical recommendations to improve security controls and reduce identified risks.",
    icon: ShieldCheck,
  },
  {
    title: "Report & Improve",
    description:
      "Present findings, document recommendations and support continuous security improvement.",
    icon: FileText,
  },
];

export const OurApproach = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const progress = (active / (stages.length - 1)) * 100;
  const current = stages[active];

  return (
    <section ref={sectionRef} id="approach" className="relative overflow-hidden py-20 lg:py-24">
      {/* top separation, matching the rest of the site */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.015] via-transparent to-transparent" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow is-centered justify-center mb-4">Our Process</span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Approach to <span className="text-brand-bright">Cybersecurity</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
            From understanding your security requirements to identifying risks and strengthening
            your defences, we follow a structured approach to help protect your digital
            environment.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-14 lg:mt-16">
          {/* Desktop connector: draws in from left to right, then tracks the active stage */}
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute left-[10%] right-[10%] top-8 hidden h-px origin-left bg-white/10 transition-transform duration-1000 ease-out md:block ${
              revealed ? "scale-x-100" : "scale-x-0"
            }`}
          >
            <span
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-brand/80 to-brand-bright transition-[width] duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
            {/* Travelling signal dot, centred on the line */}
            <span
              className="approach-dot approach-dot-x absolute left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-bright shadow-[0_0_6px_rgba(244,52,61,0.55)]"
            />
          </div>

          {/* Mobile connector: draws in from top to bottom */}
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute bottom-6 left-6 top-6 w-px origin-top bg-white/10 transition-transform duration-1000 ease-out md:hidden ${
              revealed ? "scale-y-100" : "scale-y-0"
            }`}
          >
            <span
              className="absolute inset-x-0 top-0 bg-gradient-to-b from-brand/80 to-brand-bright transition-[height] duration-500 ease-out"
              style={{ height: `${progress}%` }}
            />
            {/* Travelling signal dot, centred on the vertical line */}
            <span
              className="approach-dot approach-dot-y absolute left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-bright shadow-[0_0_6px_rgba(244,52,61,0.55)]"
            />
          </div>

          <ol className="relative flex flex-col gap-6 md:flex-row md:items-start md:gap-0">
            {stages.map((stage, index) => {
              const isActive = index === active;
              const Icon = stage.icon;

              return (
                <li
                  key={stage.title}
                  className={`flex items-center gap-4 transition-all duration-500 ease-out md:flex-1 md:flex-col md:items-center md:gap-4 md:text-center ${
                    revealed ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    aria-current={isActive ? "step" : undefined}
                    aria-controls="approach-detail"
                    aria-label={`${index + 1}. ${stage.title}`}
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-0.5 md:h-16 md:w-16 ${
                      isActive
                        ? "border-brand/60 bg-brand/[0.10] text-brand-bright"
                        : "border-white/[0.12] bg-white/[0.03] text-white/65 hover:border-brand/40 hover:bg-brand/[0.06] hover:text-brand-bright"
                    }`}
                  >
                    <Icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.75} />
                  </button>

                  <span
                    className={`text-sm font-semibold leading-snug tracking-[-0.01em] transition-colors duration-300 md:px-2 md:text-[15px] ${
                      isActive ? "text-white" : "text-slate-400"
                    }`}
                  >
                    {stage.title}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Selected stage detail */}
        <div id="approach-detail" aria-live="polite" className="mx-auto mt-12 max-w-2xl md:mt-14">
          <div
            key={active}
            className="approach-detail rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.045] to-white/[0.012] p-6 text-center sm:p-8"
          >
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
              {current.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
              {current.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
