import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, Award, Headphones, Zap } from "lucide-react";

import {
  categories,
  servicesByCategory,
  type ServiceCategory,
} from "@/components/site/content";

/*
 * Real photography already available in the project. Each service uses a
 * distinct image so the detail panel changes meaningfully between services.
 */
import serviceSocImg from "@/assets/service-icons/soc.jpeg";
import serviceMdrImg from "@/assets/service-icons/mdr.PNG";
import serviceIrImg from "@/assets/service-icons/incident-response.PNG";
import serviceVulnerabilityImg from "@/assets/service-icons/vulnerability-management.jpeg";
import serviceNetworkImg from "@/assets/service-icons/network-security.PNG";
import serviceEmailCloudSecurityImg from "@/assets/service-icons/email-cloud-security.PNG";
import serviceWebPentestImg from "@/assets/service-icons/web-application-pentesting.WEBP";
import serviceNetworkPentestImg from "@/assets/service-icons/network-pentesting.PNG";
import servicePhishingImg from "@/assets/service-icons/phishing-simulation.PNG";
import serviceMobilePentestImg from "@/assets/service-icons/mobile-application-pentesting.PNG";
import serviceApiSecurityImg from "@/assets/service-icons/api-security-testing.png";
import serviceCloudAssessmentImg from "@/assets/service-icons/cloud-security-assessment.JPEG";
import serviceVcisoImg from "@/assets/service-icons/vciso.JPEG";
import serviceAwarenessImg from "@/assets/service-icons/security-awareness-training.JPEG";
import serviceComplianceImg from "@/assets/service-icons/compliance-support.JPEG";

/* Static credibility highlights shown beneath the service detail panels. */
const serviceHighlights = [
  {
    title: "Proven Expertise",
    description:
      "Years of experience protecting organizations from sophisticated cyber threats.",
    Icon: Award,
  },
  {
    title: "Rapid Response",
    description:
      "Swift incident response with minimal downtime to keep your business running.",
    Icon: Zap,
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock monitoring and support from our dedicated security team.",
    Icon: Headphones,
  },
];

const practiceKeys: ServiceCategory[] = ["defense", "offense", "advisory"];

const isPractice = (value: string): value is ServiceCategory =>
  practiceKeys.includes(value as ServiceCategory);

const practiceIntro: Record<
  ServiceCategory,
  { tagline?: string; description: string }
> = {
  defense: {
    description:
      "Monitoring, detection and response across endpoints, networks and cloud environments.",
  },
  offense: {
    tagline: "Find the Weaknesses Before They Become Real Threats.",
    description:
      "MySocLabs offers practical, intelligence-led security testing to uncover vulnerabilities across applications, networks, APIs, and cloud environments before attackers can exploit them.",
  },
  advisory: {
    tagline: "Security Decisions Backed by Expertise.",
    description:
      "From strategic security leadership to employee awareness and compliance readiness, MySocLabs provides practical guidance that helps organizations build stronger, more accountable security programs.",
  },
};

/* Images mapped to the exact service titles in the shared content file. */
const serviceImages: Record<string, string> = {
  "SOC – 24/7 Monitoring": serviceSocImg,
  "Managed Detection & Response (MDR)": serviceMdrImg,
  "Incident Response (IR)": serviceIrImg,
  "Vulnerability Management": serviceVulnerabilityImg,
  "Network Security": serviceNetworkImg,
  "Email & Cloud Security": serviceEmailCloudSecurityImg,
  "Web Application Pentesting": serviceWebPentestImg,
  "Network Pentesting": serviceNetworkPentestImg,
  "Phishing Simulation": servicePhishingImg,
  "Mobile Application Pentesting": serviceMobilePentestImg,
  "API Security Testing": serviceApiSecurityImg,
  "Cloud Security Assessment": serviceCloudAssessmentImg,
  "Virtual CISO (vCISO)": serviceVcisoImg,
  "Security Awareness Training": serviceAwarenessImg,
  "Compliance Support": serviceComplianceImg,
};

