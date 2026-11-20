import { Award, BadgeCheck, Image as ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import Section, { Reveal } from "./Section.jsx";
import LinkButton from "./LinkButton.jsx";
import { certificates } from "../data.js";

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications" subtitle="Courses and programs I’ve completed.">
      <div className="grid gap-6 sm:grid-cols-2">
        {certificates.map((c, i) => (
          <Reveal key={c.title} delay={(i % 2) * 0.1}>
            <motion.div whileHover={{ y: -6 }} className="glass glow-hover flex h-full gap-5 rounded-2xl p-5">
              {c.image
                ? <img src={c.image} alt={`${c.title} certificate`} loading="lazy" className="h-24 w-32 shrink-0 rounded-xl object-cover" />
                : <div className="flex h-24 w-32 shrink-0 flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-white/15 bg-white/5 text-slate-500"><ImageIcon size={22} aria-hidden="true" /><span className="text-xs">Certificate image</span></div>}
              <div className="flex min-w-0 flex-col">
                <p className="flex items-center gap-1.5 text-sm font-medium text-cyan-300"><Award size={16} />{c.issuer}</p>
                <h3 className="mt-1 font-display text-lg font-bold leading-snug text-white">{c.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{c.detail}</p>
                <div className="mt-auto pt-3"><LinkButton href={c.verify} icon={BadgeCheck} soonLabel="Verification link coming soon">Verify</LinkButton></div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
