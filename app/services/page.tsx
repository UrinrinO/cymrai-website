import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  UserCheck,
  Target,
  Building2,
  Sparkles,
  Database,
  Compass,
  Workflow,
  GraduationCap,
  Boxes,
  ScanText,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Services · Cymrai Software Solutions",
  description:
    "From independent AI audits to end-to-end custom builds. Senior-led, production-grade delivery for mid-market businesses.",
};

const HERO_IMG =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000";

const DIFF = [
  {
    Icon: UserCheck,
    title: "Director-led delivery",
    body: "Every engagement is run by a Cymrai director. No junior teams, no hand-offs after sign-off.",
  },
  {
    Icon: Target,
    title: "Production-grade, always",
    body: "We do not build demos. We build systems your teams can rely on in the real world.",
  },
  {
    Icon: Building2,
    title: "Research-backed approach",
    body: "Academic collaboration through USW's Startup Stiwdio means current methods, not last year's frameworks.",
  },
];

const AUDIT_DOMAINS = [
  ["AI Risk Assessment", "Model bias, accuracy degradation and adversarial vulnerability, identified and quantified."],
  ["Governance Review", "Accountability structures, ownership, policy and oversight of AI systems."],
  ["Control Assessment", "Access controls, versioning, change management and monitoring in production."],
  ["Regulatory Alignment", "UK GDPR, EU AI Act, FCA, NHS and sector-specific compliance requirements."],
  ["Audit Report & Roadmap", "Plain-language findings for leadership and a prioritised technical remediation plan."],
];

const SERVICES = [
  {
    Icon: Sparkles,
    title: "Custom AI Solutions",
    tagline: "Built to your exact requirements",
    body: "We design, build and deploy AI systems that solve specific problems your business faces, not generic tools retrofitted to your workflow. Every solution is built by our directors, delivered to production standard and maintained for the long term.",
    bullets: ["Custom LLM integration", "ML model development & deployment", "Intelligent document processing", "AI-powered workflow automation", "End-to-end delivery, design to production"],
  },
  {
    Icon: Database,
    title: "Data Engineering",
    tagline: "Pipelines, warehouses & analytics",
    body: "AI is only as good as the data behind it. We build the data infrastructure that powers great decisions: ingestion pipelines, cloud warehouses and real-time dashboards. Clean, reliable and available when it is needed.",
    bullets: ["Data pipeline design & build", "Cloud data warehouses (BigQuery, Snowflake)", "Real-time streaming (Kafka, Flink)", "BI dashboards & reporting", "Data quality, governance & observability"],
  },
  {
    Icon: Compass,
    title: "AI Strategy & Consulting",
    tagline: "Clarity before commitment",
    body: "Most organisations know AI should be part of their future. Fewer know where to start or how to evaluate what is worth building. We work with leadership and technical teams to define a realistic AI strategy grounded in your actual data capabilities, budget and business objectives.",
    bullets: ["AI readiness assessment", "Use-case identification & prioritisation", "Technology selection & build-vs-buy analysis", "Staged transformation roadmap", "Executive workshops & board briefings"],
  },
  {
    Icon: Workflow,
    title: "AI Integration",
    tagline: "Models, APIs and existing systems, connected",
    body: "Adding AI to an existing business means connecting models to data, APIs to workflows and outputs to the people who need them. We handle the integration layer (authentication, orchestration, error handling, monitoring) so the AI becomes a reliable part of your operation rather than an isolated experiment.",
    bullets: ["Third-party AI integration (OpenAI, Anthropic, AWS, Azure)", "API orchestration & middleware", "AI model serving & auto-scaling", "Production monitoring & alerting", "Legacy system modernisation"],
  },
  {
    Icon: GraduationCap,
    title: "Training & Workshops",
    tagline: "Hands-on upskilling for teams & leaders",
    body: "The gap between knowing AI exists and knowing how to work with it effectively is wider than most organisations realise. We run practical, hands-on sessions tailored to your team's level, from executive introductions through to deep technical training for engineers.",
    bullets: ["AI & LLM fundamentals for business teams", "Prompt engineering & RAG", "Data engineering practices for ML", "MLOps & model lifecycle management", "Embedded team mentoring"],
  },
];

