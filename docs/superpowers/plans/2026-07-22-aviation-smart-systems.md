# Aviation Smart Systems Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an "Aviation Smart Systems" featured service to the `/services` page as the primary feature, above the existing AI Auditing block, with a 3-up case-study grid.

**Architecture:** Single-file change to `app/services/page.tsx`. The page defines its content as top-level `const` arrays and inlines each section as JSX; this change follows that exact pattern. Add two data arrays and one `<section>` block, and extend the existing `lucide-react` import. No new components, no new dependencies.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript, Tailwind 3, lucide-react.

## Global Constraints

- Touch only `app/services/page.tsx`. No home-page changes, no new files, no new dependencies.
- Copy is fixed and confidentiality-cleared. Use it verbatim from this plan. No client names, no vendor/product names, no metrics.
- Humanised writing: no em dashes anywhere in copy, no filler.
- Styling uses existing tokens/classes only: `eyebrow`, `font-display`, `brand-*`, `navy`, `bg-paper`, `border-navy/15`, and `data-reveal` / `data-reveal-stagger` / `data-split` hooks already used on the page.
- No unit-test framework exists in this repo. Verification is `npm run lint`, `npm run build`, and a visual check. Do not add a test framework.
- Aviation is the primary feature: its section goes ABOVE the existing `{/* ═══ FEATURED — AI AUDITING ... */}` section.

---

### Task 1: Add the Aviation Smart Systems section to /services

**Files:**
- Modify: `app/services/page.tsx` (import block lines 3-13; insert new section between the Differentiators `</section>` at line 120 and the AI Auditing section comment at line 122; add two `const` arrays alongside the existing `SERVICES`/`AUDIT_DOMAINS` arrays, before the `export default function Services()`)

**Interfaces:**
- Consumes: existing `Link` (from `next/link`) and `ArrowRight`, `Workflow` (already imported from `lucide-react`); existing CSS classes listed in Global Constraints.
- Produces: nothing consumed by other tasks (single-task plan).

- [ ] **Step 1: Extend the lucide-react import**

In the import block at the top of `app/services/page.tsx`, add `Boxes` and `ScanText` to the named imports (keep the others, `Workflow` is already present):

```tsx
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
```

- [ ] **Step 2: Add the two data arrays**

Add these two arrays next to the existing `SERVICES` array (anywhere among the top-level `const` declarations, before `export default function Services()`):

```tsx
const AVIATION_CAPABILITIES = [
  {
    Icon: Workflow,
    label: "Workflow modernisation",
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
```

- [ ] **Step 3: Insert the section JSX**

Insert this block immediately AFTER the Differentiators section's closing `</section>` (currently line 120) and BEFORE the `{/* ═══ FEATURED — AI AUDITING ... ═══ */}` comment (currently line 122):

```tsx
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
```

- [ ] **Step 4: Lint**

Run: `npm run lint`
Expected: PASS, no new errors or warnings referencing `app/services/page.tsx` (including no "unused variable" for `Boxes`/`ScanText`, which confirms they're wired into the arrays).

- [ ] **Step 5: Build**

Run: `npm run build`
Expected: PASS. `/services` compiles as a static route with no type errors.

- [ ] **Step 6: Visual check**

Run: `npm run dev`, open `http://localhost:3000/services`.
Confirm:
- "Aviation Smart Systems" appears as the first feature, directly after the three differentiator columns and above "AI Auditing & Governance".
- Badge reads `Featured · Aviation`; three capability columns render with icons; three case-study cards render in a row on desktop.
- On a narrow viewport the case-study grid collapses to one column and hairline borders stay clean (no doubled/misaligned lines).
- The AI Auditing block and Core Services below are unchanged.

- [ ] **Step 7: Commit**

```bash
git add app/services/page.tsx
git commit -m "Add Aviation Smart Systems featured service to /services"
```

---

## Self-Review

**Spec coverage:**
- Placement on `/services`, aviation primary, above AI Auditing → Task 1, Global Constraints + Step 3 insertion point. ✓
- Feature header (badge, title, intro, CTA) → Step 3. ✓
- Three capability items with exact copy → Step 2 (`AVIATION_CAPABILITIES`). ✓
- Three case studies, 3-up grid, exact copy → Step 2 (`AVIATION_CASES`) + Step 3 grid. ✓
- Existing tokens only, single file, no new components → Global Constraints, Steps 1-3. ✓
- Verification lint/build/visual → Steps 4-6. ✓
- Compliance removed and absent from intro copy → intro string in Step 3 omits "compliance". ✓

**Placeholder scan:** No TBD/TODO; all copy and JSX shown in full. ✓

**Type consistency:** Arrays use `Icon`/`label`/`body` (capabilities) and `tag`/`title`/`outcome` (cases); Step 3 JSX destructures and reads exactly those keys. `Boxes` and `ScanText` added to import in Step 1 are the icons referenced in Step 2. ✓
