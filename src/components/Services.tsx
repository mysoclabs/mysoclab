import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Eye,
  Cpu,
  Zap,
  Shield,
  Network,
  Cloud,
  Bug,
  Mail,
  UserCheck,
  ClipboardCheck,
  Briefcase,
  ChevronRight,
} from "lucide-react";

import { Card } from "@/components/ui/card";
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
import vcisoImg from "@/assets/service-vciso.jpg";
import complianceImg from "@/assets/service-compliance.jpg";

/* -------------------- TYPES -------------------- */

type ServiceCategory = "defense" | "offense" | "advisory";

type Service = {
  icon: any;
  title: string;
  desc: string;
  image: string;
};

/* -------------------- DATA -------------------- */

const defensiveServices: Service[] = [
  {
    icon: Eye,
    title: "SOC – 24/7 Monitoring",
    desc: "Continuous monitoring of logs, endpoints, and network traffic to detect and respond to threats in real time.",
    image: socImg,
  },
  {
    icon: Cpu,
    title: "Managed Detection & Response (MDR)",
    desc: "Advanced detection using EDR/XDR and behavioral analytics to identify sophisticated attacks.",
    image: mdrImg,
  },
  {
    icon: Zap,
    title: "Incident Response (IR)",
    desc: "Rapid containment, investigation, recovery, and post-incident analysis.",
    image: irImg,
  },
  {
    icon: Shield,
    title: "Vulnerability Management",
    desc: "Continuous discovery, assessment, and prioritization of vulnerabilities.",
    image: vulnerImg,
  },
  {
    icon: Network,
    title: "Network Security",
    desc: "Firewall protection, IDS/IPS, segmentation, and malicious traffic detection.",
    image: networkSecImg,
  },
  {
    icon: Cloud,
    title: "Email & Cloud Security",
    desc: "Protection against phishing, malware, and account compromise.",
    image: emailCloudImg,
  },
];

const offensiveServices: Service[] = [
  {
    icon: Bug,
    title: "Web Application Pentesting",
    desc: "Identify OWASP Top 10 vulnerabilities, auth issues, and logic flaws.",
    image: webPentestingImg,
  },
  {
    icon: Network,
    title: "Network Pentesting",
    desc: "Simulated attacks to uncover misconfigurations and exposed services.",
    image: networkPentestingImg,
  },
  {
    icon: Mail,
    title: "Phishing Simulation",
    desc: "Controlled campaigns to test employee awareness and resilience.",
    image: phishingImg,
  },
];

const advisoryServices: Service[] = [
  {
    icon: Briefcase,
    title: "Virtual CISO (vCISO)",
    desc: "Strategic cybersecurity leadership without a full-time executive.",
    image: vcisoImg,
  },
  {
    icon: UserCheck,
    title: "Security Awareness Training",
    desc: "Role-based training to reduce human risk.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Support",
    desc: "ISO 27001, SOC 2, GDPR, HIPAA, PCI-DSS readiness.",
    image: complianceImg,
  },
];

