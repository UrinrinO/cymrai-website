# Cymrai website

Marketing site for Cymrai Software Solutions, built on **Next.js (App Router) + TypeScript + Tailwind CSS**. Replaces the previous Laravel site.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Do not run `npm run build` while `npm run dev` is running: the build overwrites `.next/` underneath the dev server and every route starts throwing a 500 until you restart it.

## Build

```bash
npm run build
npm start
```

## Stack

- **Next.js 15** (App Router), **React 19**
- **Tailwind CSS 3.4** — brand palette (`brand` = logo blue `#185898`, `wales` = Welsh red `#c8102e`, `navy`) in `tailwind.config.ts`
- **lucide-react** for icons, **Instrument Sans** via `next/font`
- **Resend** for contact-form delivery

## Structure

```
app/
  layout.tsx        Root layout: fonts, Navbar, Footer, ScrollScripts
  template.tsx      Per-route entrance animation (see note below)
  page.tsx          Homepage
  about|services|blog|contact/
  blog/<slug>/      One directory per article
  api/contact/      Contact form handler (Resend)
  globals.css       Tailwind + motifs (scroll reveal, ken burns, hairlines)
components/
  HeroSlider.tsx        Homepage hero, background carousel with fixed copy
  VideoPresentation.tsx Split video band, lightbox portalled to <body>
  Navbar.tsx            Sticky header + mobile menu
  CtaBand.tsx           Closing CTA, used on About/Services/articles
public/images/          Logos, photography, section backgrounds
```

## Environment

Copy `.env.example` to `.env.local`. The contact form needs `RESEND_API_KEY`; without it the form returns a "not configured" error rather than failing silently. `CONTACT_TO` overrides the recipient, which defaults to `info@cymrai.co.uk`.

## Notes

- **`.page-enter` fill-mode is deliberate.** `app/template.tsx` wraps every page in an element that animates a transform. Its `animation-fill-mode` must stay `backwards`; with `both`, the finished animation leaves an identity matrix behind, which makes the element a containing block for every `position: fixed` descendant and silently breaks any modal or overlay inside a page.
- **Grid hairlines are borders, not gaps.** The card grids use `border-r`/`border-b` on the cards rather than a 1px grid gap. At fractional track widths a 1px gap lands on half device-pixels and antialiases away, so dividers went missing at certain viewport widths.
- **Images are plain `<img>`, not `next/image`.** Several photos in `public/images` are 2–3MB and ship unoptimised. Worth moving to `next/image` before this gets much traffic.
- Blog, Services and Contact heroes still use **Unsplash** photos (`images.unsplash.com` is allow-listed in `next.config.mjs`). Replace with owned imagery when it exists.
- The presentation video is embedded from **YouTube**; `public/videos/` is gitignored.

## Deploying

Deploy target is **Vercel**. When pointing the domain at Vercel, change only the web records (apex `A`, `www` `CNAME`). Leave every Microsoft 365 email record (MX, SPF, DKIM, DMARC, autodiscover) untouched, and do **not** delegate nameservers to Vercel — that would take the mail records with it.
