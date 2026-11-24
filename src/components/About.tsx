import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import socImage from "@/assets/optimized/photos/solution-defensive.jpg";

/**
 * Existing MySocLabs positioning, preserved from the previous About page.
 * No statistics, certifications, partnerships or locations are added.
 */
const capabilities = [
  "Industry-leading security experts",
  "24/7 threat monitoring and response",
  "Advanced AI-powered protection",
  "Compliance with global standards",
];

const technologies: { name: string; detail?: string }[] = [
  { name: "SIEM", detail: "Security Information and Event Management" },
  { name: "SOAR", detail: "Security Orchestration, Automation and Response" },
  { name: "EDR", detail: "Endpoint Detection and Response" },
  { name: "Threat Intelligence" },
  { name: "Security Automation" },
  { name: "AI-Driven Threat Detection" },
  { name: "Vulnerability Management" },
];

export const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[30rem] items-center overflow-hidden border-b border-white/10 bg-[#08090B] md:min-h-[34rem] lg:min-h-[38rem]">
        <img
          src={socImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[58%_center] [filter:saturate(0.62)_brightness(0.92)_contrast(1.04)]"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[#08090B]/[0.8]" aria-hidden="true" />

        <div className="site-container relative w-full">
          <div className="mx-auto max-w-3xl py-20 text-center md:py-24">
            <span className="site-eyebrow text-[#C8C8C8]">About MySocLabs</span>
            <h1 className="site-h1 mx-auto mt-6 max-w-[18ch] text-balance">
              Global Leader in <span className="text-[#EC1822]">Cybersecurity</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] font-normal leading-[1.7] text-[#E6E6E6] sm:text-[18px]">
              MySocLabs is dedicated to safeguarding your data in an ever-evolving
              digital world. Our mission is to preserve your digital way of life by
              countering cyber threats with innovative solutions and expert knowledge.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/services"
                className="group inline-flex h-12 items-center justify-center gap-2 bg-[#EC1822] px-7 text-[14px] font-semibold text-white transition-colors hover:bg-[#C9141C]"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center border border-white/25 bg-[#08090B]/40 px-7 text-[14px] font-semibold text-white transition-colors hover:border-white/45 hover:bg-white/[0.06]"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="border-b border-white/10 bg-[#08090B]">
        <div className="site-container site-section">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="site-eyebrow text-[#C8C8C8]">About MySocLabs</span>
              <h2 className="mt-6 text-[15px] font-semibold uppercase tracking-[0.14em] text-[#C8C8C8]">
                Who We Are
              </h2>
              <p className="mt-5 max-w-lg font-display text-[clamp(1.85rem,2.9vw,2.6rem)] font-bold leading-[1.14] tracking-[-0.025em] text-white">
                A Security-First Approach to a Digital-First World.
              </p>

              <div className="mt-8 border-l-2 border-[#EC1822] pl-5">
                <p className="max-w-md text-[16px] font-medium leading-[1.7] text-[#E6E6E6]">
                  We excel in providing a differentiated approach to cybersecurity
                  operations.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-5 text-[16.5px] font-normal leading-[1.75] text-[#E6E6E6]">
                <p>
                  MySocLabs is a cybersecurity and Managed Security Services Provider
                  (MSSP) focused on helping businesses navigate today&apos;s evolving
                  threat landscape.
                </p>
                <p>
                  We combine security expertise, advanced technologies, continuous
                  monitoring, and intelligent threat detection to strengthen
                  organizational security.
                </p>
                <p>
                  From proactive vulnerability assessments to real-time threat
                  monitoring and incident response, we work to give organizations the
                  visibility and confidence they need to operate securely.
                </p>
                <p>
                  Our approach brings together people, processes, and technology to
                  deliver practical, scalable cybersecurity solutions.
                </p>
              </div>

              <div className="mt-10">
                <p className="site-label text-[#C8C8C8]">What sets us apart</p>
                <div className="mt-4 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                  {capabilities.map((item) => (
                    <div key={item} className="flex items-start gap-3 border-t border-white/10 pt-4">
                      <span
                        className="mt-[9px] h-1 w-1 shrink-0 bg-[#EC1822]"
                        aria-hidden="true"
                      />
                      <p className="text-[14.5px] font-normal leading-[1.65] text-[#DCDCDC]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-b border-white/10 bg-[#111215]">
        <div className="site-container site-section">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="site-eyebrow text-[#C8C8C8]">Our Mission</span>
              <h2 className="site-h2 mt-5 max-w-[20ch] text-balance text-[#F5F5F5]">
                Making Digital Security Stronger, Smarter, and More Accessible.
              </h2>
            </div>

            <div className="lg:col-span-7 lg:pt-2">
              <p className="text-[17px] font-normal leading-[1.7] text-[#E6E6E6]">
                Our mission is to help organizations stay ahead of cyber threats
                through continuous security monitoring, intelligent detection,
                proactive defense, and effective incident response.
              </p>
              <p className="mt-4 text-[16px] font-normal leading-[1.75] text-[#DCDCDC]">
                We strive to simplify complex security challenges and build resilient
                digital environments where businesses can operate with confidence.
              </p>

              <div className="mt-9 border-t border-white/10 pt-6">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[#C8C8C8]">
                  In practice
                </p>
                <p className="mt-3 max-w-2xl text-[15.5px] font-normal leading-[1.75] text-[#DCDCDC]">
                  We help businesses stay secure, build cyber resilience, and operate
                  with confidence through proactive security monitoring, expert-led
                  testing, and strategic cybersecurity guidance — monitoring, testing
                  and advisory support under one roof.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision — mirrored editorial layout */}
      <section className="border-b border-white/10 bg-[#08090B]">
        <div className="site-container site-section">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="order-2 lg:order-1 lg:col-span-7">
              <p className="text-[17px] font-normal leading-[1.7] text-[#E6E6E6]">
                Our vision is to become a trusted cybersecurity partner for
                organizations by continuously advancing security technologies,
                strengthening defense capabilities, and staying ahead of emerging
                cyber threats.
              </p>
              <p className="mt-4 max-w-2xl text-[16px] font-normal leading-[1.75] text-[#DCDCDC]">
                We aim to create a digital environment where security is not an
                afterthought but an essential part of every organization&apos;s growth.
              </p>

              <div className="mt-10 flex items-center gap-3">
                <span className="h-px w-10 bg-[#EC1822]" aria-hidden="true" />
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[#C8C8C8]">
                  Security as an enabler of growth
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-5 lg:text-right">
              <span className="site-eyebrow text-[#C8C8C8]">Our Vision</span>
              <h2 className="site-h2 mt-5 max-w-[18ch] text-balance text-[#F5F5F5] lg:ml-auto">
                Building a More Secure Digital Future.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & innovation */}
      <section className="border-b border-white/10 bg-[#15171B]">
        <div className="site-container site-section">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-7">
              <span className="site-eyebrow text-[#C8C8C8]">Technology &amp; Innovation</span>
              <h2 className="site-h2 mt-5 max-w-[20ch] text-balance text-[#F5F5F5]">
                Powered by Modern Security Technologies.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[16.5px] font-normal leading-[1.7] text-[#E6E6E6] lg:pb-1">
                We leverage modern cybersecurity technologies and methodologies to
                strengthen digital defenses.
              </p>
            </div>
          </div>

          <ul className="mt-12 grid gap-x-12 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology) => (
              <li key={technology.name} className="flex items-start gap-3.5">
                <span
                  className="mt-[9px] h-1.5 w-1.5 shrink-0 bg-[#EC1822]"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-[16px] font-semibold leading-snug tracking-[-0.01em] text-[#F5F5F5]">
                    {technology.name}
                  </p>
                  {technology.detail ? (
                    <p className="mt-1.5 text-[14.5px] font-normal leading-[1.65] text-[#DCDCDC]">
                      {technology.detail}
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-12 border-t border-white/10 pt-7">
            <p className="max-w-3xl text-[15.5px] font-normal leading-[1.75] text-[#DCDCDC]">
              Through the integration of these capabilities, we help organizations
              improve security visibility, streamline investigations, and strengthen
              their response capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="bg-[#111215]">
        <div className="site-container py-14 md:py-20">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-8">
              <h2 className="site-h2 max-w-[24ch] text-balance text-[#F5F5F5]">
                Let&apos;s Work Together to Protect What Matters Most.
              </h2>
              <p className="mt-5 max-w-2xl text-[16px] font-normal leading-[1.7] text-[#E6E6E6]">
                Work with a team that operates, not just advises. Monitoring, testing
                and advisory support under one roof.
              </p>
            </div>

            <div className="lg:col-span-4 lg:justify-self-end">
              <Link
                to="/contact"
                className="group inline-flex h-12 w-full items-center justify-center gap-2 bg-[#EC1822] px-7 text-[13.5px] font-semibold text-white transition-colors hover:bg-[#C9141C] sm:w-auto"
              >
                Talk to Our Security Team
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
