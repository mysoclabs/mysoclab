/**
 * Shared content for the public website.
 *
 * Every string in this file is either existing MySOC Labs copy or a neutral
 * description of an existing service. No statistics, customer names,
 * certifications, awards or partnerships are invented here.
 */

import {
  Award,
  HeadphonesIcon,
  RefreshCw,
  TrendingUp,
  Zap,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------ imagery ------------------------------ */

import solutionDefensiveImg from "@/assets/optimized/photos/solution-defensive.jpg";
import solutionOffensiveImg from "@/assets/optimized/photos/solution-offensive.jpg";
import solutionAdvisoryImg from "@/assets/optimized/photos/solution-advisory.jpg";
import careersTeamImg from "@/assets/photos/careers-team.jpg";

import serviceSocImg from "@/assets/optimized/photos/service-soc.jpg";
import serviceMdrImg from "@/assets/optimized/photos/service-mdr.jpg";
import serviceIrImg from "@/assets/optimized/photos/service-ir.jpg";
import serviceVulnerabilityImg from "@/assets/optimized/photos/service-vulnerability.jpg";
import serviceNetworkImg from "@/assets/optimized/photos/service-network.jpg";
import serviceEmailCloudImg from "@/assets/optimized/photos/service-email-cloud.jpg";
import serviceNetworkPentestImg from "@/assets/optimized/photos/service-network-pentest.jpg";
import servicePhishingImg from "@/assets/optimized/photos/service-phishing.jpg";
import serviceMobilePentestImg from "@/assets/optimized/photos/service-mobile-pentest.jpg";
import serviceApiSecurityImg from "@/assets/optimized/photos/service-api-security.jpg";
import serviceCloudAssessmentImg from "@/assets/optimized/photos/service-cloud-assessment.jpg";
import serviceAwarenessImg from "@/assets/optimized/photos/service-awareness.jpg";
import serviceComplianceImg from "@/assets/optimized/photos/service-compliance.jpg";

/* ------------------------------- icons ------------------------------- */

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

export type ServiceCategory = "defense" | "offense" | "advisory";

export type Service = {
  iconSrc: string;
  accent: string;
  title: string;
  desc: string;
  image: string;
  capabilities: string[];
};

export type CategoryMeta = {
  key: ServiceCategory;
  label: string;
  /** Short, factual description of what the category covers. */
  summary: string;
  /**
   * Practice description shown on the Services page. Kept separate from
   * `summary` so the homepage, hero and navigation copy stays unchanged.
   */
  description: string;
  iconSrc: string;
  accent: string;
  image: string;
  anchor: string;
};

export const categories: CategoryMeta[] = [
  {
    key: "defense",
    label: "Defensive Security",
    summary:
      "Monitoring, detection and response across endpoints, networks and cloud environments.",
    description:
      "Monitoring, detection and response across endpoints, networks and cloud environments.",
    iconSrc: defensiveIcon,
    accent: "#F4343D",
    image: solutionDefensiveImg,
    anchor: "defense",
  },
  {
    key: "offense",
    label: "Offensive Security",
    summary:
      "Adversarial testing of applications, networks, APIs and cloud infrastructure.",
    description:
      "MySocLabs offers practical, intelligence-led security testing to uncover vulnerabilities across applications, networks, APIs, and cloud environments before attackers can exploit them.",
    iconSrc: offensiveIcon,
    accent: "#A78BFA",
    image: solutionOffensiveImg,
    anchor: "offense",
  },
  {
    key: "advisory",
    label: "Advisory & Compliance",
    summary:
      "Security leadership, awareness training and audit readiness for regulated teams.",
    description:
      "From strategic security leadership to employee awareness and compliance readiness, MySocLabs provides practical guidance that helps organizations build stronger, more accountable security programs.",
    iconSrc: advisoryIcon,
    accent: "#4C8DFF",
    image: solutionAdvisoryImg,
    anchor: "advisory",
  },
];

export const defensiveServices: Service[] = [
  {
    iconSrc: socIcon,
    accent: "#F4343D",
    title: "SOC – 24/7 Monitoring",
    desc: "MySocLabs delivers 24/7 security monitoring to detect suspicious activity, investigate potential threats, and maintain continuous visibility across your digital environment.",
    image: serviceSocImg,
    capabilities: ["Logs", "Endpoints", "Network traffic", "Real-time detection & response"],
  },
  {
    iconSrc: mdrIcon,
    accent: "#FF7A59",
    title: "Managed Detection & Response (MDR)",
    desc: "Our MDR services go beyond security alerts, combining expert threat investigation with timely response to identify, contain, and address genuine security threats.",
    image: serviceMdrImg,
    capabilities: ["EDR / XDR", "Behavioral analytics", "Sophisticated attacks"],
  },
  {
    iconSrc: irIcon,
    accent: "#F5A524",
    title: "Incident Response (IR)",
    desc: "From initial investigation to threat containment and recovery support, MySocLabs provides structured incident response services to help minimize business disruption.",
    image: serviceIrImg,
    capabilities: ["Containment", "Investigation", "Recovery", "Post-incident analysis"],
  },
  {
    iconSrc: vulnerIcon,
    accent: "#FFC247",
    title: "Vulnerability Management",
    desc: "Our vulnerability management services identify security weaknesses, assess their potential impact, and prioritize remediation to reduce exposure across your IT environment.",
    image: serviceVulnerabilityImg,
    capabilities: ["Discovery", "Assessment", "Prioritization"],
  },
  {
    iconSrc: networkSecIcon,
    accent: "#2DD4BF",
    title: "Network Security",
    desc: "MySocLabs provides network security services focused on identifying vulnerabilities, strengthening access controls, and protecting critical network infrastructure.",
    image: serviceNetworkImg,
    capabilities: ["Firewall protection", "IDS / IPS", "Segmentation", "Malicious traffic detection"],
  },
  {
    iconSrc: emailCloudIcon,
    accent: "#38BDF8",
    title: "Email & Cloud Security",
    desc: "Our email and cloud security services help safeguard business communications, cloud workloads, and sensitive information against phishing, unauthorized access, and emerging threats.",
    image: serviceEmailCloudImg,
    capabilities: ["Phishing", "Malware", "Account compromise"],
  },
];

export const offensiveServices: Service[] = [
  {
    iconSrc: webPentestingIcon,
    accent: "#A78BFA",
    title: "Web Application Pentesting",
    desc: "Our web application penetration testing services uncover exploitable vulnerabilities, assess security risks, and provide actionable recommendations to strengthen application security.",
    image: solutionOffensiveImg,
    capabilities: ["OWASP Top 10", "Authentication issues", "Logic flaws"],
  },
  {
    iconSrc: networkPentestingIcon,
    accent: "#818CF8",
    title: "Network Pentesting",
    desc: "MySocLabs conducts network penetration testing to identify exploitable weaknesses, assess potential attack paths, and strengthen defenses across critical network infrastructure.",
    image: serviceNetworkPentestImg,
    capabilities: ["Simulated attacks", "Misconfigurations", "Exposed services"],
  },
  {
    iconSrc: phishingIcon,
    accent: "#E879F9",
    title: "Phishing Simulation",
    desc: "Our phishing simulation services recreate realistic attack scenarios to assess employee awareness, identify risky behaviors, and highlight opportunities for improvement.",
    image: servicePhishingImg,
    capabilities: ["Controlled campaigns", "Employee awareness", "Resilience"],
  },
  {
    iconSrc: mobilePentestingIcon,
    accent: "#C084FC",
    title: "Mobile Application Pentesting",
    desc: "Through comprehensive mobile application security testing, MySocLabs identifies vulnerabilities in applications, data handling, and authentication mechanisms that could expose users and sensitive information.",
    image: serviceMobilePentestImg,
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
    desc: "Our API security testing services assess authentication, authorization, and data exposure risks to uncover vulnerabilities in the interfaces connecting your applications and systems.",
    image: serviceApiSecurityImg,
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
    desc: "MySocLabs evaluates cloud configurations, access controls, and security practices to identify exposure and recommend improvements across cloud environments.",
    image: serviceCloudAssessmentImg,
    capabilities: [
      "Cloud Misconfiguration Assessment",
      "Identity and Access Management",
      "Excessive Permissions",
      "Exposed Cloud Resources",
      "Cloud Security Risk Assessment",
    ],
  },
];

export const advisoryServices: Service[] = [
  {
    iconSrc: vcisoIcon,
    accent: "#34D399",
    title: "Virtual CISO (vCISO)",
    desc: "Our vCISO services provide strategic cybersecurity guidance, helping organizations assess risks, establish security priorities, and develop practical security roadmaps aligned with business goals.",
    image: solutionAdvisoryImg,
    capabilities: ["Strategic cybersecurity leadership", "Executive advisory"],
  },
  {
    iconSrc: awarenessIcon,
    accent: "#A3E635",
    title: "Security Awareness Training",
    desc: "MySocLabs delivers security awareness training designed to help employees recognize phishing attempts, understand common cyber risks, and make safer decisions in their daily work.",
    image: serviceAwarenessImg,
    capabilities: ["Role-based training", "Human risk reduction"],
  },
  {
    iconSrc: complianceIcon,
    accent: "#4C8DFF",
    title: "Compliance Support",
    desc: "Our compliance support services help organizations understand applicable security requirements, identify control gaps, and prepare for audits through practical guidance and improved security practices.",
    image: serviceComplianceImg,
    capabilities: ["ISO 27001", "SOC 2", "GDPR", "HIPAA", "PCI-DSS"],
  },
];

export const servicesByCategory: Record<ServiceCategory, Service[]> = {
  defense: defensiveServices,
  offense: offensiveServices,
  advisory: advisoryServices,
};

export const categoryByKey: Record<ServiceCategory, CategoryMeta> = {
  defense: categories[0],
  offense: categories[1],
  advisory: categories[2],
};

/* ------------------------- trust & expertise ------------------------- */

export const expertise = [
  {
    title: "Industry-leading security experts",
    description:
      "Practitioners who plan, test and defend enterprise environments.",
  },
  {
    title: "24/7 threat monitoring and response",
    description:
      "Security operations coverage across endpoints, networks and cloud.",
  },
  {
    title: "Advanced AI-powered protection",
    description:
      "Detection engineering supported by behavioural analytics and EDR/XDR.",
  },
  {
    title: "Compliance with global standards",
    description:
      "Readiness support for ISO 27001, SOC 2, GDPR, HIPAA and PCI-DSS.",
  },
];

/* ------------------------- why MySOC Labs --------------------------- */

export const reasons: { title: string; description: string; icon: LucideIcon }[] = [
  {
    icon: Award,
    title: "Proven Expertise",
    description:
      "Years of experience protecting organizations from sophisticated cyber threats.",
  },
  {
    icon: Zap,
    title: "Rapid Response",
    description:
      "Swift incident response with minimal downtime to keep your business running.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description:
      "Round-the-clock monitoring and support from our dedicated security team.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Innovation",
    description:
      "Always evolving with the latest security technologies and methodologies.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Security Improvement",
    description:
      "Strengthen your security posture through proactive assessments, continuous monitoring and actionable recommendations.",
  },
];

/* --------------------------- our approach --------------------------- */

export type ApproachStage = {
  title: string;
  description: string;
};

export const approachStages: ApproachStage[] = [
  {
    title: "Understand & Scope",
    description:
      "Understand business requirements, infrastructure, security objectives and the assessment scope.",
  },
  {
    title: "Assess & Discover",
    description:
      "Evaluate systems, applications and security environments to identify potential vulnerabilities and risks.",
  },
  {
    title: "Analyze & Validate",
    description:
      "Investigate findings, validate security weaknesses and understand their potential business impact.",
  },
  {
    title: "Recommend & Strengthen",
    description:
      "Provide practical recommendations to improve security controls and reduce identified risks.",
  },
  {
    title: "Report & Improve",
    description:
      "Present findings, document recommendations and support continuous security improvement.",
  },
];

/* ---------------------------- Red Eagle ----------------------------- */

export const redEagle = {
  name: "Red Eagle",
  tagline: "Endpoint Detection and Response Platform",
  summary:
    "An advanced endpoint detection and response platform built to secure modern systems against sophisticated cyber attacks.",
  description:
    "Red Eagle continuously monitors endpoint activity, detects suspicious behavior in real time, and responds to threats using AI-driven behavioral and forensic analysis.",
  capabilities: [
    "Continuous endpoint activity monitoring",
    "Real-time detection of suspicious behaviour",
    "AI-driven behavioural and forensic analysis",
  ],
};

/* ----------------------------- careers ------------------------------ */

export const careers = {
  heading: "Work at the heart of digital defense",
  summary:
    "At MySocLabs, we are protecting the future by building advanced defenses against sophisticated cyber adversaries. We are looking for relentless minds to join our mission.",
  locations: "Remote / Hybrid (India)",
  workModel: "Flexible Hours",
  image: careersTeamImg,
};

/* ----------------------------- contact ------------------------------ */

export const contactDetails = {
  email: "contact@mysoclabs.com",
  location: "Hyderabad, India",
  hours: "24/7",
};
