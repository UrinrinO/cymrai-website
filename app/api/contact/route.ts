import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Contact form handler — relays enquiries to the directors' inbox via Resend.
 *
 * Required env (in .env.local):
 *   RESEND_API_KEY  — from https://resend.com/api-keys
 * Optional:
 *   CONTACT_TO      — recipient (default info@cymrai.co.uk)
 *   CONTACT_FROM    — verified sender (default Resend's onboarding address,
 *                     which only delivers to the Resend account owner's email
 *                     until cymrai.co.uk is verified at resend.com/domains)
 */
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, organisation, email, area, message, company } = body as Record<string, string>;

  // Honeypot: real users never fill this hidden field. Pretend success so
  // bots don't learn they were caught.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name?.trim() || !message?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email ?? "")) {
    return NextResponse.json(
      { error: "Please fill in your name, a valid email and a message." },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("[contact] RESEND_API_KEY is not set — add it to .env.local");
    return NextResponse.json(
      { error: "The contact form isn't configured yet. Please email info@cymrai.co.uk directly." },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const lines = [
    `Name:         ${name.trim()}`,
    `Organisation: ${organisation?.trim() || "—"}`,
    `Email:        ${email.trim()}`,
    `Area:         ${area?.trim() || "—"}`,
    "",
    message.trim(),
  ];

  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM ?? "Cymrai Website <onboarding@resend.dev>",
    to: process.env.CONTACT_TO ?? "info@cymrai.co.uk",
    replyTo: email.trim(),
    subject: `Website enquiry — ${name.trim()}${organisation?.trim() ? ` (${organisation.trim()})` : ""}`,
    text: lines.join("\n"),
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again or email info@cymrai.co.uk." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
