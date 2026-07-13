import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page not found · Cymrai Software Solutions",
};

const QUICK: [string, string][] = [
  ["/", "Home"],
  ["/services", "Services"],
  ["/about", "About"],
  ["/blog", "Perspectives"],
  ["/contact", "Contact"],
];

export default function NotFound() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-navy">
      {/* quiet concentric texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle at 50% 120%, rgba(139,178,216,0.06) 0px, rgba(139,178,216,0.06) 1px, transparent 1px, transparent 100px)",
        }}
      />
      <span
        aria-hidden="true"
        className="ghost-word left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw]"
      >
        404
      </span>

      <div className="relative z-10 max-w-2xl mx-auto px-6 sm:px-10 pt-36 pb-24 text-center">
        <span data-reveal className="eyebrow eyebrow--light block mb-7">
          Error 404
        </span>
        <h1 data-split className="font-display text-white font-light text-5xl sm:text-6xl leading-[1.1] mb-7">
          This page took a wrong turn.
        </h1>
        <p data-reveal data-reveal-delay="240" className="text-white/75 font-normal text-lg leading-relaxed max-w-xl mx-auto mb-12">
          The page you&apos;re after doesn&apos;t exist, has moved, or never made it out of
          prototype. Let&apos;s get you back on track.
        </p>
        <div data-reveal data-reveal-delay="320" className="flex flex-wrap items-center justify-center gap-8 mb-20">
          <Link href="/" className="btn-line btn-line--light">
            Back to homepage <ArrowRight size={13} />
          </Link>
          <Link href="/contact" className="link-more text-white hover:text-brand-200">
            Talk to us
            <span className="link-more-arrow">
              <span className="w-4 h-px bg-current" />
              <ArrowRight size={11} />
            </span>
          </Link>
        </div>

        <nav
          data-reveal
          data-reveal-delay="400"
          aria-label="Quick links"
          className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {QUICK.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="text-[0.7rem] font-medium uppercase tracking-[0.26em] text-white/45 hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
