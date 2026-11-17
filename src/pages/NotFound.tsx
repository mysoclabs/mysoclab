import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Footer } from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-[#08080A]">
      <div className="flex flex-1 items-center justify-center px-6 py-16">
        <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.015] px-8 py-14 text-center">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent" />

          <div className="relative z-10">
            <h1 className="mb-3 text-5xl font-bold tracking-tight text-brand-bright">404</h1>
            <p className="mb-8 text-xl text-muted-foreground">Oops! Page not found</p>
            <a
              href="/"
              className="inline-flex items-center rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand/50 hover:bg-white/[0.06] hover:text-white"
            >
              Return to Home
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
