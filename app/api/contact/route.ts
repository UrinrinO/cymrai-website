import { NextResponse } from "next/server";
import { Resend } from "resend";
import { enquiryAutoReply, enquiryNotification } from "@/lib/email";

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
 *   CONTACT_AUTOREPLY — set to "true" to also send the sender a confirmation.
 *                     Off by default: it emails whatever address was typed into
 *                     the form, so anyone could use it to send mail from your
 *                     domain to a stranger.
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
  const from = process.env.CONTACT_FROM ?? "Cymrai Website <onboarding@resend.dev>";

  const enquiry = {
    name: name.trim(),
    organisation: organisation?.trim(),
    email: email.trim(),
    area: area?.trim(),
    message: message.trim(),
  };

  const notification = enquiryNotification(enquiry);

  const { error } = await resend.emails.send({
    from,
    to: process.env.CONTACT_TO ?? "info@cymrai.co.uk",
    replyTo: enquiry.email,
    subject: notification.subject,
    html: notification.html,
    text: notification.text,
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again or email info@cymrai.co.uk." },
      { status: 502 }
    );
  }

  // The enquiry is already safely delivered, so a failed confirmation must not
  // fail the request: the sender would be told to submit again.
  if (process.env.CONTACT_AUTOREPLY === "true") {
    const reply = enquiryAutoReply(enquiry);
    const { error: replyError } = await resend.emails.send({
      from,
      to: enquiry.email,
      replyTo: process.env.CONTACT_TO ?? "info@cymrai.co.uk",
      subject: reply.subject,
      html: reply.html,
      text: reply.text,
    });
    if (replyError) console.error("[contact] auto-reply failed:", replyError);
  }

  return NextResponse.json({ ok: true });
}
