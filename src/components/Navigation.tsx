import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import redEagleLogo from "@/assets/red-eagle-logo.png";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Header Bar */}
      <div className="bg-gradient-to-b from-background/90 via-background/85 to-background/80 backdrop-blur-xl border-b-[3px] border-border shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold">
                <span className="text-primary">MySoc</span>
                <span className="text-foreground">Labs</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/soc-ai-tool">
                <Button 
                  variant="outline" 
                  className="border-red-500/30 hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-400 gap-2"
                >
                  <img src={redEagleLogo} alt="Red Eagle" className="w-5 h-5" />
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
              >
                <Menu />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div 
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-md transition-all duration-300 md:hidden ${isOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer Mobile Navigation */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-[280px] max-w-[85vw] bg-slate-950/98 backdrop-blur-lg border-l border-white/15 z-50 p-6 flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.8)] transition-all duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0 opacity-100 visible pointer-events-auto' : 'translate-x-full opacity-0 invisible pointer-events-none'}`}
      >
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="text-xl font-bold" onClick={() => setIsOpen(false)}>
            <span className="text-primary">MySoc</span>
            <span className="text-foreground">Labs</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        <div className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2 border-b border-white/5"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/soc-ai-tool" className="pt-4" onClick={() => setIsOpen(false)}>
            <Button 
              variant="outline" 
              className="w-full border-red-500/30 hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-400 gap-2"
            >
              <img src={redEagleLogo} alt="Red Eagle" className="w-5 h-5" />
              Red Eagle
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
