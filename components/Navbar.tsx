"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

/* No /contact entry: the "Start a Conversation" CTA already goes there. */
const LINKS: [string, string][] = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/blog", "Blog"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      // Glide away when scrolling down past the hero, return on any scroll up.
      setHidden(y > 140 && y > lastY);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Every page now opens with a full-bleed dark hero, so at the top the bar
  // is transparent with white text; once scrolled it sits on white.
  const onDarkHero = !scrolled && !open;

  return (
    <>
      <header
        id="site-header"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        } ${scrolled ? "is-scrolled" : "border-b border-transparent"} ${
          !scrolled && !onDarkHero ? "bg-white/90 backdrop-blur-sm border-navy/[0.06]" : ""
        }`}
      >
        <div className="mx-auto max-w-[95rem] px-5 sm:px-8 lg:px-16 flex h-[5.5rem] items-center justify-between">
          <Link href="/" className="shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={onDarkHero ? "/images/logo-white.png" : "/images/logo-black.png"}
              alt="Cymrai Software Solutions"
              className="h-9 w-auto transition-opacity duration-300"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-9">
            {LINKS.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className={`text-[0.8rem] font-medium uppercase tracking-[0.22em] transition-colors ${
                  onDarkHero
                    ? "text-white/80 hover:text-white"
                    : pathname === href
                      ? "text-navy"
                      : "text-navy/55 hover:text-navy"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className={`hidden md:inline-flex items-center gap-3 text-[0.8rem] font-medium uppercase tracking-[0.22em] transition-colors ${
              onDarkHero ? "text-white hover:text-brand-200" : "text-navy hover:text-brand-600"
            }`}
          >
            Start a Conversation
            <span className={`inline-block w-8 h-px ${onDarkHero ? "bg-white/60" : "bg-navy/40"}`} />
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`flex md:hidden items-center justify-center w-10 h-10 transition-colors ${
              onDarkHero ? "text-white" : "text-navy"
            }`}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-navy text-white flex flex-col pt-28 md:hidden">
          <nav className="flex flex-col px-8">
            {LINKS.map(([href, label], i) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-5 py-5 border-b border-white/10 hover:text-brand-200 transition-colors"
              >
                <span className="text-brand-300 text-xs tracking-[0.2em]">0{i + 1}</span>
                <span className="font-display text-3xl">{label}</span>
              </Link>
            ))}
          </nav>
          <div className="px-8 pt-10">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-line btn-line--light"
            >
              Start a Conversation <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
