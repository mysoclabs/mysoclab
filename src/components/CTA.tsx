import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield } from "lucide-react";

export const CTA = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* gradient frame */}
          <div className="relative rounded-3xl bg-gradient-to-b from-brand/35 via-white/10 to-transparent p-px shadow-[0_45px_100px_-60px_hsl(var(--brand)/0.8)]">
            <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-[#0A0A0C] px-6 py-12 text-center md:px-12 md:py-16">
              {/* interior ambience */}
              <div className="pointer-events-none absolute inset-0 grid-veil opacity-40" />
              <div className="pointer-events-none absolute left-1/2 top-[-40%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,hsl(var(--brand)/0.20),transparent_65%)] blur-2xl" />

              <div className="relative z-10">
                <div className="mx-auto mb-7 flex h-12 w-12 items-center justify-center rounded-xl border border-brand/30 bg-brand/10">
                  <Shield className="h-6 w-6 text-brand-bright" />
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  Ready to <span className="text-brand-bright">Secure Your Business?</span>
                </h2>

                <p className="text-lg text-muted-foreground mb-9 max-w-2xl mx-auto leading-relaxed">
                  Join hundreds of organizations that trust MySocLabs to protect their digital assets. 
                  Let's discuss how we can safeguard your future.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button
                      size="lg"
                      className="group w-full rounded-xl bg-gradient-to-b from-brand-bright to-brand px-8 font-semibold text-white shadow-[0_18px_40px_-20px_hsl(var(--brand)/0.95)] transition-all hover:brightness-110 sm:w-auto"
                    >
                      Schedule Consultation
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>

                  <Link to="/services">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full rounded-xl border-white/15 bg-white/[0.03] text-foreground hover:border-brand/50 hover:bg-white/[0.06] hover:text-foreground sm:w-auto"
                    >
                      Explore Services
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
