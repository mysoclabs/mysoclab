import { ArrowRight, Eye, Bug, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

/* -------------------- TYPES -------------------- */

type FeatureCategory = "defense" | "offense" | "advisory";

/* -------------------- BORDER GLOW -------------------- */

const borderGlow: Record<FeatureCategory, string> = {
  defense:
    "group-hover:shadow-[0_0_0_2px_rgba(59,130,246,0.9),0_0_30px_rgba(59,130,246,0.6)]",
  offense:
    "group-hover:shadow-[0_0_0_2px_rgba(239,68,68,0.9),0_0_30px_rgba(239,68,68,0.6)]",
  advisory:
    "group-hover:shadow-[0_0_0_2px_rgba(34,197,94,0.9),0_0_30px_rgba(34,197,94,0.6)]",
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
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Comprehensive{" "}
            <span className="text-primary">Security Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our cutting-edge technology and expert team provide multi-layered
            protection for your digital assets.
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Link to={feature.link} key={index} className="block">
                <div className="group relative rounded-xl transition-all duration-300">
                  <div
                    className={`
                      rounded-xl bg-card/80 backdrop-blur-md
                      p-6 h-full border border-border
                      transition-all duration-300
                      ${borderGlow[feature.category]}
                    `}
                  >
                    {/* ICON */}
                    <div className="mb-4">
                      <div
                        className="
                          w-14 h-14 rounded-xl
                          bg-black/70
                          border border-cyan-400/30
                          flex items-center justify-center
                          transition-all duration-300
                          group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]
                        "
                      >
                        <Icon className="w-7 h-7 text-cyan-400" />
                      </div>
                    </div>

                    {/* TITLE */}
                    <h3 className="text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.desc}
                    </p>

                    {/* CTA */}
                    <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
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
        <div className="mt-12 text-center">
          <Link to="/services#all">
            <button className="px-8 py-3 rounded-md border border-primary/40 hover:border-primary hover:bg-primary/10 transition-all">
              Explore All Services →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
