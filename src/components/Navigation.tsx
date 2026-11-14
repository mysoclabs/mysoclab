import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import redEagleLogo from "@/assets/red-eagle-logo.png";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Header Bar */}
      <div
        className={`relative border-b border-white/10 bg-background/80 backdrop-blur-xl transition-shadow duration-300 ${
          isScrolled ? "shadow-[0_18px_40px_-30px_rgba(0,0,0,0.95)]" : ""
        }`}
      >
        {/* Brand hairline */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/45 to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link
                to="/"
                className="group flex items-center"
                aria-label="MySocLabs home"
              >
                <span className="text-lg font-bold tracking-tight leading-none">
                  <span className="text-brand-bright">MySoc</span>
                  <span className="text-foreground">Labs</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.href}
                  end={item.href === "/"}
                  className="nav-link text-sm font-medium tracking-wide"
                >
                  {item.label}
                </NavLink>
              ))}
              <Link to="/soc-ai-tool">
                <Button
                  variant="outline"
                  className="group gap-2 rounded-full border-brand/45 bg-gradient-to-b from-brand/[0.14] to-brand/[0.05] px-4 font-semibold text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_10px_24px_-18px_rgba(0,0,0,0.9)] transition-all duration-300 hover:border-brand/75 hover:from-brand/[0.22] hover:to-brand/[0.09] hover:text-white hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07),0_12px_28px_-16px_rgba(0,0,0,0.95)]"
                >
                  <img
                    src={redEagleLogo}
                    alt="Red Eagle"
                    className="h-5 w-5 brightness-110 saturate-[1.15] transition-transform duration-300 group-hover:scale-105"
                  />
                  Red Eagle
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(true)}
                aria-label="Open navigation menu"
                className="text-foreground hover:bg-white/5"
              >
                <Menu />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-md transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[300px] max-w-[85vw] bg-[#0B0B0C]/98 backdrop-blur-xl border-l border-white/10 z-50 p-6 flex flex-col shadow-[0_0_60px_rgba(0,0,0,0.9)] transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0 opacity-100 visible pointer-events-auto" : "translate-x-full opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex justify-between items-center mb-10">
          <Link
            to="/"
            className="flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-lg font-bold tracking-tight">
              <span className="text-brand-bright">MySoc</span>
              <span className="text-foreground">Labs</span>
            </span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
            className="text-foreground hover:bg-white/5"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        <div className="flex flex-col space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              end={item.href === "/"}
              className={({ isActive }) =>
                `group flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                  isActive
                    ? "bg-brand/10 text-foreground"
                    : "text-muted-foreground hover:bg-white/[0.04] hover:text-foreground"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.label}
              <span className="h-1.5 w-1.5 rounded-full bg-brand opacity-0 transition-opacity group-hover:opacity-100" />
            </NavLink>
          ))}
        </div>

        <div className="mt-auto pt-8">
          <Link to="/soc-ai-tool" onClick={() => setIsOpen(false)}>
            <Button
              variant="outline"
              className="group w-full gap-2 rounded-full border-brand/45 bg-gradient-to-b from-brand/[0.14] to-brand/[0.05] font-semibold text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_10px_24px_-18px_rgba(0,0,0,0.9)] transition-all duration-300 hover:border-brand/75 hover:from-brand/[0.22] hover:to-brand/[0.09] hover:text-white"
            >
              <img
                src={redEagleLogo}
                alt="Red Eagle"
                className="h-5 w-5 brightness-110 saturate-[1.15] transition-transform duration-300 group-hover:scale-105"
              />
              Red Eagle
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
