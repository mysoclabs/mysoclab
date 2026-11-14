import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, HeadphonesIcon, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";

import socImg from "@/assets/service-soc.jpg";
import mdrImg from "@/assets/service-mdr.jpg";
import irImg from "@/assets/service-ir.jpg";
import vulnerImg from "@/assets/service-vulner.jpg";
import networkSecImg from "@/assets/service-network-sec.jpg";
import emailCloudImg from "@/assets/service-email-cloud.jpg";
import webPentestingImg from "@/assets/service-web-pentesting.jpg";
import networkPentestingImg from "@/assets/service-network-pentesting.jpg";
import phishingImg from "@/assets/service-phishing.jpg";
import mobilePentestingImg from "@/assets/service-mobile-pentesting.jpg";
import apiSecurityImg from "@/assets/service-api-security.jpg";
import cloudAssessmentImg from "@/assets/service-cloud-assessment.jpg";
import vcisoImg from "@/assets/service-vciso.jpg";
import complianceImg from "@/assets/service-compliance.jpg";

import defensiveIcon from "@/assets/service-icons/defensive-security.svg";
import offensiveIcon from "@/assets/service-icons/offensive-security.svg";
import advisoryIcon from "@/assets/service-icons/advisory-compliance.svg";
import socIcon from "@/assets/service-icons/soc-monitoring.svg";
import mdrIcon from "@/assets/service-icons/managed-detection-response.svg";
import irIcon from "@/assets/service-icons/incident-response.svg";
import vulnerIcon from "@/assets/service-icons/vulnerability-management.svg";
import networkSecIcon from "@/assets/service-icons/network-security.svg";
import emailCloudIcon from "@/assets/service-icons/email-cloud-security.svg";
import webPentestingIcon from "@/assets/service-icons/web-application-pentesting.svg";
import networkPentestingIcon from "@/assets/service-icons/network-pentesting.svg";
import phishingIcon from "@/assets/service-icons/phishing-simulation.svg";
import mobilePentestingIcon from "@/assets/service-icons/mobile-application-pentesting.svg";
import apiSecurityIcon from "@/assets/service-icons/api-security-testing.svg";
import cloudAssessmentIcon from "@/assets/service-icons/cloud-security-assessment.svg";
import vcisoIcon from "@/assets/service-icons/virtual-ciso.svg";
import awarenessIcon from "@/assets/service-icons/security-awareness-training.svg";
import complianceIcon from "@/assets/service-icons/compliance-support.svg";

/* -------------------- TYPES -------------------- */

type ServiceCategory = "defense" | "offense" | "advisory";

type Service = {
  iconSrc: string;
  accent: string;
  title: string;
  desc: string;
  image: string;
  /**
   * Capabilities for the original services are extracted verbatim from their
   * existing descriptions. The three newest Offensive Security services use
   * the capability lists supplied with their approved copy. No additional
   * capabilities or claims are introduced.
   */
  capabilities: string[];
};

/** Builds an 8-digit hex colour from a 6-digit hex plus an alpha fraction. */
const tint = (hex: string, alpha: number) =>
  `${hex}${Math.round(alpha * 255)
    .toString(16)
    .padStart(2, "0")}`;

/* -------------------- DATA -------------------- */

