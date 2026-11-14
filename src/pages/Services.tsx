import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import Services from "@/components/Services";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  // Hide the page scrollbar on this page only; scrolling stays fully functional.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("services-hide-scrollbar");
    return () => root.classList.remove("services-hide-scrollbar");
  }, []);

  return (
    <div className="min-h-screen bg-[#08080A]">
      <Navigation />
      <div className="pt-16">
        <Services />
      </div>

      <div className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <Link to="/contact">
            <Button
              size="lg"
              className="rounded-xl bg-gradient-to-b from-brand-bright to-brand px-8 font-semibold text-white shadow-[0_18px_40px_-22px_rgba(0,0,0,0.9)] transition-all hover:brightness-110"
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
