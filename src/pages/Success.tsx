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
    <div className="flex min-h-screen flex-col bg-[#08080A]">
      <Navigation />

      <main className="flex flex-1 items-center justify-center pt-24 pb-16">
        <div className="relative mx-4 w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.015] px-6 py-12 text-center shadow-[0_45px_100px_-60px_rgba(0,0,0,1)]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,hsl(var(--brand)/0.18),transparent_70%)] blur-2xl" />

          <div className="relative z-10 space-y-4">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-brand/25 bg-brand/10">
              <CheckCircle className="h-10 w-10 text-brand-bright" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Message Sent Successfully 🎉</h1>
            <p className="text-muted-foreground">
              Thank you for contacting us. We’ll get back to you shortly.
            </p>
            <p className="text-sm text-muted-foreground">
              Redirecting to home in 4 seconds…
            </p>

            <Button
              onClick={() => navigate("/")}
              className="mt-2 rounded-xl bg-gradient-to-b from-brand-bright to-brand px-8 font-semibold text-white shadow-[0_18px_40px_-22px_hsl(var(--brand)/0.95)] hover:brightness-110"
            >
              Go to Home Now
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactSuccess;
