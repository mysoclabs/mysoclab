import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { categories, servicesByCategory } from "@/components/site/content";

/**
 * Three security practices. Editorial columns — square photography, hairline
 * rules, no cards and no repeated shield illustration.
 */
export const Features = () => {
  return (
    <section className="border-b border-white/10 bg-[#111215] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <div className="site-container site-section">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="site-eyebrow">What we do</span>
            <h2 className="site-h2 mt-5 text-balance">
              Three practices. One security posture.
            </h2>
          </div>
          <p className="site-body max-w-md md:text-right">
            Defensive operations, offensive testing and advisory work delivered
            as separate engagements or as a single programme.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-10">
          {categories.map((category, index) => {
            const services = servicesByCategory[category.key];

            return (
              <article key={category.key} className="group flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0B0C0F]">
                  <img
                    src={category.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className="site-photo h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090B]/55 to-transparent" />
                  <span className="absolute left-4 top-4 font-mono text-[10px] tracking-[0.2em] text-white/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

<div className="flex flex-1 flex-col border-b border-white/10 pb-6 pt-5">
  <h3 className="text-[21px] font-semibold tracking-tight text-white">
    {category.label}
  </h3>
  <p className="mt-3 text-[15px] leading-relaxed text-white/55">
    {category.summary}
  </p>

  <ul className="mt-6 space-y-2">
    {services.slice(0, 3).map((service) => (
      <li
        key={service.title}
        className="flex items-baseline gap-2 text-[14.5px] text-white/45"
      >
        <span className="h-px w-2.5 shrink-0 translate-y-[-0.25em] bg-white/25" />
        {service.title}
      </li>
    ))}
  </ul>

                  <Link
                    to={`/services#${category.anchor}`}
                    className="group/link mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-white transition-colors hover:text-brand-bright"
                  >
                    View {services.length} services
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
