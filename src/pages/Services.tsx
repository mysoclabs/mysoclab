import { Navigation } from "@/components/Navigation";
import Services from "@/components/Services";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0f1d]">
      <Navigation />
      <div className="pt-16">
        <Services />
      </div>

      <div className="pb-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all"
            >
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
