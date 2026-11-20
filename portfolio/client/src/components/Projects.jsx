import { motion } from "framer-motion";
import { Github, ExternalLink, Image as ImageIcon } from "lucide-react";
import Section, { Reveal } from "./Section.jsx";
import LinkButton from "./LinkButton.jsx";
import { projects } from "../data.js";

function Shot({ project }) {
  if (project.image) return <img src={project.image} alt={`${project.name} screenshot`} loading="lazy" className="h-48 w-full rounded-xl object-cover" />;
  return (
    <div className="flex h-48 w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-white/15 bg-gradient-to-br from-violet/15 via-azure/10 to-aqua/10 text-slate-400">
      <ImageIcon size={28} aria-hidden="true" /><span className="text-sm">Screenshot placeholder</span>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="A few things I’ve built while learning and interning.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 0.1}>
            <motion.article whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className="glass glow-hover flex h-full flex-col gap-4 rounded-2xl p-5">
              <Shot project={p} />
              <h3 className="font-display text-xl font-bold text-white">{p.name}</h3>
              <p className="text-slate-400">{p.desc}</p>
              {p.contribution && <p className="rounded-xl border border-violet/30 bg-violet/10 px-4 py-3 text-sm text-violet-100">{p.contribution}</p>}
              <ul className="flex flex-wrap gap-2">{p.tags.map((t) => <li key={t} className="rounded-full bg-white/8 px-3 py-1 text-xs font-medium text-cyan-200 ring-1 ring-white/10">{t}</li>)}</ul>
              <div className="mt-auto flex flex-wrap gap-3 pt-2">
                <LinkButton href={p.github} icon={Github}>GitHub</LinkButton>
                <LinkButton href={p.live} icon={ExternalLink}>Live Demo</LinkButton>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
