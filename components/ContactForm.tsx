"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const AREAS = [
  "AI Auditing & Governance",
  "Custom AI Solutions",
  "Data Engineering",
  "AI Strategy & Consulting",
  "AI Integration",
  "Training & Workshops",
  "General Enquiry",
];

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }
      setSent(true);
    } catch (err) {
      setError(
        err instanceof Error && err.message !== "Failed to fetch"
          ? err.message
          : "We couldn't send your message. Please check your connection and try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div className="bg-cream border-l border-brand-300 px-10 py-16 text-center flex flex-col items-center">
        <CheckCircle2 size={44} strokeWidth={1} className="text-brand-500 mb-7" />
        <h3 className="font-display font-light text-navy text-3xl mb-4">Message received</h3>
        <p className="text-slate-500 text-base font-light leading-relaxed max-w-sm">
          One of our directors will get back to you personally within one working day. In the
          meantime, feel free to call us on 07931 046 771.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-cream border-l border-brand-300 px-8 sm:px-12 py-12">
      <p className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-brand-500 mb-4">Write to us</p>
      <h3 className="font-display font-light text-navy text-3xl mb-3">Send us a message</h3>
      <p className="text-slate-500 text-sm font-light leading-relaxed mb-12">
        Tell us about your project, challenge or question and we will get back to you directly.
      </p>

      <form onSubmit={onSubmit} className="relative space-y-9">
        {/* Honeypot — hidden from people, tempting to bots */}
        <div className="absolute w-px h-px overflow-hidden -m-px" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-9">
          <div>
            <label htmlFor="name" className="field-label">
              Full name *
            </label>
            <input id="name" name="name" required className="field-line" placeholder="Jane Davies" />
          </div>
          <div>
            <label htmlFor="org" className="field-label">
              Organisation
            </label>
            <input id="org" name="organisation" className="field-line" placeholder="Company Ltd" />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="field-label">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="field-line"
            placeholder="jane@company.co.uk"
          />
        </div>

        <div>
          <label htmlFor="area" className="field-label">
            Area of interest
          </label>
          <select id="area" name="area" defaultValue="" className="field-line">
            <option value="" disabled>
              Select a service (optional)
            </option>
            {AREAS.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="field-label">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="field-line resize-none"
            placeholder="What are you working on, or what's not working?"
          />
        </div>

        <button type="submit" disabled={submitting} className="btn-line btn-line--dark disabled:opacity-50">
          {submitting ? "Sending…" : "Send message"} <ArrowRight size={13} />
        </button>

        {error && (
          <p role="alert" className="text-wales-600 text-sm font-light leading-relaxed">
            {error}
          </p>
        )}
      </form>
    </div>
  );
}
