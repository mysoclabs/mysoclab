import { useState } from "react";

import { approachStages } from "@/components/site/content";

/**
 * Five-stage engagement model. Interactive, but presented as a numbered
 * index rather than an animated timeline with a travelling dot.
 */
export const OurApproach = () => {
  const [active, setActive] = useState(0);
  const current = approachStages[active];

  return (
    <section id="approach" className="border-t border-white/10 bg-[#0A0B0E]">
      <div className="site-container site-section">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-end lg:gap-16">
          <div>
            <span className="site-eyebrow">Our process</span>
            <h2 className="site-h2 mt-5 text-balance">
              Our approach to cybersecurity
            </h2>
          </div>
          <p className="site-body max-w-xl lg:pb-1">
            From understanding your security requirements to identifying risks
            and strengthening your defences, we follow a structured approach to
            help protect your digital environment.
          </p>
        </div>

        <div className="mt-12 border-t border-white/10">
          <div className="grid sm:grid-cols-5">
            {approachStages.map((stage, index) => {
              const isActive = index === active;

              return (
                <button
                  key={stage.title}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-current={isActive ? "step" : undefined}
                  aria-controls="approach-detail"
                  className={`group relative border-b border-white/10 py-5 text-left transition-colors sm:border-b-0 sm:border-r sm:px-4 sm:last:border-r-0 sm:first:pl-0 ${
                    isActive ? "text-white" : "text-white/45 hover:text-white/75"
                  }`}
                >
                  <span
                    className={`absolute inset-x-0 top-0 hidden h-px sm:block ${
                      isActive ? "bg-brand-bright" : "bg-transparent"
                    }`}
                  />
                  <span
                    className={`block font-mono text-[10px] tracking-[0.18em] ${
                      isActive ? "text-brand-bright" : "text-white/30"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-2 block text-[13.5px] font-semibold leading-snug">
                    {stage.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div
          id="approach-detail"
          aria-live="polite"
          className="mt-10 grid gap-3 border-l-2 border-brand pl-5 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-8 sm:pl-6"
        >
          <span className="site-label">
            Stage {String(active + 1).padStart(2, "0")}
          </span>
          <div key={active} className="animate-fade-in">
            <h3 className="text-[17px] font-semibold text-white">{current.title}</h3>
            <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-white/55">
              {current.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
