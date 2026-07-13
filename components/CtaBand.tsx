import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** Closing CTA band in the editorial language: navy, serif, hairline button. */
export default function CtaBand({
  heading,
  text,
}: {
  heading: React.ReactNode;
  text: string;
}) {
  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Cardiff skyline + circuit motif, sitting under a navy wash so the type stays legible */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/cardiff-blue-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-navy/55" />
      <div className="relative max-w-3xl mx-auto px-6 sm:px-10 py-24 lg:py-32 text-center">
        <span data-reveal className="eyebrow eyebrow--light block mb-7">
          Get in touch
        </span>
        <h2
          data-reveal
          data-reveal-delay="100"
          className="font-display font-light text-white text-4xl sm:text-5xl leading-[1.15] mb-7"
        >
          {heading}
        </h2>
        <p
          data-reveal
          data-reveal-delay="180"
          className="text-white/60 font-light text-lg leading-relaxed max-w-xl mx-auto mb-12"
        >
          {text}
        </p>
        <div data-reveal data-reveal-delay="260">
          <Link href="/contact" className="btn-line btn-line--light">
            Talk to a director <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}
