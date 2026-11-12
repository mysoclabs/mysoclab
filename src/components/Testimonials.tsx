import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    company: "Fortune 500 Technology Company",
    content: "MySocLabs transformed our security posture completely. Their proactive approach and rapid response capabilities have given us peace of mind.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CEO, FinanceSecure",
    company: "Financial Services Provider",
    content: "The level of expertise and professionalism is unmatched. They've protected our critical infrastructure from sophisticated threats.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "CISO, HealthNet",
    company: "Healthcare Organization",
    content: "Compliance and security are crucial in healthcare. MySocLabs delivered solutions that exceed all regulatory requirements.",
    rating: 5
  },
];

export const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-white/[0.02] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Trusted by <span className="text-brand-bright">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our clients say about our cybersecurity solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-2xl border-white/10 bg-gradient-to-b from-white/[0.045] to-white/[0.012] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/35"
            >
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-brand-bright" />
              </div>
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-bright text-brand-bright" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 relative z-10 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="relative z-10">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-brand-bright">{testimonial.role}</div>
                <div className="text-xs text-muted-foreground mt-1">{testimonial.company}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
