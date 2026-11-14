import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cyber.jpg";
import { ArrowRight, ShieldCheck, Activity, ChevronRight } from "lucide-react";
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
      className="relative min-h-screen flex items-center overflow-hidden bg-[#08080A] font-sans"
    >
      {/* ===== Dark, brand-lit background ===== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Technical grid, faded toward the edges */}
        <div className="absolute inset-0 grid-veil opacity-70" />

        {/* Vignette to keep content legible */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#08080A_92%)]" />

        {/* Very subtle grain for a premium matte finish */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgibm9pc2VGaWx0ZXIpIiBvcGFjaXR5PSIwLjAyIiBtaXgtYmxlbmQtbW9kZT0ib3ZlcmxheSIvPjwvc3ZnPg==')] opacity-30 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 pt-32 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ===== Left Column: Typography & CTAs ===== */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center items-center text-center lg:items-start lg:text-left pt-8 lg:-ml-2 xl:-ml-4">
            {/* Brand rule */}
            <div
              className="mb-7 flex items-center gap-3"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: "opacity 0.7s ease-out",
              }}
            >
              <span className="h-px w-10 bg-gradient-to-r from-brand/10 to-brand" />
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold leading-[1.08] tracking-tight mb-6 text-white"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s ease-out 0.1s, transform 0.7s ease-out 0.1s",
              }}
            >
              <span className="text-white">Next-Gen </span>
              <span className="text-brand-bright">Cybersecurity</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">
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
                  className="w-full sm:w-auto h-14 px-8 text-base font-semibold rounded-xl bg-gradient-to-b from-brand-bright to-brand text-white shadow-[0_18px_40px_-18px_rgba(0,0,0,0.9)] hover:brightness-110 hover:shadow-[0_22px_50px_-18px_rgba(0,0,0,0.95)] transition-all duration-300 group border border-white/10"
                >
                  Get Protected
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-14 px-8 text-base font-medium rounded-xl border border-white/15 bg-white/[0.03] text-white hover:bg-white/[0.07] hover:border-brand/50 hover:text-white transition-all duration-300 backdrop-blur-sm group"
                >
                  Explore Services
                  <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
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
                  <ShieldCheck className="w-5 h-5 text-brand-bright" />
                  <span className="text-2xl font-bold text-white tracking-tight">99.99%</span>
                </div>
                <p className="text-sm text-slate-400 font-medium">Platform Uptime</p>
              </div>

              <div className="w-px h-10 bg-white/10" />

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Activity className="w-5 h-5 text-brand-bright" />
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
              {/* Outer brand frame */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-brand/40 via-white/10 to-transparent z-0" />

              {/* Main Image Container */}
              <div className="relative z-10 bg-[#0B0B0E] rounded-2xl overflow-hidden border border-white/10 shadow-[0_40px_90px_-40px_rgba(0,0,0,1)]">
                {/* The Image */}
                <img
                  src={heroImage}
                  alt="Security Dashboard Presentation"
                  className="hero-image-grade w-full h-[230px] sm:h-[320px] lg:h-[460px] object-cover opacity-90 transition-transform duration-700 hover:scale-[1.02]"
                />

                {/* Brand colour grade: blends a crimson wash over the original
                    artwork so the cyan reads as deep brand red while the
                    shield's metallic highlights and detail stay intact */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(209,20,34,0.55),rgba(143,17,28,0.385)_48%,rgba(10,10,12,0.38))] mix-blend-color" />

                {/* Gradient fade to blend the bottom of the image beautifully */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B0B0E] to-transparent pointer-events-none" />
              </div>

              {/* Floating Glassmorphic Card 1 */}
              <div className="absolute -left-4 lg:-left-12 top-24 z-20 hidden lg:block">
                <div className="bg-[#0f0f12]/80 backdrop-blur-xl border border-white/10 rounded-xl p-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.55)] flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center border border-brand/25">
                    <ShieldCheck className="w-4 h-4 text-brand-bright" />
                  </div>
                  <div>
                    <p className="text-[9px] text-slate-400 font-medium mb-0.5 leading-none">Platform Uptime</p>
                    <p className="text-xs font-bold text-white tracking-tight leading-none">99.99%</p>
                  </div>
                </div>
              </div>

              {/* Floating Glassmorphic Card 2 */}
              <div className="absolute -right-3 lg:-right-6 bottom-20 z-20 hidden lg:block">
                <div className="bg-[#0f0f12]/80 backdrop-blur-xl border border-white/10 rounded-xl p-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.55)] flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center border border-brand/25">
                    <Activity className="w-4 h-4 text-brand-bright" />
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
