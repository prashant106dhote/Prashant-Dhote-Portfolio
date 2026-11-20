import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Atom, Server, Database } from "lucide-react";
import { profile } from "../data.js";
import Typewriter from "./Typewriter.jsx";

const WORDS = ["Hi,", "I’m", "Prashant", "Dhote"];
const wordV = { hidden: { opacity: 0, y: 40, filter: "blur(8px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } };

function Float({ children, className = "", delay = 0, dur = 5 }) {
  return (
    <motion.div className={className} animate={{ y: [0, -14, 0] }} transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay }}>
      {children}
    </motion.div>
  );
}

// Developer illustration. Swap this component for <img src="/profile.jpg" /> if you prefer a photo.
function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md" aria-hidden="true">
      <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-violet/40 via-azure/30 to-aqua/30 blur-3xl" />
      <Float dur={6}>
        <div className="glass relative rounded-2xl p-5">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-400/80" /><span className="h-3 w-3 rounded-full bg-amber-300/80" /><span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            <span className="ml-3 font-mono text-xs text-slate-400">developer.jsx</span>
          </div>
          <div className="mb-4 flex items-center gap-3">
            <div className="grad-bg flex h-14 w-14 items-center justify-center rounded-full font-display text-lg font-extrabold text-white">PD</div>
            <div><p className="font-display font-bold text-white">{profile.name}</p><p className="text-xs text-slate-400">{profile.location}</p></div>
          </div>
          <pre className="overflow-x-auto font-mono text-[13px] leading-6 text-slate-300">
{`const `}<span className="text-violet-300">developer</span>{` = {
  role: `}<span className="text-cyan-300">"Full Stack"</span>{`,
  stack: [`}<span className="text-cyan-300">"React"</span>{`, `}<span className="text-cyan-300">"Node"</span>{`,
    `}<span className="text-cyan-300">"MongoDB"</span>{`],
  learning: `}<span className="text-blue-300">true</span>{`,
};`}
          </pre>
        </div>
      </Float>
      <Float className="absolute -left-4 top-10 sm:-left-8" delay={0.4} dur={4.6}><div className="glass rounded-xl p-3 text-cyan-300"><Atom size={26} /></div></Float>
      <Float className="absolute -right-3 top-1/3 sm:-right-8" delay={1} dur={5.4}><div className="glass rounded-xl p-3 text-violet-300"><Server size={26} /></div></Float>
      <Float className="absolute -bottom-5 left-1/4" delay={0.8} dur={5}><div className="glass rounded-xl p-3 text-blue-300"><Database size={26} /></div></Float>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="mx-auto grid min-h-svh max-w-6xl items-center gap-14 px-5 pb-16 pt-32 sm:px-8 sm:pt-36 lg:grid-cols-[1.15fr_.85fr]">
      <div>
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-slate-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" /> Open to fresher opportunities
        </motion.p>
        <motion.h1 initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }} className="font-display text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
          {WORDS.map((w, i) => (
            <motion.span key={i} variants={wordV} transition={{ duration: 0.6, ease: "easeOut" }} className={`mr-3 inline-block ${i >= 2 ? "grad-text" : "text-white"}`}>{w}</motion.span>
          ))}
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="mt-5 font-display text-xl font-semibold text-slate-200 sm:text-2xl">{profile.subtitle}</motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }} className="mt-3 h-9 font-display text-xl font-bold sm:text-2xl"><Typewriter words={profile.roles} /></motion.p>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15 }} className="mt-4 max-w-xl text-lg text-slate-400">{profile.intro}</motion.p>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }} className="mt-9 flex flex-wrap items-center gap-4">
          <motion.a whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.97 }} href="#projects" className="grad-bg inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white shadow-lg shadow-violet/30">
            View My Projects <ArrowRight size={18} />
          </motion.a>
          <motion.a whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.97 }} href={profile.resume} download className="glass glow-hover inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white">
            <Download size={18} /> Download Resume
          </motion.a>
          <div className="flex items-center gap-2">
            {[[Github, profile.github, "GitHub"], [Linkedin, profile.linkedin, "LinkedIn"]].map(([Icon, href, label]) => (
              <motion.a key={label} whileHover={{ y: -3 }} href={href} target="_blank" rel="noreferrer" aria-label={label} className="glass glow-hover rounded-full p-3 text-slate-200 hover:text-white"><Icon size={20} /></motion.a>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.8 }}><HeroVisual /></motion.div>
    </section>
  );
}
