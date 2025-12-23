import { useState } from "react";
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
  ChevronUp,
  ChevronDown
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/* -------------------- TYPES -------------------- */

type ServiceCategory = "defense" | "offense" | "advisory";

/* -------------------- GLOW CONFIG -------------------- */

const serviceGlow: Record<ServiceCategory, string> = {
  defense:
    "hover:shadow-[0_0_0_2px_rgba(59,130,246,0.9),0_0_40px_rgba(59,130,246,0.5)] hover:border-blue-500/60",
  offense:
    "hover:shadow-[0_0_0_2px_rgba(239,68,68,0.9),0_0_40px_rgba(239,68,68,0.5)] hover:border-red-500/60",
  advisory:
    "hover:shadow-[0_0_0_2px_rgba(34,197,94,0.9),0_0_40px_rgba(34,197,94,0.5)] hover:border-green-500/60",
};

/* -------------------- DATA -------------------- */

const defensiveServices = [
  { icon: Eye, title: "SOC – 24/7 Monitoring", desc: "Continuous monitoring of logs, endpoints, and network traffic to detect, analyze, and respond to threats in real time." },
  { icon: Cpu, title: "Managed Detection & Response (MDR)", desc: "Advanced detection using EDR/XDR and behavioral analytics to identify sophisticated attacks." },
  { icon: Zap, title: "Incident Response (IR)", desc: "Rapid containment, investigation, recovery, and post-incident analysis for security breaches." },
  { icon: Shield, title: "Vulnerability Management", desc: "Continuous discovery, assessment, and prioritization of vulnerabilities across systems." },
  { icon: Network, title: "Network Security", desc: "Firewall protection, IDS/IPS, segmentation, and malicious traffic detection." },
  { icon: Cloud, title: "Email & Cloud Security", desc: "Protection against phishing, malware, and account compromise across cloud platforms." }
];

const offensiveServices = [
  { icon: Bug, title: "Web Application Pentesting", desc: "Identify OWASP Top 10 vulnerabilities, authentication issues, and logic flaws." },
  { icon: Network, title: "Network Pentesting", desc: "Simulated attacks to uncover misconfigurations, weak credentials, and exposed services." },
  { icon: Mail, title: "Phishing Simulation", desc: "Controlled phishing campaigns to evaluate employee awareness and social engineering risk." }
];

const advisoryServices = [
  { icon: Briefcase, title: "Virtual CISO (vCISO)", desc: "Strategic cybersecurity leadership without the cost of a full-time executive." },
  { icon: UserCheck, title: "Security Awareness Training", desc: "Role-based training to improve employee security behavior and threat awareness." },
  { icon: ClipboardCheck, title: "Compliance Support", desc: "Support for ISO 27001, SOC 2, GDPR, HIPAA, PCI-DSS and audit readiness." }
];

/* -------------------- PAGE -------------------- */

export default function Services() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-3">Our Security Services</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Defensive, offensive, and advisory services aligned to your risk posture.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-card/50 backdrop-blur-sm border border-border">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="defense">Defensive</TabsTrigger>
              <TabsTrigger value="offense">Offensive</TabsTrigger>
              <TabsTrigger value="advisory">Advisory</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
              <ServiceColumn
                title="Defensive Security"
                subtitle="Detect. Defend. Respond."
                services={defensiveServices}
                category="defense"
              />
              <ServiceColumn
                title="Offensive Security"
                subtitle="Think Like an Attacker"
                services={offensiveServices}
                category="offense"
              />
              <ServiceColumn
                title="Advisory & Compliance"
                subtitle="Govern. Secure. Comply."
                services={advisoryServices}
                category="advisory"
              />
            </div>
          </TabsContent>

          <TabsContent value="defense">
            <div className="flex justify-center">
              <ServiceColumn
                title="Defensive Security"
                subtitle="Detect. Defend. Respond."
                services={defensiveServices}
                category="defense"
              />
            </div>
          </TabsContent>

          <TabsContent value="offense">
            <div className="flex justify-center">
              <ServiceColumn
                title="Offensive Security"
                subtitle="Think Like an Attacker"
                services={offensiveServices}
                category="offense"
              />
            </div>
          </TabsContent>

          <TabsContent value="advisory">
            <div className="flex justify-center">
              <ServiceColumn
                title="Advisory & Compliance"
                subtitle="Govern. Secure. Comply."
                services={advisoryServices}
                category="advisory"
              />
            </div>
          </TabsContent>
        </Tabs>

      </div>
    </section>
  );
}

/* -------------------- COLUMN -------------------- */

function ServiceColumn({
  title,
  subtitle,
  services,
  category
}: {
  title: string;
  subtitle: string;
  services: any[];
  category: ServiceCategory;
}) {
  const PAGE_SIZE = 3;
  const [page, setPage] = useState(0);

  const totalPages = Math.floor((services.length - 1) / PAGE_SIZE);

  const start = page * PAGE_SIZE;
  const visible =
    category === "defense"
      ? services.slice(start, start + PAGE_SIZE)
      : services.slice(0, PAGE_SIZE);

  const isCarousel = category === "defense" && services.length > PAGE_SIZE;

  const goNext = () =>
    setPage((p) => Math.min(p + 1, totalPages));

  const goPrev = () =>
    setPage((p) => Math.max(p - 1, 0));

  return (
    <div className="relative flex flex-col items-center">

      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-muted-foreground text-sm">{subtitle}</p>
      </div>

      {/* Animated cards container */}
      <div className="space-y-6 min-h-[760px]">
        {visible.map((item, i) => (
          <div
            key={`${page}-${i}`}
            className="animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            <ServiceCard {...item} category={category} />
          </div>
        ))}
      </div>

      {/* Buttons only for Defensive */}
      {isCarousel && (
        <div className="absolute -right-14 top-1/2 -translate-y-1/2 flex flex-col gap-3">
          <Button
            size="icon"
            variant="ghost"
            disabled={page === 0}
            onClick={goPrev}
          >
            <ChevronUp />
          </Button>

          <Button
            size="icon"
            variant="ghost"
            disabled={page === totalPages}
            onClick={goNext}
          >
            <ChevronDown />
          </Button>
        </div>
      )}
    </div>
  );
}

/* -------------------- CARD -------------------- */

function ServiceCard({
  icon: Icon,
  title,
  desc,
  category
}: {
  icon: any;
  title: string;
  desc: string;
  category: ServiceCategory;
}) {
  const hoverIconColor =
    category === "defense"
      ? "group-hover:text-blue-400 group-hover:border-blue-400/40 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
      : category === "offense"
      ? "group-hover:text-red-400 group-hover:border-red-400/40 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]"
      : "group-hover:text-green-400 group-hover:border-green-400/40 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]";

  return (
    <Card
      className={`
        group w-full max-w-[380px] h-[230px]
        p-7
        bg-card/70 backdrop-blur
        border border-border
        transition-all duration-300
        hover:-translate-y-1
        ${serviceGlow[category]}
      `}
    >
      <div
        className={`
          w-14 h-14 mb-4 rounded-xl
          flex items-center justify-center
          border border-white/20
          text-white
          transition-all duration-300
          ${hoverIconColor}
        `}
      >
        <Icon className="w-7 h-7" />
      </div>

      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {desc}
      </p>
    </Card>
  );
}