const defensiveServices: Service[] = [
  {
    iconSrc: socIcon,
    accent: "#F4343D",
    title: "SOC – 24/7 Monitoring",
    desc: "Continuous monitoring of logs, endpoints, and network traffic to detect and respond to threats in real time.",
    image: socImg,
    capabilities: ["Logs", "Endpoints", "Network traffic", "Real-time detection & response"],
  },
  {
    iconSrc: mdrIcon,
    accent: "#FF7A59",
    title: "Managed Detection & Response (MDR)",
    desc: "Advanced detection using EDR/XDR and behavioral analytics to identify sophisticated attacks.",
    image: mdrImg,
    capabilities: ["EDR / XDR", "Behavioral analytics", "Sophisticated attacks"],
  },
  {
    iconSrc: irIcon,
    accent: "#F5A524",
    title: "Incident Response (IR)",
    desc: "Rapid containment, investigation, recovery, and post-incident analysis.",
    image: irImg,
    capabilities: ["Containment", "Investigation", "Recovery", "Post-incident analysis"],
  },
  {
    iconSrc: vulnerIcon,
    accent: "#FFC247",
    title: "Vulnerability Management",
    desc: "Continuous discovery, assessment, and prioritization of vulnerabilities.",
    image: vulnerImg,
    capabilities: ["Discovery", "Assessment", "Prioritization"],
  },
  {
    iconSrc: networkSecIcon,
    accent: "#2DD4BF",
    title: "Network Security",
    desc: "Firewall protection, IDS/IPS, segmentation, and malicious traffic detection.",
    image: networkSecImg,
    capabilities: ["Firewall protection", "IDS / IPS", "Segmentation", "Malicious traffic detection"],
  },
  {
    iconSrc: emailCloudIcon,
    accent: "#38BDF8",
    title: "Email & Cloud Security",
    desc: "Protection against phishing, malware, and account compromise.",
    image: emailCloudImg,
    capabilities: ["Phishing", "Malware", "Account compromise"],
  },
];

const offensiveServices: Service[] = [
  {
    iconSrc: webPentestingIcon,
    accent: "#A78BFA",
    title: "Web Application Pentesting",
    desc: "Identify OWASP Top 10 vulnerabilities, auth issues, and logic flaws.",
    image: webPentestingImg,
    capabilities: ["OWASP Top 10", "Authentication issues", "Logic flaws"],
  },
  {
    iconSrc: networkPentestingIcon,
    accent: "#818CF8",
    title: "Network Pentesting",
    desc: "Simulated attacks to uncover misconfigurations and exposed services.",
    image: networkPentestingImg,
    capabilities: ["Simulated attacks", "Misconfigurations", "Exposed services"],
  },
  {
    iconSrc: phishingIcon,
    accent: "#E879F9",
    title: "Phishing Simulation",
    desc: "Controlled campaigns to test employee awareness and resilience.",
    image: phishingImg,
    capabilities: ["Controlled campaigns", "Employee awareness", "Resilience"],
  },
  {
    iconSrc: mobilePentestingIcon,
    accent: "#C084FC",
    title: "Mobile Application Pentesting",
    desc: "Identify security vulnerabilities in Android and iOS applications, including insecure data storage, authentication flaws, and API weaknesses.",
    image: mobilePentestingImg,
    capabilities: [
      "Android Application Security",
      "iOS Application Security",
      "Insecure Data Storage",
      "Authentication Testing",
      "API Communication Security",
    ],
  },
  {
    iconSrc: apiSecurityIcon,
    accent: "#9AA5FF",
    title: "API Security Testing",
    desc: "Identify API vulnerabilities, including broken authentication, authorization flaws, excessive data exposure, and business logic issues.",
    image: apiSecurityImg,
    capabilities: [
      "Broken Authentication",
      "Authorization Testing",
      "Excessive Data Exposure",
      "Business Logic Testing",
      "API Vulnerability Assessment",
    ],
  },
  {
    iconSrc: cloudAssessmentIcon,
    accent: "#F472B6",
    title: "Cloud Security Assessment",
    desc: "Assess cloud environments to identify misconfigurations, excessive permissions, exposed resources, and security risks.",
    image: cloudAssessmentImg,
    capabilities: [
      "Cloud Misconfiguration Assessment",
      "Identity and Access Management",
      "Excessive Permissions",
      "Exposed Cloud Resources",
      "Cloud Security Risk Assessment",
    ],
  },
];

