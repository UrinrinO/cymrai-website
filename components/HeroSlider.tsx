"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* eslint-disable @next/next/no-img-element */

const INTERVAL = 6000;

/** Backgrounds only. The headline is fixed, so these are decorative. */
const BACKGROUNDS = [
  "/images/uri-bg.jpg",
  "/images/shovon-meetup.jpg",
  "/images/conference.jpeg",
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduced.current = mq.matches;
    const onChange = () => {
      reduced.current = mq.matches;
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const go = useCallback((i: number) => {
    setActive((i + BACKGROUNDS.length) % BACKGROUNDS.length);
  }, []);

  useEffect(() => {
    if (paused || reduced.current) return;
    const t = setTimeout(() => go(active + 1), INTERVAL);
    return () => clearTimeout(t);
  }, [active, paused, go]);

  return (
    <section
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-navy"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {BACKGROUNDS.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          className={`kenburns absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* heavy navy on the left so the headline stays legible, fading to almost clear on the right */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(19,28,49,0.94) 0%, rgba(19,28,49,0.88) 25%, rgba(19,28,49,0.62) 50%, rgba(19,28,49,0.28) 75%, rgba(19,28,49,0.06) 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[95rem] mx-auto px-6 sm:px-10 lg:px-16 pt-36 pb-24">
        <div className="max-w-3xl">
          <span data-reveal className="eyebrow eyebrow--light block mb-7">
            Senior-led AI consultancy · Cardiff, Wales
          </span>
          <h1
            data-split
            className="font-display text-white font-light text-5xl sm:text-6xl lg:text-[4.8rem] leading-[1.08] mb-8"
          >
            Intelligence from Wales,
            <br />
            Innovation for the World.
          </h1>
          <p
            data-reveal
            data-reveal-delay="220"
            className="text-white/70 font-light text-lg sm:text-xl leading-relaxed max-w-xl mb-12"
          >
            Three directors, thirty-two years between them, building AI and data systems that hold
            up in production for mid-market businesses across the UK.
          </p>
          <div data-reveal data-reveal-delay="320">
            <Link href="/contact" className="btn-line btn-line--light">
              Talk to a director <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>

      {/* slide markers, the hairline ticks */}
      <div className="absolute z-10 bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {BACKGROUNDS.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => go(i)}
            aria-label={`Show background ${i + 1}`}
            aria-current={i === active ? "true" : undefined}
            className="py-3"
          >
            <span
              className={`block w-8 h-px transition-colors ${
                i === active ? "bg-white/80" : "bg-white/25"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
