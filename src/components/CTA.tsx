import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield } from "lucide-react";

import perimeterVisual from "@/assets/cta-security-perimeter.svg";

export const CTA = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      {/* section ambience */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0A0B0F] shadow-[0_60px_140px_-80px_rgba(0,0,0,1)]">
          {/* interior ambience */}
          <div className="pointer-events-none absolute inset-0">
            {/* technical grid */}
            <div className="absolute inset-0 grid-veil opacity-[0.45]" />
            {/* depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            {/* top hairline accent */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/45 to-transparent" />
          </div>

          <div className="relative z-10 grid items-center gap-10 px-6 py-12 sm:px-10 sm:py-14 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-8 lg:px-14 lg:py-16">
            {/* COPY */}
            <div className="reveal-on-scroll min-w-0 max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-slate-300">
                <Shield className="h-3.5 w-3.5 text-brand-bright" />
                Security Partnership
              </div>

              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.9rem] lg:leading-[1.08]">
                Ready to{" "}
                <br className="hidden lg:block" />
                <span className="text-brand-bright">Secure Your Business?</span>
              </h2>

              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-[17px]">
                Take a proactive approach to cybersecurity. Partner with MySOC Labs to identify
                vulnerabilities, strengthen your security posture and protect your digital assets
                against evolving threats.
              </p>

              <p className="mt-4 flex items-center gap-2.5 text-sm text-slate-400">
                <span className="h-1 w-1 shrink-0 rounded-full bg-brand-bright" />
                Your security journey starts with a conversation.
              </p>

              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="group h-12 w-full rounded-xl bg-gradient-to-b from-brand-bright to-brand px-7 text-[15px] font-semibold text-white shadow-[0_20px_45px_-24px_rgba(0,0,0,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"
                  >
                    Talk to Our Security Experts
                    <ArrowRight className="ml-2 h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>

                <Link to="/services" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 w-full rounded-xl border-white/15 bg-white/[0.03] px-7 text-[15px] font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/45 hover:bg-white/[0.06] hover:text-foreground sm:w-auto"
                  >
                    Explore Our Services
                  </Button>
                </Link>
              </div>
            </div>

            {/* VISUAL */}
            <div
              className="reveal-on-scroll relative mx-auto w-full max-w-[24rem] lg:max-w-none"
              style={{ transitionDelay: "120ms" }}
            >
              <img
                src={perimeterVisual}
                alt="Shielded security emblem surrounded by a network perimeter of connected monitoring nodes"
                loading="lazy"
                decoding="async"
                className="mx-auto w-full max-w-[21rem] select-none lg:max-w-[28rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
