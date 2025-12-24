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
import { Clock, Mail, MapPin } from "lucide-react";
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
    return true;
  }, [email, gdprConsent]);

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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-secondary/20 to-background" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                  Contact <span className="text-primary">Us</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Ready to secure your digital future? Contact us today for a consultation
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-card/50 backdrop-blur-sm border border-border">
                  <CardHeader>
                    <CardTitle className="text-base">Send us a message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={onSubmit} className="space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full name</Label>
                        <Input
                          id="fullName"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          autoComplete="name"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          autoComplete="email"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Mobile Number</Label>
                        <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-3">
                          <Select value={phoneCountryCode} onValueChange={(v) => setPhoneCountryCode(v)}>
                            <SelectTrigger>
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
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company / Organization</Label>
                        <Input
                          id="company"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          autoComplete="organization"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Subject</Label>
                        <Select value={subject} onValueChange={(v) => setSubject(v)}>
                          <SelectTrigger>
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

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Your message..."
                          className="min-h-40"
                        />
                      </div>

                      <div className="flex items-center gap-3 pt-1">
                        <Checkbox
                          id="gdpr"
                          checked={gdprConsent}
                          onCheckedChange={(v) => setGdprConsent(Boolean(v))}
                        />
                        <Label htmlFor="gdpr" className="text-sm text-muted-foreground">
                          GDPR Consent Checkbox
                        </Label>
                      </div>

                      {submitError ? <div className="text-sm text-destructive">{submitError}</div> : null}
                      {submitSuccess ? <div className="text-sm text-primary">Message sent successfully.</div> : null}

                      <Button
                        type="submit"
                        disabled={!canSubmit || isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.2)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.35)] transition-all"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card className="bg-card/50 backdrop-blur-sm border border-border">
                    <CardHeader>
                      <CardTitle className="text-base">Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex gap-3">
                        <div className="mt-0.5 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">Email</div>
                          <div className="text-sm text-muted-foreground">contact@mysoclabs.com</div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="mt-0.5 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">Address</div>
                          <div className="text-sm text-muted-foreground">Hyderabad, India</div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="mt-0.5 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Clock className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">Hours</div>
                          <div className="text-sm text-muted-foreground">24/7</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/50 backdrop-blur-sm border border-border">
                    <CardHeader>
                      <CardTitle className="text-base">Frequently Asked Questions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="text-sm font-medium">How quickly do you respond?</div>
                        <div className="text-sm text-muted-foreground mt-1">Typically within 24 hours.</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Do you offer consultations?</div>
                        <div className="text-sm text-muted-foreground mt-1">Yes — we can schedule a call to understand your needs.</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Do you work remotely?</div>
                        <div className="text-sm text-muted-foreground mt-1">Yes, we work with clients globally.</div>
                      </div>
                    </CardContent>
                  </Card>
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
