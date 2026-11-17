import { reasons } from "@/components/site/content";

/**
 * Why MySOC Labs. A single editorial list on hairlines — the previous
 * auto-scrolling card marquee is intentionally gone.
 */
export const WhyChooseUs = () => {
  return (
    <section className="border-b border-white/10 bg-[#08090B]">
      <div className="site-container site-section">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="site-eyebrow">Why MySOC Labs</span>
            <h2 className="site-h2 mt-5 text-balance">
              Chosen for judgement, not just tooling.
            </h2>
            <p className="site-body mt-5 max-w-md">
              We combine expertise, technology and a focus on the work that
              actually reduces risk.
            </p>
          </div>

          <ul className="border-t border-white/10">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <li
                  key={reason.title}
                  className="grid grid-cols-[2rem_minmax(0,1fr)] gap-x-4 gap-y-2 border-b border-white/10 py-6 sm:grid-cols-[2.5rem_minmax(0,15rem)_minmax(0,1fr)] sm:items-start sm:gap-x-6"
                >
                  <Icon
                    className="mt-0.5 h-4 w-4 text-brand-bright/80"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <h3 className="text-[15px] font-semibold leading-snug text-white">
                    {reason.title}
                  </h3>
                  <p className="col-start-2 text-[13.5px] leading-relaxed text-white/55 sm:col-start-3">
                    {reason.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
