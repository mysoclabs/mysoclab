import { Award, Zap, HeadphonesIcon, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Proven Expertise",
    description: "Years of experience protecting organizations from sophisticated cyber threats.",
  },
  {
    icon: Zap,
    title: "Rapid Response",
    description: "Swift incident response with minimal downtime to keep your business running.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock monitoring and support from our dedicated security team.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Innovation",
    description: "Always evolving with the latest security technologies and methodologies.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary">MySocLabs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine expertise, technology, and dedication to deliver unparalleled cybersecurity solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