const advisoryServices: Service[] = [
  {
    iconSrc: vcisoIcon,
    accent: "#34D399",
    title: "Virtual CISO (vCISO)",
    desc: "Strategic cybersecurity leadership without a full-time executive.",
    image: vcisoImg,
    capabilities: ["Strategic cybersecurity leadership", "Executive advisory"],
  },
  {
    iconSrc: awarenessIcon,
    accent: "#A3E635",
    title: "Security Awareness Training",
    desc: "Role-based training to reduce human risk.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop",
    capabilities: ["Role-based training", "Human risk reduction"],
  },
  {
    iconSrc: complianceIcon,
    accent: "#4C8DFF",
    title: "Compliance Support",
    desc: "ISO 27001, SOC 2, GDPR, HIPAA, PCI-DSS readiness.",
    image: complianceImg,
    capabilities: ["ISO 27001", "SOC 2", "GDPR", "HIPAA", "PCI-DSS"],
  },
];

const categories: { key: ServiceCategory; label: string; iconSrc: string }[] = [
  { key: "defense", label: "Defensive Security", iconSrc: defensiveIcon },
  { key: "offense", label: "Offensive Security", iconSrc: offensiveIcon },
  { key: "advisory", label: "Advisory & Compliance", iconSrc: advisoryIcon },
];

/**
 * Business benefits reuse the approved "Why Choose MySocLabs" copy already
 * published on the homepage — nothing new is claimed here.
 */
const serviceBenefits = [
  {
    icon: Award,
    title: "Proven Expertise",
    desc: "Years of experience protecting organizations from sophisticated cyber threats.",
  },
  {
    icon: Zap,
    title: "Rapid Response",
    desc: "Swift incident response with minimal downtime to keep your business running.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    desc: "Round-the-clock monitoring and support from our dedicated security team.",
  },
];

