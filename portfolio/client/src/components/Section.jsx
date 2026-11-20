import { motion } from "framer-motion";

export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8">
      <Reveal>
        <h2 className="font-display text-3xl font-bold sm:text-4xl"><span className="grad-text">{title}</span></h2>
        {subtitle && <p className="mt-3 max-w-2xl text-slate-400">{subtitle}</p>}
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}
