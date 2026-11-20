import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Particles from "./components/Particles.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";
import Footer, { BackToTop } from "./components/Footer.jsx";

// Reliable smooth scroll for every #section link (navbar, mobile menu, buttons).
// Lands the section heading just below the fixed navbar, on any screen size.
function useAnchorScroll() {
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      const a = e.target.closest?.('a[href^="#"]');
      const id = a?.getAttribute("href").slice(1);
      const el = id && document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const top = id === "home" ? 0 : Math.max(0, el.getBoundingClientRect().top + window.scrollY - 8);
      window.scrollTo({ top, behavior: "smooth" });
      try { history.replaceState(null, "", `#${id}`); } catch {}
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}

export default function App() {
  useAnchorScroll();
  return (
    <MotionConfig reducedMotion="user">
      <Particles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </MotionConfig>
  );
}
