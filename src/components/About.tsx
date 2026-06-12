import { CheckCircle2 } from "lucide-react";

const features = [
  "Industry-leading security experts",
  "24/7 threat monitoring and response",
  "Advanced AI-powered protection",
  "Compliance with global standards",
];

export const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden text-foreground">
      {/* Background grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Global Leader in <span className="text-primary">Cybersecurity</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              MySocLabs is dedicated to safeguarding your data in an ever-evolving digital world. 
              Our mission is to preserve your digital way of life by countering cyber threats with 
              innovative solutions and expert knowledge.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-medium border-l-2 border-primary/40 pl-4">
              We excel in providing a differentiated approach to cybersecurity operations.
            </p>
          </div>

          {/* RIGHT GRID OF FEATURES */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="
                    bg-card/45 border border-border/40 
                    rounded-xl p-5 
                    transition-all duration-300 
                    hover:border-primary/20 hover:-translate-y-1 
                    flex flex-col gap-3
                  "
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-semibold leading-snug text-foreground">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
