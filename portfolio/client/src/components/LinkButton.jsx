export default function LinkButton({ href, icon: Icon, children, soonLabel = "Link coming soon" }) {
  const base = "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition";
  if (!href) {
    return (
      <span title={soonLabel} aria-disabled="true" className={`${base} cursor-not-allowed border border-white/10 text-slate-500`}>
        <Icon size={16} />{children}
      </span>
    );
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${base} border border-white/15 text-slate-100 hover:border-cyan-300/50 hover:bg-white/10`}>
      <Icon size={16} />{children}
    </a>
  );
}
