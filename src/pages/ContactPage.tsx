import { type FormEvent, useMemo, useState } from "react";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Clock, Mail, MapPin, Shield, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneCountryCode, setPhoneCountryCode] = useState<string>("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState<string>("quote");
  const [message, setMessage] = useState("");
  const [gdprConsent, setGdprConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);


  const canSubmit = useMemo(() => {
    if (!email.trim()) return false;
    if (fullName.trim().length > 0 && !/^[a-zA-Z\s\-'.]{2,100}$/.test(fullName.trim())) return false;
    return true;
  }, [email, fullName, gdprConsent]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(false);

    if (!canSubmit || isSubmitting) return;

    try {
      setIsSubmitting(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          phoneCountryCode,
          phoneNumber,
          company,
          subject,
          message,
          gdprConsent,
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Failed to submit");
      }

      // Navigate to the success page route defined in App.tsx
      navigate("/success");
      setFullName("");
      setEmail("");
      setPhoneCountryCode("+91");
      setPhoneNumber("");
      setCompany("");
      setSubject("quote");
      setMessage("");
      setGdprConsent(false);
    } catch (err) {
      if (err instanceof TypeError) {
        setSubmitError("API server not running. Start it with: npm run dev:api");
      } else {
        setSubmitError(err instanceof Error ? err.message : "Failed to submit");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass =
    "h-11 rounded-xl border-white/10 bg-white/[0.03] text-foreground placeholder:text-slate-500 focus:border-brand/50 focus-visible:ring-brand/25";

  return (
    <div className="min-h-screen bg-[#08080A]">
      <Navigation />
      <main className="pt-16">
        <section className="relative overflow-hidden py-20">
          {/* Background ambient elements */}
          <div className="pointer-events-none absolute inset-0 grid-veil opacity-35" />
          <div className="pointer-events-none absolute top-[-15%] right-[-10%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,hsl(var(--brand)/0.14),transparent_68%)] blur-2xl" />
          <div className="pointer-events-none absolute bottom-[-15%] left-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,hsl(var(--brand)/0.07),transparent_70%)] blur-2xl" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">

              {/* HEADER */}
              <div className="text-center mb-16">
                <span className="section-eyebrow is-centered justify-center mb-4">
                  Get In Touch
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white tracking-tight">
                  Contact <span className="text-brand-bright">Us</span>
                </h1>
                <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
                  Ready to secure your digital future? Contact us today for a consultation
                </p>
              </div>

              {/* MAIN GRID */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                {/* ===== LEFT: CONTACT FORM ===== */}
                <div className="lg:col-span-7">
                  <Card className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.015] backdrop-blur-xl shadow-[0_35px_80px_-50px_rgba(0,0,0,1)]">
                    <CardHeader className="px-6 pt-8 pb-2 sm:px-8">
                      <CardTitle className="text-xl font-semibold text-white tracking-tight">Send us a message</CardTitle>
                      <p className="text-sm text-slate-400 font-light mt-1">Fill out the form below and we'll get back to you shortly.</p>
                    </CardHeader>
                    <CardContent className="px-6 pb-8 sm:px-8">
                      <form onSubmit={onSubmit} className="space-y-6">

                        {/* Row 1: Full Name & Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <Label htmlFor="fullName" className="text-sm text-slate-300 font-medium">Full name</Label>
                            <Input
                              id="fullName"
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                              autoComplete="name"
                              pattern="[a-zA-Z\s\-'.]{2,100}"
                              maxLength={100}
                              required
                              placeholder="John Doe"
                              className={fieldClass}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm text-slate-300 font-medium">Email Address</Label>
                            <Input
                              id="email"
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              autoComplete="email"
                              required
                              placeholder="you@company.com"
                              className={fieldClass}
                            />
                          </div>
                        </div>

                        {/* Row 2: Mobile Number */}
                        <div className="space-y-2">
                          <Label className="text-sm text-slate-300 font-medium">Mobile Number</Label>
                          <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-3">
                            <Select value={phoneCountryCode} onValueChange={(v) => setPhoneCountryCode(v)}>
                              <SelectTrigger className="h-11 rounded-xl border-white/10 bg-white/[0.03] text-white">
                                <SelectValue placeholder="Code" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="+91">+91 (India)</SelectItem>
                                <SelectItem value="+1">+1 (USA)</SelectItem>
                                <SelectItem value="+44">+44 (UK)</SelectItem>
                                <SelectItem value="+971">+971 (UAE)</SelectItem>
                                <SelectItem value="+61">+61 (Australia)</SelectItem>
                              </SelectContent>
                            </Select>
                            <Input
                              inputMode="tel"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              placeholder="Mobile number"
                              autoComplete="tel"
                              pattern="[\d\s\-()]{4,20}"
                              maxLength={20}
                              className={fieldClass}
                            />
                          </div>
                        </div>

                        {/* Row 3: Company & Subject */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <Label htmlFor="company" className="text-sm text-slate-300 font-medium">Company / Organization</Label>
                            <Input
                              id="company"
                              value={company}
                              onChange={(e) => setCompany(e.target.value)}
                              autoComplete="organization"
                              maxLength={100}
                              placeholder="Acme Corp"
                              className={fieldClass}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-sm text-slate-300 font-medium">Subject</Label>
                            <Select value={subject} onValueChange={(v) => setSubject(v)}>
                              <SelectTrigger className="h-11 rounded-xl border-white/10 bg-white/[0.03] text-white">
                                <SelectValue placeholder="Select a subject" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="quote">Request a Quote</SelectItem>
                                <SelectItem value="consultation">Book a Consultation</SelectItem>
                                <SelectItem value="support">Support</SelectItem>
                                <SelectItem value="general">General Inquiry</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        {/* Row 4: Message */}
                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-sm text-slate-300 font-medium">Message</Label>
                          <Textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Your message..."
                            maxLength={2000}
                            className="min-h-40 rounded-xl border-white/10 bg-white/[0.03] text-foreground placeholder:text-slate-500 focus:border-brand/50 focus-visible:ring-brand/25"
                          />
                        </div>

                        {/* GDPR Consent */}
                        <div className="flex items-center gap-3 pt-1">
                          <Checkbox
                            id="gdpr"
                            checked={gdprConsent}
                            onCheckedChange={(v) => setGdprConsent(Boolean(v))}
                          />
                          <Label htmlFor="gdpr" className="text-sm text-slate-400">
                            GDPR Consent Checkbox
                          </Label>
                        </div>

                        {/* Error / Success Messages */}
                        {submitError ? <div className="text-sm text-destructive">{submitError}</div> : null}
                        {submitSuccess ? <div className="text-sm text-brand-bright">Message sent successfully.</div> : null}

                        {/* Submit Button */}
                        <Button
                          type="submit"
                          disabled={!canSubmit || isSubmitting}
                          className="group h-12 w-full rounded-xl bg-gradient-to-b from-brand-bright to-brand text-base font-semibold text-white shadow-[0_18px_40px_-22px_hsl(var(--brand)/0.95)] transition-all hover:brightness-110"
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                          {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* ===== RIGHT: CONTACT INFO + FAQ ===== */}
                <div className="lg:col-span-5 space-y-6">

                  {/* Contact Information Card */}
                  <Card className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur-xl">
                    <CardHeader className="px-6 pt-8 pb-4 sm:px-8">
                      <CardTitle className="text-lg font-semibold text-white tracking-tight">Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 pb-8 sm:px-8 space-y-5">
                      <div className="flex gap-4 items-start">
                        <div className="h-11 w-11 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 text-brand-bright" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">Email</div>
                          <div className="text-sm text-slate-400 mt-0.5">contact@mysoclabs.com</div>
                        </div>
                      </div>

                      <div className="w-full h-px bg-white/5" />

                      <div className="flex gap-4 items-start">
                        <div className="h-11 w-11 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-brand-bright" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">Address</div>
                          <div className="text-sm text-slate-400 mt-0.5">Hyderabad, India</div>
                        </div>
                      </div>

                      <div className="w-full h-px bg-white/5" />

                      <div className="flex gap-4 items-start">
                        <div className="h-11 w-11 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center flex-shrink-0">
                          <Clock className="w-5 h-5 text-brand-bright" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">Hours</div>
                          <div className="text-sm text-slate-400 mt-0.5">24/7</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* FAQ Accordion */}
                  <Card className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur-xl">
                    <CardHeader className="px-6 pt-8 pb-4 sm:px-8">
                      <CardTitle className="text-lg font-semibold text-white tracking-tight">Frequently Asked Questions</CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 pb-8 sm:px-8">
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="response-time" className="border-white/5">
                          <AccordionTrigger className="text-sm font-medium text-white hover:no-underline hover:text-brand-bright py-4">
                            How quickly do you respond?
                          </AccordionTrigger>
                          <AccordionContent className="text-sm text-slate-400 font-light">
                            Typically within 24 hours.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="consultations" className="border-white/5">
                          <AccordionTrigger className="text-sm font-medium text-white hover:no-underline hover:text-brand-bright py-4">
                            Do you offer consultations?
                          </AccordionTrigger>
                          <AccordionContent className="text-sm text-slate-400 font-light">
                            Yes — we can schedule a call to understand your needs.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="remote-work" className="border-b-0 border-white/5">
                          <AccordionTrigger className="text-sm font-medium text-white hover:no-underline hover:text-brand-bright py-4">
                            Do you work remotely?
                          </AccordionTrigger>
                          <AccordionContent className="text-sm text-slate-400 font-light">
                            Yes, we work with clients globally.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>

                  {/* Trust Badge */}
                  <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/[0.02] border border-white/10">
                    <div className="h-10 w-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-brand-bright" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-light">
                        Your data is secure. We follow strict privacy and security protocols to protect your information.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
