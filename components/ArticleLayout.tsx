import Link from "next/link";

/* eslint-disable @next/next/no-img-element */

/** Shared layout for blog articles: full-bleed photo header, breadcrumb, prose column. */
export default function ArticleLayout({
  category,
  date,
  read,
  title,
  intro,
  image,
  imageAlt,
  children,
}: {
  category: string;
  date: string;
  read: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  children: React.ReactNode;
}) {
  return (
    <article>
      {/* ═══ Header — the article's own image as a full-bleed hero ═══ */}
      <header className="relative min-h-[64vh] flex items-center justify-center overflow-hidden bg-navy">
        <img
          src={image}
          alt={imageAlt}
          className="kenburns absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(19,28,49,0.78) 0%, rgba(19,28,49,0.6) 50%, rgba(19,28,49,0.82) 100%)",
          }}
        />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-10 pt-40 pb-28 text-center">
          <div data-reveal className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-7">
            <span className="eyebrow eyebrow--light">{category}</span>
            <span className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-white/45">
              {date} · {read}
            </span>
          </div>
          <h1
            data-split
            data-split-step="30"
            className="font-display text-white font-light text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.12] mb-7"
          >
            {title}
          </h1>
          <p
            data-reveal
            data-reveal-delay="300"
            className="text-white/75 font-normal text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            {intro}
          </p>
        </div>

        {/* breadcrumb — same hairline motif as PageHero */}
        <nav
          aria-label="Breadcrumb"
          data-reveal
          data-reveal-delay="420"
          className="absolute bottom-9 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4 text-[0.66rem] font-medium uppercase tracking-[0.3em] whitespace-nowrap max-w-full px-6"
        >
          <Link href="/" className="text-white/45 hover:text-white transition-colors duration-300">
            Home
          </Link>
          <span aria-hidden="true" className="w-7 h-px bg-white/25 shrink-0" />
          <Link href="/blog" className="text-white/45 hover:text-white transition-colors duration-300">
            Perspectives
          </Link>
          <span aria-hidden="true" className="w-7 h-px bg-white/25 shrink-0" />
          <span aria-current="page" className="text-brand-200 truncate max-w-[14rem]">
            {title}
          </span>
        </nav>
      </header>

      {/* ═══ Body ═══ */}
      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 py-16 lg:py-24">{children}</div>
      </div>
    </article>
  );
}

/** Prose helpers so article pages stay readable. */
export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display font-normal text-brand-600 text-3xl sm:text-[2.1rem] leading-[1.2] mt-14 mb-6">
      {children}
    </h2>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="text-slate-700 text-[1.1875rem] font-normal leading-[1.8] mb-7">{children}</p>;
}

export function Pull({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l border-brand-300 pl-7 my-10">
      <p className="font-display italic font-light text-navy text-2xl leading-[1.5]">{children}</p>
    </blockquote>
  );
}

export function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-navy">{children}</strong>;
}
