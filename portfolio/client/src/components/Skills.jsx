import { motion } from "framer-motion";
import Section, { Reveal } from "./Section.jsx";
import { skillGroups } from "../data.js";

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="The languages, frameworks and tools I work with.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, gi) => (
          <Reveal key={g.title} delay={gi * 0.07}>
            <div className="glass glow-hover h-full rounded-2xl p-6">
              <h3 className="mb-4 font-display text-lg font-bold text-white">{g.title}</h3>
              <ul className="flex flex-wrap gap-3">
                {g.skills.map(([name, Icon]) => (
                  <motion.li key={name} whileHover={{ y: -4, scale: 1.05 }} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-medium text-slate-200 hover:border-cyan-300/40 hover:text-white">
                    <Icon size={18} className="text-cyan-300" aria-hidden="true" />{name}
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
