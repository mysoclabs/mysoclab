import { Link } from "react-router-dom";
import { ArrowRight, Quote, Shield, Target } from "lucide-react";

export const CareersSection = () => {
  return (
    <section className="border-b border-white/10 bg-[#08090B] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <div className="site-container py-14 md:py-16">
        <div className="mb-8">
          <span className="site-eyebrow">Careers</span>
          <h2 className="site-h2 mt-5 text-balance">
            Work at the Heart of Digital Defense
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#111215] p-6 transition-colors duration-300 md:p-10">
          <div className="absolute left-0 inset-0 w-2 bg-red-500" />

          <div className="relative pl-8">
            <Quote className="mb-5 h-9 w-9 text-red-500" />

            <p className="mb-6 max-w-4xl text-base leading-8 text-white/60 md:text-lg">
              At MySOC Labs, we help organizations stay ahead of evolving
              cyber threats through proactive security operations, continuous
              threat monitoring, and expert security guidance. Our approach
              combines technology, intelligence, and human expertise to
              identify risks, strengthen defenses, and build lasting cyber
              resilience.
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.2fr)] lg:gap-8">
              <div className="flex items-start gap-4">
                <Shield className="mt-1 h-6 w-6 shrink-0 text-red-500" />
                <div>
                  <h3 className="text-base font-semibold text-white">
                    Make an Impact
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-white/55">
                    Contribute to protecting organizations against evolving
                    cyber threats and real-world security challenges.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Target className="mt-1 h-6 w-6 shrink-0 text-red-500" />
                <div>
                  <h3 className="text-base font-semibold text-white">
                    Grow Your Expertise
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-white/55">
                    Work with security professionals, explore emerging
                    technologies, and continuously develop your skills.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/careers"
                className="group inline-flex h-11 items-center justify-center gap-2 bg-brand px-6 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-brand-bright"
              >
                Explore Career Page
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>

              <Link
                to="/soc-ai-tool"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-white/20 bg-white/[0.04] px-6 text-[14px] font-semibold text-white transition-colors duration-200 hover:border-white/35 hover:bg-white/[0.08]"
              >
                Soc AI Tool
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};