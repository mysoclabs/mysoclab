import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
  const navigate = useNavigate();

  const handleConsultation = () => {
    window.open("/trial-signup", "_blank");
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-white/[0.02] to-background"></div>
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,hsl(var(--brand)/0.12),transparent_70%)] blur-2xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Get in <span className="text-brand-bright">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to secure your digital future? Contact us today for a consultation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.045] to-white/[0.012] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand/35">
              <div className="mb-4 inline-flex rounded-full border border-brand/20 bg-brand/10 p-3">
                <Mail className="w-6 h-6 text-brand-bright" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">contact@mysoclabs.com</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.045] to-white/[0.012] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand/35">
              <div className="mb-4 inline-flex rounded-full border border-brand/20 bg-brand/10 p-3">
                <Phone className="w-6 h-6 text-brand-bright" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.045] to-white/[0.012] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand/35">
              <div className="mb-4 inline-flex rounded-full border border-brand/20 bg-brand/10 p-3">
                <MapPin className="w-6 h-6 text-brand-bright" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground text-sm">Global Operations</p>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              onClick={handleConsultation}
              className="rounded-xl bg-gradient-to-b from-brand-bright to-brand text-white shadow-[0_18px_40px_-20px_hsl(var(--brand)/0.95)] transition-all hover:brightness-110 hover:shadow-[0_22px_50px_-20px_hsl(var(--brand)/1)]"
            >
              Schedule a Consultation
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};
