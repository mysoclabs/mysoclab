import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/** Final call to action — plain band, no illustration or glow. */
export const CTA = () => {
  return (
    <section className="bg-[#111215] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <div className="site-container site-section">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="site-eyebrow">Next step</span>
          <h2 className="site-h2 mt-5 text-balance text-white">
            Ready to Secure Your Business?
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#B8B8B8]">
            Protect your organization with proactive cybersecurity strategies,
            expert security guidance, and resilient defenses designed to keep
            your business secure against evolving threats.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/contact"
              className="group inline-flex h-12 items-center justify-center gap-2 bg-brand px-6 text-[14px] font-semibold text-white transition-colors hover:bg-brand-bright"
            >
              Talk to our security experts
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex h-12 items-center justify-center border border-white/20 px-6 text-[14px] font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/[0.04]"
            >
              Explore our services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
