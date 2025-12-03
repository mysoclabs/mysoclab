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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background/90 via-background/85 to-background/80 backdrop-blur-xl border-b border-primary/10 shadow-[0_0_20px_hsl(var(--primary)/0.1)]">
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
                className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 gap-2"
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
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block py-2 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/soc-ai-tool" onClick={() => setIsOpen(false)}>
              <Button 
                variant="outline" 
                className="w-full mt-4 border-primary/30 hover:bg-primary/10 gap-2"
              >
                <img src={redEagleLogo} alt="Red Eagle" className="w-5 h-5" />
                Red Eagle
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
