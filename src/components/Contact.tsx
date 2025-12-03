import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-secondary/20 to-background"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to secure your digital future? Contact us today for a consultation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-lg animate-fade-in">
              <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">contact@mysoclabs.com</p>
            </div>

            <div className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
            </div>

            <div className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground text-sm">Global Operations</p>
            </div>
          </div>

          <div className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.5)] transition-all"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
