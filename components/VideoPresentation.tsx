"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Play, X } from "lucide-react";

/* eslint-disable @next/next/no-img-element */

/**
 * Split "watch our presentation" band: still frame with a play button on the
 * left, navy caption panel on the right. Clicking opens the player in a
 * lightbox, so nothing is fetched from the video host until someone asks.
 *
 * VIDEO_URL takes a YouTube/Vimeo link or a direct .mp4 path.
 */
const VIDEO_URL = "https://www.youtube.com/watch?v=kgmIe0EbY5Y";

const POSTER = "/images/video-poster.jpg";

/** YouTube and Vimeo watch URLs need rewriting to their embeddable form. */
function toEmbedUrl(url: string): string {
  const yt = url.match(
    /(?:youtube\.com\/(?:watch\?v=|live\/|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/
  );
  if (yt) return `https://www.youtube-nocookie.com/embed/${yt[1]}?autoplay=1&rel=0`;

  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1`;

  return url;
}

export default function VideoPresentation() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  const isFile = /\.(mp4|webm|mov)$/i.test(VIDEO_URL);

  return (
    <section className="bg-navy">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Still frame + play button */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Play the presentation"
          className="group relative lg:col-span-2 min-h-[26rem] lg:min-h-[38rem] overflow-hidden block w-full"
        >
          <img
            src={POSTER}
            alt="A still from the Cymrai directors' presentation"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-navy/10 group-hover:bg-navy/25 transition-colors duration-500" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-white/90 text-white transition-transform duration-500 group-hover:scale-110">
            <Play size={26} strokeWidth={1} fill="currentColor" className="ml-1" />
          </span>
        </button>

        {/* Navy caption panel */}
        <div className="relative flex items-end min-h-[16rem] lg:min-h-[38rem] overflow-hidden">
          <img
            src="/images/cardiff-blue-bg.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-navy/45" />
          <div className="relative px-8 sm:px-12 lg:px-14 py-14 lg:py-16">
            <span className="eyebrow eyebrow--light block mb-6">Featured</span>
            <h2 className="font-display font-light text-white text-2xl sm:text-3xl leading-[1.25]">
              Our directors, in the University of South Wales film on building with AI.
            </h2>
          </div>
        </div>
      </div>

      {/*
        Portalled to <body>: app/template.tsx wraps every page in .page-enter,
        whose animation leaves an identity transform behind. A transformed
        ancestor becomes the containing block for position:fixed children, which
        would size this overlay to the whole document instead of the viewport.
      */}
      {open &&
        mounted &&
        createPortal(
          <div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-navy/90 backdrop-blur-sm px-4"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Presentation video"
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              aria-label="Close video"
            >
              <X size={30} strokeWidth={1.5} />
            </button>

            <div
              className="w-full max-w-5xl aspect-video bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {isFile ? (
                <video
                  src={VIDEO_URL}
                  poster={POSTER}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="w-full h-full"
                />
              ) : (
                <iframe
                  src={toEmbedUrl(VIDEO_URL)}
                  title="Cymrai presentation"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                  allowFullScreen
                />
              )}
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
