import { CheckCircle2 } from "lucide-react";

const features = [
  "Industry-leading security experts",
  "24/7 threat monitoring and response",
  "Advanced AI-powered protection",
  "Compliance with global standards",
];

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Global Leader in <span className="text-primary">Cybersecurity</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              MySocLabs is dedicated to safeguarding your data in an ever-evolving digital world. 
              Our mission is to preserve your digital way of life by countering cyber threats with 
              innovative solutions and expert knowledge.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
             We are Excel in providing differentiated approach to cybersecurity operations
            </p>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border-4 border-primary/30 animate-glow-pulse"></div>
                <div className="absolute w-32 h-32 rounded-full border-4 border-primary/50 animate-float"></div>
                <div className="absolute w-64 h-64 rounded-full border border-primary/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
