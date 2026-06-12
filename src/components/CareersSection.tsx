import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const CareersSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-secondary/30 via-background to-background text-foreground border-y border-primary/5">
      {/* Cybersecurity background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE: Heading */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              Work at the Heart of <br className="hidden sm:inline" />
              <span className="text-primary">Digital Defense</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              At MySocLabs, we are protecting the future by building advanced defenses against sophisticated cyber adversaries. We are looking for relentless minds to join our mission.
            </p>
          </div>

          {/* RIGHT SIDE: Visual Teaser / Big CTA Card */}
          <div className="lg:col-span-5 lg:col-start-8 w-full max-w-[580px] mx-auto lg:ml-0 lg:-translate-x-36">
            <div className="relative group">
              
              {/* Core CTA Box */}
              <div className="relative bg-card/90 backdrop-blur-xl border border-[rgba(255,255,255,0.08)] rounded-2xl p-8 sm:p-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),0_0_30px_rgba(59,130,246,0.035)] flex flex-col justify-between h-full">
                <div className="space-y-6">
                  <div className="text-center sm:text-left">
                    <span className="text-sm font-semibold text-muted-foreground">Join MySocLabs</span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold mt-1 mb-3">
                      Start Your Journey
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Whether you are an experienced incident responder, a passionate red teamer, or a recent graduate with strong security foundations, we have a place for your expertise.
                    </p>
                  </div>
                  
                  {/* Small visual items */}
                  <div className="space-y-3 pt-6">
                    <div className="flex items-center justify-start gap-4 text-sm py-2 border-b border-border/40">
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
                      className="w-full bg-primary hover:bg-primary/95 text-primary-foreground font-bold hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
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
