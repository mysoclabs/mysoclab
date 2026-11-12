import { Navigation } from "@/components/Navigation";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      <div className="flex-1 pt-16">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
