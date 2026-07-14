import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Database,
  Code2,
  ShieldCheck,
} from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import VideoPresentation from "@/components/VideoPresentation";

/* eslint-disable @next/next/no-img-element */

const IMG = {
  portrait: "/images/Plaid_Rhun_Newport.jpg",
  executive: "/images/pitch&co.jpeg",
  ai: "/images/ai.jpg",
  data: "/images/data.jpg",
  software: "/images/software.jpg",
  meeting: "/images/newport_with_studio_leads.jpg",
};

const PILLARS = [
  {
    Icon: BrainCircuit,
    title: "AI models are our speciality",
    desc: "Model design, training and evaluation, built for production from day one rather than left in a notebook.",
  },
  {
    Icon: Database,
    title: "Data engineering done properly",
    desc: "Pipelines, warehouses and analytics that stay clean, fast and dependable as your business scales.",
  },
  {
    Icon: Code2,
    title: "Software that carries the AI",
    desc: "Director-led, maintainable systems around your models: APIs, interfaces and integrations.",
  },
  {
    Icon: ShieldCheck,
    title: "Governance without the friction",
    desc: "Audits, monitoring and assurance that keep your AI honest, compliant and explainable.",
  },
];

const SERVICES = [
  { img: IMG.ai, label: "Models", title: "AI Solutions" },
  { img: IMG.data, label: "Pipelines", title: "Data Engineering" },
  { img: IMG.software, label: "Engineering", title: "Custom Software" },
];

const SECTORS = [
  {
    name: "Healthcare",
    label: "Predictive analytics",
    desc: "Patient analytics, resource forecasting and clinical data pipelines for multi-site NHS environments.",
  },
  {
    name: "Retail & E-Commerce",
    label: "Demand forecasting",
    desc: "Demand forecasting, inventory optimisation and customer behaviour analytics for retail operations.",
  },
  {
    name: "Public Sector",
    label: "Document intelligence",
    desc: "Document intelligence, cross-dataset analytics and data governance for government bodies.",
  },
  {
    name: "Financial Services",
    label: "Real-time risk",
    desc: "Credit-risk APIs, real-time anomaly detection and low-latency model serving for FinTech and lending.",
  },
];

const ENGAGEMENTS = [
  {
    n: "01",
    name: "AI Audit",
    points: ["Current-state assessment", "Data readiness review", "Governance & risk report", "Prioritised roadmap"],
  },
  {
    n: "02",
    name: "Pilot Build",
    points: ["Scoped production pilot", "Director-led delivery", "Live in weeks, not years", "An honest go / no-go at the end"],
  },
  {
    n: "03",
    name: "Partnership",
    points: ["Ongoing senior team", "Models, data & software", "Training for your people", "Long-term accountability"],
  },
];

