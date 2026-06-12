import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center bg-card/30 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 md:p-12 animate-fade-in">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-primary">Secure Your Business?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of organizations that trust MySocLabs to protect their digital assets. 
              Let's discuss how we can safeguard your future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all w-full sm:w-auto"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              
              <Link to="/services">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 w-full sm:w-auto"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
