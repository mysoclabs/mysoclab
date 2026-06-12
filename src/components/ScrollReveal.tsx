import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollReveal = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // A small delay ensures the DOM has fully rendered after page navigation
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll("section, footer, .reveal-on-scroll");

      const observerOptions = {
        root: null, // Viewport
        rootMargin: "0px 0px -100px 0px", // Trigger slightly before entering the full viewport
        threshold: 0.02, // Trigger as soon as 2% of the element is visible
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Once visible, we stop observing to keep it active
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      elements.forEach((el) => {
        // Observe elements
        observer.observe(el);
      });

      return () => {
        observer.disconnect();
      };
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};
