import { useState, useMemo } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  X, 
  FileText
} from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import growTogetherImg from "@/assets/grow-together.png";
import collaborativeCultureImg from "@/assets/collaborative-culture.png";
import flexibleWorkImg from "@/assets/flexible-work.png";
import mentorshipImg from "@/assets/mentorship.png";
import innovationImg from "@/assets/innovation.png";
import wellnessImg from "@/assets/wellness.png";

// Job Interface
interface Job {
  id: string;
  title: string;
  category: "defense" | "offense" | "advisory" | "engineering";
  categoryLabel: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

// Mock Jobs data
// General Application Job definition
const GENERAL_JOB: Job = {
  id: "general-application",
  title: "General Application",
  category: "engineering",
  categoryLabel: "General Interest",
  location: "Remote / Hybrid",
  type: "Full-Time / Part-Time",
  experience: "Any",
  description: "Submit your details for future opportunities at MySocLabs. We will review your profile and reach out when a relevant role opens up.",
  requirements: [],
  responsibilities: []
};

// Benefits Data (reused from website + additional career features)
const BENEFITS = [
  {
    title: "Grow Together",
    desc: "We believe in absolute personal and team elevation. You are provided with 100% reimbursement for major industry certifications, dedicated self-study hours, and continuous technical training to help you level up your cybersecurity career path.",
    image: growTogetherImg
  },
  {
    title: "Collaborative Culture",
    desc: "We operate as a unified shield, not isolated silos. Here, developers, analysts, and incident responders brainstorm together on complex threats. Every voice is heard, and every team member contributes to architectural decisions.",
    image: collaborativeCultureImg
  },
  {
    title: "Flexible Work Environment",
    desc: "We measure success by defensive outcomes and creative solutions, not by desk hours. Our remote-first policy and flexible schedules give you the trust and freedom to work in the environment where you are most productive.",
    image: flexibleWorkImg
  },
  {
    title: "Mentorship & Direct Guidance",
    desc: "Work side-by-side with seasoned security practitioners and researchers. You will receive direct mentorship from security architects who have spent years defending enterprise scale infrastructures and tracking global threat actors.",
    image: mentorshipImg
  },
  {
    title: "Continuous Innovation",
    desc: "Bypass routine repetitive operations. We build our own internal automated threat hunting tools and AI-driven platforms. You will work on creating, optimizing, and deploying sophisticated automated solutions to counter next-gen adversaries.",
    image: innovationImg
  },
  {
    title: "Supportive & Healthy Workplace",
    desc: "A healthy mind is vital for solid security analysis. We design our rotas to prevent analyst burnout, respect personal off-hours, and actively encourage you to take time off to refresh and maintain your well-being.",
    image: wellnessImg
  }
];



export default function CareersPage() {
  const [applyingJob, setApplyingJob] = useState<Job | null>(null);

  // Application form state
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formExp, setFormExp] = useState("mid");
  const [formCover, setFormCover] = useState("");
  const [formFile, setFormFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleApplyClick = (job: Job) => {
    setApplyingJob(job);
    setFormName("");
    setFormEmail("");
    setFormPhone("");
    setFormCover("");
    setFormFile(null);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formPhone) {
      toast.error("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Simulate API upload
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(`Application for ${applyingJob?.title} submitted successfully! Our talent team will contact you soon.`);
      setApplyingJob(null);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0b111e] text-foreground flex flex-col font-sans">
      <Navigation />

      {/* 1. HERO BANNER & SEARCH ROLES (Merged) */}
      <section className="relative pt-20 pb-12 overflow-hidden border-b border-primary/10 bg-gradient-to-b from-[#0f172a]/20 via-[#0b111e] to-[#0b111e]">
        {/* Background Cyber Grid */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-widest">
              MySocLabs Careers
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Work at the Heart of <br />
              <span className="bg-gradient-to-r from-primary via-cyan-400 to-cyan-500 bg-clip-text text-transparent">
                Digital Defense
              </span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              At MySocLabs, we counter cyber threats with advanced engineering and AI-driven workflows. Shape your career where innovation meets absolute security.
            </p>
          </motion.div>

          <div className="flex flex-col items-center gap-6 max-w-xl mx-auto">
            <Link to="/open-roles">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-base rounded-xl shadow transition-all duration-300"
              >
                Search Open Roles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. BENEFITS & CULTURE */}
      <section className="py-24 bg-card/10 border-y border-border/40">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-xs uppercase text-primary tracking-widest font-bold block">Company Perks</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1">
              Why Join <span className="text-primary">MySocLabs</span>?
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Our workspace is engineered to remove operational stress and focus on pure, intellectual growth in digital protection.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-20 md:space-y-28">
            {BENEFITS.map((benefit, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${isEven ? "" : "md:flex-row-reverse"}`}
                >
                  {/* Image container */}
                  <div className="w-full md:w-1/2 aspect-[4/3] rounded-3xl bg-card/45 border border-border/40 flex items-center justify-center text-xs text-muted-foreground/60 transition-all duration-300 hover:border-primary/25 relative overflow-hidden shadow-lg flex-shrink-0">
                    {benefit.image ? (
                      <img 
                        src={benefit.image} 
                        alt={benefit.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-cyan-500/5 pointer-events-none" />
                        <span className="font-semibold uppercase tracking-wider text-[11px] text-muted-foreground/50">[ Image Space ]</span>
                      </>
                    )}
                  </div>

                  {/* Matter/Text space */}
                  <div className="w-full md:w-1/2 space-y-4 text-left">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* 6. APPLICATION MODAL (AnimatePresence / Framer Motion drawer) */}
      <AnimatePresence>
        {applyingJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Overlay Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setApplyingJob(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            />

            {/* Modal Dialog Content Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-xl bg-card border border-border/80 rounded-2xl shadow-2xl overflow-hidden z-10"
            >
              {/* Header bar */}
              <div className="bg-secondary/40 px-6 py-5 border-b border-border/50 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">Job Application</span>
                  <h3 className="text-lg font-bold text-foreground mt-0.5">
                    {applyingJob.title}
                  </h3>
                </div>
                <button
                  onClick={() => setApplyingJob(null)}
                  className="p-1 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form content */}
              <form onSubmit={handleFormSubmit} className="p-6 space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full bg-[#131b2e] border border-border rounded-lg px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      className="w-full bg-[#131b2e] border border-border rounded-lg px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      Phone Number <span className="text-primary">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-[#131b2e] border border-border rounded-lg px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      Experience level
                    </label>
                    <select
                      className="w-full bg-[#131b2e] border border-border rounded-lg px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                      value={formExp}
                      onChange={(e) => setFormExp(e.target.value)}
                    >
                      <option value="junior">Junior (1-3 years)</option>
                      <option value="mid">Mid-Level (3-5 years)</option>
                      <option value="senior">Senior (5-8 years)</option>
                      <option value="principal">Principal (8+ years)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      Attach Resume <span className="text-primary">*</span>
                    </label>
                    <div className="relative w-full bg-[#131b2e] border border-border border-dashed rounded-lg py-2.5 px-3 flex items-center justify-between text-sm text-muted-foreground cursor-pointer hover:border-primary/50 transition-colors">
                      <span className="truncate max-w-[170px]">
                        {formFile ? formFile.name : "Select PDF / Word file"}
                      </span>
                      <input
                        type="file"
                        required={!formFile}
                        accept=".pdf,.doc,.docx"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setFormFile(e.target.files[0]);
                          }
                        }}
                      />
                      <FileText className="w-4 h-4 text-primary flex-shrink-0" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                    Short Cover Note / Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly tell us why you are a fit for MySocLabs..."
                    className="w-full bg-[#131b2e] border border-border rounded-lg px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none"
                    value={formCover}
                    onChange={(e) => setFormCover(e.target.value)}
                  />
                </div>

                <div className="flex gap-4 pt-2 border-t border-border/40">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-1/3"
                    onClick={() => setApplyingJob(null)}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="w-2/3 bg-primary hover:bg-primary/95 text-primary-foreground font-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Uploading Profile..." : "Submit Application"}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
