"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Wires the two bits of imperative behaviour that the markup declares via
 * data-attributes: scroll-reveal ([data-reveal]) and the drag/arrow slider
 * ([data-drag-scroll] + [data-scroll-btn]). Runs once on mount.
 */
export default function ScrollScripts() {
  // Re-run on every route change: the layout (and this component) persists
  // across client-side navigation, so without this the new page's
  // [data-reveal] elements would never get observed and stay hidden.
  const pathname = usePathname();

  useEffect(() => {
    // Confirm JS is alive before the hidden initial state applies (see globals.css).
    document.documentElement.classList.add("reveal-ready");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ── Masked word split ──────────────────────────────────────────────
    // Wrap every word of a [data-split] element in .sw (clip mask) / .swi
    // (sliding word) spans so CSS can raise each word out of its own line.
    // Runs before the reveal observer so split targets get observed too.
    document.querySelectorAll<HTMLElement>("[data-split]:not([data-split-done])").forEach((el) => {
      let wordIndex = 0;
      const step = parseInt(el.dataset.splitStep || "", 10) || 45;
      const splitNode = (node: Node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          const parts = (node.textContent || "").split(/(\s+)/);
          if (!parts.some((p) => p.trim())) return;
          const frag = document.createDocumentFragment();
          parts.forEach((part) => {
            if (!part.trim()) {
              frag.appendChild(document.createTextNode(part));
              return;
            }
            const mask = document.createElement("span");
            mask.className = "sw";
            const word = document.createElement("span");
            word.className = "swi";
            word.textContent = part;
            word.style.setProperty("--d", `${wordIndex * step}ms`);
            wordIndex += 1;
            mask.appendChild(word);
            frag.appendChild(mask);
          });
          node.parentNode?.replaceChild(frag, node);
        } else if (node.nodeType === Node.ELEMENT_NODE && !(node as HTMLElement).classList.contains("sw")) {
          Array.from(node.childNodes).forEach(splitNode);
        }
      };
      Array.from(el.childNodes).forEach(splitNode);
      el.setAttribute("data-split-done", "");
    });

    // ── Scroll reveal ──────────────────────────────────────────────────
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-reveal], [data-highlight], [data-reveal-stagger], [data-split]"
      )
    );
    let io: IntersectionObserver | null = null;

    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              if (el.hasAttribute("data-reveal-stagger")) {
                // Cascade: each direct child enters slightly after the previous.
                const step = parseInt(el.dataset.revealStagger || "", 10) || 90;
                Array.from(el.children).forEach((child, i) => {
                  (child as HTMLElement).style.transitionDelay = `${i * step}ms`;
                });
              } else {
                el.style.transitionDelay = `${parseInt(el.dataset.revealDelay || "0", 10)}ms`;
              }
              el.classList.add("is-visible");
              io?.unobserve(el);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      els.forEach((el) => io!.observe(el));
    }

    // ── Count-up numbers ───────────────────────────────────────────────
    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-countup]"));
    let cio: IntersectionObserver | null = null;

    if (!reduce && "IntersectionObserver" in window && counters.length) {
      const run = (el: HTMLElement) => {
        const end = parseInt(el.dataset.countup || "0", 10);
        const start = parseInt(el.dataset.countupStart || "0", 10);
        if (Number.isNaN(end)) return;
        const dur = 1400;
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min((t - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = String(Math.round(start + (end - start) * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      };
      cio = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              run(entry.target as HTMLElement);
              cio?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.4 }
      );
      counters.forEach((el) => cio!.observe(el));
    }

    // ── Drag-to-scroll sliders ─────────────────────────────────────────
    const cleanups: Array<() => void> = [];

    document.querySelectorAll<HTMLElement>("[data-drag-scroll]").forEach((el) => {
      let down = false;
      let moved = false;
      let startX = 0;
      let startScroll = 0;

      const onDown = (e: PointerEvent) => {
        down = true;
        moved = false;
        startX = e.pageX;
        startScroll = el.scrollLeft;
        el.setPointerCapture?.(e.pointerId);
      };
      const onMove = (e: PointerEvent) => {
        if (!down) return;
        const dx = e.pageX - startX;
        if (Math.abs(dx) > 4) {
          moved = true;
          el.classList.add("dragging");
        }
        el.scrollLeft = startScroll - dx;
      };
      const end = () => {
        down = false;
        el.classList.remove("dragging");
      };
      const onClick = (e: Event) => {
        if (moved) e.preventDefault();
      };
      const onLeave = () => {
        if (down) end();
      };

      el.addEventListener("pointerdown", onDown);
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerup", end);
      el.addEventListener("pointercancel", end);
      el.addEventListener("pointerleave", onLeave);
      el.addEventListener("click", onClick, true);

      cleanups.push(() => {
        el.removeEventListener("pointerdown", onDown);
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerup", end);
        el.removeEventListener("pointercancel", end);
        el.removeEventListener("pointerleave", onLeave);
        el.removeEventListener("click", onClick, true);
      });
    });

    // ── Arrow buttons ──────────────────────────────────────────────────
    const btnHandlers: Array<[HTMLElement, () => void]> = [];
    document.querySelectorAll<HTMLElement>("[data-scroll-btn]").forEach((btn) => {
      const handler = () => {
        const el = document.querySelector<HTMLElement>(btn.getAttribute("data-target") || "");
        if (!el) return;
        const card = el.querySelector("article") as HTMLElement | null;
        const step = card ? card.getBoundingClientRect().width + 20 : el.clientWidth * 0.8;
        el.scrollBy({
          left: btn.getAttribute("data-dir") === "next" ? step : -step,
          behavior: "smooth",
        });
      };
      btn.addEventListener("click", handler);
      btnHandlers.push([btn, handler]);
    });

    // ── Parallax photography ───────────────────────────────────────────
    // [data-parallax] images sit scaled-up (see globals.css) and drift
    // vertically inside their clipped parent based on scroll position.
    const parallaxEls = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let rafId = 0;
    let ticking = false;

    const applyParallax = () => {
      ticking = false;
      const vh = window.innerHeight;
      parallaxEls.forEach((el) => {
        const parent = el.parentElement;
        if (!parent) return;
        const rect = parent.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > vh) return;
        // -1 (element below viewport) → +1 (element above viewport)
        const progress = (rect.top + rect.height / 2 - vh / 2) / ((vh + rect.height) / 2);
        const strength = parseFloat(el.dataset.parallax || "") || 22;
        el.style.transform = `translate3d(0, ${(-progress * strength).toFixed(2)}px, 0) scale(1.12)`;
      });
    };
    const onParallaxScroll = () => {
      if (!ticking) {
        ticking = true;
        rafId = requestAnimationFrame(applyParallax);
      }
    };

    if (!reduce && parallaxEls.length) {
      applyParallax();
      window.addEventListener("scroll", onParallaxScroll, { passive: true });
      window.addEventListener("resize", onParallaxScroll, { passive: true });
    }

    return () => {
      els.forEach((el) => io?.unobserve(el));
      counters.forEach((el) => cio?.unobserve(el));
      cleanups.forEach((c) => c());
      btnHandlers.forEach(([b, h]) => b.removeEventListener("click", h));
      window.removeEventListener("scroll", onParallaxScroll);
      window.removeEventListener("resize", onParallaxScroll);
      cancelAnimationFrame(rafId);
    };
  }, [pathname]);

  return null;
}
