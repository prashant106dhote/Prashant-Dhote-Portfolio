import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [["home", "Home"], ["about", "About"], ["skills", "Skills"], ["projects", "Projects"], ["experience", "Experience"], ["education", "Education"], ["contact", "Contact"]];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    [...LINKS.map(([id]) => id), "certifications"].forEach((id) => { const el = document.getElementById(id); el && io.observe(el); });
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onResize); };
  }, []);

  const current = active === "certifications" ? "education" : active;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070b1a]/95 backdrop-blur-xl transition-shadow ${scrolled || open ? "shadow-[0_8px_30px_-12px_rgba(0,0,0,.8)]" : ""}`}
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-display text-xl font-extrabold"><span className="grad-text">PD</span><span className="text-slate-200">.dev</span></a>
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {LINKS.map(([id, label]) => (
            <a key={id} href={`#${id}`} aria-current={current === id ? "true" : undefined}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:text-white ${current === id ? "bg-white/10 text-white ring-1 ring-white/15" : "text-slate-400"}`}>
              {label}
            </a>
          ))}
        </nav>
        <button className="rounded-lg p-2 text-slate-200 hover:bg-white/10 lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {/* Plain CSS transition (no framer height animation: it resets scroll position and cancels smooth scrolling) */}
      <nav
        id="mobile-menu" aria-label="Mobile"
        className={`grid transition-[grid-template-rows,opacity,visibility] duration-300 lg:hidden ${open ? "visible grid-rows-[1fr] opacity-100" : "invisible grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-1 px-5 pb-5">
            {LINKS.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 font-medium ${current === id ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5"}`}>{label}</a>
            ))}
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
