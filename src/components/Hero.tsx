import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cyber.jpg";
import { ArrowRight, ShieldCheck, Activity, Lock, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Slight delay for initial load animation
    const timer = setTimeout(() => setIsVisible(true), 150);
    
    setIsLargeScreen(window.innerWidth >= 1024);
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#030712] font-sans"
    >
      {/* ===== Luxury Dark Background ===== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Very subtle noise texture overlay for a premium "matte" finish (optional, simulating with a faint grain pattern if possible, or just keeping it clean) */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgibm9pc2VGaWx0ZXIpIiBvcGFjaXR5PSIwLjAyIiBtaXgtYmxlbmQtbW9kZT0ib3ZlcmxheSIvPjwvc3ZnPg==')] opacity-30 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 pt-32 pb-10 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ===== Left Column: Typography & CTAs ===== */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center items-center text-center lg:items-start lg:text-left pt-8 lg:-ml-2 xl:-ml-4">
            



            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold leading-[1.1] tracking-tight mb-6 text-white"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s ease-out 0.1s, transform 0.7s ease-out 0.1s",
              }}
            >
              <span className="text-white">Next-Gen </span>
              <span className="text-primary">Cybersecurity</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                Solutions
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10 max-w-lg font-light mx-auto lg:mx-0"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s ease-out 0.2s, transform 0.7s ease-out 0.2s",
              }}
            >
              Protect your business with our cybersecurity and artificial intelligence expertise. Tailor-made solutions to secure your digital future.
            </p>

            {/* Actions */}
            <div
              className="flex flex-col sm:flex-row items-center gap-4 mb-12"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s ease-out 0.3s, transform 0.7s ease-out 0.3s",
              }}
            >
              <Link to="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/80 text-primary-foreground h-14 px-8 text-base font-semibold rounded-xl transition-all duration-300 group"
                >
                  Get Protected
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-14 px-8 text-base font-medium rounded-xl border border-primary/30 bg-transparent text-white hover:bg-white/10 hover:border-white/30 hover:text-white transition-all duration-300 backdrop-blur-sm group"
                >
                  Explore Services
                  <ChevronRight className="ml-1 w-4 h-4 transition-colors" />
                </Button>
              </Link>
            </div>

            {/* Trust Metrics */}
            <div
              className="flex items-center justify-center lg:justify-start gap-8 pt-6 border-t border-white/10 mt-8 w-full"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(15px)",
                transition: "opacity 0.7s ease-out 0.4s, transform 0.7s ease-out 0.4s",
              }}
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <span className="text-2xl font-bold text-white tracking-tight">99.99%</span>
                </div>
                <p className="text-sm text-slate-400 font-medium">Platform Uptime</p>
              </div>
              
              <div className="w-px h-10 bg-white/10" />
              
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Activity className="w-5 h-5 text-primary" />
                  <span className="text-2xl font-bold text-white tracking-tight">24/7</span>
                </div>
                <p className="text-sm text-slate-400 font-medium">Active Monitoring</p>
              </div>
            </div>

          </div>

          {/* ===== Right Column: Visual Presentation ===== */}
          <div 
            className="lg:col-span-6 xl:col-span-7 relative block w-full mt-12 lg:mt-0"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible 
                ? (isLargeScreen ? "translateY(-24px) translateX(-30px) scale(1)" : "translateY(0px) scale(1)") 
                : "translateY(10px) scale(0.98)",
              transition: "opacity 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.3s, transform 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.3s",
            }}
          >
            {/* The main presentation container */}
            <div className="relative w-full max-w-[620px] mx-auto lg:ml-auto">
              
              {/* Outer border effect */}
              <div className="absolute -inset-[1px] bg-white/5 rounded-2xl z-0"></div>
              
              {/* Main Image Container */}
              <div className="relative z-10 bg-[#0B1121] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                
                {/* The Image */}
                <img
                  src={heroImage}
                  alt="Security Dashboard Presentation"
                  className="w-full h-[230px] sm:h-[320px] lg:h-[460px] object-cover opacity-90 transition-transform duration-700 hover:scale-[1.02]"
                />
                
                {/* Gradient fade to blend the bottom of the image beautifully */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B1121] to-transparent pointer-events-none"></div>
              </div>

              {/* Floating Glassmorphic Card 1 */}
              <div className="absolute -left-4 lg:-left-12 top-24 z-20 hidden lg:block">
                <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-xl p-2 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[9px] text-slate-400 font-medium mb-0.5 leading-none">Platform Uptime</p>
                    <p className="text-xs font-bold text-white tracking-tight leading-none">99.99%</p>
                  </div>
                </div>
              </div>

              {/* Floating Glassmorphic Card 2 */}
              <div className="absolute -right-3 lg:-right-6 bottom-20 z-20 hidden lg:block">
                <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-xl p-2 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Activity className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[9px] text-slate-400 font-medium mb-0.5 leading-none">Active Monitoring</p>
                    <p className="text-xs font-bold text-white tracking-tight leading-none">24/7</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
