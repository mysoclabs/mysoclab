import { type FormEvent, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Loader2 } from "lucide-react";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { contactDetails } from "@/components/site/content";

/* Validation mirrors the rules enforced by the /api/contact handler. */
const VALID_NAME = /^[a-zA-Z\s\-'.]{2,100}$/;
const VALID_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_PHONE = /^\d{4,15}$/;
const VALID_COMPANY = /^[a-zA-Z0-9\s\-'.&,()]{0,100}$/;
const MAX_MESSAGE_LENGTH = 2000;

type FieldErrors = {
  fullName?: string;
  email?: string;
  phone?: string;
  company?: string;
  consent?: string;
};

/* Bordered fields sit on the charcoal form band as a clean, contained set. */
const fieldClass = (hasError: boolean) =>
  `h-12 w-full rounded-none border bg-[#0B0C0F] px-3.5 text-[15.5px] text-white placeholder:text-white/25 transition-colors focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60 ${
    hasError
      ? "border-[#F87171] focus:border-[#F87171]"
      : "border-white/[0.28] hover:border-white/40 focus:border-white/[0.55]"
  }`;

const selectClass = (hasError: boolean) =>
  `h-12 w-full rounded-none border bg-[#0B0C0F] px-3.5 text-[15.5px] text-white transition-colors focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 [&>span]:line-clamp-1 ${
    hasError
      ? "border-[#F87171] focus:border-[#F87171]"
      : "border-white/[0.28] hover:border-white/40 focus:border-white/[0.55]"
  }`;

const labelClass = "text-[13.5px] font-medium text-white/70";
const errorClass = "mt-2 text-[12.5px] leading-snug text-[#F87171]";
const optionalMark = <span className="text-[12.5px] font-normal text-white/35">(optional)</span>;

const ContactPage = () => {
  const navigate = useNavigate();

  // Hide the visual scrollbar on this page only; wheel, keyboard, touch and
  // touchpad scrolling remain fully functional.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("contact-hide-scrollbar");
    return () => root.classList.remove("contact-hide-scrollbar");
  }, []);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneCountryCode, setPhoneCountryCode] = useState<string>("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState<string>("quote");
  const [message, setMessage] = useState("");
  const [gdprConsent, setGdprConsent] = useState(false);

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const errors = useMemo<FieldErrors>(() => {
    const next: FieldErrors = {};
    const name = fullName.trim();

    if (!name) next.fullName = "Enter your full name.";
    else if (!VALID_NAME.test(name)) next.fullName = "Use letters, spaces, hyphens or apostrophes only.";

    if (!email.trim()) next.email = "Enter your email address.";
    else if (!VALID_EMAIL.test(email.trim())) next.email = "Enter a valid email address.";

    const phone = phoneNumber.replace(/[\s\-()]/g, "");
    if (phoneNumber.trim() && !VALID_PHONE.test(phone)) {
      next.phone = "Enter a valid phone number (4–15 digits).";
    }

    if (company.trim() && !VALID_COMPANY.test(company.trim())) {
      next.company = "Remove unsupported characters from the company name.";
    }

    if (!gdprConsent) next.consent = "Please confirm consent before sending.";

    return next;
  }, [fullName, email, phoneNumber, company, gdprConsent]);

  const showError = (field: keyof FieldErrors) =>
    Boolean((touched[field] || submitted) && errors[field]);

  const markTouched = (field: keyof FieldErrors) =>
    setTouched((prev) => ({ ...prev, [field]: true }));

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setSubmitError(null);

    if (Object.keys(errors).length > 0 || isSubmitting) return;

    try {
      setIsSubmitting(true);

      // Existing submission integration — POST /api/contact, proxied to the API.
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
        const raw = await res.text();
        let detail = "";
        try {
          const parsed = raw ? JSON.parse(raw) : null;
          detail = parsed?.details?.[0] || parsed?.error || "";
        } catch {
          detail = "";
        }
        throw new Error(
          detail ||
            `We couldn't send your message. Please try again in a moment, or email ${contactDetails.email}.`,
        );
      }

      // The success page is the existing confirmation route.
      navigate("/success");
      setFullName("");
      setEmail("");
      setPhoneCountryCode("+91");
      setPhoneNumber("");
      setCompany("");
      setSubject("quote");
      setMessage("");
      setGdprConsent(false);
      setTouched({});
      setSubmitted(false);
    } catch (err) {
      if (err instanceof TypeError) {
        setSubmitError(
          `We couldn't reach the contact service. Please try again in a moment, or email ${contactDetails.email}.`,
        );
      } else {
        setSubmitError(err instanceof Error ? err.message : "We couldn't send your message. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#08090B]">
      <Navigation />

      <main className="pt-16">
        {/* Contact hero */}
        <section>
          <div className="site-container">
            <div className="grid gap-10 py-14 md:py-20 lg:grid-cols-12 lg:items-end lg:gap-16">
              <div className="lg:col-span-7">
                <span className="site-eyebrow">Contact</span>
                <h1 className="site-h1 mt-6 max-w-[15ch] text-balance text-[clamp(2.55rem,4.8vw,4.15rem)]">
                  Let&apos;s Secure Your Digital Future.
                </h1>
              </div>

              <div className="lg:col-span-5 lg:pb-1">
                <div className="border-t border-white/[0.18] pt-5">
                  <p className="text-[16.5px] leading-[1.75] text-[#B8B8B8]">
                    Ready to secure your digital future? Contact us today for a
                    consultation.
                  </p>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-white/50">
                    Speak with MySocLabs about monitoring, security testing, incident
                    response or advisory support. Tell us what you are protecting and
                    our team will respond with a clear, scoped next step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enquiry form (left) and contact information (right) */}
        <section className="border-b border-white/[0.18]">
          <div className="site-container grid grid-cols-1 gap-12 py-12 md:py-16 lg:grid-cols-12 lg:gap-0 lg:py-16">
            {/* Enquiry form */}
            <div className="lg:col-span-7 lg:pr-10 xl:pr-14">
              <div className="rounded-md border border-white/[0.20] bg-[#111215] p-5 sm:p-7 lg:p-8 xl:p-9">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h2 className="text-[21px] font-semibold tracking-[-0.02em] text-white sm:text-[23px]">
                    Send us a message
                  </h2>
                </div>
                <p className="mt-2 text-[14.5px] leading-relaxed text-[#B8B8B8]">
                  Fill out the form below and we&apos;ll get back to you shortly.
                </p>

                <form onSubmit={onSubmit} noValidate className="mt-6 border-t border-white/[0.18] pt-7">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="fullName" className={labelClass}>
                        Full name
                      </Label>
                      <input
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        onBlur={() => markTouched("fullName")}
                        autoComplete="name"
                        maxLength={100}
                        required
                        aria-required="true"
                        aria-invalid={showError("fullName")}
                        aria-describedby={showError("fullName") ? "fullName-error" : undefined}
                        placeholder="John Doe"
                        className={`${fieldClass(showError("fullName"))} mt-2`}
                      />
                      {showError("fullName") ? (
                        <p id="fullName-error" className={errorClass}>
                          {errors.fullName}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <Label htmlFor="email" className={labelClass}>
                        Email Address
                      </Label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => markTouched("email")}
                        autoComplete="email"
                        required
                        aria-required="true"
                        aria-invalid={showError("email")}
                        aria-describedby={showError("email") ? "email-error" : undefined}
                        placeholder="you@company.com"
                        className={`${fieldClass(showError("email"))} mt-2`}
                      />
                      {showError("email") ? (
                        <p id="email-error" className={errorClass}>
                          {errors.email}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-6">
                    <Label htmlFor="phoneNumber" className={labelClass}>
                      Mobile Number {optionalMark}
                    </Label>
                    <div className="mt-2 grid grid-cols-[8.5rem_minmax(0,1fr)] gap-4">
                      <Select value={phoneCountryCode} onValueChange={(v) => setPhoneCountryCode(v)}>
                        <SelectTrigger
                          aria-label="Country calling code"
                          className={selectClass(false)}
                        >
                          <SelectValue placeholder="Code" />
                        </SelectTrigger>
                        <SelectContent className="border-white/[0.18] bg-[#111215] text-white">
                          <SelectItem value="+91" className="focus:bg-white/[0.06] focus:text-white">
                            +91 (India)
                          </SelectItem>
                          <SelectItem value="+1" className="focus:bg-white/[0.06] focus:text-white">
                            +1 (USA)
                          </SelectItem>
                          <SelectItem value="+44" className="focus:bg-white/[0.06] focus:text-white">
                            +44 (UK)
                          </SelectItem>
                          <SelectItem value="+971" className="focus:bg-white/[0.06] focus:text-white">
                            +971 (UAE)
                          </SelectItem>
                          <SelectItem value="+61" className="focus:bg-white/[0.06] focus:text-white">
                            +61 (Australia)
                          </SelectItem>
                        </SelectContent>
                      </Select>

                      <div>
                        <input
                          id="phoneNumber"
                          inputMode="tel"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value.replace(/[^\d\s\-()]/g, ""))}
                          onBlur={() => markTouched("phone")}
                          autoComplete="tel"
                          maxLength={20}
                          aria-invalid={showError("phone")}
                          aria-describedby={showError("phone") ? "phone-error" : undefined}
                          placeholder="Mobile number"
                          className={fieldClass(showError("phone"))}
                        />
                        {showError("phone") ? (
                          <p id="phone-error" className={errorClass}>
                            {errors.phone}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="company" className={labelClass}>
                        Company / Organization {optionalMark}
                      </Label>
                      <input
                        id="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        onBlur={() => markTouched("company")}
                        autoComplete="organization"
                        maxLength={100}
                        aria-invalid={showError("company")}
                        aria-describedby={showError("company") ? "company-error" : undefined}
                        placeholder="Acme Corp"
                        className={`${fieldClass(showError("company"))} mt-2`}
                      />
                      {showError("company") ? (
                        <p id="company-error" className={errorClass}>
                          {errors.company}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <Label htmlFor="subject" className={labelClass}>
                        Subject
                      </Label>
                      <Select value={subject} onValueChange={(v) => setSubject(v)}>
                        <SelectTrigger id="subject" aria-label="Subject" className={`${selectClass(false)} mt-2`}>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent className="border-white/[0.18] bg-[#111215] text-white">
                          <SelectItem value="quote" className="focus:bg-white/[0.06] focus:text-white">
                            Request a Quote
                          </SelectItem>
                          <SelectItem
                            value="consultation"
                            className="focus:bg-white/[0.06] focus:text-white"
                          >
                            Book a Consultation
                          </SelectItem>
                          <SelectItem value="support" className="focus:bg-white/[0.06] focus:text-white">
                            Support
                          </SelectItem>
                          <SelectItem value="general" className="focus:bg-white/[0.06] focus:text-white">
                            General Inquiry
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-baseline justify-between gap-6">
                      <Label htmlFor="message" className={labelClass}>
                        Message {optionalMark}
                      </Label>
                      <span
                        className="font-mono text-[10.5px] tracking-[0.08em] text-white/40"
                        aria-hidden="true"
                      >
                        {message.length}/{MAX_MESSAGE_LENGTH}
                      </span>
                    </div>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      maxLength={MAX_MESSAGE_LENGTH}
                      placeholder="Describe your environment, current priorities or the outcome you need."
                      className={`${fieldClass(false)} mt-2 min-h-[150px] resize-y py-3 leading-relaxed`}
                    />
                  </div>

                  <div className="mt-6">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="gdpr"
                        checked={gdprConsent}
                        onCheckedChange={(v) => {
                          setGdprConsent(Boolean(v));
                          markTouched("consent");
                        }}
                        aria-invalid={showError("consent")}
                        aria-describedby={showError("consent") ? "gdpr-error" : undefined}
                        className="mt-[3px] h-[17px] w-[17px] rounded-[2px] border-white/[0.28] bg-transparent data-[state=checked]:border-[#EC1822] data-[state=checked]:bg-[#EC1822] data-[state=checked]:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 focus-visible:ring-offset-0"
                      />
                      <Label
                        htmlFor="gdpr"
                        className="text-[13.5px] font-normal leading-relaxed text-white/55"
                      >
                        I consent to MySocLabs storing and processing these details to
                        respond to my enquiry.
                      </Label>
                    </div>
                    {showError("consent") ? (
                      <p id="gdpr-error" className={`${errorClass} ml-[29px]`}>
                        {errors.consent}
                      </p>
                    ) : null}
                  </div>

                  {submitError ? (
                    <div
                      role="alert"
                      aria-live="polite"
                      className="mt-7 border-l-2 border-[#EC1822] pl-4"
                    >
                      <p className="text-[14px] font-medium text-white">Message not sent</p>
                      <p className="mt-1 text-[14px] leading-relaxed text-white/60">
                        {submitError}
                      </p>
                    </div>
                  ) : null}

                  <div className="mt-7 flex flex-col gap-4 border-t border-white/[0.18] pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex h-12 w-full items-center justify-center gap-2 bg-[#EC1822] px-8 text-[14.5px] font-semibold tracking-[0.01em] text-white transition-colors hover:bg-[#C9141C] focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/40 sm:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                          Sending…
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-white/45">
                      Typical response within 24 hours
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact information */}
            <aside className="lg:col-span-5 lg:pl-10 lg:pt-8 xl:pl-14 xl:pt-9">
              <div className="border-b border-white/[0.18] pb-5">
                <h2 className="text-[16.5px] font-semibold tracking-[-0.01em] text-white">
                  Contact information
                </h2>
              </div>

              <div className="mt-8">
                <p className="site-label text-[12px]">Email</p>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="mt-3 block break-all text-[22px] font-semibold leading-snug tracking-[-0.015em] text-white underline-offset-[6px] transition-colors hover:text-[#FF5A62] focus-visible:underline sm:text-[24px]"
                >
                  {contactDetails.email}
                </a>
                <p className="mt-3 max-w-sm text-[14.5px] leading-relaxed text-[#B8B8B8]">
                  The fastest way to reach the team. Include a short note about your
                  environment and the outcome you need.
                </p>
              </div>

              <dl className="mt-8 border-t border-white/[0.18]">
                <div className="flex items-baseline justify-between gap-8 border-b border-white/[0.18] py-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/45">
                    Address
                  </dt>
                  <dd className="text-right text-[15px] text-white/85">
                    {contactDetails.location}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-8 border-b border-white/[0.18] py-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/45">
                    Hours
                  </dt>
                  <dd className="text-right text-[15px] text-white/85">
                    {contactDetails.hours}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-8 border-b border-white/[0.18] py-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/45">
                    Response
                  </dt>
                  <dd className="text-right text-[15px] text-white/85">
                    Within 24 hours
                  </dd>
                </div>
              </dl>

              <div className="mt-10 border-t border-white/[0.18] pt-8">
                <h3 className="text-[15.5px] font-semibold text-white">
                  Frequently Asked Questions
                </h3>
                <Accordion type="single" collapsible className="mt-3">
                  <AccordionItem value="response-time" className="border-white/[0.18]">
                    <AccordionTrigger className="py-4 text-left text-[14.5px] font-medium text-white/85 hover:text-white hover:no-underline [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-white/35">
                      How quickly do you respond?
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pr-6 text-[14px] leading-relaxed text-[#B8B8B8]">
                      Typically within 24 hours.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="consultations" className="border-white/[0.18]">
                    <AccordionTrigger className="py-4 text-left text-[14.5px] font-medium text-white/85 hover:text-white hover:no-underline [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-white/35">
                      Do you offer consultations?
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pr-6 text-[14px] leading-relaxed text-[#B8B8B8]">
                      Yes — we can schedule a call to understand your needs.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="remote-work" className="border-b-0 border-white/[0.18]">
                    <AccordionTrigger className="py-4 text-left text-[14.5px] font-medium text-white/85 hover:text-white hover:no-underline [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-white/35">
                      Do you work remotely?
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pr-6 text-[14px] leading-relaxed text-[#B8B8B8]">
                      Yes, we work with clients globally.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <p className="mt-8 border-t border-white/[0.18] pt-6 text-[13px] leading-relaxed text-white/45">
                Your data is secure. We follow strict privacy and security protocols to
                protect your information.
              </p>
            </aside>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-[#111215]">
          <div className="site-container">
            <div className="grid gap-12 py-16 md:py-20 lg:grid-cols-12 lg:items-start lg:gap-0 lg:py-24">
              <div className="lg:col-span-7 lg:pr-16 xl:pr-24">
                <span className="site-eyebrow">Next step</span>
                <h2 className="site-h2 mt-6 max-w-[22ch] text-balance text-[clamp(2.05rem,3.3vw,3rem)] text-[#F5F5F5]">
                  Let&apos;s discuss your security requirements.
                </h2>
                <p className="mt-6 max-w-xl text-[17px] leading-[1.72] text-[#D0D0D0]">
                  Every engagement begins with a conversation about your environment,
                  priorities and constraints. Share what you are working towards and
                  our team will outline a clear path forward.
                </p>
                <div className="mt-9">
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="group inline-flex h-12 w-full items-center justify-center gap-2 bg-[#EC1822] px-7 text-[14.5px] font-semibold tracking-[0.01em] text-white transition-colors hover:bg-[#C9141C] focus-visible:outline-offset-4 sm:w-auto"
                  >
                    Email Our Security Team
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 lg:pl-14 lg:pt-1 xl:pl-20">
                <div className="flex items-center gap-3.5">
                  <span className="h-px w-9 shrink-0 bg-[#EC1822]" aria-hidden="true" />
                  <p className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-[#B8B8B8]">
                    Write to us directly
                  </p>
                </div>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="mt-5 block break-all text-[clamp(1.4rem,2.3vw,1.85rem)] font-semibold leading-snug tracking-[-0.02em] text-[#F5F5F5] underline-offset-[6px] transition-colors hover:text-[#FF5A62] focus-visible:underline"
                >
                  {contactDetails.email}
                </a>
                <p className="mt-4 max-w-sm text-[14.5px] leading-[1.7] text-[#B8B8B8]">
                  For enquiries about monitoring, testing, incident response or advisory
                  work, use the same address and your message will reach the right team.
                </p>
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
