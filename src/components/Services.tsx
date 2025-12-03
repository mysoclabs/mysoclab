import { Shield, Brain, Search, Lock, Cloud, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Complete protection for your digital infrastructure with innovative and adaptive security solutions.",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Advanced AI-powered threat detection and automated response systems to stay ahead of cyber threats.",
  },
  {
    icon: Search,
    title: "Penetration Testing",
    description: "Comprehensive security assessments to identify vulnerabilities before attackers do.",
  },
  {
    icon: Lock,
    title: "Data Protection",
    description: "Enterprise-grade encryption and data security solutions to protect your sensitive information.",
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description: "Secure your cloud infrastructure with industry-leading protection and compliance solutions.",
  },
  {
    icon: Users,
    title: "Security Consulting",
    description: "Expert guidance and strategic planning to build a robust cybersecurity framework for your organization.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our innovative cybersecurity solutions designed to protect your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
