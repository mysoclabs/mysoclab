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
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our clients say about our cybersecurity solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300 animate-fade-in relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-primary" />
              </div>
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 relative z-10 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="relative z-10">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-primary">{testimonial.role}</div>
                <div className="text-xs text-muted-foreground mt-1">{testimonial.company}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
