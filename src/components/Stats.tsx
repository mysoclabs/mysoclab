import { Award, Shield } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";


const stats = [
  {
    icon: Shield,
    value: "99.99%",
    label: "PLATFORM UPTIME",
    description: "Guaranteed reliability"
  },
  {
    icon: Award,
    value: "24/7/365",
    label: "THREAT MONITORING",
    description: "Always watching"
  },
];

export const Stats = () => {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 grid-veil opacity-25" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.045] to-white/[0.012] p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand/35 hover:shadow-[0_28px_60px_-40px_rgba(0,0,0,0.9)]"
            >
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full border border-brand/20 bg-brand/10 transition-colors duration-300 group-hover:border-brand/40 group-hover:bg-brand/[0.16]">
                <stat.icon className="w-8 h-8 text-brand-bright" />
              </div>
              <div className="mb-2 text-4xl md:text-5xl lg:text-6xl font-bold text-brand-bright font-mono">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="mb-2 text-sm uppercase tracking-wider font-medium text-foreground/80">
                {stat.label}
              </div>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
