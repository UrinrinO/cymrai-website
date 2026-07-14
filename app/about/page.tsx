import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Hammer, Handshake, Cpu, Heart } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "About · Cymrai Software Solutions",
  description:
    "A senior-led AI and software engineering consultancy rooted in Wales. Production-grade AI and data systems for mid-market businesses.",
};

const IMG = {
  hero: "/images/conference.jpeg",
  team: "/images/newport_with_studio_leads.jpg",
  craft: "/images/Plaid_Rhun_Newport-2.jpg",
};

const CORE = [
  {
    label: "Models",
    title: "AI & Machine Learning",
    body: "We design, train and deploy ML models and LLM-powered tools tailored to your data and workflows, from intelligent automation to conversational AI.",
  },
  {
    label: "Pipelines",
    title: "Data Engineering",
    body: "Pipelines, cloud warehouses and real-time analytics. The part nobody demos, and the part that decides whether the model works.",
  },
  {
    label: "Engineering",
    title: "Custom Software",
    body: "Customer-facing platforms and internal tools, built to fit the way you actually work rather than the way a product roadmap assumed you would.",
  },
];

const VALUES = [
  {
    Icon: Hammer,
    title: "Engineering rigour",
    body: "We care deeply about code quality, system design and building things that last. No quick hacks, no technical debt buried for later.",
  },
  {
    Icon: Handshake,
    title: "Honest partnership",
    body: "We tell you what we think, not what you want to hear. Sometimes that means telling you the brief is wrong, or that you don't need us.",
  },
  {
    Icon: Cpu,
    title: "Practical AI",
    body: "AI that earns its keep in production, not just in demos. Every solution gets weighed for feasibility, cost and who maintains it in two years.",
  },
  {
    Icon: Heart,
    title: "Built in Wales",
    body: "We hire here, we build here, and we would rather Wales kept its engineers instead of exporting them.",
  },
];

const STATS: { big: string; label: string; n?: number; from?: number }[] = [
  { big: "32", label: "Years of combined director experience", n: 32 },
  { big: "3", label: "Directors on every engagement", n: 3 },
  { big: "2024", label: "Founded in Cardiff, Wales", n: 2024, from: 1985 },
  { big: "USW", label: "Part of USW Startup Stiwdio" },
];

