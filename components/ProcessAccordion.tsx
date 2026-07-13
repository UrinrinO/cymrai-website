"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/* eslint-disable @next/next/no-img-element */

const STEPS = [
  {
    n: "01",
    title: "Scope with a director",
    body: "Every engagement starts with a director in the room, not a salesperson. We define the problem, check your data is ready and tell you plainly if AI is not the answer.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000",
  },
  {
    n: "02",
    title: "Build production-first",
    body: "We build with deployment in mind from day one. Pipelines, monitoring and rollback plans take shape alongside the model, not bolted on at the end.",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000",
  },
  {
    n: "03",
    title: "Deploy, monitor, maintain",
    body: "Launch is the midpoint, not the finish. We watch for drift, keep models honest and stay accountable for the system running in the real world.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000",
  },
];

export default function ProcessAccordion() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Steps */}
      <div>
        {STEPS.map((s, i) => {
          const open = i === active;
          return (
            <div key={s.n} className="border-t border-slate-200 last:border-b">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-expanded={open}
                className="w-full flex items-center justify-between gap-6 py-6 text-left group"
              >
                <span className="flex items-baseline gap-5">
                  <span className={`text-sm font-bold transition-colors ${open ? "text-brand" : "text-slate-300"}`}>{s.n}</span>
                  <span className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors ${open ? "text-slate-900" : "text-slate-400 group-hover:text-slate-600"}`}>
                    {s.title}
                  </span>
                </span>
                <span
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all ${
                    open ? "bg-brand text-white rotate-0" : "bg-white ring-1 ring-slate-200 text-slate-400 rotate-45"
                  }`}
                >
                  <ArrowUpRight size={15} />
                </span>
              </button>
              <div
                className="grid transition-all duration-500 ease-out"
                style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0 }}
              >
                <div className="overflow-hidden">
                  <p className="text-slate-500 text-sm leading-relaxed max-w-md pb-3">{s.body}</p>
                  <Link href="/services" className="inline-flex items-center gap-1.5 text-slate-800 hover:text-brand text-sm font-semibold transition-colors pb-6">
                    Learn more <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Image */}
      <div className="relative overflow-hidden soft-card" style={{ height: "460px" }}>
        {STEPS.map((s, i) => (
          <img
            key={s.n}
            src={s.img}
            alt={s.title}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            style={{ opacity: i === active ? 1 : 0 }}
          />
        ))}
        <div className="absolute bottom-5 left-5 rounded-full bg-white/90 backdrop-blur px-4 py-2 text-slate-800 text-xs font-bold">
          {STEPS[active].n} · {STEPS[active].title}
        </div>
      </div>
    </div>
  );
}
