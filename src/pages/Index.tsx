import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Features } from "@/components/Features";
import { ERD } from "@/components/erd";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CareersSection } from "@/components/CareersSection";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <ERD />        {/* 🔥 NEW SECTION */}
      <WhyChooseUs />
      <CareersSection />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
