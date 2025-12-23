import { Award, Shield } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";


const stats = [
  {
    icon: Shield,
    value: "99.99%",
    label: "PLATFORM UPTIME",
    description: "Guaranteed reliability"
  },
  {
    icon: Award,
    value: "24/7/365",
    label: "THREAT MONITORING",
    description: "Always watching"
  },
];

export const Stats = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm rounded-xl p-6 text-center group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/20 border border-border/50"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-primary font-mono">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-sm uppercase tracking-wider font-medium text-foreground/80 mb-2">
                {stat.label}
              </div>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
