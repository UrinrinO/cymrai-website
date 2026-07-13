import Link from "next/link";
import { ArrowRight, Linkedin, Mail } from "lucide-react";

const EXPLORE: [string, string][] = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/blog", "Blog"],
  ["/contact", "Contact"],
];

const SERVICES: [string, string][] = [
  ["/services", "AI Auditing & Governance"],
  ["/services", "Custom AI Solutions"],
  ["/services", "Data Engineering"],
  ["/services", "AI Strategy & Consulting"],
  ["/services", "Training & Workshops"],
];

export default function Footer() {
  return (
    <footer
      className="text-slate-400 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #10304f 0%, #0d2946 60%, #0b2036 100%)" }}
    >
      {/* faint contour texture, echoes Halstein's watermark motif */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle at 85% 120%, rgba(139,178,216,0.05) 0px, rgba(139,178,216,0.05) 1px, transparent 1px, transparent 110px)",
        }}
      />

      <div className="relative mx-auto max-w-[95rem] px-6 sm:px-10 lg:px-16 py-20 lg:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo-white.png" alt="Cymrai Software Solutions" className="h-10 w-auto mb-7" />
            <p className="text-slate-400 text-[1.0625rem] font-normal leading-relaxed max-w-xs mb-8">
              A senior-led AI and software engineering consultancy. Production-grade AI and data
              solutions, built in Cardiff for mid-market businesses across the UK.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/cymrai-software-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-ico"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a href="mailto:info@cymrai.co.uk" className="social-ico" aria-label="Email">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <p className="text-white text-[0.76rem] font-medium tracking-[0.28em] uppercase mb-7">Cymrai</p>
            <ul className="space-y-4 text-base font-normal">
              {EXPLORE.map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="foot-link text-slate-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <p className="text-white text-[0.76rem] font-medium tracking-[0.28em] uppercase mb-7">Services</p>
            <ul className="space-y-4 text-base font-normal">
              {SERVICES.map(([href, label]) => (
                <li key={label}>
                  <Link href={href} className="foot-link text-slate-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe / contact */}
          <div className="col-span-2 lg:col-span-3">
            <p className="text-white text-[0.76rem] font-medium tracking-[0.28em] uppercase mb-7">Get in touch</p>
            <a
              href="mailto:info@cymrai.co.uk"
              className="group flex items-center justify-between gap-4 border-b border-white/25 pb-3 mb-3 text-[1.0625rem] font-normal text-slate-300 hover:text-white transition-colors"
            >
              info@cymrai.co.uk
              <ArrowRight size={14} className="text-brand-300 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-slate-500 text-sm font-light italic mb-8">Every enquiry answered by a director.</p>
            <ul className="space-y-3 text-base font-normal">
              <li>
                <a href="tel:07931046771" className="text-slate-400 hover:text-white transition-colors">
                  07931 046 771
                </a>
              </li>
              <li>Cardiff, Wales</li>
              <li>USW Startup Stiwdio</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-slate-500 text-sm font-light order-2 sm:order-1">
            &copy; {new Date().getFullYear()} Cymrai Software Solutions. All rights reserved.
          </p>
          <p className="order-1 sm:order-2 text-[0.7rem] tracking-[0.3em] uppercase text-slate-500">
            Cardiff <span className="text-brand-400 mx-2">·</span> Wales{" "}
            <span className="text-brand-400 mx-2">·</span> UK
          </p>
        </div>
      </div>
    </footer>
  );
}
