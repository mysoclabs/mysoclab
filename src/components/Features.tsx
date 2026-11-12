import { ArrowRight, Eye, Bug, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

/* -------------------- TYPES -------------------- */

type FeatureCategory = "defense" | "offense" | "advisory";

/* -------------------- BORDER GLOW -------------------- */

const borderGlow: Record<FeatureCategory, string> = {
  defense:
    "group-hover:border-brand/45 group-hover:shadow-[0_28px_60px_-34px_hsl(var(--brand)/0.55)]",
  offense:
    "group-hover:border-brand/45 group-hover:shadow-[0_28px_60px_-34px_hsl(var(--brand)/0.55)]",
  advisory:
    "group-hover:border-brand/45 group-hover:shadow-[0_28px_60px_-34px_hsl(var(--brand)/0.55)]",
};

/* -------------------- FEATURE DATA -------------------- */

const features = [
  {
    icon: Eye,
    title: "SOC – 24/7 Monitoring",
    desc: "Continuous monitoring of logs, endpoints, and network traffic using SIEM & SOAR.",
    category: "defense" as FeatureCategory,
    link: "/services#defense",
  },
  {
    icon: Bug,
    title: "Web App Penetration Testing",
    desc: "Identify OWASP Top 10 vulnerabilities and logic flaws.",
    category: "offense" as FeatureCategory,
    link: "/services#offense",
  },
  {
    icon: Briefcase,
    title: "Virtual CISO (vCISO)",
    desc: "Strategic security leadership without full-time executive cost.",
    category: "advisory" as FeatureCategory,
    link: "/services#advisory",
  },
];

/* -------------------- COMPONENT -------------------- */

export const Features = () => {
  return (
    <section className="relative py-20 lg:py-28">
      {/* soft brand separation */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[680px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,hsl(var(--brand)/0.10),transparent_70%)] blur-2xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            Comprehensive{" "}
            <span className="text-brand-bright">Security Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our cutting-edge technology and expert team provide multi-layered
            protection for your digital assets.
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Link to={feature.link} key={index} className="block h-full">
                <div className="group relative h-full rounded-2xl">
                  <div
                    className={`
                      relative h-full overflow-hidden rounded-2xl border border-white/10
                      bg-gradient-to-b from-white/[0.05] to-white/[0.015]
                      p-7 backdrop-blur-sm
                      transition-all duration-500
                      ${borderGlow[feature.category]}
                    `}
                  >
                    {/* top brand accent */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/0 to-transparent transition-all duration-500 group-hover:via-brand/60" />

                    {/* ICON */}
                    <div className="mb-5">
                      <div className="icon-tile">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* TITLE */}
                    <h3 className="text-xl font-semibold mb-3 tracking-tight">
                      {feature.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.desc}
                    </p>

                    {/* CTA */}
                    <div className="mt-6 flex items-center text-sm font-medium text-brand-bright opacity-0 transition-all duration-300 group-hover:opacity-100">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* EXPLORE ALL CTA */}
        <div className="mt-14 text-center">
          <Link to="/services#all">
            <button className="group inline-flex items-center gap-2 rounded-xl border border-brand/35 bg-brand/[0.06] px-8 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-brand/70 hover:bg-brand/10 hover:shadow-[0_18px_40px_-24px_hsl(var(--brand)/0.9)]">
              Explore All Services →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
