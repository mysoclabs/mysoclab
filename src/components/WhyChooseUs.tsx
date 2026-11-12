import { Award, Zap, HeadphonesIcon, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Proven Expertise",
    description: "Years of experience protecting organizations from sophisticated cyber threats.",
  },
  {
    icon: Zap,
    title: "Rapid Response",
    description: "Swift incident response with minimal downtime to keep your business running.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock monitoring and support from our dedicated security team.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Innovation",
    description: "Always evolving with the latest security technologies and methodologies.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      {/* top separation */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.015] via-transparent to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            Why Choose <span className="text-brand-bright">MySocLabs</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We combine expertise, technology, and dedication to deliver unparalleled cybersecurity solutions
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.045] to-white/[0.012] p-7 text-center transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_28px_60px_-38px_hsl(var(--brand)/0.55)]"
            >
              {/* hover top accent */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/0 to-transparent transition-all duration-500 group-hover:via-brand/60" />

              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-brand/25 bg-brand/[0.08] transition-colors duration-300 group-hover:border-brand/50 group-hover:bg-brand/[0.14]">
                <reason.icon className="h-7 w-7 text-brand-bright" />
              </div>
              <h3 className="mb-3 text-lg font-semibold tracking-tight">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
