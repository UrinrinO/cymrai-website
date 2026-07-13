import type { Metadata } from "next";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact · Cymrai Software Solutions",
  description:
    "Whether you have a project ready to scope or are still exploring what AI could do, we're one conversation away.",
};

const HERO_IMG =
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2000";

const DETAILS = [
  { Icon: Phone, label: "Phone", value: "07931 046 771", href: "tel:07931046771" },
  { Icon: Mail, label: "Email", value: "info@cymrai.co.uk", href: "mailto:info@cymrai.co.uk" },
  { Icon: MapPin, label: "Location", value: "USW Startup Stiwdio, Wales, United Kingdom" },
  {
    Icon: Linkedin,
    label: "Follow us",
    value: "LinkedIn",
    href: "https://www.linkedin.com/company/cymrai-software-solutions/",
  },
];

export default function Contact() {
  return (
    <>
      <PageHero
        label="Get in touch"
        title={
          <>
            Let&apos;s start
            <br className="hidden sm:block" /> a conversation.
          </>
        }
        subtitle="Whether you have a project ready to scope or are still exploring what AI could do, we're one conversation away."
        crumb="Contact"
        image={HERO_IMG}
        imageAlt="A calm, sunlit office interior"
      />

      {/* ═══ INFO + FORM ═══ */}
      <section className="bg-white">
        <div className="max-w-[85rem] mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Info */}
            <div data-reveal="left">
              <span className="eyebrow block mb-6">No hard sell</span>
              <h2 className="font-display font-light text-navy text-4xl sm:text-[2.9rem] leading-[1.12] mb-7">
                Senior AI expertise. Just an honest conversation.
              </h2>
              <p className="text-slate-500 text-base font-light leading-relaxed mb-14 max-w-lg">
                Tell us what you&apos;re working on, or what&apos;s not working. Our directors will
                respond personally within one working day. No account managers, no holding pages.
              </p>

              <ul className="border-t border-navy/10 mb-14">
                {DETAILS.map((d) => {
                  const inner = (
                    <span className="flex items-center gap-6 py-6 group">
                      <d.Icon size={26} strokeWidth={1} className="text-brand-500 shrink-0" />
                      <span className="flex-1">
                        <span className="block text-[0.66rem] font-medium uppercase tracking-[0.28em] text-slate-400 mb-1.5">
                          {d.label}
                        </span>
                        <span
                          className={`block text-navy text-lg font-light leading-snug ${
                            d.href ? "group-hover:text-brand-600 transition-colors" : ""
                          }`}
                        >
                          {d.value}
                        </span>
                      </span>
                    </span>
                  );
                  return (
                    <li key={d.label} className="border-b border-navy/10">
                      {d.href ? (
                        <a
                          href={d.href}
                          target={d.href.startsWith("http") ? "_blank" : undefined}
                          rel={d.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="block"
                        >
                          {inner}
                        </a>
                      ) : (
                        inner
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="bg-cream border-l border-brand-300 px-8 py-7">
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-brand-500 mb-3">
                  Within one working day
                </p>
                <p className="text-slate-500 text-base font-light leading-relaxed">
                  All enquiries are handled directly by our directors, not a sales team.
                  We&apos;ll let you know quickly whether we&apos;re the right fit.
                </p>
              </div>
            </div>

            {/* Form */}
            <div data-reveal="right">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MAP ═══ */}
      <section className="bg-paper border-t border-navy/[0.06]">
        <div data-reveal className="max-w-[95rem] mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-24">
          <div className="border border-navy/10">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-3.2989%2C51.4414%2C-3.1097%2C51.5185&layer=mapnik&marker=51.4816%2C-3.1791"
              title="Cymrai · USW Startup Stiwdio, Cardiff, Wales"
              loading="lazy"
              className="w-full h-[400px] block"
            />
          </div>
        </div>
      </section>
    </>
  );
}
