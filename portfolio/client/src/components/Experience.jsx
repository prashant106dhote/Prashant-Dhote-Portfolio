import { Briefcase } from "lucide-react";
import Section, { Reveal } from "./Section.jsx";
import { experience } from "../data.js";

export default function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="Hands-on internships in full stack development.">
      <ol className="relative space-y-8 border-l border-white/15 pl-8">
        {experience.map((x, i) => (
          <Reveal key={x.org} delay={i * 0.1}>
            <li className="relative list-none">
              <span className="grad-bg absolute -left-[3.05rem] top-1 flex h-9 w-9 items-center justify-center rounded-full text-white shadow-lg shadow-violet/40"><Briefcase size={16} /></span>
              <div className="glass glow-hover rounded-2xl p-6">
                <p className="text-sm font-medium text-cyan-300">{x.when}</p>
                <h3 className="mt-1 font-display text-xl font-bold text-white">{x.role}</h3>
                <p className="text-slate-400">{x.org}</p>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-slate-300">{x.points.map((p) => <li key={p}>{p}</li>)}</ul>
                {x.tech.length > 0 && <ul className="mt-4 flex flex-wrap gap-2">{x.tech.map((t) => <li key={t} className="rounded-full bg-white/8 px-3 py-1 text-xs font-medium text-cyan-200 ring-1 ring-white/10">{t}</li>)}</ul>}
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
