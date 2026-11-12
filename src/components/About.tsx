import { CheckCircle2 } from "lucide-react";

const features = [
  "Industry-leading security experts",
  "24/7 threat monitoring and response",
  "Advanced AI-powered protection",
  "Compliance with global standards",
];

export const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-20 text-foreground lg:py-24">
      {/* Background grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at 50% 30%, black 10%, transparent 78%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, black 10%, transparent 78%)",
        }}
      />
      <div className="pointer-events-none absolute right-[-10%] top-0 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,hsl(var(--brand)/0.12),transparent_70%)] blur-2xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight">
              Global Leader in <span className="text-brand-bright">Cybersecurity</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              MySocLabs is dedicated to safeguarding your data in an ever-evolving digital world. 
              Our mission is to preserve your digital way of life by countering cyber threats with 
              innovative solutions and expert knowledge.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-medium border-l-2 border-brand/50 pl-5">
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
                    group flex flex-col gap-3 rounded-xl border border-white/10
                    bg-gradient-to-b from-white/[0.045] to-white/[0.012] p-5
                    transition-all duration-300
                    hover:-translate-y-1 hover:border-brand/35
                    hover:shadow-[0_24px_50px_-38px_hsl(var(--brand)/0.6)]
                  "
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-brand/20 bg-brand/10 transition-colors group-hover:border-brand/40">
                    <CheckCircle2 className="w-5 h-5 text-brand-bright" />
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