const AVIATION_CAPABILITIES = [
  {
    Icon: Workflow,
    label: "Workflow modernization",
    body: "Migrate off legacy MRO systems into fast, modern databases.",
  },
  {
    Icon: Boxes,
    label: "AI inventory forecasting",
    body: "Predict procurement needs and flag surplus stock for liquidation.",
  },
  {
    Icon: ScanText,
    label: "OCR and AI records",
    body: "Evaluate engines before sale and fast-track the records team.",
  },
];

const AVIATION_CASES = [
  {
    tag: "Workflow",
    title: "Legacy MRO data migration",
    outcome:
      "Moved workshop operations off a legacy MRO platform into a modern SQL database, giving engineers a faster system to work in.",
  },
  {
    tag: "AI · Inventory",
    title: "Warehouse forecasting assistant",
    outcome:
      "An LLM-assisted tool that forecasts procurement needs and flags surplus stock for liquidation.",
  },
  {
    tag: "AI · OCR",
    title: "Engine records autopilot",
    outcome:
      "OCR and AI that evaluate engines ahead of procurement and sale, fast-tracking the records team's workflow.",
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        label="What we do"
        title={
          <>
            Senior-led delivery,
            <br className="hidden sm:block" /> audit to production.
          </>
        }
        subtitle="From independent AI audits to end-to-end custom builds. Production-grade delivery for mid-market businesses."
        crumb="Services"
        image={HERO_IMG}
        imageAlt="A calm, well-lit engineering workspace"
      />

      {/* ═══ DIFFERENTIATORS — thin-icon columns ═══ */}
      <section className="bg-white">
        <div className="max-w-[85rem] mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-28">
          <div data-reveal-stagger className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-10">
            {DIFF.map(({ Icon, title, body }) => (
              <div key={title}>
                <Icon size={40} strokeWidth={1} className="text-brand-500 mb-7" />
                <h3 className="text-navy text-[1.08rem] font-medium leading-snug mb-4">{title}</h3>
                <p className="text-slate-500 text-[1.0625rem] font-normal leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURED — AVIATION SMART SYSTEMS (primary) ═══ */}
      <section className="bg-paper border-y border-navy/[0.06]">
        <div className="max-w-[85rem] mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-32">
          <div className="max-w-3xl mb-16 lg:mb-20">
            <span data-reveal className="eyebrow block mb-6">
              Featured · Aviation
            </span>
            <h2 data-split className="font-display font-light text-brand-600 text-4xl sm:text-5xl leading-[1.12] mb-7">
              Aviation Smart Systems
            </h2>
            <p data-reveal data-reveal-delay="160" className="text-slate-500 text-[1.0625rem] font-normal leading-relaxed">
              End-to-end systems for aviation operations, from MRO workflows and
              warehouse forecasting to engine records. The same approach extends to
              other regulated, asset-heavy industries.
            </p>
          </div>

          {/* capability columns */}
          <div data-reveal-stagger className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-10 mb-20 lg:mb-24">
            {AVIATION_CAPABILITIES.map(({ Icon, label, body }) => (
              <div key={label}>
                <Icon size={40} strokeWidth={1} className="text-brand-500 mb-7" />
                <h3 className="text-navy text-[1.08rem] font-medium leading-snug mb-4">{label}</h3>
                <p className="text-slate-500 text-[1.0625rem] font-normal leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          {/* case-study grid — hairlines drawn as real borders, same as the home Sectors grid */}
          <span data-reveal className="eyebrow block mb-8">
            Selected work
          </span>
          <div data-reveal-stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-navy/15">
            {AVIATION_CASES.map((c) => (
              <article key={c.title} className="bg-paper hover:bg-white transition-colors border-r border-b border-navy/15 p-9 flex flex-col">
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-brand-500 mb-5">{c.tag}</p>
                <h3 className="font-display text-navy text-[1.7rem] leading-snug mb-4">{c.title}</h3>
                <p className="text-slate-500 text-[1.0625rem] font-normal leading-relaxed flex-1">{c.outcome}</p>
              </article>
            ))}
          </div>

          <div className="mt-14">
            <Link href="/contact" className="link-more text-navy hover:text-brand-600">
              Start a conversation
              <span className="link-more-arrow">
                <span className="w-4 h-px bg-current" />
                <ArrowRight size={11} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FEATURED — AI AUDITING, navy / cream split ═══ */}
      <section className="bg-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div data-reveal="left" className="bg-navy text-white flex items-center">
            <div className="px-8 sm:px-14 lg:px-20 py-16 lg:py-24 w-full max-w-2xl lg:ml-auto">
              <span className="eyebrow eyebrow--light block mb-6">Featured service</span>
              <h2 className="font-display font-light text-3xl sm:text-4xl leading-[1.15] mb-6">
                AI Auditing &amp; Governance
              </h2>
              <p className="text-brand-200 font-normal text-lg mb-7">
                Independent assessment of your AI systems, data practices and governance frameworks.
              </p>
              <div className="space-y-5 text-white/60 text-[1.0625rem] font-normal leading-relaxed mb-10">
                <p>
                  If your organisation uses AI, whether you built it or bought it, you need to know
                  it is working correctly, behaving fairly and meeting your regulatory obligations.
                  We run an independent, structured assessment aligned with ISACA&apos;s standards
                  (CISA, CRISC, CGEIT and the AAIA&trade; framework).
                </p>
                <p>
                  We produce a plain-language report for leadership and a technical annex for
                  engineering teams, with findings rated by severity and a clear, prioritised
                  remediation roadmap.
                </p>
              </div>
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-white/40 mb-10">
                Aligned with ISACA · CISA · CRISC · CGEIT · AAIA&trade;
              </p>
              <Link href="/contact" className="btn-line btn-line--light">
                Start a conversation <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          <div data-reveal="right" className="bg-cream flex items-center">
            <div className="px-8 sm:px-14 lg:px-20 py-16 lg:py-24 w-full max-w-2xl">
              <span className="eyebrow block mb-10">Five audit domains</span>
              <ol>
                {AUDIT_DOMAINS.map(([domain, desc], i) => (
                  <li key={domain} className="flex items-start gap-6 py-6 border-b border-navy/[0.08] last:border-0 first:pt-0">
                    <span className="font-display text-brand-400 text-2xl leading-none mt-0.5">
                      0{i + 1}
                    </span>
                    <div>
                      <h4 className="text-navy font-medium mb-1.5">{domain}</h4>
                      <p className="text-slate-500 text-base font-normal leading-relaxed">{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CORE SERVICES — numbered editorial rows ═══ */}
      <section className="bg-paper border-y border-navy/[0.06]">
        <div className="max-w-[85rem] mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-32">
          <div className="max-w-2xl mb-16 lg:mb-20">
            <span data-reveal className="eyebrow block mb-6">
              Core services
            </span>
            <h2 data-split className="font-display font-light text-brand-600 text-4xl sm:text-5xl leading-[1.12]">
              What we deliver,
              <br className="hidden sm:block" /> <span className="font-semibold">end to end.</span>
            </h2>
          </div>

          <div className="border-t border-navy/10">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                data-reveal
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-14 lg:py-16 border-b border-navy/10"
              >
                <div className="lg:col-span-3 flex lg:block items-baseline gap-6">
                  <span className="font-display font-light text-brand-300 text-5xl lg:text-6xl leading-none block lg:mb-6">
                    0{i + 1}
                  </span>
                  <s.Icon size={36} strokeWidth={1} className="hidden lg:block text-brand-500" />
                </div>

                <div className="lg:col-span-5">
                  <p className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-brand-500 mb-4">{s.tagline}</p>
                  <h3 className="font-display text-navy text-3xl sm:text-[2.1rem] leading-snug mb-5">{s.title}</h3>
                  <p className="text-slate-500 text-[1.0625rem] font-normal leading-relaxed">{s.body}</p>
                </div>

                <div className="lg:col-span-4 lg:pt-1">
                  <ul>
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="text-slate-500 text-base font-normal py-3 border-b border-navy/[0.07] last:border-0 first:pt-0"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="link-more text-navy hover:text-brand-600 mt-7">
                    Discuss this service
                    <span className="link-more-arrow">
                      <span className="w-4 h-px bg-current" />
                      <ArrowRight size={11} />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Not sure where to start?"
        text="Tell us what you're working on, or what's not working. Our directors will help you scope the right engagement, and tell you if you don't need us."
      />
    </>
  );
}
