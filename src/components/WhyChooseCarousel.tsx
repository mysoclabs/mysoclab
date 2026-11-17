import { useCallback, useEffect, useRef, useState } from "react";
import {
  Activity,
  ChevronLeft,
  ChevronRight,
  ScanSearch,
  Settings2,
  ShieldCheck,
  Siren,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

/**
 * Six capability panels. Copy is the approved company wording — no metrics,
 * client names or certifications.
 */
const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: "Security Expertise",
    description:
      "Experienced security practitioners delivering defensive, offensive and advisory cybersecurity services.",
  },
  {
    icon: ScanSearch,
    title: "Proactive Threat Detection",
    description:
      "Identify suspicious activity and security weaknesses before they become larger incidents.",
  },
  {
    icon: Activity,
    title: "Continuous Monitoring",
    description:
      "Security visibility and monitoring across endpoints, networks and cloud environments.",
  },
  {
    icon: Siren,
    title: "Rapid Incident Response",
    description:
      "Investigate security incidents and support timely response and recovery.",
  },
  {
    icon: Settings2,
    title: "Tailored Security Solutions",
    description:
      "Security services aligned with your organisation's infrastructure, requirements and risk profile.",
  },
  {
    icon: TrendingUp,
    title: "Security Improvement",
    description:
      "Practical recommendations and ongoing improvements to strengthen your security posture.",
  },
];

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Why choose MySOC Labs. A native scroll-snap rail with arrow paging — no
 * automatic movement, no duplicated slides. Touch, trackpad and keyboard
 * scrolling are handled by the browser.
 */
export const WhyChooseCarousel = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateArrows = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanScrollPrev(track.scrollLeft > 4);
    setCanScrollNext(track.scrollLeft < maxScroll - 4);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateArrows();
    track.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);

    return () => {
      track.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scrollByPage = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;

    const slide = track.querySelector<HTMLElement>("[data-slide]");
    const gap = parseFloat(getComputedStyle(track).columnGap || "0") || 0;
    const step = slide ? slide.offsetWidth + gap : track.clientWidth;
    const perPage = Math.max(1, Math.round(track.clientWidth / step));

    track.scrollBy({
      left: direction * step * perPage,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  };

  const arrowClass =
    "inline-flex h-14 w-14 items-center justify-center rounded-md border border-red-500 bg-red-500 text-white transition-colors duration-200 hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-red-500 disabled:hover:bg-red-600";

  return (
    <section
      id="why-choose"
      className="border-t border-white/10 bg-[#08090B] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
    >
      <div className="site-container site-section">
        <div className="flex flex-col gap-8">
          <div>
            <span className="site-eyebrow">Why us</span>
            <h2 className="site-h2 mt-5 text-balance text-white">
              Why Choose MySocLabs
            </h2>
            <p className="site-body max-w-xl text-secondary-text">
              Cybersecurity expertise, proactive protection and dependable
              support to help your business stay ahead of evolving threats.
            </p>
          </div>

          {/* Horizontal carousel layout: left arrow, track, right arrow */}
          <div className="flex items-center gap-4">
            {/* Left arrow */}
            <button
              type="button"
              onClick={() => scrollByPage(-1)}
              disabled={!canScrollPrev}
              aria-label="Previous features"
              aria-controls="why-choose-track"
              className={arrowClass}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            <div
              id="why-choose-track"
              ref={trackRef}
              role="region"
              aria-label="Why choose MySocLabs features"
              tabIndex={0}
              className="why-track w-auto overflow-x-auto"
            >
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={feature.title}
                    data-slide
                    className="why-slide flex flex-col rounded-xl border border-white/10 bg-[#111215] p-7 transition-colors duration-200 hover:bg-white/[0.03] sm:p-8"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] border border-white/[0.15] bg-black/20">
                      <Icon
                        className="h-5 w-5 text-white/85"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </span>
                    <h3 className="mt-6 text-[17px] font-semibold leading-snug text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-[13.5px] leading-[1.7] text-secondary-text">
                      {feature.description}
                    </p>
                  </article>
                );
              })}
            </div>

            {/* Right arrow */}
            <button
              type="button"
              onClick={() => scrollByPage(1)}
              disabled={!canScrollNext}
              aria-label="Next features"
              aria-controls="why-choose-track"
              className={arrowClass}
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};