import { MapPin, GraduationCap, Code2, BadgeCheck, Lightbulb, Rocket, Puzzle } from "lucide-react";
import Section, { Reveal } from "./Section.jsx";
import { about, profile } from "../data.js";

const ICONS = [MapPin, GraduationCap, Code2, BadgeCheck];
const TRAIT_ICONS = [Puzzle, Lightbulb, Rocket];

export default function About() {
  return (
    <Section id="about" title="About Me" subtitle="A fresher who likes building things that work.">
      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-slate-300">
          {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
          <div className="flex flex-wrap gap-3 pt-2">
            {about.traits.map((t, i) => { const I = TRAIT_ICONS[i]; return (
              <span key={t} className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-slate-200"><I size={16} className="text-cyan-300" />{t}</span>
            ); })}
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="glass glow-hover rounded-3xl p-6">
            <div className="mb-6 flex items-center gap-4">
              <div className="grad-bg flex h-16 w-16 items-center justify-center rounded-2xl font-display text-xl font-extrabold text-white">PD</div>
              <div><p className="font-display text-lg font-bold text-white">{profile.name}</p><p className="text-sm text-slate-400">{profile.title}</p></div>
            </div>
            <dl className="space-y-4">
              {about.facts.map(([k, v], i) => { const I = ICONS[i]; return (
                <div key={k} className="flex items-start gap-3"><I size={18} className="mt-1 shrink-0 text-violet-300" /><div><dt className="text-sm text-slate-400">{k}</dt><dd className="font-medium text-slate-100">{v}</dd></div></div>
              ); })}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
