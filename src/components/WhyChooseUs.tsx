import { Award, Zap, HeadphonesIcon, TrendingUp, ShieldCheck } from "lucide-react";

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
  {
    icon: ShieldCheck,
    title: "Continuous Security Improvement",
    description:
      "Strengthen your security posture through proactive assessments, continuous monitoring and actionable recommendations.",
  },
];

type Reason = (typeof reasons)[number];

const ReasonCard = ({ reason }: { reason: Reason }) => (
  <div className="group relative h-full w-[17rem] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.045] to-white/[0.012] p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_28px_60px_-38px_rgba(0,0,0,0.9)] sm:w-[19rem] lg:w-[21rem]">
    {/* hover top accent */}
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/0 to-transparent transition-all duration-500 group-hover:via-brand/60" />

    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-brand/25 bg-brand/[0.08] transition-colors duration-300 group-hover:border-brand/50 group-hover:bg-brand/[0.14]">
      <reason.icon className="h-6 w-6 text-brand-bright" />
    </div>
    <h3 className="mb-2 text-lg font-semibold tracking-tight">{reason.title}</h3>
    <p className="text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
  </div>
);

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
      </div>

      {/* Continuous right-to-left card marquee, clipped inside a centered, limited-width area */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="why-choose-marquee mx-auto max-w-6xl py-2">
          <div className="why-choose-track">
            {[0, 1, 2, 3].map((group) => {
              const isClone = group !== 0;
              return (
                <div
                  key={group}
                  className={`why-choose-group flex shrink-0 items-stretch gap-5 pr-5 lg:gap-6 lg:pr-6${
                    isClone ? " why-choose-clone" : ""
                  }`}
                  aria-hidden={isClone ? "true" : undefined}
                >
                  {reasons.map((reason) => (
                    <ReasonCard
                      key={isClone ? `${reason.title}-clone-${group}` : reason.title}
                      reason={reason}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
