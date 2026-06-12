import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function OpenRolesPage() {
  return (
    <div className="min-h-screen bg-[#0b111e] text-foreground flex flex-col font-sans">
      <Navigation />

      <main className="flex-grow flex items-center justify-center pt-28 pb-16 relative overflow-hidden">
        {/* Background Cyber Grid */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container mx-auto px-6 relative z-10 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card/45 backdrop-blur-md border border-border/60 rounded-3xl p-10 md:p-12 shadow-2xl relative overflow-hidden"
          >
            {/* Top glowing bar */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-cyan-400 to-cyan-500" />
            
            <div className="flex flex-col items-center gap-6">
              <div className="space-y-4">
                <span className="text-xs uppercase text-primary tracking-widest font-bold">
                  Active Opportunities
                </span>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
                  Currently, no roles are available
                </h1>
                <p className="text-muted-foreground max-w-md mx-auto text-base leading-relaxed">
                  We are not actively hiring for any open positions at this moment. However, we're always on the lookout for remarkable talent to join MySocLabs.
                </p>
              </div>

              <div className="flex items-center justify-center pt-6">
                <Link to="/careers">
                  <Button
                    variant="outline"
                    className="border-border hover:bg-muted/80 text-foreground font-semibold px-8 py-5 rounded-xl transition-all duration-200 gap-2 text-sm"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Careers
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
