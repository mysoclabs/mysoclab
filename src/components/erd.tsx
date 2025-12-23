import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logom.png";

export const ERD = () => {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="space-y-6">

            {/* LOGO + NAME */}
            <div className="flex items-center gap-3 group">
              <img
                src={logo}
                alt="Red Eagle"
                className="h-14 w-14 transition-all duration-300"
              />
              <span
                className="
                  text-xl font-semibold
                  text-white
                  transition-colors duration-300
                "
              >
                Red Eagle
              </span>
            </div>

            {/* HEADING */}
            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Intrusion Detection <br />
              <span className="text-cyan-400">
                and Prevention System
              </span>
            </h2>

            {/* SUB HEADING */}
            <p className="max-w-xl text-xl text-muted-foreground">
              The ultimate anti-virus and intrusion detection engine designed
              to protect modern infrastructure from evolving cyber threats.
            </p>

            {/* DESCRIPTION */}
            <p className="max-w-lg text-base text-muted-foreground">
              Red Eagle continuously monitors network activity, detects
              anomalies in real-time, and prevents malicious intrusions using
              AI-driven behavioral analysis.
            </p>

            {/* CTA */}
            <div className="pt-4">
              <Link to="/soc-ai-tool">
                <Button
                  variant="outline"
                  className="
                    border-cyan-400/40 text-cyan-400
                    hover:border-cyan-400 hover:bg-cyan-400/10
                    transition-all duration-300
                  "
                >
                  Explore More →
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT VISUAL CARD */}
          <div className="relative flex justify-center group">
            <div
              className="
                flex h-[380px] w-[380px]
                items-center justify-center
                rounded-2xl border border-cyan-400/30
                bg-gradient-to-br from-cyan-400/20 to-blue-600/10
                shadow-[0_0_80px_rgba(0,255,255,0.15)]
                transition-all duration-500
                group-hover:shadow-[0_0_120px_rgba(0,255,255,0.25)]
              "
            >
              <img
                src={logo}
                alt="Red Eagle IDS"
                className="
                  w-52
                  opacity-95
                  transition-all duration-500
                  group-hover:scale-110
                  group-hover:brightness-125
                  group-hover:drop-shadow-[0_0_25px_rgba(0,255,255,0.35)]
                "
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