const STATS: { big: string; label: string; n?: number; from?: number }[] = [
  { big: "32", label: "Years of combined director experience", n: 32 },
  { big: "3", label: "Directors on every engagement", n: 3 },
  { big: "2024", label: "Founded in Cardiff, Wales", n: 2024, from: 1985 },
  { big: "USW", label: "Part of USW Startup Stiwdio" },
];

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* ═══ PILLARS — eyebrow, serif heading, 4 thin-icon columns ═══ */}
      <section className="bg-white">
        <div className="max-w-[85rem] mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-32">
          <div className="max-w-2xl mb-16 lg:mb-20">
            <span data-reveal className="eyebrow block mb-6">
              What we do
            </span>
            <h2 data-split className="font-display font-light text-brand-600 text-4xl sm:text-5xl leading-[1.12]">
              We build AI that survives
              <br className="hidden sm:block" />{" "}
              <span className="font-semibold">contact with production.</span>
            </h2>
          </div>

          <div data-reveal-stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
            {PILLARS.map(({ Icon, title, desc }) => (
              <div key={title}>
                <Icon size={40} strokeWidth={1} className="text-brand-500 mb-7" />
                <h3 className="text-navy text-[1.08rem] font-medium leading-snug mb-4 max-w-[15rem]">{title}</h3>
                <p className="text-slate-500 text-[1.0625rem] font-normal leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SPLIT GRID — photo / cream panel, navy chart / photo ═══ */}
      <section className="bg-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Row 1 — portrait photo */}
          <div data-reveal="left" className="relative min-h-[26rem] lg:min-h-[34rem] overflow-hidden">
            <img src={IMG.portrait} alt="The Cymrai team in the studio with Rhun ap Iorwerth during a visit to Newport" data-parallax="24" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Row 1 — cream panel with discipline bars */}
          <div data-reveal="right" className="bg-cream flex items-center">
            <div className="px-8 sm:px-14 lg:px-20 py-16 lg:py-20 w-full max-w-2xl">
              <h2 className="font-display font-light text-brand-600 text-3xl sm:text-4xl leading-[1.15] mb-12">
                Where our work sits.
              </h2>
              {[
                ["AI & Machine Learning", "92%"],
                ["Data Engineering", "78%"],
                ["Custom Software", "64%"],
              ].map(([label, w]) => (
                <div key={label} className="mb-8 last:mb-0 text-navy">
                  <p className="text-[0.74rem] font-medium uppercase tracking-[0.26em] text-navy/70 mb-3">{label}</p>
                  <div className="stat-bar">
                    <span style={{ "--w": w } as React.CSSProperties} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 — navy chart panel */}
          <div data-reveal="left" className="bg-navy text-white flex items-center order-4 lg:order-none">
            <div className="px-8 sm:px-14 lg:px-20 py-16 lg:py-20 w-full max-w-2xl">
              <h2 className="font-display font-light text-3xl sm:text-4xl leading-[1.15] mb-12">
                We stay <span className="font-semibold">past launch.</span>
              </h2>
              <svg viewBox="0 0 420 150" fill="none" className="w-full" aria-hidden="true">
                {[0, 30, 60, 90, 120, 150].map((y) => (
                  <line key={y} x1="0" y1={y} x2="420" y2={y} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                ))}
                <polyline
                  points="0,118 60,96 120,110 180,58 240,84 300,38 360,52 420,16"
                  stroke="#8bb2d8"
                  strokeWidth="1.5"
                  fill="none"
                />
                {[
                  [60, 96],
                  [180, 58],
                  [300, 38],
                  [420, 16],
                ].map(([x, y]) => (
                  <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill="#131c31" stroke="#8bb2d8" strokeWidth="1.5" />
                ))}
              </svg>
              <p className="text-white/55 text-sm font-light tracking-wide mt-6">
                From the first workshop to the production deploy, the same three directors, end to end.
              </p>
            </div>
          </div>

          {/* Row 2 — executive photo */}
          <div data-reveal="right" className="relative min-h-[26rem] lg:min-h-[34rem] overflow-hidden order-3 lg:order-none">
            <img src={IMG.executive} alt="The Cymrai directors with the USW Startup Stiwdio leads after a pitch" data-parallax="24" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ═══ QUOTE — serif pull-quote with blue marks ═══ */}
      <section className="bg-white">
        <div data-reveal className="max-w-3xl mx-auto px-6 sm:px-10 text-center py-24 lg:py-32">
          <span aria-hidden="true" className="font-display text-brand-400 text-7xl leading-none block mb-6">
            &ldquo;
          </span>
          <blockquote className="font-display font-light text-navy text-3xl sm:text-4xl leading-[1.3] mb-10">
            Most AI projects fail between prototype and{" "}
            <span className="text-brand-500">production</span>. We exist to close that gap.
          </blockquote>
          <cite className="eyebrow not-italic">Why we started Cymrai</cite>
        </div>
      </section>

      {/* ═══ SERVICES — three photo cards, floating white labels ═══ */}
      <section className="bg-white pb-24 lg:pb-32">
        <div data-reveal-stagger className="max-w-[95rem] mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <Link key={s.title} href="/services" className="group relative block overflow-hidden">
              <div className="relative h-[24rem] lg:h-[27rem] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-500" />
              </div>
              {/* floating white label card */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[78%] py-7 text-center shadow-[0_18px_45px_-20px_rgba(19,28,49,0.4)]">
                <p className="text-navy text-xl font-normal mb-1.5">{s.title}</p>
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-brand-500">{s.label}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══ SECTORS — editorial card row ═══ */}
      <section className="bg-paper border-y border-navy/[0.06]">
        <div className="max-w-[85rem] mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-32">
          <div className="max-w-2xl mb-16">
            <span data-reveal className="eyebrow block mb-6">
              Sector experience
            </span>
            <h2 data-split className="font-display font-light text-brand-600 text-4xl sm:text-5xl leading-[1.12] mb-6">
              Where we have
              <br className="hidden sm:block" /> <span className="font-semibold">done this before.</span>
            </h2>
            <p data-reveal data-reveal-delay="160" className="text-slate-500 text-[1.0625rem] font-normal leading-relaxed max-w-md">
              Much of our work is under NDA, so we describe it by industry rather than by client name.
            </p>
          </div>

          {/* hairlines are drawn as real borders: a 1px grid gap lands on half
              device-pixels at fractional track widths and antialiases away */}
          <div data-reveal-stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-navy/15">
            {SECTORS.map((s) => (
              <article key={s.name} className="bg-paper hover:bg-white transition-colors border-r border-b border-navy/15 p-9 flex flex-col">
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-brand-500 mb-5">{s.label}</p>
                <h3 className="font-display text-navy text-[1.7rem] leading-snug mb-4">{s.name}</h3>
                <p className="text-slate-500 text-[1.0625rem] font-normal leading-relaxed mb-8 flex-1">{s.desc}</p>
                <Link href="/services" className="link-more text-navy hover:text-brand-600">
                  Read more
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

      {/* ═══ ENGAGEMENTS — Halstein pricing-style cards ═══ */}
      <section className="bg-white">
        <div className="max-w-[85rem] mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-32">
          <div className="max-w-2xl mb-16">
            <span data-reveal className="eyebrow block mb-6">
              Ways to work with us
            </span>
            <h2 data-split className="font-display font-light text-brand-600 text-4xl sm:text-5xl leading-[1.12]">
              Three ways to start,
              <br className="hidden sm:block" /> depending on how far along you are.
            </h2>
          </div>

          <div data-reveal-stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ENGAGEMENTS.map((t) => (
              <div key={t.name} className="bg-cream border-l border-brand-300 px-10 py-12">
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-brand-500 mb-4">{t.n}</p>
                <p className="font-display text-navy text-4xl mb-9">{t.name}</p>
                <ul className="space-y-4 mb-11">
                  {t.points.map((p) => (
                    <li key={p} className="text-slate-500 text-[1.0625rem] font-normal border-b border-navy/[0.07] pb-4 last:border-0">
                      {p}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="link-more text-navy hover:text-brand-600">
                  Start here
                  <span className="link-more-arrow">
                    <span className="w-4 h-px bg-current" />
                    <ArrowRight size={11} />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VIDEO PRESENTATION — Halstein-style full-bleed band ═══ */}
      <VideoPresentation />

      {/* ═══ SPLIT CTA — photo / navy conference panel ═══ */}
      <section className="bg-white overflow-hidden">
        <div className="max-w-[95rem] mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div data-reveal="left" className="relative min-h-[24rem] lg:min-h-[30rem] overflow-hidden">
              <img src={IMG.meeting} alt="A Cymrai working session with the studio leads in Newport" data-parallax="20" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div data-reveal="right" className="bg-navy text-white flex flex-col justify-between px-8 sm:px-14 lg:px-16 py-14 lg:py-16">
              <div>
                <h2 className="font-display font-light text-3xl sm:text-4xl leading-[1.15] mb-6 max-w-md">
                  What will AI look like for your business next year?
                </h2>
                <p className="text-white/60 text-[1.0625rem] font-normal leading-relaxed max-w-sm">
                  Whether you have a project in mind or are still working out what AI could do for
                  you, the first conversation costs nothing.
                </p>
              </div>
              <Link
                href="/contact"
                className="group mt-14 pt-8 border-t border-white/15 flex items-center justify-between gap-6 text-white hover:text-brand-200 transition-colors"
              >
                <span className="font-display text-2xl font-light leading-snug">
                  Book a free consultation
                  <br />
                  with a director
                </span>
                <span className="flex items-center gap-2 shrink-0">
                  <span className="w-8 h-px bg-current" />
                  <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS — quiet serif numbers ═══ */}
      <section className="bg-paper border-y border-navy/[0.06]">
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
    </>
  );
}
