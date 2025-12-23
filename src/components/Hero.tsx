import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cyber.jpg";
import { Shield, ArrowRight, Play } from "lucide-react";
import { useState, useEffect } from "react";

export const Hero = () => {
  const words = ["Next-Gen"];
  const [currentWord, setCurrentWord] = useState(0);
  const [typedDescription, setTypedDescription] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fullText =
      "Protect your business with our cybersecurity and artificial intelligence expertise. Tailor-made solutions to secure your digital future.";

    setTypedDescription("");
    let index = 0;

    const typingInterval = setInterval(() => {
      index += 1;
      setTypedDescription(fullText.slice(0, index));

      if (index >= fullText.length) {
        clearInterval(typingInterval);
      }
    }, 25);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Cybersecurity Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'float 20s ease-in-out infinite'
        }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-glow-pulse">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Advanced Cybersecurity Solutions</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground inline-block min-w-[300px] sm:min-w-[400px] transition-all duration-500" key={currentWord}>
              {words[currentWord]}
            </span>{" "}
            <span className="text-primary">Cybersecurity</span>
            <br />
            <span className="text-foreground">Solutions</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {typedDescription}
          </p>
          
          <div className="flex justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.5)] transition-all group w-full sm:w-auto"
              >
                Get Protected Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};
