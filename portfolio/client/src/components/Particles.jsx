import { useMemo } from "react";

export default function Particles({ count = 26 }) {
  const dots = useMemo(
    () => Array.from({ length: count }, (_, i) => {
      const r = (n) => ((Math.sin(i * 97.13 + n * 31.7) + 1) / 2);
      return { left: `${r(1) * 100}%`, top: `${r(2) * 100}%`, size: 2 + r(3) * 3, dur: 9 + r(4) * 10, delay: -r(5) * 12 };
    }),
    [count]
  );
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-violet/20 blur-[120px]" />
      <div className="absolute -right-32 top-1/3 h-[26rem] w-[26rem] rounded-full bg-azure/15 blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-aqua/10 blur-[120px]" />
      {dots.map((d, i) => (
        <span key={i} className="particle" style={{ left: d.left, top: d.top, width: d.size, height: d.size, animationDuration: `${d.dur}s`, animationDelay: `${d.delay}s` }} />
      ))}
    </div>
  );
}
