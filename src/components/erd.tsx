
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import redEagleLogo from "@/assets/red-eagle-logo.png";
import { redEagle } from "@/components/site/content";

/**
 * Red Eagle platform band. Kept as a homepage entry point to the standalone
 * Red Eagle pages, which remain untouched.
 */
export const ERD = () => {
  return (
    <section className="border-b border-white/10 bg-[#15171B] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <div className="site-container site-section">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          {/* Copy */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={redEagleLogo}
                alt=""
                aria-hidden="true"
                className="h-9 w-9 object-contain"
              />
              <span className="site-eyebrow">Platform</span>
            </div>

            <h2 className="site-h2 mt-5 text-balance">
              <span className="text-brand-bright">Red Eagle</span>
              <span className="mt-1 block text-[0.62em] font-medium leading-tight text-white">
                Endpoint Detection and Response
              </span>
            </h2>

            <p className="site-lead mt-5 max-w-xl">
              {redEagle.summary}
            </p>

            <p className="site-body mt-4 max-w-xl">
              {redEagle.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/soc-ai-tool"
                className="group inline-flex h-11 items-center justify-center gap-2 bg-white px-5 text-[13.5px] font-semibold text-[#08090B] transition-colors hover:bg-white/90"
              >
                Explore Red Eagle
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>

              <Link
                to="/trial-signup"
                className="inline-flex h-11 items-center justify-center border border-white/20 px-5 text-[13.5px] font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/[0.04]"
              >
                Request a trial
              </Link>
            </div>
          </div>

          {/* Red Eagle logo card */}
          <div className="flex w-full items-center justify-center pt-6 lg:ml-4">
            <div className="relative flex items-center justify-center rounded-md border border-red-500/20 bg-[#0C0E14] p-6 transition-colors duration-200">
              <img
                src={redEagleLogo}
                alt="Red Eagle"
                loading="lazy"
                decoding="async"
                className="h-64 w-64 object-contain logo-float"
                style={{
                  animation: "float 6s ease-in-out infinite",
                  WebkitAnimation: "float 6s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