/* The short lead line supplied with each offensive and advisory service. */
const serviceLeads: Record<string, string | undefined> = {
  "Web Application Pentesting":
    "Your applications deserve more than surface-level security.",
  "Network Pentesting": "Know how far an attacker could get.",
  "Phishing Simulation":
    "The best way to prepare is to put awareness to the test.",
  "Mobile Application Pentesting":
    "Security should be built into every mobile experience.",
  "API Security Testing": "Every connection deserves a closer look.",
  "Cloud Security Assessment":
    "Cloud flexibility shouldn’t come with unnecessary risk.",
  "Virtual CISO (vCISO)":
    "Strong security starts with the right direction.",
  "Security Awareness Training":
    "A security-aware team is a stronger first line of defense.",
  "Compliance Support":
    "Make compliance a structured process, not a last-minute challenge.",
};

const getHashPractice = (hash: string): ServiceCategory => {
  const value = hash.replace("#", "");
  return isPractice(value) ? value : "defense";
};

export default function Services() {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState<ServiceCategory>(() =>
    getHashPractice(window.location.hash)
  );
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);
  const detailRef = useRef<HTMLDivElement>(null);

  /* Keep /services#defense, #offense and #advisory links working. */
  useEffect(() => {
    const hashCategory = getHashPractice(location.hash);
    if (location.hash && isPractice(location.hash.replace("#", ""))) {
      setActiveCategory(hashCategory);
      setSelectedServiceIndex(0);
    }
  }, [location.hash]);

  const activeServices = servicesByCategory[activeCategory];
  const currentService =
    activeServices[selectedServiceIndex] ?? activeServices[0];
  const activeCategoryLabel =
    categories.find((category) => category.key === activeCategory)?.label ??
    "Defensive Security";
  const intro = practiceIntro[activeCategory];
  const currentImage =
    serviceImages[currentService.title] ?? currentService.image;
  const currentLead = serviceLeads[currentService.title];

  const handleCategoryChange = (category: ServiceCategory) => {
    setActiveCategory(category);
    setSelectedServiceIndex(0);
    navigate(
      { hash: category },
      { replace: true, preventScrollReset: true }
    );
  };

  const handleServiceClick = (index: number) => {
    setSelectedServiceIndex(index);
    if (window.innerWidth < 1024) {
      window.setTimeout(() => {
        detailRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#08090B] pb-16 pt-8 text-white lg:pb-20 lg:pt-10">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* ---------- Page introduction ---------- */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-end lg:gap-16">
          <h1 className="max-w-[920px] text-[clamp(2.5rem,4.6vw,4.5rem)] font-bold leading-[1.03] tracking-[-0.035em] text-white">
            Security services
            <br />
            across three practices.
          </h1>
          <p className="max-w-[420px] text-[15px] leading-[1.7] text-[#D6D6D6] lg:pb-1 lg:text-[17px]">
            Defensive operations, offensive testing and advisory support aligned
            to your business risk. Select a practice to see the services inside
            it.
          </p>
        </div>

        {/* ---------- Practice tabs ---------- */}
        <div
          role="tablist"
          aria-label="Security practices"
          className="mt-20 flex flex-wrap items-center gap-x-8 gap-y-2 lg:mt-24 lg:gap-x-10"
        >
          {categories.map((category) => {
            const isActive = category.key === activeCategory;

            return (
              <button
                key={category.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleCategoryChange(category.key)}
                className={`relative pb-3 text-[14px] font-semibold transition-colors sm:text-[15px] ${
                  isActive ? "text-brand" : "text-[#C8C8C8] hover:text-white"
                }`}
              >
                {category.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 h-[2px] transition-opacity duration-200 ${
                    isActive
                      ? "bg-brand opacity-100"
                      : "bg-transparent opacity-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* ---------- Practice introduction ---------- */}
        <div className="mt-10 min-h-[3.5rem] max-w-4xl lg:mt-14">
          {intro.tagline ? (
            <>
              <p className="text-[16px] font-semibold leading-7 text-white sm:text-[17px]">
                {intro.tagline}
              </p>
              <p className="mt-1.5 text-[14px] leading-7 text-[#D6D6D6] sm:text-[15px]">
                {intro.description}
              </p>
            </>
          ) : (
            <p className="text-[15px] leading-7 text-[#D6D6D6] sm:text-[16px]">
              {intro.description}
            </p>
          )}
        </div>

        {/* ---------- Services layout ---------- */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,440px)_minmax(0,1fr)] xl:gap-12">
          {/* Vertical service navigation */}
          <aside className="self-start overflow-hidden border border-white/[0.15] bg-[#0A0A0C]">
            <div className="flex items-center justify-between gap-4 border-b border-white/[0.15] px-5 py-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C8C8C8]">
                Service Areas
              </span>
              <span className="truncate text-[12px] text-[#C8C8C8]">
                {activeCategoryLabel}
              </span>
            </div>

            <div role="group" aria-label="Select a service">
              {activeServices.map((service, index) => {
                const isSelected = selectedServiceIndex === index;

                return (
                  <button
                    key={service.title}
                    type="button"
                    onClick={() => handleServiceClick(index)}
                    aria-current={isSelected ? "true" : undefined}
                    className={`relative flex w-full items-start border-b border-white/[0.15] px-5 py-4 text-left transition-colors last:border-b-0 ${
                      isSelected
                        ? "bg-white/[0.045]"
                        : "hover:bg-white/[0.025]"
                    }`}
                  >
                    <span
                      className={`min-w-0 flex-1 text-[14px] leading-6 sm:text-[15px] ${
                        isSelected
                          ? "font-semibold text-white"
                          : "font-medium text-[#D6D6D6]"
                      }`}
                    >
                      {service.title}
                    </span>
                    {isSelected ? (
                      <span
                        aria-hidden="true"
                        className="absolute inset-y-0 left-0 w-[2px] bg-brand"
                      />
                    ) : null}
                  </button>
                );
              })}
            </div>

            <div className="border-t border-white/[0.15] p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C8C8C8]">
                Need guidance?
              </p>
              <p className="mt-2 text-[13px] leading-6 text-[#C8C8C8]">
                Not sure which service fits your risk profile? Our team can help
                you scope the right engagement.
              </p>
              <Link
                to="/contact"
                className="group mt-3 inline-flex items-center gap-2 text-[13px] font-semibold text-brand transition-colors hover:text-brand-bright"
              >
                Talk to an expert
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </aside>

          {/* Selected service detail */}
          <div
            ref={detailRef}
            className="scroll-mt-24 overflow-hidden border border-white/[0.15] bg-[#0A0A0C]"
          >
            <div className="relative h-[240px] w-full overflow-hidden bg-[#111] sm:h-[320px] lg:h-[360px] xl:h-[400px]">
              <img
                src={currentImage}
                alt={currentService.title}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="flex min-h-[300px] flex-col p-6 sm:p-8 lg:p-10">
              <h2 className="text-[clamp(1.75rem,2.2vw,2.35rem)] font-bold leading-[1.15] tracking-[-0.025em] text-white">
                {currentService.title}
              </h2>

              {currentLead ? (
                <p className="mt-4 text-[16px] leading-7 text-[#DCDCDC] sm:text-[17px]">
                  {currentLead}
                </p>
              ) : null}

              <p className="mt-2 max-w-[74ch] text-[15px] leading-7 text-[#D6D6D6] sm:text-[16px] sm:leading-8">
                {currentService.desc}
              </p>

              <div className="mt-auto pt-8">
                <div className="border-t border-white/[0.15] pt-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[13px] leading-6 text-[#C8C8C8] sm:text-[14px]">
                      Need more information or a customized solution? Let's talk.
                    </p>
                    <Link
                      to="/contact"
                      className="group inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-[4px] bg-brand px-6 text-[13.5px] font-semibold text-white transition-colors hover:bg-brand-bright"
                    >
                      Contact Us
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Service highlights ---------- */}
        <div className="mt-10 grid grid-cols-1 border-t border-white/[0.15] pt-10 sm:mt-12 sm:pt-12 lg:grid-cols-3 lg:gap-0">
          {serviceHighlights.map((highlight, index) => (
            <div
              key={highlight.title}
              className={`flex items-start gap-4 ${
                index === 0
                  ? "lg:pr-8"
                  : "mt-8 border-t border-white/[0.15] pt-8 lg:mt-0 lg:border-t-0 lg:border-l lg:border-white/[0.15] lg:pl-8 lg:pt-0"
              } ${
                index > 0 && index < serviceHighlights.length - 1
                  ? "lg:pr-8"
                  : ""
              }`}
            >
              <highlight.Icon
                aria-hidden="true"
                strokeWidth={1.75}
                className="mt-0.5 h-6 w-6 shrink-0 text-white"
              />
              <div className="min-w-0">
                <h3 className="text-[17px] font-semibold leading-6 text-white">
                  {highlight.title}
                </h3>
                <p className="mt-2 max-w-[34ch] text-[14px] leading-6 text-[#C8C8C8]">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