/* -------------------- MAIN PAGE -------------------- */

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("defense");
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);
  const detailPaneRef = useRef<HTMLDivElement>(null);

  // Get active services array
  const activeServices =
    activeCategory === "defense"
      ? defensiveServices
      : activeCategory === "offense"
      ? offensiveServices
      : advisoryServices;

  const currentService = activeServices[selectedServiceIndex] || activeServices[0];

  const handleCategoryChange = (category: ServiceCategory) => {
    setActiveCategory(category);
    setSelectedServiceIndex(0);
  };

  const handleServiceClick = (index: number) => {
    setSelectedServiceIndex(index);
    if (window.innerWidth < 768) {
      setTimeout(() => {
        detailPaneRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#08080A] py-20 text-foreground font-sans">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 grid-veil opacity-40" />
      <div className="pointer-events-none absolute top-0 right-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,hsl(var(--brand)/0.14),transparent_68%)] blur-2xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,hsl(var(--brand)/0.07),transparent_70%)] blur-2xl" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* HEADER */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="section-eyebrow is-centered justify-center mb-4">
            Our Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-white">
            Comprehensive Security Services
          </h1>
          <p className="text-lg text-slate-400 font-light leading-relaxed">
            Protecting your digital future with defensive, offensive, and advisory solutions aligned to your business risk.
          </p>
        </div>

        {/* TOP CATEGORY PILLS */}
        <div className="mb-14 flex justify-center">
          <div className="flex w-full max-w-3xl flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-2 backdrop-blur-sm sm:flex-row">
            {(
              [
                { key: "defense", label: "Defensive Security" },
                { key: "offense", label: "Offensive Security" },
                { key: "advisory", label: "Advisory & Compliance" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleCategoryChange(tab.key)}
                className={`flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                  activeCategory === tab.key
                    ? "bg-gradient-to-b from-brand-bright to-brand text-white shadow-[0_14px_30px_-18px_hsl(var(--brand)/0.95)]"
                    : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* MAIN SIDE-BY-SIDE INTERACTIVE LAYOUT */}
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: VERTICAL SERVICE TABS */}
          <div className="col-span-12 md:col-span-5 lg:col-span-4 space-y-3">
            {activeServices.map((service, index) => {
              const Icon = service.icon;
              const isSelected = selectedServiceIndex === index;

              return (
                <button
                  key={index}
                  onClick={() => handleServiceClick(index)}
                  className={`group relative w-full overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 sm:p-5 ${
                    isSelected
                      ? "border-brand/45 bg-gradient-to-r from-brand/[0.14] to-white/[0.03] text-white shadow-[0_20px_45px_-32px_hsl(var(--brand)/0.9)]"
                      : "border-white/10 bg-white/[0.02] text-slate-300 hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {/* active accent bar */}
                  <span
                    className={`absolute left-0 top-1/2 h-8 w-[2px] -translate-y-1/2 rounded-full bg-brand-bright transition-opacity duration-300 ${
                      isSelected ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border transition-colors ${
                          isSelected
                            ? "border-brand/40 bg-brand/10"
                            : "border-white/10 bg-black/40 group-hover:border-white/20"
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${isSelected ? "text-brand-bright" : "text-slate-300"}`} />
                      </div>
                      <span className="text-sm font-semibold leading-tight max-w-[200px] sm:max-w-none">
                        {service.title}
                      </span>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                        isSelected
                          ? "translate-x-0.5 text-brand-bright"
                          : "text-slate-600 group-hover:translate-x-0.5 group-hover:text-slate-300"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT COLUMN: SERVICE DETAIL PANE */}
          <Card
            ref={detailPaneRef}
            className="col-span-12 md:col-span-7 lg:col-span-8 min-h-[380px] scroll-mt-20 flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.015] p-6 backdrop-blur-xl sm:p-8 shadow-[0_35px_80px_-50px_rgba(0,0,0,1)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* DETAIL SUB-COLUMN A: ILLUSTRATIVE IMAGE */}
              <div className="lg:col-span-4 col-span-12">
                <div className="relative aspect-video w-full max-w-[280px] mx-auto overflow-hidden rounded-2xl border border-white/10 shadow-lg lg:aspect-square lg:max-w-none">
                  <img
                    src={currentService.image}
                    alt={currentService.title}
                    className="w-full h-full object-cover opacity-90 transition-transform duration-500 hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08080A]/70 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-brand/10" />
                </div>
              </div>

              {/* DETAIL SUB-COLUMN B: DETAILS INFO */}
              <div className="lg:col-span-8 col-span-12 flex flex-col justify-center space-y-4">
                <div>
                  <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.22em] text-brand-bright">
                    {activeCategory === "defense"
                      ? "Defensive Security"
                      : activeCategory === "offense"
                      ? "Offensive Security"
                      : "Advisory & Compliance"}
                  </span>

                  <h3 className="mb-4 text-2xl font-bold leading-tight tracking-tight text-white">
                    {currentService.title}
                  </h3>

                  <p className="text-sm font-light leading-relaxed text-slate-400">
                    {currentService.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* ACTION FOOTER */}
            <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
              <p className="text-center text-sm font-normal text-slate-400 sm:text-left">
                Need more information or a customized solution? Let's talk.
              </p>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button className="h-12 w-full rounded-xl bg-gradient-to-b from-brand-bright to-brand px-8 font-semibold text-white shadow-[0_16px_35px_-20px_hsl(var(--brand)/0.95)] transition-all hover:brightness-110 sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
