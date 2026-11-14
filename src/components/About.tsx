import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features: { title: string }[] = [
  { title: "Industry-leading security experts" },
  { title: "24/7 threat monitoring and response" },
  { title: "Advanced AI-powered protection" },
  { title: "Compliance with global standards" },
];

export const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-20 text-foreground lg:py-28">
      {/* Refined technical backdrop */}
      <div className="pointer-events-none absolute inset-0 grid-veil opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* TOP: INTRODUCTION */}
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl">
            Global Leader in <span className="text-brand-bright">Cybersecurity</span>
          </h2>

          <div className="mt-6 h-px w-24 bg-gradient-to-r from-brand to-transparent" />

          <p className="mt-7 max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
            MySocLabs is dedicated to safeguarding your data in an ever-evolving digital world.
            Our mission is to preserve your digital way of life by countering cyber threats with
            innovative solutions and expert knowledge.
          </p>

          <p className="mt-6 max-w-3xl border-l-2 border-brand/70 pl-5 text-base font-medium leading-relaxed text-slate-200 sm:text-lg">
            We excel in providing a differentiated approach to cybersecurity operations.
          </p>
        </div>

        {/* Divider between introduction and information panels */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-white/[0.12] via-white/[0.06] to-transparent lg:mt-14" />

        {/* BOTTOM: FOUR INFORMATION PANELS */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map(({ title }) => (
            <div
              key={title}
              className="group border-r-2 border-white/[0.03] last:border-0 pb-8 last:p-0 hover:text-brand-bright transition-colors duration-300"
            >
              <div className="flex flex-col pt-6">
                <span
                  className="flex-shrink-0 w-px bg-brand-bright transition-all duration-300 group-hover:scale-110"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-white leading-relaxed mb-2 tracking-tight">
                    {title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
