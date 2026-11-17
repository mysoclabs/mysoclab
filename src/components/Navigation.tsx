import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";

import redEagleLogo from "@/assets/red-eagle-logo.png";
import { categories } from "@/components/site/content";

const primaryLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
];

export const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close every menu when the route changes.
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname, location.hash]);

  // The mobile drawer always reopens with Services collapsed.
  useEffect(() => {
    if (!mobileOpen) setMobileServicesOpen(false);
  }, [mobileOpen]);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const openServices = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const scheduleCloseServices = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setServicesOpen(false), 120);
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-base font-medium transition-colors ${
      isActive ? "text-white" : "text-white/65 hover:text-white"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`border-b border-white/10 bg-[#08090B] transition-shadow duration-300 ${
          isScrolled ? "shadow-[0_1px_0_0_rgba(255,255,255,0.06),0_18px_40px_-32px_rgba(0,0,0,0.9)]" : ""
        }`}
      >
        <nav
          aria-label="Primary"
          className="site-container flex h-16 items-center justify-between gap-6"
        >
          {/* Brand */}
          <Link to="/" className="flex shrink-0 items-center" aria-label="MySocLabs home">
            <span className="text-[22px] font-bold tracking-[-0.02em] text-brand">
              MySoc<span className="text-white">Labs</span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            <ul className="flex items-center gap-8">
              {primaryLinks.map((link) => (
                <li key={link.label}>
                  <NavLink to={link.to} end={link.to === "/"} className={linkClass}>
                    {link.label}
                  </NavLink>
                </li>
              ))}

              {/* Services dropdown */}
              <li
                className="relative"
                onMouseEnter={openServices}
                onMouseLeave={scheduleCloseServices}
              >
                <button
                  type="button"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  aria-controls="services-menu"
                  onClick={() => setServicesOpen((v) => !v)}
                  onFocus={openServices}
                  className={`flex items-center gap-1 text-base font-medium transition-colors ${
                    location.pathname.startsWith("/services")
                      ? "text-white"
                      : "text-white/65 hover:text-white"
                  }`}
                >
                  Services
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  id="services-menu"
                  className={`absolute left-1/2 top-full w-[54rem] max-w-[calc(100vw-2rem)] -translate-x-1/2 pt-4 transition-all duration-200 ${
                    servicesOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-1 opacity-0"
                  }`}
                >
                  <div className="border border-white/[0.12] bg-[#08090B] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.95)]">
                    <div className="grid grid-cols-3 gap-px bg-white/[0.12]">
                      {categories.map((category) => (
                        <Link
                          key={category.key}
                          to={`/services#${category.anchor}`}
                          className="group flex flex-col bg-[#08090B] px-6 py-6 transition-colors hover:bg-white/[0.035] focus-visible:bg-white/[0.035]"
                        >
                          <span className="text-[16.5px] font-semibold leading-snug tracking-[-0.01em] text-[#F5F5F5] transition-colors group-hover:text-brand-bright">
                            {category.label}
                          </span>
                          <span className="mt-3 text-[14px] leading-[1.6] text-[#C5C5C5]">
                            {category.summary}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="flex items-center justify-between gap-6 border-t border-white/[0.12] px-6 py-4">
                      <span className="text-[13.5px] leading-relaxed text-[#C5C5C5]">
                        Fifteen services across three practices
                      </span>
                      <Link
                        to="/services"
                        className="group inline-flex shrink-0 items-center gap-2 text-[14.5px] font-medium text-[#F5F5F5] transition-colors hover:text-brand-bright"
                      >
                        All Services
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

              {/* Red Eagle — product entry, styled as the outlined brand pill */}
              <li>
                <Link
                  to="/soc-ai-tool"
                  className="group inline-flex h-9 items-center gap-2 border border-[#EC1822]/35 px-3 text-[13.5px] font-semibold text-[#F5F5F5] transition-colors hover:border-[#EC1822]/60 hover:bg-[#EC1822]/10 hover:text-white"
                >
                  <img
                    src={redEagleLogo}
                    alt=""
                    aria-hidden="true"
                    className="h-4 w-4 object-contain"
                  />
                  Red Eagle
                </Link>
              </li>
            </ul>

            <div className="flex items-center gap-5">
              <Link
                to="/contact"
                className="inline-flex h-9 items-center justify-center bg-brand px-4 text-[13px] font-semibold text-white transition-colors hover:bg-brand-bright"
              >
                Contact us
              </Link>
            </div>
          </div>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            className="-mr-2 flex h-10 w-10 items-center justify-center text-white lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/70 transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`fixed inset-y-0 right-0 z-50 flex w-[19rem] max-w-[88vw] flex-col border-l border-white/10 bg-[#0B0C0F] transition-transform duration-300 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
      >
        <div className="flex h-16 items-center justify-between border-b border-white/10 px-5">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center"
            aria-label="MySocLabs home"
          >
            <span className="text-[20px] font-bold tracking-[-0.02em] text-brand">
              MySoc<span className="text-white">Labs</span>
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation menu"
            className="-mr-2 flex h-10 w-10 items-center justify-center text-white/70 transition-colors hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          <ul className="space-y-1">
            {primaryLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block border-b border-white/[0.07] py-3 text-base font-medium transition-colors ${
                      isActive ? "text-white" : "text-white/70 hover:text-white"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

            {/* Services — collapsed on open, expands to the three practices */}
            <li>
              <button
                type="button"
                onClick={() => setMobileServicesOpen((v) => !v)}
                aria-expanded={mobileServicesOpen}
                aria-controls="mobile-services-menu"
                className={`flex w-full items-center justify-between gap-3 border-b border-white/[0.07] py-3 text-left text-base font-medium transition-colors ${
                  mobileServicesOpen ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 shrink-0 transition-transform duration-300 ease-out ${
                    mobileServicesOpen ? "rotate-180 text-white" : "text-white/45"
                  }`}
                  aria-hidden="true"
                />
              </button>

              <div
                id="mobile-services-menu"
                aria-hidden={!mobileServicesOpen}
                className={`grid transition-all duration-300 ease-out ${
                  mobileServicesOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <ul className="mb-2 ml-1.5 mt-1 space-y-0.5 border-l border-white/[0.09] pl-4">
                    {categories.map((category) => (
                      <li key={category.key}>
                        <Link
                          to={`/services#${category.anchor}`}
                          onClick={() => setMobileOpen(false)}
                          tabIndex={mobileServicesOpen ? 0 : -1}
                          className="group block py-2.5"
                        >
                          <span className="block text-[14.5px] font-medium text-[#F5F5F5] transition-colors group-hover:text-brand-bright">
                            {category.label}
                          </span>
                          <span className="mt-1 block text-[13px] leading-[1.55] text-[#C5C5C5]">
                            {category.summary}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          </ul>

          <p className="site-label mt-8">Platform</p>
          <Link
            to="/soc-ai-tool"
            onClick={() => setMobileOpen(false)}
            className="mt-3 flex items-center gap-2.5 border border-[#EC1822]/35 px-3 py-2.5 text-[13.5px] font-semibold text-[#F5F5F5] transition-colors hover:border-[#EC1822]/60 hover:bg-[#EC1822]/10 hover:text-white"
          >
            <img src={redEagleLogo} alt="" aria-hidden="true" className="h-4 w-4 object-contain" />
            Red Eagle
          </Link>
        </div>

        <div className="border-t border-white/10 p-5">
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="flex h-11 w-full items-center justify-center bg-brand text-[14px] font-semibold text-white transition-colors hover:bg-brand-bright"
          >
            Contact us
          </Link>
        </div>
      </div>
    </header>
  );
};
