import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#08080A] px-6">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.015] px-8 py-14 text-center">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,hsl(var(--brand)/0.16),transparent_70%)] blur-2xl" />

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
  );
};

export default NotFound;
