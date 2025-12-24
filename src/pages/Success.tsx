import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const ContactSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 flex items-center justify-center">
        <div className="text-center space-y-4">
          <CheckCircle className="mx-auto h-16 w-16 text-primary" />
          <h1 className="text-3xl font-bold">Message Sent Successfully 🎉</h1>
          <p className="text-muted-foreground">
            Thank you for contacting us. We’ll get back to you shortly.
          </p>
          <p className="text-sm text-muted-foreground">
            Redirecting to home in 4 seconds…
          </p>

          <Button onClick={() => navigate("/")}>
            Go to Home Now
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactSuccess;
