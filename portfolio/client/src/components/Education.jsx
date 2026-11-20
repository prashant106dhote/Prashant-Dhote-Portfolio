import { GraduationCap } from "lucide-react";
import Section, { Reveal } from "./Section.jsx";
import { education } from "../data.js";

const Val = ({ v, hint }) => v ? <span className="text-slate-100">{v}</span> : <span className="italic text-slate-500">{hint}</span>;

export default function Education() {
  return (
    <Section id="education" title="Education" subtitle="My academic background.">
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 0.1}>
            <div className="glass glow-hover h-full rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-3"><span className="grad-bg flex h-10 w-10 items-center justify-center rounded-xl text-white"><GraduationCap size={20} /></span><p className="text-sm font-medium text-cyan-300"><Val v={e.when} hint="Years to be added" /></p></div>
              <h3 className="font-display text-xl font-bold text-white">{e.degree}</h3>
              <p className="mt-1 text-slate-400">{e.school}</p>
              <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
                <div><dt className="text-slate-400">Branch</dt><dd><Val v={e.branch} hint="To be added" /></dd></div>
                <div><dt className="text-slate-400">CGPA</dt><dd><Val v={e.cgpa} hint="To be added" /></dd></div>
              </dl>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
