/**
 * Email templates for the contact form.
 *
 * Written as tables with inline styles on purpose: Outlook (which the
 * directors use) strips <style> blocks and ignores flexbox/grid, and no email
 * client will load a webfont. Anything fancier degrades to unstyled text.
 *
 * Body copy is 17px. Email clients render at the reader's system size and
 * anything under 16px reads as fine print, especially on mobile.
 */

const NAVY = "#131c31";
const BRAND = "#185898";
const PAPER = "#f4f4f2";
const RULE = "#e2e2df";
const MUTED = "#6b7280";

/** User input goes straight into HTML, so it has to be escaped. */
function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Preserve the paragraph breaks someone typed into a textarea. */
function paragraphs(message: string): string {
  return message
    .trim()
    .split(/\n{2,}/)
    .map(
      (block) =>
        `<p style="margin:0 0 18px;font-size:17px;line-height:1.65;color:${NAVY};">${esc(
          block
        ).replace(/\n/g, "<br>")}</p>`
    )
    .join("");
}

function shell(inner: string, preheader: string): string {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
</head>
<body style="margin:0;padding:0;background-color:${PAPER};">
<div style="display:none;font-size:1px;color:${PAPER};max-height:0;overflow:hidden;">${esc(
    preheader
  )}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${PAPER};">
  <tr>
    <td align="center" style="padding:32px 16px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:100%;background-color:#ffffff;border:1px solid ${RULE};">
        ${inner}
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

function header(): string {
  return `<tr>
  <td style="background-color:${NAVY};padding:26px 40px;">
    <div style="font-family:Georgia,'Times New Roman',serif;font-size:24px;letter-spacing:0.02em;color:#ffffff;">Cymrai</div>
    <div style="margin-top:4px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:bold;letter-spacing:0.22em;text-transform:uppercase;color:#8bb2d8;">Software Solutions</div>
  </td>
</tr>`;
}

function footer(): string {
  return `<tr>
  <td style="background-color:${NAVY};padding:24px 40px;font-family:Arial,Helvetica,sans-serif;">
    <p style="margin:0 0 6px;font-size:14px;line-height:1.6;color:#ffffff;"><strong>Cymrai Software Solutions</strong></p>
    <p style="margin:0;font-size:14px;line-height:1.6;color:#9aa6bd;">
      USW Startup Stiwdio, Cardiff, Wales<br>
      <a href="mailto:info@cymrai.co.uk" style="color:#8bb2d8;">info@cymrai.co.uk</a> &nbsp;·&nbsp;
      <a href="https://www.cymrai.co.uk" style="color:#8bb2d8;">cymrai.co.uk</a>
    </p>
  </td>
</tr>`;
}

/** One label/value row in the details block. */
function field(label: string, value: string, isLink = false): string {
  const shown = value.trim() || "—";
  const rendered =
    isLink && value.trim()
      ? `<a href="mailto:${esc(value.trim())}" style="color:${BRAND};font-weight:bold;">${esc(
          value.trim()
        )}</a>`
      : `<strong style="color:${NAVY};">${esc(shown)}</strong>`;

  return `<tr>
  <td style="padding:12px 0;border-bottom:1px solid ${RULE};font-family:Arial,Helvetica,sans-serif;">
    <div style="font-size:12px;font-weight:bold;letter-spacing:0.16em;text-transform:uppercase;color:${MUTED};padding-bottom:5px;">${esc(
      label
    )}</div>
    <div style="font-size:17px;line-height:1.5;">${rendered}</div>
  </td>
</tr>`;
}

export type Enquiry = {
  name: string;
  organisation?: string;
  email: string;
  area?: string;
  message: string;
};

/** Sent to the directors when someone submits the form. */
export function enquiryNotification(e: Enquiry) {
  const who = e.organisation?.trim() ? `${e.name.trim()} (${e.organisation.trim()})` : e.name.trim();

  const html = shell(
    `${header()}
<tr>
  <td style="padding:40px 40px 8px;font-family:Arial,Helvetica,sans-serif;">
    <div style="font-size:12px;font-weight:bold;letter-spacing:0.16em;text-transform:uppercase;color:${BRAND};">New enquiry</div>
    <h1 style="margin:12px 0 0;font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:1.3;font-weight:normal;color:${NAVY};">${esc(
      e.name.trim()
    )} got in touch.</h1>
  </td>
</tr>
<tr>
  <td style="padding:24px 40px 0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid ${RULE};">
      ${field("Name", e.name)}
      ${field("Organisation", e.organisation ?? "")}
      ${field("Email", e.email, true)}
      ${field("Area of interest", e.area ?? "")}
    </table>
  </td>
</tr>
<tr>
  <td style="padding:30px 40px 8px;font-family:Arial,Helvetica,sans-serif;">
    <div style="font-size:12px;font-weight:bold;letter-spacing:0.16em;text-transform:uppercase;color:${MUTED};padding-bottom:12px;">Message</div>
    ${paragraphs(e.message)}
  </td>
</tr>
<tr>
  <td style="padding:8px 40px 40px;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td style="background-color:${NAVY};">
          <a href="mailto:${esc(e.email.trim())}" style="display:inline-block;padding:15px 30px;font-size:13px;font-weight:bold;letter-spacing:0.16em;text-transform:uppercase;color:#ffffff;text-decoration:none;">Reply to ${esc(
            e.name.trim().split(" ")[0]
          )}</a>
        </td>
      </tr>
    </table>
    <p style="margin:18px 0 0;font-size:14px;line-height:1.6;color:${MUTED};">Replying to this email reaches <strong style="color:${NAVY};">${esc(
      e.email.trim()
    )}</strong> directly.</p>
  </td>
</tr>
${footer()}`,
    `${who}: ${e.message.trim().slice(0, 90)}`
  );

  const text = [
    `NEW ENQUIRY — ${who}`,
    "",
    `Name:             ${e.name.trim()}`,
    `Organisation:     ${e.organisation?.trim() || "—"}`,
    `Email:            ${e.email.trim()}`,
    `Area of interest: ${e.area?.trim() || "—"}`,
    "",
    "MESSAGE",
    e.message.trim(),
    "",
    `Reply directly to ${e.email.trim()}.`,
  ].join("\n");

  return {
    subject: `Website enquiry — ${who}`,
    html,
    text,
  };
}

/** Confirmation sent back to whoever submitted the form. */
export function enquiryAutoReply(e: Enquiry) {
  const firstName = e.name.trim().split(" ")[0];

  const html = shell(
    `${header()}
<tr>
  <td style="padding:40px 40px 0;font-family:Arial,Helvetica,sans-serif;">
    <h1 style="margin:0 0 20px;font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:1.3;font-weight:normal;color:${NAVY};">Thanks, ${esc(
      firstName
    )}. We have your message.</h1>
    <p style="margin:0 0 18px;font-size:17px;line-height:1.65;color:${NAVY};">One of our directors will read this and reply <strong>within one working day</strong>. Not an account manager, and not an automated follow-up sequence.</p>
    <p style="margin:0 0 26px;font-size:17px;line-height:1.65;color:${NAVY};">If it turns out we are not the right people for what you need, we will tell you that too.</p>
  </td>
</tr>
<tr>
  <td style="padding:0 40px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${PAPER};border-left:3px solid ${BRAND};">
      <tr>
        <td style="padding:22px 24px;font-family:Arial,Helvetica,sans-serif;">
          <div style="font-size:12px;font-weight:bold;letter-spacing:0.16em;text-transform:uppercase;color:${MUTED};padding-bottom:12px;">What you sent us</div>
          ${paragraphs(e.message)}
        </td>
      </tr>
    </table>
  </td>
</tr>
<tr>
  <td style="padding:30px 40px 40px;font-family:Arial,Helvetica,sans-serif;">
    <p style="margin:0;font-size:17px;line-height:1.65;color:${NAVY};">In the meantime, our <a href="https://www.cymrai.co.uk/blog" style="color:${BRAND};font-weight:bold;">writing on AI and data</a> covers most of what we would say in a first conversation.</p>
  </td>
</tr>
${footer()}`,
    `We have your message. A director will reply within one working day.`
  );

  const text = [
    `Thanks, ${firstName}. We have your message.`,
    "",
    "One of our directors will read this and reply within one working day. Not an account manager, and not an automated follow-up sequence.",
    "",
    "If it turns out we are not the right people for what you need, we will tell you that too.",
    "",
    "WHAT YOU SENT US",
    e.message.trim(),
    "",
    "— Cymrai Software Solutions",
    "USW Startup Stiwdio, Cardiff, Wales",
    "info@cymrai.co.uk · cymrai.co.uk",
  ].join("\n");

  return {
    subject: "We have your message",
    html,
    text,
  };
}
