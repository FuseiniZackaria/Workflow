import nodemailer from 'nodemailer';

let transporter;
function getTransporter() {
  if (!process.env.SMTP_HOST || !process.env.NOTIFY_EMAIL) return null;
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
    });
  }
  return transporter;
}

export async function sendNotification(subject, data) {
  const t = getTransporter();
  if (!t) return; // email not configured: submissions are still saved to disk
  const text = Object.entries(data)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n');
  await t.sendMail({
    from: process.env.SMTP_USER || process.env.NOTIFY_EMAIL,
    to: process.env.NOTIFY_EMAIL,
    subject: `[Dr. Festus website] ${subject}`,
    text,
  });
}
