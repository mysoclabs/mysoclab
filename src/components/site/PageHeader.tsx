import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  /** Optional short list of what the page covers, shown as a quiet index. */
  index?: string[];
};

/**
 * Interior-page header band. One hairline rule, a tight type scale and no
 * decorative background — the photography and content below carry the page.
 */
export const PageHeader = ({ eyebrow, title, description, index }: PageHeaderProps) => {
  return (
    <section className="border-b border-white/10 bg-[#08090B] pt-16">
      <div className="site-container">
        <div className="grid gap-8 py-14 md:py-20 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <span className="site-eyebrow">{eyebrow}</span>
            <h1 className="site-h1 mt-6 max-w-2xl text-balance">{title}</h1>
            <p className="site-lead mt-6 max-w-2xl">{description}</p>
          </div>

          {index && index.length > 0 ? (
            <div className="lg:pt-2">
              <p className="site-label">On this page</p>
              <ul className="mt-4 border-t border-white/10">
                {index.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-4 border-b border-white/10 py-3 text-[13.5px] text-white/65"
                  >
                    <span className="font-mono text-[10px] tracking-[0.16em] text-white/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="hidden lg:block" />
          )}
        </div>
      </div>
    </section>
  );
};

type PageCtaProps = {
  title?: string;
  description?: string;
};

/** Quiet closing band shared by interior pages. */
export const PageCta = ({
  title = "Talk to our security team",
  description = "Tell us what you are protecting and we will scope the right engagement.",
}: PageCtaProps) => {
  return (
    <section className="border-t border-white/10 bg-[#08090B]">
      <div className="site-container flex flex-col gap-6 py-14 sm:flex-row sm:items-center sm:justify-between md:py-16">
        <div>
          <h2 className="site-h3 text-balance">{title}</h2>
          <p className="site-body mt-2 max-w-xl">{description}</p>
        </div>
        <Link
          to="/contact"
          className="group inline-flex h-11 shrink-0 items-center justify-center gap-2 bg-brand px-6 text-[13.5px] font-semibold text-white transition-colors hover:bg-brand-bright"
        >
          Contact us
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
};
