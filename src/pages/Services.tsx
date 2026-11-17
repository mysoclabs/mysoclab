import { useEffect } from "react";

import { Navigation } from "@/components/Navigation";
import Services from "@/components/Services";
import { Footer } from "@/components/Footer";
import { PageCta } from "@/components/site/PageHeader";

const ServicesPage = () => {
  // Hide the page scrollbar on this page only; scrolling stays fully functional.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("services-hide-scrollbar");
    return () => root.classList.remove("services-hide-scrollbar");
  }, []);

  return (
    <div className="min-h-screen bg-[#08090B]">
      <Navigation />
      <main className="pt-16">
        <Services />
        <PageCta
          title="Not sure where to start?"
          description="Tell us about your environment and we will recommend the right practice and scope."
        />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
