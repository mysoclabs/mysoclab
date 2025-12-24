import { RedFooter } from "@/components/RedFooter";
import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Link } from "react-router-dom";
import redEagleLogo from "@/assets/red-eagle-logo.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { RedNavigation } from "@/components/RedNavigation";

const SocAiTool = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      {/* ===== NAVIGATION ===== */}
      <RedNavigation />

      {/* ================= HERO / INTRO ================= */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center overflow-hidden pt-20"
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
                Endpoint Detection <br />
                <span className="text-red-500">and Response Platform</span>
              </h1>

              <p className="text-lg text-gray-300 max-w-xl mb-6">
                Red Eagle EDR is an advanced endpoint detection and response
                platform designed to deliver deep visibility, intelligent
                threat detection, and rapid response across modern systems.
              </p>

              <p className="text-sm text-gray-400 max-w-xl mb-10">
                Built with AI-driven behavioral monitoring and forensic insights,
                Red Eagle helps security teams identify, investigate, and
                respond to advanced threats before impact.
              </p>

              <div className="max-w-xl mb-10">
                <Alert className="border-red-500/30 bg-black/40 backdrop-blur-sm">
                  <Shield className="h-4 w-4 text-red-500" />
                  <AlertTitle className="text-white">Product Status</AlertTitle>
                  <AlertDescription className="text-gray-300">
                    Red Eagle EDR is currently under active development.
                    Core capabilities are being built and tested internally.
                  </AlertDescription>
                </Alert>
              </div>

              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8"
                >
                  Contact to know more about the tool
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
              <div
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
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= BIG COMING SOON ================= */}
      <section className="py-28 bg-black text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-6"
        >
          <h2 className="text-6xl md:text-7xl font-extrabold text-red-500 mb-6 tracking-wide">
            COMING SOON
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Red Eagle EDR is under active development.
            We’re building a powerful endpoint security platform focused on
            visibility, detection, and rapid response for modern SOC teams.
          </p>
        </motion.div>
      </section>

      <RedFooter />
    </div>
  );
};

export default SocAiTool;