/* -------------------- MAIN PAGE -------------------- */

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("defense");
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);
  const detailPaneRef = useRef<HTMLDivElement>(null);

  const activeServices =
    activeCategory === "defense"
      ? defensiveServices
      : activeCategory === "offense"
      ? offensiveServices
      : advisoryServices;

  const currentService = activeServices[selectedServiceIndex] || activeServices[0];
  const activeCategoryMeta =
    categories.find((category) => category.key === activeCategory) ?? categories[0];
  const activeCategoryLabel = activeCategoryMeta.label;
  /**
   * The Defensive detail panel is the reference: services 1 and 3 resolve to
   * 421px at lg and 397px at md (image and information boxes are equal because
   * the image fills the row). Offensive services carry more capabilities, so
   * their row is pinned to those exact reference heights and their capability
   * area uses a tighter rhythm to stay inside the same box.
   */
  const isOffense = activeCategory === "offense";

  const handleCategoryChange = (category: ServiceCategory) => {
    setActiveCategory(category);
    setSelectedServiceIndex(0);
  };

  const handleServiceClick = (index: number) => {
    setSelectedServiceIndex(index);
    if (window.innerWidth < 1280) {
      setTimeout(() => {
        detailPaneRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#08080A] py-20 text-foreground font-sans lg:py-24">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 grid-veil opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-10 max-w-3xl">
          <span className="section-eyebrow mb-4">Our Services</span>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Comprehensive Security Services
          </h1>
          <p className="text-lg font-light leading-relaxed text-slate-400">
            Protecting your digital future with defensive, offensive, and advisory solutions aligned to your business risk.
          </p>
        </div>

        {/* CATEGORY SELECTOR */}
        <div className="mb-8 flex w-full flex-col gap-1.5 rounded-xl border border-white/10 bg-white/[0.025] p-1.5 backdrop-blur-sm sm:inline-flex sm:w-auto sm:flex-row sm:items-center lg:mb-10">
          {categories.map((category) => {
            const isActive = activeCategory === category.key;

            return (
              <button
                key={category.key}
                type="button"
                onClick={() => handleCategoryChange(category.key)}
                aria-pressed={isActive}
                className={`group flex items-center justify-start gap-2.5 rounded-lg px-4 py-2.5 text-[13px] font-semibold transition-all duration-300 sm:justify-center sm:px-5 ${
                  isActive
                    ? "bg-gradient-to-b from-brand-bright to-brand text-white shadow-[0_10px_24px_-16px_rgba(0,0,0,0.9)]"
                    : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                <img
                  src={category.iconSrc}
                  alt=""
                  aria-hidden="true"
                  className={`h-[15px] w-[15px] shrink-0 transition-[filter] duration-300 ${
                    isActive ? "brightness-0 invert" : ""
                  }`}
                />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* INTERACTIVE LAYOUT */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,360px)_minmax(0,1fr)] xl:gap-8">
          {/* SERVICE NAVIGATION */}
          <div className="self-start overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_30px_70px_-60px_rgba(0,0,0,1)] backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
              <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-bright" />
                Service Areas
              </span>
            </div>

            <div className="grid grid-cols-1 gap-1 px-2 pb-2 sm:grid-cols-2 xl:grid-cols-1" role="group" aria-label="Select a service">
              {activeServices.map((service, index) => {
                const isSelected = selectedServiceIndex === index;

                return (
                  <button
                    key={service.title}
                    type="button"
                    onClick={() => handleServiceClick(index)}
                    aria-pressed={isSelected}
                    className={`group relative flex w-full items-center gap-3 overflow-hidden rounded-xl border px-3 py-2.5 text-left transition-all duration-300 ${
                      isSelected
                        ? "border-white/20 bg-white/[0.06]"
                        : "border-transparent hover:border-white/[0.09] hover:bg-white/[0.035]"
                    }`}
                  >
                    {/* active rail */}
                    <span
                      className={`absolute inset-y-2.5 left-0 w-[2px] rounded-full bg-brand-bright transition-opacity duration-300 ${
                        isSelected ? "opacity-100" : "opacity-0"
                      }`}
                    />

                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border transition-all duration-300"
                      style={{
                        backgroundColor: tint(service.accent, isSelected ? 0.22 : 0.1),
                        borderColor: tint(service.accent, isSelected ? 0.55 : 0.26),
                        boxShadow: isSelected
                          ? "inset 0 1px 0 rgba(255,255,255,0.08)"
                          : undefined,
                      }}
                    >
                      <img
                        src={service.iconSrc}
                        alt=""
                        aria-hidden="true"
                        draggable={false}
                        className="h-[21px] w-[21px]"
                      />
                    </span>

                    <span
                      className={`min-w-0 flex-1 text-[13px] leading-snug tracking-[-0.01em] transition-colors duration-300 ${
                        isSelected
                          ? "font-semibold text-white"
                          : "font-medium text-slate-300 group-hover:text-white"
                      }`}
                    >
                      {service.title}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="hidden border-t border-white/[0.07] px-4 pb-4 pt-4 xl:block">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                Need guidance?
              </p>
              <p className="mt-2 text-[12px] leading-relaxed text-slate-400">
                Not sure which service fits your risk profile? Our team can help you scope the right engagement.
              </p>
              <Link
                to="/contact"
                className="group mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand-bright transition-colors hover:text-white"
              >
                Talk to an expert
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* SERVICE DETAIL */}
          <div
            ref={detailPaneRef}
            className="scroll-mt-24 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.045] to-white/[0.012] shadow-[0_35px_80px_-55px_rgba(0,0,0,1)]"
          >
            <div key={`${activeCategory}-${selectedServiceIndex}`} className="animate-fade-in">
              <div className="h-px w-full bg-gradient-to-r from-brand/70 via-brand/25 to-transparent" />
              <div className={`grid md:grid-cols-12 ${isOffense ? "md:h-[397px] lg:h-[421px]" : ""}`}>
                {/* DETAIL CONTENT */}
                <div
                  className={`order-last flex flex-col p-6 sm:p-8 md:order-first md:col-span-7 lg:p-10 ${
                    isOffense ? "md:justify-center" : ""
                  }`}
                >
                  <div className={`flex items-center justify-between gap-4 ${isOffense ? "mb-3" : "mb-4"}`}>
                    <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-bright">
                      <span className="h-1 w-1 rounded-full bg-brand-bright" />
                      {activeCategoryLabel}
                    </span>
                  </div>

                  <h3
                    className={`text-balance text-2xl font-bold leading-[1.15] tracking-tight text-white lg:text-[28px] ${
                      isOffense ? "mb-2" : "mb-3"
                    }`}
                  >
                    {currentService.title}
                  </h3>

                  <p
                    className={`max-w-[54ch] text-sm font-light text-slate-400 lg:text-[15px] ${
                      isOffense ? "leading-[1.5]" : "leading-relaxed"
                    }`}
                  >
                    {currentService.desc}
                  </p>

                  {/* CAPABILITIES */}
                  <div className={isOffense ? "mt-4" : "mt-7"}>
                    <div className="flex items-center gap-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                        Capabilities
                      </p>
                      <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                    </div>
                    <div
                      className={`flex flex-wrap ${
                        isOffense ? "mt-2 gap-1.5" : "mt-3.5 gap-2"
                      }`}
                    >
                      {currentService.capabilities.map((capability) => (
                        <span
                          key={capability}
                          className={`inline-flex items-center rounded-md border border-white/[0.09] bg-white/[0.03] font-medium leading-none text-slate-300 transition-colors duration-300 hover:border-brand/35 hover:bg-brand/[0.07] hover:text-white ${
                            isOffense
                              ? "gap-1.5 px-2.5 py-1 text-[11px]"
                              : "gap-2 px-3 py-1.5 text-[11.5px]"
                          }`}
                        >
                          <span className="h-1 w-1 rounded-full bg-brand-bright/85" />
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div
                    className={`flex flex-col gap-4 border-t border-white/[0.07] sm:flex-row sm:items-center sm:justify-between ${
                      isOffense ? "mt-4 pt-5" : "mt-8 pt-6"
                    }`}
                  >
                    <p className="max-w-[15rem] text-[13px] leading-relaxed text-slate-400">
                      Need more information or a customized solution? Let's talk.
                    </p>
                    <Link to="/contact" className="shrink-0">
                      <Button className="group h-11 w-full rounded-lg bg-gradient-to-b from-brand-bright to-brand px-6 text-sm font-semibold text-white shadow-[0_14px_30px_-20px_rgba(0,0,0,0.9)] transition-all duration-300 hover:brightness-110 sm:w-auto">
                        Contact Us
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* SERVICE IMAGE */}
                <div className="group relative order-first overflow-hidden border-b border-white/[0.07] bg-[#0B0B0D] md:order-last md:col-span-5 md:min-h-[360px] md:border-b-0 md:border-l">
                  <div className="relative h-[220px] w-full overflow-hidden md:absolute md:inset-0 md:h-full">
                    <img
                      src={currentService.image}
                      alt={currentService.title}
                      className="absolute inset-0 h-full w-full object-cover object-center opacity-95 transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08080A]/85 via-[#08080A]/20 to-transparent md:bg-gradient-to-r md:from-[#08080A]/80 md:via-[#08080A]/15 md:to-transparent" />
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.06]" />

                    {/* image caption */}
                    <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 rounded-lg border border-white/15 bg-black/60 px-3 py-2 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.9)] backdrop-blur-md">
                      <img
                        src={activeCategoryMeta.iconSrc}
                        alt=""
                        aria-hidden="true"
                        className="h-3.5 w-3.5"
                      />
                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-300">
                        {activeCategoryLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* BUSINESS BENEFITS */}
              <div className="border-t border-white/[0.07] bg-black/30 px-6 py-5 sm:px-8 lg:px-10">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/[0.07]">
                  {serviceBenefits.map((benefit) => {
                    const BenefitIcon = benefit.icon;

                    return (
                      <div key={benefit.title} className="flex items-start gap-3 sm:px-5 sm:first:pl-0 sm:last:pr-0">
                        <BenefitIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-bright/90" />
                        <div>
                          <p className="text-[12px] font-semibold text-white/90">{benefit.title}</p>
                          <p className="mt-0.5 text-xs leading-relaxed text-slate-400">
                            {benefit.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
