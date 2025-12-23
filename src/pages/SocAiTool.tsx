import { RedFooter } from "@/components/RedFooter";
import {
  Shield,
  Eye,
  Zap,
  Brain,
  Target,
  Lock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Link } from "react-router-dom";
import redEagleLogo from "@/assets/red-eagle-logo.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { RedNavigation } from "@/components/RedNavigation";

const SocAiTool = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      {/* ===== RED NAVIGATION ===== */}
      <RedNavigation />

      {/* ================= HERO SECTION ================= */}
      <section
        ref={heroRef}
        className="relative min-h-[95vh] flex items-center overflow-hidden pt-16"
      >
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 70% 40%, rgba(221,20,20,0.35), transparent 60%), linear-gradient(135deg, #0a0a0a 0%, #0f0f0f 60%, #090909 100%)",
          }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.05]"
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
                  Red Eagle • EDR Platform
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Intrusion Detection <br />
                <span className="text-red-500">and Response Platform</span>
              </h1>

              <p className="text-lg text-gray-300 max-w-xl mb-6">
                Red Eagle EDR is an advanced endpoint detection and response
                solution designed to deliver deep visibility and powerful
                protection against modern cyber threats.
              </p>

              <p className="text-sm text-gray-400 max-w-xl mb-10">
                Using AI-driven behavioral monitoring, Red Eagle continuously
                tracks system activity in real-time and stops threats before
                they spread across your infrastructure.
              </p>

              <div className="max-w-xl mb-8">
                <Alert className="border-red-500/30 bg-black/40 backdrop-blur-sm">
                  <Shield className="h-4 w-4 text-red-500" />
                  <AlertTitle className="text-white">Coming Soon</AlertTitle>
                  <AlertDescription className="text-gray-300">
                    We’re actively building this tool. It will take a little time — meanwhile, you can schedule a consultation.
                  </AlertDescription>
                </Alert>
              </div>

              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8"
                >
                  schedule  consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              {/* Trust points */}
              <div className="grid grid-cols-2 gap-4 mt-10 max-w-lg">
                {[
                  "Real-time threat detection",
                  "AI-powered behavior analysis",
                  "Stops zero-day attacks",
                  "Enterprise-grade EDR",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-red-500" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT VISUAL (FIXED & ENHANCED) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1 }}
              className="relative flex justify-center"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 160px rgba(221,20,20,0.75)",
                  background:
                    "linear-gradient(135deg, rgba(221,20,20,0.45), rgba(0,0,0,0.85))",
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="
                  w-[420px] h-[420px]
                  rounded-3xl
                  flex items-center justify-center
                  border border-red-500/40
                "
                style={{
                  background:
                    "linear-gradient(135deg, rgba(221,20,20,0.25), rgba(0,0,0,0.9))",
                  boxShadow: "0 0 120px rgba(221,20,20,0.35)",
                }}
              >
                <img
                  src={redEagleLogo}
                  alt="Red Eagle EDR"
                  className="w-64 h-64 object-contain drop-shadow-[0_0_35px_rgba(221,20,20,0.6)]"
                />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-10 md:py-12 bg-black">
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 text-center">
          {[
            { value: "99.99%", label: "Uptime" },
            { value: "24/7/365", label: "Monitoring" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-5xl md:text-6xl font-bold text-red-500 mb-1">
                <AnimatedCounter value={stat.value} duration={3000} />
              </div>
              <div className="text-[11px] uppercase tracking-widest text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 bg-[#0b0b0b]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Built for Modern Cyber Warfare
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Red Eagle combines AI, automation, and deep telemetry to stop
              attacks faster than traditional SOC tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: "AI Threat Intelligence" },
              { icon: Eye, title: "Endpoint Visibility" },
              { icon: Zap, title: "Instant Response" },
              { icon: Lock, title: "Ransomware Protection" },
              { icon: Target, title: "Precision Detection" },
              { icon: Shield, title: "Zero Trust Defense" },
            ].map((f, i) => (
              <div
                key={i}
                className="p-8 rounded-xl border border-red-500/20 bg-black hover:border-red-500 transition"
              >
                <f.icon className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400">
                  Enterprise-grade protection designed to stop advanced threats
                  before damage occurs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Alert className="border-red-500/30 bg-black/40 backdrop-blur-sm">
              <Shield className="h-4 w-4 text-red-500" />
              <AlertTitle className="text-white">Coming Soon</AlertTitle>
              <AlertDescription className="text-gray-300">
                We’re building this experience and rolling out features step-by-step. Schedule a consultation.
              </AlertDescription>
              <div className="pt-4">
                <Link to="/contact">
                  <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold">
                    schedule  consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </Alert>
          </div>
        </div>
      </section>

      <RedFooter />
    </div>
  );
};

export default SocAiTool;
