import mysocMark from "@/assets/mysoc-mark.png";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#070708]">
      {/* Ambient brand light */}
      <div className="pointer-events-none absolute inset-0 brand-aura opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <img
              src={mysocMark}
              alt="MySocLabs"
              className="h-11 w-auto flex-shrink-0"
            />
            <div>
              <div className="mb-2">
                <span className="text-2xl font-bold tracking-tight">
                  <span className="text-brand-bright">MySoc</span>
                  <span className="text-foreground">Labs</span>
                </span>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                Protecting your digital future with advanced cybersecurity solutions
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <div className="hidden h-px w-24 bg-gradient-to-r from-transparent via-brand/50 to-transparent md:block" />
            <p className="text-xs tracking-wide text-muted-foreground">
              © {new Date().getFullYear()} MySocLabs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
