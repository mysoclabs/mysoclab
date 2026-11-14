import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/* -------------------- FEATURE DATA -------------------- */

const features = [
  {
    title: "SOC – 24/7 Monitoring",
    desc: "Continuously monitor security events, detect suspicious activities and identify potential threats across your digital infrastructure.",
    link: "/services#defense",
    capabilities: [
      "Continuous Security Monitoring",
      "Threat Detection & Analysis",
      "Incident Response",
    ],
  },
  {
    title: "Web App Penetration Testing",
    desc: "Discover application vulnerabilities, identify security weaknesses and strengthen your web applications against cyber threats.",
    link: "/services#offense",
    capabilities: [
      "Vulnerability Assessment",
      "Authentication & Authorization Testing",
      "API & Injection Security Testing",
    ],
  },
  {
    title: "Virtual CISO (vCISO)",
    desc: "Strengthen your organization's security strategy through expert guidance, risk management and cybersecurity planning.",
    link: "/services#advisory",
    capabilities: [
      "Security Strategy & Planning",
      "Risk Assessment & Management",
      "Compliance & Security Governance",
    ],
  },
];

/* -------------------- COMPONENT -------------------- */

export const Features = () => {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Comprehensive{" "}
            <span className="text-brand-bright">
              Security Solutions
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Our cutting-edge technology and expert team provide multi-layered
            protection for your digital assets.
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <Link
              to={feature.link}
              key={feature.title}
              className="group block h-full"
            >
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#0f1115] p-7 transition-colors duration-300 hover:border-brand/50 hover:bg-[#13161b]">

                {/* TITLE */}
                <h3 className="mb-3 text-xl font-semibold tracking-tight text-foreground">
                  {feature.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mb-7 leading-relaxed text-muted-foreground">
                  {feature.desc}
                </p>

                {/* CAPABILITIES */}
                <div className="flex-grow">
                  <h4 className="mb-5 text-xs font-bold tracking-[0.15em] text-brand-bright">
                    KEY CAPABILITIES
                  </h4>

                  <ul className="space-y-4">
                    {feature.capabilities.map((capability) => (
                      <li
                        key={capability}
                        className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-bright" />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-8 flex items-center text-sm font-semibold text-brand-bright transition-colors duration-300 group-hover:text-foreground">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* EXPLORE ALL CTA */}
        <div className="mt-14 text-center">
          <Link
            to="/services#all"
            className="group inline-flex items-center gap-2 rounded-xl border border-brand/35 bg-brand/[0.06] px-8 py-3.5 text-sm font-semibold text-foreground transition-colors duration-300 hover:border-brand/70 hover:bg-brand/10"
          >
            Explore All Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
};