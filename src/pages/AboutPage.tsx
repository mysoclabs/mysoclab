import { Navigation } from "@/components/Navigation";
import { About } from "@/components/About";
import { OurApproach } from "@/components/OurApproach";
import { Footer } from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      <div className="flex-1 pt-16">
        <About />
        <OurApproach />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
