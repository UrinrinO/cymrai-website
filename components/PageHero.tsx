import Link from "next/link";

/* eslint-disable @next/next/no-img-element */

/**
 * Shared hero for inner pages, in the homepage's editorial language:
 * full-bleed photo under a navy wash, oversized ghost word, serif headline
 * revealed word-by-word, and a hairline breadcrumb pinned to the bottom edge.
 */
export default function PageHero({
  label,
  title,
  subtitle,
  crumb,
  image,
  imageAlt = "",
  crumbs = [],
}: {
  label: string;
  title: React.ReactNode;
  subtitle: string;
  /** Current page name, shown at the end of the breadcrumb. */
  crumb: string;
  image: string;
  imageAlt?: string;
  /** Intermediate breadcrumb levels between Home and the current page. */
  crumbs?: [href: string, label: string][];
}) {
  return (
    <section className="relative min-h-[62vh] flex items-center justify-center overflow-hidden bg-navy">
      <img
        src={image}
        alt={imageAlt}
        className="kenburns absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(19,28,49,0.72) 0%, rgba(19,28,49,0.55) 50%, rgba(19,28,49,0.78) 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-10 pt-40 pb-28 text-center">
        <span data-reveal className="eyebrow eyebrow--light block mb-6">
          {label}
        </span>
        <h1
          data-split
          className="font-display text-white font-light text-5xl sm:text-6xl lg:text-7xl leading-[1.08] mb-7"
        >
          {title}
        </h1>
        <p
          data-reveal
          data-reveal-delay="260"
          className="text-white/65 font-light text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
        >
          {subtitle}
        </p>
      </div>

      {/* breadcrumb — wayfinding as part of the hero's hairline motif */}
      <nav
        aria-label="Breadcrumb"
        data-reveal
        data-reveal-delay="400"
        className="absolute bottom-9 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4 text-[0.66rem] font-medium uppercase tracking-[0.3em] whitespace-nowrap"
      >
        <Link href="/" className="text-white/45 hover:text-white transition-colors duration-300">
          Home
        </Link>
        {crumbs.map(([href, name]) => (
          <span key={href} className="contents">
            <span aria-hidden="true" className="w-7 h-px bg-white/25" />
            <Link href={href} className="text-white/45 hover:text-white transition-colors duration-300">
              {name}
            </Link>
          </span>
        ))}
        <span aria-hidden="true" className="w-7 h-px bg-white/25" />
        <span aria-current="page" className="text-brand-200">
          {crumb}
        </span>
      </nav>
    </section>
  );
}
