import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const CareersSection = () => {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-gradient-to-b from-white/[0.025] via-background to-background py-24 text-foreground">
      {/* Cybersecurity background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at 30% 40%, black 10%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at 30% 40%, black 10%, transparent 75%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE: Heading */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight">
              Work at the Heart of <br className="hidden sm:inline" />
              <span className="text-brand-bright">Digital Defense</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              At MySocLabs, we are protecting the future by building advanced defenses against sophisticated cyber adversaries. We are looking for relentless minds to join our mission.
            </p>
          </div>

          {/* RIGHT SIDE: Visual Teaser / Big CTA Card */}
          <div className="lg:col-span-5 w-full max-w-[580px] mx-auto lg:ml-auto">
            <div className="relative group">
              {/* Glow frame */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-brand/35 via-white/10 to-transparent opacity-70" />

              {/* Core CTA Box */}
              <div className="relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#0B0B0D]/95 p-8 shadow-[0_35px_70px_-40px_rgba(0,0,0,1)] backdrop-blur-xl sm:p-10">
                <div className="space-y-6">
                  <div className="text-center sm:text-left">
                    <span className="text-sm font-semibold text-muted-foreground">Join MySocLabs</span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold mt-1 mb-3 tracking-tight">
                      Start Your Journey
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Whether you are an experienced incident responder, a passionate red teamer, or a recent graduate with strong security foundations, we have a place for your expertise.
                    </p>
                  </div>

                  {/* Small visual items */}
                  <div className="space-y-3 pt-6">
                    <div className="flex items-center justify-start gap-4 text-sm py-2 border-b border-white/10">
                      <span className="font-medium w-28 flex-shrink-0">Locations</span>
                      <span className="text-muted-foreground">Remote / Hybrid (India)</span>
                    </div>
                    <div className="flex items-center justify-start gap-4 text-sm py-2">
                      <span className="font-medium w-28 flex-shrink-0">Work Model</span>
                      <span className="text-muted-foreground">Flexible Hours</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link to="/careers" className="block w-full">
                    <Button
                      size="lg"
                      className="w-full rounded-xl bg-gradient-to-b from-brand-bright to-brand font-bold text-white shadow-[0_18px_40px_-22px_rgba(0,0,0,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                    >
                      Explore Careers Page →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
