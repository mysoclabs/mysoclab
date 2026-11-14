import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logom.png";

export const ERD = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* ambient + grid */}
      <div className="pointer-events-none absolute inset-0 grid-veil opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="space-y-6 lg:pl-8 xl:pl-12">

            {/* LOGO + NAME */}
            <div className="flex items-center gap-3 group">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                <img
                  src={logo}
                  alt="Red Eagle"
                  className="h-10 w-10 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span
                className="
                  text-xl font-semibold
                  text-white
                  transition-colors duration-300
                "
              >
                Red Eagle
              </span>
            </div>

            {/* HEADING */}
            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Endpoint Detection <br />
              <span className="text-brand-bright">
                and Response Platform
              </span>
            </h2>

            {/* SUB HEADING */}
            <p className="max-w-xl text-xl text-muted-foreground">
              An advanced endpoint detection and response platform built
              to secure modern systems against sophisticated cyber attacks.
            </p>

            {/* DESCRIPTION */}
            <p className="max-w-lg text-base text-muted-foreground">
              Red Eagle continuously monitors endpoint activity, detects
              suspicious behavior in real time, and responds to threats
              using AI-driven behavioral and forensic analysis.
            </p>

            {/* CTA */}
            <div className="pt-4">
              <Link to="/soc-ai-tool">
                <Button
                  variant="outline"
                  className="
                    rounded-xl border-brand/40 bg-brand/[0.06] text-brand-bright
                    hover:border-brand/70 hover:bg-brand/10 hover:text-brand-soft
                    transition-all duration-300
                  "
                >
                  Explore More →
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT VISUAL CARD */}
          <div className="relative flex justify-center">
            <div
              className="
                relative flex h-[380px] w-[380px] max-w-full
                items-center justify-center
                overflow-hidden rounded-2xl border border-brand/25
                bg-gradient-to-br from-brand/[0.10] via-white/[0.03] to-transparent
                shadow-[0_40px_90px_-50px_rgba(0,0,0,0.9)]
                transition-transform duration-500 ease-out
                hover:-translate-y-3
              "
            >
              {/* inner ring */}
              <div className="pointer-events-none absolute inset-6 rounded-xl border border-white/[0.06]" />
              <img
                src={logo}
                alt="Red Eagle EDR"
                className="relative z-10 w-52 opacity-90"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
