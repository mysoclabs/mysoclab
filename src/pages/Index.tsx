import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SecuritySolutions } from "@/components/SecuritySolutions";
import { Features } from "@/components/Features";
import { WhyChooseCarousel } from "@/components/WhyChooseCarousel";
import { ERD } from "@/components/erd";
import { CareersSection } from "@/components/CareersSection";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#08090B]">
      <Navigation />
      <main>
        <Hero />
        <SecuritySolutions />
        <Features />
        <WhyChooseCarousel />
        <ERD />
        <CareersSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