export default function About() {
  return (
    <>
      <PageHero
        label="Who we are"
        title={
          <>
            Rooted in Wales,
            <br className="hidden sm:block" /> built for the world.
          </>
        }
        subtitle="A software engineering consultancy building AI and data systems that hold up once real users, real data and real deadlines arrive."
        crumb="About"
        image={IMG.hero}
        imageAlt="The three Cymrai directors presenting at the University of South Wales"
      />

      {/* ═══ OUR STORY — cream panel / photo split ═══ */}
      <section className="bg-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div data-reveal="left" className="bg-cream flex items-center">
            <div className="px-8 sm:px-14 lg:px-20 py-16 lg:py-24 w-full max-w-2xl lg:ml-auto">
              <span className="eyebrow block mb-6">Our story</span>
              <h2 className="font-display font-light text-brand-600 text-3xl sm:text-4xl leading-[1.15] mb-8">
                Ambitious, precise software engineering, from Wales.
              </h2>
              <div className="space-y-5 text-slate-500 text-[1.0625rem] font-normal leading-relaxed">
                <p>
                  We started Cymrai because good engineering does not have to come out of the same
                  handful of cities, and because too much of the AI work we had watched from the
                  inside never made it past the demo.
                </p>
                <p>
                  We work inside your team rather than reporting at it from the outside. You get the
                  directors on the problem, not a polished pitch followed by a handover to whoever
                  is free that month.
                </p>
                <p>
                  The name <span className="font-normal text-navy">Cymrai</span> blends{" "}
                  <span className="font-normal text-navy">Cymru</span> (Wales) with{" "}
                  <span className="font-normal text-navy">AI</span>, which is roughly the whole
                  strategy in one word.
                </p>
              </div>
              <p className="font-display italic text-navy text-xl mt-10 pt-8 border-t border-navy/[0.08]">
                &ldquo;Intelligence from Wales, Innovation for the World.&rdquo;
              </p>
            </div>
          </div>

          <div data-reveal="right" className="relative min-h-[26rem] lg:min-h-[34rem] overflow-hidden">
            <img
              src={IMG.team}
              alt="A Cymrai working session with the studio leads in Newport"
              data-parallax="24"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ═══ STATS — quiet serif numbers ═══ */}
      <section className="bg-paper border-b border-navy/[0.06]">
        <div className="max-w-[85rem] mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-24">
          <div data-reveal-stagger className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {STATS.map((s, i) => (
              <div key={s.big} className={`text-center lg:text-left ${i > 0 ? "lg:border-l border-navy/10 lg:pl-12" : ""}`}>
                <div className="font-display font-light text-navy text-5xl sm:text-6xl mb-3">
                  {s.n !== undefined ? (
                    <span data-countup={s.n} data-countup-start={s.from ?? 0}>
                      {s.big}
                    </span>
                  ) : (
                    s.big
                  )}
                </div>
                <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-slate-500 leading-relaxed max-w-[13rem] mx-auto lg:mx-0">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MISSION — photo / navy panel split ═══ */}
      <section className="bg-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div data-reveal="left" className="relative min-h-[26rem] lg:min-h-[36rem] overflow-hidden">
            <img
              src={IMG.craft}
              alt="The Cymrai team in the studio during Rhun ap Iorwerth's visit to Newport"
              data-parallax="24"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div data-reveal="right" className="bg-navy text-white flex items-center">
            <div className="px-8 sm:px-14 lg:px-20 py-16 lg:py-24 w-full max-w-2xl">
              <span className="eyebrow eyebrow--light block mb-6">Our mission</span>
              <h2 className="font-display font-light text-3xl sm:text-4xl leading-[1.15] mb-8">
                Making AI and data work <span className="font-semibold">in production</span>, not
                just in demos.
              </h2>
              <div className="space-y-5 text-white/60 text-[1.0625rem] font-normal leading-relaxed mb-10">
                <p>
                  There is a wide gap between what AI is supposed to do and what most organisations
                  manage to get running. Some know AI could change how they operate but have no idea
                  where to start. Others have already been through a project that over-promised,
                  over-ran and quietly got switched off.
                </p>
                <p>
                  We build the systems that stay on: maintainable, explainable and trusted by the
                  people who have to use them on a Tuesday morning.
                </p>
              </div>
              <blockquote className="border-l border-brand-300 pl-6">
                <p className="font-display italic font-light text-white/90 text-xl leading-relaxed mb-4">
                  &ldquo;We don&apos;t build AI for the sake of it. We build it when it moves an
                  organisation forward, and we only take on work we believe in.&rdquo;
                </p>
                <footer className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-brand-200">
                  Cymrai Directors · Wales
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CORE SERVICES — editorial card row ═══ */}
      <section className="bg-paper border-y border-navy/[0.06]">
        <div className="max-w-[85rem] mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-32">
          <div className="flex flex-wrap items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <span data-reveal className="eyebrow block mb-6">
                What we do
              </span>
              <h2 data-split className="font-display font-light text-brand-600 text-4xl sm:text-5xl leading-[1.12]">
                Three disciplines,
                <br className="hidden sm:block" /> one senior team.
              </h2>
            </div>
            <Link data-reveal href="/services" className="btn-line btn-line--dark">
              See all services <ArrowRight size={13} />
            </Link>
          </div>

          {/* hairlines as real borders: a 1px grid gap lands on half device-pixels
              at fractional track widths and antialiases away */}
          <div data-reveal-stagger className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-navy/15">
            {CORE.map((c) => (
              <article key={c.title} className="bg-paper hover:bg-white transition-colors border-r border-b border-navy/15 p-9 flex flex-col">
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-brand-500 mb-5">{c.label}</p>
                <h3 className="font-display text-navy text-[1.7rem] leading-snug mb-4">{c.title}</h3>
                <p className="text-slate-500 text-[1.0625rem] font-normal leading-relaxed mb-8 flex-1">{c.body}</p>
                <Link href="/services" className="link-more text-navy hover:text-brand-600">
                  Learn more
                  <span className="link-more-arrow">
                    <span className="w-4 h-px bg-current" />
                    <ArrowRight size={11} />
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VALUES — thin-icon columns ═══ */}
      <section className="bg-white">
        <div className="max-w-[85rem] mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-32">
          <div className="max-w-2xl mb-16 lg:mb-20">
            <span data-reveal className="eyebrow block mb-6">
              Our values
            </span>
            <h2 data-split className="font-display font-light text-brand-600 text-4xl sm:text-5xl leading-[1.12]">
              How we work
            </h2>
          </div>

          <div data-reveal-stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
            {VALUES.map(({ Icon, title, body }) => (
              <div key={title}>
                <Icon size={40} strokeWidth={1} className="text-brand-500 mb-7" />
                <h3 className="text-navy text-[1.08rem] font-medium leading-snug mb-4 max-w-[15rem]">{title}</h3>
                <p className="text-slate-500 text-[1.0625rem] font-normal leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Want to work with us?"
        text="Tell us what you're building, or what has stalled. We'll give you an honest read on whether we can help."
      />
    </>
  );
}
