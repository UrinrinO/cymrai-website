import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "Perspectives · Cymrai Software Solutions",
  description: "Thoughts on AI, data engineering and software craft, written by practitioners, not content marketers.",
};

const HERO_IMG =
  "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=2000";

const FEATURED = {
  href: "/blog/why-ai-projects-fail",
  category: "AI Strategy",
  date: "18 June 2026",
  read: "8 min read",
  title: "Why Most AI Projects Never Make It to Production",
  excerpt:
    "The failure rate of enterprise AI projects is not a secret. What gets talked about less is precisely where these projects break down, and why the same patterns keep repeating.",
  image: "/images/audit.jpg",
};

const POSTS = [
  {
    href: "/blog/data-engineering-unglamorous-foundation",
    image: "/images/data-engineering.jpg",
    category: "Data Engineering",
    date: "7 May 2026",
    read: "7 min read",
    title: "The Unglamorous Foundation: Why Data Engineering Decides Whether Your AI Project Succeeds",
    excerpt:
      "Every conversation about AI focuses on the model. What rarely gets talked about is the infrastructure those models depend on, and what happens when it is built badly.",
  },
  {
    href: "/blog/six-questions-before-signing-ai-contract",
    image: "/images/ai-strategy.jpg",
    category: "AI Strategy",
    date: "19 March 2026",
    read: "6 min read",
    title: "Six Questions to Ask Before You Sign an AI Contract",
    excerpt:
      "AI vendors have learned to be very good at demos. Here is what to ask when the demo is finished and the contract is on the table.",
  },
  {
    href: "/blog/ai-audit-what-it-actually-means",
    image: "/images/audit_1.jpg",
    category: "AI Governance",
    date: "29 January 2026",
    read: "9 min read",
    title: "An AI Audit Isn't a Technical Review. Here's What It Actually Is.",
    excerpt:
      "The term \"AI audit\" means different things to different people. Most definitions are too narrow. Here is how we think about it, and why the scope matters more than the methodology.",
  },
];

export default function Blog() {
  return (
    <>
      <PageHero
        label="From the team"
        title="Perspectives"
        subtitle="Thoughts on AI, data engineering and software craft, written by practitioners, not content marketers."
        crumb="Perspectives"
        image={HERO_IMG}
        imageAlt="An open notebook and coffee on a writing desk"
      />

      {/* ═══ FEATURED — photo / cream panel split ═══ */}
      <section className="bg-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div data-reveal="left" className="relative min-h-[24rem] lg:min-h-[34rem] overflow-hidden">
            <img
              src={FEATURED.image}
              alt={FEATURED.title}
              data-parallax="24"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div data-reveal="right" className="bg-cream flex items-center">
            <div className="px-8 sm:px-14 lg:px-20 py-16 lg:py-20 w-full max-w-2xl">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-7">
                <span className="eyebrow">{FEATURED.category}</span>
                <span className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-slate-400">
                  {FEATURED.date} · {FEATURED.read}
                </span>
              </div>
              <h2 className="font-display font-light text-navy text-3xl sm:text-4xl leading-[1.15] mb-6">
                <Link href={FEATURED.href} className="hover:text-brand-600 transition-colors">
                  {FEATURED.title}
                </Link>
              </h2>
              <p className="text-slate-500 text-base font-light leading-relaxed mb-10">{FEATURED.excerpt}</p>
              <Link href={FEATURED.href} className="link-more text-navy hover:text-brand-600">
                Read article
                <span className="link-more-arrow">
                  <span className="w-4 h-px bg-current" />
                  <ArrowRight size={11} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ALL ARTICLES — editorial card row ═══ */}
      <section className="bg-paper border-y border-navy/[0.06]">
        <div className="max-w-[85rem] mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-32">
          <div className="max-w-2xl mb-16">
            <span data-reveal className="eyebrow block mb-6">
              All articles
            </span>
            <h2 data-split className="font-display font-light text-navy text-4xl sm:text-5xl leading-[1.12]">
              More reading
            </h2>
          </div>

          {/* hairlines as real borders: a 1px grid gap lands on half device-pixels
              at fractional track widths and antialiases away */}
          <div data-reveal-stagger className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-navy/15">
            {POSTS.map((p) => (
              <article key={p.href} className="group bg-paper hover:bg-white transition-colors border-r border-b border-navy/15 flex flex-col">
                <Link href={p.href} className="relative block h-80 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/15 transition-colors duration-500" />
                </Link>
                <div className="p-9 flex flex-col flex-1">
                  <p className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-brand-500 mb-5">{p.category}</p>
                  <h3 className="font-display text-navy text-[1.45rem] leading-snug mb-4">
                    <Link href={p.href} className="hover:text-brand-600 transition-colors">
                      {p.title}
                    </Link>
                  </h3>
                  <p className="text-slate-500 text-[0.95rem] font-light leading-relaxed mb-8 flex-1">{p.excerpt}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-navy/[0.08]">
                    <span className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-slate-400">
                      {p.date} · {p.read}
                    </span>
                    <Link href={p.href} className="link-more text-navy hover:text-brand-600">
                      Read
                      <span className="link-more-arrow">
                        <span className="w-4 h-px bg-current" />
                        <ArrowRight size={11} />
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ NOTE — serif statement ═══ */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 text-center py-24 lg:py-32">
          <span data-reveal className="eyebrow block mb-6">
            More to come
          </span>
          <h2 data-split className="font-display font-light text-navy text-3xl sm:text-4xl leading-[1.2] mb-7">
            We publish when we have something worth saying.
          </h2>
          <p data-reveal data-reveal-delay="160" className="text-slate-500 text-base font-light leading-relaxed max-w-xl mx-auto mb-12">
            We do not produce content for content&apos;s sake. When we publish, it is because we
            have something useful to say to people building, buying or governing AI. If that sounds
            like you, our contact page is the best way to stay connected.
          </p>
          <div data-reveal data-reveal-delay="240">
            <Link href="/contact" className="btn-line btn-line--dark">
              Get in touch <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
