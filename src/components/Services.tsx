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
    <section className="py-20 bg-[#0a0f1d] text-slate-100 font-sans relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest block mb-3">
            Our Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-white">
            Comprehensive Security Services
          </h1>
          <p className="text-lg text-slate-400 font-light">
            Protecting your digital future with defensive, offensive, and advisory solutions aligned to your business risk.
          </p>
        </div>

        {/* TOP CATEGORY PILLS */}
        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => handleCategoryChange("defense")}
            className={`px-6 py-3 rounded-xl text-sm font-semibold border transition-all duration-300 ${
              activeCategory === "defense"
                ? "bg-slate-800 border-slate-700 text-white"
                : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800/60"
            }`}
          >
            Defensive Security
          </button>
          <button
            onClick={() => handleCategoryChange("offense")}
            className={`px-6 py-3 rounded-xl text-sm font-semibold border transition-all duration-300 ${
              activeCategory === "offense"
                ? "bg-slate-800 border-slate-700 text-white"
                : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800/60"
            }`}
          >
            Offensive Security
          </button>
          <button
            onClick={() => handleCategoryChange("advisory")}
            className={`px-6 py-3 rounded-xl text-sm font-semibold border transition-all duration-300 ${
              activeCategory === "advisory"
                ? "bg-slate-800 border-slate-700 text-white"
                : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800/60"
            }`}
          >
            Advisory & Compliance
          </button>
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
                  className={`w-full flex items-center justify-between p-5 rounded-2xl text-left border transition-all duration-300 group ${
                    isSelected
                      ? "bg-slate-800/80 border-slate-700 text-white"
                      : "bg-[#0b1121]/50 border-white/10 text-slate-300 hover:text-white hover:bg-slate-800/30 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${
                        isSelected
                          ? "bg-slate-900 border-slate-800"
                          : "bg-slate-950 border-white/10 group-hover:border-white/20"
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isSelected ? "text-primary" : "text-slate-300"}`} />
                    </div>
                    <span className="font-semibold text-sm leading-tight max-w-[200px] sm:max-w-none">
                      {service.title}
                    </span>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isSelected
                        ? "translate-x-1 text-white"
                        : "text-slate-500 group-hover:translate-x-1 group-hover:text-slate-300"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* RIGHT COLUMN: SERVICE DETAIL PANE */}
          <Card 
            ref={detailPaneRef}
            className="scroll-mt-20 col-span-12 md:col-span-7 lg:col-span-8 bg-[#0b1121]/20 backdrop-blur-xl border-2 border-white/12 p-6 sm:p-8 rounded-3xl min-h-[380px] flex flex-col justify-between"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* DETAIL SUB-COLUMN A: ILLUSTRATIVE IMAGE */}
              <div className="lg:col-span-4 col-span-12">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg aspect-video lg:aspect-square w-full max-w-[280px] lg:max-w-none mx-auto">
                  <img
                    src={currentService.image}
                    alt={currentService.title}
                    className="w-full h-full object-cover opacity-90 transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d]/60 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* DETAIL SUB-COLUMN B: DETAILS INFO */}
              <div className="lg:col-span-8 col-span-12 flex flex-col justify-center space-y-4">
                <div>
                  <span className="text-[11px] font-bold text-primary uppercase tracking-widest block mb-2">
                    {activeCategory === "defense"
                      ? "Defensive Security"
                      : activeCategory === "offense"
                      ? "Offensive Security"
                      : "Advisory & Compliance"}
                  </span>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight tracking-tight">
                    {currentService.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    {currentService.desc}
                  </p>
                </div>
              </div>

            </div>

            {/* ACTION FOOTER */}
            <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <p className="text-sm text-slate-400 font-normal text-center sm:text-left">
                Need more information or a customized solution? Let's talk.
              </p>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12 rounded-xl transition-all">
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
