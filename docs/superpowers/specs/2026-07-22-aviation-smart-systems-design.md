# Aviation Smart Systems — featured service (design)

## What this is

A new featured service on the `/services` page: **Aviation Smart Systems**. It leads with
aviation buyers (MRO, records, inventory, compliance) and states plainly that the same
approach extends to other regulated, asset-heavy industries. It has two parts: an editorial
feature header and a 3-up row of case studies that act as the proof.

Audience: aviation operations teams (MRO shops, engine records and procurement, warehouse
ops). Secondary: other regulated, asset-heavy industries.

## Decisions (settled during brainstorming)

- **Placement:** everything lives on `/services`. The home page is not touched.
- **Priority:** Aviation Smart Systems is the *primary* feature. It sits above the existing
  "AI Auditing & Governance" block, which now reads as the second feature.
- **Name:** Aviation Smart Systems (confirmed over "Intelligent Aviation Operations").
- **Scope:** three systems. The compliance portal was dropped, so the grid is a 3-up row,
  not a 2×2.
- **Copy:** genericized and cleared to publish as written. No client name, no vendor/product
  names ("legacy MRO platform", "modern SQL database"). Outcomes stay qualitative, no metrics.
- **Writing style:** humanised. No em dashes, no filler. This matches the site's existing copy,
  which already avoids both.

## Page order after this change (`/services`)

1. PageHero (unchanged)
2. Differentiators (unchanged)
3. **Aviation Smart Systems** — feature header + 3-up case studies *(new, primary)*
4. AI Auditing & Governance *(existing, now the second feature)*
5. Core services (unchanged)
6. CtaBand (unchanged)

## Layout

**Feature header** — editorial block on a light background (`bg-paper` / white), styled like
the existing "Core services" header: an eyebrow badge, a `font-display` title, the intro
paragraph, then the three capability items. Each capability is a bold label plus a one-line
description (label + sentence, so no inline em dash). A CTA links to `/contact`.

**Case studies** — a 3-up responsive grid directly below the header, reusing the hairline-
bordered card pattern from the home page's Sectors section: a tag eyebrow, a `font-display`
title, and the qualitative outcome line. Collapses to one column on mobile, same as Sectors.

No navy full-bleed treatment: navy is reserved for the AI Auditing split and the CTA band, so
the two features stay visually distinct.

## Content

### Feature header

- Badge: `Featured · Aviation`
- Title: **Aviation Smart Systems**
- Intro: "End-to-end systems for aviation operations, from MRO workflows and warehouse
  forecasting to engine records. The same approach extends to other regulated, asset-heavy
  industries."
- CTA: "Start a conversation" → `/contact`

### Capability items (3)

| Label | Body |
|---|---|
| Workflow modernisation | Migrate off legacy MRO systems into fast, modern databases. |
| AI inventory forecasting | Predict procurement needs and flag surplus stock for liquidation. |
| OCR and AI records | Evaluate engines before sale and fast-track the records team. |

### Case studies (3)

| Tag | Title | Outcome |
|---|---|---|
| Workflow | Legacy MRO data migration | Moved workshop operations off a legacy MRO platform into a modern SQL database, giving engineers a faster system to work in. |
| AI · Inventory | Warehouse forecasting assistant | An LLM-assisted tool that forecasts procurement needs and flags surplus stock for liquidation. |
| AI · OCR | Engine records autopilot | OCR and AI that evaluate engines ahead of procurement and sale, fast-tracking the records team's workflow. |

## Implementation

- **One file: `app/services/page.tsx`.** The page already defines content as `const` arrays and
  inlines each section. Follow that exactly.
- Add two arrays: `AVIATION_CAPABILITIES` (label + body) and `AVIATION_CASES` (tag + title +
  outcome).
- Add one new `<section>` block above the AI Auditing section.
- Add the needed icons to the existing `lucide-react` import (e.g. `Plane`, `Boxes`, `ScanText`
  for the capabilities; reuse an arrow for the CTA).
- No new component files.
- Styling uses existing tokens and classes only: `eyebrow`, `font-display`, `brand-*`, `navy`,
  `bg-paper`, hairline borders (`border-navy/15`), and `data-reveal` / `data-reveal-stagger`
  animation hooks already used elsewhere on the page.

## Confidentiality rules applied

- No client or employer name anywhere.
- No third-party product or vendor names. Legacy system and database tooling are genericized.
- No fabricated metrics. Outcomes are qualitative.
- Compliance content removed from this feature entirely.

## Verification

- `npm run lint` passes.
- `npm run build` passes.
- Visual check of `/services`: Aviation reads as the top feature, the 3-up case-study grid
  renders and collapses correctly on mobile, AI Auditing is intact below it, no layout
  regressions on the surrounding sections.

## Out of scope

- Home page changes.
- Any change to the AI Auditing block beyond its position moving down.
- Metrics or a separate case-studies page.
