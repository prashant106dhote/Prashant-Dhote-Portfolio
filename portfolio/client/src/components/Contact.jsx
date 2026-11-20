import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle, Mail, Github, Linkedin } from "lucide-react";
import Section, { Reveal } from "./Section.jsx";
import { profile } from "../data.js";

const API = import.meta.env.VITE_API_URL || "";
const EMAIL = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,}$/;
const EMPTY = { name: "", email: "", subject: "", message: "", website: "" };

function validate(f) {
  const e = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name.";
  if (!EMAIL.test(f.email.trim())) e.email = "Enter a valid email address.";
  if (f.subject.trim().length < 3) e.subject = "Add a short subject.";
  if (f.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
  return e;
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-300">{label}</label>
      {children}
      {error && <p id={`${id}-err`} className="mt-1.5 text-sm text-rose-300">{error}</p>}
    </div>
  );
}

const input = "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-500 transition focus:border-cyan-300/60 focus:bg-white/8 focus:outline-none focus:ring-2 focus:ring-cyan-300/20 aria-[invalid=true]:border-rose-400/60";

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [serverMsg, setServerMsg] = useState("");
  const lock = useRef(false);
  const openedAt = useRef(Date.now());
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    if (lock.current || status === "sending" || status === "success") return;
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    lock.current = true;
    setStatus("sending");
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 15000);
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: "POST", headers: { "Content-Type": "application/json" }, signal: ctrl.signal,
        body: JSON.stringify({ ...form, t: openedAt.current }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setForm(EMPTY);
      setStatus("success");
      setTimeout(() => { setStatus("idle"); lock.current = false; }, 30000); // cooldown against repeat sends
    } catch (err) {
      setServerMsg(err.name === "AbortError" ? "The request timed out. Please try again." : err.message === "Failed to fetch" || err instanceof SyntaxError ? "Could not reach the server. Please try again later or email me directly." : err.message);
      setStatus("error");
      lock.current = false;
    } finally {
      clearTimeout(timer);
    }
  }

  const busy = status === "sending" || status === "success";

  return (
    <Section id="contact" title="Get In Touch" subtitle="Have an opportunity or a question? Send me a message and I’ll reply as soon as I can.">
      <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <Reveal>
          <div className="glass rounded-2xl p-6">
            <h3 className="font-display text-xl font-bold text-white">Let’s connect</h3>
            <p className="mt-2 text-slate-400">I’m open to fresher roles, internships and interesting projects.</p>
            <ul className="mt-6 space-y-3 text-slate-200">
              <li><a className="flex items-center gap-3 hover:text-cyan-300" href={`mailto:${profile.email}`}><Mail size={18} className="text-cyan-300" />{profile.email}</a></li>
              <li><a className="flex items-center gap-3 hover:text-cyan-300" href={profile.github} target="_blank" rel="noreferrer"><Github size={18} className="text-cyan-300" />GitHub</a></li>
              <li><a className="flex items-center gap-3 hover:text-cyan-300" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} className="text-cyan-300" />LinkedIn</a></li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} noValidate className="glass space-y-5 rounded-2xl p-6" aria-busy={status === "sending"}>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Name" error={errors.name}><input id="name" className={input} value={form.name} onChange={set("name")} autoComplete="name" placeholder="Your name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} /></Field>
              <Field id="email" label="Email" error={errors.email}><input id="email" type="email" className={input} value={form.email} onChange={set("email")} autoComplete="email" placeholder="you@example.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} /></Field>
            </div>
            <Field id="subject" label="Subject" error={errors.subject}><input id="subject" className={input} value={form.subject} onChange={set("subject")} placeholder="What is this about?" aria-invalid={!!errors.subject} aria-describedby={errors.subject ? "subject-err" : undefined} /></Field>
            <Field id="message" label="Message" error={errors.message}><textarea id="message" rows="5" className={`${input} resize-y`} value={form.message} onChange={set("message")} placeholder="Write your message..." aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} /></Field>

            {/* Honeypot: hidden from people, bots tend to fill it */}
            <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
              <label>Website<input tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} /></label>
            </div>

            <motion.button whileHover={busy ? {} : { y: -2, scale: 1.02 }} whileTap={busy ? {} : { scale: 0.98 }} disabled={busy} type="submit"
              className="grad-bg inline-flex items-center gap-2 rounded-full px-7 py-3 font-semibold text-white shadow-lg shadow-violet/30 disabled:cursor-not-allowed disabled:opacity-70">
              {status === "sending" ? <><Loader2 size={18} className="animate-spin" />Sending...</> : status === "success" ? <><CheckCircle2 size={18} />Sent</> : <><Send size={18} />Send Message</>}
            </motion.button>

            <div aria-live="polite">
              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.p key="ok" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-start gap-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-200">
                    <CheckCircle2 className="mt-0.5 shrink-0" size={20} />Thank you! Your message has been sent. I’ll get back to you soon.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p key="err" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-start gap-3 rounded-xl border border-rose-400/30 bg-rose-400/10 p-4 text-rose-200">
                    <AlertCircle className="mt-0.5 shrink-0" size={20} />{serverMsg}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
