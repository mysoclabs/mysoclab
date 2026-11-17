import { useEffect, useRef, useState, type CSSProperties } from "react";

/**
 * Comprehensive Security Solutions — three service panels.
 */
const panels = [
  {
    title: "SOC – 24/7 Monitoring",
    description:
      "24/7 monitoring of logs, endpoints and network traffic to detect potential security threats.",
  },
  {
    title: "Web App Penetration Testing",
    description:
      "Identify OWASP Top 10 vulnerabilities, application security weaknesses and business logic flaws before attackers can exploit them.",
  },
  {
    title: "Virtual CISO (vCISO)",
    description:
      "Get expert cybersecurity leadership, strategic guidance and risk management without the cost of hiring a full-time CISO.",
  },
];

/**
 * Comprehensive security solutions. Two-column band: heading and a large
 * operations visual on the left, three wide practice panels on the right.
 * The entrance is triggered once, when the section first enters the viewport.
 */
export const SecuritySolutions = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const revealClass = revealed ? "is-in" : "";

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="solutions-section border-b border-white/10 bg-[#15171B] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
    >
      <div className="site-container site-section">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-stretch lg:gap-10 xl:gap-14">
          {/* Left — heading and descriptive paragraph */}
          <div
            className={`solutions-reveal solutions-reveal-left flex flex-col ${revealClass}`}
          >
            <span className="site-eyebrow">Capabilities</span>

            <h2 className="mt-5 text-[clamp(2rem,3.4vw,2.9rem)] font-bold leading-[1.06] tracking-[-0.03em] text-white">
              <span className="block">Comprehensive</span>
              <span className="block text-brand-bright">
                Security Solutions
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-text">
              MySOC Labs delivers comprehensive cybersecurity services
              designed to protect businesses against evolving digital threats.
              From continuous security monitoring and application penetration
              testing to strategic security leadership, we help organisations
              identify vulnerabilities, strengthen their defences and build a
              resilient security posture.
            </p>
          </div>

          {/* Right — three wide panels */}
          <div className="flex flex-col gap-4 lg:h-full">
            {panels.map((panel, index) => (
              <article
                key={panel.title}
                className={`solutions-reveal solutions-reveal-panel flex flex-col justify-center rounded-xl border border-l-2 border-red-500/10 border-l-brand bg-[#111215] p-7 transition-colors duration-200 sm:p-8 lg:flex-1 lg:px-9 ${revealClass}`}
                style={
                  { "--reveal-delay": `${0.12 + index * 0.12}s` } as CSSProperties
                }
              >
                <h3 className="text-[19px] font-semibold tracking-[-0.01em] text-white sm:text-[20px]">
                  {panel.title}
                </h3>
                <p className="mt-3 max-w-[48ch] text-[14px] leading-[1.7] text-secondary-text">
                  {panel.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};