import { Shield, Lock, Eye, Zap, Cloud, Cpu } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Advanced Threat Protection",
    description: "AI-powered systems detect and neutralize threats before they can harm your infrastructure.",
    gradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    icon: Lock,
    title: "Zero Trust Architecture",
    description: "Implement comprehensive security with continuous verification and least-privilege access.",
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    icon: Eye,
    title: "Real-Time Monitoring",
    description: "24/7 surveillance of your networks with instant alerts and automated response protocols.",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Zap,
    title: "Rapid Incident Response",
    description: "Swift action when threats are detected, minimizing damage and recovery time.",
    gradient: "from-pink-500/20 to-red-500/20"
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description: "Secure your cloud infrastructure across all major platforms with comprehensive protection.",
    gradient: "from-red-500/20 to-orange-500/20"
  },
  {
    icon: Cpu,
    title: "AI-Powered Defense",
    description: "Machine learning algorithms that evolve and adapt to emerging cyber threats.",
    gradient: "from-orange-500/20 to-cyan-500/20"
  },
];

export const Features = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Comprehensive <span className="text-primary">Security Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our cutting-edge technology and expert team provide multi-layered protection 
            for your digital assets, ensuring business continuity and data integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: 'rgba(10, 10, 10, 0.7)',
                  border: '1px solid rgba(229, 217, 217, 0.18)',
                  backdropFilter: 'blur(18px)'
                }}
              >
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
