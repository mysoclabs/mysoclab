import { RedFooter } from "@/components/RedFooter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import redEagleLogo from "@/assets/red-eagle-logo.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { RedNavigation } from "@/components/RedNavigation";

// Key Features Data
const keyFeatures = [
  {
    title: "Continuous Endpoint Monitoring",
    desc: "Monitor endpoint activity continuously to maintain visibility across modern systems."
  },
  {
    title: "Real-Time Threat Detection",
    desc: "Identify suspicious behavior and potential threats as they occur."
  },
  {
    title: "AI-Driven Behavioral Analysis",
    desc: "Leverage intelligent behavioral analysis to detect advanced security threats."
  },
  {
    title: "Forensic Insights",
    desc: "Access detailed forensic information to support threat investigation."
  },
  {
    title: "Rapid Response",
    desc: "Respond quickly to detected threats and minimize security risks."
  },
  {
    title: "Deep Endpoint Visibility",
    desc: "Gain visibility into endpoint activities for improved security monitoring."
  }
];

// Highlights Data
const highlights = [
  "Advanced Endpoint Detection",
  "Continuous Security Monitoring",
  "Real-Time Threat Identification",
  "AI-Powered Analysis",
  "Forensic Investigation Support",
  "Rapid Threat Response"
];

// Capabilities Data
const capabilities = [
  {
    title: "Endpoint Detection",
    desc: "Identify suspicious endpoint activities and potential threats."
  },
  {
    title: "Threat Investigation",
    desc: "Analyze incidents using behavioral and forensic insights."
  },
  {
    title: "Behavior Monitoring",
    desc: "Monitor system behavior to uncover unusual activities."
  },
  {
    title: "Threat Response",
    desc: "Take action quickly to contain and address threats."
  },
  {
    title: "Security Visibility",
    desc: "Maintain visibility across endpoints and system activities."
  },
  {
    title: "Modern Protection",
    desc: "Protect modern systems against sophisticated cyber attacks."
  }
];

const SocAiTool = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen bg-[#0e0101] text-white">
      {/* ===== NAVIGATION ===== */}
      <RedNavigation />

      {/* ================= HERO / INTRO ================= */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center overflow-hidden pt-20"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-[#120101]" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <img src={redEagleLogo} className="w-10 h-10" />
                <span className="text-sm font-semibold uppercase text-red-500">
                  Red Eagle • EDR Tool
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Endpoint Detection <br />
                <span className="text-red-500">and Response Tool</span>
              </h1>

              <p className="text-lg text-gray-300 max-w-xl mb-6">
                Red Eagle EDR is an advanced endpoint detection and response
                tool designed to deliver deep visibility, intelligent
                threat detection, and rapid response across modern systems.
              </p>

              <p className="text-sm text-gray-400 max-w-xl mb-10">
                Built with AI-driven behavioral monitoring and forensic insights,
                Red Eagle helps security teams identify, investigate, and
                respond to advanced threats before impact.
              </p>

              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8"
                >
                  Contact Us for Enterprise Solutions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            {/* RIGHT VISUAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1 }}
              className="relative flex justify-center"
            >
              <img
                src={redEagleLogo}
                alt="Red Eagle EDR"
                className="w-[380px] h-[380px] object-contain transition-transform duration-500 ease-out hover:-translate-y-3"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 1: KEY FEATURES ================= */}
      <section className="py-24 bg-[#121212] border-y border-red-950/20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-500">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Key Features
            </h2>
            <div className="w-12 h-1 bg-red-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {keyFeatures.map((feat, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-[#523232] via-[#301e1e] to-[#1e1212] border-t-2 border-t-red-400/60 border-l border-l-red-500/30 border-r border-r-black/40 border-b border-b-black/50 hover:border-red-500/45 hover:from-[#5e3e3e] hover:via-[#3d2727] hover:to-[#241616] rounded-2xl p-8 hover:-translate-y-1.5 transition-all duration-500 min-h-[180px] flex flex-col justify-center group overflow-hidden"
              >
                {/* Background subtle radial gradient for hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 space-y-3">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-red-400 transition-colors duration-300">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: WHY CHOOSE RED EAGLE EDR ================= */}
      <section className="py-24 bg-[#121212] relative overflow-hidden">
        {/* Subtle red glow in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left side content */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-500">
                Platform Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Why Choose Red Eagle EDR
              </h2>
              <div className="w-12 h-1 bg-red-600 rounded-full" />
              <p className="text-gray-400 leading-relaxed text-sm font-light">
                Red Eagle EDR is designed to help security teams detect, investigate, and respond to threats efficiently. By combining endpoint monitoring, real-time detection, AI-driven behavioral analysis, and forensic insights, the platform helps organizations strengthen their security posture against modern cyber threats.
              </p>
            </div>

            {/* Right side highlights (Typography Grid with mini-cards) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-gradient-to-br from-[#523232] via-[#301e1e] to-[#1e1212] border-t border-t-red-400/50 border-l border-l-red-500/25 border-r border-r-black/30 border-b border-b-black/40 hover:border-red-500/35 hover:from-[#5e3e3e] hover:via-[#3d2727] hover:to-[#241616] rounded-xl p-5 transition-all duration-300 group overflow-hidden"
                >
                  <div className="relative z-10 flex items-center gap-4">
                    <span className="flex-shrink-0 text-red-500 bg-[#260a0a] border border-red-900/30 w-8 h-8 rounded-lg flex items-center justify-center group-hover:border-red-500/40 transition-colors duration-300">
                      <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-gray-200 tracking-tight">
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 3: SECURITY CAPABILITIES ================= */}
      <section className="py-24 bg-[#121212] border-t border-red-950/20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-500">
              Operational Defense
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Security Capabilities
            </h2>
            <div className="w-12 h-1 bg-red-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {capabilities.map((cap, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-[#523232] via-[#301e1e] to-[#1e1212] border-t-2 border-t-red-400/60 border-l border-l-red-500/30 border-r border-r-black/40 border-b border-b-black/50 hover:border-red-500/45 hover:from-[#5e3e3e] hover:via-[#3d2727] hover:to-[#241616] rounded-2xl p-8 hover:-translate-y-1.5 transition-all duration-500 min-h-[180px] flex flex-col justify-center group overflow-hidden"
              >
                {/* Background subtle radial gradient for hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 space-y-3">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-red-400 transition-colors duration-300">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RedFooter />
    </div>
  );
};

export default SocAiTool;
