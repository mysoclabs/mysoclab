import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import heroImage from "@/assets/photos/hero-operations.jpg";
import { categories } from "@/components/site/content";

export const Hero = () => {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-[#08090B] pt-16 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      {/* Full-bleed background: desaturated so the palette stays black/white/red */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center [filter:grayscale(1)_brightness(0.82)_contrast(1.06)]"
          decoding="async"
        />
        {/* Readability scrims */}
        <div className="absolute inset-0 bg-[#08090B]/75 lg:bg-[#08090B]/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090B]/85 via-[#08090B]/70 to-[#08090B]/85 lg:bg-gradient-to-r lg:from-[#08090B] lg:via-[#08090B]/80 lg:to-[#08090B]/20" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#08090B] to-transparent" />
      </div>

      <div className="site-container relative">
        <div className="max-w-2xl py-20 md:py-28 lg:py-32">
          <h1 className="hero-enter hero-enter-1 text-[clamp(2.35rem,6.4vw,4.15rem)] font-bold leading-[1.02] tracking-[-0.035em] text-white">
            <span className="block">Next-Gen</span>
            <span className="block text-brand-bright">Cybersecurity</span>
            <span className="block">Solutions</span>
          </h1>

          <p className="hero-enter hero-enter-2 mt-6 max-w-xl text-[15px] leading-[1.75] text-white/65 sm:text-[16px]">
            Protect your business with our cybersecurity and artificial
            intelligence expertise. Tailor-made solutions to secure your digital
            future.
          </p>

          <div className="hero-enter hero-enter-3 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/contact"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-brand px-6 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-brand-bright"
            >
              Get Protected
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/[0.04] px-6 text-[14px] font-semibold text-white transition-colors duration-200 hover:border-white/35 hover:bg-white/[0.08]"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      {/* Service-area strip */}
      <div className="relative border-t border-white/10 bg-[#08090B]/60">
        <div className="site-container">
          <div className="grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {categories.map((category) => (
              <Link
                key={category.key}
                to={`/services#${category.anchor}`}
                className="group flex items-start gap-3 py-5 transition-colors sm:px-6 sm:first:pl-0 sm:last:pr-0"
              >
                <span>
                  <span className="flex items-center gap-1.5 text-[13.5px] font-semibold text-white transition-colors group-hover:text-brand-bright">
                    {category.label}
                    <ArrowRight className="h-3.5 w-3.5 -translate-x-0.5 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                  </span>
                  <span className="mt-1 block text-[12.5px] leading-relaxed text-white/50">
                    {category.summary}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
