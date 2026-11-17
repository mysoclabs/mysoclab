import { Navigation } from "@/components/Navigation";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#08090B]">
      <Navigation />

      <main className="flex-1 pt-16">
        <About />
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
