import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import nodemailer from "nodemailer";

const {
  PORT = 5000, CLIENT_ORIGIN = "http://localhost:5173",
  SMTP_HOST = "smtp.gmail.com", SMTP_PORT = "465", SMTP_USER, SMTP_PASS,
  CONTACT_TO_EMAIL = "YOUR_EMAIL@gmail.com", MAIL_DRY_RUN,
} = process.env;

const dryRun = MAIL_DRY_RUN === "true";
const transporter = dryRun
  ? nodemailer.createTransport({ jsonTransport: true })
  : nodemailer.createTransport({
      host: SMTP_HOST, port: Number(SMTP_PORT), secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

const app = express();
app.set("trust proxy", 1);
app.use(helmet());
app.use(cors({ origin: CLIENT_ORIGIN.split(",").map((s) => s.trim()) }));
app.use(express.json({ limit: "20kb" }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, max: 5, standardHeaders: true, legacyHeaders: false,
  message: { error: "Too many messages. Please try again in a few minutes." },
});

const clean = (v, max) => String(v ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, max);
const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const EMAIL = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,}$/;

app.get("/api/health", (_req, res) => res.json({ ok: true, dryRun }));

app.post("/api/contact", limiter, async (req, res) => {
  const b = req.body || {};
  // Spam protection: honeypot field + form must have been open for at least 3 seconds
  if (b.website) return res.status(200).json({ ok: true });
  if (!b.t || Date.now() - Number(b.t) < 3000) return res.status(400).json({ error: "Please take a moment and try again." });

  const name = clean(b.name, 80);
  const email = clean(b.email, 120);
  const subject = clean(b.subject, 120);
  const message = String(b.message ?? "").trim().slice(0, 3000);

  if (name.length < 2) return res.status(400).json({ error: "Please enter your name." });
  if (!EMAIL.test(email)) return res.status(400).json({ error: "Please enter a valid email address." });
  if (subject.length < 3) return res.status(400).json({ error: "Please add a subject." });
  if (message.length < 10) return res.status(400).json({ error: "Message should be at least 10 characters." });

  try {
    const info = await transporter.sendMail({
      from: `"Portfolio Contact" <${SMTP_USER || "no-reply@localhost"}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: `${name.replace(/[<>"]/g, "")} <${email}>`,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><b>From:</b> ${esc(name)} (${esc(email)})</p><p><b>Subject:</b> ${esc(subject)}</p><hr><p style="white-space:pre-wrap">${esc(message)}</p>`,
    });
    if (dryRun) console.log("[DRY RUN] Email would be sent:\n", info.message);
    res.status(201).json({ ok: true });
  } catch (err) {
    console.error("Mail error:", err.message);
    res.status(500).json({ error: "Could not send your message right now. Please try again later." });
  }
});
app.get("/", (req, res) => {
  res.send("Portfolio Backend is Running Successfully!");
});


app.listen(PORT, () => {
  console.log(`API running on :${PORT}${dryRun ? " (MAIL_DRY_RUN=true: emails are only printed)" : ""}`);
  if (!dryRun && (!SMTP_USER || !SMTP_PASS)) console.warn("Warning: SMTP_USER / SMTP_PASS missing in server/.env");
});
