import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import mark from "@/assets/mysoc-mark.png";
import { contactDetails, categories } from "@/components/site/content";

const companyLinks = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export const SiteFooter = () => {
  return (
    <footer className="border-t border-white/10 bg-[#08090B]">
      <div className="site-container">
        <div className="grid gap-12 py-14 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.1fr)] md:gap-8 md:py-16">
          {/* Brand */}
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-3" aria-label="MySOC Labs home">
              <img src={mark} alt="" aria-hidden="true" className="h-9 w-9 object-contain" />
              <span className="text-[17px] font-semibold tracking-tight text-white">
                MySOC Labs
              </span>
            </Link>
            <p className="site-body mt-5 text-[13.5px] leading-relaxed">
              Security operations, offensive testing and advisory services for
              organisations that need to defend modern infrastructure.
            </p>
          </div>

          {/* Services */}
          <div>
            <h2 className="site-label">Services</h2>
            <ul className="mt-5 space-y-3">
              {categories.map((category) => (
                <li key={category.key}>
                  <Link
                    to={`/services#${category.anchor}`}
                    className="text-[13.5px] text-white/70 transition-colors hover:text-white"
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-[13.5px] text-white/70 transition-colors hover:text-white"
                >
                  All services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="site-label">Company</h2>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-[13.5px] text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform + contact */}
          <div>
            <h2 className="site-label">Platform</h2>
            <Link
              to="/soc-ai-tool"
              className="group mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-white transition-colors hover:text-brand-bright"
            >
              Red Eagle EDR
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            <div className="mt-6 space-y-1.5">
              <a
                href={`mailto:${contactDetails.email}`}
                className="block text-[13.5px] text-white/70 transition-colors hover:text-white"
              >
                {contactDetails.email}
              </a>
              <p className="text-[13.5px] text-white/50">{contactDetails.location}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} MySOC Labs. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Security operations · Offensive security · Advisory &amp; compliance
          </p>
        </div>
      </div>
    </footer>
  );
};
